window.addEventListener('load', () => {
  
    window.open("calendar/calendar_logged.html")
    const name = localStorage.getItem('NAME');

    document.getElementById('navn').innerHTML = name;
});
