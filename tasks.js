const tasks=[];
function addTask(task){
    tasks.push(task);
    console.log("task added:", task);

}
MediaSourceHandle.exports={tasks,addTask};
