
import React from 'react';
import { View } from '../widgets';

// The component accepts props for signer names, with default values from the original code.
export default function Signatures ({ signer1 = "Rafael - Elétrica&Art", signer2 = "Assinatura do Cliente" }) {
  return (
    // The original <signatures> tag is replaced by a root div.
    // The original script also had commented out sections for witnesses, which are omitted here.
    <signatures className="signatures-container">
      
      {/* Each <signature section> is converted to a div */}
      <signature className="signature">
        <ontent className="signature-content">
          {/* <sig-name> is converted to a div */}
          <div className="signature-name-line">
            {signer1}
          </div>
        </ontent>
      </signature>

      <signature className="signature">
        <content className="signature-content">
          <div className="signature-name-line">
            {signer2}
          </div>
        </content>
      </signature>

    </signatures>
  );
};

