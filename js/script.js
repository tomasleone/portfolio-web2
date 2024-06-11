const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
}


const navLink = document.querySelectorAll(".nav-link");

navLink.forEach((n) => n.addEventListener("click", closeMenu));

function closeMenu() {
  hamburger.classList.remove("active");
  navMenu.classList.remove("active");
}


const toggleSwitch = document.querySelector(
  '.theme-switch input[type="checkbox"]'
);

function switchTheme(e) {
  if (e.target.checked) {
    document.documentElement.setAttribute("data-theme", "dark");
  } else {
    document.documentElement.setAttribute("data-theme", "light");
  }
}

toggleSwitch.addEventListener("change", switchTheme, false);


function switchTheme(e) {
  if (e.target.checked) {
    document.documentElement.setAttribute("data-theme", "dark");
    localStorage.setItem("theme", "dark"); 
  } else {
    document.documentElement.setAttribute("data-theme", "light");
    localStorage.setItem("theme", "light"); 
  }
}



const currentTheme = localStorage.getItem("theme")
  ? localStorage.getItem("theme")
  : null;

if (currentTheme) {
  document.documentElement.setAttribute("data-theme", currentTheme);

  if (currentTheme === "dark") {
    toggleSwitch.checked = true;
  }
}


document.addEventListener("DOMContentLoaded", function() {
  const btnVerMas = document.getElementById('ver-mas');
  const btnVerMenos = document.getElementById('ver-menos');
  const additionalProjects = document.querySelectorAll('.additional-projects');

  // Ocultar proyectos adicionales al cargar la página
  additionalProjects.forEach(function(project, index) {
    if (index >= 6) {
      project.style.display = 'none';
    }
  });

  // Mostrar el botón "Ver más" y ocultar el botón "Ver menos" al cargar la página
  btnVerMas.style.display = 'inline-block';
  btnVerMenos.style.display = 'none';

  btnVerMas.addEventListener('click', function(e) {
    e.preventDefault();
    additionalProjects.forEach(function(project) {
      project.style.display = 'block';
    });
    btnVerMas.style.display = 'none';
    btnVerMenos.style.display = 'inline-block';
  });

  btnVerMenos.addEventListener('click', function(e) {
    e.preventDefault();
    console.log("Haciendo clic en Ver menos...");
    document.querySelectorAll('.additional-projects').forEach(function(project, index) {
      if (index >= 6) {
        project.style.display = 'none';
      }
    });
    btnVerMas.style.display = 'inline-block';
    btnVerMenos.style.display = 'none';
  });
  
});





let myDate = document.querySelector("#datee");

const yes = new Date().getFullYear();
myDate.innerHTML = yes;
