import CardUI from "./card";
function CardList(){
    const name="React";
    const college="SVECCW";
    const userobject={name1:"Yasaswini",branch:"AIDS",year:"3"};
    const users=["Scott Ayres","Richard Beeson","Jacob Hilpertsh..","stephanie Swe..","harrie potter","name6","name7","name8"]
    return (
        <div style={{display:'flex', flexWrap:'wrap'}}>{
            users.map((user,index) => (<CardUI key={index} program={name} col={college} user={userobject} userfromarray={user}/>))
        }
        </div>
    )
}
export default CardList;