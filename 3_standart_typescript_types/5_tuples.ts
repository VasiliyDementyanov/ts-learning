const tomScore: [string, number] = ["Tom", 70];

// labeled
const tomScoreLabeled: [name: string, score: number] = ["Tom", 70];

// open-ended tuples
let benScores: [name: string, ...scores: number[]];
benScores = ["Ben", 50, 75, 85];
