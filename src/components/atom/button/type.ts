type ButtonType = "submit" | "reset" | "button"
type ButtonVariant = "primary" | "secondary" | "tertiary"
type ButtonVariantType = "solid" | "outline"

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: ButtonVariant;
    variantType?: ButtonVariantType;
    type?: ButtonType;
    classes?: string;
    isLoading?: boolean;
    children?: React.ReactNode;
}

export default ButtonProps