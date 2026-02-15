import { ChangeEvent, useState } from "react";

function Coleur() {

    const [paletteToggle, setPaletteToggle] = useState("closed")

    function handlePaletteToggle() {
        if (paletteToggle !== "open") {
            setPaletteToggle('open')
        } else {setPaletteToggle('closed')}
    }

    return (
        <main className={"pageColeur "+paletteToggle+"Palette"}>
            <div className="coleurPalette">
                <section>
                    <section>
                        <button onClick={handlePaletteToggle}></button>
                    </section>
                    <ColeurPaint/>
                    <ColeurPaint/>
                    <ColeurPaint/>
                    <ColeurPaint/>
                </section>
            </div>
        </main>
    )
}



function ColeurPaint() {


    const [paintState,setPaintState] = useState('Inactive');

    function handlePaintState() {
        if (paintState !== 'Active') {
            setPaintState('Active');
        } else {setPaintState('Inactive')};
    }




    let [paintHue,setPaintHue]=useState<string>("30");

    const handleHueChange = (event: ChangeEvent<HTMLInputElement>) => {
        setPaintHue(event.target.value);
    }

    let [paintSat,setPaintSat]=useState<string>("30");

    const handleSatChange = (event: ChangeEvent<HTMLInputElement>) => {
        setPaintSat(event.target.value);
    }

    let [paintLight,setPaintLight]=useState<string>("30");

    const handleLightChange = (event: ChangeEvent<HTMLInputElement>) => {
        setPaintLight(event.target.value);
    }

    let hslStyling= "hsl(" + paintHue + ", "+paintSat+"%, "+paintLight+"%)";


    let elementStyle: React.CSSProperties = {
        backgroundColor: hslStyling
    }




    function ColeurScale() {
        return (
            <div className="coleurScale" style={elementStyle}>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        )
    }



    return (
        <div className={"coleurPaint paint" + paintState}>
            <fieldset>
                <ColeurScale/>
                <ColeurScale/>
                <input type="range" name="paintHue" min={0} max={359} value={paintHue} onChange={handleHueChange}/>
                <input type="range" name="paintSat" min={0} max={100} value={paintSat} onChange={handleSatChange}/>
                <input type="range" name="paintLight" min={0} max={100} value={paintLight} onChange={handleLightChange}/>
            </fieldset>
            <button onClick={handlePaintState} style={elementStyle}>{hslStyling}</button>
        </div>
    )
}

export default Coleur