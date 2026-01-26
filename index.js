// Add, Update, and Delete tasks

// Mark a task as in progress or done

// List all tasks

// List all tasks that are done

// List all tasks that are not done

// List all tasks that are in progress

const tasks = [
    {id:1,
    description:'Buy groceries',
    status:'in-progress',
    createedAt:'',
    updatedAt:''},
]

const now = new Date()
const statuses = ['todo', 'in-progress', 'complete']

function nextID(array){
    const index = Number(array.length - 1)
    return array[index].id + 1
}

const  exampleTask = "Finish homework"

function newTask(task){
    tasks.push({
        id:nextID(tasks),
        description:task,
        status:statuses[1],
        createedAt:now,
        updatedAt:''
    })
}

function updateTask(id,time) {
    
    tasks.indexOf()
    // selectedTask.updatedAt = now
    console.log(selectedTask.id)
    console.log(`The following task was selected ${selectedTask}`)
    
}
newTask(exampleTask)
updateTask(2)
console.log(tasks )
//array.findS