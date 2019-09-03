import express from 'express'
import CatService from '../services/CatService';

let _catService = new CatService()

export default class CatController {
    constructor() {
        this.router = express.Router()
            .get('', this.getAll)
            .get('/:catId', this.getOneCat)
            .post('', this.createCat)
            //NOTE the colon gives us the ability to bind a value from our url to a property on the req.params object
            // https:localhost:3000/api/cats/1a7bT34fsfsfs
            // https:localhost:3000/api/cats/1a7bT34fsfsfs
            .put('/:catId', this.editCat)
            .delete('/:catId', this.deleteCat)
    }

    getOneCat(req, res, next) {
        let id = req.params.catId
        let cat = _catService.getOneCat(id)
        if (!cat) {
            res.status(400).send("No such cat")
        }
        res.send(cat)
    }
    editCat(req, res, next) {
        let editedCat = req.body
        let id = req.params.catId
        _catService.editCat(id, editedCat)
        res.send("edited cat")
    }

    deleteCat(req, res, next) {
        //NOTE this catId is now 1a7bT34fsfsfs
        let id = req.params.catId
        _catService.deleteCat(id)
        res.send("cat deleted")
    }

    getAll(req, res, next) {
        //NOTE request the array of cats from the service
        let cats = _catService.getAll()
        //NOTE send the cats back to the front end(where the request came from)
        res.send(cats)
    }
    createCat(req, res, next) {
        let newCat = req.body
        _catService.createCat(newCat)
        res.send("you added a cat.")
    }

}