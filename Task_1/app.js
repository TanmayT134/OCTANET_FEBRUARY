//  Completed Task List with GitHub Links
const tasks = [
    { title: "Task 1 - Landing Page", link: "https://github.com/TanmayT134/OCTANET_FEBRUARY.git" },
    { title: "Incoming task...", link: "*" }
];

//  Dynamically Load Tasks
function loadTasks() {
    const taskList = document.getElementById("taskList");

    tasks.forEach((task, index) => {
        const taskElement = document.createElement("a");
        taskElement.href = task.link;
        taskElement.textContent = task.title;
        taskElement.classList.add("task-card");
        taskElement.target = "_blank";
        taskElement.style.animationDelay = `${index * 0.2}s`; // Smooth delay effect

        taskList.appendChild(taskElement);
    });
}

//  Load tasks on page load
document.addEventListener("DOMContentLoaded", loadTasks);
