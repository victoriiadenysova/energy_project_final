import { includePartials } from './includePartials.js';
import { applyAssets } from './js/applyAssets.js';

includePartials()
  .then(() => {
    applyAssets();          
    return import('./main.js');
  })
  .catch(err => console.error('render error:', err));
