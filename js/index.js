    let number1;
    let number2;
    let number3;

    do {
        number1 = prompt('Enter the first number');
    } while ( isNaN(number1) );

    do {
        number2 = prompt('Enter the second number');
    } while ( isNaN(number2) );

    do {
        number3 = prompt('Enter the third number');
    } while ( isNaN(number3) );

    const convertedData1 = Number(number1);
    const convertedData2 = Number(number2);
    const convertedData3 = Number(number3);

    let average = (convertedData1 + convertedData2 + convertedData3)/3;

    if (average) {
        alert(`${average} - the arithmetic mean of these numbers`);
    }