import F3 from "./fthree"
import { useState } from "react";

function F4(){
    //const reviews=[];
    const [review,setReview]=useState("");
    const [submittedReview,setSumbittedreview]=useState([]);
    const value=(event)=>{
        console.log("Input Changed");
        setReview(event.target.value);
        console.log(event.target.value);
    }
    const addReview=()=>{
        console.log("Adding Review");
        setSumbittedreview([review,...submittedReview]);
        setReview("");
        //document.getElementById("submittedReview").innerText = review;
    }
    //reviews.push({submittedReview});
    return(
        <div className="card" style={{margin:"20px"}}>
            <h1>Product Name</h1>
            <div className="card body">
                <h2>Titan Karishma Analog Champagne Dial Women's Watch</h2>
                <p>Dial Color: Champagne, Case Shape: Round, Dial Glass Material: Mineral<br/>Band Color: Gold, Band Material: Metal
                <br/>Watch Movement Type: Quartz, Watch Display Type: Analog
                <br/>Case Material: Brass, Case Diameter: 25 millimeters
                <br/>Water Resistance Depth: 30 meters
                <br/>24 Months manufacturer warranty on manufacturing defects</p>
                <b>$500.00</b>
                <div>
                    <F3/>
                </div>
            </div>
            <div className="card body">
                <h4>Product Specification</h4>
                <p>
                No room for disdain, when there is Champagne! Titan Karishma collection presents this exciting pour of champagne to all the lovely ladies. Housed stylishly in a round metal case is the sunray finished champagne analog dial paired splendidly with the golden toned metallic strap. Coming with gloss finished golden-toned case, the watch shows time with metal applique indices placed at five-minute intervals and three plain hands.</p>
            </div>
            <div classname="card body">
            <h4>Reviews</h4>
            <input type="text" placeholder="Type to Review" value={review} onChange={value} style={{width:"85rem"}}/>
            <button className="btn btn-dark"onClick={addReview}>Add Review</button>
            </div>
            <div className="card-body">
                <h5>Reviews</h5>
                {
                    
                    submittedReview.map((rev,index)=>(<div key={index}>Reviewer name<br/>{rev}</div>))
                }
            
            
            </div>
            
       
        </div>
    );

}
export default F4;