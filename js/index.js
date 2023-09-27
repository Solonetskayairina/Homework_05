    let num1 = prompt('Enter the first number');
        if ( isNaN(num1) ) {
            alert('You can only enter numbers');
            num1 = prompt('try again')
        }

    let num2 = prompt('Enter the second number');
        if ( isNaN(num2) ) {
            alert('You can only enter numbers');
            num2 = prompt('try again')
        }

    let num3 = prompt('Enter the third number');
        if ( isNaN(num3) ) {
            alert('You can only enter numbers');
            num3 = prompt('try again')
        }

    num1 = Number(num1);
    num2 = Number(num2);
    num3 = Number(num3);

    let average = (num1 + num2 + num3)/3;

    if (average) {
        alert(average + '- the arithmetic mean of these numbers');
    } else {
        alert('You have provided incorrect data, please reload the page')
    }
