import React, { useState, useEffect } from 'react';
import api from './services/api';
import DevItem from './components/DevItem/DevItem';
import DevForm from './components/DevForm/DevForm';

import './global.css';
import './App.css';
import './Sidebar.css';
import './Main.css';

function App() {
  const [devs, setDevs] = useState([]);

  useEffect(() => {
    const loadDevs = async () => {
      const response = await api.get('/devs');

      setDevs(response.data.devs);
      
      return response.data;
    }

    loadDevs();
  }, []);

  async function handleAddDev(data) {
    await api.post('/devs', data);
  }
  
  return (
    <>
      <div id="app">
        <aside>
          <strong>Cadastrar</strong>
          <DevForm onSubmit={handleAddDev} />
        </aside>

        <main>
          <ul>
            {devs.map(dev => (
              <DevItem key={dev._id} dev={dev} />
            ))}
          </ul>
        </main>
      </div>
    </>
  );
}

export default App;
