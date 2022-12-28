tasks={}
outputs={}
taskCount=0;
taskToDel=0;
document.querySelector("#taskWrite").addEventListener('keypress', function (event) {
    if (event.key === 'Enter') {
      addTask();
    }
    // if (event.key === 'ctrlKey'){
        // console.log(hello);
    // }
    // if (event.key === 'ctrl') {
        // removeTask();
    // }
});

function addTask(){
    if(document.querySelector("#taskWrite").value !== ""){
        taskCount++;
        tasks[taskCount.toString()] = document.querySelector("#taskWrite").value;
        outputs[taskCount] = document.createElement("p");
        outputs[taskCount].innerHTML = tasks[taskCount];
        const output = document.querySelector("#output");
        output.appendChild(outputs[taskCount]);
        document.querySelector("#taskWrite").value = "";
        // checkbox = <input type="checkbox" name="done"/>
        // outputs[taskCount].appendChild(checkbox);
        console.log(taskCount);
    }
}
function removeTask(){
    if(taskCount >= 0){
        // taskCount--;
        taskToDel++;
        delete tasks[taskToDel.toString()];
        let parent = document.querySelector("#output");
        let child = document.querySelector("#output").getElementsByTagName("p")[0];
        parent.removeChild(child);
        console.log(taskToDel);
        console.log(taskCount);
        // document.querySelector("#output").innerHTML = tasks;
    }
}
function generateOutput(){
    for(const i in tasks){
        outputs[i] = document.createElement("p");
        outputs[i].innerHTML = tasks[i];
        const output = document.querySelector("#output");
        output.appendChild(outputs[i]);
        
    }
}