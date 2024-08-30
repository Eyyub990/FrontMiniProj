
let btns = document.querySelectorAll(".item");
btns.forEach(element => {
    element.onclick = () => {
        element.classList.toggle("active");
    } 
});

let btn1 = document.querySelector(".btn");
let taskbar = document.querySelector(".sidebar");

function expandTaskbar(){
    taskbar.classList.toggle('active');
}

let btnExpand = document.querySelector(".btn-expand");
function toggleFullScreen (){
    document.documentElement.requestFullscreen();
}

let btnFlag = document.querySelector(".btn-flag");
let flagSection = document.querySelector(".flags-section");

btnFlag.onclick = function (e){
  flagSection.classList.toggle("active");
}

let btnAccount = document.querySelector(".btn-user");
let accountSection = document.querySelector(".account-section");

btnAccount.onclick = function (e){
  accountSection.classList.toggle("active");
}

/**/

const ul = document.querySelector(".cards");

fetch("http://localhost:3000/projects")
    .then((response)=>response.json())
    .then((data)=>{
        data.forEach(element=>{
            AddCard(element);
        });
    })
    .catch((error)=>console.log(error));


function AddCard(data){
    const li = document.createElement("li");
    li.classList.add("card");
    ul.appendChild(li);

    const i = document.createElement("i");
    i.classList.add("fa-regular");
    i.classList.add("fa-circle-check");
    li.appendChild(i);

    const h2 = document.createElement("h2");
    h2.classList.add("header-text");
    h2.innerText = data.projectName;
    li.appendChild(h2);
    /* description*/
    const description =document.createElement("div");
    description.classList.add("description");
    description.innerText = data.description;
    li.appendChild(description);
    /*createdAt*/
    const createAt = document.createElement("div");
    createAt.classList.add("row");
    li.appendChild(createAt);

    const createRowStart = document.createElement("div");
    createRowStart.classList.add("row-start");
    createRowStart.innerText = "Created:";
    createAt.appendChild(createRowStart);

    const createRowEnd = document.createElement("div");
    createRowEnd.classList.add("row-end");
    createRowEnd.innerText = data.created;
    createAt.appendChild(createRowEnd);
    /*teamLeader*/ 
    const teamLeader = document.createElement("div");
    teamLeader.classList.add("row");
    li.appendChild(teamLeader);

    const teamLeaderStart = document.createElement("div");
    teamLeaderStart.classList.add("row-start");
    teamLeaderStart.innerText = "Team Leader:";
    teamLeader.appendChild(teamLeaderStart);

    const teamLeaderEnd = document.createElement("div");
    teamLeaderEnd.classList.add("row-end");
    teamLeaderEnd.innerText = data.teamLeader;
    teamLeader.appendChild(teamLeaderEnd);
    /*priority*/
    const priority = document.createElement("div");
    priority.classList.add("row");
    li.appendChild(priority);

    const priorityStart = document.createElement("div");
    priorityStart.classList.add("row-start");
    priorityStart.innerText = "Priority:";
    priority.appendChild(priorityStart);

    const priorityEnd = document.createElement("div");
    priorityEnd.classList.add("row-end");
    priorityEnd.innerText = data.priority;
    priority.appendChild(priorityEnd);
    /*deadline*/
    const deadline = document.createElement("div");
    deadline.classList.add("row");
    li.appendChild(deadline);

    const deadlineStart = document.createElement("div");
    deadlineStart.classList.add("row-start");
    deadlineStart.innerText = "Deadline:";
    deadline.appendChild(deadlineStart);

    const deadlineEnd = document.createElement("div");
    deadlineEnd.classList.add("row-end");
    deadlineEnd.innerText = data.deadline;
    deadline.appendChild(deadlineEnd);
    /*comments*/
    const comments = document.createElement("div");
    comments.classList.add("row");
    li.appendChild(comments);

    const commentsStart = document.createElement("div");
    commentsStart.classList.add("row-start");
    commentsStart.innerText = "Comments:";
    comments.appendChild(commentsStart);

    const commentsEnd = document.createElement("div");
    commentsEnd.classList.add("row-end");
    commentsEnd.innerText = data.comments;
    comments.appendChild(commentsEnd);
    /*bug*/
    const bug = document.createElement("div");
    bug.classList.add("row");
    li.appendChild(bug);

    const bugStart = document.createElement("div");
    bugStart.classList.add("row-start");
    bugStart.innerText = "Bug:";
    bug.appendChild(bugStart);

    const bugEnd = document.createElement("div");
    bugEnd.classList.add("row-end");
    bugEnd.innerText = data.bug;
    bug.appendChild(bugEnd);
}