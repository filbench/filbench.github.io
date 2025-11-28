---
layout: project
title: Developing a high-quality benchmark dataset for the SemEval Shared Task
date: 2025-11-19
description: Developing state-of-the-art neural machine translation models for low-resource Filipino languages, focusing on Tagalog, Cebuano, and Ilocano.
expected_date_range: Nov 2025 - May 2026
skills:
  - Data annotation
  - Quality assurance
  - Linguistic expertise
  - Task design
project_category: Dataset Development
lead: Jan Christian Blaise Cruz
lead_email: jcbcruz02@gmail.com
lead_website: https://blaisecruz.com
---

[FilBench](https://aclanthology.org/2025.emnlp-main.127/) is the first step towards LLM evaluation on Filipino-centric tasks, but we can still do more.
Specifically:

- Increasing the breadth of languages we test upon (2 -> 6 or more). These languages include: Tagalog, Bisaya, Hiligaynon, Ilokano, Cebuano, and Bikolano.
- Focusing only on specific tasks we care about (e.g., causal reasoning, narrative understanding, factual knowledge, etc.); and
- Evaluating on a small number of difficult and culturally-grounded examples.

In this work, we plan to create a language model benchmark by annotating specific examples from other benchmarks such as [XCOPA](https://huggingface.co/datasets/cambridgeltl/xcopa), [XStoryCloze](https://huggingface.co/datasets/juletxara/xstory_cloze), [Belebele](https://huggingface.co/datasets/facebook/belebele), and [MMLU](https://huggingface.co/datasets/cais/mmlu).

## Other links and timelines

We want to start late December and finish early 2026, just in time for the May ARR for EMNLP.

| Document | Description |
|---------------|-------------|
| [Project Introduction](https://docs.google.com/presentation/d/1OpYSBDKllEFKcjQXO10VNMbuQfgkITzjipSTYd_GVqQ/edit?usp=drive_link) | Running log of project progress. |
| [Project Journal](https://docs.google.com/document/d/1OY96nw6IdiF3cT3pEdNbgcw3loSfZg-clYh3yRmZjI8/edit?usp=drive_link) | Running log of project progress. |
| [Google Drive](https://drive.google.com/drive/folders/16jAkzGZR3X7ebsK3Y4g7YageG3s-G6sX?usp=drive_link) | Shared folder containing other materials. | 

## I want to help out!

We're specifically looking for the following contributors:

- **Language validators** who are native speakers of Tagalog, Bisaya, Hiligaynon (Ilonggo), Ilokano, Cebuano, and Bikolano who are willing to take a more *active role* in validating annotations from other annotators and help co-develop language-specific annotation guidelines with us.
  - Language validators will be **offered co-authorship** in the paper we'll submit to a leading NLP conference early next year.
  - It will also be helpful if validators can refer other annotators who are willing to help us translate some evaluation examples from English to a Philippine language.

- **Data annotators** who are native speakers of Tagalog, Bisaya, Hiligaynon (Ilonggo), Ilokano, Cebuano, and Bikolano who are willing to translate sentences (ranging from a short sentence to a full story paragraph) from English to a Philippine language according to a set of annotation guidelines.
  - Data annotators will be onboarded into an annotation platform, and will be given monetary compensation.