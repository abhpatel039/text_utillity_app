import React, { useState, useEffect, useRef } from 'react';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import FloatingActionButton from './components/FloatingActionButton';
import './App.css';

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);
  const textFormRef = useRef(null);

  const showAlert = (message, type) => {
    setAlert({ msg: message, type: type });
    setTimeout(() => setAlert(null), 3000);
  };

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.classList.add('dark-mode');
      showAlert("Dark mode has been enabled! 🌙", "success");
    } else {
      setMode('light');
      document.body.classList.remove('dark-mode');
      showAlert("Light mode has been enabled! ☀️", "success");
    }
  };

  const handleQuickAction = async (action) => {
    switch (action) {
      case 'paste':
        try {
          const text = await navigator.clipboard.readText();
          if (textFormRef.current) {
            textFormRef.current.setText(text);
            showAlert("Text pasted from clipboard! 📋", "success");
          }
        } catch (err) {
          showAlert("Failed to paste from clipboard", "danger");
        }
        break;
      case 'refresh':
        if (textFormRef.current) {
          textFormRef.current.setText("");
          showAlert("All text cleared! 🗑️", "success");
        }
        break;
      case 'analyze':
        showAlert("Text analysis updated! 📊", "info");
        break;
      case 'save':
        if (textFormRef.current && textFormRef.current.getText()) {
          const element = document.createElement("a");
          const file = new Blob([textFormRef.current.getText()], {type: 'text/plain'});
          element.href = URL.createObjectURL(file);
          element.download = "textutils-output.txt";
          document.body.appendChild(element);
          element.click();
          document.body.removeChild(element);
          showAlert("Text saved as file! 💾", "success");
        } else {
          showAlert("No text to save", "warning");
        }
        break;
      default:
        break;
    }
  };

  // Set initial body class based on mode
  useEffect(() => {
    if (mode === 'dark') {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  }, []);

  return (
    <div className="app-container">
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <div className={`container main-container ${mode === 'dark' ? 'dark' : ''}`}>
        <TextForm 
          ref={textFormRef}
          showAlert={showAlert} 
          heading="Transform Your Text with Style" 
          mode={mode} 
        />
      </div>
      
      <FloatingActionButton mode={mode} onQuickAction={handleQuickAction} />
      
      {/* Footer */}
      <footer style={{
        textAlign: 'center',
        padding: '20px',
        color: mode === 'dark' ? 'rgba(255,255,255,0.7)' : 'rgba(0,0,0,0.6)',
        fontSize: '14px'
      }}>
        <p>Made with ❤️ using React • Enhanced UI Design</p>
      </footer>
    </div>
  );
}

export default App;


// hi abhi how are you