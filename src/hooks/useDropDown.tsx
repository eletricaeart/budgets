
import { useState } from 'react';

// Aqui a gente define o tipo do que o nosso hook vai retornar.
// Ele vai retornar um array de três posições.
// 1. A opção selecionada (string).
// 2. A função para atualizar essa opção.
// 3. O texto customizado (string).
// 4. A função para atualizar o texto customizado.
type UseDropdownResult = [string, (value: string) => void, string, (value: string) => void];

// O nosso Custom Hook. Ele aceita as opções e a opção padrão como argumentos.
// A gente usa genéricos <T extends string> pra garantir que as opções sejam strings.
// O valor padrão também precisa ser uma string.
export const useDropdown = <T extends string>(
  opcoes: T[],
  valorPadrao: T
): UseDropdownResult => {
  // A lógica do estado é a mesma de antes, só que agora está aqui dentro.
  const [opcaoSelecionada, setOpcaoSelecionada] = useState<T | string>(valorPadrao);
  const [textoCustomizado, setTextoCustomizado] = useState<string>('');

  // Retornamos os valores e as funções que o componente vai precisar.
  // A gente cria um "handle" intermediário para a opção selecionada.
  const handleChange = (value: string) => {
    setOpcaoSelecionada(value);
  };
  
  // E o handle para o texto customizado.
  const handleCustomChange = (value: string) => {
    setTextoCustomizado(value);
  };

  return [opcaoSelecionada, handleChange, textoCustomizado, handleCustomChange];
};
