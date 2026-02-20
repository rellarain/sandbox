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


    const [controlSide, setControlSide] = useState<string>('right');
    const [controlSize, setControlSize] = useState<string>('min');
    const [controlLock, setControlLock] = useState<string>('unlocked');
    const [pageState,setPageState] = useState<string>('active')
    const [activePage,setActivePage] = useState<string>('inactive')
    let controlState : string = `${'control' + controlSide }`;

    function handleControlSide() {
        if (controlSide === 'right') {
            setControlSide('left')
        } else {setControlSide('right')}
    }


    function handleControlSize() {
        if (controlSize === 'min') {
            setControlSize('max')
        } else {setControlSize('min')}
    }


    function handleControlLockL() {
        if (controlLock === 'lockedL') {
            setControlLock('unlocked')
        } else {setControlSize('lockedL')}
    }
    function handleControlLockR() {
        if (controlLock === 'lockedR') {
            setControlLock('unlocked')
        } else {setControlSize('lockedR')}
    }


    function handleClearPage() {
        setPageState('no');
        setActivePage('inactive');
    }


    function handleOpenPage() {
        setPageState('active');
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
    " " + pageState + "Page" +
    " " + controlSide + "Control" +
    " " + controlLock + "Control" +
    " " + controlSize + "Control" +
    " " + activePage
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
            pageChangeHandler={handleClearPage}
            lockLChangeHandler={handleControlLockL}
            lockRChangeHandler={handleControlLockR}
            activeChangeHandler={handleOpenPage}
            />
        <SandboxControl 
            pControlStates={controlStates}
            sideChangeHandler={handleControlSide}
            controllerSide="R"
            sizeChangeHandler={handleControlSize}
            currentTime={now}
            pageChangeHandler={handleClearPage}
            lockLChangeHandler={handleControlLockL}
            lockRChangeHandler={handleControlLockR}
            activeChangeHandler={handleOpenPage}
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
    pageChangeHandler: () => void
    lockLChangeHandler: () => void
    lockRChangeHandler: () => void
    activeChangeHandler: () => void
    currentTime: Date
}



function SandboxControl({
    controllerSide, pControlStates, sideChangeHandler, 
    sizeChangeHandler, currentTime, pageChangeHandler,
    lockLChangeHandler, lockRChangeHandler, activeChangeHandler
    } : ControlStates) {
    
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
            <nav className={"pageButtons"}>
                <ClockTool clockNow={clockTime}/>

            </nav>
            <nav className={"controlButtons"}>
                <button onClick={sizeChangeHandler}>+-</button>
                <button onClick={sideChangeHandler}>LR</button>
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