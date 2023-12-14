const bar = document.getElementById('bar');
const close = document.getElementById('close');
const nav = document.getElementById('navbar');

if (bar) {
    bar.addEventListener('click', () => {
        nav.classList.add('active');
    })
}

if (close) {
    close.addEventListener('click', () => {
        nav.classList.remove('active');
    })
}

// Calculator Apps
function clearDisplay() {
    document.getElementById('calc-display').value = '';
}

function appendToDisplay(value) {
    document.getElementById('calc-display').value += value;
}

function calculate() {
    const expression = document.getElementById('calc-display').value;
    try {
        document.getElementById('calc-display').value = eval(expression);
    } catch (error) {
        document.getElementById('calc-display').value = 'Error';
    }
}

// BMI Calculator App
function calculateBMI() {
    const height = parseFloat(document.getElementById('height').value);
    const weight = parseFloat(document.getElementById('weight').value);

    if (!isNaN(height) && !isNaN(weight) && height > 0 && weight > 0) {
        const bmi = weight / Math.pow(height / 100, 2);
        document.getElementById('bmi-result').textContent = `BMI: ${bmi.toFixed(2)}`;
    } else {
        document.getElementById('bmi-result').textContent = 'Invalid input';
    }
}

// Compound Interest Calculator App
function calculateCompoundInterest() {
    const principal = parseFloat(document.getElementById('principal').value);
    const rate = parseFloat(document.getElementById('rate').value);
    const time = parseFloat(document.getElementById('time').value);

    if (!isNaN(principal) && !isNaN(rate) && !isNaN(time) && principal > 0 && rate > 0 && time > 0) {
        const compoundInterest = principal * Math.pow(1 + rate / 100, time) - principal;
        document.getElementById('compound-interest-result').textContent = `Compound Interest: ${compoundInterest.toFixed(2)}`;
    } else {
        document.getElementById('compound-interest-result').textContent = 'Invalid input';
    }
}

// Games

//Tic Tac Toe
document.getElementById("openTicTacToeButton").onclick = function() {  
    openTicTacToeGame()  
    }; 
function openTicTacToeGame() {
    document.getElementById("openTicTacToeButton").innerHTML = "";
    window.location.href = ('Tic-Tac-Toe-Game\index.html');
    startTicTacToe();
}

//Sudoku
function openSudokuGame(){
    startSudoku()
}

//Snake
function openSnakeGame(){
    startSnake()
}

// Generators
function generatePassword() {
    const length = 10;
    const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    let password = "";
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * charset.length);
        password += charset[randomIndex];
    }
    document.getElementById('password-result').textContent = `Password: ${password}`;
}

function generateQRCode() {
    const text = document.getElementById('qr-text').value;
    if (text) {
        const qrCodeResult = new QRCode(document.getElementById("qr-code-result"), text);
    } else {
        document.getElementById('qr-code-result').textContent = 'Enter text to generate QR code';
    }
}


// Quotes & Jokes
function generateQuote() {
    const quotes = [
        "The only limit to our realization of tomorrow will be our doubts of today. - Franklin D. Roosevelt",
        "It always seems impossible until it's done. - Nelson Mandela",
        "Do not wait to strike till the iron is hot, but make it hot by striking. - William Butler Yeats",
        // Add more quotes as needed
    ];

    const randomIndex = Math.floor(Math.random() * quotes.length);
    document.getElementById('quote-result').textContent = quotes[randomIndex];
}

function generateJoke() {
    const jokes = [
        "Why don't scientists trust atoms? Because they make up everything!",
        "Did you hear about the mathematician who's afraid of negative numbers? He'll stop at nothing to avoid them.",
        "Parallel lines have so much in common. It’s a shame they’ll never meet.",
        // Add more jokes as needed
    ];

    const randomIndex = Math.floor(Math.random() * jokes.length);
    document.getElementById('joke-result').textContent = jokes[randomIndex];
}
