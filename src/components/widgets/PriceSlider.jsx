import { useState, useRef, useEffect } from 'react';

const PriceSlider = ({
  min = 10,
  max = 10000,
  markers = [10, 30, 100, 300, 1000, 3000, 10000],
  defaultValue = 1000,
  beforeValueText = 'I have',
  afterValueText = 'average support tickets per month',
  onChange,
  trackColorFilled = 'bg-fuchsia-800',
  trackColorEmpty = 'bg-fuchsia-300',
  thumbColor = 'bg-white',
}) => {
  const [value, setValue] = useState(defaultValue);
  const [inputValue, setInputValue] = useState(defaultValue.toString());
  const [isDragging, setIsDragging] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);
  const sliderRef = useRef(null);
  const inputRef = useRef(null);

  // Format value for display (with commas)
  const formatValue = (val) => {
    return val.toLocaleString();
  };

  // Parse value from formatted string
  const parseValue = (str) => {
    return parseInt(str.replace(/,/g, ''), 10);
  };

  const getPercentage = (val) => {
    if (val <= min) return 0;
    if (val >= max) return 100;
    const logMin = Math.log10(min);
    const logMax = Math.log10(max);
    const logVal = Math.log10(val);
    return ((logVal - logMin) / (logMax - logMin)) * 100;
  };

  const getValueFromPercentage = (percentage) => {
    const logMin = Math.log10(min);
    const logMax = Math.log10(max);
    const logVal = (percentage / 100) * (logMax - logMin) + logMin;
    return Math.round(Math.pow(10, logVal));
  };

  const generateMarkers = () => {
    // Use specific nice values that follow powers of 10
    const niceValues = markers.filter((v) => v >= min && v <= max);

    // Make sure we include min and max if they're not already in the list
    if (!niceValues.includes(min)) niceValues.unshift(min);
    if (!niceValues.includes(max)) niceValues.push(max);

    // Remove duplicates and sort
    return [...new Set(niceValues)].sort((a, b) => a - b);
  };

  const tickMarks = generateMarkers();

  const handleMouseDown = (e) => {
    e.preventDefault();
    setIsDragging(true);
    setShowTooltip(true);

    // Handle the initial click position
    if (sliderRef.current) {
      const rect = sliderRef.current.getBoundingClientRect();
      const percentage = Math.max(0, Math.min(100, ((e.clientX - rect.left) / rect.width) * 100));
      const newValue = getValueFromPercentage(percentage);
      updateValue(newValue);
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    setTimeout(() => setShowTooltip(false), 1000);
  };

  const handleMouseMove = (e) => {
    if (!isDragging || !sliderRef.current) return;

    const rect = sliderRef.current.getBoundingClientRect();
    const percentage = Math.max(0, Math.min(100, ((e.clientX - rect.left) / rect.width) * 100));
    const newValue = getValueFromPercentage(percentage);
    updateValue(newValue);
  };

  // Handle touch events
  const handleTouchStart = (e) => {
    e.preventDefault();
    setIsDragging(true);
    setShowTooltip(true);

    if (sliderRef.current && e.touches[0]) {
      const rect = sliderRef.current.getBoundingClientRect();
      const percentage = Math.max(0, Math.min(100, ((e.touches[0].clientX - rect.left) / rect.width) * 100));
      const newValue = getValueFromPercentage(percentage);
      updateValue(newValue);
    }
  };

  const handleTouchMove = (e) => {
    if (!isDragging || !sliderRef.current || !e.touches[0]) return;

    const rect = sliderRef.current.getBoundingClientRect();
    const percentage = Math.max(0, Math.min(100, ((e.touches[0].clientX - rect.left) / rect.width) * 100));
    const newValue = getValueFromPercentage(percentage);
    updateValue(newValue);
  };

  // Update both state and input values
  const updateValue = (newValue) => {
    // Ensure value is within bounds
    newValue = Math.max(min, Math.min(max, newValue));
    setValue(newValue);
    setInputValue(formatValue(newValue));
    if (onChange) onChange(newValue);
  };

  // Handle direct input changes
  const handleInputChange = (e) => {
    const raw = e.target.value;
    setInputValue(raw);
  };

  // When input loses focus, parse and validate the value
  const handleInputBlur = () => {
    const parsed = parseValue(inputValue);

    if (isNaN(parsed)) {
      // If invalid, revert to current value
      setInputValue(formatValue(value));
      return;
    }

    // Update with valid value
    updateValue(parsed);
  };

  // Handle Enter key to apply value
  const handleInputKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleInputBlur();
      e.target.blur();
    } else if (e.key === 'Escape') {
      // Revert on Escape
      setInputValue(formatValue(value));
      e.target.blur();
    }
  };

  useEffect(() => {
    if (isDragging) {
      document.body.classList.add('select-none');

      const handleMouseMoveGlobal = (e) => {
        e.preventDefault();

        if (!isDragging || !sliderRef.current) return;

        const rect = sliderRef.current.getBoundingClientRect();
        const percentage = Math.max(0, Math.min(100, ((e.clientX - rect.left) / rect.width) * 100));
        const newValue = getValueFromPercentage(percentage);
        updateValue(newValue);
      };

      const handleTouchMoveGlobal = (e) => {
        if (!isDragging || !sliderRef.current || !e.touches[0]) return;

        const rect = sliderRef.current.getBoundingClientRect();
        const percentage = Math.max(0, Math.min(100, ((e.touches[0].clientX - rect.left) / rect.width) * 100));
        const newValue = getValueFromPercentage(percentage);
        updateValue(newValue);
      };

      const handleMouseUpGlobal = () => {
        document.body.classList.remove('select-none');
        setIsDragging(false);
        setTimeout(() => setShowTooltip(false), 1000);
      };

      const handleTouchEndGlobal = () => {
        document.body.classList.remove('select-none');
        setIsDragging(false);
        setTimeout(() => setShowTooltip(false), 1000);
      };

      window.addEventListener('mousemove', handleMouseMoveGlobal);
      window.addEventListener('mouseup', handleMouseUpGlobal);
      window.addEventListener('touchmove', handleTouchMoveGlobal, { passive: false });
      window.addEventListener('touchend', handleTouchEndGlobal);

      return () => {
        window.removeEventListener('mousemove', handleMouseMoveGlobal);
        window.removeEventListener('mouseup', handleMouseUpGlobal);
        window.removeEventListener('touchmove', handleTouchMoveGlobal);
        window.removeEventListener('touchend', handleTouchEndGlobal);
      };
    }
  }, [isDragging, onChange]);

  // Initialize input value when default value changes
  useEffect(() => {
    setInputValue(formatValue(defaultValue));
  }, [defaultValue]);

  const thumbPercentage = getPercentage(value);

  return (
    <div className="max-w-full mx-auto p-2 rounded-lg">
      <div className="mb-6">
        <div className="flex items-center mb-4">
          <div className="text-lg font-medium text-white">{beforeValueText}</div>
          <div className="mx-2">
            <input
              ref={inputRef}
              type="text"
              className="text-lg font-bold bg-gray-800 text-white px-2 py-0.5 w-24 rounded border border-gray-600 text-center"
              value={inputValue}
              onChange={handleInputChange}
              onBlur={handleInputBlur}
              onKeyDown={handleInputKeyDown}
              aria-label="Set value"
            />
          </div>
          <div className="text-lg font-medium text-white">{afterValueText}</div>
        </div>

        <div className="relative mt-1">
          {/* Track background (lighter color) */}
          <div className={`absolute inset-0 rounded-full ${trackColorEmpty}`}></div>

          {/* Track filled part (darker color) up to the thumb */}
          <div
            className={`absolute inset-y-0 left-0 rounded-full ${trackColorFilled}`}
            style={{ width: `${thumbPercentage}%` }}
          ></div>

          {/* Track container for events */}
          <div
            ref={sliderRef}
            className="relative h-2 rounded-full cursor-pointer select-none z-10"
            style={{ backgroundColor: 'transparent' }}
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseUp}
            onMouseMove={handleMouseMove}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleMouseUp}
            onTouchMove={handleTouchMove}
          >
            {/* Thumb */}
            <div
              className={`absolute -top-1 h-4 w-4 ${thumbColor} rounded-full cursor-grab transform -translate-x-1/2 z-20 shadow-md`}
              style={{ left: `${thumbPercentage}%` }}
            ></div>

            {/* Tooltip */}
            {showTooltip && (
              <div
                className="absolute -top-8 px-2 py-1 bg-gray-700 text-white text-xs rounded transform -translate-x-1/2 z-30"
                style={{ left: `${thumbPercentage}%` }}
              >
                {formatValue(value)}
              </div>
            )}
          </div>

          {/* Track markers */}
          <div className="absolute inset-x-0 flex justify-between px-1 select-none">
            {tickMarks.map((marker, index) => (
              <div
                key={marker}
                className="flex flex-col items-center"
                style={{ position: 'absolute', left: `${getPercentage(marker)}%`, transform: 'translateX(-50%)' }}
              >
                {index !== 0 && index !== tickMarks.length - 1 && (
                  <div className="h-2 border-l-2 border-neutral-600 -mt-2 w-2"></div>
                )}
                <div className="text-xs text-white mt-1">{formatValue(marker)}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PriceSlider;
