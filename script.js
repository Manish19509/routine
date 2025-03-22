// Routine data with row spans based on time slots
const routine = {
  "Monday": [
    ["9:30 - 10:20", "ADBMS", "Aditya Singh (M-409)"],
    ["10:20 - 11:10", "ADBMS", "Aditya Singh (M-409)"],
    ["11:20 - 12:10", "TOC", "Monika Dutta (M-409)"],
    ["13:05 - 13:55", "APT", "Jahanvi Garg (M-409)"],
    ["13:55 - 14:45", "APT", "Jahanvi Garg (M-409)"],
    ["14:45 - 15:35", "SS (Group 1)", "Amanjot Kaur (SS-110A)"],
    ["15:35 - 16:25", "SS (Group 1)", "Amanjot Kaur (SS-110A)"]
  ],
  "Tuesday": [
    ["9:30 - 10:20", "CG", "Reshma (M-406F)"],
    ["10:20 - 11:10", "TOC", "Neha Dutta (M-409)"],
    ["11:20 - 12:10", "CG LAB", "Reshma / Monika (M-406F / M-409)"],
    ["12:10 - 13:00", "CG LAB", "Reshma / Monika (M-406F / M-409)"],
    ["13:55 - 14:45", "EWDM", "Pooja R (M-409)"],
    ["14:45 - 15:35", "AP LAB (Group 1)", "Vishal Kumar (L-107)"],
    ["15:35 - 16:25", "AP LAB (Group 1)", "Vishal Kumar (L-107)"]
  ],
  "Wednesday": [
    ["9:30 - 10:20", "PBLJ", "Devendra Kumar Gupta (M-409)"],
    ["10:20 - 11:10", "Cloud IOT", "Amanjot Kaur (M-306)"],
    ["11:20 - 12:10", "PDC", "Megha Sharma (M-409)"],
    ["12:10 - 13:00", "CG", "Reshma (M-406F)"],
    ["14:45 - 15:35", "Cloud IOT LAB", "Parveen Bandoni / Monika Kumari (M-306)"],
    ["15:35 - 16:25", "Cloud IOT LAB", "Parveen Bandoni / Monika Kumari (M-306)"]
  ],
  "Thursday": [
    ["9:30 - 10:20", "CG", "Reshma (M-406F)"],
    ["10:20 - 11:10", "TOC", "Monika Dutta (M-409)"],
    ["11:20 - 12:10", "NOS", "Pawan Agrahari (M-409)"],
    ["12:10 - 13:00", "NOS", "Pawan Agrahari (M-409)"],
    ["13:55 - 14:45", "PDC", "Megha Sharma (M-409)"],
    ["14:45 - 15:35", "PBLJ LAB (Group 1)", "Devendra Kumar Gupta / Vishal Dhiman (L-304)"]
  ],
  "Friday": [
    ["9:30 - 10:20", "AP LAB (Group 1)", "Vishal Kumar (L-107)"],
    ["10:20 - 11:10", "AP LAB (Group 1)", "Vishal Kumar (L-107)"],
    ["11:20 - 12:10", "PBLJ LAB (Group)", "Devendra Kumar Gupta / Vishal Dhiman (L-304)"],
    ["12:10 - 13:00", "PBLJ LAB (Group)", "Devendra Kumar Gupta / Vishal Dhiman (L-304)"],
    ["13:55 - 14:45", "EWDM", "Pooja R (M-409)"],
    ["14:45 - 15:35", "PDC", "Megha Sharma (M-409)"]
  ]
};

// Function to display routine for the selected day
function showRoutine(day) {
  const table = document.getElementById("routine-table");
  const tabs = document.querySelectorAll('.day-tab');

  // Remove active class from all tabs
  tabs.forEach(tab => tab.classList.remove('active'));

  // Add active class to the selected tab
  document.querySelector(`.day-tab[onclick="showRoutine('${day}')"]`).classList.add('active');

  // Clear previous content
  table.innerHTML = "";

  // Add headers
  const headerRow = document.createElement("tr");
  ["Time", "Subject", "Instructor"].forEach(text => {
    const th = document.createElement("th");
    th.textContent = text;
    headerRow.appendChild(th);
  });
  table.appendChild(headerRow);

  // Add routine data
  routine[day].forEach((row, rowIndex) => {
    const tr = document.createElement("tr");
    
    row.forEach((cell, cellIndex) => {
      const td = document.createElement("td");
      td.textContent = cell;
      tr.appendChild(td);
    });

    table.appendChild(tr);
  });
}

// Function to get the current day and display the routine
function loadCurrentDayRoutine() {
  const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const today = new Date().getDay();
  const currentDay = days[today];

  // If it's a weekend, default to displaying Monday's routine
  if (currentDay === "Sunday" || currentDay === "Saturday") {
    showRoutine("Monday");
  } else {
    showRoutine(currentDay);
  }
}

// Initial load
loadCurrentDayRoutine();