import React from "react";

export default function WeatherCard() {
  return (
    <div dangerouslySetInnerHTML={{ __html: "<div class=\"weather-card\">\n<div class=\"weather-top\">\n<div>\n<p class=\"weather-place\">\n\n                            📍\n\n                            <span id=\"weatherLocation\">\n                                ---\n                            </span>\n</p>\n<p id=\"currentTime\">\n                            --:--:--\n                        </p>\n</div>\n<div class=\"weather-icon\" id=\"weatherIcon\">\n\n                        ☀️\n\n                    </div>\n</div>\n<div class=\"temperature\">\n<span id=\"temperature\">\n                        ---°C\n                    </span>\n</div>\n<div class=\"weather-details\">\n<div>\n<span>Humidity</span>\n<b id=\"humidity\">---%</b>\n</div>\n<div>\n<span>Feels Like</span>\n<b id=\"feelsLike\">---°C</b>\n</div>\n<div>\n<span>Wind</span>\n<b id=\"windSpeed\">--- km/h</b>\n</div>\n<div>\n<span>Heat Index</span>\n<b id=\"heatIndex\">---°C</b>\n</div>\n</div>\n</div>" }} />
  );
}
