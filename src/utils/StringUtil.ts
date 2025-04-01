const add = (numbers: string): number | string => {
    const numberList = parseInput(numbers);
    return processSum(numberList);
}
const processSum = (numberList: number[]): number => {
    if (Array.isArray(numberList) && numberList.length === 1) {
        return numberList[0];
    }
    const result = Array.isArray(numberList) ? numberList.reduce((sum, num) => sum + num, 0) : 0;
    return result;
}
const parseInput = (numbers: string): number[] => {
    let numberList = [];
    if (!numbers || numbers.length == 0) return [0];
    if (numbers.length == 1) {
        numberList.push(parseInt(numbers[0]))
    } else {
        let delimiter = /,|\n/; // Default delimiters: comma & newline
        // Custom delimiter support (e.g., "//;\n1;2")
        if (numbers.startsWith("//")) {
            const numberParts = numbers.split("\n", 2);
            delimiter = new RegExp(numberParts[0].slice(2));
            numbers = numberParts[1];
        }
        numberList = numbers
            .split(delimiter)
            .map(num => parseInt(num, 10))
            .filter(num => !isNaN(num))
    }
    const negativeNumbers = numberList.filter(num => num < 0);
    if (negativeNumbers.length > 0) {
        throw new Error(`negative numbers not allowed ${negativeNumbers.join(',')}`)
    }
    return numberList
}
export {
    add
}