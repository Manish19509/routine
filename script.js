const routineData = {
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

function showRoutine(day) {
  const table = document.getElementById("routine-table");
  table.innerHTML = "<tr><th>Time</th><th>Activity</th><th>Instructor</th></tr>";
  routineData[day].forEach(slot => {
      table.innerHTML += `<tr><td>${slot[0]}</td><td>${slot[1]}</td><td>${slot[2]}</td></tr>`;
  });
}

document.addEventListener("mousemove", e => {
  let cursor = document.querySelector(".custom-cursor");
  cursor.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
});
showRoutine("Monday");
