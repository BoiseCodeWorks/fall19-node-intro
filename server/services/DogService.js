

let _dogs = [
    {
        _id: "1a7bT34fsfsfs",
        name: "Fido",
        age: 7
    },
    {
        _id: "j123hjgd78saa",
        name: "Odie",
        age: 2
    }
]
export default class DogService {
    getOneDog(id) {
        let dog = _dogs.find(c => c._id == id)
        return dog
    }
    editDog(id, editedDog) {
        _dogs.find((dog, index) => {
            if (dog._id == id) {
                _dogs.splice(index, 1, editedDog)
            }
        })
    }
    deleteDog(id) {
        _dogs.find((dog, index) => {
            if (dog._id == id) {
                _dogs.splice(index, 1)
            }
        })
    }
    getAll() {
        return _dogs.map(dog => dog)
    }

    createDog(newDog) {
        _dogs.push(newDog)
    }


}