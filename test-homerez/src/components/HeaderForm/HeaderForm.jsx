import React from 'react';
import { Link } from 'react-router-dom';
import './HeaderForm.css';

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
