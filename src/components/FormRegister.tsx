import { useState } from "react";
import { Container } from "./Container";
import StyledInput from "./StyledInput";
import { SubmitInput } from "./SubmitInput";

const FormRegister = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log('email:', email);
        console.log('password:', password);
        setEmail('')
        setPassword('')
    }

    return (
        <Container>
            <form onSubmit={handleSubmit}>
                <StyledInput
                    type='text'
                    placeholder='type email...'
                    id='email'
                    label='Email'
                    value={email}
                    onChange={(e) => {
                        setEmail(e.target.value)
                    }}
                />
                <StyledInput type='text' placeholder='type password...' id='newText' label='password'
                    value={password}
                    onChange={(e) => {
                        setPassword(e.target.value);
                    }}
                />
                <SubmitInput value="Enter" />
            </form>
        </Container>
    );
}

export default FormRegister
