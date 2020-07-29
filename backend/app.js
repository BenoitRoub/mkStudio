const express = require('express')
const app = express()
const mongoose = require('mongoose')

mongoose.connect(
  "mongodb+srv://admin:oMtYellPBeb0EKZm@cluster0.hry5a.mongodb.net/Cluster0?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
  },
  () => console.log("connected to db")
);

const cookieParser = require('cookie-parser')
const bodyParser = require('body-parser')
app.use(cookieParser());
app.use(express.json())

app.use('/', (req, res, next) => {
    console.log(req.body)
    next()
})

const auth = require('./authentication/authenticate')
app.use(auth);

app.locals.isAuthenticated = (req, res, next) => {
  if(req.user) {  
    next()
    return 
  }
  res.sendStatus(401)
  return
}


var user = require('./routes/userRoutes')
app.use('/user', user)

app.get('/authent', app.locals.isAuthenticated, (req, res) => {
  res.json(req.user)
})


app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})  
