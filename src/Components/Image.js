import React from 'react'
import Boundingbox from 'react-bounding-box'
import './Images.css';

const params = {
    boxes: [
        //[x1, y1, width, height]
        [0, 0, 20, 20],
        [30, 0, 25, 25],
        [70, 0, 30, 35],
        [110, 0, 35, 40]
    ],
    options: {
        colors: {
            normal: 'green',
            selected: 'red',
            unselected: 'blue'
        },

        style: {
            maxWidth: '100%',
            maxHeight: '90vh',
            width: '400px',
            height: '300px'
        }
    }
};

class Images extends React.Component {
    render() {
        return (
            <div className="imagesGallery">
                <Boundingbox image={this.props.value} alt={this.props.key} boxes={params.boxes}
                    options={params.options} />
            </div>
        );
    }
}

export default Images 