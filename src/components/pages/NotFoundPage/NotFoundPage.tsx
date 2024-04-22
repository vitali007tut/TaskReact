import { Link, useRouteError } from 'react-router-dom'
import { Button } from '../../../Element'
import styled from "styled-components";

const Title = styled.h1`
    color: white;
    font-size: 2rem;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
`;

type ErrorType = {
    statusText?: string;
    message?: string;
}

export const NotFoundPage = () => {
    const error = useRouteError() as ErrorType;

    return (
        <>
            <Title>This is NotFoundPage</Title>
            <p>
                <i>{error.statusText || error.message}</i>
            </p>
            <Link to={'..'}><Button>Link to={'..'}</Button></Link>
        </>
    )
}
