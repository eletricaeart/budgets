
import React from 'react';
import { View } from '../widgets/index';
import './EACard.css';

export default function EACard ({ section }) {
  const eaLogos = {
    local: "/assets/eaLogos/ea300.png",
    name: "/assets/eaLogos/ea-Name.png",
  };

  const bgs = {
    bg4: "/assets/bgs/bg4.png",
  };

 
  const testStyle = `
    .ea-card[data-section="dual"] {
      background-image: url("${bgs.bg4}");
      background-color: #0009;
      background-size: cover;
    }
  `;

  return (
    <View as="ea-card" className="ea-card" data-section={section}>
      {/* <style>{eaCardStyle}</style> */}
      <style>{testStyle}</style>
      <ea-logo className="ea-logo">
        <content className="content">
          <img 
            src={eaLogos.local}
            alt="ea-logo" 
          />
        </content>
      </ea-logo>
      <description className="description">
        <ea-name className="ea-name">
          <img 
            src={eaLogos.name}
            alt="ea-Name" 
          />
        </ea-name>
        <t5>
          CNPJ 32.858.892/0001-52 - IM 67358/0001
        </t5>
        <t className="t-block">
          Rua José Alves Maciel, 40 - Aviação <br />
          Praia Grande - São Paulo - SP - Cep 11702-440
        </t>
        <t className="t-block">
          <a href="tel:+5513997685853">
            <strong>Fone </strong> ( 13 ) 99768-5853 <br />
          </a>
          <a href="https://wa.me/5513997685853">
            <strong>Whatsapp </strong> ( 13 ) 99768-5853 <br />
          </a>
          <a href="mailto:rafa.julia.forever@gmail.com">
            <strong>E-mail </strong> rafa.julia.forever@gmail.com <br />
          </a>
        </t>
      </description>
    </View>
  );
}

