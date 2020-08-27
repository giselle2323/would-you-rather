import React from 'react';
import Loader from 'react-loader-spinner';

function Spinner() {
  return (
    <div className="mx-auto text-center d-flex align-items-center my-auto h-full py-4">
      <Loader type="Oval" color="#00BFFF" height={100} width={100} className="mx-auto" />
    </div>
  );
}

export default Spinner;
