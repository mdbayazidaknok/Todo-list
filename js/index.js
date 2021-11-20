////////////////////////////////Import the necessary modules
import { elements } from "./views/base";
import * as newTodo from "./views/addItem";

///////////////////////////////Function to create a new li
const addItem = () => {
  //check if the user typed something in the input field
  const inputLength = elements.userInput.value.length;

  if (inputLength > 0) {
    //let's create the element
    const taskItem = document.createElement("li");
    taskItem.textContent = `${elements.userInput.value}`;

    //create span (delete item) element
    const deleteItem = document.createElement("span");
    deleteItem.innerHTML = `<ion-icon name="close-outline"></ion-icon>`;

    const checkItem = document.createElement("span");
    checkItem.innerHTML = `<ion-icon name="checkmark"></ion-icon>`;

    //lets give a class for our beloved deleteItem
    deleteItem.className = "btn-del";

    //lets give a class for our beloved checkitem
    checkItem.className = "btn-check";

    //lastStep let's insert the element (after begin of the u list)
    elements.ulist.insertAdjacentElement("afterbegin", taskItem);

    //insert span element after in the begin of li
    taskItem.insertAdjacentElement("beforeend", checkItem);

    //insert span element after in the begin of li
    taskItem.insertAdjacentElement("beforeend", deleteItem);

    deleteItem.addEventListener("click", () => {
      //console.log(taskItem.parentElement);
      //taskItem.classList.toggle("line-through");
      taskItem.remove();
      document.querySelector(
        ".heading__subtitle"
      ).textContent = `All todos count: ${elements.ulist.childElementCount}`;

      document.querySelector(".completed").textContent = `(completed: ${
        document.querySelectorAll(".line-through").length
      })`;
    });

    //check button inside the task item list
    checkItem.addEventListener("click", () => {
      //console.log(taskItem.parentElement);
      taskItem.classList.toggle("line-through");
      checkItem.classList.toggle("checked");

      document.querySelector(".completed").textContent = `(completed: ${
        document.querySelectorAll(".line-through").length
      })`;
    });

    const todosCount = elements.ulist.childElementCount;
    elements.subTitle.textContent = `All todos count: ${todosCount}`;
    //clean the inut field input
    newTodo.clearInput();
  } else {
    alert("Please write something..");
  }
};

///////////////////EVENTS HANDLERS////////////////////////
elements.btnAdd.addEventListener("click", addItem);

document.addEventListener("keypress", event => {
  //check if the user pressed the return key (enter)
  if (event.keyCode === 13) {
    addItem();
  }
});

/**
 * position
    A DOMString representing the position relative to the targetElement; must match (case-insensitively) one of the following strings:

        'beforebegin': Before the targetElement itself.
        'afterbegin': Just inside the targetElement, before its first child.
        'beforeend': Just inside the targetElement, after its last child.
        'afterend': After the targetElement itself.
 */
