import ButtonProps from "./type"

const Button: React.FC<ButtonProps> = ({
    text,
    type,
    classes,
    ...restProps
}) => {
    return (
        <button type={type} className={classes} {...restProps}>
            {text}
        </button>
    )
}

export default Button

