const tasks=[];
function addTask(task){
    tasks.push(task);
    console.log("logging tasks...", task);

}
MediaSourceHandle.exports={tasks,addTask};
