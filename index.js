const express = require('express')
const app = express()
const port = 3000

// app.get('/', (req, res) => {
//     res.send('Hello World!')
// })

app.use(express.static('public'))

app.listen(port, () => {
    console.log(`Example App listening on port ${port}`)
})