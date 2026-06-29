function toggleStatus(task){
    if(task.status === "planned"){
        task.status = "doing";
    }else if(task.status === "doing"){
        task.status = "done";
    }else if(task.status === "done"){
        task.status = "planned";
    }
}

function renderAddForm(){
    if(isCreatingTask){
        inputTaskForm.classList.remove('hidden');
        addTaskBtn.classList.add('hidden');
    }else{
        inputTaskForm.classList.add('hidden');
        addTaskBtn.classList.remove('hidden');
    };
};

function getFilteredTask(){
    let filteredTasks = tasks;

    if(currentStatusFilter !== "all"){
        filteredTasks = filteredTasks.filter(task => task.status === currentStatusFilter);
    };

    if(searchQuery.trim() !== ""){
        filteredTasks = filteredTasks.filter(task => task.title.toLowerCase().includes(searchQuery.toLowerCase()) || task.description.toLowerCase().includes(searchQuery.toLowerCase()));
    };

    return filteredTasks;

};
