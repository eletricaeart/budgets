
import React from 'react';
import { View } from '../widgets';
import './Article.css';

export default function Article ({ label, className, children }: { label?: string, className?: string, children?: React.ReactNode }) {
  const headerTextStyle: React.CSSProperties = {
    fontWeight: 700,
    textTransform: 'uppercase',
  };

  // The original script only adds the wrapper if a 'label' exists.
  if( label ) {
    return( <>
      <article className={className}>
        <View as='ui' className="article-wrapper">
          <header className="article-header">
            <View as='ui'>
              <View as='t' className='headerTextStyle'>
                {label}
              </View>
            </View>
          </header>
          <View as='content' className="article-content">
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

