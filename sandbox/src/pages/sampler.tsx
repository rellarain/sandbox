import { useState } from "react";

function Samplr() {

    const [timeOfDay,setTimeOfDay] = useState<number>(10)
    const [phaseOfDay,setPhaseOfDay] = useState<string>("morning");

    function handleTimeCalc() {
        if (2 >= timeOfDay  || timeOfDay >= 22) {
            setPhaseOfDay("night");
        } else if (timeOfDay > 2 && timeOfDay >= 6) {
            setPhaseOfDay("dawn");
        } else if (timeOfDay > 6 && timeOfDay >= 10) {
            setPhaseOfDay("morning");
        } else if (timeOfDay > 10 && timeOfDay >= 14) {
            setPhaseOfDay("noon");
        } else if (timeOfDay > 14 && timeOfDay >= 18) {
            setPhaseOfDay("afternoon");
        } else if (timeOfDay > 18 && timeOfDay >= 22) {
            setPhaseOfDay("evening");
        }
    }

    return (
        <main className="pageSamplr">
            <nav>
                <button>Pages</button>
                <button>Interfaces</button>
                <button>Components</button>
            </nav>
            <ul className="samplrPagesBtns">
                <button>Pages</button>
            </ul>
            <ul className="samplrPagesBtns">
                <button>Interfaces</button>
            </ul>
            <ul>
                <button>Components</button>
            </ul>
            <div className="samplrViewport">
                <div className="samplrPages">

                </div>
                <div className="samplrInterfaces">

                </div>
                <div className="samplrComponents">
                    <section>
                        <div className={"timeOfDayToggle "+phaseOfDay}>
                            <button onClick={handleTimeCalc}>
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
                                <div></div>
                                <div></div>
                                <div></div>
                            </button>
                            <div>{timeOfDay}</div>
                        </div>

                    </section>
                </div>
            </div>
        </main>
    )
}








export default Samplr