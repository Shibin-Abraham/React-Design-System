import ButtonProps from "./type"
import classNames from "classnames"

const Button: React.FC<ButtonProps> = ({
    variant = "primary",
    variantType = "solid",
    type = "button",
    classes,
    children,
    isLoading,
    ...restProps
}) => {

    // Classes
    const btnClasses = classNames("py-2 px-4 rounded cursor-pointer flex items-center justify-center", {
        "bg-primary text-white font-bold":
            variant === "primary" && variantType === "solid",
        "bg-secondary text-white font-bold":
            variant === "secondary" && variantType === "solid",
        "bg-tertiary text-white font-bold":
            variant === "tertiary" && variantType === "solid",
        "border-2 border-primary text-white font-bold hover:bg-primary":
            variant === "primary" && variantType === "outline",
        "border-2 border-secondary text-white font-bold hover:bg-secondary":
            variant === "secondary" && variantType === "outline",
        "border-2 border-tertiary text-white font-bold hover:bg-tertiary":
            variant === "tertiary" && variantType === "outline",
        "cursor-not-allowed opacity-50": isLoading
    }, classes)

    return (
        <button type={type} className={btnClasses} {...restProps}>
            <span className="flex items-center justify-center gap-3">
                {children}
                {isLoading && <div className="border-gray-300 h-3 w-3 rounded-full animate-spin border-8 border-t-blue-600"></div>}
            </span>
        </button>
    )
}

export default Button

