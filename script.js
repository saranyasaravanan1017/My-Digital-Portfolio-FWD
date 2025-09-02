// Toggle mobile menu
const menuToggle = document.getElementById ("menu-toggle");
const navlinks = document.getElementById ("nav-links");  

menuToggle.addEventListener("click", () => { 
  navLinks.classList.toggle ("show)");
}); 

// simple contact form Validation
const contactform = document.getElementById ("contact-form");
const formStatus = document.getElementById ("form-Status");
                                            
contactform.addEventListener("submit", (e) => { 
  e.preventDefault();
  
  const name = document.getElementById ("name").value.trim();
  const email = document.getElementById ("email").value.trim();
  const message = document.getElementById ("message").value.trim();
  
  if (name && email && message) {
  formStatus.textContent ="✅ Message sent Sucessfully!";
  formStatus.style.color = "green";
  contactform.reset();
  } else {
     formStatus.textcontent = "❌ Please fill all feilds";
  formstatus.style.color = "red";
  }
});