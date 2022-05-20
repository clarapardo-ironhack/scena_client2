import { useEffect, useState, useRef } from 'react';
import { Row } from 'react-bootstrap';
import './Slider.css'
const colors = ["#0088FE", "#00C49F", "#FFBB28"];
const delay = 2500;


const Slider = ({ images }) => {

    console.log(images)
    const [index, setIndex] = useState(0);
    const timeoutRef = useRef(null);

    function resetTimeout() {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
        }
    }

    useEffect(() => {
        resetTimeout();
        timeoutRef.current = setTimeout(
            () =>
                setIndex((prevIndex) =>
                    prevIndex === images?.length - 1 ? 0 : prevIndex + 1
                ),
            delay
        );

        return () => {
            resetTimeout();
        };
    }, [index]);


    return (
        images &&
        <div className="slideshow">
            <div
                className="slideshowSlider"
            >
                {
                    images?.length
                    &&
                    <Row>
                        <img key={index} className="slide" src={images[index]} alt="Other Profile photos" />
                    </Row>
                }
            </div>
        </div>
    )
}

export default Slider