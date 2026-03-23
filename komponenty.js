document.addEventListener('DOMContentLoaded', function() {

  const jeVArchive = window.location.pathname.includes('/archiv/');
  const prefix = jeVArchive ? '../' : '';

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

  const hp = document.getElementById('header-placeholder');
  const fp = document.getElementById('footer-placeholder');

  if (hp) hp.innerHTML = headerHTML;
  if (fp) fp.innerHTML = footerHTML;

  window.hledej = function() {
    const input = document.getElementById("search-input");
    if (!input) return;
    const dotaz = input.value.toLowerCase();
    const vysledky = document.getElementById("search-vysledky");
    if (!vysledky) return;
    if (dotaz.length < 2) { vysledky.style.display = "none"; return; }

    const clanky = [
      { nazev: "Vítejte na blogu bezpozlátek", url: `${prefix}archiv/prvni-clanek.html`, datum: "Červen 2025" },
      { nazev: "Proč jsem přestal sledovat zprávy", url: `${prefix}archiv/clanek-2.html`, datum: "Květen 2025" },
      { nazev: "Peníze a klid", url: `${prefix}archiv/clanek-3.html`, datum: "Duben 2025" },
      { nazev: "Vztahy bez přetvářky", url: `${prefix}archiv/clanek-4.html`, datum: "Březen 2025" },
      { nazev: "Co jsem se naučil z chyb", url: `${prefix}archiv/clanek-5.html`, datum: "Únor 2025" },
    ];

    const nalezene = clanky.filter(c => c.nazev.toLowerCase().includes(dotaz));
    vysledky.innerHTML = nalezene.length === 0
      ? "<p>Nic nenalezeno.</p>"
      : nalezene.map(c => `<a href="${c.url}">${c.nazev} <span>${c.datum}</span></a>`).join("");
    vysledky.style.display = "block";
  };

});
