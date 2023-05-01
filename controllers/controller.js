const Objective = require('../model/objective')

const getAllObjectives = async (req, res) => {

    try {
        const objectives = await Objective.find({})
        res.status(200).json({objectives: objectives})
    } catch (error) {
        res.status(500).json({msg: 'Error occured'})
    }


}

const getObjective = async (req, res) => {
    const {id} = req.params
    try {
        const objective = await Objective.findOne({_id:id})
        if(!objective){
            return res.status(404).json({msg: `no such objective with id ${id}`})
        }
        res.status(200).json({target: objective})
    } catch (error) {
        res.status(500).json({msg: error})
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
    const {id:id} = req.params

    try {
        
        const objective = await Objective.findOneAndDelete({_id:id})

        if(!objective){
            return res.status(404).json({msg: `No such objective was found with id ${id}`})
        }

        res.status(200).json({msg: 'objective was successfully deleted '})


    } catch (error) {
        res.status(400).json({msg: error})
    }
}



const updateObjective = async (req, res) => {
    const {id:id} = req.params
    
    try {
        
        const newObjective = await Objective.findOneAndUpdate({_id:id}, req.body, {
            new:true,
            runValidators:true,
        })

        if(!newObjective){
            return res.status(404).json({msg: `No such objective was found with id ${id}`})
        }
        
        res.status(200).json({objective: newObjective})

    } catch (error) {
        res.status(400).json({msg: error})
    }

}


module.exports = {
    getAllObjectives,
    getObjective,
    addObjective,
    deleteObjective,
    updateObjective
}