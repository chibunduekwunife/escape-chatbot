
import React from 'react';
import { useNavigate } from 'react-router';

export default function AppButton ({text, onClick, className, otherClasses, type, id}) {


    return (
        <button
          // onClick={() => window.history.back()}
          id={id}
          onClick={onClick}
          className={className || "px-6 py-3 bg-green-700 text-black font-bold rounded-lg hover:bg-green-500 border border-green-400 transition-all cursor-pointer " + otherClasses}
          type={type || "button"}
        >
          {text}
        </button>
    )
}
