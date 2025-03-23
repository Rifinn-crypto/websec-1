let previousCalculation = "";

function calculate() {
    const num1 = parseFloat(document.getElementById("num1").value);
    const num2 = parseFloat(document.getElementById("num2").value);
    const operation = document.getElementById("operation").value;
    let result;

    if (isNaN(num1)) {
        document.getElementById("num1-error").textContent = "Пожалуйста, введите число.";
        return;
    } else {
        document.getElementById("num1-error").textContent = "";
    }

    if (isNaN(num2)) {
        document.getElementById("num2-error").textContent = "Пожалуйста, введите число.";
        return;
    } else {
        document.getElementById("num2-error").textContent = "";
    }

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
            if (Math.abs(num2) < Number.EPSILON) {
                document.querySelector(".result").textContent = `Деление на ноль!`;
                return;
            }
            result = num1 / num2;
            break;
        default:
            result = "Ошибка операции";
    }

    const currentCalculation = `${num1} ${operation} ${num2} = ${result}`;
    document.querySelector(".result").textContent = currentCalculation;

    const previousResultsParagraph = document.querySelector(".previous-results");
    previousResultsParagraph.textContent = `${previousCalculation}`;

    previousCalculation = currentCalculation;
}