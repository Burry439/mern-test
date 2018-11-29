const express = require("express")
const mongoose = require("mongoose")
const bodyParser = require("body-parser")
const path = require("path")

const app = express()

app.use(bodyParser.json())

const db = require("./config/keys").mongoURI;

mongoose.connect(db)
.then( ( )=> { console.log(`connected to ${db}`)})
.catch(err => console.log(err))



const items = require('./routes/api/items')
app.use("/api/items",items)

if(process.env.NODE_ENV == 'production')
{
    app.use(express.static('build'))


    app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname, 'build/index.html'));
      });
}


const port = process.env.PORT || 5000


app.listen(port, () => console.log(`server started on ${port}`))