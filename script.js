document.addEventListener("DOMContentLoaded", function() {
    const navbarToggler = document.getElementById("navbar-toggler");
    const navbarCollapse = document.getElementById("navbar-collapse");
  
    navbarToggler.addEventListener("click", function() {
      navbarCollapse.classList.toggle("show");
    });
  
    const projectsData = [
      { title: "Menu Project", description: "In this project i used photosjop to kae the logog and design menu on a Mexican restaruant", pdfLink: "pdfs/project1.pdf" },
      { title: "Mariachi Man", description: "This was a potential logo for the menu using illustrator instead of photoshop", pdfLink: "pdfs/project2.pdf" }
    ];
  
    const projectsContainer = document.getElementById("projects-container");
  
    // Function to generate project cards
    function generateProjectCard(project) {
      const card = document.createElement("div");
      card.classList.add("col-md-6");
  
      const cardContent = `
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">${project.title}</h5>
            <p class="card-text">${project.description}</p>
            <a href="${project.pdfLink}" class="btn btn-primary" target="_blank">View PDF</a>
          </div>
        </div>
      `;
  
      card.innerHTML = cardContent;
      return card;
    }
  
    // Add project cards to the projects container
    projectsData.forEach(project => {
      const card = generateProjectCard(project);
      projectsContainer.appendChild(card);
    });
  });
  