import React from 'react';

const Logo = ({ className = "" }) => {
  return (
    <div className={`flex flex-col items-center justify-center ${className}`}>
      <div className="text-2xl md:text-3xl font-display font-bold tracking-[0.2em] text-white flex items-center leading-none">
        <span>H</span>
        <span className="relative flex items-center justify-center mx-[0.1em] h-[1em] w-[0.8em]">
          <svg viewBox="0 0 24 24" className="h-full w-full absolute inset-0" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="square" strokeLinejoin="miter">
            <path d="M12 2 L3 22" />
            <path d="M12 2 L21 22" />
            <path d="M7.5 16 L12 16 L9.75 11 Z" fill="#0A6CFF" stroke="none" />
          </svg>
        </span>
        <span>DYR</span>
        <span className="relative flex items-center justify-center mx-[0.1em] h-[1em] w-[0.8em]">
          <svg viewBox="0 0 24 24" className="h-full w-full absolute inset-0" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="square" strokeLinejoin="miter">
            <path d="M12 2 L3 22" />
            <path d="M12 2 L21 22" />
            <path d="M7.5 16 L12 16 L9.75 11 Z" fill="#0A6CFF" stroke="none" />
          </svg>
        </span>
      </div>
      <div className="flex items-center gap-2 mt-2 w-full">
        <div className="h-px flex-1 bg-brand-gray/60"></div>
        <span className="text-[0.45rem] md:text-[0.55rem] tracking-[0.4em] font-medium text-brand-gray uppercase">Technologies</span>
        <div className="h-px flex-1 bg-brand-gray/60"></div>
      </div>
    </div>
  );
};

export default Logo;
