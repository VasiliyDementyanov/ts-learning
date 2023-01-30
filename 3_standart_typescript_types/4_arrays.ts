const numbers: Array<number> = [];
numbers.push(1);
numbers.push(2);
numbers.push(3);

const items: number[] = [1, 2, 3];

// strongly-typing rest parameters
function logScores(firstName: string, ...scores: number[]) {
    console.log(firstName, scores);
}
