const projectsList = document.getElementById("projects-list");
const projectDetail = document.getElementById("project-detail");
const projectDetailScroll = document.getElementById("project-detail-scroll");
const backButton = document.getElementById("back-button");
const sectionTitle = document.getElementById("section-title");

projectsList.addEventListener("click", (e) => {
  const link = e.target.closest("a[data-project]");
  if (!link) return;

  e.preventDefault();

  const projectId = link.dataset.project;
  const project = projects[projectId];
  if (!project) return;

  sectionTitle.textContent = project.title;
  projectDetailScroll.innerHTML = project.content;

  projectsList.hidden = true;
  projectDetail.hidden = false;
});

backButton.addEventListener("click", () => {
  projectDetail.hidden = true;
  projectsList.hidden = false;

  projectDetailScroll.innerHTML = "";
  sectionTitle.textContent = "Projects";
});
