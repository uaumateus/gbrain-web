export default function shuffleArray(array: string[]) {
    var currentIndex = array.length, tempValue, randomIndex;
 
    while (0 !== currentIndex) {
 
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
 
        tempValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = tempValue;
    }
 
    return array;
}