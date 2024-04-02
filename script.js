
const isAdult = (name,age) =>{
    if (age >=18){
        console.log ('Hola ' + name + ' eres mayor de edad');
    }
    else{
        console.log ('Hola' + name + ' eres menor de edad');
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
numberResult = number (2,7)