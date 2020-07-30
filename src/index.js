import React from 'react';
import ReactDOM from 'react-dom';
import './App.css'
import App from './App';
import githubLogo from './assets/GitHub-Mark-64px.png';

ReactDOM.render(
  <React.Fragment>
    <App />
    <footer id="footer">
      <p>Made with <span aria-label="heart emoji" role='img'>💞</span> by <a href="https://www.instagram.com/m0hd_imran/" target="_black">Mohammed Imran</a></p>
      <a id="github-logo" href="https://github.com/M0hammedImran/covid19-india" rel="noopener noreferrer" target="_blank">
        <img id="github-logo" src={githubLogo} alt="github logo" />
      </a>
    </footer>
  </React.Fragment>,
  document.getElementById('root')
);