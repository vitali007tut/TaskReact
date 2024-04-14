import { Button, TomatoButton } from './Element'
import FormRegister from './components/FormRegister';
// import { Container } from './components/Container';
// import StyledInput from './components/StyledInput';
// import { SubmitInput } from './components/SubmitInput';

function App() {

  return (
    <>
      <Button>I'm purple.</Button>
      <br />
      <TomatoButton>I'm red.</TomatoButton>
      <Button /* primary={false} */>Normal</Button>
      <Button primary={true}>Primary</Button>
      <FormRegister/>
    </>
  );
}

export default App
