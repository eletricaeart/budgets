
import React from 'react';
import { View } from '../widgets';

export default function Section ({ label, className, children }) {
  // If a label is provided, wrap the children in a header structure.
  if( label ) {
    return( <>
      <section className={className}>
        <ui className="section-wrapper">
          <header className="section-header">
            <t6>{label}</t6>
          </header>
          <content className="section-content">
            {children}
          </content>
        </ui>
      </section>
    </> );
  }

  // If no label, just render the section with its children.
  return( <>
    <section className={className}>
      {children}
    </section>
  </> );
};

