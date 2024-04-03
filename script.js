
const isAdult = (name,age) =>{
    if (age >=18){
        console.log ('Hola ' + name + ' eres mayor de edad');
    }
    else{
        console.log ('Hola ' + name + ' eres menor de edad');
    }
}
isAdultResult = isAdult ('oscar', 13);

const number = (numberA, numberB) =>{
    if (numberA>numberB){
        console.log (numberA)
    }
    else{
        console.log (numberB)
    }
}
numberResult = number (2,7);

const typeNumber = (numberC) =>{
    if (numberC>0){
        console.log ('postivo')
    }
    else if (numberC<0){
        console.log ('negativo')
    }
    else if (numberC===0){
        console.log ('cero')
    }
}
typeNumberResult = typeNumber (5);

//puedo poner numberA o tiene que ser numberC?

const grades = (numberD, numberE, numberF) =>{
    const average=(numberD+numberE+numberF) / 3;

    if (average<5){
        console.log ('Suspenso')
    }
    else if (average>=5){
        console.log ('Aprobado')
    }
    else if (average>=8){
        console.log ('Matrícula de Honor')
    }
}
gradesResult = grades (9, 9, 9);

//por que no me sale MH?

const biggerNumber = (numberG, numberH, numberI) =>{
    if (numberG>numberH && numberI){
        console.log (numberG)
    }
    else{
        console.log (numberH && numberI)
    }

}
biggerNumberResult = biggerNumber (5,7,2);

//    if (numberG>numberI){
// console.log (numberG)
  //  }
    //else{
   // console.log (numberI)
//} 

