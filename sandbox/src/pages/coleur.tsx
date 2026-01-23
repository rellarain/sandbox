import { useState } from "react";
import ColeurPaint from "./components/coleur-Paint";

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

export default Coleur