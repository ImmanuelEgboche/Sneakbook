const app = require("./server")
const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Now running on port ${port}`)
})

app.get('/', (req, res) => {
    res.send('is this working ')
})