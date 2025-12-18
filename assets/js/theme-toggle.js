(function(){
  const root = document.documentElement;
  const toggle = document.getElementById('theme-toggle');
  const menuToggle = document.getElementById('menu-toggle');
  const siteNav = document.getElementById('site-nav');

  // Initialize theme from localStorage or system preference
  function getInitialTheme(){
    const saved = localStorage.getItem('theme');
    if(saved) return saved;
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    return prefersDark ? 'dark' : 'light';
  }

  function applyTheme(t){
    if(t === 'dark'){
      root.setAttribute('data-theme','dark');
      localStorage.setItem('theme','dark');
    } else {
      root.removeAttribute('data-theme');
      localStorage.setItem('theme','light');
    }
  }

  // Toggle theme on button click
  if(toggle){
    toggle.addEventListener('click', function(){
      const current = root.getAttribute('data-theme') === 'dark' ? 'dark' : 'light';
      applyTheme(current === 'dark' ? 'light' : 'dark');
    });
  }

  // Mobile menu
  if(menuToggle && siteNav){
    menuToggle.addEventListener('click', function(){
      const expanded = this.getAttribute('aria-expanded') === 'true';
      this.setAttribute('aria-expanded', String(!expanded));
      siteNav.classList.toggle('show');
    });
  }

  // Apply initial theme on load
  applyTheme(getInitialTheme());
})();
