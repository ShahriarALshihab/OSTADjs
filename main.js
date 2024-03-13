class parent {
    constructor(name){
        this.name=name
    }

    getSeparator(){
        return '-'
    }
}

class child extends parent{
    constructor(name, age){
        super(name)
        this.age=age
    }

    details(){
        return this.name + super.getSeparator() + this.age
    }
}

const obj= new child('Abul', 34)

console.log(obj.name)
console.log(obj.details())

