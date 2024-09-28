import MediaProps from "./type"

const Media: React.FC<MediaProps> = ({
    type = 'image',
    src,
    alt,
    containerClasses,
    mediaClasses
}) => {
    return (
        <div className={containerClasses}>
            {
                type === 'image' ? (
                    <img src={src} alt={alt} className={mediaClasses} />
                ) : (
                    <video src={src} />
                )
            }

        </div>
    )
}

export default Media
