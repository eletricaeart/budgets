
import React, { useState } from 'react';
import '../src/styles/globals.css';
import OrcamentoBase from '../src/components/OrcamentoBase.jsx';


export default function App() {
  const [count, setCount] = useState(0);

  return <OrcamentoBase />;
}

