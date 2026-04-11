const fs = require('fs');
const postcss = require('postcss');

const plugin = () => {
  return {
    postcssPlugin: 'add-rh-case-prefix',
    Rule(rule) {
      // Don't prefix keyframes
      if (rule.parent && rule.parent.type === 'atrule' && rule.parent.name.includes('keyframes')) {
        return;
      }
      
      rule.selectors = rule.selectors.map(sel => {
        let s = sel.trim();
        if (s === ':root' || s === 'html' || s === 'body') {
          return '#rh-case';
        }
        if (s.includes('#rh-case')) {
          return s;
        }
        return `#rh-case ${s}`;
      });
    }
  };
};
plugin.postcss = true;

const inputFile = './public/projects/resume-help/style.css';
const css = fs.readFileSync(inputFile, 'utf8');

postcss([plugin])
  .process(css, { from: inputFile, to: inputFile })
  .then(result => {
    fs.writeFileSync(inputFile, result.css);
    console.log('Success!');
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
