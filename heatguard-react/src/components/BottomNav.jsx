import React from "react";

export default function BottomNav() {
  return (
    <div dangerouslySetInnerHTML={{ __html: "<nav class=\"bottom-nav\">\n<button class=\"nav-item active\" onclick=\"showPage('homePage', this)\">\n<span>\n                ⌂\n            </span>\n<small>\n                Home\n            </small>\n</button>\n<button class=\"nav-item\" onclick=\"showPage('locationPage', this)\">\n<span>\n                📍\n            </span>\n<small>\n                Location\n            </small>\n</button>\n<button class=\"nav-item\" onclick=\"showPage('aiPage', this)\">\n<span>\n                🤖\n            </span>\n<small>\n                AI\n            </small>\n</button>\n<button class=\"nav-item\" onclick=\"showPage('profilePage', this)\">\n<span>\n                👤\n            </span>\n<small>\n                Profile\n            </small>\n</button>\n</nav>" }} />
  );
}
