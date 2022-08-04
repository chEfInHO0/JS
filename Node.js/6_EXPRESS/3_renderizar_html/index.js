const express = require('express')
const path = require('path')
const app = express()
const baseFolder = path.join(__dirname,'templates')
const port = 3000

app.get('/',(req,res) => {
    res.sendFile(baseFolder+'/index.html')
})
app.listen(port, () => {
    console.log(`App is running on port ${port}`)
})