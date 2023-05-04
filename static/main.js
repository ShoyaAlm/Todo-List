
const objectiveElement = document.querySelector("div.objectives");
const objectiveDOM = objectiveElement ? objectiveElement : {};


const objectiveIDDOM = document.querySelector('.objective-id')
const objectiveNameDOM = document.querySelector('.objective-name')
const objectiveDateDOM = document.querySelector(".objective-date")
const objectiveCompletedDOM = document.querySelector(".objective-completed")


const nameInputDOM = document.querySelector('.name-input')
const dateInputDOM = document.querySelector('.date-input')
const completedInputDOM = document.querySelector('.completed-input')
const formDOM = document.querySelector(".objective-form")


const items = async () => {
  
    try {
        const {
            data: {objectives},
        } = await axios.get('/api/v1')
        if (objectives.length < 1) {
            objectiveDOM.innerHTML = '<h5 class="empty-list">No objectives in your list</h5>'
            return
          }

        const allObjectives = objectives.map((objective) => {
            const {_id: objectiveID, name, date, completed} = objective
            return (
                `<div class="single-task">
                
                <h3 class="objective-name"><span><i></i></span>${name}</h3>
                <h4 class="objective-date"><span><i></i></span>${date}</h4>
                <h4 class="objective-completed">completed : <span><i></i></span>${completed}</h4>
                <p class="objective-id">${objectiveID}</p>

                    <div class="task-links"
                        <!-- edit link -->
                        <a href="objective.html?id=${objectiveID}"  class="edit-link">
                        <i class="fas fa-edit">edit</i>
                        </a>
                        
                        <!-- delete btn -->
                        <button type="button" class="delete-btn" data-id="${objectiveID}">
                        <i class="fas fa-trash">delete</i>
                        </button>
                        
                        
                    </div>


                </div>`
            )
        }).join('')

        objectiveDOM.innerHTML = allObjectives


    } catch (error) {
        objectiveDOM.innerHTML = `there seems to be an error, try again...`
        console.log(error);
    }
  
}

items()




console.log(objectiveDOM);


if (typeof objectiveDOM.addEventListener === "function") {
    objectiveDOM.addEventListener("click", async (e) => {
        const el = e.target
        if (el.parentElement.classList.contains('delete-btn')) {
          const id = el.parentElement.dataset.id
          try {
            await axios.delete(`/api/v1/${id}`)
            items()
          } catch (error) {
            console.log(error)
          }
        }
      // ... your event listener code here
    });
  }


// form


    // formDOM.addEventListener('submit', async (e) => {
    //     e.preventDefault();
    //     const objectiveName = nameInputDOM.value
    //     const objectiveDate = dateInputDOM.value
    //     const objectiveCompleted = completedInputDOM.value

    //     const newObjective = {objectiveName, objectiveDate, objectiveCompleted}
    //     console.log(newObjective);
        
    //     try {

    //         const result = await axios.post('/api/v1', { newObjective })
    //         console.log(result);
    //         items()
    //         nameInputDOM.value = ''
    //         dateInputDOM.value = ''
    //         completedInputDOM.value = ''
        
    //     } catch (error) {
    //         console.log(error);
    //     }

    // })
