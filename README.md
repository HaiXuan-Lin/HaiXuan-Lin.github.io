# Haixuan Lin

This is the repository of my personal website. You can visit it at [https://haixuan-lin.github.io/](https://haixuan-lin.github.io/).

## Build with Docker

To run this repository locally, run:

```bash
docker compose build
docker compose up
```

Then open `http://localhost:4000` to view the website, or `http://localhost:4000/mobile-preview.html` to preview it in a 390 × 844 px viewport.

## Preview without Docker

With Ruby and Bundler installed, run:

```bash
bundle install
bundle exec jekyll serve --host 0.0.0.0 --port 4012
```

Open `http://127.0.0.1:4012/mobile-preview.html` to preview the mobile layout on your computer. To test on a real phone, connect your phone and computer to the same Wi-Fi network, then open `http://<computer-LAN-IP>:4012/` on your phone. Replace `<computer-LAN-IP>` with the computer's current local network address. The following script can be used to query:

```bash
ipconfig getifaddr en0
```

## About This Website Template

Many thanks to the open-source GitHub repository [academicpages.github.io](https://github.com/academicpages/academicpages.github.io) for providing this elegant personal website template. I designed these pages primarily based on the template and its accompanying tutorials.
