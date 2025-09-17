
export default function Signatures ({ signer1 = "Rafael - Elétrica&Art", signer2 = "Assinatura do Cliente" }: { signer1?: string, signer2?: string }) {
  return( <>
    {/* The riginal script also had commented out sections for witnesses, which are omitted here. */}
    <div className="signatures-container">
      
      <div className="signature">
        <div className="signature-content">
          <div className="signature-name-line">
            {signer1}
          </div>
        </div>
      </div>

      <div className="signature">
        <div className="signature-content">
          <div className="signature-name-line">
            {signer2}
          </div>
        </div>
      </div>

    </div>
  </> );
};

