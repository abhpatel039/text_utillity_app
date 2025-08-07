import React from 'react';

function Navbar({ title, mode, toggleMode }) {
  return (
    <nav className={`navbar navbar-expand-lg navbar-enhanced ${mode === 'dark' ? 'dark' : ''}`}>
      <div className="container-fluid">
        <a className="navbar-brand navbar-brand-enhanced" href="#" style={{
          color: mode === 'dark' ? 'white' : '#667eea',
          textDecoration: 'none'
        }}>
          ✨ {title}
        </a>
        <div className="switch-container">
          <span style={{ color: mode === 'dark' ? 'white' : '#64748b', fontSize: '14px' }}>
            {mode === 'light' ? '☀️' : '🌙'}
          </span>
          <div 
            className={`toggle-switch ${mode === 'dark' ? 'active' : ''}`}
            onClick={toggleMode}
          >
            <div className={`toggle-slider ${mode === 'dark' ? 'active' : ''}`}></div>
          </div>
          <span style={{ 
            color: mode === 'dark' ? 'white' : '#64748b', 
            fontSize: '14px',
            fontWeight: '500'
          }}>
            {mode === 'dark' ? 'Dark' : 'Light'}
          </span>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
