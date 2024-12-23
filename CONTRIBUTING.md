# Contributing to Evan Harmon Website
First of all, thank you for taking the time to contribute! 🎉

The following is a set of guidelines to ensure your contribution is as smooth as possible. We welcome all types of contributions, including issues, documentation updates, bug fixes, feature requests, and more!

## Code of Conduct
This project adheres to a [Code of Conduct](./CODE_OF_CONDUCT.md). By participating, you are expected to uphold this code. Please report unacceptable behavior to Evan Harmon at evan@evanharmon.com.

## How Can I Contribute?
### 1. Reporting Issues
If you find a bug or have a feature request, please create an issue using the appropriate template:

- **Bug Reports:** [bug report link]
- **Feature Requests:** [feature request link]

When submitting an issue, please include the following information:
- Clear title describing the issue.
- Steps to reproduce (for bugs).
- Any relevant screenshots or code snippets.
- Version of the project or environment.

### 2. Submitting Pull Requests
Before starting work on a major change, open an issue first to discuss your proposed changes. This will avoid any duplication of effort and ensure your contribution aligns with the project goals.

To submit a pull request:
1. Fork the repository and clone your fork.
2. Create a new branch for your contribution: `git checkout -b my-feature-branch`
3. Make your changes.
4. Ensure your changes pass any tests.
5. Commit your changes: `git commit -m “Add feature/fix: short description”`
6. Push to your fork: `git push origin my-feature-branch`
7. Open a pull request in the main repository, linking to the issue if one exists.

### 3. Guidelines for Code Contributions
- Follow the existing code style. If there is an `.editorconfig` or linter configuration, use it to format your code.
- Write clear, descriptive commit messages.
- Write unit tests for any new functionality or bug fixes, if applicable.
- Ensure that tests pass locally before submitting your pull request.
- Document new public methods or features in the relevant documentation files.

### 4. Improving Documentation
We also appreciate improvements to our documentation!

You can:
- Fix typos, clarify instructions, or correct grammar.
- Add new sections or examples for difficult concepts.

Feel free to submit a pull request with your improvements.

## Commit Message Guidelines
We follow the [Conventional Commits](https://www.conventionalcommits.org) standard for writing commit messages. This helps us manage the code history, generate changelogs, and automate CI/CD tooling. Example:

Example commit message:
```
feat(api): add support for custom endpoints

Added support for creating and managing custom endpoints in the API.
Resolves issue #42.
```

Commit message structure:
```
<type>[optional scope]: <description>

[optional body]

[optional footer(s)]
```

Types:
- feat: A new feature for the user.
- fix: A bug fix for the user.
- chore: Routine tasks (e.g., build tasks, dependencies).
- docs: Documentation only changes.
- style: Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc.).
- refactor: A code change that neither fixes a bug nor adds a feature.
- perf: A code change that improves performance.
- test: Adding missing or correcting existing tests.
- ci: Changes to your CI configuration files and scripts.
- build: Changes that affect the build system or external dependencies.
- revert: Reverts a previous commit.

## Contact
If you have any questions about contributing, feel free to open an issue or contact Evan Harmon at evan@evanharmon.com.

Thank you for contributing!
