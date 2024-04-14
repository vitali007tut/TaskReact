import { Button, TomatoButton } from './Element'
import { Container } from './components/Container';
import { Input, Label } from './components/Input';

function App() {

  return (
    <>
      <Button>I'm purple.</Button>
      <br />
      <TomatoButton>I'm red.</TomatoButton>
      <Button /* primary={false} */>Normal</Button>
      <Button primary={true}>Primary</Button>
      <Container>
        <Input id='name' type="text" placeholder="input style" />
        <Label htmlFor='name'>Name</Label>
        <Input type="text" placeholder="style" />
      </Container>
    </>
  );
}

export default App
