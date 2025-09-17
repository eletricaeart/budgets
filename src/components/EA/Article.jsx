
import React from 'react';
import { View } from '../widgets';

export default function Article ({ label, className, children }) {
  const headerTextStyle = {
    fontWeight: 700,
    textTransform: 'uppercase',
  };

  // The original script only adds the wrapper if a 'label' exists.
  if (label) {
    return (
      <article className={className}>
        {/* The original script used a custom <ui> tag, here replaced by a div */}
        <ui className="article-wrapper">
          <header className="article-header">
            <ui>
            <t style={headerTextStyle}>
              {label}
            </t>
            </ui>
          </header>
          <content className="article-content">
            {children}
          </content>
        </ui>
      </article>
    );
  }

  // If no label is provided, render the article tag with children, preserving the class.
  return (
    <article className={className}>
      {children}
    </article>
  );
};

