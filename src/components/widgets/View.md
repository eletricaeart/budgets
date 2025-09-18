
import React from 'react';

type ViewProps<C extends React.ElementType> = {
  as?: C;
  children?: React.ReactNode;
  style?: React.CSSProperties;
} & Omit<React.ComponentPropsWithoutRef<C>, 'as' | 'children' | 'style'>;

/**
 * == [ View ] ==
 * Um componente polimórfico que, por padrão, renderiza uma <div> com display: flex.
 * Ele pode renderizar qualquer outra tag HTML ou componente React através da prop `as`.
 *
 * @example
 * // Renderiza uma <main> com a classe "container"
 * <View as="main" className="container">...</View>
 *
 * @example
 * // Renderiza um <a> com o atributo href
 * <View as="a" href="/home">Link</View>
 */
export function View<C extends React.ElementType = 'div'>({
  as,
  children,
  style,
  ...props
}: ViewProps<C>) {
  const Component = as || 'div';
  return( <>
    <Component style={{ display: 'flex', ...style }} {...props}>
      {children}
    </Component>
  </> );
}


