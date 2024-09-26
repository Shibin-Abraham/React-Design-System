import './App.css'
import Typography from './components/atom/typography/Typography'

function App() {

  return (
    <>
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
    </>
  )
}

export default App
