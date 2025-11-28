---
layout: project
title: Uy PilipINST! Creating an instruction-tuning dataset for Philippine languages
date: 2025-10-30
description: We plan to create a high-quality instruction-tuning dataset for the four widely spoken PH languages (Tagalog, Cebuano, Ilocano, Hiligaynon), with around 10k samples per language. 
categories: projects
expected_date_range: Starts on Feb 2026 
skills:
  - Instruction Tuning
  - Data Collection and Curation
  - Benchmarking
project_category: Dataset Curation
lead: Lj V. Miranda 
lead_email: ljvm2@cam.ac.uk
lead_website: https://ljvmiranda921.github.io/
---

Instruction-tuning (or supervised fine-tuning, SFT) is a method to further refine a model's capabilities for specific tasks or languages.
It is relatively cheap and straightforward, which is why most foundation model providers include instruction-tuned models in their releases.

Since most foundation model providers rely on open-source datasets to train their models, we can indirectly influence their development pipelines by **contributing a high-quality instruction-tuning dataset to the open ecosystem**.
This effort also paves the way for training our own Filipino-centric language models.

## What exactly are we trying to do? 

Specifically, we will curate a **high-quality instruction-tuning dataset for the top four to six (4-6) spoken Philippine languages**: Tagalog, Bisaya, Hiligaynon, Ilokano, Cebuano, and Bikolano.

Ultimately, we want to answer the following question: 

> How does post-training data composition&mdash;synthetic, human-annotated, or web-crawled&mdash; affect LLM performance on FilBench, under a low annotation budget?

By doing so, we aim to explore the following aspects:

- **Data sourcing and composition**: Where can we find high-quality instruction data for Philippine languages? Should we prioritize synthetic generation, community platforms like Reddit, existing datasets like [Aya](https://huggingface.co/collections/CohereLabs/aya-datasets), or a combination of these sources? What is the optimal mix of data sources to maximize quality and diversity?

- **Data efficiency**: How much instruction-tuning data is needed to achieve strong performance on Filipino NLP benchmarks such as [FilBench](https://aclanthology.org/2025.emnlp-main.127/)? Can we identify diminishing returns to guide efficient data collection efforts?

- **Task relevance**: Which tasks and capabilities are most valuable for Filipino-centric use cases? How can we ensure our instruction dataset covers the linguistic and cultural nuances that matter most to Filipino language users?

## Other links and timelines

We have a loose timeline, but we plan to officially start the project on mid 2026.
We don't have a publication target (yet, but likely sometime 2027), most of our findings will be shared through a technical report on arXiV.
If you're interested to contribute / collaborate, you can read the full research brief (and other materials) in the links below:

| Document | Description |
|---------------|-------------|
| [Research Brief](https://docs.google.com/document/d/1FVD7Ywrc9-hGyDOxV5nRw0QeC98H2mTPjK-vfWJPbqI/edit?usp=sharing) | Research proposal. |
| [Project Journal](https://docs.google.com/presentation/d/12IKq5M1c9GuQEMjNshk0QlObZQu-EDb5nhfa5AhgYFg/edit?usp=sharing) | Running log of project progress. |
| [Google Drive](https://drive.google.com/drive/folders/1h_kGdyGzlax4BvJGcPAm09nnR-8Fr7aG?usp=drive_link) | Shared folder containing other materials. | 


## I want to help out!

[Reach out](https://calendar.app.google/YsYYEYWKPZmaUieK6) to me (Lj) first!
Although the official project will start mid-2026, I plan to start some experiments as early as January.
During that time, this will be a smaller effort compared to the [benchmark project](/projects/2025/11/19/semeval-task/), and I prefer a more focused team with 3 people including me.
I'm also happy to receive support in the form of **compute credits and grants** (if you know of any, please point them our way)!
