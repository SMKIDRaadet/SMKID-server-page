import React from 'react';
import MarkdownRenderer from '../components/MarkdownRenderer';

const content = `# Wiki Documentation

Welcome to our comprehensive wiki section. Here you'll find detailed information about all aspects of our project.

## Table of Contents

1. **Getting Started**
   - Installation Guide
   - Basic Configuration
   - Quick Start Tutorial

2. **Core Concepts**
   - Architecture Overview
   - Key Components
   - Best Practices

3. **Advanced Topics**
   - Performance Optimization
   - Security Guidelines
   - Troubleshooting

## Contributing

We welcome contributions to our wiki! Please follow these steps:

1. Review our contribution guidelines
2. Fork the repository
3. Make your changes
4. Submit a pull request

> Remember to check our [Guidelines](/guidelines) before contributing.

## Need Help?

If you can't find what you're looking for, feel free to:

- Check our FAQ section
- Join our community forum
- Contact our support team`;

function Wiki() {
  return <MarkdownRenderer content={content} />;
}

export default Wiki;