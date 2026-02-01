import { useState } from "react";
import Samplr from "./pages/sampler";
import Designr from "./pages/designer";
import Coleur from "./pages/coleur";
import Processr from "./pages/processr";
import Sketchr from "./pages/experimentr";
import Scriblr from "./pages/scriblr";

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
    

    return(
    <div className={"sandboxUI active"+activePage+" sandboxToggle"+sandboxToggleState+" "+lightMode+"Mode"}>
        <button className="navToggle" onClick={handleSandboxToggle}>{activePage}</button>
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
    </div>
)}

export default App;