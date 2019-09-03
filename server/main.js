//NOTE this is where the server actually starts
import express from 'express'
const port = 3000;
import bp from 'body-parser'

//NOTE this creates the express server
let server = express()

server.use(bp.urlencoded({ extended: true }))
server.use(bp.json())

//NOTE register routes
import CatController from './controllers/CatController';
server.use('/api/cats', new CatController().router)
import DogController from './controllers/DogController';
server.use('/api/dogs', new DogController().router)




server.get('/', (req, res, next) => {
    console.log("I Have been Requested")
    res.send('<h1>Hello World</h1>')
    //next()
})











//default route
server.use((req, res, next) => {
    console.log("I Have been Requested")
    res.status(404).send('<img src="https://http.cat/404" />')
    //next()
})



server.listen(port, () => {
    console.log(`Server is running on port: ${port}, you better go catch it`);

})