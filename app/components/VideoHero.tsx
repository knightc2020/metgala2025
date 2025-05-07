'use client';
import React from 'react';

export default function VideoHero() {
  return (
    <a
      href="https://www.youtube.com/watch?v=NW2oiPiqByk"
      target="_blank"
      rel="noopener noreferrer"
      className="block relative w-full pb-[56.25%] rounded-xl overflow-hidden shadow-lg"
    >
      <img
        src="https://img.youtube.com/vi/NW2oiPiqByk/hqdefault.jpg"
        alt="Met Gala 2025 Official Trailer"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 flex items-center justify-center bg-black/20">
        <div className="w-16 h-16 flex items-center justify-center rounded-full bg-white/30 backdrop-blur-sm">
          <div className="w-0 h-0 border-t-[10px] border-t-transparent border-l-[18px] border-l-white border-b-[10px] border-b-transparent ml-1" />
        </div>
      </div>
    </a>
  );
}