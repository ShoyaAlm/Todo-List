const objectiveIDDOM = document.querySelector('.objective-id')
const objectiveNameDOM = document.querySelector('.objective-name')
const objectiveDateDOM = document.querySelector(".objective-date")
const objectiveCompletedDOM = document.querySelector(".objective-completed")

// const id = new URLSearchParams(params).get('id')

// import axios from "../../axios"


const items = async () => {
  
    try {

        const fetchData = await fetch('/api/v1');
        const jsonData = await fetchData.json()

        // const { data: {Objectives} } = await axios.get(`/api/v1`)
        // const { name, date, completed} = Objectives

        for(let i=0 ; i < jsonData.objectives.length ; i++){
            
            const {name, date, completed} = jsonData.objectives[i]

            objectiveNameDOM.textContent = name
            objectiveDateDOM.textContent = date
            objectiveCompletedDOM.textContent = completed
        
        }
        

        // })
            // console.log(jsonData.objectives[0]);

        // objectives()

    } catch (error) {
        console.log(error);
    }
  
}

items()