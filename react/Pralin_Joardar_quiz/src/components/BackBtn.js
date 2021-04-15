import React from 'react'

function BackBtn({setCount}) {
    const back=()=>{
        setCount(0);
        window.location.reload();
    }
    return (
        <div>
            <button className="btn btn-warning" onClick={back}> Back </button>           
        </div>
    )
}

export default BackBtn
