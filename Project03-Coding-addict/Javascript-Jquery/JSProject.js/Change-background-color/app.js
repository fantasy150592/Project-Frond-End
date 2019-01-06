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
        const body = document.body;
        for (let i = 0; i < 6; i++) {
            let random = Math.floor(Math.random() * hexValues.length);
            hexColor += hexValues[random];
        }
        body.style.backgroundColor = hexColor;
        hexValue.textContent = hexColor;

        //console.log(random);

    };

})();