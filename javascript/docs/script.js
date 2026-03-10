// ===== JavaScript Complete Reference — Interactive Script =====

document.addEventListener("DOMContentLoaded", () => {
  const root = document.documentElement;

  // ===== Theme Toggle =====
  const themeBtn = document.querySelector(".theme-btn");

  function setTheme(t) {
    root.setAttribute("data-theme", t);
    localStorage.setItem("js-ref-theme", t);
  }

  const saved = localStorage.getItem("js-ref-theme") ||
    (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
  setTheme(saved);

  themeBtn.addEventListener("click", () => {
    setTheme(root.getAttribute("data-theme") === "dark" ? "light" : "dark");
  });

  // ===== Mobile Sidebar =====
  const sidebarToggle = document.querySelector(".sidebar-toggle");
  const sidebar       = document.querySelector(".sidebar");
  const mobOverlay    = document.querySelector(".mob-overlay");

  function openSidebar()  { sidebar.classList.add("open");    mobOverlay.classList.add("open");    document.body.style.overflow = "hidden"; }
  function closeSidebar() { sidebar.classList.remove("open"); mobOverlay.classList.remove("open"); document.body.style.overflow = "";       }

  sidebarToggle.addEventListener("click", () => sidebar.classList.contains("open") ? closeSidebar() : openSidebar());
  mobOverlay.addEventListener("click", closeSidebar);

  // ===== Sidebar Group Collapse =====
  document.querySelectorAll(".sg-header").forEach(hdr => {
    hdr.addEventListener("click", () => hdr.parentElement.classList.toggle("collapsed"));
  });

  // ===== Sidebar + TOC Navigation =====
  const sections  = document.querySelectorAll(".doc-section[id]");
  const sgLinks   = document.querySelectorAll(".sg-link[data-target]");
  const tocLinks  = document.querySelectorAll(".toc-link[data-target]");

  function scrollTo(id) {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  sgLinks.forEach(l => {
    l.addEventListener("click", e => {
      e.preventDefault();
      scrollTo(l.dataset.target);
      if (sidebar.classList.contains("open")) closeSidebar();
    });
  });

  tocLinks.forEach(l => {
    l.addEventListener("click", e => { e.preventDefault(); scrollTo(l.dataset.target); });
  });

  // Topic overview card navigate
  document.querySelectorAll(".topic-card[data-target]").forEach(c => {
    c.addEventListener("click", () => scrollTo(c.dataset.target));
  });

  // ===== Scroll Spy =====
  function scrollSpy() {
    let current = "";
    sections.forEach(sec => {
      if (window.scrollY >= sec.offsetTop - 100) current = sec.id;
    });
    sgLinks.forEach(l  => l.classList.toggle("active", l.dataset.target === current));
    tocLinks.forEach(l => l.classList.toggle("active", l.dataset.target === current));
  }

  window.addEventListener("scroll", scrollSpy, { passive: true });
  scrollSpy();

  // ===== Copy Code =====
  document.querySelectorAll(".copy-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      const code = btn.closest(".code-block").querySelector("code");
      navigator.clipboard.writeText(code.textContent).then(() => {
        const orig = btn.innerHTML;
        btn.innerHTML = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"/></svg> Copied!`;
        btn.style.color = "var(--green)";
        setTimeout(() => { btn.innerHTML = orig; btn.style.color = ""; }, 2000);
      });
    });
  });

  // ===== Search =====
  const searchTrigger = document.querySelector(".search-trigger");
  const searchOverlay = document.querySelector(".search-overlay");
  const searchInput   = document.querySelector(".search-field input");
  const searchBody    = document.querySelector(".search-body");

  // Build index from sections + h3s
  const idx = [];
  sections.forEach(sec => {
    const h2 = sec.querySelector(".sec-heading");
    const secTitle = h2 ? h2.textContent.replace(/^\d+/, "").trim() : "";
    idx.push({ title: secTitle, sub: "Section", id: sec.id });
    sec.querySelectorAll("h3").forEach(h3 => {
      idx.push({ title: h3.textContent.trim(), sub: secTitle, id: sec.id });
    });
  });

  function esc(s) { const d = document.createElement("div"); d.textContent = s; return d.innerHTML; }

  function renderEmpty(msg) {
    searchBody.innerHTML = `<div class="search-empty">${msg}</div>`;
  }

  function openSearch() {
    searchOverlay.classList.add("open");
    renderEmpty("Type to search…");
    setTimeout(() => searchInput.focus(), 60);
  }
  function closeSearch() {
    searchOverlay.classList.remove("open");
    searchInput.value = "";
  }

  searchTrigger.addEventListener("click", openSearch);
  searchOverlay.addEventListener("click", e => { if (e.target === searchOverlay) closeSearch(); });

  document.addEventListener("keydown", e => {
    if ((e.ctrlKey || e.metaKey) && e.key === "k") {
      e.preventDefault();
      searchOverlay.classList.contains("open") ? closeSearch() : openSearch();
    }
    if (e.key === "Escape" && searchOverlay.classList.contains("open")) closeSearch();
  });

  searchInput.addEventListener("input", () => {
    const q = searchInput.value.toLowerCase().trim();
    searchBody.innerHTML = "";
    if (!q) { renderEmpty("Type to search…"); return; }

    const hits = idx.filter(i =>
      i.title.toLowerCase().includes(q) || i.sub.toLowerCase().includes(q)
    ).slice(0, 14);

    if (!hits.length) { renderEmpty("No results found"); return; }

    hits.forEach(h => {
      const d = document.createElement("div");
      d.className = "search-item";
      d.innerHTML = `<span class="si-title">${esc(h.title)}</span><span class="si-sub">${esc(h.sub)}</span>`;
      d.addEventListener("click", () => { closeSearch(); scrollTo(h.id); });
      searchBody.appendChild(d);
    });
  });

  // ===== Back to Top =====
  const backTop = document.querySelector(".back-top");
  window.addEventListener("scroll", () => backTop.classList.toggle("show", window.scrollY > 600), { passive: true });
  backTop.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));

  // ===== Syntax Highlighting =====
  highlightAllCode();
});

