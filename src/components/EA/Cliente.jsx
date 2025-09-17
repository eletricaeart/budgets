
import React from 'react';
import { View } from '../widgets';

export default function Cliente ({ nome, endereço, children }) {
  return( <>
    <View as='cliente' className="cliente-container">
      <ui>
        <header className="cliente-header">
          <ui>
            Cliente
          </ui>
        </header>
        <content className="cliente-content">
          <card className="card">
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
              {children}
            </ui>
          </card>
        </content>
      </ui>
    </View>
  </> );
};

