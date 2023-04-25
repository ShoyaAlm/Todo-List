const Objectives = require('../model/objective')

const Home = () => {
    const objectives = Objectives
    
    return (
        <>
            {objectives.map((objective) => {
                return (
                    <div>
                        <h2>{objective.name}</h2>
                        <h3>{objective.date}</h3>
                    </div>
                )
            })}
        </>
    )
}

export default Home