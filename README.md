# filbench.github.io

To develop locally, first clone the repository and install the dependencies.
Ensure that you have Ruby and Bundler installed. Then run:

```bash
git clone git@github.com:filbench/filbench.github.io.git
bundle install
```

To serve the website locally, run:

```bash
bundle exec jekyll serve --livereload
```

Then open your browser and navigate to `http://localhost:4000` to view the website.

## How to add yourself in the `/people` page

After cloning (or forking) the repository, create a new branch:

```sh
git checkout -b add-{yourname}
```

Then, edit the `_data/people.yml` and supply your information:

```yml
# In general, use short versions of your affiliation and roles
# The space is a bit tight (three-columns), so we want things to render nicely
# in the website.
- name: Your name
  photo: /assets/images/people/yourimage.jpg
  affiliation: Your affiliation # Use the short version of your affiliation
  role: Your role #  Use the short version (PhD Student, Asst. Prof., MLE)
  research_interests:  # Put at most three keywords (aside from Filipino NLP)
    - Efficient NLP 
    - Data-centric AI 
    - Multilingual NLP and Post-training 
  website: https://example.com  # Your website
```

Finally, add your image in `assets/images/people/`.
Be sure to compress your image first (e.g., use [tinypng](https://tinypng.com/)) and ensure that your photo will render nicely if it's black and white.

When everything's done, create a PR and wait for our review!