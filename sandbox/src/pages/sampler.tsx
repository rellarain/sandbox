import { useState } from "react";

function Samplr() {



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
                        <div className="timeOfDayToggle">
                            <button>
                                <div></div>
                                <div></div>
                                <div></div>
                                <div></div>
                                <div></div>
                                <div></div>
                            </button>
                            <div>time</div>
                        </div>

                    </section>
                </div>
            </div>
        </main>
    )
}








export default Samplr