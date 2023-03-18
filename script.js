// 1.Які існують типи даних у Javascript?
// - строка, числа, булиан(истина/ложь), null, undefined

// 2.У чому різниця між == і ===?
// строгое и нестрогое сравнение.   не строгое сравнение (==) сравнивает не принмая во внимание тип данных, к примеру 10=="10";
// ну а строгое сравнение берет во внимание и строчное значение числа не будет равно числу

// 3.Що таке оператор?
// то что выполняет операцию над операндами, т.е. + - * / это операторы с помощию которых мы можем чтото делать с операндами (числами или постоянными)
// еще есть оператор присвоивания =



let firstName;

const name = prompt('enter YOUR NAME or exit the site by clicking the "cancel" button');
if (name === null) {
    prompt("enter YOUR NAME or exit the site by clicking the cancel button", "тут введи");
        if (name === null || name === ""){
         alert("Вы отменили ввод имени, я буду звать вас Загадкой!");
         firstName = `Загадка`;
        } 
        else {firstName = name;}
} else if (name === "") {
  alert("Имя не может быть пустым, я буду звать вас Загадкой!");
  firstName = `Загадка`;
} else {
  firstName = name;
}


let age;
while (true) {
  const ageInput = prompt("Введите свой возраст цифрами:");
  if (ageInput === null) {
    alert("Вы отменили ввод возраста!");
    break;
  } else if (ageInput === "" || isNaN(ageInput)) {
    const confirmInput = confirm("Введите ваш возраст цифрами или выйдите с помощью кнопки 'Отмена'!");
    if (!confirmInput) {
      break;
    }
  } else {
    age = Number(ageInput);
    break;
  }
}

alert(`${firstName} ваши введенные данные проверили, теперь переходим к действиям на основании возраста`);



if (age > 100) {
  alert('Да вы шутник как я погляжу');
} else if (age < 18) {
  alert('You are not allowed to visit this website.');
} else if (age >= 19 && age <= 22) {
  let result = confirm('Are you sure you want to continue?');
  if (result) {
    alert(`Welcome, ${firstName}`);
  } else {
    alert('You are not allowed to visit this website.');
  }
} else {
  alert(`Welcome, ${firstName}`);
}





