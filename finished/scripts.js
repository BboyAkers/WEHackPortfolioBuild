document.addEventListener('DOMContentLoaded', () => {
    const projectSectionDiv = document.querySelector('.projectsSection')

    const url= './data/projects.json'
    fetch(url)
        .then((response) => {
            return response.json();
        })
        .then((myJson) => {
            let projects = myJson;
            console.log(myJson)
            let projectList = '';
            projects.forEach(project => {
                projectList += `
                  <div class="col-lg-3 col-md-12 mt-3">
                    <div class="card card-cascade wider">
                      <div class="card-body card-body-cascade text-center">
                        <h4 class="card-title"><strong>${project.projectOrg}</strong></h4>
                        <p>(${project.associationWithProject})</p>
                        <h5 class="blue-text pb-2"><strong>${project.projectName}</strong></h5>
                        <hr />
                        <a class="btn btn-primary" href="${project.demoLink}" target="_blank">Demo</a>
                        <a class="btn btn-success" href="${project.githubLink}" target="_blank">Visit
                          Github</a>
                      </div>
                    </div>
                  </div>
                `
            });
            projectSectionDiv.innerHTML = projectList;
        })
})