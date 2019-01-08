import React from 'react';
import '../ClearButton/ClearButton.css'


const ClearButton = (props) => {
    return (
        <div className="clear-btn" onClick={props.handleClear}> 
        {/* you can also pass in functions as props */}
            {props.children}
        </div>
    );
};

export default ClearButton;