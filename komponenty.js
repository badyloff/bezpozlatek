const headerHTML = `
  <header>
    <div class="header-top">
      <div class="header-top-inner">
        <a href="${prefix}index.html" class="logo">bezpozlátek</a>
        <div class="search-wrap">
          <input type="text" id="search-input" placeholder="Hledat..." onkeyup="hledej()">
        </div>
      </div>
    </div>
    <div class="header-nav">
      <nav>
        <a href="${prefix}index.html">Články</a>
        <a href="${prefix}archiv.html">Archiv</a>
      </nav>
    </div>
  </header>
  <div id="search-vysledky" class="search-vysledky" style="display:none;"></div>
`;

const footerHTML = `
  <footer>
    <p>© 2025 bezpozlátek.cz</p>
  </footer>
`;
