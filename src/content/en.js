export default {
  meta: {
    title: 'guia | practical guide to coding with agents',
    description:
      'Read it as a guide or use it with your agent. Tools, models, templates, and a clear flow for PLAN, roadmap, and execution.',
    socialTitle: 'guia | practical guide to coding with agents',
    socialDescription:
      'Bilingual guide for agentic development. Use it as reference or bootstrap a new project with llms.txt.',
  },

  modal: {
    closeLabel: 'Close',
    toolsLabel: 'Tools:',
    contextLabel: 'Context:',
    sourceLabel: 'Source:',
    availableInLabel: 'Available in:',
    strengthsLabel: 'Strengths:',
  },

  hero: {
    title: 'guia — practical guide',
    subtitle: 'to coding with agents.',
    body: 'You can use guia in two ways: read it as reference, or hand the method to your agent and let it guide the build.',
    primaryCtaLabel: 'Browse the guide',
    secondaryCtaLabel: 'Use with agent',
    repoLabel: 'Open repository',
    linksLabel: 'Direct links:',
    tabLabel: 'prompt to get started',
    prompt:
      'Read the contents of https://baltazarparra.github.io/guia/llms.txt and follow the instructions to guide me through creating a new software project.',
    copyLabel: 'Copy',
    copiedLabel: 'Copied!',
  },

  agents: {
    title: 'Two ways to work with agents',
    body: 'Agents come in two flavors: IDE or terminal. Worth knowing the difference before you pick.',
    lastUpdated: 'March 2026',
    note: 'Prices change. Check the official sites for the latest.',
    categories: [
      {
        name: 'IDE Agents 🌐',
        description:
          "They work in the editor with a visual interface. You write, ask for changes, see results right away. Way easier if you're just getting started.",
        modalContent: {
          extendedBody:
            "IDE agents run inside your code editor. You see diffs in real time, chat in a side panel, ask for changes and the agent applies them directly to your files. All visual, all in one place.\n\nIt's the smoothest path if you're just getting started. No terminal knowledge needed, minimal setup. Download, install, connect your account and you're coding.\n\nThe downside: you're tied to that IDE. If you want to switch editors or run the agent in the background without opening a window, that's when CLI comes in.",
          whenToChoose:
            "Choose IDE if you want to get started fast, prefer a visual interface, and don't mind sticking to one tool.",
        },
        tools: [
          {
            name: 'Cursor',
            description:
              'IDE based on VS Code. Has integrated agent and supports several models. Diffs, chat, inline editing — all in one place.',
            plans: 'Hobby (free) · Pro ($20/mo) · Pro+ ($60/mo) · Ultra ($200/mo)',
            install: 'cursor.com, download the installer for your system',
            installUrl: 'https://cursor.com',
          },
          {
            name: 'Trae',
            description:
              'ByteDance IDE with a built-in agent. Interface similar to VS Code. Focused on accessibility and low cost.',
            plans: 'Free · Pro ($10/mo or $90/year)',
            install: 'trae.ai, download the installer for your system',
            installUrl: 'https://trae.ai',
          },
        ],
      },
      {
        name: 'CLI Agents 🌐',
        description:
          "Run in the terminal, no GUI. You talk through text, it reads, edits, runs commands. More power, but you'll need to be comfortable with the terminal.",
        modalContent: {
          extendedBody:
            "CLI agents run in the terminal. You talk through text, the agent reads your project, edits files, and runs commands. No GUI, no visual diff — just prompt and response.\n\nIt looks harder, and it is. But if you're comfortable with the terminal, you gain flexibility: run anywhere, automate via scripts, fit into your workflow. And many CLI agents are cheaper or even free, as long as you have API keys.\n\nThe learning curve is steeper. Worth it if you already live in the terminal or want full control over where and how the agent runs.",
          whenToChoose:
            "Choose CLI if you're already comfortable with the terminal, want more control, or prefer paying only for API keys instead of an IDE subscription.",
        },
        tools: [
          {
            name: 'Claude Code',
            description:
              "Anthropic's terminal agent. Uses Claude. Reads, edits, runs commands. Claude subscription or API.",
            plans: 'Free · Pro ($20/mo) · Max 5x ($100/mo) · Max 20x ($200/mo) · or via API',
            install: 'npm install -g @anthropic-ai/claude-code',
            installUrl: 'https://claude.ai/code',
          },
          {
            name: 'Codex',
            description:
              "OpenAI's terminal agent. Integrated into the ChatGPT ecosystem. Available as CLI, IDE extension, and desktop app.",
            plans: 'Included in ChatGPT Plus ($20/mo) · Pro ($200/mo) · Business ($30/user/mo)',
            install: 'npm install -g @openai/codex',
            installUrl: 'https://openai.com/codex',
          },
          {
            name: 'OpenCode',
            description:
              'Open-source agent. Supports Claude, GPT, Gemini, Ollama. Free, you just need your own API keys.',
            plans: 'Free and open-source (you just need your own API keys)',
            install: 'npm install -g opencode-ai or brew install anomalyco/tap/opencode',
            installUrl: 'https://opencode.ai',
          },
        ],
      },
    ],
  },

  modes: {
    title: 'The 3 agent modes',
    body: 'Inside the agent panel you pick the mode: Agent, Plan, or Ask. Each does something different. Knowing which to use saves time and avoids surprises.',
    whenToUseLabel: 'When to use:',
    items: [
      {
        id: 'agent',
        name: 'Agent',
        summary:
          'Executes. Reads the codebase, edits files, runs terminal, fixes errors. The default mode for building features, refactoring, and debugging.',
        extendedBody:
          'Agent searches the project, edits multiple files, and runs commands on its own. You give the task in plain language and it decides what to read, what to change, and how to validate. It can delegate to subagents for research, shell, or browser. Use for most tasks.',
        whenToUse: ['New features', 'Refactoring', 'Bug fixes', 'Tests', 'Terminal commands'],
      },
      {
        id: 'plan',
        name: 'Plan',
        summary:
          'Plans before coding. Researches the codebase, asks questions, generates an editable plan. You approve and then it implements.',
        extendedBody:
          'Plan mode generates a detailed plan before writing any code. The agent explores the project, may ask for clarifications, and opens the plan as a virtual file for you to edit. When you are happy, click Build and it starts implementing. Ideal when scope is large or there are multiple valid approaches.',
        whenToUse: [
          'Architectural decisions',
          'Unclear requirements',
          'Tasks touching many files',
          'Complex features with multiple solutions',
        ],
      },
      {
        id: 'ask',
        name: 'Ask',
        summary:
          'Answers only. Read-only mode. Explains code, explores architecture, answers questions — without changing anything.',
        extendedBody:
          'Ask mode is read-only. The agent answers questions about the project without making changes. Use it to understand relationships between modules, find configurations, explain functions or flows. If the answer leads to changes, switch to Agent.',
        whenToUse: [
          '"Explain the relationship between these modules"',
          '"Where is the database config?"',
          '"How does the auth flow work?"',
        ],
      },
    ],
  },

  models: {
    title: 'The models behind the agents',
    body: 'The model you pick defines cost, speed, and quality. Here are the 12 most used today.',
    lastUpdated: 'March 2026',
    note: 'Prices and specs change. Check the official sites for the latest.',
    filters: [
      { id: 'all', label: 'All' },
      { id: 'anthropic', label: 'Anthropic' },
      { id: 'openai', label: 'OpenAI' },
      { id: 'google', label: 'Google' },
      { id: 'opensource', label: 'Open-source' },
      { id: 'cursor', label: 'Cursor' },
    ],
    items: [
      {
        name: 'Claude Sonnet 4.6',
        family: 'anthropic',
        costLabel: 'Mid-range',
        pricing: '$3 / $15 per 1M tokens',
        description: 'Good balance of speed and quality for code.',
        context: '1M tokens',
        strengths: ['Complex refactoring', 'Multi-file editing', 'Detailed code review'],
        availableIn: ['Cursor', 'Claude Code', 'OpenCode'],
        modalContent: {
          extendedDescription:
            "Anthropic's sweet spot. Not the cheapest or the priciest, but delivers well on almost everything. If you're not sure which to pick, start here.",
        },
      },
      {
        name: 'Claude Opus 4.6',
        family: 'anthropic',
        costLabel: 'Premium',
        pricing: '$5 / $25 per 1M tokens',
        description: 'Most capable model for complex and critical tasks.',
        context: '1M tokens',
        strengths: ['Complex architecture', 'Hard bug debugging', 'Deep reasoning'],
        availableIn: ['Cursor', 'Claude Code'],
        modalContent: {
          extendedDescription:
            "When the problem is hard and cost doesn't matter. Architecture, tricky debugging, decisions that need deep reasoning.",
        },
      },
      {
        name: 'Claude Haiku 4.5',
        family: 'anthropic',
        costLabel: 'Affordable',
        pricing: '$1 / $5 per 1M tokens',
        description: 'Fast and cheap, with solid coding quality.',
        context: '200K tokens',
        strengths: ['Quick tasks', 'High request volume', 'Simple edits'],
        availableIn: ['Cursor', 'Claude Code', 'OpenCode'],
      },
      {
        name: 'Composer 1',
        family: 'cursor',
        costLabel: 'Affordable',
        pricing: '$1.25 / $10 per 1M tokens',
        description: "Cursor's first agentic model. Fast, but 1.5 is recommended.",
        context: '200K tokens',
        strengths: ['Speed', 'Interactive coding', 'Tool use'],
        availableIn: ['Cursor'],
      },
      {
        name: 'Composer 1.5',
        family: 'cursor',
        costLabel: 'Mid-range',
        pricing: '$3.50 / $17.50 per 1M tokens',
        description:
          "Cursor's agentic model. Between Sonnet and Opus in capability, tuned for interactive coding.",
        context: '1M tokens',
        strengths: ['Multi-file editing', 'Terminal and tools', 'Fast agentic sessions'],
        availableIn: ['Cursor'],
        modalContent: {
          extendedDescription:
            'Built for Cursor. Tuned for agentic sessions: edits multiple files, uses terminal and tools, responds fast. Cursor only.',
        },
      },
      {
        name: 'GPT-5.4',
        family: 'openai',
        costLabel: 'Mid-range',
        pricing: '$2.50 / $15 per 1M tokens',
        description: "OpenAI's latest flagship, strong at professional tasks.",
        context: '1M tokens',
        strengths: ['Advanced reasoning', 'Professional tasks', 'Code generation'],
        availableIn: ['Cursor', 'Codex', 'ChatGPT'],
        modalContent: {
          extendedDescription:
            "OpenAI's most capable. Strong at professional tasks and complex code. In Codex and Cursor you pick this model when you need top results.",
        },
      },
      {
        name: 'GPT-4.1',
        family: 'openai',
        costLabel: 'Affordable',
        pricing: '$2 / $8 per 1M tokens',
        description: 'Reliable workhorse, great cost-performance for code.',
        context: '1M tokens',
        strengths: ['Cost-effective', 'Instruction following', 'Consistent coding'],
        availableIn: ['Cursor', 'Codex', 'OpenCode'],
      },
      {
        name: 'o3',
        family: 'openai',
        costLabel: 'Mid-range',
        pricing: '$2 / $8 per 1M tokens',
        description: 'Advanced reasoning. Internal tokens increase real cost.',
        context: '200K tokens',
        strengths: ['Complex logic', 'Multi-step problems', 'Mathematical reasoning'],
        availableIn: ['Cursor', 'ChatGPT'],
      },
      {
        name: 'Gemini 3.1 Pro',
        family: 'google',
        costLabel: 'Mid-range',
        pricing: '$2 / $12 per 1M tokens',
        description: "Google's most advanced. Leads 12 of 18 benchmarks.",
        context: '1M tokens',
        strengths: ['Large codebase analysis', 'Multimodal reasoning', 'Massive context'],
        availableIn: ['Cursor', 'Google AI Studio'],
      },
      {
        name: 'Gemini 3 Flash',
        family: 'google',
        costLabel: 'Affordable',
        pricing: '$0.50 / $3 per 1M tokens',
        description: '3x faster than Gemini 2.5 Pro, good value for the price.',
        context: '1M tokens',
        strengths: ['Speed', 'Low cost', '1M token context'],
        availableIn: ['Cursor', 'Google AI Studio'],
      },
      {
        name: 'DeepSeek R1',
        family: 'opensource',
        costLabel: 'Most affordable',
        pricing: '$0.55 / $2.19 per 1M tokens',
        description: 'Open-source reasoning, competitive with o1 at a fraction of the cost.',
        context: '128K tokens',
        strengths: ['Open-source', 'Cheap reasoning', 'Active community'],
        availableIn: ['Cursor', 'OpenCode'],
        modalContent: {
          extendedDescription:
            "Open-source reasoning at a fraction of the cost. Competitive with OpenAI's o1. Active community, worth trying.",
        },
      },
      {
        name: 'Qwen3 Coder',
        family: 'opensource',
        costLabel: 'Most affordable',
        pricing: '$0.22 / $1 per 1M tokens',
        description: 'Cheapest coding specialist. Open-weight, runs locally via Ollama.',
        context: '262K tokens',
        strengths: ['Cheapest on the market', 'Runs locally', 'Code specialist'],
        availableIn: ['Cursor', 'OpenCode', 'Ollama'],
        modalContent: {
          extendedDescription:
            'Cheapest on the market. Runs locally via Ollama, so zero API cost if you have a GPU. Code specialist.',
        },
      },
    ],
  },

  plan: {
    title: 'Start with a plan, not a prompt',
    body: "Before opening the agent, create a PLAN.md. It turns your idea into decisions: what to build, which stack, how to deploy, what's out of scope.\n\nJumping straight to the prompt is tempting, but without a plan you'll spend your time course-correcting the agent. Use any LLM (ChatGPT, Claude, Gemini) to generate the draft: explain your idea clearly, ask for a stack suggestion. The result is a markdown file that serves as reference for the whole project.",
    steps: [
      'Describe your idea: what it is, who it is for, what problem it solves',
      'Define limits: what is in scope and what stays out',
      'Use any LLM (ChatGPT, Claude, Gemini) to generate a draft',
      'Ask for a stack suggestion aligned with the project and deployment',
      'Review the text until it makes sense to you',
      'Adjust whatever does not fit',
      'Save as PLAN.md at the project root',
    ],
  },

  roadmap: {
    title: 'Let the agent review and organize',
    body: "PLAN ready? Take it to your agent (Cursor, Claude Code, whatever). Ask it to review knowing it'll be the one executing.\n\nThat review isn't cosmetic: it's operational. The agent analyzes, identifies dependencies, breaks into phases, and generates IMPLEMENTATION-ROADMAP.md. That file becomes the guide. Nothing gets built outside of it.",
    steps: [
      'Open PLAN.md in your agent (Cursor, Claude Code, whatever)',
      'Ask for a review considering it will execute',
      'Ask it to identify dependencies between parts of the work',
      'Ask it to break the work into development phases',
      'Ask for atomic tasks with clear completion criteria',
      'Review the generated roadmap and adjust as needed',
      'Save as IMPLEMENTATION-ROADMAP.md — nothing gets built outside of it',
    ],
  },

  execution: {
    title: 'Execute, validate, advance',
    body: "With the roadmap set, each phase is a unit: the agent plans, generates a PRD, executes. At the end you update the roadmap and note what got done.\n\nValidation is the brake. It's not just running tests: it's checking that the product does what the plan said it would. Only advance when you've validated. That way you don't pile up technical debt and you always know where the project stands.",
    steps: [
      'Pick the current phase from the roadmap',
      'Ask the agent for an execution plan for that phase',
      'Ask for a PRD for the implementation',
      'Execute the phase tasks',
      'Run tests and validate what was done',
      'Update the roadmap: mark completed tasks',
      'Only advance to the next phase after validating',
      'Repeat the cycle until the project is done',
    ],
  },

  bootstrap: {
    title: 'Pick the right entrypoint',
    body: 'You can paste the home URL into the agent, but there are also safer shortcuts when you want it to follow the method without depending on the interface.',
    instruction:
      'Home for general context. llms.txt for guided bootstrap. start-here.md for agents that do not render the SPA reliably.',
    urlLabel: 'Copy URL',
    openLabel: 'Open',
    copiedLabel: 'Copied!',
    agentIndexLabel: 'Index for tools',
    agentIndexUrl: 'https://baltazarparra.github.io/guia/agent-index.json',
    assets: [
      {
        name: 'Home',
        description:
          'Best for humans who want the big picture and for agents that can navigate the full page.',
        url: 'https://baltazarparra.github.io/guia/',
      },
      {
        name: 'llms.txt',
        description:
          'Best for starting a new project. The agent interviews the user, suggests structure, and creates the base files.',
        url: 'https://baltazarparra.github.io/guia/llms.txt',
      },
      {
        name: 'start-here.md',
        description:
          'Static summary with essential links. Best when the agent does not render JavaScript or needs a quick index.',
        url: 'https://baltazarparra.github.io/guia/start-here.md',
      },
    ],
  },

  templates: {
    title: 'Start with structure, not from scratch',
    body: "Ready-made templates for each stage. Use as a starting point: adapt, make them yours. So you don't start from scratch not knowing what to put in.",
    items: [
      {
        name: 'PLAN',
        description: 'Template to plan your project',
        url: 'https://github.com/baltazarparra/guia/blob/main/templates/PLAN-TEMPLATE.md',
      },
      {
        name: 'ROADMAP',
        description: 'Implementation roadmap template',
        url: 'https://github.com/baltazarparra/guia/blob/main/templates/ROADMAP-TEMPLATE.md',
      },
      {
        name: 'PRD',
        description: 'Product requirements template',
        url: 'https://github.com/baltazarparra/guia/blob/main/templates/PRD-TEMPLATE.md',
      },
      {
        name: 'Rules',
        description: 'Template for agent rules',
        url: 'https://github.com/baltazarparra/guia/blob/main/templates/RULES-TEMPLATE.md',
      },
      {
        name: 'Skills',
        description: 'Template for reusable agent skills',
        url: 'https://github.com/baltazarparra/guia/blob/main/templates/SKILLS-TEMPLATE.md',
      },
    ],
  },

  glossary: {
    title: 'AI Native Glossary',
    body: "The 10 terms you'll hear all the time. Straight definitions.",
    terms: [
      {
        term: 'Model / LLM',
        definition:
          'The "brain" of AI. A massive model trained on the entire internet\'s text. Generates code, text, and sometimes makes stuff up.',
        modalContent: {
          extendedBody:
            'Large Language Model (LLM) is a deep-learning model trained on vast amounts of text. It uses billions of parameters and works as a general-purpose sequence model: generates, summarizes, translates, and reasons over text.\n\nIt works as a statistical prediction machine, predicting the next word in a sequence. The most capable ones are GPTs that power modern chatbots. They understand language at scale but inherit inaccuracies and biases from training data.',
          sourceName: 'IBM',
          sourceUrl: 'https://www.ibm.com/topics/large-language-models',
        },
      },
      {
        term: 'Prompt',
        definition: 'The instruction you send to the AI. Clear = good output. Vague = surprises.',
        modalContent: {
          extendedBody:
            "Prompt engineering is the process of designing and optimizing input instructions to guide the model's responses. It's writing effective instructions so the model consistently generates content that meets your requirements.\n\nBecause output is non-deterministic, it requires a mix of art and science. Best practices: be clear and specific, provide enough context, use examples, separate instructions from context with delimiters, specify desired format and style.",
          sourceName: 'OpenAI',
          sourceUrl: 'https://platform.openai.com/docs/guides/prompt-engineering',
        },
      },
      {
        term: 'Code Agent',
        definition:
          "An AI that doesn't just answer, it acts. Does what a junior dev would: reads files, edits, runs commands. Just 24/7.",
        modalContent: {
          extendedBody:
            'A code agent is an autonomous or semi-autonomous system powered by LLMs that plans, generates, executes, and verifies code with minimal human intervention. Unlike autocomplete, which only suggests, the agent reasons about objectives and acts independently.\n\nIt operates in a loop: receives prompt and codebase context, decomposes tasks into steps, executes tools (compiler, tests, linter), reflects on errors and refines. Works as a capable collaborator, not a passive assistant.',
          sourceName: 'Wikipedia',
          sourceUrl: 'https://en.wikipedia.org/wiki/Agentic_coding',
        },
      },
      {
        term: 'Context Window',
        definition:
          'The AI\'s "working memory." Everything it can consider at once. Once the window\'s full, it forgets the start of the conversation.',
        modalContent: {
          extendedBody:
            'Context window is the maximum amount of text, in tokens, that the model can process and "remember" at once. It functions as working memory, like human short-term memory.\n\nIt defines the boundaries within which the AI stays effective. Information outside the window is not accessible. When text exceeds the limit, it must be truncated or summarized, which can cause incomplete or inaccurate output. Modern models reach context windows of 1 million tokens.',
          sourceName: 'IBM',
          sourceUrl: 'https://www.ibm.com/think/topics/context-window',
        },
      },
      {
        term: 'Token',
        definition:
          'The unit of text the AI processes. Not exactly a word, more like a piece of one. You pay per token, so yes, every comma counts.',
        modalContent: {
          extendedBody:
            'Token is the fundamental unit that makes up the context window. It can be a character, part of a word, a whole word, or even a short phrase. Tokenization breaks text into manageable units using algorithms like WordPiece or Byte Pair Encoding.\n\nThat\'s how the AI "sees" text. You pay per token in many APIs, so longer text costs more. In English, a word usually becomes 1 to 2 tokens.',
          sourceName: 'IBM',
          sourceUrl: 'https://www.ibm.com/think/topics/context-window',
        },
      },
      {
        term: 'Hallucination',
        definition:
          "When the AI makes stuff up with total confidence. Looks right, sounds logical, but it's completely wrong. Always double-check.",
        modalContent: {
          extendedBody:
            'AI hallucination is a response that contains false or misleading information presented as fact. Also called confabulation or bullshitting in AI contexts.\n\nIt happens when the model produces factually incorrect or nonsensical output that sounds plausible enough to be hard to spot. Common causes: flawed training data, overfitting, training incentives that reward guessing instead of acknowledging uncertainty. Always verify facts and generated code.',
          sourceName: 'IBM',
          sourceUrl: 'https://www.ibm.com/think/topics/ai-hallucinations',
        },
      },
      {
        term: 'RAG',
        definition:
          'Instead of making stuff up, the AI looks up real info first, then answers. Like cheating on a test, but with sources.',
        modalContent: {
          extendedBody:
            "Retrieval-Augmented Generation (RAG) is a technique that lets the LLM retrieve and incorporate information from external sources before generating a response. Instead of relying only on static training data, the AI accesses current, domain-specific information.\n\nIt works by first retrieving relevant chunks from databases or documents, then using that to guide generation. Reduces hallucinations, allows citing sources, overcomes the model's knowledge cutoff, and avoids retraining with new data.",
          sourceName: 'IBM',
          sourceUrl: 'https://www.ibm.com/think/topics/retrieval-augmented-generation',
        },
      },
      {
        term: 'MCP',
        definition:
          'A standard that connects AI to external tools (databases, APIs, files). Like a universal USB adapter for AI.',
        modalContent: {
          extendedBody:
            "Model Context Protocol (MCP) is an open standard from Anthropic that connects AI assistants to external data sources and tools securely. It's a universal protocol for integrating LLMs with repositories, business tools, and development environments.\n\nIt solves fragmentation: before, each developer built custom connectors. Now a single standardized protocol. Uses a client-server model with JSON-RPC 2.0. Servers offer tools, prompts, and resources. Claude Desktop, Zed, Replit, and others already integrate.",
          sourceName: 'Anthropic',
          sourceUrl: 'https://www.anthropic.com/news/model-context-protocol',
        },
      },
      {
        term: 'Vibe Coding',
        definition:
          'Programming by describing what you want in plain language and letting the AI write the code. Works great until it breaks. Then you need a method.',
        modalContent: {
          extendedBody:
            'Vibe coding is programming by describing in plain language what you want to build and letting AI tools implement it. The "vibe" is capturing the essence of what you want without writing code manually.\n\nTypical flow: describe ("create a todo app with dark mode and drag-and-drop"), AI generates code, you test and iterate with new prompts. Critics point to lack of accountability, security vulnerabilities, and bugs in generated code. The term was coined by Andrej Karpathy in 2025.',
          sourceName: 'Wikipedia',
          sourceUrl: 'https://en.wikipedia.org/wiki/Vibe_coding',
        },
      },
      {
        term: 'Fine-tuning',
        definition:
          'Training a base model on your own data so it gets good at a specific task. Like teaching a generalist chef to only make sushi.',
        modalContent: {
          extendedBody:
            "Fine-tuning is adapting a pre-trained model to a different or more specific task by training it on task-specific data. It's a form of transfer learning that reuses knowledge from the original training.\n\nIt can update all parameters or only a subset (frozen vs unfrozen layers). Full fine-tuning usually yields better results but is more expensive. Techniques like LoRA allow fine-tuning models with billions of parameters using only millions of additional parameters.",
          sourceName: 'OpenAI',
          sourceUrl: 'https://platform.openai.com/docs/guides/fine-tuning',
        },
      },
    ],
  },

  dip: {
    headline: 'Need a more complete workflow for developing larger tasks?',
    cta: 'Learn about DIP',
  },

  closing: {
    title: 'Structure is speed.',
    body: "Good agent development doesn't start with a prompt. It starts with a plan. Right tool, clear plan, organized roadmap. Each step makes it clearer what the agent should do. Simple flow works better than chaotic prompts.",
    cta: 'View on GitHub',
  },

  footer: {
    bibliographyTitle: 'Bibliography',
  },
}
