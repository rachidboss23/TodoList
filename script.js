// Definición de un array de objetos que representan tareas
let tasks = [
    { description: "Leer guias de JavaScript", completed: false },
    { description: "Resumenes y Apuntes", completed: true },
    { description: "Ver grabaciones de clases", completed: false }
];

// Obtención de referencias a elementos del DOM
const taskList = document.getElementById("taskList");
const totalTasksDisplay = document.getElementById("totalTasks");
const completedTasksDisplay = document.getElementById("completedTasks");

// Función para renderizar las tareas en la página HTML
function renderTasks() {

// Limpiar el contenido actual de la lista de tareas
taskList.innerHTML = "";

// Inicializar contador de tareas completadas
let completedTasksCount = 0;

// Iterar sobre cada tarea en el array 'tasks'
    tasks.forEach((task, index) => {

        // Crear un nuevo elemento de lista (<li>)
        const listItem = document.createElement("li");

         // Establecer el contenido HTML del elemento de lista
        listItem.innerHTML = `<input type="checkbox" ${task.completed ? "checked" : ""} onchange="toggleTask(${index})">${task.description}
        <button onclick="deleteTask(${index})">X</button>`;

        // Adjuntar el elemento de lista a la lista de tareas
        taskList.appendChild(listItem);

        // Incrementar el contador de tareas completadas si la tarea actual está completada
        if (task.completed) {
            completedTasksCount++;
        }
    });
     // Actualizar el contenido del elemento HTML 'totalTasksDisplay' con el número total de tareas
    totalTasksDisplay.textContent = tasks.length;

    // Actualizar el contenido del elemento HTML 'completedTasksDisplay' con el número de tareas completadas
    completedTasksDisplay.textContent = completedTasksCount;
}

// Función para agregar una nueva tarea a la lista
function addTask() {
    // Obtener el elemento de entrada de la tarea
    const taskInput = document.getElementById("taskInput");
    // Obtener el valor del campo de entrada y eliminar los espacios en blanco al principio y al final
    const newTaskDescription = taskInput.value.trim();
    // Verificar si el valor del campo de entrada no está vacío
    if (newTaskDescription !== "") {
        // Agregar una nueva tarea al array 'tasks' con la descripción de la tarea y establecer su estado como no completada
        tasks.push({ description: newTaskDescription, completed: false });
        // Volver a renderizar las tareas para reflejar el cambio
        renderTasks();
        // Limpiar el campo de entrada después de agregar la tarea
        taskInput.value = "";
    }
}

// Función para eliminar una tarea del array de tareas
function deleteTask(index) {
    // Eliminar la tarea en el índice dado del array 'tasks'
    tasks.splice(index, 1);
    // Volver a renderizar las tareas para reflejar el cambio
    renderTasks();
}

// Función para cambiar el estado de una tarea entre completada e incompleta
function toggleTask(index) {
    // Cambiar el estado 'completed' de la tarea en el índice dado
    tasks[index].completed = !tasks[index].completed;
    // Volver a renderizar las tareas para reflejar el cambio
    renderTasks();
}

// Llamar a la función 'renderTasks()' para inicializar la visualización de tareas cuando se cargue la página
renderTasks();
