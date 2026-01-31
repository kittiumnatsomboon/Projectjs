const express = require('express')
const app = express()
const port = 5000 || process.env.PORT
const cors = require('cors')

// อนุญาติให้อ่านข้อมูล Json
app.use(express.json());
// อนุญาติพอร์ต
app.use(cors(
    {origin: "http://localhost:5173/"}
))


// app router index
app.get('/', (req, res) => {
  res.send('Hello World!')
})

// port
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
