/*---
layout: null
---*/
// prelude vvv
const { html } = require('@popeindustries/lit-html-server');
const { unsafeHTML } = require('@popeindustries/lit-html-server/directives/unsafe-html.js');
const isString = (str) => str instanceof String || typeof str === "string";
const noEscape = (x) => isString(x) ? unsafeHTML(x) : x;
// ^^^ prelude

// d is the data object for this route (e.g. index.html), g is the global object with config.js constants and global.js helper methods
exports = (d, g) => html`
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>${d.title + " | " + g.site.title}</title>
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="preconnect" href="https://fonts.gstatic.com">
  <link href="https://fonts.googleapis.com/css2?family=Castoro:ital@0;1&family=Sansita+Swashed:wght@900&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="/index.css" />
</head>
<body>
  <div class="container">
  ${noEscape(d.body)}
  <center>Copyright &copy; ${g.currentYear()} Yours Truly</center>
  </div>
</body>
</html>
`;
