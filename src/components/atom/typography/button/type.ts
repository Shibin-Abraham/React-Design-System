type ButtonType = "submit" | "reset" | "button"

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    text: string;
    type?: ButtonType;
    classes?: string;
}

export default ButtonProps