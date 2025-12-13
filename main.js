fetch('projects.json')
  .then(response => response.json())
  .then(projects => {
    const container = document.getElementById('projects');

    projects.forEach(project => {
      const article = document.createElement('article');
      article.className = 'project';

      const imagesHTML = project.images
        .map(src => `<img src="${src}" alt="">`)
        .join('');

      article.innerHTML = `
        <div class="project-header">
          <h2>${project.title}</h2>
          <div class="project-subtitle">${project.subtitle}</div>
        </div>

        <div class="project-images">
          ${imagesHTML}
        </div>

        <div class="project-text">
          <p>${project.text}</p>
        </div>
      `;

      container.appendChild(article);
    });
  })
  .catch(err => {
    console.error('Failed to load projects:', err);
  });
