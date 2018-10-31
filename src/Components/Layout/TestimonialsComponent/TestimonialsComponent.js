import React from 'react';
import './TestimonialsComponent.css';

const testimonialscomponent = (props) => (
    <div class="testimonialsComponent">
    <div id="testimonialsHeader">
        <h1>What Parents Are Saying</h1>
    </div>
        <div class="left-arrow" onclick="plusDivs(-1)"></div>
        {/* &#10094; */}
        <div class="right-arrow" onclick="plusDivs(1)"></div>
        {/* &#10095; */}
        {/* <span class="w3-badge demo w3-border w3-transparent w3-hover-white" onclick="currentDiv(1)"></span>
        <span class="w3-badge demo w3-border w3-transparent w3-hover-white" onclick="currentDiv(2)"></span> */}
        <p class="mySlides">"I have an infant who has received amazing (like the name says!) social development and TLC at this in-home childcare.  I agree with the other reviewer on all these things. The owners/staff, Nancy and Veneta, a tag team of sisters in the profession for almost two decades now, do their work with a lot of heart, mainly because to them, this isn't just a job. The interior is a bit cramped but they do a lot with the space they do have, and the backyard is fairly large, with many opportunities to mobile kids to run around and play games."<br /><br /><br /><b class="mySlidesReviewer">Mytoan N. <span> - Amazing Kids Christian Child Care Parent</span></b></p>
        {/* <p class="mySlides">"My daughter goes to Amazing Kids Christian Childcare and she is happy all the time at the childcare. Nancy and Veneta are so sweet and caring! They also know how to teach the kids good habits as they grow. I love that the childcare is clean, tidy and well organized with lots of toys and books, make the kids busy all the time. The price is also very affordable.  I can not recommend this childcare enough."<br/><br/><b class="mySlidesReviewer">Thao L. <span> -Amazing Kids Christian Child Care Parent</span></b></p> */}
                     {/* <script>
             var slideIndex = 1;
             showDivs(slideIndex);
             
             function plusDivs(n) {
               showDivs(slideIndex += n);
             }
             
             function currentDiv(n) {
               showDivs(slideIndex = n);
             }
             
             function showDivs(n) {
               var i;
               var x = document.getElementsByClassName("mySlides");
               var dots = document.getElementsByClassName("demo");
               if (n > x.length) {slideIndex = 1}    
               if (n < 1) {slideIndex = x.length}
               for (i = 0; i < x.length; i++) {
                  x[i].style.display = "none";  
               }
               for (i = 0; i < dots.length; i++) {
                  dots[i].className = dots[i].className.replace(" w3-white", "");
               }
               x[slideIndex-1].style.display = "block";  
               dots[slideIndex-1].className += " w3-white";
             }


             window.onscroll = function() {myFunction()};

             </script> */}
      </div>
);

export default testimonialscomponent;