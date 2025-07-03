function getRandomColor() {
    const hex = Math.floor(Math.random() * 0xffffff).toString(16).padStart(6, '0');
    return `#${hex}`;
}

function generatePalette(num = 5) {
    const paletteContainer = document.getElementById('palette');
    paletteContainer.innerHTML = '';
    for (let i = 0; i < num; i++) {
        const color = getRandomColor();
        const colorDiv = document.createElement('div');
        colorDiv.className = 'color';
        colorDiv.style.background = color;

        const hexDiv = document.createElement('div');
        hexDiv.className = 'hex';
        hexDiv.textContent = color;
        hexDiv.addEventListener('click', () => {
            navigator.clipboard.writeText(color);
            hexDiv.textContent = 'Copied!';
            setTimeout(() => { hexDiv.textContent = color; }, 1000);
        });

        colorDiv.appendChild(hexDiv);
        paletteContainer.appendChild(colorDiv);
    }
}

document.getElementById('generate').addEventListener('click', () => generatePalette());
window.addEventListener('DOMContentLoaded', () => generatePalette());