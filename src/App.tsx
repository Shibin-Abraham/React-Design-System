import './App.css'
import Button from './components/atom/button/Button'
import Media from './components/atom/media/Media'
import Typography from './components/atom/typography/Typography'
import Card from './components/molecule/card/Card'

function App() {


  return (
    <>
      <Card classes='w-[500px] pb-px' variant='solid'>
        <Media
          type='image'
          src="https://cdn.pixabay.com/photo/2024/09/21/02/13/ai-generated-9062778_640.jpg"
          alt="Coding Image"
          //containerClasses="max-w-[300px] max-h-[450px]"
          mediaClasses="w-full h-full rounded object-cover"
        />
        <Typography
          tag='h4'
          text='Design System : Card component 1'
          classes='mb-2 font-bold text-[25px] mt-4 px-2'
        />
        <Typography
          tag='p'
          text='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
          classes='mb-2 text-[16px] px-2'
        />
        <Button variant='secondary' variantType='solid' classes=" w-[110px] h-[40px] text-[14px] mt-4 ml-2 mb-4">
          Read More
        </Button>
      </Card>
    </>
  )
}

export default App
