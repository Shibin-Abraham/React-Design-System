import './App.css'
import Media from './components/atom/media/Media'
// import Button from './components/atom/button/Button'
import Typography from './components/atom/typography/Typography'
// import viteLogo from '/vite.svg'
import video from './assets/video.mp4'

function App() {


  return (
    <>
      <Typography
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
      />
    </>
  )
}

export default App
