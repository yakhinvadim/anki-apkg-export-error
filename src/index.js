import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

// code from example start

import { saveAs } from 'filesaverjs';
import AnkiExport from 'anki-apkg-export';

const apkg = new AnkiExport('deck-name');

// could be a File from <input /> or a Blob from fetch
// take a look at the example folder for a complete overview

apkg.addCard('card #1 front', 'card #1 back');
apkg.addCard('card #2 front', 'card #2 back', { tags: ['nice', 'better card'] });
apkg.addCard('card #3 with image <img src="anki.png" />', 'card #3 back');

apkg
  .save()
  .then(zip => {
    saveAs(zip, 'output.apkg');
  })
  .catch(err => console.log(err.stack || err));
  
// code from example end

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
