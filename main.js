let menu = document.querySelector(".menu-icon");
let navbar = document.querySelector(".navbar");

menu.onclick = () => {
    navbar.classList.toggle("open-menu");
    menu.classList.toggle("move");
};
window.onscroll = () =>{
    navbar.classList.remove("open-menu");
    menu.classList.remove("move");

}

//Reviews swiper
var swiper = new Swiper(".reviews-content", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: true,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });


  function validate() {
   let name =  document.querySelector(".name");
   let email =  document.querySelector(".email");
   let msg =  document.querySelector(".message");
   let sendBtn =  document.querySelector(".send-btn"); 

   sendBtn.addEventListener("click", (e) => {
    e.preventDefault();
    if (name.value == "" || email.value =="" || msg.value == ""){
        emptyerror();
    } else{
        sendemail(name.value, email.value, msg.value);
        success();
    }
   })
  }
validate();
function sendemail(name,email,msg){
    emailjs.send("service_k70rsep","template_n9kj2fs",{
        to_name: name,
        from_name: email,
        message: msg,
        });
}


function emptyerror() {
    swal({
        title: "Oh No....",
        text: "Fields cannot be empty!",
        icon: "error",
      });
}
function success() {
    swal({
        title: "Email sent successfully",
        text: "We try to reply in 24 hours",
        icon: "success",
      });
}

let header = document.querySelector("header")
window.addEventListener("scroll", () => {
    header.classList.toggle("header-active", window.scrollY> 0);
});


//SCROLL TOP
let scrollTop = document.querySelector(".scroll-top")
window.addEventListener("scroll", () => {
    scrollTop.classList.toggle("scroll-active", window.scrollY >= 400);
})