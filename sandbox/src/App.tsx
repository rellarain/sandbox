import React, { ButtonHTMLAttributes, MouseEventHandler, useState, useEffect, useRef } from "react";
import useWindowDimensions from "./assets/functionality/viewport";
import ClockTool from "./assets/components/ClockTool";


function App() {


    // ----------------------------------------------------------------------------
    // ----------------------------------------------------------------------------
    // NEW SANDBOX
    // ----------------------------------------------------------------------------
    // ----------------------------------------------------------------------------

    const {viewportWidth, viewportHeight} = useWindowDimensions();
    let viewportColumns = Math.floor(viewportWidth / 400);
    let viewportRows = Math.floor(viewportHeight / 400);



    // ----------------------------------------------------------------------------
    // SIZE AND SIDE CONTROLS
    // ----------------------------------------------------------------------------


    const [controlSide, setControlSide] = useState<string>('R');
    const [controlSize, setControlSize] = useState<string>('Min');
    let controlState : string = `${'control' + controlSide }`;

    function handleControlSide() {
        if (controlSide === 'R') {
            setControlSide('L')
        } else {setControlSide('R')}
    }

    function handleControlSize() {
        if (controlSize === 'Min') {
            setControlSize('Max')
        } else {setControlSize('Min')}
    }



    // ----------------------------------------------------------------------------
    // COLOR SCHEME DEFINITION
    // ----------------------------------------------------------------------------
    

    let colors: number[][] = [
        [0,40,50,1],
        [60,40,50,1],
        [120,40,50,1],
        [180,40,50,1],
        [240,40,50,1],
        [300,40,50,1]
    ]


    // ----------------------------------------------------------------------------
    // Time and Date !!!!!!!!!!!!!!!!----BROKEN
    // ----------------------------------------------------------------------------
    const [activePhase,setActivePhase] = useState('night')

    const now: Date = new Date();    





    let controlStates : string[] = [controlSide,controlSize];


    // ----------------------------------------------------------------------------
    // PAGE STATE MANAGEMENT
    // ----------------------------------------------------------------------------


    let pageStates = 
    " " + activePhase + "Mode"+
    " " + controlState +
    " sandboxController" + controlSize
    ;


    return(
    <div className={"sandboxUI"+pageStates}>

        <ConsoleContainer/>
        <SandboxControl 
            pControlStates={controlStates}
            sideChangeHandler={handleControlSide}
            controllerSide="L"
            sizeChangeHandler={handleControlSize}
            currentTime={now}
            />
        <SandboxControl 
            pControlStates={controlStates}
            sideChangeHandler={handleControlSide}
            controllerSide="R"
            sizeChangeHandler={handleControlSize}
            currentTime={now}
        />


    </div>
)}




// ----------------------------------------------------------------------------
// SANDBOX CONTROL COMPONENT
// ----------------------------------------------------------------------------


interface ControlStates {
    controllerSide: string,
    pControlStates: string[],
    sideChangeHandler: () => void
    sizeChangeHandler: () => void
    currentTime: Date
}



function SandboxControl({controllerSide, pControlStates, sideChangeHandler, sizeChangeHandler, currentTime} : ControlStates) {
    
    let sizeState = pControlStates[1];

    let sizeIcon;
    if (sizeState === "Min") {
        sizeIcon = "+";
    } else {sizeIcon = "-"}


    // ----------------------------------------------------------------------------
    // Sky Toggle Design
    // ----------------------------------------------------------------------------

    let hours12: number = currentTime.getHours()%12;
    let hours24: number = currentTime.getHours();
    let minutes: string = currentTime.getMinutes().toString();
    let clockTime: string = hours12 + ":" + minutes.padStart(2,"0");

    const [hourPhase, setHourPhase] = useState('night');
    const [phaseState, setPhaseState] = useState(hourPhase);
    

    useEffect(() => {
        function handleTimePhase() {
            if (hours24 <= 2) {
                return setHourPhase('night');
            } else if (hours24 <= 6) {
                return setHourPhase('dawn');
            } else if (hours24 <= 10) {
                return setHourPhase('morning');
            } else if (hours24 <= 14) {
                return setHourPhase('noon');
            } else if (hours24 <= 18) {
                return setHourPhase('afternoon');
            } else if (hours24 <= 22) {
                return setHourPhase('dusk');
            } else {return setHourPhase('night')}
        }
        window.addEventListener('load', handleTimePhase);
        return () => {window.removeEventListener('load', handleTimePhase)};
    }, []);






    return(

        <div className={'sandboxController sandboxController'+controllerSide}>
            <ClockTool/>
            <nav className={"pageButtons"}>g</nav>
            <nav className={"controlButtons"}>
                <button></button>
                <button></button>
            </nav>
        </div>

    )
}



// ---------------------------------------------------------------------------
// CONSOLE CONTAINER
// ----------------------------------------------------------------------------


function ConsoleContainer() {

    const elementRef = useRef<HTMLDivElement>(null);
    const [width, setWidth] = useState<number>(0);
    const [height, setHeight] = useState<number>(0);



    useEffect(() => {
        function handleResize() {
            if (elementRef.current) {
                const elementWidth = elementRef.current.clientWidth;
                const elementHeight = elementRef.current.clientHeight;
                setWidth(elementWidth);
                setHeight(elementHeight);
            }
        }
        window.addEventListener('load', handleResize);
        window.addEventListener('resize', handleResize);
        return () => {window.removeEventListener('resize', handleResize), window.removeEventListener('load', handleResize)};
    }, []);
    
    let colQuant : number = 320;
    let colWidth : number = width/colQuant;
    let rowHeight : number = height/colQuant;



    return(

        <div className={'consoleContainer'} ref={elementRef}>
            {width+"px width / "+height+"px height"} ----- {colWidth.toFixed(2)+" columns / "+rowHeight.toFixed(2)+" rows ("+colQuant+"px units)"}

        </div>

    )
}


export default App;