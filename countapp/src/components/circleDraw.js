import React, { useRef, useState } from 'react';

// Canvas component to handle drawing on canvas
function Canvas({ onAnimationFinish }) {
  const canvasRef = useRef(null); // reference to canvas
  const [isDrawing, setIsDrawing] = useState(false); // track if drawing is in progress

  // Start drawing on canvas
  const startDrawing = (e) => {
    setIsDrawing(true);
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');
    const { clientX, clientY } = e.touches[0];
    const { left, top } = canvas.getBoundingClientRect();
    const x = clientX - left;
    const y = clientY - top;
    context.beginPath();
    context.moveTo(x, y);
  };
  // draw on canvas
  const draw = (e) => {
    if (isDrawing) {
      const canvas = canvasRef.current;
      const context = canvas.getContext('2d');
      const { clientX, clientY } = e.touches[0];
      const { left, top } = canvas.getBoundingClientRect();
      const x = clientX - left;
      const y = clientY - top;
      context.strokeStyle = '#0FF0FC'; // stroke color

      context.lineWidth = 20; // line width
      context.lineTo(x, y);
      context.stroke();

    }
  };

  // stop drawing on canvas
  const stopDrawing = () => {
    setIsDrawing(false);
    onAnimationFinish(); // Call the provided callback function when the animation finishes
    console.log('Animation finished');
  };

  return (
    <canvas
      ref={canvasRef}
      onTouchStart={startDrawing}
      onTouchMove={draw}
      onTouchEnd={stopDrawing}
      width={600}
      height={600}
      style={{
        position: 'relative',
        //border: '1px dotted black',
        cursor: 'pointer',
        background: 'transparent',
      }}
    ></canvas>
  );
}

function CircleDraw({ onAnimationFinish }) {
  return (
    <div>
      <Canvas onAnimationFinish={onAnimationFinish} />
    </div>
  );
}

export default CircleDraw;
