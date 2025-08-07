import React from 'react';

function TextAnalyzer({ text, mode }) {
  const getTextStats = () => {
    if (!text) return null;

    const words = text.trim().split(/\s+/).filter(Boolean);
    const sentences = text.split(/[.!?]+/).filter(s => s.trim().length > 0);
    const avgWordsPerSentence = sentences.length ? (words.length / sentences.length).toFixed(1) : 0;
    
    const wordFrequency = {};
    words.forEach(word => {
      const cleanWord = word.toLowerCase().replace(/[^\w]/g, '');
      if (cleanWord) {
        wordFrequency[cleanWord] = (wordFrequency[cleanWord] || 0) + 1;
      }
    });

    const topWords = Object.entries(wordFrequency)
      .sort(([,a], [,b]) => b - a)
      .slice(0, 5);

    return {
      avgWordsPerSentence,
      topWords,
      sentences: sentences.length
    };
  };

  const stats = getTextStats();

  if (!text || !stats) {
    return null;
  }

  return (
    <div className={`stats-card ${mode === 'dark' ? 'dark' : ''}`}>
      <h3 style={{ 
        textAlign: 'center', 
        marginBottom: '20px',
        color: mode === 'dark' ? '#4facfe' : '#667eea'
      }}>
        🔍 Advanced Text Analysis
      </h3>
      
      <div className="row">
        <div className="col-md-6">
          <div className="stat-item">
            <span className="stat-number">{stats.sentences}</span>
            <span className="stat-label">Sentences</span>
          </div>
        </div>
        <div className="col-md-6">
          <div className="stat-item">
            <span className="stat-number">{stats.avgWordsPerSentence}</span>
            <span className="stat-label">Avg Words/Sentence</span>
          </div>
        </div>
      </div>

      {stats.topWords.length > 0 && (
        <div className="mt-4">
          <h5 style={{ color: mode === 'dark' ? '#4facfe' : '#667eea', marginBottom: '15px' }}>
            📈 Most Frequent Words
          </h5>
          <div className="row">
            {stats.topWords.map(([word, count], index) => (
              <div key={word} className="col-6 col-md-4 mb-2">
                <div className="stat-item" style={{ padding: '10px', fontSize: '0.9em' }}>
                  <strong>{word}</strong>
                  <span className="stat-label">({count} times)</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default TextAnalyzer;
