import React from 'react';

const BackDrop = ({ isOpen, onToggle }) => {
  return (
    <div className={ isOpen ? 'backDrop-open': 'backDrop' } onClick={onToggle}/>
  );
};

export default BackDrop;
