/* ============================================
   APP.JS — Life Portfolio
   ============================================ */

// ---- DATA ----
const PROJECTS = [
  {
    name: 'VKTX Stock Pitch',
    desc: 'Interactive investment dashboard for Viking Therapeutics — Perplexity Computer Competition 2026.',
    lang: 'HTML', langClass: 'html',
    url: 'https://github.com/AnupamaSharma2000/vktx-stock-pitch',
    tags: ['web', 'data'],
    updated: '2026-04-02'
  },
  {
    name: 'RL Playground',
    desc: 'Interactive learning resource for understanding the mathematics behind Reinforcement Learning.',
    lang: 'TypeScript', langClass: 'typescript',
    url: 'https://github.com/AnupamaSharma2000/rl-playground',
    tags: ['ml', 'web'],
    updated: '2026-04-01'
  },
  {
    name: 'Congress Vote Tracker',
    desc: 'Real-time congressional vote tracking and analysis application.',
    lang: 'TypeScript', langClass: 'typescript',
    url: 'https://github.com/AnupamaSharma2000/congress-vote-tracker',
    tags: ['data', 'web'],
    updated: '2026-04-01'
  },
  {
    name: 'Qwen2-VL Extraction Pipeline',
    desc: 'Fine-tuned Qwen2 Vision Language Model for structured information extraction from financial documents, achieving ~25% F1 improvement on A100 GPUs.',
    lang: 'Python', langClass: 'python',
    url: 'https://github.com/AnupamaSharma2000',
    tags: ['ml'],
    updated: '2025-07-01'
  },
  {
    name: 'Multi-Agent RAG System',
    desc: 'Multi-stage retrieval and ranking system with query understanding, semantic search, relevance scoring, and real-time monitoring dashboard for KPIs.',
    lang: 'Python', langClass: 'python',
    url: 'https://github.com/AnupamaSharma2000/MultiAgent_RAG',
    tags: ['ml'],
    updated: '2026-03-01'
  },
  {
    name: 'Floor Plan Symbol Detector',
    desc: 'Symbol detection in floor plans and line/shape extraction from architectural PDFs using OpenCV + PyTorch.',
    lang: 'Python', langClass: 'python',
    url: 'https://github.com/AnupamaSharma2000/floor-plan-symbol-detector',
    tags: ['ml', 'data'],
    updated: '2026-03-10'
  },
  {
    name: 'T2I Prompt Adherence Study',
    desc: 'VAE-based evaluation framework benchmarking 5 text-to-image models for spatial grounding and prompt adherence across resolutions.',
    lang: 'Python', langClass: 'python',
    url: 'https://github.com/AnupamaSharma2000',
    tags: ['ml', 'data'],
    updated: '2025-03-01'
  }
];

const GITHUB_ACTIVITY = [
  {date:'Jan 11',c:0},{date:'Jan 18',c:0},{date:'Jan 25',c:0},
  {date:'Feb 1',c:0},{date:'Feb 8',c:0},{date:'Feb 15',c:3},
  {date:'Feb 22',c:0},{date:'Mar 1',c:1},{date:'Mar 8',c:28},
  {date:'Mar 15',c:2},{date:'Mar 22',c:4},{date:'Mar 29',c:1},
  {date:'Apr 2',c:38}
];

const SKILLS_DATA = {
  labels: ['Python', 'Machine Learning', 'Data Engineering', 'Deep Learning', 'NLP', 'Visualization', 'SQL', 'Cloud/MLOps'],
  values: [95, 88, 82, 85, 78, 80, 85, 70]
};

const LANGUAGE_DATA = [
  { lang: 'Python',     pct: 40, color: '#d4a24c' },
  { lang: 'TypeScript', pct: 20, color: '#6bb8e8' },
  { lang: 'Jupyter',    pct: 15, color: '#e8935a' },
  { lang: 'HTML',       pct: 10, color: '#b88be8' },
  { lang: 'R',          pct:  8, color: '#a3d977' },
  { lang: 'C/C++',      pct:  7, color: '#9b9688' },
];

