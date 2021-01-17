import React from 'react';
import './Button.css';
import PropTypes from 'prop-types';

Button.propTypes = {
     content: PropTypes.string,
     type: PropTypes.string,
     className: PropTypes.string,
     handleClick: PropTypes.func
};

Button.defaultProps = {
     content: null,
     type: null,
     className: null,
     handleClick: null
}

// Button - Search and Like
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
