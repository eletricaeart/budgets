
import React from 'react';

/**
 * == [ View ] == */ 
export function View( { style, children, as: Element = "div", ...props }: { style?: React.CSSProperties, children?: React.ReactNode, as?: React.ElementType, [key: string]: any } ) {
   return(
      <Element style={{ display: "flex", ...style }} { ...props }>
         { children }
      </Element>
   );
}


