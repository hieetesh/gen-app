import React from 'react';
import './button.css'
function ButtonCustom({label, onClick}) {
  return (
    <div data-testid="button" className="button-style" onClick={()=>onClick()}>
        {label}
    </div>
  );
}

export default ButtonCustom;
