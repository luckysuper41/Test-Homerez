import React from 'react';
import './TitleContent.css';
import PropTypes from 'prop-types';

TitleContent.propTypes = {
     title : PropTypes.string,
};

TitleContent.defaultProps = {
     title : null,
}

export default function TitleContent(props) {
     const {title} = props;
     return (
          <div className="title-result">
               <span className="title-content">{title}</span>
               <span className="underline" />
          </div>
     )
}
