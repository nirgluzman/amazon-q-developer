# [Amazon Q Developer](https://aws.amazon.com/q/developer/)

Generative AI-powered conversational assistant from AWS designed to enhance developer productivity across the entire software development lifecycle.

## Resources
https://github.com/nirgluzman/amazon-q-developer.git <br>
https://github.com/alexhddev/q_dev_resources

## Slash commands
- `/dev` - Generate code, create features, or build functionality.
- `/test` - Generate unit tests for your code.
- `/doc` - Generate documentation for your code.
- `/review` - Review code for issues, security vulnerabilities, and best practices.
- `/help` - Display help information about using Amazon Q Developer.

**Note:** Some commands only appear when relevant.

## [Prompt Library](https://docs.aws.amazon.com/amazonq/latest/qdeveloper-ug/context-prompt-library.html)
We can define a library of prompts that we can use when chatting with Amazon Q in the IDE. <br>
By storing these prompts in our library, we can easily insert them into the chat without having to retype the prompt each time. <br>
Prompts are saved in the `~/.aws/amazonq/prompts` folder.

## [Project Rules](https://docs.aws.amazon.com/amazonq/latest/qdeveloper-ug/context-project-rules.html)
We can define a library of project rules that we can use when chatting with Amazon Q in the IDE. <br>
These rules describe coding standards and best practices across our team. <br>
Project rules are defined in Markdown files in the project's `project-root/.amazonq/rules` folder.
