interface ButtonProps {
    text: string;
    onClick?: () => void;
}

const buyButton: ButtonProps = {
    id: "1",
    text: "Buy",
    onClick: () => console.log("Buy"),
};

// extending interfaces
interface ColoredButtonProps extends ButtonProps {
    color: string;
}
const greenBuyButton: ColoredButtonProps = {
    id: "2",
    color: "Green",
    text: "Buy",
    onClick: () => console.log("Buy"),
};

// functions
interface Log2 {
    (message: string): void;
}

const log2: Log2 = (message: string) => {
    console.log(message);
};

// declaration merging
// so this interface would be merged with interface declarated above and would have all properties
interface ButtonProps {
    id: string;
}
