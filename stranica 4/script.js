let sectionOne = document.querySelector(".sectionOne");
let sectionTwo = document.querySelector(".sectionTwo");
let sectionThree = document.querySelector(".sectionThree");
let sectionFour = document.querySelector(".sectionFour");
let Back = document.querySelector(".Back")
let reg_btn = document.querySelector(".reg_btn")
let save_btn = document.querySelector(".save_btn")
let back_two = document.querySelector(".back_two")
let back_three = document.querySelector(".back_three")
let save_btn_popup = document.querySelector(".save_btn_popup")
let popup = document.querySelector(".popup")
let modal_btn = document.querySelector(".modal_btn")
let checkbox = document.querySelector(".checkbox")
let popup_two = document.querySelector(".popup_two")
let vratider = document.querySelector(".vratider")

let signbtn = document.querySelector(".signbtn")
let sign_in_form = document.querySelector(".sign_in_form")
var submit_btn = document.getElementById("submit_btn")





let middle_text_link1 = document.querySelectorAll(".middle_text_link1");
console.log(middle_text_link1);





middle_text_link1.forEach(function (i) {
    i.addEventListener('click', function() {
        sectionTwo.style.display = "flex";
        sectionOne.style.display = "none";
    });
  });

  Back.addEventListener("click", function(){
    sectionTwo.style.display = "none"
    sectionOne.style.display = "flex"
  })

  back_two.addEventListener("click", function(){
    sectionTwo.style.display ="flex"
    sectionThree.style.display ="none"
  })
  
  reg_btn.addEventListener("click", function(){
    sectionTwo.style.display = "none"
    sectionThree.style.display = "flex"
  })

  save_btn.addEventListener("click", function(){
    sectionThree.style.display = "none"
    sectionFour.style.display = "flex"
  })
  back_three.addEventListener("click", function(){
    sectionFour.style.display = "none"
    sectionThree.style.display = "flex"
  })
  save_btn_popup.addEventListener("click", function(){
    popup.style.display = "flex"
  })
  modal_btn.addEventListener("click", function(){
    popup.style.display = "none"
    sectionOne.style.display = "flex"
  })
  checkbox.addEventListener("click", function(){
    popup_two.style.display ="flex"
  })
  vratider.addEventListener("click", function(){
    popup_two.style.display = "none"
  })
  signbtn.addEventListener("click", function(){
    sign_in_form.style.display ="flex"
    sectionOne.style.display = "none"
  });
  submit_btn.addEventListener("click", function(){
    sign_in_form.style.display = "none"
    sectionOne.style.display = "flex"
  }
  
  );

 

    
  


   

        

  
    


