
import { View } from "../widgets";
import './Signatures.css';

export default function Signatures ({ signer1 = "Rafael - Elétrica&Art", signer2 = "Assinatura do Cliente" }: { signer1?: string, signer2?: string }) {
  return( <>
    {/* The riginal script also had commented out sections for witnesses, which are omitted here. */}
    <View as="signatures" className="signatures-container">
      
      <View as="signature" className="signature">
        <View as="content" className="signature-content">
          <View as="sig-name" className="signature-name-line">
            {signer1}
          </View>
        </View>
      </View>

      <View as="signature" className="signature">
        <View as="content" className="signature-content">
          <View as="sig-name" className="signature-name-line">
            {signer2}
          </View>
        </View>
      </View>

    </View>
  </> );
};

