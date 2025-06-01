// public/adsense-loader.js
function reloadAds() {
    if (typeof window.adsbygoogle !== 'undefined') {
      document.querySelectorAll('ins.adsbygoogle').forEach(ad => {
        try {
          (adsbygoogle = window.adsbygoogle || []).push({});
        } catch (e) {
          console.error('AdSense error:', e);
        }
      });
    }
  }
  
  // Hook to client-side navigation
  window.addEventListener('astro:after-swap', reloadAds);
  