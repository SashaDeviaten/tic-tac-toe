function go() {
    var strokesX = [];
    var strokes0 = [];
    var amountOfXWin = document.getElementById('amountOfXWin');
    var amountOf0Win = document.getElementById('amountOf0Win');
    var amountOf0Draw = document.getElementById('amountOf0Draw');
    var cells = document.querySelectorAll('.cell');
    var button = document.querySelector('button');
    button.addEventListener('click', clean);
    var player = document.querySelector('span');
    for (var i = 0; i < cells.length; i++) {
        cells[i].addEventListener('click', paintSign);
        cells[i].value = i + 1
    }

    function paintSign() {
        this.innerHTML = player.innerHTML;
        this.removeEventListener('click', paintSign);
        if (player.innerHTML === '0') {
            player.innerHTML = 'x';
            strokes0.push(this.value);
            test(strokes0)
        }
        else {
            player.innerHTML = '0';
            strokesX.push(this.value);
            test(strokesX)
        }
    }

    function test(arr) {
        var str = arr.join('');
        if (str.indexOf('1') != -1 && str.indexOf('2') != -1 && str.indexOf('3') != -1) {
            setWinner(); str='win'
        }
        if (str.indexOf('4') != -1 && str.indexOf('5') != -1 && str.indexOf('6') != -1) {
            setWinner();  str='win'
        }
        if (str.indexOf('7') != -1 && str.indexOf('8') != -1 && str.indexOf('9') != -1) {
            setWinner();  str='win'
        }
        if (str.indexOf('1') != -1 && str.indexOf('4') != -1 && str.indexOf('7') != -1) {
            setWinner(); str='win'
        }
        if (str.indexOf('2') != -1 && str.indexOf('5') != -1 && str.indexOf('8') != -1) {
            setWinner();str='win'
        }
        if (str.indexOf('3') != -1 && str.indexOf('6') != -1 && str.indexOf('9') != -1) {
            setWinner(); str='win'
        }
        if (str.indexOf('1') != -1 && str.indexOf('5') != -1 && str.indexOf('9') != -1) {
            setWinner(); str='win'
        }
        if (str.indexOf('3') != -1 && str.indexOf('5') != -1 && str.indexOf('7') != -1) {
            setWinner(); str='win'
        }

        if ((strokes0.length > 4 || strokesX.length > 4)&& str!=='win') {
                amountOfDraw.innerHTML = +amountOfDraw.innerHTML + 1;
                alert('Ничья')
            }


    }

    function clean() {
        for (var i = 0; i < cells.length; i++) {
            cells[i].addEventListener('click', paintSign);
            cells[i].value = i + 1;
            cells[i].innerHTML = '';
            strokes0 = [];
            strokesX = [];

        }

    }
    function freeze() {
        for (var i = 0; i < cells.length; i++) {
            cells[i].removeEventListener('click', paintSign);
        }
    }

    function setWinner() {
        freeze();
        var winner = '';
        if (player.innerHTML === '0') {
            winner = 'x';
            amountOfXWin.innerHTML = +amountOfXWin.innerHTML + 1

        }
        else {
            winner = '0';
            amountOf0Win.innerHTML = +amountOf0Win.innerHTML + 1
        }
        alert('Победили  ' + winner)
    }
}








