// Add, Update, and Delete tasks X

// Mark a task as in progress or done X

// List all tasks

// List all tasks that are done

// List all tasks that are not done

// List all tasks that are in progress

function wait(ms){
   var start = new Date().getTime();
   var end = start;
   while(end < start + ms) {
     end = new Date().getTime();
  }
}

const tasks = [
  {
    id: 0,
    description: "Buy groceries",
    status: "in-progress",
    createdAt: now,
    updatedAt: ""
  },
  {
    id: 1,
    description: "Finish homework",
    status: "todo",
    createdAt: now,
    updatedAt: ""
  },
  {
    id: 2,
    description: "Clean bedroom",
    status: "done",
    createdAt: now,
    updatedAt: now
  },
  {
    id: 3,
    description: "Read JavaScript chapter",
    status: "in-progress",
    createdAt: now,
    updatedAt: ""
  },
  {
    id: 4,
    description: "Hand in homework",
    status: "done",
    createdAt: now,
    updatedAt: now
  }
]

let now = new Date()
const statuses = ['todo', 'in-progress', 'done']

const  exampleTask = "Finish chores"
const editedTask = "Hand in chores"

function nextID(array){
    const index = Number(array.length - 1)
    return array[index].id + 1
}

function newTask(task){
    console.log(tasks)
    tasks.push({
        id:nextID(tasks),
        description:task,
        status:statuses[1],
        createedAt:now,
        updatedAt:''
    })
}

function updateTask(id,newTask) {    
    if(tasks.find(task => task.id == id)){
    const selectedTask= tasks.find(task => task.id = id)
    const taskID = selectedTask.id
    tasks[taskID].description = newTask
    tasks[taskID].updatedAt = new Date()
    console.log(selectedTask)

}else{
        console.log(`No task with id ${id}`)
    }    
}

function updateStatus(id,status){
    if(tasks.find(task => task.id == id)){
        const selectedTask= tasks.find(task => task.id = id)
        const taskID = selectedTask.id
        tasks[taskID].status = statuses[status]
        tasks[taskID].updatedAt = new Date()
        console.log(selectedTask)

}else{
        console.log(`No task with id ${id}`)
    }
}

function listTasks(){
    console.log(tasks)
}

function listIncompleteTasks(){
    let incomplete = []
    tasks.forEach(task => {
        task.status =='to-do' || task.status ==  'in-progress' ? incomplete.push(push):null
    });
    if(incomplete.length>0){
        console.log(inProgress)
    }
}

function listCompletTasks(){
    let complete = []
    tasks.forEach(task => {
        task.status =='done' ? complete.push(push):null
    });
    if(complete.length>0){
        console.log(inProgress)
    }
}

function listInProgressTasks(){
    let inProgress = []
    tasks.forEach(task => {
        task.status =='in-progress' ? incomplete.push(push):null
    });
    if(inProgress.length>0){
        console.log(inProgress)
    }
}

newTask(exampleTask)
console.log(tasks)

