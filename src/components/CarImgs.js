import React from 'react';

const CarImgs = (props) => {
  return (
    <div className="col-sm-3">
      <img onClick={() => {
        props.handleClick(props.id)
      }} style={props.carStyles} src={props.carImg}/>
    </div>
  );
};

export default CarImgs;