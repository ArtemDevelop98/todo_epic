const addTaskSection = document.querySelector('.add-tasks-btn');

const createTaskBtn = document.getElementById('create-task-btn');

addTaskSection.addEventListener('click',() => {
    isCreatingTask = true;
    update();
});
createTaskBtn.addEventListener('click', () => {
    isCreatingTask = false;
    addNewTask();
    update();
});
                                                                               ///Filter
const allFilterBtn = document.getElementById("all");
const plannedFilterBtn = document.getElementById("planned");
const doingFilterBtn = document.getElementById("doing");
const doneFilterBtn = document.getElementById("done");

allFilterBtn.addEventListener('click',() => {
    currentStatusFilter = "all";
    update();
});

plannedFilterBtn.addEventListener('click',() => {
    currentStatusFilter = "planned";
    update();
});

doingFilterBtn.addEventListener('click',() => {
    currentStatusFilter = "doing";
    update();
});

doneFilterBtn.addEventListener('click',() => {
    currentStatusFilter = "done";
    update();
});
                                                                              //Search

const searchInput = document.getElementById("search-input");

searchInput.addEventListener('input',() => {
    let debounceTimer;

    clearTimeout(debounceTimer);

    debounceTimer = setTimeout(() => {
        searchQuery = searchInput.value;
        update();
    },300);


    
});


function newTask(){
    const titleInput = document.getElementById("task-title-input");
    const descriptionInput  = document.getElementById("task-description-input");

    if(titleInput.value.trim() !== "" &&descriptionInput.value.trim() !== ""){

        const newTask = {
            id : Date.now(),
            title : titleInput.value,
            description : descriptionInput.value,
            createdAt : new Date().toLocaleDateString(),
            status : "planned"
        };
        titleInput.value = "";
        descriptionInput.value = "";

        return newTask;
    }; 
}

function addNewTask(){
    const task = newTask();

    if(task){
        tasks.push(task);
        saveTasks();
    }
};

function deleteTask(id){

    tasks = tasks.filter(task =>task.id !== id);
        saveTasks();
        update();
};



