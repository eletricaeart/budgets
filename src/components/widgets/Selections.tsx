import React from 'react';
import { useDropdown } from '../../hooks/useDropDown';

// 1. Atualizamos a interface para incluir a prop 'onSelect'.
interface DropdownProps {
  opcoes: string[];
  valorPadrao: string;
  // onSelect é uma função que recebe uma string e não retorna nada (void).
  onSelect: (value: string) => void; 
}

// 2. O componente recebe a nova prop.
const Selections: React.FC<DropdownProps> = ({ opcoes, valorPadrao, onSelect }) => {
  // A mágica acontece aqui! O hook agora usa as props que a gente passou.
  const [opcaoSelecionada, setOpcaoSelecionada, textoCustomizado, setTextoCustomizado] =
    useDropdown(opcoes, valorPadrao);

  // 3. Atualizamos o 'handleChange' para chamar a função 'onSelect'
  // quando o valor do dropdown mudar.
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newValue = e.target.value;
    setOpcaoSelecionada(newValue);
    onSelect(newValue); // Chamamos a prop para notificar o componente pai.
  };

  const handleCustomChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setTextoCustomizado(newValue);
    // 4. Também notificamos o componente pai quando o texto customizado muda.
    onSelect(newValue);
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
