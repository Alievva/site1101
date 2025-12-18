# Personal Jekyll Portfolio (GitHub Pages ready)

This repository contains a minimal, modular Jekyll portfolio scaffold compatible with GitHub Pages (no unsupported plugins).

**Folders created**
- `_layouts`: site layouts (base HTML templates).
- `_includes`: reusable partials such as `head.html`, `header.html`, `footer.html`.
- `assets/css`: stylesheet(s) and static assets.
- `assets/images`: images and placeholders.
- `_pages`: modular site pages (About, Projects, Achievements, Contact).

Quick notes on each folder:
- `_layouts`: contains the `default.html` layout used by pages; it includes header/footer and injects page content via `{{ content }}`.
- `_includes`: small HTML snippets shared across layouts; edit `header.html` to change navigation, `footer.html` for footer text, and `head.html` for meta and CSS links.
- `assets/css`: put your custom styles (already has `main.css`).
- `assets/images`: store portfolio images, screenshots, and icons.
- `_pages`: markdown pages that will be rendered to `/about/`, `/projects/`, `/achievements/`, `/contact/`.

Windows + VS Code: install and run

1) Install Ruby (use RubyInstaller for Windows):

```powershell
# Visit https://rubyinstaller.org/ and install Ruby+Devkit (recommended).
# After installing, open a new terminal and run:
gem install bundler
```

2) Install gems for the project (from project root in VS Code terminal):

```powershell
bundle install
```

3) Serve locally with Bundler (recommended):

```powershell
bundle exec jekyll serve --livereload --host 127.0.0.1
```

Open http://127.0.0.1:4000/ in your browser.

Notes for GitHub Pages

- This project uses the `github-pages` gem for compatibility. If you want GitHub to build the site automatically, push this repo to a GitHub repository named `your-username.github.io` (replace `your-username`) and push the `main` branch. GitHub Pages will serve the site from the `main` branch root for that special repo.

Alternative: Use a project site

- If you prefer to host a project site, push to any repository and enable GitHub Pages to serve from `main` (root or `/docs`) or `gh-pages` branch in the repository settings.

No plugins

- This scaffold avoids unsupported plugins so it is safe to build with GitHub Pages. If you add plugins, GitHub Pages will not run them unless they are in the supported list.

Next steps

- Replace content in `_pages/*` with your real bio, projects and contact details.
- Add project images to `assets/images` and reference them with `{{ "/assets/images/your.png" | relative_url }}`.
- Customize styles in `assets/css/main.css` or add additional stylesheets.

If you want, I can:
- Add a `projects` data file to list projects and render them dynamically.
- Wire a contact form integration guide.
- Create a GitHub Actions workflow to build and deploy to `gh-pages` branch.

