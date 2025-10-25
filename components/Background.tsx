'use client';

import React from 'react';
import LiquidEther from '@/components/LiquidEther';

export default function Background() {
  return (
    <div className="absolute inset-0 w-full h-full">
      <LiquidEther
        colors={['#3b82f6', '#8b5cf6', '#ec4899']}
        mouseForce={20}
        cursorSize={100}
        isViscous={false}
        viscous={30}
        iterationsViscous={32}
        iterationsPoisson={32}
        resolution={0.5}
        isBounce={false}
        autoDemo={true}
        autoSpeed={0.5}
        autoIntensity={2.2}
        takeoverDuration={0.25}
        autoResumeDelay={3000}
        autoRampDuration={0.6}
      />
    </div>
  );
}
