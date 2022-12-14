const express = require('express')
const app = express()
const router = express.Router()
const path = require('path')
const bodyParser = require('body-parser');



router.get('/', (req, res) => {
   
    res.sendFile(path.join(__dirname,'../../FrontEnd/system.html'));

    
  })


router.post('/change-pass', (req, res) => {
    data =req.body
    console.log(req.body)
  if (1) {
    res.json({
      error: false,
      message: "Password has been changed",
    });
  } else {
    res.json({
      error: true,
      message: "An error occured",
    });
  }
})


router.post('/reset', (req, res) => {
  if (0) {
    res.json({
      error: false,
      message: "Configuration has been reset",
    });
  } else {
    res.json({
      error: true,
      message: "An error occured",
    });
  }
})

router.post('/restart-services', (req, res) => {
  if (0) {
    res.json({
      error: false,
      message: "Configuration has been reset",
    });
  } else {
    res.json({
      error: true,
      message: "An error occured",
    });
  }
})


module.exports = router;