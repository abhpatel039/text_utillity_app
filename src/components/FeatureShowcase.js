import React from 'react';

function FeatureShowcase({ mode }) {
  const features = [
    {
      icon: '🔤',
      title: 'Text Transformation',
      description: 'Convert text between uppercase, lowercase, capitalize, and sentence case'
    },
    {
      icon: '📊',
      title: 'Smart Analytics',
      description: 'Get detailed insights about your text including word count, reading time, and frequency analysis'
    },
    {
      icon: '✨',
      title: 'Text Cleanup',
      description: 'Remove extra spaces, reverse text, and clean up formatting instantly'
    },
    {
      icon: '📋',
      title: 'Quick Actions',
      description: 'Copy, paste, save, and clear text with floating action buttons'
    },
    {
      icon: '🌙',
      title: 'Dark Mode',
      description: 'Beautiful dark and light themes with smooth transitions'
    },
    {
      icon: '📱',
      title: 'Responsive Design',
      description: 'Works perfectly on desktop, tablet, and mobile devices'
    }
  ];

  return (
    <div className={`stats-card ${mode === 'dark' ? 'dark' : ''}`} style={{ marginTop: '30px' }}>
      <h3 style={{ 
        textAlign: 'center', 
        marginBottom: '30px',
        color: mode === 'dark' ? '#4facfe' : '#667eea',
        fontSize: '2rem'
      }}>
        🚀 Features
      </h3>
      
      <div className="row">
        {features.map((feature, index) => (
          <div key={index} className="col-md-6 col-lg-4 mb-4">
            <div className="stat-item" style={{ 
              height: '100%', 
              padding: '20px',
              textAlign: 'center',
              display: 'flex',
              flexDirection: 'column',
              gap: '10px'
            }}>
              <div style={{ fontSize: '2rem' }}>{feature.icon}</div>
              <h5 style={{ 
                color: mode === 'dark' ? '#4facfe' : '#667eea',
                margin: '10px 0'
              }}>
                {feature.title}
              </h5>
              <p style={{ 
                fontSize: '0.9rem', 
                opacity: 0.8,
                lineHeight: '1.5',
                margin: 0
              }}>
                {feature.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FeatureShowcase;
