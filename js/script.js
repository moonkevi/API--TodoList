import { getData } from "./api.js";

const todosContainer = document.querySelector('#todos');
const todoSection = document.createElement('section');

todoSection.id = 'todos-section';
todosContainer.appendChild(todoSection);

function displayTodos(todosData){
    todoSection.innerHTML =  "";

    todosData.forEach(todo => {
        const todoDiv = document.createElement('div');
        todoDiv.className = 'items';

        const todoTitle = document.createElement("p");
        todoTitle.textContent = todo.todo;

        const todoStatus = document.createElement("p");
        todoStatus.textContent = todo.completed ? "completed" : "incomplete" ;

        todoDiv.appendChild(todoTitle);
        todoDiv.appendChild(todoStatus);
        todoSection.appendChild(todoDiv);
        
    });
}



async function getTodos() {
    const todosData = await getData();

    if (!todosData) {
        todoSection.textContent = "Unable to load todos. Please try again.";
        return;
    }

    if (todosData.length === 0) {
        todoSection.textContent = "No todos found.";
        return;
    }

    displayTodos(todosData);
}
