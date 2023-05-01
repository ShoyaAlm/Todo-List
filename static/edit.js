
let nameInputDOM = document.querySelector('.name-input')
let dateInputDOM = document.querySelector('.date-input')
let completedInputDOM = document.querySelector('.completed-input')

const editFormDOM = document.querySelector('.objective-form-edit')
const submitButtonDOM = document.querySelector('.submit-button')

const params = window.location.search
const id = new URLSearchParams(params).get('id')

const showObjective = async () => {

    try {
        const { data: objective } = await axios.get(`/api/v1/${id}`)

        console.log(objective);
        console.log(id);
        const {name, date, completed} = objective.target

        nameInputDOM.value = name
        dateInputDOM.value = date,
        completedInputDOM.value = completed


    } catch (error) {
        console.log(error);
    }

}

showObjective()


editFormDOM.addEventListener('submit', async (e) => {

    e.preventDefault()

    const objectiveName = nameInputDOM.value
    const objectiveDate = dateInputDOM.value
    const objectiveCompleted = completedInputDOM.value



    try {
      const { data : { objective } } =  await axios.patch(`/api/v1/${id}`, {
        name: objectiveName,
        date: objectiveDate,
        completed: objectiveCompleted
      })

      const {name, date, completed} = objective

      nameInputDOM.value = name
      dateInputDOM.value = date
      completedInputDOM = completed


    } catch (error) {
        console.log(error);
    }



})