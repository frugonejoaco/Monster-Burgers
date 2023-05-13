const toggleText = (e) => {
    const text = document.getElementById("p-nosotros");
    if (text.style.display === "none") 
    {
      text.style.display = "block";
      e.target.innerHTML = 'Ocultar';
    } 
    else 
    {
      text.style.display = "none";
      e.target.innerHTML = 'Mostar';
    }
  }
  const buttonToggle = document.getElementById('show_text');
  buttonToggle.innerHTML = 'Ocultar';
  buttonToggle.addEventListener('click', toggleText) 