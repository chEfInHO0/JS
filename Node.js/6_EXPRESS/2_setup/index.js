import Express from "express";
const app = Express()
const port = 3000

app.get('/',(req,res) => {
    res.send('Ola mundo, meu primeiro uso do Express')
})
app.listen(port, () => {
    console.log(`App Express is running on port ${port}`)
})