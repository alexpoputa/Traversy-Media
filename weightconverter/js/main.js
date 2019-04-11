//document.getElementById('output').style.visibility = 'hidden'; // make the cards invisible
document.getElementById('lbsInput').addEventListener('input', function (e) {
    //document.getElementById('output').style.visibility = 'visible'; // make the cards visible after typing any pounds
    let lbs = e.target.value;
    document.getElementById('gramsOutput').innerHTML = (lbs / 0.0022046).toFixed(2); // grams with 2 decimals only
    document.getElementById('kgOutput').innerHTML = (lbs / 2.2046).toFixed(2);
    document.getElementById('ozOutput').innerHTML = (lbs * 16).toFixed(2);
});

document.getElementById('kgsInput').addEventListener('input', function (e) {
    //document.getElementById('output').style.visibility = 'visible'; // make the cards visible after typing any pounds
    let kg = e.target.value;
    document.getElementById('gramsOutput2').innerHTML = (kg / 0.0010000).toFixed(2); // grams with 2 decimals only
    document.getElementById('lbsOutput2').innerHTML = (kg * 2.2046).toFixed(2);
    document.getElementById('ozOutput2').innerHTML = (kg * 35.274).toFixed(2);
});