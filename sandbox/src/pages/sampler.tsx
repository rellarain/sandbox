import { useState } from "react";

function Samplr() {

    const [carouselPosition, setCarouselPosition] = useState<string>("0%");

    function handleCarouselLeft() {
        let newPosition = parseInt(carouselPosition) + 10;
        setCarouselPosition(`${newPosition}%`);
    }
    function handleCarouselRight() {
        let newPosition = parseInt(carouselPosition) - 10;
        setCarouselPosition(`${newPosition}%`);
    }

    let elementStyle: React.CSSProperties = {
        left: carouselPosition
    }


    return (
        <div className="pageSamplr">
            <div style={elementStyle} className="samplrCarousel" >
                <section>Page</section>
                <section>Page</section>
                <section>Page</section>
                <section>Page</section>
                <section>Component</section>
                <section>Component</section>
                <section>Component</section>


            </div>
            <button className="samplrCarouselBtnL" onClick={handleCarouselLeft}>L</button>
            <button className="samplrCarouselBtnR" onClick={handleCarouselRight}>R</button>
        </div>
    )
}

export default Samplr