import ButtonProps from "./type";
import classNames from "classnames"

 const getBtnClasses = ({variant,variantType,classes,isLoading}:ButtonProps)=>{
    const btnClasses = classNames("py-2 px-4 rounded flex items-center justify-center text-white font-bold", {
        "bg-primary cursor-pointer":
            variant === "primary" && variantType === "solid",
        "bg-secondary cursor-pointer":
            variant === "secondary" && variantType === "solid",
        "bg-tertiary cursor-pointer":
            variant === "tertiary" && variantType === "solid",
        "border-2 border-primary hover:bg-primary cursor-pointer":
            variant === "primary" && variantType === "outline",
        "border-2 border-secondary hover:bg-secondary cursor-pointer":
            variant === "secondary" && variantType === "outline",
        "border-2 border-tertiary hover:bg-tertiary cursor-pointer":
            variant === "tertiary" && variantType === "outline",
        "cursor-not-allowed opacity-50": isLoading
    }, classes);

    return btnClasses;
}

export default getBtnClasses