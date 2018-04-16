document.addEventListener('DOMContentLoaded', function () {
    var spinBtn = document.getElementById('spin');
    var resetBtn = document.getElementById('reset');
    var resultField = document.getElementById('result');
    var canvas = document.getElementById('canvas');
    var radius = 212;

    var segments = [
        {'fillStyle': '#fff', 'text': 'Rice'},
        {'fillStyle': '#c2d', 'text': 'Chili'},
        {'fillStyle': '#3f3', 'text': 'Pork stew'},
        {'fillStyle': '#9f9', 'text': 'Pizza'},
        {'fillStyle': '#888', 'text': 'Lasagne'}
    ];

    var wheel = new Winwheel({
        'numSegments': segments.length,
        'outerRadius': radius,
        'textFontSize': 28,
        'segments': segments,
        'animation': {
            'type': 'spinToStop',
            'duration' : 5,
            'spins': 8,
            'callbackFinished': showPrize
        }
    });

    var wheelPower = 0;
    var wheelSpinning = false;

    function showPrize(winner) {
        resultField.innerHTML = winner.text;
    }

    function initListeners() {
        spinBtn.addEventListener('click', function () {
            if (!wheelSpinning) {
                wheel.animation.spins = 8;
                wheel.startAnimation();
                wheelSpinning = true;
            }
        });

        resetBtn.addEventListener('click', function () {
            wheel.stopAnimation(false);
            wheel.rotationAngle = 0;
            wheel.draw();

            wheelSpinning = false;
            resultField.innerHTML = '';
        })
    }

    initListeners();
});