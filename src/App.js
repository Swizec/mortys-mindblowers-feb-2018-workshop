import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import styled from "styled-components";
import { connect, createStore, applyMiddleware } from "redux";
import mortyReducer from "./mortyReducer";
import logger from "redux-logger";
import { Provider } from "react-redux";

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

const store = createStore(mortyReducer, applyMiddleware(logger));

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <Container>
                    <MortysMindblowers />
                </Container>
            </Provider>
        );
    }
}

export default App;
