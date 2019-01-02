const colors = ['yellow', 'green', 'blue', '#f5ed12b', '#f37748', '#067bc2'];

const btn = document.getElementById('btn');

// add event listener
btn.addEventListener('click', function() {
    let random = Math.floor(Math.random() * colors.length);
    const body = document.body;
    body.style.backgroundColor = colors[random];

    console.log(random);

});