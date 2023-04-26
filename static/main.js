const objectiveIDDOM = document.querySelector('.objective-id')
const objectiveNameDOM = document.querySelector('.objective-name')
const objectiveDateDOM = document.querySelector(".objective-date")
const objectiveCompletedDOM = document.querySelector(".objective-completed")

const id = new URLSearchParams(params).get('id')

import axios from "axios"


const items = async () => {
  
    try {
        const { data: {objective} } = await axios.get(`/api/v1/${id}`)
        const { _id : objectiveID, name, date, completed} = objective

        // const objectives = objective.map((oneObjective) =>{

            objectiveNameDOM.value = name
            objectiveDateDOM.value = date
            objectiveCompletedDOM.value = completed

        // })

        // objectives()

    } catch (error) {
        console.log(error);
    }
  
}

items()