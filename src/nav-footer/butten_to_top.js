import React from "react";
import {useEffect, useState} from "react";

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

   return <div className="button_containent">
       {backToTopButton &&(
           <button style={{
               position: "fixed",
               bottom: 50,
               right : 50,
               height:50,
               width: 50,
               backgroundColor:"blue"

           }}
           onClick= {scrollup}>^</button>
       )}
   </div>

}
 
export default Button_top;