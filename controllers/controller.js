const Objective = require('../model/objective')

const getAllObjectives = async (req, res) => {

    try {
        const objectives = await Objective.find({})
        res.status(200).json({objectives: objectives})
    } catch (error) {
        res.status(500).json({msg: 'Error occured'})
    }


}



const addObjective = async (req, res) => {
    try {
        const objective = await Objective.create(req.body)
        // res.status(201).json({objective: [...Objective, objective]})
        res.status(201).json({objective})
    
    } catch (error) {
        res.status(500).json({msg: error})
    }

}



const deleteObjective = async (req, res) => {
    const {id:objectiveID} = req.params

    try {
        
        const objective = await Objective.findOneAndDelete({_id:objectiveID})

        if(!objective){
            return res.status(404).json({msg: `No such objective was found with id ${objectiveID}`})
        }

        res.status(200).json({msg: 'objective was successfully deleted '})


    } catch (error) {
        res.status(400).json({msg: error})
    }
}



const updateObjective = async (req, res) => {
    const {id:objectiveID} = req.params
    
    try {
        
        const newObjective = await Objective.findOneAndUpdate({_id:objectiveID}, req.body, {
            new:true,
            runValidators:true,
        })

        if(!newObjective){
            return res.status(404).json({msg: `No such objective was found with id ${objectiveID}`})
        }
        
        res.status(200).json({objective: newObjective})

    } catch (error) {
        res.status(400).json({msg: error})
    }

}


module.exports = {
    getAllObjectives,
    addObjective,
    deleteObjective,
    updateObjective
}