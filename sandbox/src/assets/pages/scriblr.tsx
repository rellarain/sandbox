import React, { useState } from "react";

function Scriblr() {
    const user: string[] = [
        "Rain Walker",
        ""
    ]


    return (
        <main className="pageScriblr">
            <Interface/>
            <Header userDetails= {user}/>
        </main>
    )
}

// ----------------------------------------------------------------------------
// Drafter
// ----------------------------------------------------------------------------

function Drafter() {

    return (
        <div className="scriblrDrafter">
            Drafter
        </div>
    )
}

// ----------------------------------------------------------------------------
// Header
// ----------------------------------------------------------------------------

function Header({...userDetails}) {
    interface userDetails {
        user: string[];
    }

    return (
        <header className="scriblrHeader">
            <img src="" alt="" />
            <div className="scriblrUsername">{userDetails[0]}</div>
            <input type="text" />
            <button>refresh</button>
            <Progress/>
        </header>
    )
}

function Progress() {


    return(

        <div className={'scriblrProgress'}>
            
        </div>

    )
}

// ----------------------------------------------------------------------------
// Interface
// ----------------------------------------------------------------------------

function Interface() {


    return(

        <div className={'scriblrInterface '}>
            <WriterUI/>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>

    )
}


// ----------------------------------------------------------------------------
// Writer Components
// ----------------------------------------------------------------------------

function WriterUI() {


    return(

        <div className={'writerUI'}>
            <WShelvesUI/>
            <WBookUI/>
            <WPagesUI/>
        </div>

    )
}

function WShelvesUI() {


    return(

        <div className={'wShelvesUI'}>
            <WShelfUI/>
            <WShelfUI/>
            <WShelfUI/>
        </div>

    )
}

function WShelfUI() {


    return(

        <div className={'wShelfUI'}>
            <button>Shelf</button>
            <div>
                <div>
                    <button></button>
                    <button></button>
                    <button></button>
                    <button></button>
                </div>
                <div>
                    <button></button>
                    <button></button>
                </div>
                <div>
                    <button></button>
                    <button></button>
                    <button></button>
                    <button></button>
                    <button></button>
                    <button></button>
                </div>
                <div>
                    <button></button>
                    <button></button>
                </div>
                <div>
                    <button></button>
                    <button></button>
                </div>
            </div>
        </div>

    )
}

function WBookUI() {


    return(

        <div className={'wBookUI'}>
            Book
        </div>

    )
}

function WPagesUI() {


    return(

        <div className={'wPagesUI'}>
            Pages
        </div>

    )
}














export default Scriblr