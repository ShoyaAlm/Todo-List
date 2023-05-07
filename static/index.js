// document.addEventListener('DOMContentLoaded', () => {
// })

const nameInputDOM = document.querySelector('.name-input')
const dateInputDOM = document.querySelector('.date-input')
const completedInputDOM = document.querySelector('.completed-input')
const formDOM = document.querySelector(".objective-form")

console.log(formDOM);

formDOM.addEventListener('submit', async (e) => {
  e.preventDefault();
  const objectiveName = nameInputDOM.value
  const objectiveDate = dateInputDOM.value
  const objectiveCompleted = completedInputDOM.value

  const newObjective = {objectiveName, objectiveDate, objectiveCompleted}
  console.log(newObjective);

  try {
    const result = await axios.post('/api/v1', { newObjective })
    console.log(result);
    nameInputDOM.value = ''
    dateInputDOM.value = ''
    completedInputDOM.value = ''

  } catch (error) {
    console.log(error);
  }

})
      
      
      // const result = await axios({
      //     data: {newObjective},
      //     method: 'POST',
      //     url: `/api/v1`, 
      //     headers: {
      //       'Authorization': '',
      //       'Content-Type': '',
      //     },
      //   });
      //   let data = result.data
      //   console.log(data);
      
      // nameInputDOM.value = ''
      // dateInputDOM.value = ''
      // completedInputDOM.value = ''


    // this GET method works pretty well

    // axios.get('/api/v1')
    //             .then((getResponse) => {
    //                 console.log("GET Response")
    //                 console.log(getResponse.data);
    //                 data = getResponse.data;
    //               })
    //               .catch(function (error) {
    //                 console.log(error);
    //               });