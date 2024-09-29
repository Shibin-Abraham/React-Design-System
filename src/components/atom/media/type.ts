type MediaType = 'image' | 'video'

type CommonProps = {
    type: MediaType;
    src: string;
    alt: string;
    containerClasses?: string;
    mediaClasses?: string;
}

type ImageProps = CommonProps & React.ImgHTMLAttributes<HTMLImageElement>;
type VideoProps = CommonProps & React.VideoHTMLAttributes<HTMLVideoElement>;

export type MediaProps = ImageProps | VideoProps