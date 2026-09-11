import React from "react";

export default function IntroScreen() {
  return (
    <div dangerouslySetInnerHTML={{ __html: "<div class=\"screen active\" id=\"introScreen\">\n<div class=\"intro-bg\"></div>\n<div class=\"intro-content\">\n<div class=\"sun-animation\">\n            ☀️\n        </div>\n<h1>HeatGuard</h1>\n<h2>India</h2>\n<p data-i18n=\"introText\">\n            Smart Heatwave Early Warning &amp; Safety App\n        </p>\n<div class=\"intro-loader\">\n<span></span>\n<span></span>\n<span></span>\n</div>\n<small>\n            Protect • Predict • Prevent\n        </small>\n</div>\n</div>" }} />
  );
}
