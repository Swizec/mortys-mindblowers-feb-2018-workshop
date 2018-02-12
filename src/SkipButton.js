import React from "react";
import styled from "styled-components";

const Centered = styled.div`
    align-items: center;
    display: flex;
    flex-direction: column;
`;

const SkipButton = ({ onClick }) => <button onClick={onClick}>Skip</button>;

export default SkipButton;
