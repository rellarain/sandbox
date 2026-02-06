import React, { ButtonHTMLAttributes, MouseEventHandler, useState, useEffect } from "react";
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


    const [controlSide, setControlSide] = useState<string>('right');
    const [controlSize, setControlSize] = useState<string>('mini');
    let controlState = `${controlSize+'Control '+ controlSide +'Control'}`;

    function handleControlSide() {
        if (controlSide === 'right') {
            setControlSide('left')
        } else {setControlSide('right')}
    }
    function handleControlSize() {
        if (controlSize === 'mini') {
            setControlSize('max')
        } else {setControlSize('mini')}    
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

    const now: Date = new Date();
 

    let nowHours: number = new Date().getHours();
    let [defaultHourPhase,setDefaultHourPhase]=useState<string>('');
    useEffect(() => {
        if (nowHours >= 2 && nowHours < 6) {
            defaultHourPhase = "dawn";
        } else if (nowHours >= 6 && nowHours < 10) {
            defaultHourPhase = "morning";
        } else if (nowHours >= 10 && nowHours < 14) {
            defaultHourPhase = "noon";
        } else if (nowHours >= 14 && nowHours < 18) {
            defaultHourPhase = "afternoon";
        } else if (nowHours >= 18 && nowHours < 22) {
            defaultHourPhase = "evening";
        } else {defaultHourPhase = 'night'}
        console.log(defaultHourPhase)
        setDefaultHourPhase(defaultHourPhase)
    },[])
    
    let [hoursPhase,setHoursPhase] = useState<string>(defaultHourPhase)
    const [phaseState,setPhaseState] = useState<string>(hoursPhase)
    
    console.log(hoursPhase);
    
    function handleHourPhaseToggle() {
        setHoursPhase(defaultHourPhase);
        
    }

    function handlePhaseToggle() {
        if (phaseState === 'night') {
            setPhaseState('dawn')
        } else if (phaseState === 'dawn') {
            setPhaseState('morning')
        } else if (phaseState === 'morning') {
            setPhaseState('noon')
        } else if (phaseState === 'noon') {
            setPhaseState('afternoon')
        } else if (phaseState === 'afternoon') {
            setPhaseState('evening')
        } else {setPhaseState('night')}
    }





    return(
    <div className={"sandboxUI active"+activePage+" sandboxToggle"+sandboxToggleState+" "+lightMode+"Mode "+controlState+" h"+nowHours+"Phase"}>
        <button className="navToggle" onClick={handleSandboxToggle}>{activePage+" "+viewportColumns+", "+viewportRows}</button>
        <nav className="navPanel">
            <div>
                <button onClick={handleColeurPage} className="coleurBtn">Coleur</button>
            </div>
            <div>
                <button onClick={handleDesignrPage} className="designrBtn">Designr</button>
            </div>
            <div>
                <button onClick={handleExperimentrPage} className="sketchrBtn">Sketchr</button>
            </div>
            <div>
                <button onClick={handleProcessrPage} className="processrBtn">Processr</button>
            </div>
            <div>
                <button onClick={handleSamplrPage} className="samplrBtn">Samplr</button>
                <button>Pages</button>
                <button>Components</button>
            </div>
            <div>
                <button onClick={handleScriblrPage} className="scriblrBtn">Scriblr (0.0)</button>
                <button>Drafter</button>
                <button></button>
            </div>
            <div>
                <button>Aura</button>
            </div>
            <div>
                <button>Vampyr</button>
            </div>
            <div>
                <button></button>
            </div>
        </nav>
        <main className="mainscreen">
            <Samplr/>
            <Designr/>
            <Coleur/>
            <Processr/>
            <Sketchr/>
            <Scriblr/>
        </main>
        <div className="sandboxSettings">
            <button className="dayNightToggle" onClick={handleDayNightToggle}>
                <div></div>
                <div></div>
            </button>
        </div>

        {/* NEW SANDBOX */} 

        <SandboxControl 
            setControlSideHandler={handleControlSide}
            controlSideState = {controlSide}
            setControlSizeHandler={handleControlSize}
            controlSizeState= {controlSize}
            colorsHandler = {colors}
            currentHourState={nowHours}
            setPhaseStateHandler={handlePhaseToggle}
            setHourStateHandler={handleHourPhaseToggle}
            currentPhaseState={phaseState}
            currentHourPhase={hoursPhase}
            
            />
        <SandboxControl 
            setControlSideHandler={handleControlSide}
            controlSideState = {controlSide}
            setControlSizeHandler={handleControlSize}
            controlSizeState= {controlSize}
            colorsHandler = {colors}
            currentHourState={nowHours}
            setPhaseStateHandler={handlePhaseToggle}
            setHourStateHandler={handleHourPhaseToggle}
            currentPhaseState={phaseState}
            currentHourPhase={hoursPhase}


        />
    </div>
)}








