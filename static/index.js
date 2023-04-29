// const nameInputDOM = document.querySelector('.name-input')
// const dateInputDOM = document.querySelector('.date-input')
// const completedInputDOM = document.querySelector('.completed-input')
// const formDOM = document.querySelector('.objective-form')
 


// formDOM.addEventListener('submit', async (e) => {
//     e.preventDefault();

//     const objectiveName = nameInputDOM.value
//     const objectiveDate = dateInputDOM.value
//     const objectiveCompleted = completedInputDOM.value

//     const newObjective = {objectiveName, objectiveDate, objectiveCompleted}
    
//     try {
        
//         await axios.post('/api/v1', {newObjective})
//         items()
//         objectiveInputDOM.value = ''
        
//     } catch (error) {
//         console.log(error);
//     }
    
// })



// const fetchData = await fetch('/api/v1');
// const jsonData = await fetchData.json()
// const objectives = jsonData.objectives


// await fetch('/api/v1', {
//     method: "POST",
//     headers: {
//         'Accept': 'application/json',
//         'Content-Type': 'application/json'
//     },
//     body: JSON.stringify({ objectives: [...objectives, newObjective]})
// })
// .then(response => response.json())
// .then(json => console.log(json))
