# Annu Sharma — Life Portfolio

An interactive personal portfolio combining three experiences in one:

- **Terminal Boot Screen** — SSH-style boot sequence that loads your life like a system
- **Mission Control Dashboard** — Live GitHub stats, skills radar, activity charts, project grid
- **Interactive CLI** — Type commands like `about`, `skills`, `neofetch`, `projects` to explore

## Live

| | URL |
|---|---|
| **Vercel** | [life-portfolio-six.vercel.app](https://life-portfolio-six.vercel.app) |
| **GitHub Pages** | [anupamasharma2000.github.io/portfolio](https://anupamasharma2000.github.io/portfolio/) |

## Stack

Pure vanilla HTML, CSS, and JavaScript — no frameworks, no build step.

- [Chart.js](https://www.chartjs.org/) — GitHub activity bar chart, skills radar
- [Lucide Icons](https://lucide.dev/) — icon set
- [JetBrains Mono](https://www.jetbrains.com/legalforms/fonts/) + [Inter](https://rsms.me/inter/) — fonts

## Terminal Commands

Once the boot sequence finishes, head to the **Terminal** tab and try:

```
help        — list all commands
about       — who am I
skills      — proficiency bars
projects    — featured projects
experience  — work & education history
neofetch    — system info, hacker style
contact     — get in touch
fun         — fun facts
goto <tab>  — jump to any dashboard tab
```

## Local Development

No install needed. Just serve the folder:

```bash
npx serve . -l 3000
```

Then open [http://localhost:3000](http://localhost:3000).

## Deploying Updates

Push to `main` — Vercel auto-deploys within seconds. GitHub Pages rebuilds automatically too.

```bash
git add -A
git commit -m "your message"
git push
```

---

Built with [Perplexity Computer](https://perplexity.ai/computer).
