import { getRandomColor } from "./utils";

export default function initApp() {
  console.log("Hellow World");
  const button = document.createElement("button");
  button.classList.add("button");
  button.textContent = "Изменить цвет страницы";
  document.body.appendChild(button);
  button.addEventListener("click", () => {
    document.body.style.backgroundColor = getRandomColor();
  });
}
