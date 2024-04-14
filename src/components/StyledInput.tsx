import styled from "styled-components";
import { Input } from "./Input";
import { Label } from "./Label";
import { InputHTMLAttributes } from "react";

interface PropsType extends InputHTMLAttributes<HTMLInputElement> {
    id: string,
    label: string,
}

const Container = styled.div`
text-align: start;
`

function StyledInput(props: PropsType) {

    return (
        <Container>
            <Label htmlFor={props.id}>{props.label}</Label>
            <Input type={props.type} id={props.id} placeholder={props.placeholder}
                value={props.value}
                onChange={props.onChange}
            />
        </Container>
    );
}

export default StyledInput