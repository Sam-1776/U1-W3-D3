window.onload = () => {
  const form = document.querySelector("form");

  form.onsubmit = function (e) {
    e.preventDefault();
    const stuffInput = document.getElementById("stuff");
    const stuff = stuffInput.value;

    const main = document.getElementsByTagName("main")[0];
    const bag = document.createElement("div");
    bag.className = "bag";
    const h4 = document.createElement("h4");
    h4.innerText = `${stuff}`;
    const button = document.createElement("button");
    button.innerHTML = "Elimina";

    h4.onclick = (e) => {
      const h4 = e.target;
      h4.parentNode.className = "takeIt";
    };

    button.onclick = (e) => {
      const trash = e.target;
      trash.parentNode.remove();
    };

    bag.appendChild(h4);
    bag.appendChild(button);
    main.appendChild(bag);

    stuffInput.value = "";
  };

  console.dir(form);
};
