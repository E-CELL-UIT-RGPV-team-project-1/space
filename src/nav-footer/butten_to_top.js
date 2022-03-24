import React from "react";
import {useEffect, useState} from "react";
import "../App.css";

function Button_top() {
   const [backToTopButton, setBackToTopButton] = useState(false);

   useEffect(() => {
       window.addEventListener("scroll", () => {
           if(window.scrollY > 100){
               setBackToTopButton(true)
           }
           else{
               setBackToTopButton(false)
           }
       })
   }, [])

   const scrollup =() =>{
       window.scrollTo({
           top :0,
           behavior: "smooth"
       })
   }

   return <div class="scroll-up-button" className="button_containent">
       {backToTopButton &&(
           <div style={{
               position: "fixed",
               bottom: 50,
               right : 50,
               height:50,
               width: 50,
               cursor:"pointer"
           }}
           onClick= {scrollup}> <img 
           style={{
            position: "fixed",
            bottom: 50,
            right : 50,
            height:70,
            width: 60,
            
        }}
            src={require("../img/rocket.png")} alt="" /> </div>
       )}
   </div>

}
 
export default Button_top;