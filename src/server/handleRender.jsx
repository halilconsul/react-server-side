import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';

import App from '../client/app';

function renderFullPage(html) {
  return `
      <!doctype html>
      <html>
        <head>
          <meta charset=utf-8>
          <title>React Server Side Rendering</title>
        </head>
        <body>
          <div id="root">${html}</div>
          <script src="/js/bundle.js"></script>
        </body>
      </html>s
  `;
}

function handleRender(req, res) {
  const context = {};
  const app = (
    <App />
  );

  const html = renderToString(app);

  if (context.url) {
    return res.redirect(context.url);
  }

  return res.send(renderFullPage(html));
}

export default handleRender;