// ---- TERMINAL COMMANDS ----
const COMMANDS = {
  help: () => `Available commands:
  <span class="boot-accent">about</span>      — Who am I
  <span class="boot-accent">skills</span>     — Technical skills
  <span class="boot-accent">projects</span>   — Featured projects
  <span class="boot-accent">education</span>  — Academic background
  <span class="boot-accent">experience</span> — Work history
  <span class="boot-accent">contact</span>    — Get in touch
  <span class="boot-accent">fun</span>        — Fun facts
  <span class="boot-accent">clear</span>      — Clear terminal
  <span class="boot-accent">goto &lt;tab&gt;</span> — Switch to a dashboard tab`,

  about: () => `<span class="boot-accent">╔══ ABOUT ═══════════════════════════════╗</span>
  Name:     Annu Sharma
  Role:     Data Scientist & ML Engineer
  School:   University of Maryland (MS Data Science)
  Alma:     BITS Pilani (B.E. Computer Science)
  Focus:    ML systems, Deep Learning, NLP
  Status:   Seeking Summer 2026 internships
<span class="boot-accent">╚════════════════════════════════════════╝</span>`,

  skills: () => `<span class="boot-accent">╔══ SKILLS ══════════════════════════════╗</span>
  Python       [${'█'.repeat(19)}░] 95%
  ML/DL        [${'█'.repeat(17)}░░░] 88%
  SQL          [${'█'.repeat(17)}░░░] 85%
  Deep Learning[${'█'.repeat(17)}░░░] 85%
  Data Eng     [${'█'.repeat(16)}░░░░] 82%
  Visualization[${'█'.repeat(16)}░░░░] 80%
  NLP          [${'█'.repeat(15)}░░░░░] 78%
  Cloud/MLOps  [${'█'.repeat(14)}░░░░░░] 70%
<span class="boot-accent">╚════════════════════════════════════════╝</span>`,

  projects: () => {
    let out = `<span class="boot-accent">╔══ PROJECTS ════════════════════════════╗</span>\n`;
    PROJECTS.slice(0, 6).forEach(p => {
      out += `  <span class="boot-info">▸</span> ${p.name} <span class="boot-warn">[${p.lang}]</span>\n    ${p.desc.slice(0, 70)}...\n`;
    });
    out += `<span class="boot-accent">╚════════════════════════════════════════╝</span>`;
    return out;
  },

  education: () => `<span class="boot-accent">╔══ EDUCATION ═══════════════════════════╗</span>
  <span class="boot-info">▸</span> MS Data Science — University of Maryland
    2025 – Present | GPA: —
  <span class="boot-info">▸</span> B.E. Computer Science — BITS Pilani
    2018 – 2022
<span class="boot-accent">╚════════════════════════════════════════╝</span>`,

  experience: () => `<span class="boot-accent">╔══ EXPERIENCE ══════════════════════════╗</span>
  <span class="boot-info">▸</span> Jr. Associate ML Eng — Synechron
    Jul 2024 – Jul 2025
    Qwen2-VL fine-tuning, ML pipelines, REST APIs
  <span class="boot-info">▸</span> AI-ML Intern — Synechron
    Jul 2023 – Jun 2024
    Multi-agent RAG, LangGraph, ChromaDB
  <span class="boot-info">▸</span> MS Data Science — UMD
    Aug 2025 – May 2027
  <span class="boot-info">▸</span> MS Physics + B.E. EEE — BITS Pilani
    2019 – 2024
<span class="boot-accent">╚════════════════════════════════════════╝</span>`,

  contact: () => `<span class="boot-accent">╔══ CONTACT ═════════════════════════════╗</span>
  <span class="boot-info">Email:</span>    sharma25@umd.edu
  <span class="boot-info">GitHub:</span>   github.com/AnupamaSharma2000
  <span class="boot-info">Location:</span> College Park, MD
  <span class="boot-info">Status:</span>   <span class="boot-ok">Open to work</span>
<span class="boot-accent">╚════════════════════════════════════════╝</span>`,

  fun: () => `<span class="boot-accent">╔══ FUN FACTS ═══════════════════════════╗</span>
  🏸 Love playing badminton
  ☕ Loves chai AND coffee (would mix them just to annoy everyone)
  🐱 If I could be an animal, I'd be a cat
<span class="boot-accent">╚════════════════════════════════════════╝</span>`,

  whoami: () => `annu@portfolio — Data Scientist, ML Engineer, Builder`,
  date: () => new Date().toLocaleString(),
  pwd: () => `/home/annu/portfolio`,
  ls: () => `about.txt  skills.dat  projects/  experience/  contact.md  fun_facts.log`,
  cat: () => `Usage: try <span class="boot-accent">about</span>, <span class="boot-accent">skills</span>, <span class="boot-accent">projects</span>, etc.`,
  neofetch: () => `<span class="boot-accent">       ▄▄▄▄▄▄▄</span>       annu@portfolio
<span class="boot-accent">      ████████▀</span>       ──────────────────
<span class="boot-accent">     ▄████████</span>        OS: Life v26.0
<span class="boot-accent">    ▄████████▀</span>        Host: UMD College Park
<span class="boot-accent">   ▄████████</span>         Kernel: Data Science
<span class="boot-accent">   ████████</span>          Shell: Python 3.11
<span class="boot-accent">   ▀██████</span>           Resolution: 4K ambitions
<span class="boot-accent">    ▀█████</span>           Theme: Amber [dark]
<span class="boot-accent">     ▀████</span>           CPU: Caffeinated @ 3.0GHz
<span class="boot-accent">      ▀██▀</span>           Memory: 10000+ hours ML`
};

