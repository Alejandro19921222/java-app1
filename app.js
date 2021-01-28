let button = document.getElementById("add-button");
  button.addEventListener("click", () => {
    let input = document.getElementById("new-todo");
    
    let li = document.createElement("li");
    li.innerText = input.value;

    let doneButton = document.createElement("button")
    doneButton.innerText = "done";
    li.appendChild(doneButton);
    doneButton.addEventListener("click", () => {
      doneButton.closest("li");
      li.classList.add("done");
    });

    let ul = document.querySelector("ul");
    ul.appendChild(li);
});



// let li = document.querySelector("li");