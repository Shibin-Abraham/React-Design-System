import Typography from "../atom/typography/Typography"


function index() {
    return (
        <div>
            <Typography
                tag={"h1"}
                text={"hello"}
                classes="title text-center"
                style={{ fontSize: "50px", color: "red" }}
                role="heading"
                ariaLabel="hello"
                ariaLabelledBy="title"
            >
                <span>&nbsp;world</span>
            </Typography>
            <Typography tag={"h6"} text={" hello"} />
            <Typography tag={"p"} text={"hello"} />
        </div>
    )
}

export default index
