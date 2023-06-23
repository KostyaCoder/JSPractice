"use strict";

// Базовый уровень:
// 1 Вычислить сумму первых N элементов последовательности . параметр N задает пользователь
// (например n=4 , 1+2+3+4)
let res = 0;
const n = prompt("input n");
// const n = 4;
for (let i = 1; i <= n; i++) {
  res += i;
}

//n2.1 Создать объект client который содержит следующие свойства: имя, фамилию, пол, контактные данные, id., номер кредитной карты, уровень карты.
class Contact {
  constructor(address, email, telNumber) {
    this.address = address;
    this.email = email;
    this.telNumber = telNumber;
  }
}

class Client {
  constructor(firstName, lastName, male, contacts, id, numberCard, levelCard) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.male = male;
    this.contacts = contacts;
    this.id = id;
    this.numberCard = numberCard;
    this.levelCard = levelCard;
  }
}

// 2.2 Создать объект банка у которого есть название и адрес.
class Bank {
  constructor(name, address) {
    this.name = name;
    this.address = address;
  }
}

// 2.3 Добавить банку свойство cardLevels, значением которого будет Мапа, связывающая возможные уровни карточки в этом банке с обьектами, в которорых хранятся свойства скидка, кешбек, кредитный лимит
class Card {
  constructor(discount, cashback, creditLimit) {
    this.discount = discount;
    this.cashback = cashback;
    this.creditLimit = creditLimit;
  }
}

const mapLevelsCard = new Map();
mapLevelsCard.set("Gold", new Card(20, 10, 5_000_000));
mapLevelsCard.set("Silver", new Card(10, 5, 3_000_000));
mapLevelsCard.set("Bronze", new Card(5, 2, 1_000_000));

// 2.4 Реализовать функцию вывода на экран всей информации о клиенте, вкрлючая данные о скидке кредитном лимите и тд.
function consoleInfoClient(client) {
  for (const property in client) {
    if (typeof client[property] === "object") {
      consoleInfoClient(client[property]);
    } else {
      console.log(`${property}: ${client[property]}`);
    }
  }
  return;
}

const client1 = new Client(
  "Vova",
  "Vovan",
  "man",
  new Contact("street", "1352@gmail.com", 1235689),
  23,
  414123456745,
  "Gold"
);
consoleInfoClient(client1);

// 3.1 Создать числовой массив и проинициализировать его из 20+ элементов.
const arrNumbers = [];
for (let i = 0; i < 25; i++) {
  const sign = Math.random() < 0.5 ? -1 : 1;
  arrNumbers.push(Math.floor(Math.random() * 100 * sign));
}
arrNumbers[3] = 0;
arrNumbers[12] = 0;

// 3.2 Вывести элементы с четными индексами
const arrEven = arrNumbers.filter((x) => x % 2 === 0);
console.log("-------------");
arrEven.forEach((x) => console.log(x));

// 3.3 Вывести только нечетные элементы (четные числа делятся на 2 без остатка)
console.log("-------------");
const arrOdd = arrNumbers.filter((x) => x % 2 !== 0);
arrOdd.forEach((x) => console.log(x));

// 3.4 Вывести индексы элементов, равных нулю ( если таковых нет то добавить 1-2 для проверки)
console.log("-------------");
arrEven.forEach((x, i) => {
  if (x === 0) {
    console.log(i);
  }
});

// 3.5 Подсчитать количество отрицательных чисел в массиве
console.log("-------------");
let countNegativ = 0;
for (const value of arrNumbers) {
  if (value < 0) {
    countNegativ++;
  }
}
console.log(`countNegativ: ${countNegativ}`);

// 4 Создать классы:
// - Книга (автор, название, год издания, издательство)
// - Электронная версия книги (автор, название, год издания, издательство, формат, электронный номер)
class Book {
  constructor(author, name, yearOfPub, publisher) {
    this.author = author;
    this.name = name;
    this.yearOfPub = yearOfPub;
    this.publisher = publisher;
  }
}

class ElectroBook extends Book {
  constructor(author, name, yearOfPub, publisher, format, elektroNumber) {
    super(author, name, yearOfPub, publisher);
    this.format = format;
    this.elektroNumber = elektroNumber;
  }
}

// 5
// Требуется написать функцию, выводящую в консоль числа от 1 до n, где n — это целое число, которая функция принимает в качестве параметра, с такими условиями:
// вывод fizzbuzz вместо чисел, кратных как 3, так и 5.
// вывод fizz вместо чисел, кратных 3;
// вывод buzz вместо чисел, кратных 5;
function consoleNameNumber(n) {
  if (!Number.isInteger(n)) {
    throw new RangeError("not integer");
  }

  for (let i = 1; i <= n; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("fizzbuzz");
    } else if (i % 3 === 0) {
      console.log("fizz");
    } else if (i % 5 === 0) {
      console.log("buzz");
    } else {
      console.log(i);
    }
  }
}

console.log("-------------");
consoleNameNumber(16);

// 6
// С сервера передается обьект, имеющий следующую структуру:
const serverResponse = {
  data: {
    data: [
      {
        id: 0,
        name: "John",
        lastName: "Doe",
      },
      {
        id: 1,
        name: "Jane",
        lastName: "Doe",
      },
      {
        id: 2,
        name: "Admin",
        lastName: "Tiranovich",
      },
      {
        id: 3,
        name: "User",
        lastName: "Undefinovich",
      },
    ],
  },
};

// С помощью деструктуризации:
// - создать переменную users на основании массива в обьекте serverResponse
// - создать отдельные переменные для 3 и 4 пользователя
const {
  data: { data: users },
} = serverResponse;
