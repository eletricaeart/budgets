
import React from 'react';
import { View } from '../widgets';

export default function Article ({ label, className, children }: { label?: string, className?: string, children?: React.ReactNode }) {
  const headerTextStyle: React.CSSProperties = {
    fontWeight: 700,
    textTransform: 'uppercase',
  };

  // The original script only adds the wrapper if a 'label' exists.
  if( label ) {
    return( <>
      <article className={className}>
        <View className="article-wrapper">
          <header className="article-header">
            <View>
            <p style={headerTextStyle}>
              {label}
            </p>
            </View>
          </header>
          <View className="article-content">
            {children}
          </View>
        </View>
      </article>
    </> );
  }

  // If no label is provided, render the article tag with children, preserving the class.
  return( <>
    <article className={className}>
      {children}
    </article>
  </> );
};

