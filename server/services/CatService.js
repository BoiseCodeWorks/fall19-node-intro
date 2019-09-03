

let _cats = [
    {
        _id: "1a7bT34fsfsfs",
        name: "Fluffy",
        age: 7
    },
    {
        _id: "j123hjgd78saa",
        name: "Garfield",
        age: 2
    }
]
export default class CatService {
    getOneCat(id) {
        let cat = _cats.find(c => c._id == id)
        return cat
    }
    editCat(id, editedCat) {
        _cats.find((cat, index) => {
            if (cat._id == id) {
                _cats.splice(index, 1, editedCat)
            }
        })
    }
    deleteCat(id) {
        _cats.find((cat, index) => {
            if (cat._id == id) {
                _cats.splice(index, 1)
            }
        })
    }
    getAll() {
        return _cats.map(cat => cat)
    }

    createCat(newCat) {
        _cats.push(newCat)
    }


}