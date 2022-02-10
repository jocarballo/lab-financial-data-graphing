
const getData = input => {

    //http://api.coindesk.com/v1/bpi/historical/close.json
    // make a request to the API
    axios.get('http://api.coindesk.com/v1/bpi/historical/close.json')
        .then(response => {
            console.log(response.data)
        })
        .catch(err => {
            console.log(err)
            next(err)
        })

    
}

getData();