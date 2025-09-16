
/**
 * == [ View ] == */ 
export function View( { style, children, as = "div", ...props } ) {
   const Element = as;
   return(
      <Element style={{ display: "flex", ...style }} { ...props }>
         { children }
      </Element>
   );
}


