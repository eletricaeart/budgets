
import { View } from '../widgets/index';
import './EACard.css';

export default function EACard ({ section }: { section: string }) {
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
    <View as="div" className="ea-card" data-section={section}>
      {/* <style>{eaCardStyle}</style> */}
      <style>{testStyle}</style>
      <View className="ea-logo">
        <View className="content">
          <img 
            src={eaLogos.local}
            alt="ea-logo" 
          />
        </View>
      </View>
      <View className="description">
        <View className="ea-name">
          <img 
            src={eaLogos.name}
            alt="ea-Name" 
          />
        </View>
        <h5>
          CNPJ 32.858.892/0001-52 - IM 67358/0001
        </h5>
        <p className="t-block">
          Rua José Alves Maciel, 40 - Aviação <br />
          Praia Grande - São Paulo - SP - Cep 11702-440
        </p>
        <p className="t-block">
          <a href="tel:+5513997685853">
            <strong>Fone </strong> ( 13 ) 99768-5853 <br />
          </a>
          <a href="https://wa.me/5513997685853">
            <strong>Whatsapp </strong> ( 13 ) 99768-5853 <br />
          </a>
          <a href="mailto:rafa.julia.forever@gmail.com">
            <strong>E-mail </strong> rafa.julia.forever@gmail.com <br />
          </a>
        </p>
      </View>
    </View>
  );
}

