
import React from 'react';
import { View } from '../widgets';

const DocTitle = ({ subtitle, emissao, validade, children }) => {
  const titleStyle = {
    fontWeight: 700,
    color: '#003b6b',
  };

  const subtitleStyle = {
    fontWeight: 700,
    color: 'var(--sv-azul-bebe)',
  };

  const detailsStyle = {
    background: '#fff',
    width: '100%',
    padding: '0.2em',
    margin: '0.2em 0 0',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'end',
    gap: '1em',
    fontSize: '0.8em',
  };

  const separatorStyle = {
    fontWeight: 700,
    padding: '0 0.5em',
  };

  return (
    <doc-title className="doc-title">
      {subtitle && (
        <View as ='t' style={subtitleStyle}>
          {subtitle}
        </View>
      )}
      <View as='t' style={titleStyle}>
        {children}
      </View>
      <View as ='t' id="doc_id" style={detailsStyle}>
        <b>Data de Emissão: </b>
        <span>{emissao}</span>
        <span style={separatorStyle}> | </span>
        <b>Validade da Proposta: </b>
        <span>{validade}</span>
      </View>
    </doc-title>
  );
};

export default DocTitle;
