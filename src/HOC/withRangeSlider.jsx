import React, { useState } from 'react';

const withRangeSlider = (WrappedComponent) => {
  return function WithSlider(props) {
    const { minValue, maxValue } = props;
    const [sliderValue, setSliderValue] = useState((maxValue - minValue) / 2);

    const handleSliderChange = (value) => {
      setSliderValue(value);
    };

    return <WrappedComponent {...props} sliderValue={sliderValue} onSliderChange={handleSliderChange} />;
  };
};

export default withRangeSlider;