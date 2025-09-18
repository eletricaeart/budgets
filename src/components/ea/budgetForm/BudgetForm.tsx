import React, { useState } from 'react';
import ScopeSection from './ScopeSection';
import './BudgetForm.css';

interface ScopeSectionData {
  id: number;
  title: string;
  content: string;
}

const BudgetForm: React.FC = () => {
  const [issueDate, setIssueDate] = useState('');
  const [dueDate, setDueDate] = useState('');
  const [warrantyValidity, setWarrantyValidity] = useState(0);
  const [clientName, setClientName] = useState('');
  const [clientAddress, setClientAddress] = useState('');
  const [serviceName, setServiceName] = useState('');
  const [serviceDescription, setServiceDescription] = useState('');
  const [serviceQuantity, setServiceQuantity] = useState(1);
  const [serviceUnitPrice, setServiceUnitPrice] = useState(0.00);
  const [services, setServices] = useState<any[]>([]); // TODO: Define a proper type for services
  const [scopeSections, setScopeSections] = useState<ScopeSectionData[]>([{ id: 1, title: '', content: '' }]);

  const handleAddService = () => {
    const newService = {
      name: serviceName,
      description: serviceDescription,
      quantity: serviceQuantity,
      unitPrice: serviceUnitPrice,
      total: serviceQuantity * serviceUnitPrice,
    };
    setServices([...services, newService]);
    // Clear service form
    setServiceName('');
    setServiceDescription('');
    setServiceQuantity(1);
    setServiceUnitPrice(0.00);
  };

  const calculateServiceTotal = () => {
    return serviceQuantity * serviceUnitPrice;
  };

  const addNewScopeSection = () => {
    setScopeSections([...scopeSections, { id: scopeSections.length + 1, title: '', content: '' }]);
  };

  const handleScopeContentChange = (id: number, content: string) => {
    setScopeSections(scopeSections.map(section =>
      section.id === id ? { ...section, content } : section
    ));
  };

  const handleScopeTitleChange = (id: number, title: string) => {
    setScopeSections(scopeSections.map(section =>
      section.id === id ? { ...section, title } : section
    ));
  };

  return (
    <>
      <nav className="navbar">
        <a href="/">Home</a>
      </nav>

      <h1>Cadastro de Cliente e Serviços (WIP)</h1>

      <div className="budget_descs">
        <div className="grid-1-2">
          <div className="input-field">
            <label htmlFor="issueDate">Emissão</label>
            <input
              type="date"
              id="issueDate"
              value={issueDate}
              onChange={(e) => setIssueDate(e.target.value)}
            />
          </div>

          <div className="input-field">
            <label htmlFor="dueDate">Vencimento</label>
            <input
              type="date"
              id="dueDate"
              value={dueDate}
              onChange={(e) => setDueDate(e.target.value)}
            />
          </div>
        </div>

        <div className="grid-1-2">
          <div className="input-field">
            <label htmlFor="warrantyValidity">Garantia</label>
            <div className="inputy">
              <input
                type="number"
                id="warrantyValidity"
                value={warrantyValidity}
                onChange={(e) => setWarrantyValidity(Number(e.target.value))}
              />
              <text>meses</text>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="client-section">
          <h2>Dados do Cliente</h2>
          <label htmlFor="clientName">Nome do Cliente:</label>
          <input
            type="text"
            id="clientName"
            placeholder="Nome Completo"
            autoFocus
            value={clientName}
            onChange={(e) => setClientName(e.target.value)}
          />

          <label htmlFor="clientAddress">Endereço do Cliente:</label>
          <input
            type="text"
            id="clientAddress"
            placeholder="Endereço Completo"
            value={clientAddress}
            onChange={(e) => setClientAddress(e.target.value)}
          />
        </div>

        <div className="scope-section">
          <h2>Escopo dos Serviços</h2>

          <div id="scopeEditorsContainer">
            {scopeSections.map((section) => (
              <ScopeSection
                key={section.id}
                initialContent={section.content}
                onContentChange={(content) => handleScopeContentChange(section.id, content)}
                onTitleChange={(title) => handleScopeTitleChange(section.id, title)}
              />
            ))}
          </div>
          <button id="addNewSectionBtn" onClick={addNewScopeSection}>Adicionar Nova Seção</button>
          <input type="file" id="imageUpload" accept="image/*" style={{ display: 'none' }} />
        </div>

        <div className="service-section">
          <h2>Serviços</h2>
          <div className="service-form">
            <input type="hidden" id="serviceIndex" />
            <label htmlFor="serviceName">Nome do Serviço:</label>
            <input
              type="text"
              id="serviceName"
              placeholder="Ex: Instalação Elétrica"
              value={serviceName}
              onChange={(e) => setServiceName(e.target.value)}
            />

            <label htmlFor="serviceDescription">Descrição:</label>
            <textarea
              id="serviceDescription"
              placeholder="Detalhes do serviço"
              value={serviceDescription}
              onChange={(e) => setServiceDescription(e.target.value)}
            ></textarea>

            <label htmlFor="serviceQuantity">Quantidade:</label>
            <input
              type="number"
              id="serviceQuantity"
              value={serviceQuantity}
              min="1"
              onChange={(e) => setServiceQuantity(Number(e.target.value))}
            />

            <label htmlFor="serviceUnitPrice">Valor Unitário:</label>
            <input
              type="number"
              id="serviceUnitPrice"
              value={serviceUnitPrice}
              min="0"
              step="0.01"
              onChange={(e) => setServiceUnitPrice(Number(e.target.value))}
            />

            <label htmlFor="serviceTotalValue">Valor Total:</label>
            <input
              type="number"
              id="serviceTotalValue"
              value={calculateServiceTotal().toFixed(2)}
              readOnly
            />

            <button id="addServiceBtn" onClick={handleAddService}>Adicionar Serviço</button>
            <button id="updateServiceBtn" style={{ display: 'none' }}>
              Atualizar Serviço
            </button>
            <button id="cancelEditBtn" style={{ display: 'none' }}>
              Cancelar Edição
            </button>
          </div>

          <h3>Serviços Adicionados</h3>
          <table id="servicesTable">
            <thead>
              <tr>
                <th>Nome</th>
                <th>Descrição</th>
                <th>Qtd</th>
                <th>Unitário</th>
                <th>Total</th>
                <th>Ações</th>
              </tr>
            </thead>
            <tbody>
              {services.map((service, index) => (
                <tr key={index}>
                  <td>{service.name}</td>
                  <td>{service.description}</td>
                  <td>{service.quantity}</td>
                  <td>{service.unitPrice.toFixed(2)}</td>
                  <td>{service.total.toFixed(2)}</td>
                  <td>
                    {/* Action buttons for editing/deleting services */}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <button id="saveAllDataBtn">Salvar Todos os Dados</button>
      </div>
    </>
  );
};

export default BudgetForm;
