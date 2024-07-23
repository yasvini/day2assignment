function CardUI(props){
    //console.log("Props received in CardUI:", props);
    return(
        <div className="card" style={{width:"22rem",margin:"15px"}}>
        
        <div className="card-body" >
            <img src='./icon.jpg'alt='button' width={100} style={{border:"10px",borderRadius:"50px",display:'block',margin:'0 auto'}}/>
            <h1>{props.userfromarray}</h1>
            <h2>{props.user.branch}</h2>
            <h3>{props.user.year}</h3>
            <button type="button" class="btn btn-primary">Connect</button>
        </div>
        </div>
    );
}
export default CardUI