// ===== Syntax Highlighter — proper tokenizer, no double-processing =====
function highlightAllCode() {
  document.querySelectorAll(".code-block code").forEach(block => {
    block.innerHTML = highlightJS(block.textContent);
  });
}

function highlightJS(src) {
  const KEYWORDS = new Set([
    'const','let','var','function','return','if','else','for','while','do',
    'switch','case','default','break','continue','new','class','extends',
    'super','this','typeof','instanceof','import','export','from','async',
    'await','try','catch','finally','throw','yield','static','get','set',
    'of','in','delete','void','with','debugger'
  ]);
  const BOOLEANS = new Set(['true','false','null','undefined','NaN','Infinity']);
  const BUILTINS = new Set([
    'console','window','document','localStorage','sessionStorage','location',
    'history','navigator','fetch','XMLHttpRequest','setTimeout','setInterval',
    'clearTimeout','clearInterval','requestAnimationFrame','cancelAnimationFrame',
    'Promise','JSON','Math','Number','String','Array','Object','Boolean','Date',
    'RegExp','Error','TypeError','RangeError','SyntaxError','ReferenceError',
    'URIError','EvalError','Map','Set','WeakMap','WeakSet','Symbol','Proxy',
    'Reflect','parseInt','parseFloat','isNaN','isFinite','encodeURIComponent',
    'decodeURIComponent','structuredClone','queueMicrotask','URL','URLSearchParams',
    'FormData','Blob','AbortController','MutationObserver','IntersectionObserver',
    'CustomEvent','EventTarget','globalThis'
  ]);

  const tokens = [];
  let i = 0;
  const n = src.length;

  while (i < n) {
    // Single-line comment
    if (src[i] === '/' && src[i + 1] === '/') {
      const j = src.indexOf('\n', i);
      const end = j < 0 ? n : j;
      tokens.push({ t: 'comment', v: src.slice(i, end) });
      i = end;
      continue;
    }
    // Multi-line comment
    if (src[i] === '/' && src[i + 1] === '*') {
      const j = src.indexOf('*/', i + 2);
      const end = j < 0 ? n : j + 2;
      tokens.push({ t: 'comment', v: src.slice(i, end) });
      i = end;
      continue;
    }
    // Template literal
    if (src[i] === '`') {
      let j = i + 1;
      while (j < n) {
        if (src[j] === '\\') { j += 2; continue; }
        if (src[j] === '`') { j++; break; }
        j++;
      }
      tokens.push({ t: 'string', v: src.slice(i, j) });
      i = j;
      continue;
    }
    // String literals
    if (src[i] === '"' || src[i] === "'") {
      const q = src[i];
      let j = i + 1;
      while (j < n) {
        if (src[j] === '\\') { j += 2; continue; }
        if (src[j] === q || src[j] === '\n') { if (src[j] === q) j++; break; }
        j++;
      }
      tokens.push({ t: 'string', v: src.slice(i, j) });
      i = j;
      continue;
    }
    // Numbers: decimal, hex, binary, float, BigInt, underscore-separated
    if ((src[i] >= '0' && src[i] <= '9') ||
        (src[i] === '.' && src[i + 1] >= '0' && src[i + 1] <= '9')) {
      let j = i;
      if (src[j] === '0' && (src[j+1] === 'x' || src[j+1] === 'X')) {
        j += 2; while (j < n && /[0-9a-fA-F_]/.test(src[j])) j++;
      } else if (src[j] === '0' && (src[j+1] === 'b' || src[j+1] === 'B')) {
        j += 2; while (j < n && /[01_]/.test(src[j])) j++;
      } else {
        while (j < n && /[0-9._]/.test(src[j])) j++;
        if (j < n && (src[j] === 'e' || src[j] === 'E')) {
          j++;
          if (j < n && (src[j] === '+' || src[j] === '-')) j++;
          while (j < n && /[0-9]/.test(src[j])) j++;
        }
        if (j < n && src[j] === 'n') j++; // BigInt
      }
      tokens.push({ t: 'number', v: src.slice(i, j) });
      i = j;
      continue;
    }
    // Identifiers, keywords, builtins
    if (/[a-zA-Z_$]/.test(src[i])) {
      let j = i;
      while (j < n && /[a-zA-Z0-9_$]/.test(src[j])) j++;
      const word = src.slice(i, j);
      let type = 'plain';
      if (KEYWORDS.has(word)) type = 'keyword';
      else if (BOOLEANS.has(word)) type = 'boolean';
      else if (BUILTINS.has(word)) type = 'builtin';
      else {
        // Look ahead past spaces for '(' → function call
        let k = j;
        while (k < n && (src[k] === ' ' || src[k] === '\t')) k++;
        if (src[k] === '(') type = 'function';
      }
      tokens.push({ t: type, v: word });
      i = j;
      continue;
    }
    // Multi-char operators (longest match first)
    let opMatched = false;
    for (const op of ['===','!==','??=','||=','&&=','=>','**','...','??','||','&&','++','--','<=','>=','==','!=']) {
      if (src.startsWith(op, i)) {
        tokens.push({ t: 'operator', v: op });
        i += op.length;
        opMatched = true;
        break;
      }
    }
    if (opMatched) continue;
    // Single-char operators
    if ('=!<>+-*/%&|^~?:'.includes(src[i])) {
      tokens.push({ t: 'operator', v: src[i] });
      i++;
      continue;
    }
    // Everything else: whitespace, punctuation, braces
    tokens.push({ t: 'plain', v: src[i] });
    i++;
  }

  // HTML escape helper — called AFTER tokenization, never before
  function esc(s) {
    return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  }

  // Build output: detect method/property access via preceding dot token
  const out = [];
  for (let k = 0; k < tokens.length; k++) {
    const tok = tokens[k];
    const safe = esc(tok.v);

    if (tok.t === 'plain' || tok.t === 'function') {
      // Check if immediately preceded by a '.' token (property or method)
      if (k > 0 && tokens[k - 1].t === 'plain' && tokens[k - 1].v === '.') {
        let ahead = k + 1;
        while (ahead < tokens.length && (tokens[ahead].v === ' ' || tokens[ahead].v === '\t')) ahead++;
        const type = (ahead < tokens.length && tokens[ahead].v === '(') ? 'method' : 'property';
        out.push(`<span class="token-${type}">${safe}</span>`);
        continue;
      }
    }

    if (tok.t === 'plain') {
      out.push(safe);
    } else {
      out.push(`<span class="token-${tok.t}">${safe}</span>`);
    }
  }

  return out.join('');
}
