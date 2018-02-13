import React, { Component } from "react";
import styled from "styled-components";
import { connect } from "react-redux";

import Morty1 from "./mortysegments/1.mp4";
import Morty2 from "./mortysegments/2.mp4";
import Morty3 from "./mortysegments/3.mp4";
import Morty4 from "./mortysegments/4.mp4";
import Morty5 from "./mortysegments/5.mp4";
import Morty6 from "./mortysegments/6.mp4";
import Morty7 from "./mortysegments/7.mp4";
import Morty8 from "./mortysegments/8.mp4";
import Morty9 from "./mortysegments/9.mp4";

import RickQuotes from "./RickQuotes";
// import Video from "./Video";
import SkipButton from "./SkipButton";
// import ImgurAPI from "./ImgurAPI";
import { nextAction } from "./actions";

const Column = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1;
`;

const mapStateToProps = state => ({
    rickIndex: state.rickIndex
});

const mapDispatchProps = {
    nextAction
};

class MortysMindblowers extends Component {
    state = {
        gifs: [],
        index: 0,
        page: 0,
        morty: true
    };

    morties = [
        Morty1,
        Morty2,
        Morty3,
        Morty4,
        Morty5,
        Morty6,
        Morty7,
        Morty8,
        Morty9
    ];

    componentWillMount() {
        this.getGifs();
    }

    async getGifs() {}

    get currentGif() {
        const { gifs, index, morty } = this.state;

        return morty
            ? this.morties[index % this.morties.length]
            : gifs[index].mp4;
    }

    next = () => {
        this.setState({
            rickIndex: this.state.rickIndex + 1
        });
    };

    render() {
        const { gifs, index, morty } = this.state,
            { rickIndex, nextAction } = this.props;

        return (
            <Column>
                <RickQuotes index={rickIndex} />
                <SkipButton onClick={nextAction} />
            </Column>
        );
    }
}

export default connect(mapStateToProps, mapDispatchProps)(MortysMindblowers);
