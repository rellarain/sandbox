import { useState } from "react";
import Samplr from "./pages/sampler";
import Designr from "./pages/designer";
import Coleur from "./pages/coleur";

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

    

    return(
    <div className={"sandboxUI active"+activePage+" sandboxToggle"+sandboxToggleState}>
        <button className="navToggle" onClick={handleSandboxToggle}>{activePage}</button>
        <nav className="navPanel">
            <div>
                <button onClick={handleSamplrPage} className="samplrBtn">Samplr</button>
                <button>Pages</button>
                <button>Components</button>
            </div>
            <div>
                <button onClick={handleColeurPage} className="coleurBtn">Coleur</button>
            </div>
            <div>
                <button onClick={handleDesignrPage} className="designrBtn">Designr</button>
            </div>
            <div>
                <button></button>
            </div>
        </nav>
        <main className="mainscreen">
            <Samplr/>
            <Designr/>
            <Coleur/>
        </main>
        <form className="sandboxSettings" action="">settings</form>
    </div>
)}

export default App;