// ---- BOOT SEQUENCE ----
const BOOT_LINES = [
  { text: 'ssh annu@life-portfolio', delay: 600, class: '' },
  { text: 'Connecting to annu@portfolio...', delay: 400, class: 'boot-info' },
  { text: 'Authenticating... OK', delay: 300, class: 'boot-ok' },
  { text: '', delay: 200, class: '' },
  { text: '> Loading modules...', delay: 300, class: 'boot-warn' },
  { text: '  [█████████████] python.core       ✓', delay: 150, class: 'boot-ok' },
  { text: '  [█████████████] ml.tensorflow     ✓', delay: 150, class: 'boot-ok' },
  { text: '  [█████████████] ml.pytorch        ✓', delay: 150, class: 'boot-ok' },
  { text: '  [█████████████] data.pandas       ✓', delay: 150, class: 'boot-ok' },
  { text: '  [█████████████] viz.d3            ✓', delay: 150, class: 'boot-ok' },
  { text: '  [█████████████] nlp.transformers  ✓', delay: 150, class: 'boot-ok' },
  { text: '', delay: 100, class: '' },
  { text: '> Fetching GitHub data... 93 commits, 16 repos', delay: 400, class: 'boot-info' },
  { text: '> Building dashboard components...', delay: 300, class: 'boot-warn' },
  { text: '  ✓ Overview panel', delay: 120, class: 'boot-ok' },
  { text: '  ✓ Projects grid', delay: 120, class: 'boot-ok' },
  { text: '  ✓ Skills radar', delay: 120, class: 'boot-ok' },
  { text: '  ✓ Activity charts', delay: 120, class: 'boot-ok' },
  { text: '  ✓ Timeline engine', delay: 120, class: 'boot-ok' },
  { text: '', delay: 100, class: '' },
  { text: '╔══════════════════════════════════════════╗', delay: 200, class: 'boot-accent' },
  { text: '║                                          ║', delay: 50, class: 'boot-accent' },
  { text: '║     ANNU SHARMA — LIFE PORTFOLIO v1.0    ║', delay: 50, class: 'boot-accent' },
  { text: '║     Data Scientist & ML Engineer          ║', delay: 50, class: 'boot-accent' },
  { text: '║                                          ║', delay: 50, class: 'boot-accent' },
  { text: '╚══════════════════════════════════════════╝', delay: 200, class: 'boot-accent' },
  { text: '', delay: 100, class: '' },
  { text: '> Launching dashboard...', delay: 600, class: 'boot-ok' }
];

