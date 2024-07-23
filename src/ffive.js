function F5(){
    const reviewer=["Ram","ravan","krishna"]
    const review=["ai is far more dangerous","it replaces humans","it makes people lazy"]
    return (
        <div>
            <h4>REVIEWS</h4>
            <ul>
                {reviewer.map((i,index)=>(
                    <li key={index}>
                        {i}<br/>{review[index]}
                    </li>
                ))}
            </ul>
        </div>
    )

}
export default F5;