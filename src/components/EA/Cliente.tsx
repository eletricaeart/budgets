
import React from 'react';
import { View } from '../widgets';

export default function Cliente ({ nome, endereço, children }: { nome: string, endereço: string, children?: React.ReactNode }) {
  return( <>
    <View as='cliente' className="cliente-container">
      <View as='ui'>
        <header className="cliente-header">
          <View as='ui'>
            Cliente
          </View>
        </header>
        <View as='content' className="cliente-content">
          <View as='card' className="card">
            <View as='ui' style={{flexFlow:"column"}}>
              {nome && (
                <View as='t'>
                  <b>Nome: </b> {nome}
                </View>
              )}
              {endereço && (
                <View as='t'>
                  <b>Endereço: </b> {endereço}
                </View>
              )}
              {children}
            </View>
          </View>
        </View>
      </View>
    </View>
  </> );
};

