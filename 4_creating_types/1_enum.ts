enum Level {
    High,
    Medium,
    Low,
}

let level: Level;
level = Level.Low;
console.log(level);

enum Level2 {
    High = "H",
    Medium = "M",
    Low = "L",
}

let level2: Level2;
level2 = Level2.Low;
console.log(level2);
