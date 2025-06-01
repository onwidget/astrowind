function pushAds() {
  if (!window.adsbygoogle) return;

  document.querySelectorAll('ins.adsbygoogle').forEach(ad => {
    if (!ad.getAttribute('data-adsbygoogle-status')) {
      try {
        (adsbygoogle = window.adsbygoogle || []).push({});
      } catch (e) {
        console.warn('AdSense push failed', e);
      }
    }
  });
}

window.addEventListener('astro:after-swap', () => setTimeout(pushAds, 500));
