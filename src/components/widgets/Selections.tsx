
import React from 'react';
import { useDropdown } from '../../hooks/useDropDown'; // O nosso hook continua o mesmo, perfeito!

// 1. Criamos uma interface para definir os tipos das nossas props.
// Isso é uma prática excelente em TypeScript!
interface DropdownProps {
  opcoes: string[]; // O componente precisa de um array de strings.
  valorPadrao: string; // E precisa de uma string para o valor padrão.
}

// 2. O componente agora recebe as props desestruturadas.
// Repare que ele não tem mais a lista de opções "fixa".
const Selections: React.FC<DropdownProps> = ({ opcoes, valorPadrao }) => {
  // A mágica acontece aqui! O hook agora usa as props que a gente passou.
  const [opcaoSelecionada, setOpcaoSelecionada, textoCustomizado, setTextoCustomizado] =
    useDropdown(opcoes, valorPadrao);

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setOpcaoSelecionada(e.target.value);
  };

  const handleCustomChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTextoCustomizado(e.target.value);
  };

  return (
    <div>
      <select value={opcaoSelecionada} onChange={handleChange}>
        {opcoes.map((opcao) => (
          <option key={opcao} value={opcao}>
            {opcao}
          </option>
        ))}
      </select>

      {opcaoSelecionada === 'customizado' && (
        <input
          type="text"
          value={textoCustomizado}
          onChange={handleCustomChange}
          placeholder="Digite o valor personalizado"
          style={{ marginLeft: '10px' }}
        />
      )}
    </div>
  );
};

export default Selections;
