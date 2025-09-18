
import { View } from '../widgets/index';
import './EACard.css';
import ealogo from '../../../public/assets/eaLogos/ea300.png';
import eaname from "../../../public/assets/eaLogos/ea-Name.png";
import eabg from "../../../public/assets/bgs/bg4.png";

export default function EACard ({ section }: { section: string }) {
  const eaLogos = {
    local: ealogo,
    name: eaname,
  };

  const bgs = {
    bg4: eabg,
  };
 
  const testStyle = `
    ea-card[section="dual"] {
      background-image: url("${bgs.bg4}");
      background-color: #0009;
      background-size: cover;
    }
  `;

  return (
    <View as="ea-card" className="ea-card" section={section}>
      {/* <style>{eaCardStyle}</style> */}
      <style>{testStyle}</style>
      <View as='ea-logo' className="ea-logo">
        <View as='content' className="content">
          <img 
            src={eaLogos.local}
            alt="ea-logo" 
          />
        </View>
      </View>
      <View as="description">
        <View as="ea-name">
          <img 
            src={eaLogos.name}
            alt="ea-Name" 
          />
        </View>
        <View as='t5'>
          CNPJ 32.858.892/0001-52 - IM 67358/0001
        </View>
        <View as="t">
          Rua José Alves Maciel, 40 - Aviação <br />
          Praia Grande - São Paulo - SP - Cep 11702-440
        </View>
        <View as="t">
          <a href="tel:+5513997685853">
            <strong>Fone </strong> ( 13 ) 99768-5853 <br />
          </a>
          <a href="https://wa.me/5513997685853">
            <strong>Whatsapp </strong> ( 13 ) 99768-5853 <br />
          </a>
          <a href="mailto:rafa.julia.forever@gmail.com">
            <strong>E-mail </strong> rafa.julia.forever@gmail.com <br />
          </a>
        </View>
      </View>
    </View>
  );
}

