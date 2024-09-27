import './App.css'
import Button from './components/atom/button/Button'
import Typography from './components/atom/typography/Typography'
import viteLogo from '/vite.svg'

function App() {
  const handleOnClick = () => alert("Clicked")
  return (
    <>
      <Typography
        text='Button component with icon right side'
        classes='mb-5'
      />
      <Button
        type="button"
        classes="bg-blue-700 hover:bg-blue-900 text-white font-bold py-2 px-4 rounded cursor-pointer"
        disabled
        autoFocus
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
        type="submit"
        classes="bg-blue-700 hover:bg-blue-900 text-white font-bold py-2 px-4 rounded cursor-pointer"
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
        type="reset"
        classes="bg-red-700 hover:bg-red-900 text-white font-bold py-2 px-4 rounded cursor-pointer"
        disabled
        autoFocus
      >
        Reset
      </Button>

      <hr className='my-5' />
      <Typography
        text='Button component with icon'
        classes='mb-5'
      />
      <Button
        type="button"
        classes="bg-yellow-700 hover:bg-yellow-900 text-white font-bold py-2 px-4 rounded cursor-pointer"
        onClick={handleOnClick}
      >
        <img src={viteLogo} alt="Vite Logo" className="w-5 h-5" />
      </Button>


    </>
  )
}

export default App
