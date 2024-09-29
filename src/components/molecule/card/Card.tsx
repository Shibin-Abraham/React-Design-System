import classNames from "classnames"
import CardProps from "./type"

const Card: React.FC<CardProps> = ({ children, classes, variant }) => {
    const cardClasses = classNames("card rounded", {
        'bg-blue-950 text-white': variant === 'solid',
        'border border-indigo-600 text-white': variant === 'outline'
    }, classes)

    return (
        <div className={cardClasses}>
            {children}
        </div>
    )
}

export default Card
