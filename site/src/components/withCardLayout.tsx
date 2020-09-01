import React from 'react';


export const withCardLayout = (element: JSX.Element) => {
    return <div className="card" style={{ marginTop: "1rem" }}>
        <div className="card-body">
            {element}
        </div>
    </div>
}