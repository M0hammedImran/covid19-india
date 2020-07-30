import React from 'react';
import '../App.css';
import githubLogo from '../assets/GitHub-Mark-64px.png';

function Footer() {
  return (<footer id="footer">
    <p>Made with <span aria-label="heart emoji" role='img'>💞</span> by <a id="dev-name" href="https://www.instagram.com/m0hd_imran/" target="_black">Mohammed Imran</a></p>
    <a id="github-logo-container" href="https://github.com/M0hammedImran/covid19-india" rel="noopener noreferrer" target="_blank">
      <img id="github-logo" src={githubLogo} alt="github logo" />
    </a>
  </footer>
  );
}

export default Footer;




























