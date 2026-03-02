(function(){
  const path = window.location.pathname.replace(/\/index\.html$/, '/');
  document.querySelectorAll('nav a').forEach(a => {
    const href = a.getAttribute('href');
    if (!href || href.startsWith('http')) return;
    const normalised = new URL(href, window.location.origin).pathname.replace(/\/index\.html$/, '/');
    if (normalised === path) a.classList.add('active');
  });
})();