// src/js/assetResolver.js
// Use ../img/ if your js file is in src/js and images are in src/img
const ASSET_URLS = import.meta.glob('../img/**/*.{png,jpg,jpeg,webp,svg,gif}', {
  eager: true,
  import: 'default',
});

export function assetUrl(relPath) {
  const normalized = String(relPath || '').replace(/^(\.\/|\/)/, ''); 
  
  // This key must match exactly how the glob imports them
  // If using ../img/ in the glob, the key must start with ../img/
  const key = `../img/${normalized}`;
  
  const url = ASSET_URLS[key];

  if (!url) {
    console.warn(`[assetUrl] Not found: ${key}`);
    return relPath; 
  }
  
  return url;
}