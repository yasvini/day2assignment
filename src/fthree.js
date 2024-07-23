import {useEffect,useState} from "react"

function F3(){
    //const count=0;
    const [count,setCount]=useState(0);
    useEffect(()=>{
        //setCount(3);
        console.log("use effect is called");},[]);
    const increment=()=>{
        setCount(count+1);
    }
    const decrement=()=>{
        setCount(count-1);
    }
    const addtocart=()=>{
        setCount(1);
    }
  

    
    return(
        <div>
            {(count===0)?
            <button className="btn btn-dark" onClick={addtocart}>Add to cart</button>
            :
            <div style={{display:'flex'}}>
            <button className="btn btn-dark" onClick={increment}>+</button>
            <h1>{count}</h1>
            <button className="btn btn-dark" onClick={decrement}>-</button>
            </div>
            }
            </div>
    );
}
export default F3;