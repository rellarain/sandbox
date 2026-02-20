import React from "react"

interface TimeInfo {
    clockNow: string
}

function ClockTool({clockNow} : TimeInfo) {


    return(

        <nav className={'clockTool'}>
            {clockNow}
        </nav>

    )
}


export default ClockTool