
formDOM.addEventListener('submit', async (e) => {
    e.preventDefault();

    // const {name, date, completed} = objectiveInputDOM.value
    const newObjective = objectiveInputDOM.value
    
    const fetchData = await fetch('/api/v1');
    const jsonData = await fetchData.json()
    const objectives = jsonData.objectives

    try {
        
        // await axios.post('/api/v1', {name, date, completed})
        await fetch('/api/v1', {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ objectives: [...objectives, newObjective]})
        })
        .then(response => response.json())
        .then(json => console.log(json))
        
        items()
        objectiveInputDOM.value = ''

    } catch (error) {
        console.log(error);
    }

})
