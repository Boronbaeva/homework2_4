let count = 0;

const countElement = document.getElementById("count");
const incrementButton = document.getElementById("increment");
const decrementButton = document.getElementById("decrement");

incrementButton.addEventListener("click", function () {
    count++;
    countElement.textContent = count;
    countElement.style.color = "green";
});

decrementButton.addEventListener("click", function () {
    if (count > 0) {
        count--;
        countElement.textContent = count;
        countElement.style.color = "red";
    }
});


const mouseArea = document.getElementById("mouseArea");
const coordinates = document.getElementById("coordinates");

mouseArea.addEventListener("mousemove", function (event) {
    const rect = mouseArea.getBoundingClientRect();

    const x = Math.floor(event.clientX - rect.left);
    const y = Math.floor(event.clientY - rect.top);

    coordinates.textContent = `x: ${x}, y: ${y}`;
});

mouseArea.addEventListener("mouseleave", function () {
    coordinates.textContent = "x: 0, y: 0";
});



const colorInput = document.getElementById("colorInput");
const colorMessage = document.getElementById("colorMessage");

colorInput.addEventListener("input", function () {
    const color = colorInput.value.trim();

    if (color === "") {
        document.body.style.backgroundColor = "#f4f4f4";
        colorMessage.textContent = "Введите название цвета.";
        return;
    }

    if (CSS.supports("background-color", color)) {
        document.body.style.backgroundColor = color;
        colorMessage.textContent = "Цвет применён: " + color;
    } else {
        colorMessage.textContent =
            "Некорректный цвет. Попробуйте red, blue или green.";
    }
});
