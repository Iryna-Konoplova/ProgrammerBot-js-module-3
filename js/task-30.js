// Напиши функцию makeTask(data) которая принимает один параметр data -
// объект со следующими свойствами.

// text - текст задачи.
// category - категория задачи.
// priority - приоритет задачи.
// Функция должна составить и вернуть новый объект задачи, не изменяя
// напрямую параметр data.В новом объекте должно быть свойство completed,
// значение которого хранится в одноимённой локальной переменной.


function makeTask(data) {
  const completed = false;
  const category = 'Общее';
  const priority = 'Обычный';
  // Пиши код ниже этой строки
 const newData = {
   category,
   priority,
     ...data,
   completed,
    }
    
    return newData;
  // Пиши код выше этой строки
}


console.log(makeTask({}));
console.log(makeTask({ category: 'Домашнее', priority: 'Низкий', text: 'Вынести мусор' }));
console.log(makeTask({ category: 'Финансы', text: 'Забрать проценты' }));
console.log(makeTask({ priority: 'Низкий', text: 'Выбрать шампунь' }));
console.log(makeTask({ text: 'Купить хлеб' }));