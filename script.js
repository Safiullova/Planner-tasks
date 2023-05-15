        //получаю элементы и записываю в переменные
        let task = document.querySelector('.form__task');
        let taskList = document.querySelector('.list__task');
        const btnAdd = document.querySelector('.form__button');
        const btnClean = document.querySelector('.list__button');
        const radio = document.querySelector ('#yes');

let addListTasks = ''; // Грязная функция.

        btnAdd.addEventListener('click', () => { //вешаю событие "клик" на кнопку добавления задач, по клику сработает функция 
if (task.value != '') {    // Проверяю, чтобы поле ввода было заполнено и не создавались пустые задачи в списке.
    taskList.classList.remove('none'); // убираю класс none, а вместе с ним надпись "Нет задач"
    let taskNew = task.value; //Перезаписываю в новую переменную значение из inputa (Задачу)
    taskNew = taskNew.substr(0, 1).toUpperCase() + taskNew.substr(1)
        .toLowerCase(); //Перезаписываю в правильном регистре

                addListTasks = `<div class="NewTask">
            <p id="task">${taskNew}</p>
            <input type="checkbox" id="yes" value="no" />
        </div>` + addListTasks ;

        taskList.innerHTML = addListTasks;// создаю новую разметку в списке задач и передаю туда отредактированный текст задачи
    
            task.value = ""; // очищаю поле ввода задачи после клика
}
else {
    alert("Сначала напиши задачу")
    }
        })

        btnClean.addEventListener('click', () => { //вешаю событие "клик" на кнопку очистки списка задач, по клику сработает функция 
            addListTasks = `<p class="none">Нет задач</p>`; // создаю новую разметку
            taskList.innerHTML = addListTasks;
        })
