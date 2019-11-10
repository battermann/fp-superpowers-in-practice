module.exports = (markdown, options) => {
  return new Promise((resolve, reject) => {
      const res = markdown
          .replace(/\|fr\d*/g, found => {
              const idxStr = found.substr(3);
              if (idxStr === "") return "<!-- .element: class=\"fragment\" -->";
              return `<!-- .element: class=\"fragment\" data-fragment-index=\"${idxStr}\" -->`
          })
          .split('\n')
          .map(line => {
              if (!/\|sfr\d*/.test(line)) return line;
              return "<span>" + line.replace(/\|sfr\d*/, found => {
                  const idxStr = found.substr(4);
                  if (idxStr === "") return "</span><!-- .element: class=\"fragment\" -->";
                  return `<!-- .element: class=\"fragment\" data-fragment-index=\"${idxStr}\" -->`
              })
          })
          .join('\n');
      return resolve(
          res
      );
  });
};