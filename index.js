// Add, Update, and Delete tasks X

// Mark a task as in progress or done X

// List all tasks X

// List all tasks that are done X

// List all tasks that are not done x

// List all tasks that are in progress X

const fs = require('node:fs');

function wait(ms){
   var start = new Date().getTime();
   var end = start;
   while(end < start + ms) {
     end = new Date().getTime();
  }
}
let now = new Date()

function getTasks(){
    fs.readFile("./tasks.json","utf-8",(err,data)=>{
        if(err){
            console.log("The following error occured", err)
        }else{
            console.log(JSON.parse(data))
        
        }
    })
}

let tasks = getTasks()

const statuses = ['todo', 'in-progress', 'done']

const  exampleTask = "Finish chores"
const editedTask = "Hand in chores"

function nextID(array){
    const index = Number(array.length - 1)
    return array[index].id + 1
}

function newTask(task){
    const newID = nextID(tasks)
    tasks.push({
        id:newID,
        description:task,
        status:statuses[1],
        createedAt:now,
        updatedAt:''
    })
   const addedTask = tasks.find(task => task.id == newID);

   let description = addedTask.description
    console.log(`Task "${description}" added with id ${newID}`)
}

function updateTask(id,newTask) {    
    if(tasks.find(task => task.id == id)){
    const selectedTask= tasks.find(task => task.id = id)
    const taskID = selectedTask.id
    tasks[taskID].description = newTask
    tasks[taskID].updatedAt = new Date()
    console.log(tasks[id])

}else{
        console.log(`No task with id ${id}`)
    }    
}

function updateStatus(taskID,status){
    
    if(tasks.find(task=> task.id === taskID )){
        const selectedTask = tasks.find(task=> task.id === taskID )
        tasks[taskID].status = statuses[status]
        tasks[taskID].updatedAt = new Date()
        console.log(tasks[taskID])

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
        task.status =='todo' || task.status ==  'in-progress' ? incomplete.push(task):null
    });
    if(incomplete.length>0){
        console.log(incomplete)
    }
}

function listCompletTasks(){
    let complete = []
    tasks.forEach(task => {
        console.log(task.status)
        task.status =='done' ? complete.push(task):null
        
    });
    if(complete.length>0){
        console.log(complete)
    }
}

function listInProgressTasks(){
    let inProgress = []
    tasks.forEach(task => {
        task.status =='in-progress' ? inProgress.push(task):null
    });
    if(inProgress.length>0){
        console.log(inProgress)
    }
}



// newTask(exampleTask)
// updateTask(4,editedTask)
// listTasks()
// updateStatus(0,2)
// listCompletTasks()
// listIncompleteTasks()
// listInProgressTasks()


