import React from 'react';

const Marker = ({ text }) => {
    return (
    <div style = {{
        display: 'inline-flex',
        textAlign: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: '100%',
        transform: 'translate(-50%, -50%)'
    }}>
        <i 
            style = {
                {
                    color: "rgb(5, 24, 56)"
                }} 
            className="fas fa-map-marker-alt fa-3x">
        </i>
    </div>);;
}

export default Marker;
