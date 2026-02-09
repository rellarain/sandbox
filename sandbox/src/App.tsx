import React, { ButtonHTMLAttributes, MouseEventHandler, useState, useEffect, useRef } from "react";
import Samplr from "./pages/sampler";
import Designr from "./pages/designer";
import Coleur from "./pages/coleur";
import Processr from "./pages/processr";
import Sketchr from "./pages/experimentr";
import Scriblr from "./pages/scriblr";
import useWindowDimensions from "./assets/functionality/viewport";


function App() {


    
        
    const [sandboxToggleState, setSandboxToggleState] = useState("Inactive");
    function handleSandboxToggle() {
        if (sandboxToggleState !== "Active") {
            setSandboxToggleState('Active');
        } else {setSandboxToggleState('Inactive')}
    }

    



    const [activePage, setActivePage] = useState('home');

    function handleSamplrPage() {
        if (activePage === "Samplr") {
            setActivePage('home');
        } else {setActivePage('Samplr')}
    }
    function handleDesignrPage() {
        if (activePage === "Designr") {
            setActivePage('home');
        } else {setActivePage('Designr')}
    }
    function handleColeurPage() {
        if (activePage === "Coleur") {
            setActivePage('home');
        } else {setActivePage('Coleur')}
    }
    function handleProcessrPage() {
        if (activePage === "Processr") {
            setActivePage('home');
        } else {setActivePage('Processr')}
    }
    function handleExperimentrPage() {
        if (activePage === "Sketchr") {
            setActivePage('home');
        } else {setActivePage('Sketchr')}
    }
    function handleScriblrPage() {
        if (activePage === "Scriblr") {
            setActivePage('home');
        } else {setActivePage('Scriblr')}
    }


    const [lightMode,setLightMode] = useState("night");

    const handleDayNightToggle = () => {
        if (lightMode !== "night") {
            setLightMode("night")
        } else {setLightMode("day")}
    } 

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
    const [controlLock, setControlLock] = useState<string>('Unlocked');
    let controlState : string = `${'control' + controlSide + controlLock }`;

    function handleControlSide() {
        if (controlSide === 'R') {
            setControlSide('L')
        } else {setControlSide('R')}
    }



    function handleControlLockL() {
        if (controlLock === 'Unlocked') {
            setControlLock('LockedL')
        } else {setControlLock('Unlocked')}
    }

    function handleControlLockR() {
        if (controlLock === 'Unlocked') {
            setControlLock('LockedR')
        } else {setControlLock('Unlocked')}
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
    let nowHours: number = now.getHours();
    





    let controlStates : string[] = [controlSide,controlLock];


    // ----------------------------------------------------------------------------
    // PAGE STATE MANAGEMENT
    // ----------------------------------------------------------------------------


    let pageStates = 
        " " + "active"+ activePage +
        " " + activePhase + "Mode"+
        " " + controlState
    ;


    return(
    <div className={"sandboxUI"+pageStates}>

        <ConsoleContainer/>
        <SandboxControl 
            pControlStates={controlStates}
            sideChangeHandler={handleControlSide}
            lockChangeHandlerL={handleControlLockL}
            lockChangeHandlerR={handleControlLockR}
            controllerSide="L"
            />
        <SandboxControl 
            pControlStates={controlStates}
            sideChangeHandler={handleControlSide}
            lockChangeHandlerL={handleControlLockL}
            lockChangeHandlerR={handleControlLockR}
            controllerSide="R"
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
    lockChangeHandlerL: () => void
    lockChangeHandlerR: () => void
}




function SandboxControl({controllerSide, pControlStates, sideChangeHandler, lockChangeHandlerL, lockChangeHandlerR} : ControlStates) {
    
    function handleUnlockEvent() {
        if (controllerSide === 'L') {
            lockChangeHandlerL();
        } else {lockChangeHandlerR();}

    }

    const [sizeState,setSizeState] = useState('Min');
    
    function sizeChangeHandler() {
        if (sizeState === 'Min') {
            setSizeState('Max');
        } else {setSizeState('Min')}
    }


    return(

        <div className={'sandboxController sandboxController'+controllerSide+sizeState}>
            <button>Phase {pControlStates.toString()}</button>
            <button></button>
            <div className="controllerToggles">
                <button className={"controllerSizeToggle"} onClick={sizeChangeHandler}>{sizeState}</button>
                <button className={"controllerSideToggle"} onClick={sideChangeHandler}>{pControlStates[0]}</button>
                <button className={"controllerLock"+controllerSide+"Toggle"} onClick={handleUnlockEvent}>{controllerSide+pControlStates[2]}</button>
            </div>
        </div>

    )
}



// ----------------------------------------------------------------------------
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
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);
    
    let colQuant : number = 320;
    let colWidth : number = width/colQuant;
    let rowHeight : number = height/colQuant;



    return(

        <div className={'consoleContainer'} ref={elementRef}>
            {width+"px width / "+height+"px height"}
            <br/> {colWidth.toFixed(2)+" columns / "+rowHeight.toFixed(2)+" rows ("+colQuant+"px units)"}
            <br/> 
            <br/> 
            <br/> 
            <br/> 
            <br/> 
            <br/> 
            <br/> 
            <br/> 
            SANDBOX: no icon; displays gallery of subpages <br/> 
            <br/> TOOLBOX: wrench & pencil; 
            <br/> TOYBOX: various icons; for fun/silly projects
            <br/> MAILBOX: letter icon; for copy and communication styling
            <br/> BLACKBOX: black square; for data manipulation/handling
            <br/> GEARBOX: gear icon; displays how sandbox features work (day mode, etc.)
            <br/> JUNKBOX: 
            <br/> SHADOWBOX: framed painting icon; for digital art and UI showcasing
            <br/> 
            <br/> 
            <br/> 
            <br/> 
        </div>

    )
}


export default App;