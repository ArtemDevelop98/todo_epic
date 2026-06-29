function update(){

    renderAddForm();

    const filteredTask = getFilteredTask();
    
    renderTasks(filteredTask);
    
}
loadTasks();
update();