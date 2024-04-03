const isAdult = (name, age) => {
  if (age >= 18) {
    console.log("Hola " + name + " eres mayor de edad");
  } else {
    console.log("Hola " + name + " eres menor de edad");
  }
};
isAdultResult = isAdult("oscar", 13);

const number = (numberA, numberB) => {
  if (numberA > numberB) {
    console.log(numberA);
  } else {
    console.log(numberB);
  }
};
numberResult = number(2, 7);

const typeNumber = (numberC) => {
  if (numberC > 0) {
    console.log("postivo");
  } else if (numberC < 0) {
    console.log("negativo");
  } else if (numberC === 0) {
    console.log("cero");
  }
};
typeNumber(5);

//puedo poner numberA o tiene que ser numberC?

const grades = (numberD, numberE, numberF) => {
  const average = (numberD + numberE + numberF) / 3;

  if (average < 5) {
    console.log("Suspenso");
  } else if (average >= 5 && average <= 8) {
    console.log("Aprobado");
  } else if (average >= 8) {
    console.log("Matrícula de Honor");
  }
};
grades(9, 9, 9);

const biggerNumber = (numberG, numberH) => {
  if (numberG > numberH) {
    console.log(numberG);
  } else {
    console.log(numberH);
  }
};
biggerNumber(5, 7);

const oddDivisible = (numberA) => {
  if (numberA % 3 === 0) {
    console.log("Es divisible por 3");
  } else if (numberA % 5 === 0) {
    console.log("Es divisible por 5");
  } else if (numberA % 3 === 0 && numberA % 5 === 0) {
    console.log("Es divisible por 3 y por 5");
  } else {
    console.log(numberA);
  }
};
oddDivisible(15);

const pairNumber = (numberA) => {
  if (numberA % 2 === 0) {
    console.log("Es un número par");
  } else {
    console.log("Es un número impar");
  }
};
pairNumber(5);

const leapYear = (numberA) => {
  if ((numberA % 4 === 0 && !numberA % 100 === 0) || numberA % 400 === 0) {
    console.log("Es un año bisiesto");
  } else {
    console.log("No es un año bisiesto");
  }
};
leapYear(2023);

//Crea una función que reciba dos valores y los sume, la función debe sumar los valores aunque se los mandemos en formato string y SÓLO debe convertirlos a number si llegan como string.

const additionValue = (numberA, numberB) => {
  if (typeof numberA === "string") {
    numberA = Number(numberA);
  }
  if (typeof numberB === "string") {
    numberB = Number(numberB);
  }
  console.log(numberA + numberB);
};
additionValue("3", 3);
