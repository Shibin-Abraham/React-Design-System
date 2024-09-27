import './App.css'
import Button from './components/atom/typography/button/Button'

function App() {

  return (
    <>
      <Button
        text="Submit"
        type="submit"
        classes="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        disabled
        autoFocus
      />
    </>
  )
}

export default App
