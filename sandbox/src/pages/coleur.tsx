import { useState } from "react";

function Coleur() {

    const [paletteToggle, setPaletteToggle] = useState("closed")

    function handlePaletteToggle() {
        if (paletteToggle !== "open") {
            setPaletteToggle('open')
        } else {setPaletteToggle('closed')}
    }

    return (
        <div className={"pageColeur "+paletteToggle+"Palette"}>
            <div className="coleurPalette">
                <section>
                    <section>
                        <button onClick={handlePaletteToggle}></button>
                    </section>
                    <section>
                        <button onClick={handlePaletteToggle}></button>
                    </section>
                    <section>
                        <button onClick={handlePaletteToggle}></button>
                    </section>
                    <section>
                        <button onClick={handlePaletteToggle}></button>
                    </section>
                    <section>
                        <button onClick={handlePaletteToggle}></button>
                    </section>
                    <section>
                        <button onClick={handlePaletteToggle}></button>
                    </section>
                    <section>
                        <button onClick={handlePaletteToggle}></button>
                    </section>
                    <section>
                        <button onClick={handlePaletteToggle}></button>
                    </section>
                    <section>
                        <button onClick={handlePaletteToggle}></button>
                    </section>
                    <section>
                        <button onClick={handlePaletteToggle}></button>
                    </section>
                </section>
            </div>
        </div>
    )
}

export default Coleur