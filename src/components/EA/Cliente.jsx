
import React from 'react';
import { View } from '../widgets';

export default function Cliente ({ nome, endereço, children }) {
  return (
    // The root element in the original script was <ui>, replaced by a div.
    <View as='cliente' className="cliente-container">
      <ui>
      <header className="cliente-header">
        {/* This inner <ui> tag is also replaced by a div */}
        <ui>
          Cliente
        </ui>
      </header>
      {/* The <content> tag is replaced by a div */}
      <content className="cliente-content">
        {/* The <card> tag is replaced by a div */}
        <card className="card">
          {/* Final <ui> tag replaced by a div */}
          <ui>
            {nome && (
              <t>
                <b>Nome: </b> {nome}
              </t>
            )}
            {endereço && (
              <t>
                <b>Endereço: </b> {endereço}
              </t>
            )}
            {/* Render any other nested elements */}
            {children}
          </ui>
        </card>
      </content>
      </ui>
    </View>
  );
};

