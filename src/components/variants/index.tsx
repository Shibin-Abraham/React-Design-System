import Typography from "../atom/typography/Typography"


function index() {
  // const [isLoading, setIsLoading] = useState(false)
  // const handleOnClick = () => setIsLoading((value) => !value)

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

      {/* <Typography
        tag='h1'
        text='Button components'
        classes='mb-5 font-bold text-[30px]'
      />
      <Typography
        text='Button component with icon right side'
        classes='mb-5'
      />
      <Button

      >
        Button
        <img src={viteLogo} alt="Vite Logo" className="w-5 h-5" />
      </Button>

      <hr className='my-5' />

      <Typography
        text='Button component with icon left side'
        classes='mb-5'
      />
      <Button
        variant='secondary'
        variantType='outline'
        type="submit"
        disabled
        autoFocus
      >
        <img src={viteLogo} alt="Vite Logo" className="w-5 h-5" />
        Submit
      </Button>

      <hr className='my-5' />
      <Typography
        text='Button component with different background color'
        classes='mb-5'
      />
      <Button
        variant='tertiary'
        type="reset"
        isLoading={isLoading}
        onClick={handleOnClick}
        disabled={isLoading}
      >
        Make Payment
      </Button>

      <hr className='my-5' />
      <Typography
        text='Button component with icon'
        classes='mb-5'
      />
      <Button
        type="button"
        classes="bg-yellow-700 hover:bg-yellow-900 text-white font-bold py-2 px-4 rounded cursor-pointer"
      >
        <img src={viteLogo} alt="Vite Logo" className="w-5 h-5" />
      </Button> */}
      {/* <Typography
        tag='h1'
        text='Design System : Media components'
        classes='mb-5 font-bold text-[30px]'
      />

      <hr className='my-5' />
      <Typography
        text='Media component : Image'
        classes='mb-5'
      />
      <Media
        type='image'
        src="https://cdn.pixabay.com/photo/2024/09/21/02/13/ai-generated-9062778_640.jpg"
        alt="Coding Image"
        //containerClasses="max-h-[400px]"
        mediaClasses="w-full h-full rounded object-cover"
      />
      <Typography
        text='Media component : video'
        classes='mb-5'
      />
      <Media
        type='video'
        src={video}
        alt="Coding Image"
        containerClasses="max-h-[400px]"
        mediaClasses="w-full h-full rounded object-cover"
        autoPlay
        muted
      /> */}
    </div>
  )
}

export default index
