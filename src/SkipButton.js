import React from "react";
import styled from "styled-components";

const Centered = styled.div`
    align-items: center;
    display: flex;
    flex-direction: column;
`;

const SkipButton = props => (
    <Centered>
        <button onClick={props.onClick}>Skip</button>
    </Centered>
);

export default SkipButton;
