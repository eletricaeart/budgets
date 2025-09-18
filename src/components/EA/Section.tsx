
import React from 'react';
import { View } from '../widgets';

export default function Section ({ label, className, children }: { label?: string, className?: string, children?: React.ReactNode }) {
  // If a label is provided, wrap the children in a header structure.
  if( label ) {
    return( <>
      <section className={className}>
        <View as='ui' className="section-wrapper">
          <header className="section-header">
            <View as="t6">{label}</View>
          </header>
          <View as='content' className="section-content">
            {children}
          </View>
        </View>
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

