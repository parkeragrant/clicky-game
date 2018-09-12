import React from 'react';

const DogImgs = (props) => {
  return (
    <div className="col-sm-3">
      <img onClick={() => {
        props.handleClick(props.id)
      }} style={props.dogStyles} src={props.dogImg} />
    </div>
  );
};

export default DogImgs;