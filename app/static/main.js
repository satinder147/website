// Hamburger menu

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
}

// Close navbar when link is clicked
const navLink = document.querySelectorAll(".nav-link");

navLink.forEach((n) => n.addEventListener("click", closeMenu));

function closeMenu() {
  hamburger.classList.remove("active");
  navMenu.classList.remove("active");
}

document.documentElement.setAttribute("data-theme", "dark");

function change_job_description(e){
  var job_name = e.target.id;
  if(!job_name) return;
  var companies = ['netradyne'];
  for(var i=0;i<companies.length;i++){
    document.getElementsByClassName('job-' + companies[i])[0].style['display'] = 'none';
    document.getElementById(companies[i]).style['border-left'] = '2px solid var(--text-tertiary-color)';
  }
  
  document.getElementsByClassName('job-' + job_name)[0].style['display'] = 'block';
  document.getElementById(job_name).style['border-left'] = '2px solid var(--primary-color)';
}