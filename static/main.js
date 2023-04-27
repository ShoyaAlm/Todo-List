const taskDOM = document.querySelector('.tasks')
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

        const tasks = jsonData.objectives

        
        const allTasks = tasks.map((task) => {
            const {_id: objectiveID, name, date, completed} = task
            return (
                `<div class="single-task ${completed && 'task-completed'}">
                
                <h5><span><i class="far fa-check-circle"></i></span>${name}</h5>

                    <div class="task-links"
                        <!-- edit link -->
                        <a href="task.html?id=${objectiveID}"  class="edit-link">
                        <button type="button" class="delete-btn" data-id="${objectiveID}">

                        <!-- delete btn -->
                        <button type="button" class="delete-btn" data-id="${objectiveID}">
                        <i class="fas fa-trash"></i>
                        </button>
                    </div>


                </div>`
            
            
            )
        })
            .join('')
            taskDOM.innerHTML = allTasks








        console.log(tasks[0]);







    } catch (error) {
        console.log(error);
    }
  
}

items()