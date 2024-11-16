class Person{
    name ='Danya'
    age = 12

    getData(){
        console.log(this.name,this.age)
    }
checkage(){
    if(this.age > 18){
        console.log('Взрослый человек')
    }
    else{
        console.log('Маленький человек')
    }

}
gettype(){
    console.log(typeof this.name, typeof this.age)
}
countStr(){
    console.log(this.name.length)
}
getNumberBetween(){
    for(let i = 10; i < 21; i++){
        console.log()
    }
}
onlyname(){
    console.log(this.name)
}
onlyage(){
    console.log(this.age)
}
}
let a = new Person()
a.checkage()
a.countStr()
a.getData()
a.getNumberBetween()
a.gettype()