(function bootSequence() {
  const output = document.getElementById('terminal-output');
  const cursorLine = output.querySelector('.terminal-cursor-line');
  const typedText = document.getElementById('typed-text');
  let lineIdx = 0;

  function typeLine() {
    if (lineIdx >= BOOT_LINES.length) {
      // Boot complete — transition to dashboard
      setTimeout(() => {
        document.getElementById('terminal-boot').classList.add('fade-out');
        setTimeout(() => {
          document.getElementById('terminal-boot').style.display = 'none';
          const dashboard = document.getElementById('dashboard');
          dashboard.classList.remove('hidden');
          dashboard.classList.add('fade-in');
          initDashboard();
        }, 800);
      }, 400);
      return;
    }

    const line = BOOT_LINES[lineIdx];
    // Add completed line
    if (lineIdx > 0) {
      const prev = BOOT_LINES[lineIdx - 1];
      const lineEl = document.createElement('div');
      lineEl.className = 'terminal-line';
      if (lineIdx === 1) {
        lineEl.innerHTML = `<span class="terminal-prompt">$</span><span class="terminal-text ${prev.class}">${prev.text}</span>`;
      } else {
        lineEl.innerHTML = `<span class="terminal-text ${prev.class}">${prev.text}</span>`;
      }
      output.insertBefore(lineEl, cursorLine);
    }

    // Type current line character by character (for first line only)
    if (lineIdx === 0) {
      let charIdx = 0;
      typedText.textContent = '';
      const typeInterval = setInterval(() => {
        if (charIdx < line.text.length) {
          typedText.textContent += line.text[charIdx];
          charIdx++;
        } else {
          clearInterval(typeInterval);
          lineIdx++;
          setTimeout(typeLine, line.delay);
        }
      }, 40);
    } else {
      // Hide cursor line for fast lines
      cursorLine.style.display = lineIdx === BOOT_LINES.length - 1 ? 'flex' : 'none';
      lineIdx++;
      setTimeout(typeLine, line.delay);
    }

    // Auto-scroll
    output.scrollTop = output.scrollHeight;
  }

  // Start after a brief pause
  setTimeout(typeLine, 500);
})();

// ---- DASHBOARD INIT ----
function initDashboard() {
  lucide.createIcons();
  initNav();
  renderProjects('all');
  initFilters();
  initTerminal();
  initCharts();
  animateCounters();
  // Render lang bars after a frame so the DOM is fully painted
  requestAnimationFrame(() => requestAnimationFrame(renderLangBars));
}

// ---- NAVIGATION ----
function initNav() {
  document.querySelectorAll('.nav-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const section = btn.dataset.section;
      document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      document.querySelectorAll('.dash-section').forEach(s => {
        s.classList.remove('active');
        s.style.animation = 'none';
      });
      const target = document.getElementById('sec-' + section);
      target.classList.add('active');
      // Re-trigger animation
      void target.offsetWidth;
      target.style.animation = 'sectionIn 0.5s var(--ease-out) forwards';
    });
  });
}

// ---- PROJECTS ----
function renderProjects(filter) {
  const grid = document.getElementById('projects-grid');
  grid.innerHTML = '';

  const filtered = filter === 'all'
    ? PROJECTS
    : PROJECTS.filter(p => p.tags.includes(filter));

  filtered.forEach((p, i) => {
    const card = document.createElement('div');
    card.className = 'card project-card';
    card.style.animationDelay = `${i * 60}ms`;
    card.innerHTML = `
      <div class="project-name">${p.name}</div>
      <div class="project-desc">${p.desc}</div>
      <div class="project-meta">
        <div class="project-lang">
          <span class="lang-dot ${p.langClass}"></span>
          <span>${p.lang}</span>
        </div>
        <a href="${p.url}" class="project-link" target="_blank" rel="noopener noreferrer">
          <i data-lucide="external-link"></i>
          View
        </a>
      </div>
    `;
    grid.appendChild(card);
  });

  lucide.createIcons();
}

function initFilters() {
  document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      renderProjects(btn.dataset.filter);
    });
  });
}

// ---- INTERACTIVE TERMINAL ----
function initTerminal() {
  const input = document.getElementById('terminal-input');
  const output = document.getElementById('interactive-output');

  input.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      const cmd = input.value.trim().toLowerCase();
      input.value = '';

      // Echo command
      const echoLine = document.createElement('div');
      echoLine.className = 'terminal-line';
      echoLine.innerHTML = `<span class="terminal-prompt">$</span><span class="terminal-text">${cmd}</span>`;
      output.appendChild(echoLine);

      // Process
      let result = '';
      if (cmd === 'clear') {
        output.innerHTML = '';
        return;
      } else if (cmd.startsWith('goto ')) {
        const tab = cmd.replace('goto ', '').trim();
        const btn = document.querySelector(`.nav-btn[data-section="${tab}"]`);
        if (btn) {
          btn.click();
          result = `<span class="boot-ok">Switched to ${tab} tab</span>`;
        } else {
          result = `<span class="boot-warn">Unknown tab: ${tab}. Try: overview, projects, experience, terminal, contact</span>`;
        }
      } else if (COMMANDS[cmd]) {
        result = typeof COMMANDS[cmd] === 'function' ? COMMANDS[cmd]() : COMMANDS[cmd];
      } else if (cmd === '') {
        return;
      } else {
        result = `<span class="boot-warn">Command not found: ${cmd}. Type <span class="cmd-highlight">help</span> for available commands.</span>`;
      }

      const resultLine = document.createElement('div');
      resultLine.className = 'terminal-line';
      resultLine.innerHTML = `<span class="terminal-text" style="white-space:pre-wrap">${result}</span>`;
      output.appendChild(resultLine);

      output.scrollTop = output.scrollHeight;
    }
  });

  // Focus terminal input when section is active
  document.querySelector('[data-section="terminal"]').addEventListener('click', () => {
    setTimeout(() => input.focus(), 100);
  });
}

