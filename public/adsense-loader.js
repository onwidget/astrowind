// public/adsense-loader.js

function pushAds() {
  if (!window.adsbygoogle) return;

  document.querySelectorAll("ins.adsbygoogle").forEach((el) => {
    // Only push if not already filled
    if (!el.getAttribute("data-adsbygoogle-status")) {
      try {
        (adsbygoogle = window.adsbygoogle || []).push({});
      } catch (e) {
        console.warn("AdSense push error:", e);
      }
    }
  });
}

// Run on page load
window.addEventListener("load", pushAds);

// Run after Astro View Transition completes
window.addEventListener("astro:after-swap", () => {
  setTimeout(pushAds, 500); // Small delay to let the new content fully render
});
