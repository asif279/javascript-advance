class Parents{
    constructor(){

        this.fatherName = 'swechers';

    }
}


class Child extends Parents{
    constructor(name){
        super();
        this.name =name;
    }
    getFullName(){
        return this.name + " " + this.fatherName;
    }
}
 
const baby = new Child('Arnold');
const baby1 = new Child('tom');
console.log(baby.getFullName());
console.log(baby1.getFullName());