const tasks=[];
function addTask(task){
    tasks.push(task);
    console.log("task added:", task);
    if(!task){
        console.log("empty task not allowed");
        return;
    }
}
MediaSourceHandle.exports={tasks,addTask};
