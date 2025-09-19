
import { useState } from 'react';

type UseDropdownResult = [string, (value: string) => void, string, (value: string) => void];

export const useDropdown = <T extends string>(
  valorPadrao: T
): UseDropdownResult => {
  const [opcaoSelecionada, setOpcaoSelecionada] = useState<T | string>(valorPadrao);
  const [textoCustomizado, setTextoCustomizado] = useState<string>('');

  const handleChange = (value: string) => {
    setOpcaoSelecionada(value);
  };
  
  const handleCustomChange = (value: string) => {
    setTextoCustomizado(value);
  };

  return [opcaoSelecionada, handleChange, textoCustomizado, handleCustomChange];
};
