# Portfolio

Static, single-page portfolio. No build step, no dependencies. Double-click `index.html`.

The two earlier designs (vertical timeline, green sidebar) live on the `old-designs` branch.

## Add / edit projects

Everything lives in `projects.js`:

- `PROFILE` — name, title, role pill, headline (two parts, second is italic), subhead, tagline, seeking/focus lines, location, email, links, and the three `stats` tiles under the hero.
- `PROJECTS` — one object per project. Copy the template at the bottom of the array.
- `SKILL_GROUPS` — optional buckets for the Skills section. Unlisted tech lands under "Other".

Fields per project:

| field         | notes                                                              |
|---------------|--------------------------------------------------------------------|
| `start`/`end` | `"YYYY-MM-DD"`; `end: null` for ongoing (planned bars default to 3 months) |
| `status`      | `"in-progress"`, `"completed"`, or `"planned"`                     |
| `featured`    | full-width card in the grid                                        |
| `tech`        | feeds Skills and the stats                                         |
| `tags`        | feeds the filter chips                                             |
| `milestones`  | `{ date, text }` — dots on the Gantt bar, list in the card, rows in the Activity log |
| `links`       | `{ label, url }` — local paths or URLs                             |

Anything containing the word `TODO` renders in purple so placeholders are easy to spot.

Tip: `git log --date=short --pretty='%ad %s'` inside a project repo gives you milestone dates for free.

## Export for a resume

Press Ctrl+P in the browser. The print stylesheet flattens to one column, expands every
card and the full activity log, and prints link URLs inline. Deep-link a project with `index.html#p-uart`.

## Preview through Claude Code

`serve.ps1` is a tiny PowerShell static server on port 8765 used by the Browser pane
(no Python or Node needed). Run it yourself with:

```powershell
powershell -ExecutionPolicy Bypass -File serve.ps1
```

## Put it online (later)

Push this folder to a GitHub repo and enable GitHub Pages (Settings > Pages > Deploy from branch).
Then swap the local `../UART` link for the repo URL.
