"use client";
import { useState, useRef } from 'react';

export default function Eye() {
  const [isActive, setIsActive] = useState(false);
  const eyeRefs = [useRef(null), useRef(null)]; // Refs for each eye
  const [pupilPositions, setPupilPositions] = useState([{ x: 0, y: 0 }, { x: 0, y: 0 }]); // Track pupil positions

  const handleMouseMove = (e, eyeIndex) => {
    const eye = eyeRefs[eyeIndex].current;
    if (!eye) return;

    const rect = eye.getBoundingClientRect();
    const eyeCenterX = rect.left + rect.width / 2;
    const eyeCenterY = rect.top + rect.height / 2;

    // Mouse position relative to the center of the eye
    const mouseX = e.clientX - eyeCenterX;
    const mouseY = e.clientY - eyeCenterY;

    // Max distance the pupil can move (e.g., 60% of the eye’s radius)
    const maxDistance = (rect.width / 2) * 0.6; // Adjust this multiplier as needed

    // Calculate the angle and distance from the center
    const distance = Math.sqrt(mouseX * mouseX + mouseY * mouseY);
    const angle = Math.atan2(mouseY, mouseX);

    // Limit the pupil movement to within the max distance
    const limitedDistance = Math.min(distance, maxDistance);
    const pupilX = (limitedDistance * Math.cos(angle)) / (rect.width / 2); // Normalize to percentage
    const pupilY = (limitedDistance * Math.sin(angle)) / (rect.height / 2); // Fixed: Removed extra )

    // Update the pupil position for this eye
    setPupilPositions((prev) => {
      const newPositions = [...prev];
      newPositions[eyeIndex] = { x: pupilX * 60, y: pupilY * 60 }; // Scale to match your original movement
      return newPositions;
    });
  };

  const handleMouseLeave = (eyeIndex) => {
    // Reset pupil to center when mouse leaves
    setPupilPositions((prev) => {
      const newPositions = [...prev];
      newPositions[eyeIndex] = { x: 0, y: 0 };
      return newPositions;
    });
  };

  return (
    <div className="relative h-max pb-5 pt-5 flex items-center justify-center z-10">
      {/* Eyes container */}
      <div className="flex gap-8 relative z-50 animate-fade-in">
        {[0, 1].map((eyeIndex) => (
          <button
            key={eyeIndex}
            ref={eyeRefs[eyeIndex]} // Attach ref to each eye
            className="bg-white border-7 border-foreground rounded-full p-8 relative hover:animate-squint"
            onMouseMove={(e) => handleMouseMove(e, eyeIndex)} // Track mouse movement
            onMouseLeave={() => handleMouseLeave(eyeIndex)} // Reset on leave
            onMouseDown={() => setIsActive(true)}
            onMouseUp={() => setIsActive(false)}
            onMouseOut={() => setIsActive(false)}
          >
            <div className="absolute inset-0 rounded-full z-[101]" />
            <div
              className={`w-12 h-12 bg-foreground bg-black border-10 rounded-full transition-transform duration-200 ease-out ${
                isActive ? 'animate-agitate' : ''
              }`}
              style={{
                borderColor: '#90D9EF',
                transform: `translate(${pupilPositions[eyeIndex].x}%, ${pupilPositions[eyeIndex].y}%)`,
              }}
            />
          </button>
        ))}
      </div>
    </div>
  );
}