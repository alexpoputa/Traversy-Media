let fact = document.querySelector('#fact');
let factText = document.querySelector('#factText');

let numberInput = document.querySelector('#numberInput');
numberInput.addEventListener('input', getFactFetch);

// function getFactAjax() {
//     let number = numberInput.value;

//     let xhr = new XMLHttpRequest();
//     xhr.open('GET', 'http://numbersapi.com/' + number + '/year'); // get the year request

//     xhr.onload = function () {
//         if (this.status === 200 && number != '') {
//             fact.style.display = 'block'; // once we get the request , we want to set the div to block display
//             factText.innerText = this.responseText; // output our typed Year and its Fact on the UI
//         }
//     }
//     xhr.send();
// }

function getFactFetch() {
    let number = numberInput.value;

    fetch('http://numbersapi.com/' + number + '/year')
        .then(response => response.text())
        .then(data => {
            if (number != '') {
                fact.style.display = 'block'; // once we get the request , we want to set the div to block display
                factText.innerText = data; // output our typed Year + the Fact got from request
            }
        })
        .catch(err => console.log(err));
}