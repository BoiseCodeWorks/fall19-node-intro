import express from 'express'
import DogService from '../services/DogService';

let _dogService = new DogService()

export default class DogController {
    constructor() {
        this.router = express.Router()
            .get('', this.getAll)
            .get('/:dogId', this.getOneDog)
            .post('', this.createDog)
            //NOTE the colon gives us the ability to bind a value from our url to a property on the req.params object
            // https:localhost:3000/api/dogs/1a7bT34fsfsfs
            // https:localhost:3000/api/dogs/1a7bT34fsfsfs
            .put('/:dogId', this.editDog)
            .delete('/:dogId', this.deleteDog)
    }

    getOneDog(req, res, next) {
        let id = req.params.dogId
        let dog = _dogService.getOneDog(id)
        if (!dog) {
            res.status(400).send("No such dog")
        }
        res.send(dog)
    }
    editDog(req, res, next) {
        let editedDog = req.body
        let id = req.params.dogId
        _dogService.editDog(id, editedDog)
        res.send("edited dog")
    }

    deleteDog(req, res, next) {
        //NOTE this dogId is now 1a7bT34fsfsfs
        let id = req.params.dogId
        _dogService.deleteDog(id)
        res.send("dog deleted")
    }

    getAll(req, res, next) {
        //NOTE request the array of dogs from the service
        let dogs = _dogService.getAll()
        //NOTE send the dogs back to the front end(where the request came from)
        res.send(dogs)
    }
    createDog(req, res, next) {
        let newDog = req.body
        _dogService.createDog(newDog)
        res.send("you added a dog.")
    }

}