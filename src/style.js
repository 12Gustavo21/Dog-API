import styled from "styled-components";

export const Main = styled.main`
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    flex-direction: column;
    width: 100%;
    height: 100vh;
    background: #211a1a;
    color: #fff;

    h1 {
        font-family: 'Courier New', Courier, monospace;
        font-size: 2em;
    }

    img {
        width: 20em;
        height: 50vh;
        border-radius: 20px;
    }

    button {
        cursor: pointer;
        background: none;
        color: #fff;
        width: 7em;
        height: 5vh;
        border: 2px solid #fff;
        border-radius: 20px;
        font-size: 1.2em;
        transition: 1s all;
        font-family: 'Courier New', Courier, monospace;
    }

    button:hover {
        background: #fff;
        color: #211a1a;
    }
`;