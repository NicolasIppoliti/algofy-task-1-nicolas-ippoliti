const fs = require('fs');
const { Liquid } = require('liquidjs');

const engine = new Liquid();
const projects = JSON.parse(fs.readFileSync('../../projects.json', 'utf8'));
const template = fs.readFileSync('../../index.html', 'utf8');

engine
  .parseAndRender(template, { projects })
  .then(html => {
    fs.writeFileSync('../../output.html', html);
  });
