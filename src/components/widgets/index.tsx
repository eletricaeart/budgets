
import React from 'react';

// Helper type: Se C for um tipo de elemento React padrão, pega suas props.
// Senão (se for uma string como "card"), permite qualquer prop.
type PropsOf<C extends React.ElementType | string> = C extends React.ElementType
  ? React.ComponentPropsWithoutRef<C>
  : { [key: string]: any };

// O tipo genérico para as props do componente.
type ViewProps<C extends React.ElementType | string> = {
  /** A tag HTML ou componente a ser renderizado. Padrão: 'div' */
  as?: C;
  children?: React.ReactNode;
  style?: React.CSSProperties;
} & Omit<PropsOf<C>, 'as' | 'children' | 'style'>;

/**
 * == [ View ] ==
 * Um componente polimórfico que, por padrão, renderiza uma <div> com display: flex.
 * Ele pode renderizar qualquer outra tag HTML (padrão ou customizada) ou componente React através da prop `as`.
 *
 * @example
 * // Renderiza uma <main> com a classe "container" (com type-check)
 * <View as="main" className="container">...</View>
 *
 * @example
 * // Renderiza uma tag customizada <card> com qualquer atributo
 * <View as="card" custom-attr="qualquer-coisa">...</View>
 */
export function View<C extends React.ElementType | string = 'div'>({
  as,
  children,
  style,
  ...props
}: ViewProps<C>) {
  // Se a prop 'as' não for fornecida, usa 'div' como padrão.
  const Component = as || 'div';
  return (
    <Component style={{  }} {...props}>
      {children}
    </Component>
  );
}
    {/* <Component style={{ display: 'flex', ...style }} {...props}> */}


