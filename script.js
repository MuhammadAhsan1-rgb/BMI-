const button = document.getElementById('btn');
button.addEventListener("click", (e) => {
e.preventDefault();
const weight =  parseInt(document.getElementById('weight').value)
const height =  parseInt(document.getElementById('height').value)
const bmi = (weight / ((height * height) / 10000)).toFixed(2);

if( weight == "" || height == "" || isNaN(weight) || isNaN(height) ) {
    document.getElementById('result').innerHTML = "Please enter valid weight and height values."
} else {
    document.getElementById('result').innerHTML = `Your BMI is ${bmi}`

}

if(bmi < 18.5){
    document.getElementById('remark').innerHTML = "You are underweight.";
} else if( bmi >= 18.5 && bmi < 24.9 ){
    document.getElementById('remark').innerHTML = "You have a normal weight.";
} else if ( bmi >= 25 && bmi < 29.9 ) {
    document.getElementById('remark').innerHTML = "You are overweight.";
}
else {
    document.getElementById('remark').innerHTML = "You are obese.";
}
})