---
layout: post
title:  "Sample Post: Benchmark Results"
date:   2025-11-22 22:10:00 +0800
description: Comparing language model performance across different metrics and training costs
categories: blog
---

# Model Performance Comparison

This is a sample blog post to demonstrate the new table styling with alternating colors and gradient headers.

## Language Model Benchmarks

Here's a comparison of various language models across different metrics:

| Model | Parameters | MMLU Score | HumanEval | Latency (ms) | Cost per 1M tokens |
|-------|------------|------------|-----------|--------------|-------------------|
| GPT-4 | 1.76T | 86.4% | 67.0% | 450 | $30.00 |
| Claude 3 Opus | Unknown | 86.8% | 84.9% | 380 | $15.00 |
| Claude 3 Sonnet | Unknown | 79.0% | 73.0% | 220 | $3.00 |
| Llama 3 70B | 70B | 79.5% | 81.7% | 180 | $0.90 |
| Gemini 1.5 Pro | Unknown | 85.9% | 71.9% | 410 | $7.00 |
| Mistral Large | Unknown | 81.2% | 45.1% | 200 | $8.00 |

## Training Infrastructure Costs

Below is a breakdown of training costs for different model sizes:

| Model Size | GPUs Required | Training Time | Energy Cost | Hardware Cost | Total Cost |
|------------|---------------|---------------|-------------|---------------|------------|
| 7B params | 8x A100 | 2 weeks | $12,000 | $50,000 | $62,000 |
| 13B params | 16x A100 | 3 weeks | $28,000 | $100,000 | $128,000 |
| 70B params | 128x A100 | 6 weeks | $180,000 | $800,000 | $980,000 |
| 175B params | 256x A100 | 12 weeks | $650,000 | $1,600,000 | $2,250,000 |

## Button Example

Here's a sample button with the new gradient styling:

<a href="#" class="button">Download Results</a>

## Code Example

And here's some sample code with syntax highlighting:

```python
def benchmark_model(model_name, test_suite):
    """Run benchmark tests on a language model."""
    results = {
        'accuracy': 0.0,
        'latency': 0.0,
        'throughput': 0.0
    }

    for test in test_suite:
        score = model_name.evaluate(test)
        results['accuracy'] += score

    return results
```

## Conclusion

The new table styling makes it much easier to read and compare data across multiple rows. The alternating colors provide better visual separation, and the gradient header adds a modern touch to the design.
