const dateDiv = document.getElementById("current-date");
const today = new Date().toDateString();
dateDiv.textContent = "Today's date is: " + today;

console.log("Résumé page loaded successfully.");