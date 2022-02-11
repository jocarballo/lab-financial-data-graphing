
    //http://api.coindesk.com/v1/bpi/historical/close.json
    // make a request to the API
    axios.get('http://api.coindesk.com/v1/bpi/historical/close.json')
        .then(response => {
            printChart(response.data)
            console.log(response.data)
        })
        .catch(err => {
            console.log(err)
            next(err)
        })

    

const printChart = data => {
    //console.log(data)
    const dailyData = data.bpi
    console.log(dailyData)
    // object with dates (keys)
    const stockDates = Object.keys(dailyData)
    console.log(stockDates)
    const stockPrices = stockDates.map(date => {
        return dailyData[date]
    })
    console.log('stock prices: ', stockPrices)

}


//drawing the chart
//canvas Object
let ctx = document.querySelector('#myChart').getContext('2d')


new Chart(ctx, {
    type: 'line', 
    data: {
        // x - axis
        labels: stockDates,
        datasets: [
            {
                label: 'Stock Chart',
                backGroundColor: 'rgb(255, 99, 132)',
				borderColor: 'rgb(255, 99, 132)',
                // y - axis
                data: stockPrices
            }
        ]
    }
})

