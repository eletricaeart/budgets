
import React from 'react';


export function NavLink ({ to, children }) {
  return( <>
    <p>
      <a href={to} target="_blank" rel="noopener noreferrer">
        {children}
      </a>
    </p>
  </> );
};

