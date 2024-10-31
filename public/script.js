document.addEventListener("DOMContentLoaded", function () {
    const quote = document.getElementById("quote");
    const content = document.querySelector(".content");
  
    setTimeout(() => {
      quote.style.display = "none"; 
      content.style.opacity = 1;
      content.style.transform = "translateY(0)";
    }, 2000); 
  });
  