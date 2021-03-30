// ==UserScript==
// @name         Void Theme
// @version      1.1
// @description  none
// @author       Darkness
// @match        https://pixelplanet.fun/*
// @match        https://fuckyouarkeros.fun/*
// @updateURL    https://github.com/TouchedByDarkness/pixelplanet-void-theme/raw/main/script.user.js
// @downloadURL  https://github.com/TouchedByDarkness/pixelplanet-void-theme/raw/main/script.user.js
// ==/UserScript==

(async () => {
  const script = document.createElement("script");
  const res = await fetch("https://raw.githubusercontent.com/TouchedByDarkness/pixelplanet-void-theme/main/script.js");
  script.innerHTML = await res.text();
  document.body.appendChild(script);
})();
