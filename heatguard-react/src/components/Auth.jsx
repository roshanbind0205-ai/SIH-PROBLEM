import React from "react";
import Login from "./Login";
import Sinup from "./Sinup";

export default function Auth() {
  return (
    <div id="authScreen" className="screen">
      <div dangerouslySetInnerHTML={{ __html: AUTH_HEADER_HTML }} />
      <Login />
      <Sinup />
    </div>
  );
}

const AUTH_HEADER_HTML = "<button aria-label=\"Close login\" class=\"auth-close-btn\" onclick=\"closeAuthScreen()\">\n\n        ×\n\n    </button><div class=\"logo-small\">\n            ☀️\n        </div><h1>HeatGuard</h1><p class=\"subtitle\" data-i18n=\"authSubtitle\">\n            Stay safe from extreme heat\n        </p>";
