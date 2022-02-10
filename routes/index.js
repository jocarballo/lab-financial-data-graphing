const router = require("express").Router();
const axios = require('axios')

/* GET home page */
router.get("/", (req, res, next) => {
  axios.get('http://api.coindesk.com/v1/bpi/historical/close.json')
    .then(response => {
      const dataFromAPI = response.data
      console.log(response.data)
      res.render('index');
    })
    .catch(err => next(err))
 
});

module.exports = router;
