import React, { useState } from 'react';

import './global.css';
import './App.css';
import './Sidebar.css';

function App() {
  return (
    <>
      <div id="app">
        <aside>
          <strong>Cadastrar</strong>
          <form>
            <div className="input-block">
              <label htmlFor="github_username">Usuário do Github</label>
              <input name="github_username" id="username_github" required />
            </div>
            
            <div className="input-block">
              <label htmlFor="stack">Tecnologias</label>
              <input name="stack" id="stack" required />
            </div>

            <div className="input-group">
              <div className="input-block">
                <label htmlFor="latitude">Latitude</label>
                <input name="latitude" id="latitude" required />
              </div>

              <div className="input-block">
                <label htmlFor="logitude">Logitude</label>
                <input name="logitude" id="logitude" required />
              </div>
            </div>

            <button type="submit">Salvar</button>
          </form>
        </aside>

        <main></main>
      </div>
    </>
  );
}

export default App;