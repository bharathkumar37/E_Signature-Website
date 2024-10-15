
const canvas = document.getElementById('signature-pad');
const ctx = canvas.getContext('2d');
let isDrawing = false;
let currentColor = '#000000';

function resizeCanvas() {
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;
}

window.addEventListener('resize', resizeCanvas);
resizeCanvas();

function startDrawing(e) {
    isDrawing = true;
    draw(e);
}

function stopDrawing() {
    isDrawing = false;
    ctx.beginPath();
}

function draw(e) {
    if (!isDrawing) return;

    const rect = canvas.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    ctx.lineWidth = 2;
    ctx.lineCap = 'round';
    ctx.strokeStyle = currentColor;

    ctx.lineTo(x, y);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(x, y);
}

canvas.addEventListener('mousedown', startDrawing);
canvas.addEventListener('mousemove', draw);
canvas.addEventListener('mouseup', stopDrawing);
canvas.addEventListener('mouseout', stopDrawing);

canvas.addEventListener('touchstart', (e) => {
    e.preventDefault();
    const touch = e.touches[0];
    startDrawing(touch);
});
canvas.addEventListener('touchmove', (e) => {
    e.preventDefault();
    const touch = e.touches[0];
    draw(touch);
});
canvas.addEventListener('touchend', stopDrawing);

const colorOptions = document.querySelectorAll('.color-option');
colorOptions.forEach(option => {
    option.addEventListener('click', () => {
        currentColor = option.getAttribute('data-color');
        colorOptions.forEach(opt => opt.style.border = '2px solid #fff');
        option.style.border = '2px solid #333';
    });
});

const clearBtn = document.getElementById('clear-btn');
clearBtn.addEventListener('click', () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
});

const downloadBtn = document.getElementById('download-btn');
downloadBtn.addEventListener('click', () => {
    const dataURL = canvas.toDataURL('image/png');
    const link = document.createElement('a');
    link.download = 'signature.png';
    link.href = dataURL;
    link.click();
});





const canvas2 = document.getElementById('signatureCanvas');
const ctx2 = canvas2.getContext('2d');
const createSignatureButton = document.getElementById('createSignature');
const downloadSignatureButton = document.getElementById('downloadSignature');
const signatureInput = document.getElementById('signatureInput');
const fontStyle = document.getElementById('fontStyle');
const signatureSize = document.getElementById('signatureSize');
const slopeSignature = document.getElementById('slopeSignature');
const signatureColor = document.getElementById('signatureColor');

function drawSignature() {
    const signatureText = signatureInput.value;
    const font = `${signatureSize.value}px ${fontStyle.value}`;
    const color = signatureColor.value;
    const slope = slopeSignature.value;

   
    ctx2.clearRect(0, 0, canvas.width, canvas.height);

    ctx2.save();
    ctx2.translate(100, 100);
    ctx2.rotate((Math.PI / 180) * slope);
    ctx2.translate(-100, -100);

    ctx2.font = font;
    ctx2.fillStyle = color;
    ctx2.textAlign = 'center';
    ctx2.textBaseline = 'middle';
    ctx2.fillText(signatureText, canvas2.width / 2, canvas2.height / 2);

    ctx2.restore();
}

createSignatureButton.addEventListener('click', drawSignature);

downloadSignatureButton.addEventListener('click', function () {
    const link = document.createElement('a');
    link.download = 'signature.png';
    link.href = canvas2.toDataURL('image/png');
    link.click();
});





function scrollToSignGen() {
    document.getElementById('sign').scrollIntoView({ behavior: 'smooth' });
}

function scrollToDrawASign() {
    document.getElementById('draw').scrollIntoView({ behavior: 'smooth' });
}


