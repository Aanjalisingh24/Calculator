let currentValue = ""; 

document.querySelectorAll('button').forEach(button => {
  button.addEventListener('click', function() {
    let resultElement = document.getElementById("result");
    let buttonText = this.textContent;

    if (buttonText === "AC") {
      currentValue = "";
      resultElement.textContent = 0;
      resultElement.style.fontSize = '2em';
    } else if (buttonText === "=") {
      try {
        let result = eval(currentValue);
        currentValue = result.toString();
      } catch (e) {
        currentValue = "Error";
      }
      resultElement.textContent = currentValue;
      resultElement.style.fontSize = '2em';
    } else if(buttonText=="Del"){
      currentValue = currentValue.slice(0, -1);
      resultElement.textContent = currentValue || 0;
      resultElement.style.fontSize = '2em';
    }
    else {
      currentValue += buttonText;
      resultElement.textContent = currentValue;
      resultElement.style.fontSize = '2em';
    }
  });
});

