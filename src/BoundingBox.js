import React, { useState, useCallback, useEffect, useRef } from "react";
import Boundingbox from 'react-bounding-box'
import './App.css';
import CanvasDraw from "react-canvas-draw";

export default function BoundingBox() {
    const [Image, setImage] = useState('')
    const [Box] = useState([])
    const [boxes, setboxes] = useState([])
    const [x, setX] = useState('')
    const [y, setY] = useState('')
    const [showboundingboxes, setShowboundingboxes] = useState(false)
    const [Coordinates, setCoordinates] = useState(false)

    const options = {
        colors: {
            normal: 'rgba(255,225,255,1)',
            selected: 'rgba(0,225,204,1)',
            unselected: 'rgba(100,100,100,1)'
        },
        style: {
            maxWidth: '100%',
            maxHeight: '90vh'
        },

    }
    function onImageChange(event) {
        if (event.target.files && event.target.files[0]) {
            let reader = new FileReader();
            reader.onload = e => {
                return setImage(e.target.result)
            };
            reader.readAsDataURL(event.target.files[0]);
        }
    }
    function handleCoordinates(event) {
        let boxes = Box;
        boxes[parseInt(event.target.name)] = event.target.value;
        return setboxes([boxes])
    }
    function handleClick() {
        return setShowboundingboxes(true)
    }
    function handleDrawCoordinates() {
        return setCoordinates(true)
    }
    function _onMouseMove(e) {
        setX(e.nativeEvent.offsetX)
        return setY(e.nativeEvent.offsetY)
    }
    return (
        <div className="boundingboxComponent">
            <div className="inputImage">
                <span>
                    <input
                        type="file"
                        onChange={onImageChange}
                        className="filetype"
                        id="single"
                    />
                </span>
            </div>
            <div className="firstCord" style={{ marginTop: '10px' }}>
                {" "}
                X1 :{" "}
                <input type="number" name="0" onChange={handleCoordinates} />
                Y1 :{" "}
                <input
                    type="number"
                    name="1"
                    onChange={handleCoordinates}
                />{" "}
            </div>
            <div className="secondCord" style={{ marginTop: '10px' }}>
                {" "}
                Width :{" "}
                <input type="number" name="2" onChange={handleCoordinates} />
                Height :{" "}
                <input
                    type="number"
                    name="3"
                    onChange={handleCoordinates}
                />{" "}
            </div>

            <div style={{ marginTop: '10px' }}>
                <button
                    type="button"
                    className="btn btn-primary submitButton"
                    onClick={handleClick}
                >
                    Generate image
          </button>
                <button
                    type="button"
                    className="btn btn-primary submitButton"
                    onClick={handleDrawCoordinates}
                >
                    Draw Coordinates
          </button>
            </div>
            {showboundingboxes && Coordinates ?
                <div onMouseMove={_onMouseMove}>
                    <CanvasDraw
                        brushColor="rgba(155,12,60,0.3)"
                        imgSrc={Image}
                    />
                    <h1>X:{x} Y:{y}</h1><br />
                </div>
                : showboundingboxes ? <Boundingbox id="custom" image={Image}
                    boxes={boxes}
                    options={options}
                /> : ''}
        </div>
    )
}