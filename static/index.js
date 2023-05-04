
const objectiveIDDOM = document.querySelector('.objective-id')
const objectiveNameDOM = document.querySelector('.objective-name')
const objectiveDateDOM = document.querySelector(".objective-date")
const objectiveCompletedDOM = document.querySelector(".objective-completed")


const nameInputDOM = document.querySelector('.name-input')
const dateInputDOM = document.querySelector('.date-input')
const completedInputDOM = document.querySelector('.completed-input')
const formDOM = document.querySelector(".objective-form")



formDOM.addEventListener('submit', async (e) => {
        e.preventDefault();
        const objectiveName = nameInputDOM.value
        const objectiveDate = dateInputDOM.value
        const objectiveCompleted = completedInputDOM.value

        const newObjective = {objectiveName, objectiveDate, objectiveCompleted}
        console.log(newObjective);
        
        try {

            await axios.post('/api/v1', { newObjective })
            // nameInputDOM.value = ''
            // dateInputDOM.value = ''
            // completedInputDOM.value = ''
        
        } catch (error) {
            console.log(error.response.data);
        }

    })
