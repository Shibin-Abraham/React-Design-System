import ButtonProps from "./type"

const Button: React.FC<ButtonProps> = ({
    type,
    classes,
    children,
    ...restProps
}) => {
    return (
        <button type={type} className={classes} {...restProps}>
            <span className="flex items-center justify-center gap-3">{children}</span>
        </button>
    )
}

export default Button