// ---- CHARTS ----
function initCharts() {
  const amber = '#d4a24c';
  const amberLight = 'rgba(212, 162, 76, 0.3)';
  const textMuted = '#9b9688';
  const gridColor = 'rgba(46, 44, 38, 0.6)';

  Chart.defaults.color = textMuted;
  Chart.defaults.font.family = "'JetBrains Mono', monospace";
  Chart.defaults.font.size = 11;

  // Activity chart
  new Chart(document.getElementById('activityChart'), {
    type: 'bar',
    data: {
      labels: GITHUB_ACTIVITY.map(d => d.date),
      datasets: [{
        label: 'Contributions',
        data: GITHUB_ACTIVITY.map(d => d.c),
        backgroundColor: GITHUB_ACTIVITY.map(d => d.c > 10 ? amber : amberLight),
        borderColor: amber,
        borderWidth: 1,
        borderRadius: 3,
        barPercentage: 0.7
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: { display: false },
        tooltip: {
          backgroundColor: '#1a1916',
          titleColor: amber,
          bodyColor: '#e8e4d9',
          borderColor: '#2e2c26',
          borderWidth: 1,
          cornerRadius: 6,
          padding: 10
        }
      },
      scales: {
        x: {
          grid: { color: gridColor },
          ticks: { maxRotation: 45, font: { size: 9 } }
        },
        y: {
          grid: { color: gridColor },
          beginAtZero: true
        }
      },
      animation: { duration: 800, easing: 'easeOutQuart' }
    }
  });

  // Skills radar
  new Chart(document.getElementById('skillsRadar'), {
    type: 'radar',
    data: {
      labels: SKILLS_DATA.labels,
      datasets: [{
        label: 'Proficiency',
        data: SKILLS_DATA.values,
        backgroundColor: 'rgba(212, 162, 76, 0.15)',
        borderColor: amber,
        borderWidth: 2,
        pointBackgroundColor: amber,
        pointBorderColor: amber,
        pointRadius: 4,
        pointHoverRadius: 6
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: { legend: { display: false } },
      scales: {
        r: {
          grid: { color: gridColor },
          angleLines: { color: gridColor },
          ticks: { display: false, stepSize: 20 },
          suggestedMin: 0,
          suggestedMax: 100,
          pointLabels: { font: { size: 10 } }
        }
      },
      animation: { duration: 800, easing: 'easeOutQuart' }
    }
  });

}

function renderLangBars() {
  const container = document.getElementById('lang-bars');
  if (!container) return;
  container.innerHTML = '';

  LANGUAGE_DATA.forEach((item, i) => {
    const row = document.createElement('div');
    row.className = 'lang-row';
    row.innerHTML = `
      <div class="lang-row-top">
        <span class="lang-name">${item.lang}</span>
        <span class="lang-pct">${item.pct}%</span>
      </div>
      <div class="lang-track">
        <div class="lang-fill" style="background:${item.color};width:0%" data-target="${item.pct}"></div>
      </div>
    `;
    container.appendChild(row);
  });

  // Animate fills in
  requestAnimationFrame(() => {
    document.querySelectorAll('.lang-fill').forEach((fill, i) => {
      const target = fill.dataset.target;
      setTimeout(() => {
        fill.style.transition = `width 700ms cubic-bezier(0.16, 1, 0.3, 1)`;
        fill.style.width = target + '%';
      }, i * 80);
    });
  });
}

// ---- ANIMATE COUNTERS ----
function animateCounters() {
  document.querySelectorAll('.stat-value[data-count]').forEach(el => {
    const target = parseInt(el.dataset.count);
    const duration = 1200;
    const start = performance.now();

    function update(now) {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      // Ease out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      el.textContent = Math.round(target * eased);
      if (progress < 1) requestAnimationFrame(update);
    }
    requestAnimationFrame(update);
  });
}
