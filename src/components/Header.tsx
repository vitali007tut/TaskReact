import { Button, TomatoButton } from "../Element";

function Header() {

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

export default Header