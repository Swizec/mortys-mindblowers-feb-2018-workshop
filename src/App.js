import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import styled from "styled-components";

import MortysMindblowers from "./MortysMindblowers";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;
`;

const WhiteP = styled.p`
    color: white;
    textalign: center;
`;

const WhiteA = styled.a`
    color: "white";
`;

class App extends Component {
    render() {
        return (
            <Container>
                <MortysMindblowers />
            </Container>
        );
    }
}

export default App;
