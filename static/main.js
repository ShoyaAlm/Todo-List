
const objectiveDOM = document.querySelector('.objectives') || {}
const objectiveIDDOM = document.querySelector('.objective-id')
const objectiveNameDOM = document.querySelector('.objective-name')
const objectiveDateDOM = document.querySelector(".objective-date")
const objectiveCompletedDOM = document.querySelector(".objective-completed")


const nameInputDOM = document.querySelector('.name-input')
const dateInputDOM = document.querySelector('.date-input')
const completedInputDOM = document.querySelector('.completed-input')
const formDOM = document.querySelector('.objective-form')


const items = async () => {
  
    try {
        // const fetchData = await fetch('/api/v1');
        // const jsonData = await fetchData.json()

        // const objectives = jsonData.objectives

        const {
            data: {objectives},
        } = await axios.get('/api/v1')
        if (objectives.length < 1) {
            objectiveDOM.innerHTML = '<h5 class="empty-list">No objectives in your list</h5>'
            // loadingDOM.style.visibility = 'hidden'
            return
          }

        const allObjectives = objectives.map((objective) => {
            const {_id: objectiveID, name, date, completed} = objective
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

        objectiveDOM.innerHTML = allObjectives


    } catch (error) {
        objectiveDOM.innerHTML = `there seems to be an error, try again...`
        console.log(error);
    }
  
}

items()



formDOM.addEventListener('submit', async (e) => {
    
    e.preventDefault();

    const objectiveName = nameInputDOM.value
    const objectiveDate = dateInputDOM.value
    const objectiveCompleted = completedInputDOM.value

    const newObjective = {objectiveName, objectiveDate, objectiveCompleted}
    
    try {
        console.log(newObjective);
        await axios.post('/api/v1', {newObjective})
        
        items()
        nameInputDOM.value = ''
        dateInputDOM.value = ''
        completedInputDOM.value = ''
        
    } catch (error) {
        console.log(error);
    }
    
})




// console.log(result.response.data);

// axios({
//     method: "POST",
//     url: '/api/v1',
//     data: { newObjective },
//     validateStatus: (status) => {
//       return true; // I'm always returning true, you may want to do it depending on the status received
//     },
//   }).catch(error => {
//     console.log(error);
//   }).then(response => {
//       // this is now called!
//       console.log(response);
//   });