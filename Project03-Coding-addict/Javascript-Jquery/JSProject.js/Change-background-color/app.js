(function() {


    const hexValue = document.getElementById('hex-value');
    const btn = document.getElementById('btn');

    // add event listener
    btn.addEventListener('click', createHex);

    function createHex() {
        const hexValues = [
            0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'E', 'F'
        ];
        let hexColor = '#';
        for (let i = 0; i < 6; i++) {
            const random = Math.floor(Math.random() * hexValues.length);
            hexColor += hexValues[random];
        }
        document.body.style.backgroundColor = hexColor;
        hexValue.textContent = hexColor;

        //console.log(random);

    };
})();
//Quote random

(function() {
    const quotes = [{
            quote: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur commodi quae ipsam fugit obcaecati optio?",
            author: "Lorem"
        },

        {
            quote: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, cumque! Cumque, vero hic quia earum nostrum recusandae alias voluptatibus blanditiis.",
            author: "consectetur"
        },


    ];

    const btn = document.getElementById('generate-btn');
    btn.addEventListener('click', function() {

        let random = Math.floor(Math.random() * quotes.length);

        document.getElementById('quote').textContent = quotes[random].quote;
        document.querySelector('.author').textContent = quotes[random].author;

    });
})();

//Pass the message

(function() {
    const messageForm = document.getElementById('message-form');
    messageForm.addEventListener('submit', function(e) {
        //prevent default action
        e.preventDefault();
        //getting a value
        const message = document.getElementById('message');
        const value = message.value;
        //check the empty value
        if (value === "") {

            const feedback = document.querySelector('.feedback');
            feedback.classList.add('show');
            setTimeout(function() {
                feedback.classList.remove('show');
            }, 2000);

        }
        //change value
        document.querySelector('.message-content').textContent = value;
        message.value = "";

    });
})();