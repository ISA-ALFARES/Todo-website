const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");
const container = document.getElementById("cont");

function toggleDayNight() {
  const icon = document.getElementById("dayNightIcon");
  const moon = icon.querySelector(".moon");
  const sun = icon.querySelector(".sun");

  if (moon.style.display === "none") {
      // إذا كانت الشمس معروضة (النهار)، غيرها إلى الليل
      moon.style.display = "block";
      sun.style.display = "none";
      document.body.style.backgroundColor = "rgb(19 19 19 / 76%)"; // تغيير لون الخلفية إلى الليل
  } else {
      // إذا كان القمر معروض (الليل)، غيرها إلى النهار
      moon.style.display = "none";
      sun.style.display = "block";
      document.body.style.backgroundColor = "#ccc"; // تغيير لون الخلفية إلى النهار
  }
}


function addTask() {
  const taskText = taskInput.value.trim();
  if (taskText !== "") {
    const taskElement = document.createElement("li");
    taskElement.classList.add("list-group-item");
    taskElement.innerHTML = `
      <div>
        <span class="icon-star icons"></span>
        <span class="icon-checkbox-unchecked icons"></span>
      </div>
      <p>${taskText}</p>
      <div>
        <span class="icon-trash-o icons" onclick="deleteTask(event)"></span>
        <span class="icon-edit icons" onclick="editTask(event)"></span>
      </div>
    `;
    taskList.appendChild(taskElement);
    taskInput.value = "";
  }
}


function editTask(event) {
  const taskElement = event.target.parentNode.parentNode;
  const taskText = taskElement.querySelector("p").textContent;
  const updatedTask = prompt("Edit Task:", taskText);
  if (updatedTask !== null && updatedTask.trim() !== "") {
    taskElement.querySelector("p").textContent = updatedTask;
  }
}

function deleteTask(event) {
  const taskElement = event.target.parentNode.parentNode;
  taskElement.remove();
}
container.addEventListener("click" ,(eo) => {
if(eo.target.className == "icon-checkbox-unchecked icons"){

  eo.target.classList.add("display")
  const checked = `<span class="icon-checkbox-checked icons"></span>`

  // eo.target.parentElement.getElementByClassName("list-group")[0].classList.add("finish");

  eo.target.parentElement.innerHTML += checked;

}else if(eo.target.className == "icon-checkbox-checked icons"){

  eo.target.classList.add("display")
  const unchecked = `<span class="icon-checkbox-unchecked icons"></span>`
  eo.target.parentElement.innerHTML += unchecked;

}else if(eo.target.className == "icon-star icons"){

  eo.target.classList.add("orange")
  container.prepend(eo.target.parentElement.parentElement)

}
else if(eo.target.className == "icon-star icons orange"){

  eo.target.classList.remove("orange")
  container.append(eo.target.parentElement.parentElement)

}

})
