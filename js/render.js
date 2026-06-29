
const taskList = document.querySelector(".list");

const inputTaskForm = document.querySelector('.add-input-task');

const addTaskBtn =  document.querySelector('.add-tasks-btn');



function renderTasks(tasksArray){
    taskList.innerHTML = "";

    tasksArray.forEach(task => {
        renderTask(task);
    });
}

function renderTask(task){

    const wrapperTask = document.createElement('div');
    wrapperTask.classList.add("task");
    wrapperTask.classList.add(task.status);

    if(task.id === editingTaskId){

        wrapperTask.classList.add("edit");

        const editTitleTask = document.createElement('input');
        editTitleTask.classList.add("title-task-edit");
        editTitleTask.value = task.title;

        const editDescriptionTask = document.createElement('textarea');
        editDescriptionTask.classList.add("description-task-edit");
        editDescriptionTask.value = task.description;

        const saveTaskBtn = document.createElement('button');
        saveTaskBtn.classList.add("save-task-btn");
        saveTaskBtn.textContent = "Сохранить";

        saveTaskBtn.addEventListener('click', () => {
            
            const currentTask = tasks.find(t => {
                return t.id === editingTaskId;
            });

            if( editTitleTask.value.trim() !== "" && editDescriptionTask.value.trim() !== "" ){

            currentTask.title = editTitleTask.value;
            currentTask.description = editDescriptionTask.value;

            };

            editingTaskId = null;
            saveTasks();
            update();
        });

        wrapperTask.appendChild(editTitleTask);
        wrapperTask.appendChild(editDescriptionTask);
        wrapperTask.appendChild(saveTaskBtn);
        taskList.appendChild(wrapperTask);
    }else{
        
        const taskHeader = document.createElement('div');
        taskHeader.classList.add("task__header");

        const titleTask = document.createElement('p');
        titleTask.classList.add("title-task");
        titleTask.textContent = task.title;

        const descriptionTask = document.createElement('span');
        descriptionTask.classList.add("description-task");
        descriptionTask.textContent = task.description;

        const btnWrapper = document.createElement('div');
        taskHeader.classList.add("task__header__btn-wrapper");

        const dltBtn = document.createElement('button');
        dltBtn.classList.add("dltBtn-task");
        dltBtn.textContent = "✕";

        const editBtn = document.createElement('button');
        editBtn.classList.add("editBtn-task");
        editBtn.textContent = "✏️";

        const taskFooter = document.createElement('div');
        taskFooter.classList.add("task__footer");

        const dateTask = document.createElement('p');
        dateTask.classList.add("date-task");
        dateTask.textContent = task.createdAt;

        const statusBtn = document.createElement('button');
        statusBtn.classList.add("status-Btn-task");
        statusBtn.classList.add(task.status);
        statusBtn.textContent = task.status;

        dltBtn.addEventListener('click',() =>{

        deleteTask(task.id);
        });

        editBtn.addEventListener('click', ()=>{

        editingTaskId = task.id;
        update();
        });

        statusBtn.addEventListener('click',() => {
            toggleStatus(task);
            saveTasks();
            update();
        });

        btnWrapper.appendChild(editBtn);
        btnWrapper.appendChild(dltBtn);
        taskHeader.appendChild(titleTask);
        taskHeader.appendChild(btnWrapper);
        wrapperTask.appendChild(taskHeader);
        wrapperTask.appendChild(descriptionTask);
        taskFooter.appendChild(statusBtn);
        taskFooter.appendChild(dateTask)
        wrapperTask.appendChild(taskFooter);
        taskList.appendChild(wrapperTask);

    }



}
