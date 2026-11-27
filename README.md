# ICMAT 2025 Conference Site

The website for **ICMAT 2025**, the International Conference on Mathematics and its Applications in Technology,
hosted at SASTRA (SRC, Kumbakonam). It's a static Bootstrap 3 + jQuery site.

## Pages

| Page | What it is |
|------|------------|
| `index.html` | Home: about the conference and the departments, important dates |
| `call-for-paper.html` | Call for papers and topics |
| `submission.html` | How to submit a paper |
| `registration.html` | Registration and fees |
| `publication.html` | Publication details |
| `keynote.html` | Keynote speakers |
| `committee.html` | Committees |
| `venue.html` | Venue |
| `contact.html` | Contact |

The brochure is in `img/ICMAT2025_Brochure.pdf` and the conference PDF in `assets/ICMAT2025.pdf`.

## Run it

There's no build step. Open `index.html` in a browser, or serve the folder:

```sh
git clone https://github.com/AbiXnash/conference-site.git
cd conference-site
python3 -m http.server 8000
```

`.github/workflows/static.yml` deploys the site to GitHub Pages on every push to `main`.

## Contributing

Please read the [contributing guidelines](CONTRIBUTING.md).

## License

MIT, see [LICENSE.md](LICENSE.md).

## Contact

For any inquiries, contact [abinashs2704@gmail.com](mailto:abinashs2704@gmail.com).
