const Objectives = require('../model/objective')

const ShowCase = () => {
    
    Objectives.find().forEach((objective) => {
        return (
            <div>
                <h2>{objective.name}</h2>
                <h3>{objective.date}</h3>
            </div>
        )
    })
    
    
    //Where User is you mongoose user model
    // Objectives.find({} , (err, objectives) => {
    //     if(err){
    //         console.log(err);
    //     }

    //     objectives.map((objective) => {
    //         return (
                // <div>
                //     <h2>{objective.name}</h2>
                //     <h3>{objective.date}</h3>
                // </div>
    //         )
    //     })
    // })



}

export default ShowCase