import React, { useState, useEffect } from 'react';
import ScopeSection from './ScopeSection';
import './BudgetForm.css';
import { View } from '../../widgets';
import Selections from '../../widgets/Selections';

// Simple ID generator (replaces uuid for this context)
const generateId = () => Math.random().toString(36).substr(2, 9);

interface Client {
  id: string;
  name: string;
  address: string;
}

interface Service {
  id: string;
  budgetId: string; // Foreign key to Budget
  name: string;
  description: string;
  quantity: number;
  unitPrice: number;
  total: number;
}

interface ScopeSectionData {
  id: string;
  title: string;
  content: string;
}

interface Budget {
  id: string;
  clientId: string; // Foreign key to Client
  issueDate: string;
  dueDate: string;
  warrantyValidity: string;
  scopeSections: ScopeSectionData[];
}

const LOCAL_STORAGE_KEYS = {
  CLIENTS: 'budgetApp_clients',
  BUDGETS: 'budgetApp_budgets',
  SERVICES: 'budgetApp_services',
};

const BudgetForm: React.FC = () => {
  // AQUI ESTÁ A CORREÇÃO: Removemos o 'as const'
  const warrantyTimeOptions = [
    '15 dias',
    '30 dias',
    '60 dias',
    '90 dias',
    '6 meses',
    '1 ano',
    '2 anos',
    '3 anos',
    '5 anos',
    'customizado',
  ];
  
  const [currentClient, setCurrentClient] = useState<Client>({
    id: generateId(),
    name: '',
    address: '',
  });
  const [currentBudget, setCurrentBudget] = useState<Budget>({
    id: generateId(),
    clientId: currentClient.id,
    issueDate: new Date().toISOString().slice(0, 10),
    dueDate: '15',
    warrantyValidity: '6 meses',
    scopeSections: [{ id: generateId(), title: '', content: '' }],
  });
  const [currentServices, setCurrentServices] = useState<Service[]>([]);

  const [serviceName, setServiceName] = useState('');
  const [serviceDescription, setServiceDescription] = useState('');
  const [serviceQuantity, setServiceQuantity] = useState(1);
  const [serviceUnitPrice, setServiceUnitPrice] = useState(0.00);

  // Load data from localStorage on component mount
  useEffect(() => {
    const savedBudgets = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEYS.BUDGETS) || '{}');
    const savedClients = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEYS.CLIENTS) || '{}');
    const savedServices = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEYS.SERVICES) || '{}');

    // For simplicity, load the first budget found or create a new one
    const budgetIds = Object.keys(savedBudgets);
    if (budgetIds.length > 0) {
      const firstBudgetId = budgetIds[0];
      const budget = savedBudgets[firstBudgetId];
      setCurrentBudget(budget);

      const client = savedClients[budget.clientId];
      if (client) {
        setCurrentClient(client);
      }

      const servicesForBudget = Object.values(savedServices).filter(
        (service: any) => service.budgetId === firstBudgetId
      ) as Service[];
      setCurrentServices(servicesForBudget);
    } else {
      // Initialize with new IDs if no data found
      const newClientId = generateId();
      const newBudgetId = generateId();
      setCurrentClient(prev => ({ ...prev, id: newClientId }));
      setCurrentBudget(prev => ({ ...prev, id: newBudgetId, clientId: newClientId, warrantyValidity: '6 meses' }));
      setCurrentServices([]);
    }
  }, []);

  const handleAddService = () => {
    const newService: Service = {
      id: generateId(),
      budgetId: currentBudget.id,
      name: serviceName,
      description: serviceDescription,
      quantity: serviceQuantity,
      unitPrice: serviceUnitPrice,
      total: serviceQuantity * serviceUnitPrice,
    };
    setCurrentServices([...currentServices, newService]);
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
    setCurrentBudget(prevBudget => ({
      ...prevBudget,
      scopeSections: [...prevBudget.scopeSections, { id: generateId(), title: '', content: '' }],
    }));
  };

  const handleScopeContentChange = (id: string, content: string) => {
    setCurrentBudget(prevBudget => ({
      ...prevBudget,
      scopeSections: prevBudget.scopeSections.map(section =>
        section.id === id ? { ...section, content } : section
      ),
    }));
  };

  const handleScopeTitleChange = (id: string, title: string) => {
    setCurrentBudget(prevBudget => ({
      ...prevBudget,
      scopeSections: prevBudget.scopeSections.map(section =>
        section.id === id ? { ...section, title } : section
      ),
    }));
  };

  const saveAllData = () => {
    // Save client
    const clients = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEYS.CLIENTS) || '{}');
    clients[currentClient.id] = currentClient;
    localStorage.setItem(LOCAL_STORAGE_KEYS.CLIENTS, JSON.stringify(clients));

    // Save budget
    const budgets = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEYS.BUDGETS) || '{}');
    budgets[currentBudget.id] = { ...currentBudget, clientId: currentClient.id }; // Ensure clientId is correct
    localStorage.setItem(LOCAL_STORAGE_KEYS.BUDGETS, JSON.stringify(budgets));

    // Save services
    const allServices = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEYS.SERVICES) || '{}');
    currentServices.forEach(service => {
      allServices[service.id] = { ...service, budgetId: currentBudget.id }; // Ensure budgetId is correct
    });
    localStorage.setItem(LOCAL_STORAGE_KEYS.SERVICES, JSON.stringify(allServices));

    alert('Dados salvos com sucesso!');
  };

  return( <>
    <nav className="navbar">
      <a href="/">Home</a>
    </nav>

    <h1>Cadastro de Cliente e Serviços (WIP)</h1>

    <View as="budget_descs">
      <View as="grid-1-2">
        <View as="input-field">
          <label htmlFor="issueDate">Data da Emissão</label>
          <input
            type="date"
            id="issueDate"
            value={currentBudget.issueDate}
            onChange={(e) => setCurrentBudget(prev => ({ ...prev, issueDate: e.target.value }))}
          />
        </View>

        <View as="input-field">
          <label htmlFor="dueDate">Dias de Validade</label>
          <input
            type="number"
            id="dueDate"
            value={currentBudget.dueDate}
            onChange={(e) => setCurrentBudget(prev => ({ ...prev, dueDate: e.target.value }))}
          />
        </View>
      </View>

      <View as="grid-1-2">
        <View as="input-field">
          <label htmlFor="warrantyValidity">Tempo de Garantia</label>
          <Selections
            opcoes={warrantyTimeOptions}
            valorPadrao={currentBudget.warrantyValidity || '6 meses'}
            onSelect={(value) => setCurrentBudget(prev => ({ ...prev, warrantyValidity: value }))}
          />
        </View>
      </View>
    </View>

    <View as="container">
      <View as="client-section">
        <h2>Dados do Cliente</h2>
        <View as='input_field'>
          <label htmlFor="clientName">Nome do Cliente:</label>
          <input
            type="text"
            id="clientName"
            placeholder="Nome Completo"
            autoFocus
            value={currentClient.name}
            onChange={(e) => setCurrentClient(prev => ({ ...prev, name: e.target.value }))}
          />
        </View>

        <View as="input_field">
          <label htmlFor="clientAddress">Endereço do Cliente:</label>
          <input
            type="text"
            id="clientAddress"
            placeholder="Endereço Completo"
            value={currentClient.address}
            onChange={(e) => setCurrentClient(prev => ({ ...prev, address: e.target.value }))}
          />
        </View>
      </View>

      <View as="scope-section">
        <h2>Escopo dos Serviços</h2>

        <View id="scopeEditorsContainer">
          {currentBudget.scopeSections.map((section, index) => (
            <ScopeSection
              key={section.id}
              id={section.id}
              initialContent={section.content}
              onContentChange={(content) => handleScopeContentChange(section.id, content)}
              onTitleChange={(title) => handleScopeTitleChange(section.id, title)}
              sectionNumber={index + 1}
            />
          ))}
        </View>
        <button id="addNewSectionBtn" onClick={addNewScopeSection}>Adicionar Nova Seção</button>
        <input type="file" id="imageUpload" accept="image/*" style={{ display: 'none' }} />
      </View>

      <View className="service-section">
        <h2>Serviços</h2>
        <View as="service-form">
          <input type="hidden" id="serviceIndex" />
        <View as="input_field">
          <label htmlFor="serviceName">Nome do Serviço:</label>
          <input
            type="text"
            id="serviceName"
            placeholder="Ex: Instalação Elétrica"
            value={serviceName}
            onChange={(e) => setServiceName(e.target.value)}
          />
        </View>

        <View as="input_field">
          <label htmlFor="serviceDescription">Descrição:</label>
          <textarea
            id="serviceDescription"
            placeholder="Detalhes do serviço"
            value={serviceDescription}
            onChange={(e) => setServiceDescription(e.target.value)}
          ></textarea>
        </View>

        <View as="input_field">
          <label htmlFor="serviceQuantity">Quantidade:</label>
          <input
            type="number"
            id="serviceQuantity"
            value={serviceQuantity}
            min="1"
            onChange={(e) => setServiceQuantity(Number(e.target.value))}
          />
        </View>

        <View as="input_field">
          <label htmlFor="serviceUnitPrice">Valor Unitário:</label>
          <input
            type="number"
            id="serviceUnitPrice"
            value={serviceUnitPrice}
            min="0"
            step="0.01"
            onChange={(e) => setServiceUnitPrice(Number(e.target.value))}
          />
        </View>

        <View as="input_field">
          <label htmlFor="serviceTotalValue">Valor Total:</label>
          <input
            type="number"
            id="serviceTotalValue"
            value={calculateServiceTotal().toFixed(2)}
            readOnly
          />
        </View>

          <button id="addServiceBtn" onClick={handleAddService}>Adicionar Serviço</button>
          <button id="updateServiceBtn" style={{ display: 'none' }}>
            Atualizar Serviço
          </button>
          <button id="cancelEditBtn" style={{ display: 'none' }}>
            Cancelar Edição
          </button>
        </View>

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
            {currentServices.map((service) => (
              <tr key={service.id}>
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
      </View>

      <button id="saveAllDataBtn" onClick={saveAllData}>Salvar Todos os Dados</button>
    </View>
  </>
  );
};

export default BudgetForm;
