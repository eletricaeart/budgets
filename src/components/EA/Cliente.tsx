
import React from 'react';

export default function Cliente ({ nome, endereço, children }: { nome: string, endereço: string, children?: React.ReactNode }) {
  return( <>
    <div className="cliente-container">
      <div>
        <header className="cliente-header">
          <div>
            Cliente
          </div>
        </header>
        <div className="cliente-content">
          <div className="card">
            <div>
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
            </div>
          </div>
        </div>
      </div>
    </div>
  </> );
};

