
import React from 'react';
import { View } from '../widgets';

export default function Cliente ({ nome, endereço, children }: { nome: string, endereço: string, children?: React.ReactNode }) {
  return( <>
    <View className="cliente-container">
      <View>
        <header className="cliente-header">
          <View>
            Cliente
          </View>
        </header>
        <View className="cliente-content">
          <View className="card">
            <View>
              {nome && (
                <p>
                  <b>Nome: </b> {nome}
                </p>
              )}
              {endereço && (
                <p>
                  <b>Endereço: </b> {endereço}
                </p>
              )}
              {children}
            </View>
          </View>
        </View>
      </View>
    </View>
  </> );
};

