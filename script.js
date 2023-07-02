document.addEventListener('DOMContentLoaded', () => {
    generateQuote();

    let now = new Date();
    let hr = now.getHours();

    let timeday = document.querySelector('.timeOfDay');
    var text = "";

    if(hr >= 0 && hr < 12) {
        text = "morning";
    }

    else if(hr >= 12 && hr < 17) {
        text = "afternoon";
    }

    else {
        text = "evening";
    }

    timeday.innerHTML = text;
})

function setBg() {
    const randomColor = Math.floor(Math.random()*16777215).toString(16);
    document.body.style.backgroundColor = "#" + randomColor;
    document.querySelector('.new').style.backgroundColor = "#" + randomColor;
      
}

function generateQuote() {
    setBg();

    let url = 'https://api.quotable.io/random';

    fetch(url)
    .then(response => response.json())
    .then(data => {
        document.querySelector('.quote').innerHTML = '" ' + data.content + ' "';
        document.querySelector('.author').innerHTML = '~ ' + data.author;
        console.log(content.content)
    })

    .catch(err => {
        document.querySelector('.quote').innerHTML = 'Please try again later!';
        console.log(err);
    })
}