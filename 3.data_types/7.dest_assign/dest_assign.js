// У нас есть объект:

// let user = {
//   name: "John",
//   years: 30
// };

// Напишите деструктурирующее присваивание, которое:
// свойство name присвоит в переменную name.
// свойство years присвоит в переменную age.
// свойство isAdmin присвоит в переменную isAdmin (false, если нет такого свойства)
// Пример переменных после вашего присваивания:

// let user = { name: "John", years: 30 };

// // ваш код должен быть с левой стороны:
// // ... = user

// alert( name ); // John
// alert( age ); // 30
// alert( isAdmin ); // false



let user = { name: "John", years: 30 };

let {name, years:age, isAdmin = false} = user;

alert(user);
alert( name ); 
alert( age ); 
alert( isAdmin );


// У нас есть объект salaries с зарплатами:

// let salaries = {
//   "John": 100,
//   "Pete": 300,
//   "Mary": 250
// };

// Создайте функцию topSalary(salaries), которая возвращает имя самого высокооплачиваемого сотрудника.
// Если объект salaries пустой, то нужно вернуть null.
// Если несколько высокооплачиваемых сотрудников, можно вернуть любого из них.
// P.S. Используйте Object.entries и деструктурирование, чтобы перебрать пары ключ/значение.

function topSalary(salaries) {
    let max = 0;
    let rich = null;
    for(let[name, money] of Object.entries(salaries)) {
        if (money > max) {
            max = money;
            rich = name;
        }
    }
return rich
}

let salaries = {
  "John": 100,
  "Pete": 300,
  "Mary": 250
};

alert(topSalary(salaries));