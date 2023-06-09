//el contador lo llevamos en addTask
let IdCounter = 0
//creamos una constante tipo texto con el id input
const input = document.querySelector('input[type="text"]');

userInput.addEventListener('submit', (event)=>{
    // colocando un evento de cualquier nombre y llamandolo en la
    // siguiente ByteLengthQueuingStrategy, se evita que el formulario se comporte
    // como es de su naturaleza y recargue la pagina bien
    //y no añade los signos
    event.preventDefault();
    addTask()
});

// para agregar una tarea nueva
// copiar toda la tarea del HTML y pegar para que tenga el mismo formato
let addTask = () => {
    IdCounter++;
    //contador de IDs

    //nuevo valor de texto para las casillas
    let newValue = input.value;
    list.innerHTML += `
                        <div class="task-container" id="${IdCounter}">
                        <label for="">
                        <input type="checkbox" name="" id="">
                        ${newValue}
                        </label>
                        <img src="./img/compartimiento.png" alt="" class="closeBtn">
                        </div>
                        `
    input.value = '';
    //este linea es para que se borre el texto cada vez que ya se haya agregado una nueva tarea
    //esta linea actualizará las estadisticas de tareas
    updateStats();
}

list.addEventListener('click',(event)=>{
    if(event.srcElement.nodeName == 'INPUT'){
        updateStats();
    } else if (event.srcElement.nodeName == 'IMG'){
        deleteTask(event.srcElement.parentNode.id)
    }

})
//creamos la funcion que actuzalizará las tareas completadas y
//las que falta por completar,
//esta funcion fue llamada en la funcion anterior
let updateStats = () => {
    //obtenemos el contador de tareas pendiente
    let element = list.querySelectorAll('div');
    //obtenemos el contador de tareas completadas
    let checkbox = list.querySelectorAll('input[type="checkbox"]:checked')
    stats.innerHTML = `<p>Tareas completadas: ${checkbox.length}. Tareas por completar: ${element.length} </p>`
}

let deleteTask = (id) =>{
    let taskTodelete = document.getElementById(id);
    list.removeChild(taskTodelete);
    updateStats();
}