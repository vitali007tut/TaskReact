import './App.css'
import { Button, TomatoButton } from './Element'

function App() {

  return (
    <>
      <Button>I'm purple.</Button>
      <br />
      <TomatoButton>I'm red.</TomatoButton>
      <Button /* primary={false} */>Normal</Button>
      <Button primary={true}>Primary</Button>
    </>
  );
}

export default App
