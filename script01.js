function scrollToSkills() {
    document.getElementById('skills').scrollIntoView({ behavior: 'smooth' });
}
function scrollToProjects() {
    document.getElementById('projects').scrollIntoView({ behavior: 'smooth' });
}
function scrollToContact() {
    document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
}
const sections = document.querySelectorAll(".section");
let index = 0;

function runShine() {
  // sabhi div se active class hatao
  sections.forEach(sec => sec.classList.remove("active-shine"));

  // current div par shine lagao
  sections[index].classList.add("active-shine");

  // agla div set karo (loop ke liye % use kiya)
  index = (index + 1) % sections.length;

  // 3 second baad agla div shine karega
  setTimeout(runShine, 3000);
}

// Start shine sequence
runShine();
