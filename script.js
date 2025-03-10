let previousResults = [];

window.calculate = function() {
    const num1 = parseFloat(document.getElementById("num1").value);
    const num2 = parseFloat(document.getElementById("num2").value);
    const operation = document.getElementById("operation").value;

    document.getElementById("num1-error").textContent = "";
    document.getElementById("num2-error").textContent = "";
    document.getElementById("num1").style.borderColor = "#ccc"; 
    document.getElementById("num2").style.borderColor = "#ccc"; 

    let isValid = true;

    if (isNaN(num1)) {
        document.getElementById("num1-error").textContent = "Введите корректное число.";
        document.getElementById("num1").style.borderColor = "red"; 
        isValid = false;
    }

    if (isNaN(num2)) {
        document.getElementById("num2-error").textContent = "Введите корректное число.";
        document.getElementById("num2").style.borderColor = "red"; 
        isValid = false;
    }

    if (!isValid) {
        return;
    }

    let result;
    try {
        switch (operation) {
            case "+":
                result = num1 + num2;
                break;
            case "-":
                result = num1 - num2;
                break;
            case "*":
                result = num1 * num2;
                break;
            case "/":
                if (num2 === 0) {
                    throw new Error("Деление на ноль!");
                }
                result = num1 / num2;
                break;
            default:
                throw new Error("Недопустимая операция.");
        }

        const resultText = `${num1} ${operation} ${num2} = ${result}`;
        document.getElementById("result").value = resultText;

        previousResults.unshift(resultText);
        if (previousResults.length > 5) {
            previousResults.pop();
        }

        updatePreviousResultsDisplay();

    } catch (error) {
        document.getElementById("result").value = "Ошибка: " + error.message;
    }
}

function updatePreviousResultsDisplay() {
    const previousResultsDiv = document.getElementById("previous-results");
    previousResultsDiv.innerHTML = previousResults.map(res => `<p>${res}</p>`).join("");
}
