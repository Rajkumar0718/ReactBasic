import React, { useState, useMemo } from 'react';

const MyComponent = ({ data }) => {
  // State to store some input data
  const [inputData, setInputData] = useState('');

  // useMemo to memoize the result of a computationally expensive function
  const processedData = useMemo(() => {
    // Some computationally expensive operation, for example, transforming the input data
    console.log('Computing processed data...');
    return inputData.toUpperCase();
  }, [inputData]); // Dependency array ensures that the memoized value is recalculated only when inputData changes

  return (
    <div>
      <input
        type="text"
        value={inputData}
        onChange={(e) => setInputData(e.target.value)}
      />
      <p>Input Data: {inputData}</p>
      <p>Processed Data: {processedData}</p>
    </div>
  );
};

export default MyComponent;
