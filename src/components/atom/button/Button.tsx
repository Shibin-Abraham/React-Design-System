import ButtonProps from "./type"
import getBtnClasses from "./utility"

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
    const btnClasses = getBtnClasses({variant,variantType,classes,isLoading})

    return (
        <button type={type} className={btnClasses} {...restProps}>
            <span className="flex items-center justify-center gap-3">
                {children}
                {
                    isLoading &&
                    <div className="border-gray-300 h-3 w-3 rounded-full animate-spin border-8 border-t-blue-600">
                    </div>
                }
            </span>
        </button>
    )
}

export default Button

