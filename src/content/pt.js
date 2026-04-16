export default {
  meta: {
    title: 'guia | guia prático para programar com agentes',
    description:
      'Leia como guia ou use com seu agente. Ferramentas, modelos, templates e um fluxo claro de PLAN, roadmap e execução.',
    socialTitle: 'guia | guia prático para programar com agentes',
    socialDescription:
      'Guia bilíngue para desenvolvimento com agentes de código. Consulte referências ou bootstrap um projeto com llms.txt.',
  },

  modal: {
    closeLabel: 'Fechar',
    toolsLabel: 'Ferramentas:',
    contextLabel: 'Contexto:',
    sourceLabel: 'Fonte:',
    availableInLabel: 'Disponível em:',
    strengthsLabel: 'Pontos fortes:',
  },

  hero: {
    title: 'Guia prático',
    subtitle: 'para programar com agentes.',
    body: 'Você pode usar o guia de dois jeitos: consultar como referência ou passar o método pro seu agente e deixar ele te conduzir.',
    primaryCtaLabel: 'Consultar o guia',
    secondaryCtaLabel: 'Usar com agente',
    repoLabel: 'Ver repositório',
    linksLabel: 'Atalhos:',
    tabLabel: 'prompt para começar',
    prompt:
      'Leia o conteúdo de https://baltazarparra.github.io/guia/llms.txt e siga as instruções para me guiar na criação de um novo projeto de software.',
    copyLabel: 'Copiar',
    copiedLabel: 'Copiado!',
  },

  agents: {
    title: 'Duas formas de trabalhar com agentes',
    body: 'Agentes vêm em dois formatos: IDE ou terminal. Vale saber a diferença antes de escolher.',
    lastUpdated: 'Março 2026',
    note: 'Preços mudam. Dá uma olhada nos sites oficiais pra valores atualizados.',
    categories: [
      {
        name: 'Agentes via IDE 🌐',
        description:
          'Funcionam no editor com interface visual. Você escreve, pede mudanças, vê na hora. Bem mais fácil pra quem tá começando.',
        modalContent: {
          extendedBody:
            'Agentes via IDE rodam dentro do seu editor de código. Você vê o diff na hora, conversa num chat ao lado, pede mudanças e o agente aplica direto nos arquivos. Tudo visual, tudo no mesmo lugar.\n\nÉ o caminho mais suave pra quem tá começando. Não precisa saber terminal, não precisa configurar muita coisa. Baixa, instala, conecta sua conta e já começa a codar.\n\nA desvantagem: você fica preso àquela IDE. Se quiser trocar de editor ou rodar o agente em background sem abrir janela, aí entra o CLI.',
          whenToChoose:
            'Escolha IDE se você quer começar rápido, prefere interface visual e não liga de ficar numa ferramenta só.',
        },
        tools: [
          {
            name: 'Cursor',
            description:
              'IDE baseada no VS Code. Tem agente integrado e suporta vários modelos. Diff, chat, edição inline — tudo no mesmo lugar.',
            plans: 'Hobby (grátis) · Pro ($20/mês) · Pro+ ($60/mês) · Ultra ($200/mês)',
            install: 'cursor.com, baixe o instalador pro seu sistema',
            installUrl: 'https://cursor.com',
          },
          {
            name: 'Trae',
            description:
              'IDE da ByteDance com agente embutido. Interface parecida com o VS Code. Foco em acessibilidade e custo baixo.',
            plans: 'Free (grátis) · Pro ($10/mês ou $90/ano)',
            install: 'trae.ai, baixe o instalador pro seu sistema',
            installUrl: 'https://trae.ai',
          },
        ],
      },
      {
        name: 'Agentes via CLI 🌐',
        description:
          'Rodam no terminal, sem interface gráfica. Conversa por texto, o agente lê, edita e executa no projeto. Mais poder, mas precisa de familiaridade com o terminal.',
        modalContent: {
          extendedBody:
            'Agentes via CLI rodam no terminal. Você conversa por texto, o agente lê o projeto, edita arquivos e executa comandos. Sem interface gráfica, sem diff visual — só prompt e resposta.\n\nParece mais difícil, e é. Mas quem domina o terminal ganha em flexibilidade: roda em qualquer máquina, automatiza via script, integra com seu fluxo. E muitos agentes CLI são mais baratos ou até grátis, desde que você tenha chaves de API.\n\nA curva é maior. Vale a pena se você já usa terminal no dia a dia ou quer controle total sobre onde e como o agente roda.',
          whenToChoose:
            'Escolha CLI se você já é confortável com terminal, quer mais controle ou prefere pagar só pelas chaves de API em vez de assinatura de IDE.',
        },
        tools: [
          {
            name: 'Claude Code',
            description:
              'Agente de terminal da Anthropic. Usa Claude. Lê, edita e executa no projeto. Assinatura Claude ou API.',
            plans: 'Free · Pro ($20/mês) · Max 5x ($100/mês) · Max 20x ($200/mês) · ou via API',
            install: 'npm install -g @anthropic-ai/claude-code',
            installUrl: 'https://claude.ai/code',
          },
          {
            name: 'Codex',
            description:
              'Agente de terminal da OpenAI. Integrado ao ecossistema ChatGPT. Disponível como CLI, extensão de IDE e app desktop.',
            plans: 'Incluído no ChatGPT Plus ($20/mês) · Pro ($200/mês) · Business ($30/user/mês)',
            install: 'npm install -g @openai/codex',
            installUrl: 'https://openai.com/codex',
          },
          {
            name: 'OpenCode',
            description:
              'Agente open-source. Suporta Claude, GPT, Gemini, Ollama. Grátis, só precisa das suas chaves de API.',
            plans: 'Gratuito e open-source (precisa das suas próprias chaves de API)',
            install: 'npm install -g opencode-ai ou brew install anomalyco/tap/opencode',
            installUrl: 'https://opencode.ai',
          },
        ],
      },
    ],
  },

  modes: {
    title: 'Os 3 modos do agente',
    body: 'Dentro do painel do agente você escolhe o modo: Agent, Plan ou Ask. Cada um faz uma coisa diferente. Saber qual usar economiza tempo e evita surpresa.',
    whenToUseLabel: 'Quando usar:',
    items: [
      {
        id: 'agent',
        name: 'Agent',
        summary:
          'Executa. Lê o codebase, edita arquivos, roda terminal, corrige erros. É o modo padrão pra construir features, refatorar e debugar.',
        extendedBody:
          'O Agent busca no projeto, edita vários arquivos e roda comandos sozinho. Você dá a tarefa em linguagem natural e ele decide o que ler, o que mudar e como validar. Pode delegar a subagentes pra pesquisa, shell ou browser. Use pra maioria das tarefas.',
        whenToUse: [
          'Features novas',
          'Refatoração',
          'Correção de bugs',
          'Testes',
          'Comandos no terminal',
        ],
      },
      {
        id: 'plan',
        name: 'Plan',
        summary:
          'Planeja antes de codar. Pesquisa o codebase, faz perguntas, gera um plano editável. Você aprova e aí ele implementa.',
        extendedBody:
          'O Plan mode gera um plano detalhado antes de escrever código. O agente explora o projeto, pode pedir clarificações e abre o plano como arquivo virtual pra você editar. Quando estiver ok, clica em Build e ele começa a implementar. Ideal quando o escopo é grande ou há várias abordagens possíveis.',
        whenToUse: [
          'Decisões de arquitetura',
          'Requisitos pouco claros',
          'Tarefas que tocam muitos arquivos',
          'Features complexas com múltiplas soluções',
        ],
      },
      {
        id: 'ask',
        name: 'Ask',
        summary:
          'Só responde. Modo somente leitura. Explica código, explora arquitetura, responde perguntas — sem alterar nada.',
        extendedBody:
          'O Ask mode é read-only. O agente responde perguntas sobre o projeto sem fazer alterações. Use pra entender relações entre módulos, encontrar configurações, explicar funções ou fluxos. Se a resposta levar a mudanças, mude pro Agent.',
        whenToUse: [
          '"Explica a relação entre esses módulos"',
          '"Onde está a config do banco?"',
          '"Como funciona o fluxo de auth?"',
        ],
      },
    ],
  },

  models: {
    title: 'Os modelos por trás dos agentes',
    body: 'O modelo que você escolhe define o custo, a velocidade e a qualidade. Aqui vão 12 bons pontos de partida hoje.',
    lastUpdated: 'Abril 2026',
    note: 'Preços, limites e disponibilidade mudam. Dá uma olhada nos sites oficiais pra valores atualizados.',
    filters: [
      { id: 'all', label: 'Todos' },
      { id: 'anthropic', label: 'Anthropic' },
      { id: 'openai', label: 'OpenAI' },
      { id: 'google', label: 'Google' },
      { id: 'cursor', label: 'Cursor' },
      { id: 'deepseek', label: 'DeepSeek' },
      { id: 'qwen', label: 'Qwen' },
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
        sourceName: 'Docs Anthropic',
        sourceUrl: 'https://platform.claude.com/docs/en/about-claude/models/overview',
        modalContent: {
          extendedDescription:
            'O sweet spot da Anthropic. Não é o mais barato nem o mais caro, mas entrega bem em quase tudo. Se você não sabe qual escolher, comece por aqui.',
        },
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
        sourceName: 'Docs Anthropic',
        sourceUrl: 'https://platform.claude.com/docs/en/about-claude/models/overview',
        modalContent: {
          extendedDescription:
            'Quando o problema é difícil e o custo não importa. Arquitetura, debug traiçoeiro, decisões que precisam de raciocínio profundo.',
        },
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
        sourceName: 'Docs Anthropic',
        sourceUrl: 'https://platform.claude.com/docs/en/about-claude/models/overview',
      },
      {
        name: 'Composer 2',
        family: 'cursor',
        costLabel: 'Acessível',
        pricing: '$0.50 / $2.50 por 1M tokens',
        description:
          'Modelo agentic recente do Cursor, feito para edições rápidas e multi-arquivo.',
        context: 'Não publicado',
        strengths: ['Coding interativo', 'Edição multi-arquivo', 'Latência baixa'],
        availableIn: ['Cursor'],
        sourceName: 'Blog Cursor',
        sourceUrl: 'https://cursor.com/blog/composer-2',
        modalContent: {
          extendedDescription:
            'Feito para o fluxo do Cursor. O foco é coding agentic rápido: editar, usar ferramentas, acompanhar o projeto e responder sem travar o ritmo.',
        },
      },
      {
        name: 'GPT-5.4',
        family: 'openai',
        costLabel: 'Custo médio',
        pricing: '$2.50 / $15 por 1M tokens',
        description: 'Flagship mais recente da OpenAI, forte em tarefas profissionais.',
        context: '1.05M tokens',
        strengths: ['Raciocínio avançado', 'Tarefas profissionais', 'Geração de código'],
        availableIn: ['Cursor', 'Codex', 'ChatGPT'],
        sourceName: 'Docs OpenAI',
        sourceUrl: 'https://developers.openai.com/api/docs/models/gpt-5.4',
        modalContent: {
          extendedDescription:
            'O mais capaz da OpenAI. Bom pra tarefas profissionais e código complexo. No Codex e no Cursor você escolhe esse modelo quando precisa de resultado top.',
        },
      },
      {
        name: 'GPT-5.4 mini',
        family: 'openai',
        costLabel: 'Acessível',
        pricing: '$0.75 / $4.50 por 1M tokens',
        description: 'Versão menor do GPT-5.4, boa para código e subagentes com custo menor.',
        context: '400K tokens',
        strengths: ['Subagentes', 'Custo-benefício', 'Coding rápido'],
        availableIn: ['Cursor', 'Codex', 'OpenCode'],
        sourceName: 'Docs OpenAI',
        sourceUrl: 'https://developers.openai.com/api/docs/models/gpt-5.4-mini',
      },
      {
        name: 'GPT-5.4 nano',
        family: 'openai',
        costLabel: 'Mais acessível',
        pricing: '$0.20 / $1.25 por 1M tokens',
        description: 'Menor e mais barato da família GPT-5.4, útil para tarefas simples em volume.',
        context: '400K tokens',
        strengths: ['Classificação', 'Extração de dados', 'Subagentes simples'],
        availableIn: ['Codex', 'OpenAI API', 'OpenCode'],
        sourceName: 'Docs OpenAI',
        sourceUrl: 'https://developers.openai.com/api/docs/models/gpt-5.4-nano',
      },
      {
        name: 'Gemini 3.1 Pro Preview',
        family: 'google',
        costLabel: 'Custo médio',
        pricing: '$2 / $12 até 200K · $4 / $18 acima',
        description: 'Modelo mais forte do Google para raciocínio, multimodal e coding agentic.',
        context: '1M tokens',
        strengths: ['Análise de codebases grandes', 'Raciocínio multimodal', 'Contexto massivo'],
        availableIn: ['Cursor', 'Google AI Studio'],
        sourceName: 'Docs Google AI',
        sourceUrl: 'https://ai.google.dev/gemini-api/docs/gemini-3',
      },
      {
        name: 'Gemini 3 Flash Preview',
        family: 'google',
        costLabel: 'Acessível',
        pricing: '$0.50 / $3 por 1M tokens',
        description: 'Modelo rápido da série Gemini 3, com boa mistura de inteligência e preço.',
        context: '1M tokens',
        strengths: ['Velocidade', 'Custo baixo', 'Contexto de 1M tokens'],
        availableIn: ['Cursor', 'Google AI Studio'],
        sourceName: 'Docs Google AI',
        sourceUrl: 'https://ai.google.dev/gemini-api/docs/pricing',
      },
      {
        name: 'DeepSeek V3.2 Reasoner',
        family: 'deepseek',
        costLabel: 'Mais acessível',
        pricing: '$0.28 / $0.42 por 1M tokens',
        description: 'Modo thinking oficial da API DeepSeek, barato e voltado a agentes.',
        context: '128K tokens',
        strengths: ['Raciocínio barato', 'Tool use', 'Open-weight'],
        availableIn: ['DeepSeek API', 'OpenCode'],
        sourceName: 'Docs DeepSeek',
        sourceUrl: 'https://api-docs.deepseek.com/quick_start/pricing/',
        modalContent: {
          extendedDescription:
            'O nome de API é deepseek-reasoner. Ele corresponde ao DeepSeek-V3.2 em modo thinking e substitui o card antigo baseado em R1.',
        },
      },
      {
        name: 'Qwen3 Coder Next',
        family: 'qwen',
        costLabel: 'Acessível',
        pricing: '$0.30 / $1.50 por 1M tokens até 32K',
        description:
          'Modelo de código recente da Qwen, feito para agentes e desenvolvimento assistido.',
        context: 'até 256K tokens',
        strengths: ['Coding agentic', 'Uso de ferramentas', 'Custo baixo'],
        availableIn: ['Alibaba Model Studio', 'OpenCode'],
        sourceName: 'Alibaba Cloud docs',
        sourceUrl: 'https://www.alibabacloud.com/help/en/model-studio/model-pricing',
        modalContent: {
          extendedDescription:
            'Boa opção quando você quer uma alternativa de código barata fora das famílias OpenAI, Claude e Gemini.',
        },
      },
      {
        name: 'Qwen3 Coder 30B',
        family: 'qwen',
        costLabel: 'Mais acessível',
        pricing: '$0.216 / $0.861 por 1M tokens até 32K',
        description: 'Especialista em código barato, bom para tarefas simples e volume.',
        context: 'até 200K tokens',
        strengths: ['Preço baixo', 'Especialista em código', 'Open-weight'],
        availableIn: ['Alibaba Model Studio', 'OpenCode', 'Ollama'],
        sourceName: 'Alibaba Cloud docs',
        sourceUrl: 'https://www.alibabacloud.com/help/en/model-studio/model-pricing',
        modalContent: {
          extendedDescription:
            'É a opção menor da linha Qwen3 Coder. Vale para automações, edições simples e fluxos em que preço importa mais que capacidade máxima.',
        },
      },
    ],
  },

  plan: {
    title: 'Comece com um plano, não com um prompt',
    body: 'Antes de abrir o agente, crie um PLAN.md. Ele transforma sua ideia em decisões: o que construir, qual stack, como fazer deploy, o que fica de fora.\n\nPular direto pro prompt é tentador, mas sem um plano você rebate bola com o agente o tempo todo. Use qualquer LLM (ChatGPT, Claude, Gemini) pra gerar o rascunho: explique sua ideia com clareza, peça sugestão de stack. O resultado é um markdown que serve de referência pro projeto todo.',
    steps: [
      'Descreva sua ideia: o que é, pra quem, qual problema resolve',
      'Defina limites: o que entra e o que fica de fora',
      'Use qualquer LLM (ChatGPT, Claude, Gemini) pra gerar um rascunho',
      'Peça sugestão de stack alinhada ao projeto e ao deploy',
      'Revise o texto até fazer sentido pra você',
      'Ajuste o que não encaixar',
      'Salve como PLAN.md na raiz do projeto',
    ],
  },

  roadmap: {
    title: 'Deixe o agente revisar e organizar',
    body: 'PLAN pronto? Leva pro agente (Cursor, Claude Code, qualquer um). Pede pra ele revisar sabendo que vai executar.\n\nA revisão dele não é cosmética: é operacional. O agente analisa, identifica dependências, quebra em fases e gera o IMPLEMENTATION-ROADMAP.md. Esse arquivo vira o guia. Nada é feito fora dele.',
    steps: [
      'Abra o PLAN.md no seu agente (Cursor, Claude Code, qualquer um)',
      'Peça uma revisão considerando que ele vai executar',
      'Peça que ele identifique dependências entre partes do trabalho',
      'Peça que quebre o trabalho em fases de desenvolvimento',
      'Peça tarefas atômicas com critério claro de conclusão',
      'Revise o roadmap gerado e ajuste o que precisar',
      'Salve como IMPLEMENTATION-ROADMAP.md — nada é feito fora dele',
    ],
  },

  execution: {
    title: 'Execute, valide, avance',
    body: 'Com o roadmap pronto, cada fase é uma unidade: o agente planeja, gera PRD, executa. No fim você atualiza o roadmap e anota o que foi feito.\n\nA validação é o freio. Não é só rodar testes: é conferir que o produto faz o que o plano previu. Só avança quando validar. Assim você não acumula dívida técnica e sabe sempre onde o projeto tá.',
    steps: [
      'Escolha a fase atual no roadmap',
      'Peça ao agente um plano de execução dessa fase',
      'Peça uma PRD pra implementação',
      'Execute as tarefas da fase',
      'Rode os testes e valide o que foi feito',
      'Atualize o roadmap: marque tarefas concluídas',
      'Só avance pra próxima fase depois de validar',
      'Repita o ciclo até o fim do projeto',
    ],
  },

  bootstrap: {
    title: 'Escolha a porta de entrada certa',
    body: 'Dá pra colar a home no agente, mas também existem atalhos mais seguros quando você quer que ele siga o método sem depender da interface.',
    instruction:
      'Home pra contexto geral. llms.txt pra bootstrap guiado. start-here.md pra agentes que não renderizam a SPA direito.',
    urlLabel: 'Copiar URL',
    openLabel: 'Abrir',
    copiedLabel: 'Copiado!',
    agentIndexLabel: 'Índice para ferramentas',
    agentIndexUrl: 'https://baltazarparra.github.io/guia/agent-index.json',
    assets: [
      {
        name: 'Home',
        description:
          'Melhor pra quem quer entender o projeto rápido e pra agentes que conseguem navegar a página completa.',
        url: 'https://baltazarparra.github.io/guia/',
      },
      {
        name: 'llms.txt',
        description:
          'Melhor pra começar um projeto novo. O agente entrevista, propõe estrutura e cria os arquivos base.',
        url: 'https://baltazarparra.github.io/guia/llms.txt',
      },
      {
        name: 'start-here.md',
        description:
          'Resumo estático com links essenciais. Melhor quando o agente não renderiza JavaScript ou precisa de um índice rápido.',
        url: 'https://baltazarparra.github.io/guia/start-here.md',
      },
    ],
  },

  templates: {
    title: 'Comece com estrutura, não do zero',
    body: 'Templates prontos pra cada etapa. Use como ponto de partida: adapte, faça do seu jeito. Pra você não começar do zero sem saber o que colocar.',
    items: [
      {
        name: 'PLAN',
        description: 'Template pra planejar o projeto',
        url: 'https://github.com/baltazarparra/guia/blob/main/templates/PLAN-TEMPLATE.md',
      },
      {
        name: 'ROADMAP',
        description: 'Template de roadmap de implementação',
        url: 'https://github.com/baltazarparra/guia/blob/main/templates/ROADMAP-TEMPLATE.md',
      },
      {
        name: 'PRD',
        description: 'Template de requisitos de produto',
        url: 'https://github.com/baltazarparra/guia/blob/main/templates/PRD-TEMPLATE.md',
      },
      {
        name: 'Rules',
        description: 'Template de regras do agente',
        url: 'https://github.com/baltazarparra/guia/blob/main/templates/RULES-TEMPLATE.md',
      },
      {
        name: 'Skills',
        description: 'Template de skills reutilizáveis',
        url: 'https://github.com/baltazarparra/guia/blob/main/templates/SKILLS-TEMPLATE.md',
      },
    ],
  },

  glossary: {
    title: 'Glossário AI Native',
    body: 'Os 10 termos que você vai ouvir o tempo todo. Definições diretas.',
    terms: [
      {
        term: 'Modelo / LLM',
        definition:
          'O "cérebro" da IA. Um modelo gigante treinado com texto da internet inteira. Gera código, texto e, às vezes, inventa coisa.',
        modalContent: {
          extendedBody:
            'Large Language Model (LLM) é um modelo de deep learning treinado em enormes volumes de texto. Usa bilhões de parâmetros e funciona como modelo de sequência de propósito geral: gera, resume, traduz e raciocina sobre texto.\n\nFunciona como máquina de predição estatística, prevendo a próxima palavra na sequência. Os mais capazes são os GPTs que alimentam os chatbots atuais. Entendem linguagem em escala, mas herdam imprecisões e vieses dos dados de treino.',
          sourceName: 'IBM',
          sourceUrl: 'https://www.ibm.com/topics/large-language-models',
        },
      },
      {
        term: 'Prompt',
        definition: 'Instrução que você manda pra IA. Claro = bom resultado. Vago = surpresa.',
        modalContent: {
          extendedBody:
            'Prompt engineering é o processo de desenhar e otimizar instruções de entrada pra guiar as respostas do modelo. É escrever instruções efetivas pra que o modelo gere conteúdo que atenda seus requisitos de forma consistente.\n\nPorque a saída é não determinística, exige mistura de arte e ciência. Boas práticas: ser claro e específico, dar contexto suficiente, usar exemplos, separar instruções do contexto com delimitadores, especificar formato e estilo desejados.',
          sourceName: 'OpenAI',
          sourceUrl: 'https://platform.openai.com/docs/guides/prompt-engineering',
        },
      },
      {
        term: 'Agente de código',
        definition:
          'Uma IA que não só responde, ela age. Faz o que um dev júnior faria: lê arquivos, edita, roda comando. Só que 24h.',
        modalContent: {
          extendedBody:
            'Agente de código é um sistema autônomo ou semi-autônomo baseado em LLMs que planeja, gera, executa e verifica código com pouca intervenção humana. Diferente de autocomplete, que só sugere, o agente raciocina sobre objetivos e age de forma independente.\n\nOpera em loop: recebe prompt e contexto do codebase, decompõe tarefas em passos, executa ferramentas (compilador, testes, linter), reflete sobre erros e refina. Funciona como colaborador capaz, não assistente passivo.',
          sourceName: 'Wikipedia',
          sourceUrl: 'https://en.wikipedia.org/wiki/Agentic_coding',
        },
      },
      {
        term: 'Context Window',
        definition:
          'A "memória de trabalho" da IA. Tudo que ela consegue considerar de uma vez. Acabou a janela, ela esquece o começo da conversa.',
        modalContent: {
          extendedBody:
            'Context window é a quantidade máxima de texto, em tokens, que o modelo consegue processar e "lembrar" de uma vez. Funciona como memória de trabalho, tipo memória de curto prazo humana.\n\nDefine os limites dentro dos quais a IA permanece efetiva. Informação fora da janela não é acessível. Quando o texto excede o limite, precisa truncar ou resumir, o que pode gerar saída incompleta ou imprecisa. Modelos modernos chegam a janelas de 1 milhão de tokens.',
          sourceName: 'IBM',
          sourceUrl: 'https://www.ibm.com/think/topics/context-window',
        },
      },
      {
        term: 'Token',
        definition:
          'A unidade de texto que a IA processa. Não é uma palavra exata, é um pedaço dela. Você paga por token, então sim, cada vírgula conta.',
        modalContent: {
          extendedBody:
            'Token é a unidade fundamental que compõe a context window. Pode ser um caractere, parte de uma palavra, uma palavra inteira ou até uma frase curta. O processo de tokenização quebra o texto em unidades gerenciáveis usando algoritmos como WordPiece ou Byte Pair Encoding.\n\nÉ assim que a IA "vê" o texto. Você paga por token em muitas APIs, então textos mais longos custam mais. Em português, uma palavra costuma virar 1 a 2 tokens.',
          sourceName: 'IBM',
          sourceUrl: 'https://www.ibm.com/think/topics/context-window',
        },
      },
      {
        term: 'Alucinação',
        definition:
          'Quando a IA inventa algo com total confiança. Parece certo, parece lógico, mas é mentira. Sempre confira.',
        modalContent: {
          extendedBody:
            'Alucinação de IA é uma resposta que contém informação falsa ou enganosa apresentada como fato. Também chamada de confabulação ou bullshitting em contexto de IA.\n\nAcontece quando o modelo produz saída factualmente incorreta ou nonsense, mas plausível o suficiente pra ser difícil de identificar. Causas comuns: dados de treino falhos, overfitting, incentivos de treino que recompensam adivinhar em vez de reconhecer incerteza. Sempre confira fatos e código gerado.',
          sourceName: 'IBM',
          sourceUrl: 'https://www.ibm.com/think/topics/ai-hallucinations',
        },
      },
      {
        term: 'RAG',
        definition:
          'Em vez de inventar, a IA busca informação real primeiro e responde. Tipo colar na prova, mas com fontes.',
        modalContent: {
          extendedBody:
            'Retrieval-Augmented Generation (RAG) é uma técnica que faz o LLM buscar e incorporar informação de fontes externas antes de gerar a resposta. Em vez de depender só dos dados de treino estáticos, a IA acessa informação atual e específica do domínio.\n\nFunciona assim: primeiro recupera trechos relevantes de bases de dados ou documentos, depois usa isso pra guiar a geração. Reduz alucinações, permite citar fontes, supera o cutoff de conhecimento do modelo e evita retreinar com dados novos.',
          sourceName: 'IBM',
          sourceUrl: 'https://www.ibm.com/think/topics/retrieval-augmented-generation',
        },
      },
      {
        term: 'MCP',
        definition:
          'Padrão que conecta a IA a ferramentas externas (banco, APIs, arquivos). Tipo USB universal pra IA.',
        modalContent: {
          extendedBody:
            'Model Context Protocol (MCP) é um padrão aberto da Anthropic que conecta assistentes de IA a fontes de dados e ferramentas externas de forma segura. É um protocolo universal pra integrar LLMs com repositórios, ferramentas de negócio e ambientes de desenvolvimento.\n\nResolve a fragmentação: antes cada desenvolvedor construía conectores customizados. Agora um único protocolo padronizado. Usa modelo cliente-servidor com JSON-RPC 2.0. Servidores oferecem tools, prompts e resources. Claude Desktop, Zed, Replit e outros já integram.',
          sourceName: 'Anthropic',
          sourceUrl: 'https://www.anthropic.com/news/model-context-protocol',
        },
      },
      {
        term: 'Vibe Coding',
        definition:
          'Programar descrevendo o que você quer em linguagem natural e deixar a IA escrever o código. Funciona até quebrar. Aí você precisa de método.',
        modalContent: {
          extendedBody:
            'Vibe coding é programar descrevendo em linguagem natural o que você quer construir e deixar ferramentas de IA implementarem. O "vibe" é capturar a essência do que você quer, sem escrever código manualmente.\n\nFluxo típico: descreve ("cria um todo app com dark mode e drag-and-drop"), a IA gera código, você testa e itera com novos prompts. Críticos apontam falta de responsabilidade, vulnerabilidades de segurança e bugs em código gerado. O termo foi cunhado por Andrej Karpathy em 2025.',
          sourceName: 'Wikipedia',
          sourceUrl: 'https://en.wikipedia.org/wiki/Vibe_coding',
        },
      },
      {
        term: 'Fine-tuning',
        definition:
          'Treinar um modelo base com seus próprios dados pra ele ficar bom numa tarefa específica. Tipo ensinar um chef generalista a fazer só sushi.',
        modalContent: {
          extendedBody:
            'Fine-tuning é adaptar um modelo pré-treinado a uma tarefa diferente ou mais específica, treinando-o em dados daquela tarefa. É uma forma de transfer learning que reaproveita conhecimento do treino original.\n\nPode atualizar todos os parâmetros ou só um subconjunto (layers "congelados" vs "descongelados"). Full fine-tuning costuma dar melhor resultado mas é mais caro. Técnicas como LoRA permitem fine-tune de modelos com bilhões de parâmetros usando só milhões de parâmetros adicionais.',
          sourceName: 'OpenAI',
          sourceUrl: 'https://platform.openai.com/docs/guides/fine-tuning',
        },
      },
    ],
  },

  closing: {
    title: 'Estrutura é velocidade.',
    body: 'Bom dev com agentes não começa com prompt. Começa com plano. Ferramenta certa, plano claro, roadmap organizado. Cada passo deixa mais claro o que o agente precisa fazer. Fluxo simples funciona melhor que prompt caótico.',
    cta: 'Ver no GitHub',
  },

  footer: {
    bibliographyTitle: 'Bibliografia',
  },
}
