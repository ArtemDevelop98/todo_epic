
function loadTasks(){

    const tasksJSON =
        localStorage.getItem("tasks");

    if(tasksJSON){

        tasks = JSON.parse(tasksJSON);

    }

}

function saveTasks(){
    localStorage.setItem("tasks",JSON.stringify(tasks));
}