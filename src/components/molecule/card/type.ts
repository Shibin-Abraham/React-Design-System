type CardVariant = 'outline' | 'solid'

interface CardProps {
    variant?: CardVariant
    children: React.ReactNode;
    classes?: string;
}
export default CardProps