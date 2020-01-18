import React from 'react';

import './styles.css'

const DevItem = ({ dev: { avatar_url, name, stack, bio, github_username } }) => {
    return (
        <li className="dev-item">
            <header>
                <img src={avatar_url} alt="Foto no Github"/>
                <div className="user-info">
                <strong>{name}</strong>
                <span>{stack.join(', ')}</span>
                </div>
            </header>
            <p>{bio}</p>
            <a href={`https://github.com/${github_username}`}>Acessar perfil no Github</a>
        </li>
    );
}

export default DevItem;