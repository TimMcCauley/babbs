import React from 'react';
import Input from '../Input/Input';
import Button from '../Button/Button';
import './HomeNewsLetterRow.scss'

const HomeNewsLetterRow = () => {
   return (
      <div className="newsletter">
         <h2>Subscribe for updates</h2>
         <div className="news-caption">
            Enter your email to receive updates about my projects and writing.
         </div>
         <div className="field-container">
            <Input />
            <div style={{width: '10px', height: '10px'}} />
            <Button color="dark" text="Submit" />
         </div>
      </div>
   )
}

export default HomeNewsLetterRow;
