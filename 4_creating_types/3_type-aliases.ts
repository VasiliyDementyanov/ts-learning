type FirstName = string;
type PersonScore = number;

let firstName: FirstName = "Tom";
let personScore: PersonScore = 70;

// functions
type Log = (message: string, category?: string) => void;
const log: Log = (message: string) => {
    console.log(message);
};

// objects
type Score = {
    name: string;
    score: number;
    pass?: boolean;
    log: Log;
};

const bobScore: Score = {
    name: "Bob",
    score: 80,
    log,
};
const janeScore: Score = {
    name: "Jane",
    score: 90,
    log,
};
