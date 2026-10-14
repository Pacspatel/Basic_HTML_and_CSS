
/* This function gets the tasks from localStorage */
function get_todos() {
    /* This creates an array of tasks */
    var todos = new Array();

    /* Get the saved tasks from browser storage */
    var todos_str = localStorage.getItem('todo');

    /* Convert the saved JSON string into a JavaScript array */
    if (todos_str !== null) {
        todos = JSON.parse(todos_str);
    }

    return todos;
}

/* This function adds a new task */
function add() {
    /* Get the task entered by the user */
    var task = document.getElementById('task').value;

    /* Do not add an empty task */
    if (task.trim() === "") {
        return false;
    }

    var todos = get_todos();

    /* Add the new task to the array */
    todos.push(task);

    /* Save the tasks as a JSON string */
    localStorage.setItem('todo', JSON.stringify(todos));

    /* Clear the input box */
    document.getElementById('task').value = "";

    /* Display the updated task list */
    show();

    return false;
}

/* This function displays the tasks */
function show() {
    var todos = get_todos();

    /* Create an unordered list */
    var html = '<ul>';

    /* Display each task */
    for (var i = 0; i < todos.length; i++) {
        html += '<li>' +
            todos[i] +
            ' <button class="remove" id="' + i + '">x</button>' +
            '</li>';
    }

    html += '</ul>';

    /* Show the tasks on the page */
    document.getElementById('todos').innerHTML = html;

    /* Add a click event to each remove button */
    var buttons = document.getElementsByClassName('remove');

    for (var i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', remove);
    }
}

/* This function removes a task */
function remove() {
    var todos = get_todos();

    /* Get the task number from the button ID */
    var id = parseInt(this.id);

    /* Remove the selected task */
    todos.splice(id, 1);

    /* Save the updated task list */
    localStorage.setItem('todo', JSON.stringify(todos));

    /* Display the updated list */
    show();
}

/* Add a task when the button is clicked */
document.getElementById('add').addEventListener('click', add);

/* Allow Enter to add a task */
document.getElementById('task').addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        add();
    }
});

/* Display saved tasks when the page opens */
show();

/* JSON.parse() assignment example */
var json_text = '{"name":"Prakash","task":"Complete homework"}';
var json_object = JSON.parse(json_text);

console.log(json_object);

/* localStorage assignment example */
localStorage.setItem('test_item', 'Hello World');
console.log(localStorage.getItem('test_item'));



/* This function removes a task */
function remove() {
    var todos = get_todos();

    /* Get the task number from the button ID */
    var id = parseInt(this.id);

    /* Remove the selected task from the array */
    todos.splice(id, 1);

    /* Save the updated tasks in localStorage */
    localStorage.setItem('todo', JSON.stringify(todos));

    /* Display the updated task list */
    show();
}