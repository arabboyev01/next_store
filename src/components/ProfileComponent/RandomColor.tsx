function getRandomColor() {
    const r = Math.floor(Math.random() * 180);
    const g = Math.floor(Math.random() * 180);
    const b = Math.floor(Math.random() * 180);
    return 'rgb(' + r + ', ' + g + ', ' + b + ')';
}
export const randomColor = getRandomColor();