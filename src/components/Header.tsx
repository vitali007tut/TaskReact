import { NavLink, Outlet } from "react-router-dom";
import { Button, TomatoButton } from "../Element";

function Header() {

    return (
        <>
            <NavLink to="/"><TomatoButton>I'm red to `/`</TomatoButton></NavLink>
            <br />
            <NavLink to="/register"><Button /* primary={false} */>Register Normal</Button></NavLink>
            <NavLink to="/singin"><Button primary={true}>SingIn Primary</Button></NavLink>
            <Outlet />
        </>
    );
}

export default Header