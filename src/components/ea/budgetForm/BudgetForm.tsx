import React, { useState } from 'react';
import './BudgetForm.css';

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

          {/* Simplified Rich Text Editor Section */}
          <section className="editor-section">
            <div className="title-container">
              <p className="section-display-title">Seção de Exemplo</p>
              <input type="text" className="section-title-input" placeholder="Adicionar título" />
            </div>
            <div className="toolbar">
              {/* Toolbar buttons can be added here, but their functionality would require a dedicated RTE library */}
              <button><b>B</b></button>
              <button><i>I</i></button>
              <button><u>U</u></button>
              <button>OL</button>
              <button>UL</button>
              <button>Texto</button>
              <button>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-text-left" viewBox="0 0 16 16">
                  <path fillRule="evenodd" d="M2 12.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5z"></path>
                </svg>
              </button>
              <button>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-text-center" viewBox="0 0 16 16">
                  <path fillRule="evenodd" d="M4 12.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm-2-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm2-3a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm-2-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5z"></path>
                </svg>
              </button>
              <button>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-text-right" viewBox="0 0 16 16">
                  <path fillRule="evenodd" d="M6 12.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm-4-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm4-3a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm-4-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5z"></path>
                </svg>
              </button>
              <button>Link</button>
              <label htmlFor="foreColor">Cor</label>
              <input type="color" />
              <label htmlFor="backColor">Marcador</label>
              <input type="color" />
              <button>Imagem URL</button>
              <button>Imagem Upload</button>
            </div>
            <div className="editor" contentEditable="true" suppressContentEditableWarning={true}></div>
          </section>

          <button id="addNewSectionBtn">Adicionar Nova Seção</button>
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
