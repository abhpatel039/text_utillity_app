import React, { useState } from 'react';

function FloatingActionButton({ mode, onQuickAction }) {
  const [isOpen, setIsOpen] = useState(false);

  const quickActions = [
    { icon: '📋', action: 'paste', label: 'Paste from clipboard' },
    { icon: '🔄', action: 'refresh', label: 'Clear all' },
    { icon: '📊', action: 'analyze', label: 'Quick analyze' },
    { icon: '💾', action: 'save', label: 'Save as file' }
  ];

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleAction = (action) => {
    onQuickAction(action);
    setIsOpen(false);
  };

  return (
    <div style={{
      position: 'fixed',
      bottom: '30px',
      right: '30px',
      zIndex: 1000
    }}>
      {isOpen && (
        <div style={{
          position: 'absolute',
          bottom: '70px',
          right: '0',
          display: 'flex',
          flexDirection: 'column',
          gap: '10px'
        }}>
          {quickActions.map((item, index) => (
            <button
              key={item.action}
              onClick={() => handleAction(item.action)}
              style={{
                width: '50px',
                height: '50px',
                borderRadius: '50%',
                border: 'none',
                background: mode === 'dark' 
                  ? 'linear-gradient(45deg, #4facfe, #00f2fe)' 
                  : 'linear-gradient(45deg, #667eea, #764ba2)',
                color: 'white',
                fontSize: '18px',
                cursor: 'pointer',
                boxShadow: '0 4px 15px rgba(0, 0, 0, 0.2)',
                transition: 'all 0.3s ease',
                transform: `translateY(${(quickActions.length - index) * -10}px)`,
                animation: `fadeInUp 0.3s ease ${index * 0.1}s both`
              }}
              onMouseEnter={(e) => {
                e.target.style.transform = `translateY(${(quickActions.length - index) * -10}px) scale(1.1)`;
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = `translateY(${(quickActions.length - index) * -10}px) scale(1)`;
              }}
              title={item.label}
            >
              {item.icon}
            </button>
          ))}
        </div>
      )}
      
      <button
        onClick={toggleMenu}
        style={{
          width: '60px',
          height: '60px',
          borderRadius: '50%',
          border: 'none',
          background: mode === 'dark' 
            ? 'linear-gradient(45deg, #667eea, #764ba2)' 
            : 'linear-gradient(45deg, #4facfe, #00f2fe)',
          color: 'white',
          fontSize: '24px',
          cursor: 'pointer',
          boxShadow: '0 8px 25px rgba(0, 0, 0, 0.3)',
          transition: 'all 0.3s ease',
          transform: isOpen ? 'rotate(45deg)' : 'rotate(0deg)'
        }}
        onMouseEnter={(e) => {
          if (!isOpen) e.target.style.transform = 'scale(1.1)';
        }}
        onMouseLeave={(e) => {
          if (!isOpen) e.target.style.transform = 'scale(1)';
        }}
      >
        {isOpen ? '✕' : '⚡'}
      </button>
    </div>
  );
}

export default FloatingActionButton;
