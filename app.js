let buttonList = document.querySelectorAll("button");
[...buttonList].forEach((button) => {
  let li = button.closest("li");
  button.addEventListener("click",() => {    
    li.classList.add("done");
  });
});
// let li = document.querySelector("li");