// ----------------------------------------------------------------------------
// SANDBOX CONTROL COMPONENT
// ----------------------------------------------------------------------------



interface parentState {
    setControlSideHandler: (controlSide : string) => void
    controlSideState: string
    setControlSizeHandler: (controlSize : string) => void
    controlSizeState: string
    setPhaseStateHandler: (phaseState : string) => void
    currentPhaseState: string
    setHourStateHandler: (nowHours: number) => void
    currentHourState: number
    currentHourPhase: string
    
    colorsHandler: number[][]
}


const SandboxControl: React.FC<parentState> = ({setControlSideHandler, controlSideState, setControlSizeHandler, currentHourPhase, controlSizeState, setPhaseStateHandler, currentPhaseState, setHourStateHandler, currentHourState, colorsHandler}) => {

    function handleClickSize() {
        if (controlSizeState === 'mini') {
            setControlSizeHandler('max');
        } else {setControlSizeHandler('mini')}
    }
    function handleClickSide() {
        if (controlSideState === 'right') {
            setControlSideHandler('left');
        } else {setControlSideHandler('right')}
        
    }

    function handleHourPhaseToggle() {
        // let x = setHourStateHandler(currentHourState);
        setPhaseStateHandler(currentHourPhase)
    }
    function handleManualPhaseToggle() {
        if (currentPhaseState === 'night') {
            setPhaseStateHandler('dawn')
        } else if (currentPhaseState === 'dawn') {
            setPhaseStateHandler('morning')
        } else if (currentPhaseState === 'morning') {
            setPhaseStateHandler('noon')
        } else if (currentPhaseState === 'noon') {
            setPhaseStateHandler('afternoon')
        } else if (currentPhaseState === 'afternoon') {
            setPhaseStateHandler('evening')
        } else {setPhaseStateHandler('night')}
    }
    

    let paints: number[][] = colorsHandler;

    let paint1 = [paints[0],`${"hsla("+paints[0][0]+", "+paints[0][1]+"%, "+paints[0][2]+"%, "+paints[0][3]+")"}`];
    let paint2 = [paints[1],`${"hsla("+paints[1][0]+", "+paints[1][1]+"%, "+paints[1][2]+"%, "+paints[1][3]+")"}`];
    let paint3 = [paints[2],`${"hsla("+paints[2][0]+", "+paints[2][1]+"%, "+paints[2][2]+"%, "+paints[2][3]+")"}`];
    let paint4 = [paints[3],`${"hsla("+paints[3][0]+", "+paints[3][1]+"%, "+paints[3][2]+"%, "+paints[3][3]+")"}`];
    let paint5 = [paints[4],`${"hsla("+paints[4][0]+", "+paints[4][1]+"%, "+paints[4][2]+"%, "+paints[4][3]+")"}`];
    let paint6 = [paints[5],`${"hsla("+paints[5][0]+", "+paints[5][1]+"%, "+paints[5][2]+"%, "+paints[5][3]+")"}`];
    console.log(paints);

    function ColorScale() {
    
    
        return(
    
            <div className={'colorScale'}>
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

    const PalettePaint = ({...singleColor}) => {
        

        return (
            <div className={'palettePaint'} >
                <ColorScale/>
                <ColorScale/>
                <input type="range" name="paintHue" min={0} max={359}/>
                <input type="range" name="paintSat" min={0} max={100} />
                <input type="range" name="paintLight" min={0} max={100}/>
            </div>
        )
    }


    return(

        <div className={'sandboxControl'}>
            <button onClick={handleClickSize} className="controlSizeToggle">+/-</button>
            <div className="timeOfDayComponent">
                <button></button>
                <button>{currentHourState}</button>
            </div>
            <div className={'colorPalette'}>
                <PalettePaint/>
                <PalettePaint/>
                <PalettePaint/>
                <PalettePaint/>
                <PalettePaint/>
                <PalettePaint/>
            </div>
            <button onClick={handleClickSide} className="controlSideToggle">L/R</button>
        </div>

    )
}



export default App;