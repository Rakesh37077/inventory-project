import React, { useState, useEffect } from 'react';

const RangeSlider = ({ label, minValue, maxValue, defaultValue, id, step = 0.1, onChange }) => {
  const [value, setValue] = useState(defaultValue);
  const [debouncedValue, setDebouncedValue] = useState(defaultValue);

  useEffect(() => {
    const debounceTimeout = setTimeout(() => {
      setDebouncedValue(value);
      onChange(value); // Call the provided onChange handler with the updated value
    }, 300);

    return () => {
      clearTimeout(debounceTimeout);
    };
  }, [value, onChange]);

  const handleChange = (event) => {
    const updatedValue = parseFloat(event.target.value);
    setValue(updatedValue); // Update the local state with the new value
  };

  return (
    <div className="range-slider mb-6">
      <div className='flex justify-between'>
        <label htmlFor="slider" className='text-base'>{label}</label>
        <p className='text-base'>Value: {debouncedValue}</p>
      </div>
      <input
        className='range-slider__range'
        type="range"
        id="slider"
        name="slider"
        min={minValue}
        max={maxValue}
        step={id === 'interestRate' ? step : ''}
        value={value}
        onChange={handleChange}
      />
      <div className='flex justify-between'>
        <span className='text-gray-400 text-xs'>
          {id === 'loanAmount' ? '₹' + minValue : minValue}
        </span>
        <span className='text-gray-400 text-xs'>
          {id === 'loanAmount' ? '₹' + maxValue : maxValue}
        </span>
      </div>
    </div>
  );
};

export default RangeSlider;
