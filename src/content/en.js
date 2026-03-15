export default {
  hero: {
    title: 'Practical guide',
    subtitle: 'to coding with agents.',
    tabLabel: 'prompt to get started',
    prompt:
      'Read the contents of https://baltazarparra.github.io/proxy/llms.txt and follow the instructions to guide me through creating a new software project.',
    copiedLabel: 'Copied!',
  },

  agents: {
    title: 'Two ways to work with agents',
    body: 'Agents come in two flavors: IDE or terminal. Worth knowing the difference before you pick.',
    categories: [
      {
        name: 'IDE Agents',
        description:
          "They work in the editor with a visual interface. You write, ask for changes, see results right away. Way easier if you're just getting started.",
        tools: [
          {
            name: 'Cursor',
            description:
              'IDE based on VS Code. Has integrated agent and supports several models. Diffs, chat, inline editing — all in one place.',
          },
          {
            name: 'Trae',
            description:
              'ByteDance IDE with a built-in agent. Interface similar to VS Code. Focused on accessibility and low cost.',
          },
        ],
      },
      {
        name: 'CLI Agents',
        description:
          "Run in the terminal, no GUI. You talk through text, it reads, edits, runs commands. More power, but you'll need to be comfortable with the terminal.",
        tools: [
          {
            name: 'Claude Code',
            description:
              "Anthropic's terminal agent. Uses Claude. Reads, edits, runs commands. Claude subscription or API.",
          },
          {
            name: 'Codex',
            description:
              "OpenAI's terminal agent. Integrated into the ChatGPT ecosystem. Available as CLI, IDE extension, and desktop app.",
          },
          {
            name: 'OpenCode',
            description:
              'Open-source agent. Supports Claude, GPT, Gemini, Ollama. Free, you just need your own API keys.',
          },
        ],
      },
    ],
  },

  models: {
    title: 'The models behind the agents',
    body: 'The model you pick defines cost, speed, and quality. Here are the 10 most used today.',
    lastUpdated: 'March 2026',
    note: 'Prices and specs change. Check the official sites for the latest.',
    filters: [
      { id: 'all', label: 'All' },
      { id: 'anthropic', label: 'Anthropic' },
      { id: 'openai', label: 'OpenAI' },
      { id: 'google', label: 'Google' },
      { id: 'opensource', label: 'Open-source' },
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
        name: 'GPT-5.4',
        family: 'openai',
        costLabel: 'Mid-range',
        pricing: '$2.50 / $15 per 1M tokens',
        description: "OpenAI's latest flagship, strong at professional tasks.",
        context: '1M tokens',
        strengths: ['Advanced reasoning', 'Professional tasks', 'Code generation'],
        availableIn: ['Cursor', 'Codex', 'ChatGPT'],
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
      },
    ],
  },

  tools: {
    title: 'How to get started',
    body: "Each tool has different pricing and install. Here's what each one costs and how to install.",
    lastUpdated: 'March 2026',
    ide: [
      {
        name: 'Cursor',
        plans: 'Hobby (free) · Pro ($20/mo) · Pro+ ($60/mo) · Ultra ($200/mo)',
        install: 'cursor.com, download the installer for your system',
      },
      {
        name: 'Trae',
        plans: 'Free · Pro ($10/mo or $7.50/mo annual)',
        install: 'trae.ai, download the installer for your system',
      },
    ],
    cli: [
      {
        name: 'Claude Code',
        plans: 'Free · Pro ($20/mo) · Max 5x ($100/mo) · Max 20x ($200/mo) · or via API',
        install: 'npm install -g @anthropic-ai/claude-code',
      },
      {
        name: 'Codex',
        plans: 'Included in ChatGPT Plus ($20/mo) · Pro ($200/mo) · Business ($25/user/mo)',
        install: 'npm install -g @openai/codex',
      },
      {
        name: 'OpenCode',
        plans: 'Free and open-source (you just need your own API keys)',
        install: 'brew install opencode-ai/tap/opencode',
      },
    ],
    note: 'Prices change. Check the official sites for the latest.',
  },

  plan: {
    title: 'Start with a plan, not a prompt',
    body: "Before opening the agent, create a PLAN.md. It turns your idea into decisions: what to build, which stack, how to deploy, what's out of scope.\n\nUse any LLM (ChatGPT, Claude, Gemini) to generate it. Explain your idea clearly and ask for a stack suggestion. The result is a markdown file that everyone on the project can use as reference.",
    steps: [
      'First describe your idea: what it is, who it is for, what the limits are',
      'Ask for a stack suggestion for the project',
      'Review until it makes sense to you',
      'Save as PLAN.md at the project root',
    ],
  },

  roadmap: {
    title: 'Let the agent review and organize',
    body: "PLAN ready? Take it to your agent (Cursor, Claude Code, whatever). Ask it to review knowing it'll be the one executing.\n\nThe agent analyzes, breaks into phases, and generates IMPLEMENTATION-ROADMAP.md. That file becomes the guide. Nothing gets built outside of it.",
    steps: [
      'Open PLAN.md in your agent',
      'Ask for a review considering it will execute',
      'Ask it to break the work into phases',
      'Ask it to generate IMPLEMENTATION-ROADMAP.md',
    ],
  },

  execution: {
    title: 'Execute, validate, advance',
    body: "With the roadmap set, each phase is a unit: the agent plans, generates a PRD, executes. At the end you update the roadmap and note what got done. Only advance when you've validated.\n\nThat way you don't pile up technical debt and you always know where the project stands.",
    steps: [
      'Ask the agent to create a plan for the phase',
      'Ask for a PRD for the implementation',
      'Execute the phase',
      'At the end, update the roadmap and note what was done',
      'Validate and move to the next phase',
    ],
  },

  bootstrap: {
    title: 'Let the agent start for you',
    body: "You learned the workflow. Now the good part: you don't have to do it manually. Paste the URL into your agent and it'll guide you, ask the right questions, and create your project files.",
    instruction:
      'Copy the URL and paste it into your agent chat (Cursor, Claude Code, whatever). It reads the file and walks you through step by step.',
    urlLabel: 'Copy URL',
    copiedLabel: 'Copied!',
  },

  templates: {
    title: 'Start with structure, not from scratch',
    body: "Ready-made templates for each stage. Use as a starting point: adapt, make them yours. So you don't start from scratch not knowing what to put in.",
    items: [
      {
        name: 'PLAN',
        description: 'Template to plan your project',
        url: 'https://github.com/baltazarparra/proxy/blob/main/templates/PLAN-TEMPLATE.md',
      },
      {
        name: 'ROADMAP',
        description: 'Implementation roadmap template',
        url: 'https://github.com/baltazarparra/proxy/blob/main/templates/ROADMAP-TEMPLATE.md',
      },
      {
        name: 'PRD',
        description: 'Product requirements template',
        url: 'https://github.com/baltazarparra/proxy/blob/main/templates/PRD-TEMPLATE.md',
      },
      {
        name: 'Rules',
        description: 'Template for agent rules',
        url: 'https://github.com/baltazarparra/proxy/blob/main/templates/RULES-TEMPLATE.md',
      },
      {
        name: 'Skills',
        description: 'Template for reusable agent skills',
        url: 'https://github.com/baltazarparra/proxy/blob/main/templates/SKILLS-TEMPLATE.md',
      },
    ],
  },

  glossary: {
    title: 'AI Native Glossary',
    body: "The 10 terms you'll hear all the time. Straight definitions.",
    terms: [
      {
        term: 'LLM',
        definition:
          'The "brain" of AI. A massive model trained on the entire internet\'s text. Generates code, text, and sometimes makes stuff up.',
      },
      {
        term: 'Prompt',
        definition: 'The instruction you send to the AI. Clear = good output. Vague = surprises.',
      },
      {
        term: 'AI Agent',
        definition:
          "An AI that doesn't just answer, it acts. Does what a junior dev would: reads files, edits, runs commands. Just 24/7.",
      },
      {
        term: 'Context Window',
        definition:
          'The AI\'s "working memory." Everything it can consider at once. Once the window\'s full, it forgets the start of the conversation.',
      },
      {
        term: 'Token',
        definition:
          'The unit of text the AI processes. Not exactly a word, more like a piece of one. You pay per token, so yes, every comma counts.',
      },
      {
        term: 'Hallucination',
        definition:
          "When the AI makes stuff up with total confidence. Looks right, sounds logical, but it's completely wrong. Always double-check.",
      },
      {
        term: 'RAG',
        definition:
          'Instead of making stuff up, the AI looks up real info first, then answers. Like cheating on a test, but with sources.',
      },
      {
        term: 'MCP',
        definition:
          'A standard that connects AI to external tools (databases, APIs, files). Like a universal USB adapter for AI.',
      },
      {
        term: 'Vibe Coding',
        definition:
          'Programming by describing what you want in plain language and letting the AI write the code. Works great until it breaks. Then you need a method.',
      },
      {
        term: 'Fine-tuning',
        definition:
          'Training a base model on your own data so it gets good at a specific task. Like teaching a generalist chef to only make sushi.',
      },
    ],
  },

  closing: {
    title: 'Structure is speed.',
    body: "Good agent development doesn't start with a prompt. It starts with a plan. Right tool, clear plan, organized roadmap. Each step makes it clearer what the agent should do. Simple flow works better than chaotic prompts.",
    cta: 'View on GitHub',
  },
}
