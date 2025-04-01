const add = (numbers: string): number | string => {
    //parse Input

    //validation
    if (!numbers || numbers.length == 0) return 0;
    const numberArray = numbers.split(",");
    if (numberArray.find(number => parseInt(number) < 0)) {
        const negativeNumbers = numberArray.filter(num => parseInt(num) < 0);
        return `negative numbers not allowed ${negativeNumbers}`;
    }
    //
    return 0;
}
// const parseInput=(numbers:string):number[]=>{
//     if(numbers.includes(""))
// }
export {
    add
}