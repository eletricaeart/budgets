
import React from 'react';
import { View } from '../widgets';

export default function Signatures ({ signer1 = "Rafael - Elétrica&Art", signer2 = "Assinatura do Cliente" }) {
  return( <>
    {/* The riginal script also had commented out sections for witnesses, which are omitted here. */}
    <signatures className="signatures-container">
      
      <signature className="signature">
        <content className="signature-content">
          <sig-name className="signature-name-line">
            {signer1}
          </sig-name>
        </content>
      </signature>

      <signature className="signature">
        <content className="signature-content">
          <sig-name className="signature-name-line">
            {signer2}
          </sig-name>
        </content>
      </signature>

    </signatures>
  </> );
};

