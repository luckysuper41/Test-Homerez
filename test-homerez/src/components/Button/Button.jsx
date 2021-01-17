import React from 'react';
import './Button.css';

export default function Button(props) {
     const {content,type,className,handleClick} = props;
     return (
          <>
               <button 
                    className={className}
                    type={type}
                    onClick={handleClick}
               >
               {content}
               </button>
          </>
     )
}
