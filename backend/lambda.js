const mongoose = require('mongoose')
const app = require('./index');
const port = process.env.PORT || 5000;
require("dotenv").config();

const mongoURL = process.env.MONGO_URL
const connectWithRetry = () =>{
mongoose
    .connect(mongoURL)
    .then(()=> {
        server_status = 'online'
        
        console.log("Successfully connected to DB")})
    .catch((e)=> {
        console.log(e)
        server_status = 'offline'
        setTimeout(connectWithRetry, 5000)
    })
}
connectWithRetry()

app.listen(port, () => console.log(`Listening on port ${port}`))