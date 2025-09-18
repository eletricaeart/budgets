
import { View } from '../widgets';
import './DocTitle.css';

export default function DocTitle ({ subtitle, emissao, validade, children }: { subtitle: string, emissao: string, validade: string, children: React.ReactNode }) {
  // const titleStyle = {
  //   fontWeight: 700,
  //   color: '#003b6b',
  // };

  // const subtitleStyle = {
  //   fontWeight: 700,
  //   color: 'var(--sv-azul-bebe)',
  // };

  // const detailsStyle = {
  //   background: '#fff',
  //   width: '100%',
  //   padding: '0.2em',
  //   margin: '0.2em 0 0',
  //   display: 'flex',
  //   alignItems: 'center',
  //   justifyContent: 'end',
  //   gap: '1em',
  //   fontSize: '0.8em',
  // };

  // const separatorStyle = {
  //   fontWeight: 700,
  //   padding: '0 0.5em',
  // };

  return( <>
    <View as='doc-title'>
      {subtitle && (
        <View as='t' className='subtitle'>
          {subtitle}
        </View>
      )}
      <View as='t' className='title'>
        {children}
      </View>
      <View as='t' id="doc_id" className='detailsStyle'>
        <b>Data de Emissão: </b>
        <View as='t'>{emissao}</View>
        <View as='t' className='separatorStyle'> | </View>
        <b>Validade da Proposta: </b>
        <View as='t'>{validade}</View>
      </View>
    </View>
  </> );
};

