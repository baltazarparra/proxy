export default {
  hero: {
    title: 'Guia prático',
    subtitle: 'para programar com agentes.',
    tabLabel: 'prompt para começar',
    prompt:
      'Leia o conteúdo de https://baltazarparra.github.io/proxy/llms.txt e siga as instruções para me guiar na criação de um novo projeto de software.',
    copiedLabel: 'Copiado!',
  },

  agents: {
    title: 'Duas formas de trabalhar com agentes',
    body: 'Agentes vêm em dois formatos: IDE ou terminal. Vale saber a diferença antes de escolher.',
    categories: [
      {
        name: 'Agentes via IDE',
        description:
          'Funcionam no editor com interface visual. Você escreve, pede mudanças, vê na hora. Bem mais fácil pra quem tá começando.',
        tools: [
          {
            name: 'Cursor',
            description:
              'IDE baseada no VS Code. Tem agente integrado e suporta vários modelos. Diff, chat, edição inline — tudo no mesmo lugar.',
          },
          {
            name: 'Trae',
            description:
              'IDE da ByteDance com agente embutido. Interface parecida com o VS Code. Foco em acessibilidade e custo baixo.',
          },
        ],
      },
      {
        name: 'Agentes via CLI',
        description:
          'Rodam no terminal, sem interface gráfica. Conversa por texto, o agente lê, edita e executa no projeto. Mais poder, mas precisa de familiaridade com o terminal.',
        tools: [
          {
            name: 'Claude Code',
            description:
              'Agente de terminal da Anthropic. Usa Claude. Lê, edita e executa no projeto. Assinatura Claude ou API.',
          },
          {
            name: 'Codex',
            description:
              'Agente de terminal da OpenAI. Integrado ao ecossistema ChatGPT. Disponível como CLI, extensão de IDE e app desktop.',
          },
          {
            name: 'OpenCode',
            description:
              'Agente open-source. Suporta Claude, GPT, Gemini, Ollama. Grátis, só precisa das suas chaves de API.',
          },
        ],
      },
    ],
  },

  models: {
    title: 'Os modelos por trás dos agentes',
    body: 'O modelo que você escolhe define o custo, a velocidade e a qualidade. Aqui os 10 mais usados.',
    lastUpdated: 'Março 2026',
    note: 'Preços e specs mudam. Dá uma olhada nos sites oficiais pra valores atualizados.',
    filters: [
      { id: 'all', label: 'Todos' },
      { id: 'anthropic', label: 'Anthropic' },
      { id: 'openai', label: 'OpenAI' },
      { id: 'google', label: 'Google' },
      { id: 'opensource', label: 'Open-source' },
    ],
    items: [
      {
        name: 'Claude Sonnet 4.6',
        family: 'anthropic',
        costLabel: 'Custo médio',
        pricing: '$3 / $15 por 1M tokens',
        description: 'Bom equilíbrio entre velocidade e qualidade pra código.',
        context: '1M tokens',
        strengths: ['Refatoração complexa', 'Edição multi-arquivo', 'Code review detalhado'],
        availableIn: ['Cursor', 'Claude Code', 'OpenCode'],
      },
      {
        name: 'Claude Opus 4.6',
        family: 'anthropic',
        costLabel: 'Premium',
        pricing: '$5 / $25 por 1M tokens',
        description: 'Modelo mais capaz pra tarefas complexas e críticas.',
        context: '1M tokens',
        strengths: ['Arquitetura complexa', 'Debug de bugs difíceis', 'Raciocínio profundo'],
        availableIn: ['Cursor', 'Claude Code'],
      },
      {
        name: 'Claude Haiku 4.5',
        family: 'anthropic',
        costLabel: 'Acessível',
        pricing: '$1 / $5 por 1M tokens',
        description: 'Rápido e barato, com boa qualidade pra código.',
        context: '200K tokens',
        strengths: ['Tarefas rápidas', 'Alto volume de requests', 'Edições simples'],
        availableIn: ['Cursor', 'Claude Code', 'OpenCode'],
      },
      {
        name: 'GPT-5.4',
        family: 'openai',
        costLabel: 'Custo médio',
        pricing: '$2.50 / $15 por 1M tokens',
        description: 'Flagship mais recente da OpenAI, forte em tarefas profissionais.',
        context: '1M tokens',
        strengths: ['Raciocínio avançado', 'Tarefas profissionais', 'Geração de código'],
        availableIn: ['Cursor', 'Codex', 'ChatGPT'],
      },
      {
        name: 'GPT-4.1',
        family: 'openai',
        costLabel: 'Acessível',
        pricing: '$2 / $8 por 1M tokens',
        description: 'Cavalo de batalha confiável, ótimo custo-benefício pra código.',
        context: '1M tokens',
        strengths: ['Custo-benefício', 'Seguir instruções', 'Coding consistente'],
        availableIn: ['Cursor', 'Codex', 'OpenCode'],
      },
      {
        name: 'o3',
        family: 'openai',
        costLabel: 'Custo médio',
        pricing: '$2 / $8 por 1M tokens',
        description: 'Raciocínio avançado. Tokens internos aumentam o custo real.',
        context: '200K tokens',
        strengths: ['Lógica complexa', 'Problemas multi-etapa', 'Raciocínio matemático'],
        availableIn: ['Cursor', 'ChatGPT'],
      },
      {
        name: 'Gemini 3.1 Pro',
        family: 'google',
        costLabel: 'Custo médio',
        pricing: '$2 / $12 por 1M tokens',
        description: 'Mais avançado do Google. Líder em 12 de 18 benchmarks.',
        context: '1M tokens',
        strengths: ['Análise de codebases grandes', 'Raciocínio multimodal', 'Contexto massivo'],
        availableIn: ['Cursor', 'Google AI Studio'],
      },
      {
        name: 'Gemini 3 Flash',
        family: 'google',
        costLabel: 'Acessível',
        pricing: '$0.50 / $3 por 1M tokens',
        description: '3x mais rápido que Gemini 2.5 Pro, bom custo-benefício.',
        context: '1M tokens',
        strengths: ['Velocidade', 'Custo baixo', 'Contexto de 1M tokens'],
        availableIn: ['Cursor', 'Google AI Studio'],
      },
      {
        name: 'DeepSeek R1',
        family: 'opensource',
        costLabel: 'Mais acessível',
        pricing: '$0.55 / $2.19 por 1M tokens',
        description: 'Raciocínio open-source, competitivo com o1 por uma fração do custo.',
        context: '128K tokens',
        strengths: ['Open-source', 'Raciocínio barato', 'Comunidade ativa'],
        availableIn: ['Cursor', 'OpenCode'],
      },
      {
        name: 'Qwen3 Coder',
        family: 'opensource',
        costLabel: 'Mais acessível',
        pricing: '$0.22 / $1 por 1M tokens',
        description: 'O mais barato pra código. Open-weight, roda localmente via Ollama.',
        context: '262K tokens',
        strengths: ['Mais barato do mercado', 'Roda local', 'Especialista em código'],
        availableIn: ['Cursor', 'OpenCode', 'Ollama'],
      },
    ],
  },

  tools: {
    title: 'Como começar',
    body: 'Cada ferramenta tem preço e instalação diferentes. Aqui tá o que cada um cobra e como instalar.',
    lastUpdated: 'Março 2026',
    ide: [
      {
        name: 'Cursor',
        plans: 'Hobby (grátis) · Pro ($20/mês) · Pro+ ($60/mês) · Ultra ($200/mês)',
        install: 'cursor.com, baixe o instalador pro seu sistema',
      },
      {
        name: 'Trae',
        plans: 'Free (grátis) · Pro ($10/mês ou $7.50/mês anual)',
        install: 'trae.ai, baixe o instalador pro seu sistema',
      },
    ],
    cli: [
      {
        name: 'Claude Code',
        plans: 'Free · Pro ($20/mês) · Max 5x ($100/mês) · Max 20x ($200/mês) · ou via API',
        install: 'npm install -g @anthropic-ai/claude-code',
      },
      {
        name: 'Codex',
        plans: 'Incluído no ChatGPT Plus ($20/mês) · Pro ($200/mês) · Business ($25/user/mês)',
        install: 'npm install -g @openai/codex',
      },
      {
        name: 'OpenCode',
        plans: 'Gratuito e open-source (precisa das suas próprias chaves de API)',
        install: 'brew install opencode-ai/tap/opencode',
      },
    ],
    note: 'Preços mudam. Dá uma olhada nos sites oficiais pra valores atualizados.',
  },

  plan: {
    title: 'Comece com um plano, não com um prompt',
    body: 'Antes de abrir o agente, crie um PLAN.md. Ele transforma sua ideia em decisões: o que construir, qual stack, como fazer deploy, o que fica de fora.\n\nUse qualquer LLM (ChatGPT, Claude, Gemini) pra gerar. Explique sua ideia com clareza e peça sugestão de stack. O resultado é um markdown que serve de referência pro projeto todo.',
    steps: [
      'Primeiro descreva sua ideia: o que é, pra quem, quais limites',
      'Peça sugestão de stack pro projeto',
      'Revise até fazer sentido pra você',
      'Salve como PLAN.md na raiz',
    ],
  },

  roadmap: {
    title: 'Deixe o agente revisar e organizar',
    body: 'PLAN pronto? Leva pro agente (Cursor, Claude Code, qualquer um). Pede pra ele revisar sabendo que vai executar.\n\nO agente analisa, quebra em fases e gera o IMPLEMENTATION-ROADMAP.md. Esse arquivo vira o guia. Nada é feito fora dele.',
    steps: [
      'Abre o PLAN.md no agente',
      'Pede revisão considerando que ele vai executar',
      'Pede que ele quebre o trabalho em fases',
      'Pede pra gerar IMPLEMENTATION-ROADMAP.md',
    ],
  },

  execution: {
    title: 'Execute, valide, avance',
    body: 'Com o roadmap pronto, cada fase é uma unidade: o agente planeja, gera PRD, executa. No fim você atualiza o roadmap e anota o que foi feito. Só avança quando validar.\n\nAssim você não acumula dívida técnica e sabe sempre onde o projeto tá.',
    steps: [
      'Pede pro agente criar plano da fase',
      'Pede PRD pra implementação',
      'Executa a fase',
      'No fim, atualiza o roadmap e anota o que foi feito',
      'Valida e passa pra próxima',
    ],
  },

  bootstrap: {
    title: 'Deixe o agente começar por você',
    body: 'Aprendeu o fluxo. Agora a parte boa: não precisa fazer na mão. Cola a URL no agente e ele te guia, faz as perguntas certas e cria os arquivos do projeto.',
    instruction:
      'Copia a URL e cola no chat do agente (Cursor, Claude Code, qualquer um). Ele lê o arquivo e te leva passo a passo.',
    urlLabel: 'Copiar URL',
    copiedLabel: 'Copiado!',
  },

  templates: {
    title: 'Comece com estrutura, não do zero',
    body: 'Templates prontos pra cada etapa. Use como ponto de partida: adapte, faça do seu jeito. Pra você não começar do zero sem saber o que colocar.',
    items: [
      {
        name: 'PLAN',
        description: 'Template pra planejar o projeto',
        url: 'https://github.com/baltazarparra/proxy/blob/main/templates/PLAN-TEMPLATE.md',
      },
      {
        name: 'ROADMAP',
        description: 'Template de roadmap de implementação',
        url: 'https://github.com/baltazarparra/proxy/blob/main/templates/ROADMAP-TEMPLATE.md',
      },
      {
        name: 'PRD',
        description: 'Template de requisitos de produto',
        url: 'https://github.com/baltazarparra/proxy/blob/main/templates/PRD-TEMPLATE.md',
      },
      {
        name: 'Rules',
        description: 'Template de regras do agente',
        url: 'https://github.com/baltazarparra/proxy/blob/main/templates/RULES-TEMPLATE.md',
      },
      {
        name: 'Skills',
        description: 'Template de skills reutilizáveis',
        url: 'https://github.com/baltazarparra/proxy/blob/main/templates/SKILLS-TEMPLATE.md',
      },
    ],
  },

  glossary: {
    title: 'Glossário AI Native',
    body: 'Os 10 termos que você vai ouvir o tempo todo. Definições diretas.',
    terms: [
      {
        term: 'LLM',
        definition:
          'O "cérebro" da IA. Um modelo gigante treinado com texto da internet inteira. Gera código, texto e, às vezes, inventa coisa.',
      },
      {
        term: 'Prompt',
        definition: 'Instrução que você manda pra IA. Claro = bom resultado. Vago = surpresa.',
      },
      {
        term: 'Agente de IA',
        definition:
          'Uma IA que não só responde, ela age. Faz o que um dev júnior faria: lê arquivos, edita, roda comando. Só que 24h.',
      },
      {
        term: 'Context Window',
        definition:
          'A "memória de trabalho" da IA. Tudo que ela consegue considerar de uma vez. Acabou a janela, ela esquece o começo da conversa.',
      },
      {
        term: 'Token',
        definition:
          'A unidade de texto que a IA processa. Não é uma palavra exata, é um pedaço dela. Você paga por token, então sim, cada vírgula conta.',
      },
      {
        term: 'Alucinação',
        definition:
          'Quando a IA inventa algo com total confiança. Parece certo, parece lógico, mas é mentira. Sempre confira.',
      },
      {
        term: 'RAG',
        definition:
          'Em vez de inventar, a IA busca informação real primeiro e responde. Tipo colar na prova, mas com fontes.',
      },
      {
        term: 'MCP',
        definition:
          'Padrão que conecta a IA a ferramentas externas (banco, APIs, arquivos). Tipo USB universal pra IA.',
      },
      {
        term: 'Vibe Coding',
        definition:
          'Programar descrevendo o que você quer em linguagem natural e deixar a IA escrever o código. Funciona até quebrar. Aí você precisa de método.',
      },
      {
        term: 'Fine-tuning',
        definition:
          'Treinar um modelo base com seus próprios dados pra ele ficar bom numa tarefa específica. Tipo ensinar um chef generalista a fazer só sushi.',
      },
    ],
  },

  closing: {
    title: 'Estrutura é velocidade.',
    body: 'Bom dev com agentes não começa com prompt. Começa com plano. Ferramenta certa, plano claro, roadmap organizado. Cada passo deixa mais claro o que o agente precisa fazer. Fluxo simples funciona melhor que prompt caótico.',
    cta: 'Ver no GitHub',
  },
}
