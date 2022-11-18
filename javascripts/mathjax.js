window.MathJax = {
    tex: {
      inlineMath: [["\\(", "\\)"]],
      displayMath: [["\\[", "\\]"]],
      processEscapes: true,
      processEnvironments: true
    },
    options: {
      ignoreHtmlClass: ".*|",
      processHtmlClass: "arithmatex"
    },
    loader: {load: ['[tex]/braket', '[tex]/mathtools']},
    tex: {packages: {'[+]': ['braket', 'mathtools']}},
  };
  
  document$.subscribe(() => {
    MathJax.typesetPromise()
  })
  