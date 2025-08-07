import React, { useState, forwardRef, useImperativeHandle } from 'react';
import TextAnalyzer from './TextAnalyzer';
import FeatureShowcase from './FeatureShowcase';

const TextForm = forwardRef(({ heading, showAlert, mode }, ref) => {
  const [text, setText] = useState("");

  useImperativeHandle(ref, () => ({
    setText: (newText) => setText(newText),
    getText: () => text
  }));

  const handleUpperCase = () => {
    setText(text.toUpperCase());
    showAlert("Converted to Uppercase! 🔤", "success");
  };

  const handleLowerCase = () => {
    setText(text.toLowerCase());
    showAlert("Converted to Lowercase! 🔤", "success");
  };

  const handleClear = () => {
    setText("");
    showAlert("Text cleared! 🗑️", "success");
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(text);
    showAlert("Text copied to clipboard! 📋", "success");
  };

  const handleExtraSpaces = () => {
    setText(text.split(/\s+/).join(" ").trim());
    showAlert("Extra spaces removed! ✨", "success");
  };

  const handleCapitalize = () => {
    setText(text.replace(/\b\w/g, char => char.toUpperCase()));
    showAlert("Text capitalized! 📝", "success");
  };

  const handleReverse = () => {
    setText(text.split('').reverse().join(''));
    showAlert("Text reversed! 🔄", "success");
  };

  const handleSentenceCase = () => {
    setText(text.toLowerCase().replace(/(^\s*\w|[\.\!\?]\s*\w)/g, char => char.toUpperCase()));
    showAlert("Converted to sentence case! 📖", "success");
  };

  const handleChange = (event) => {
    setText(event.target.value);
  };

  const wordCount = text.trim().split(/\s+/).filter(Boolean).length;
  const charCount = text.length;
  const charCountNoSpaces = text.replace(/\s/g, '').length;
  const paragraphCount = text.split('\n').filter(line => line.trim().length > 0).length;
  const readingTime = (0.008 * wordCount).toFixed(2);

  return (
    <div className="fade-in-up">
      <div className={`form-enhanced ${mode === 'dark' ? 'dark' : ''}`}>
        <h1 className="mb-4" style={{
          background: 'linear-gradient(45deg, #667eea, #764ba2)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
          fontSize: '2.5rem',
          fontWeight: 'bold',
          textAlign: 'center'
        }}>
          {heading} ✏️
        </h1>
        
        <textarea
          className={`form-control textarea-enhanced ${mode === 'dark' ? 'dark' : ''}`}
          value={text}
          onChange={handleChange}
          rows="10"
          placeholder="Start typing your text here... ✨"
        ></textarea>

        <div className="text-center mt-4">
          <div className="row">
            <div className="col-md-6 col-lg-4 mb-2">
              <button 
                className="btn btn-enhanced btn-primary-enhanced" 
                onClick={handleUpperCase}
                disabled={text.length === 0}
              >
                🔤 UPPERCASE
              </button>
            </div>
            <div className="col-md-6 col-lg-4 mb-2">
              <button 
                className="btn btn-enhanced btn-primary-enhanced" 
                onClick={handleLowerCase}
                disabled={text.length === 0}
              >
                🔡 lowercase
              </button>
            </div>
            <div className="col-md-6 col-lg-4 mb-2">
              <button 
                className="btn btn-enhanced btn-secondary-enhanced" 
                onClick={handleCapitalize}
                disabled={text.length === 0}
              >
                📝 Capitalize
              </button>
            </div>
            <div className="col-md-6 col-lg-4 mb-2">
              <button 
                className="btn btn-enhanced btn-secondary-enhanced" 
                onClick={handleSentenceCase}
                disabled={text.length === 0}
              >
                📖 Sentence case
              </button>
            </div>
            <div className="col-md-6 col-lg-4 mb-2">
              <button 
                className="btn btn-enhanced btn-success-enhanced" 
                onClick={handleExtraSpaces}
                disabled={text.length === 0}
              >
                ✨ Remove Spaces
              </button>
            </div>
            <div className="col-md-6 col-lg-4 mb-2">
              <button 
                className="btn btn-enhanced btn-warning-enhanced" 
                onClick={handleReverse}
                disabled={text.length === 0}
              >
                🔄 Reverse
              </button>
            </div>
            <div className="col-md-6 col-lg-4 mb-2">
              <button 
                className="btn btn-enhanced btn-success-enhanced" 
                onClick={handleCopy}
                disabled={text.length === 0}
              >
                📋 Copy Text
              </button>
            </div>
            <div className="col-md-6 col-lg-4 mb-2">
              <button 
                className="btn btn-enhanced btn-danger-enhanced" 
                onClick={handleClear}
                disabled={text.length === 0}
              >
                🗑️ Clear All
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className={`stats-card ${mode === 'dark' ? 'dark' : ''}`}>
        <h3 style={{ 
          textAlign: 'center', 
          marginBottom: '20px',
          color: mode === 'dark' ? '#4facfe' : '#667eea'
        }}>
          📊 Text Analytics
        </h3>
        <div className="stats-grid">
          <div className="stat-item">
            <span className="stat-number">{wordCount}</span>
            <span className="stat-label">Words</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">{charCount}</span>
            <span className="stat-label">Characters</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">{charCountNoSpaces}</span>
            <span className="stat-label">Chars (no spaces)</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">{paragraphCount}</span>
            <span className="stat-label">Paragraphs</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">{readingTime}</span>
            <span className="stat-label">Min read</span>
          </div>
        </div>
      </div>

      <div className={`preview-section ${mode === 'dark' ? 'dark' : ''}`}>
        <h3 style={{ 
          marginBottom: '15px',
          color: mode === 'dark' ? '#4facfe' : '#667eea'
        }}>
          👁️ Preview
        </h3>
        <div className="preview-text">
          {text.length > 0 ? text : "Your text preview will appear here... Start typing to see the magic! ✨"}
        </div>
      </div>

      <TextAnalyzer text={text} mode={mode} />
      
      {text.length === 0 && <FeatureShowcase mode={mode} />}
    </div>
  );
});

export default TextForm;
