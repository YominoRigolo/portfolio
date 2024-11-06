let projects = [];

function addProject() {
    const projectTitle = prompt("Nom du projet :");
    const projectDescription = prompt("Description du projet :");

    if (projectTitle && projectDescription) {
        projects.push({ title: projectTitle, description: projectDescription });
        displayProjects();
    }
}

function displayProjects() {
    const projectList = document.getElementById("project-list");
    projectList.innerHTML = "";

    projects.forEach((project) => {
        const projectDiv = document.createElement("div");
        projectDiv.classList.add("project");

        const title = document.createElement("h3");
        title.innerText = project.title;

        const description = document.createElement("p");
        description.innerText = project.description;

        projectDiv.appendChild(title);
        projectDiv.appendChild(description);

        projectList.appendChild(projectDiv);
    });
}
