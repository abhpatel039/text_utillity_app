import React from 'react';

function Alert({ alert }) {
  const capitalize = (word) => word.charAt(0).toUpperCase() + word.slice(1);

  const getAlertIcon = (type) => {
    switch(type) {
      case 'success': return '✅';
      case 'danger': return '❌';
      case 'warning': return '⚠️';
      case 'info': return 'ℹ️';
      default: return '📢';
    }
  };

  return (
    <div style={{ position: 'fixed', top: '80px', right: '20px', zIndex: 1000, width: '300px' }}>
      {alert && (
        <div className={`alert alert-${alert.type} alert-enhanced alert-dismissible fade show`} role="alert">
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <span style={{ fontSize: '18px' }}>{getAlertIcon(alert.type)}</span>
            <div>
              <strong>{capitalize(alert.type)}:</strong> {alert.msg}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Alert;
