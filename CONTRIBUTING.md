# Contributing to `@boylu/router`

👍🎉 First off, thanks for taking the time to contribute! 🎉👍

The following is a set of guidelines for contributing to `@boylu/router`. These are just guidelines, not rules, so use your best judgement and feel free to propose changes to this document in a pull request.

## How to contribute

### Reporting bugs

If you find a bug, please open an issue on the GitHub repository. When you open an issue, please provide a clear description of the problem, including steps to reproduce the issue if possible.

### Suggesting enhancements or new features

If you have an idea for a new feature or enhancement, please open an issue on the GitHub repository. When you open an issue, please provide a clear description of the feature or enhancement you would like to see, and why you think it would be useful.

## Contributing code

If you would like to contribute code to `@boylu/router`, please follow these steps:

1. Fork the repository on GitHub.
2. Create a new branch for your changes.
3. Make your changes on the new branch.
4. Write tests to cover your changes.
5. Run the tests to make sure they pass.
6. Update the documentation to reflect your changes.
7. Make your changes and commit them with clear, concise commit messages (see [commit convention](#commit-convention) below).
8. Open a pull request on the GitHub repository.
9. When you open a pull request, please use the provided template and fill in all the required information.

## Commit convention

We use a commit convention to ensure that our commit messages are consistent, informative, and easy to understand. We enforce this convention using [commitlint](https://commitlint.js.org/) with the [conventional commit](https://www.conventionalcommits.org/en/v1.0.0/) configuration, which also allows us to automatically generate a changelog.

To help you write good commit messages, here are the rules you should follow:

- Use present tense and imperative mood in the subject line of the commit message.
- The subject line should be no longer than 72 characters.
- Separate the subject line from the body of the commit message with a blank line.
- The body of the commit message should provide more detail about what was changed and why.

For example, a well-formed commit message might look like this:

```
feat: add support for nested routes

This commit adds support for nested routes to the Router class by allowing the specification of children routes in the Route interface. This change improves the usability of the Router class by providing a more flexible and intuitive API.
```

We have set up [husky](https://typicode.github.io/husky) to automatically run commitlint on every commit, so if your commit message does not conform to the above rules, the commit will be rejected.

We encourage you to write clear, concise, and informative commit messages, as they help us understand the purpose and impact of each change. Thank you for your contributions!
