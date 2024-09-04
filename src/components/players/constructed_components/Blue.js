import React from 'react';
import Player from '../base_components/Player'
import '../../../styles/style.css'; // Ensure your styles are imported


let props = {
    listItems: {},
    info: {},
    imageURL: 'public\img\Blue.png'
}

const Blue = () => {
    return (
        <Player {...props} />
    );
};

export default Blue;