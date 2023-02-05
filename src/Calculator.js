import { useState } from "react";
import "./Calculator.css";
function Calculator() {



  const [input,setInput]= useState("");

   const handelClick= (e)=>{
    setInput(input.concat(e.target.name));

   }
   const Calculate=()=>{
    try{
      setInput(eval(input));
    } catch(error){
      setInput("Invalid Input")
    }
      
   }

   const clear = ()=>{setInput("")}
   const clr= ()=>{setInput(input.slice(0,-1))}
  return (
   
   
    <>
        <h2>CALCULATOR</h2>
    <div  className="main">
    
         <div className="form" style={{border:"1px solid black" ,width:"fit-content"}}>
          
         <input type="text"  value={input}/><br />
         
         <button name="7" onClick={handelClick}  >7</button>
         <button name="8" onClick={handelClick}  >8</button>
         <button  name="9" onClick={handelClick} >9</button>
         <button    onClick={clr}>C</button><br />
         <button name="4" onClick={handelClick} >4</button>
         <button name="5" onClick={handelClick} >5</button>
         <button name="6" onClick={handelClick} >6</button>
         <button name="-"  onClick={handelClick} >-</button><br/>
         <button name="1"  onClick={handelClick} >1</button>
         <button name="2"  onClick={handelClick} >2</button>
         <button name="3"  onClick={handelClick} >3</button>
         <button name="*"   onClick={handelClick} >X</button><br/>
         <button name="0"  onClick={handelClick} >0</button>
         <button name="." onClick={handelClick} >.</button>
         <button  name="/" onClick={handelClick} >/</button>
         <button name="+" onClick={handelClick} >+</button>
         <br />
         <button  id="clear"  onClick={clear}>CLEAR</button>
         
         <button id="eql"  onClick={Calculate} >=</button>
         
         </div>

         </div>
    </>
  );
}

export default Calculator;
