import { useState, useRef, useEffect } from 'react';

const CustomSlider = () => {
  const [value, setValue] = useState(300);
  const sliderRef = useRef(null);

  const markers = [
    { value: 10, label: '10' },
    { value: 1000, label: '1,000' },
    { value: 5000, label: '5,000' },
    { value: 10000, label: '10,000' },
  ];

  const handleSliderClick = (e) => {
    const sliderRect = sliderRef.current.getBoundingClientRect();
    const percentage = (e.clientX - sliderRect.left) / sliderRect.width;
    const newValue = Math.round(percentage * 10000);
    setValue(Math.min(Math.max(newValue, 10), 10000));
  };

  const getPercentage = (value) => {
    return ((value + 100) / 10000) * 100;
  };

  return (
    <div className="w-full">
      <p className="text-xl mb-6">
        I plan to make <span className="bg-white px-2 py-1 rounded">{value}</span> recommendations per month.
      </p>

      <div className="relative" ref={sliderRef}>
        {/* Markers */}
        {markers.map((marker, i) => {
          let leftPosition = getPercentage(marker.value);
          if (i === markers.length - 1) {
            leftPosition = 100;
          }
          if (i === 0) {
            leftPosition = 0;
          }

          return (
            <div
              key={marker.value}
              className="absolute -translate-x-1/2 text-center -top-10"
              style={{ left: `${getPercentage(marker.value)}%` }}
            >
              <span className="text-sm text-gray-600 mb-1">{marker.label}</span>
              <div className="w-0.5 h-3 bg-gray-300" />
            </div>
          );
        })}

        {/* Track background */}
        <div className="absolute w-full h-1 bg-fuchsia-200 rounded-full cursor-pointer" onClick={handleSliderClick} />

        {/* Filled track */}
        <div className="absolute h-1 bg-fuchsia-600 rounded-full" style={{ width: `${getPercentage(value)}%` }} />

        {/* Slider thumb */}
        <div
          className="absolute w-4 h-4 bg-black rounded-full -translate-x-1/2 -translate-y-1/2 cursor-pointer"
          style={{ left: `${getPercentage(value)}%`, top: '2px' }}
          onMouseDown={(e) => {
            const handleMouseMove = (e) => {
              const sliderRect = sliderRef.current.getBoundingClientRect();
              const percentage = (e.clientX - sliderRect.left) / sliderRect.width;
              const newValue = Math.round(percentage * 10000);
              setValue(Math.min(Math.max(newValue, 10), 10000));
            };

            const handleMouseUp = () => {
              document.removeEventListener('mousemove', handleMouseMove);
              document.removeEventListener('mouseup', handleMouseUp);
            };

            document.addEventListener('mousemove', handleMouseMove);
            document.addEventListener('mouseup', handleMouseUp);
          }}
        />
      </div>
    </div>
  );
};

export default CustomSlider;
