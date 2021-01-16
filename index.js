const express = require('express')
const app = express()
const port = 4000

//for req.body
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: true}));


const ActivateRoutes = require("./routes/index")

ActivateRoutes(app)



app.listen(port, () => {
  console.log(`node is running at http://localhost:${port}`)
})

//for use html in node js
app.set('view engine', 'html')
app.engine('html', require('ejs').renderFile);
app.use(express.static(__dirname + '/public'));




