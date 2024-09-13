import * as resolvers from './resolvers.js'
import express from 'express'
import cors from 'cors'


const app = express()
app.use(cors())
const port = 3000

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/getData', resolvers.getData);
// app.post('/createCampaign', resolvers.addCampaign);
// app.delete('/deleteCampaign/:name', resolvers.deleteCampaign)
//
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})