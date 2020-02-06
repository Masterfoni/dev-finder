import React, { useState, useEffect } from 'react';

import './DevForm.css'

export const DevForm = ({ onSubmit }) => {
    const [github_username, setGithubUsername] = useState('');
    const [stack, setStack] = useState('');

    const [latitude, setLatitude] = useState('');
    const [longitude, setLongitude] = useState('');

    useEffect(() => {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            const { latitude, longitude } = position.coords;
            
            setLatitude(latitude);
            setLongitude(longitude);
          },
          (err) => {
            alert(err);
          },
          {
            timeout: 30000,
          }
        );
    }, []);

    const handleSubmit = async (event) => {
        event.preventDefault();

        await onSubmit({
            github_username,
            stack,
            latitude,
            longitude
        });

        setGithubUsername('');
        setStack('');
    }

    return (
        <form onSubmit={event => handleSubmit(event)}>
            <div className="input-block">
              <label htmlFor="github_username">Usuário do Github</label>
              <input 
                name="github_username" 
                id="username_github" 
                required 
                value={github_username}
                onChange={event => setGithubUsername(event.target.value)}/>
            </div>
            
            <div className="input-block">
              <label htmlFor="stack">Tecnologias</label>
              <input 
                name="stack" 
                id="stack" 
                required 
                value={stack}
                onChange={event => setStack(event.target.value)}/>
            </div>

            <div className="input-group">
              <div className="input-block">
                <label htmlFor="latitude">Latitude</label>
                <input 
                  type="number" 
                  name="latitude" 
                  id="latitude" 
                  required 
                  value={latitude}
                  onChange={event => setLatitude(event.target.value)}/>
              </div>

              <div className="input-block">
                <label htmlFor="logitude">Logitude</label>
                <input 
                  type="number" 
                  name="logitude" 
                  id="logitude" 
                  required 
                  value={longitude}
                  onChange={event => setLongitude(event.target.value)}/>
              </div>
            </div>

            <button type="submit">Salvar</button>
        </form>
    );
}

export default DevForm;