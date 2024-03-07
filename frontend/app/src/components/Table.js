// Table.js
import React, { useState } from 'react';

function Table({ data }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchField, setSearchField] = useState('nome');

  const handleSearchTermChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearchFieldChange = (event) => {
    setSearchField(event.target.value);
  };

  // Filtrar os dados com base no termo de pesquisa e no campo selecionado
  const filteredData = data.filter((item) => {
    if (searchField === 'nome') {
      return item.nome.toLowerCase().includes(searchTerm.toLowerCase());
    } else if (searchField === 'idade') {
      return item.idade.toString().includes(searchTerm);
    } else if (searchField === 'cpf') {
      return item.cpf.includes(searchTerm);
    }
    // Adicione mais condições conforme necessário para outros campos de pesquisa
  });

  return (
    <div className="table-container">
        <p className='text-search'> Selecione a busca: </p>
      <select value={searchField} onChange={handleSearchFieldChange} className='select-css'>
          <option value="nome">Nome</option>
          <option value="idade">Idade</option>
          <option value="cpf">CPF</option>
          {/* Adicione mais opções conforme necessário para outros campos de pesquisa */}
        </select>
      <div id="divBusca">
        <input
          type="text"
          id="txtBusca"
          placeholder="Buscar..."
          value={searchTerm}
          onChange={handleSearchTermChange}
        />
        {/* <button id="btnBusca">Buscar</button> */}
      </div>
      <table>
        <thead>
          <tr>
            <th>Nome</th>
            <th>Idade</th>
            <th>CPF</th>
            {/* Adicione mais colunas conforme necessário */}
          </tr>
        </thead>
        <tbody>
          {filteredData.map((item, index) => (
            <tr key={index}>
              <td>{item.nome}</td>
              <td>{item.idade}</td>
              <td>{item.cpf}</td>
              {/* Adicione mais células conforme necessário */}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;