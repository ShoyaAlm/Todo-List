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
                `<div class="single-task">
                
                <h3 class="objective-name"><span><i></i></span>${name}</h3>
                <h4 class="objective-date"><span><i></i></span>${date}</h4>
                <h4 class="objective-completed">completed : <span><i></i></span>${completed}</h4>

                    <div class="task-links"
                        <!-- edit link -->
                        <a href="task.html?id=${objectiveID}"  class="edit-link" href="#">
                        <i class="fas fa-trash">edit</i>
                        </a>
                        
                        <!-- delete btn -->
                        <button type="button" class="delete-btn" data-id="${objectiveID}" href="#">
                        <i class="fas fa-trash">delete</i>
                        </button>
                    </div>


                </div>`
            )
        }).join('')

        taskDOM.innerHTML = allTasks



    } catch (error) {
        taskDOM.innerHTML = 
        '<h4>there seems to be an error, try again...</h4>'
    }
  
}

items()