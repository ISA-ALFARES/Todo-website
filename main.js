const form = document.querySelector("form");
const container = document.getElementById("container");
const input = document.querySelector("input");
const mood = "";
 container.addEventListener("click" ,(eo) => {

  if(eo.target.className == "icon-trash-o icons"){

    eo.target.parentElement.parentElement.remove()

  }
  else if(eo.target.className == "icon-checkbox-unchecked icons"){

    eo.target.classList.add("display")
    const checked = `<span class="icon-checkbox-checked icons"></span>`

    // eo.target.parentElement.parentElement.getElementByClassName("task-text")[0].classList.add("finish");

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
  else if (eo.target.className === "icon-edit icons") {
    container.addEventListener("click", (eo) => {
      if (eo.target.className === "icon-edit icons") {
        const taskTextElement = eo.target.parentElement.parentElement.querySelector(".task-text");
        taskTextElement.contentEditable = "true"; // تجعل العنصر قابلًا للتعديل
        taskTextElement.focus(); // تركيز المؤشر داخل العنصر
        // إضافة زر "حفظ"
        eo.target.classList.add("display")
        const checked = `<button class="crate-task"><span class="icon-plus icons save-button"></span></button>`
        eo.target.parentElement.innerHTML += checked;
      }else if(eo.target.className ==="save-button") {
        const taskTextElement = eo.target.parentElement.querySelector(".task-text");
        taskTextElement.contentEditable = "false"; // تجعل العنصر غير قابل للتعديل
      }
    });
  }
  else if(eo.target.className === "icon-plus icons save-button"){
     
    eo.target.classList.add("display")
    const edit = `<span class="icon-edit icons"></span>`
    eo.target.parentElement.innerHTML += edit;

  }
  
  
})

form.addEventListener("submit" ,(eo) => {



  eo.preventDefault()
  const task = `
      <div class="task" id="task"">
      <div class="left-icon">
        <span class="icon-star icons"></span>
        <span class="icon-checkbox-unchecked icons"></span>
      </div>
        <p class="task-text">${input.value}</p>
      <div class="right-icon">
        <span class="icon-trash-o icons"></span>
        <span class="icon-edit icons"></span>
      </div>
    </div>
  `
  if (input.value != "") {
      
      container.innerHTML += task;

  } else {
    // Remove previous message if exists
    const previousMessage = document.querySelector("#empty-message");
    if (previousMessage) {
      previousMessage.remove();
    }
  
    // Create a div element to display the error message
    const errorMessage = document.createElement("div");
    errorMessage.id = "empty-message";
    errorMessage.textContent = "The box cannot be empty.";
    errorMessage.style.backgroundColor = "red";
    errorMessage.style.color = "white";
    errorMessage.style.padding = "10px";
    errorMessage.style.position = "fixed";
    errorMessage.style.bottom = "20px";
    errorMessage.style.left = "50%";
    errorMessage.style.transform = "translateX(-50%)";
    errorMessage.style.borderRadius = "5px";
    errorMessage.style.zIndex = "9999";
  
    // Append the message to the document body
    document.body.appendChild(errorMessage);
  
    // Close the message after a specified time (optional)
    setTimeout(() => {
      errorMessage.remove();
    }, 3000); // The message will be removed after 3 seconds
  }
  
})








