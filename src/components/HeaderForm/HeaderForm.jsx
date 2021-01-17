import React from 'react';
import { Link } from 'react-router-dom';
import './HeaderForm.css';
import PropTypes from 'prop-types';

HeaderForm.propTypes = {
     content: PropTypes.string, 
     className: PropTypes.string, 
     link: PropTypes.string
};

HeaderForm.defaultProps = {
     content: null, 
     className: null, 
     link: null
}

export default function HeaderForm(props) {
     const {content, className, link} = props;
     return (
          <div className="form-header">
               <h2>Wiki search</h2>
               <Link
                    to={link}
                    className={className}
               >
               {content}
               </Link>
          </div>
     )
}
