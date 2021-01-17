import React from 'react';
import './TitleContent.css';

export default function TitleContent(props) {
     const {title} = props;
     return (
          <div className="title-result">
               <span className="title-content">{title}</span>
               <span className="underline" />
          </div>
     )
}
