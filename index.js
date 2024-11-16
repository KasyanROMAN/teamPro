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
}