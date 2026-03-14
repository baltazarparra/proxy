export default {
  hero: {
    title: 'Proxy',
    subtitle: 'Um guia prático para desenvolvimento com agentes de código.',
    body: 'Agentes de código estão mudando a forma como software é construído. Mas sem um fluxo claro, velocidade vira caos. Proxy te guia do zero — da escolha da ferramenta à entrega — com um método simples que funciona com qualquer agente.',
  },

  agents: {
    title: 'Duas formas de trabalhar com agentes',
    body: 'Agentes de código existem em dois formatos: integrados a uma IDE ou rodando direto no terminal. Entender a diferença é o primeiro passo.',
    categories: [
      {
        name: 'Agentes via IDE',
        description:
          'Funcionam dentro de um editor de código com interface visual. Você escreve, pede mudanças e vê o resultado no mesmo ambiente. São mais acessíveis para quem está começando.',
        tools: [
          {
            name: 'Cursor',
            description:
              'IDE baseada no VS Code com agente integrado. Suporta múltiplos modelos (Claude, GPT, Gemini). Interface visual com diff, chat e edição inline.',
          },
          {
            name: 'Trae',
            description:
              'IDE da ByteDance com agente embutido. Interface similar ao VS Code. Foco em acessibilidade e custo baixo.',
          },
        ],
      },
      {
        name: 'Agentes via CLI',
        description:
          'Rodam no terminal, sem interface gráfica. Você conversa com o agente por texto, e ele lê, edita e executa comandos diretamente no seu projeto. Mais poder, mais controle — mas exigem familiaridade com o terminal.',
        tools: [
          {
            name: 'Claude Code',
            description:
              'Agente de terminal da Anthropic. Usa Claude como modelo. Lê o projeto, edita arquivos e executa comandos. Funciona com assinatura Claude ou via API.',
          },
          {
            name: 'Codex',
            description:
              'Agente de terminal da OpenAI. Integrado ao ecossistema ChatGPT. Disponível como CLI, extensão de IDE e app desktop.',
          },
          {
            name: 'OpenCode',
            description:
              'Agente de terminal open-source. Suporta múltiplos provedores (Claude, GPT, Gemini, Ollama). Gratuito — você usa suas próprias chaves de API.',
          },
        ],
      },
    ],
  },

  tools: {
    title: 'Como começar',
    body: 'Cada ferramenta tem seu modelo de preço e forma de instalação. Aqui está o panorama atual para você escolher a que faz mais sentido.',
    lastUpdated: 'Março 2026',
    ide: [
      {
        name: 'Cursor',
        plans: 'Hobby (grátis) · Pro ($20/mês) · Pro+ ($60/mês) · Ultra ($200/mês)',
        install: 'cursor.com — baixe o instalador para seu sistema',
      },
      {
        name: 'Trae',
        plans: 'Free (grátis) · Pro ($10/mês ou $7.50/mês anual)',
        install: 'trae.ai — baixe o instalador para seu sistema',
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
        plans: 'Gratuito e open-source (requer chaves de API próprias)',
        install: 'brew install opencode-ai/tap/opencode',
      },
    ],
    note: 'Preços podem mudar. Consulte os sites oficiais para valores atualizados.',
  },

  plan: {
    title: 'Comece com um plano, não com um prompt',
    body: 'Antes de abrir o agente de código, crie um PLAN.md. Esse é o documento que traduz sua ideia em decisões concretas: o que será construído, qual stack usar, como será o deploy, e o que fica de fora.\n\nVocê pode usar qualquer LLM para gerar o plano inicial — ChatGPT, Claude, Gemini. O importante é explicar sua ideia com clareza: o que você quer construir, para quem, com quais restrições. Peça uma sugestão de stack baseada no tipo de projeto e modelo de deploy.\n\nO resultado deve ser um arquivo markdown robusto que serve como fonte da verdade para todo o desenvolvimento.',
    steps: [
      'Descreva sua ideia com contexto: tipo de produto, público, restrições',
      'Peça uma sugestão de stack alinhada ao projeto',
      'Revise e ajuste o plano até que faça sentido',
      'Salve como PLAN.md na raiz do projeto',
    ],
  },

  roadmap: {
    title: 'Deixe o agente revisar e organizar',
    body: 'Com o PLAN.md pronto, leve-o ao seu agente de código — Cursor, Claude Code, ou o que preferir. Peça para o agente revisar o plano tendo em mente que ele próprio vai executar o trabalho.\n\nO agente analisa o plano, identifica dependências, separa o trabalho em fases e cria um IMPLEMENTATION-ROADMAP.md — um roteiro com tarefas atômicas organizadas por fase, cada uma com critérios claros de conclusão.\n\nO roadmap se torna a espinha dorsal da execução. Nada é implementado fora dele.',
    steps: [
      'Abra o PLAN.md no seu agente de código',
      'Peça revisão considerando que o agente vai executar',
      'Peça para separar o trabalho em fases de desenvolvimento',
      'Peça para gerar um IMPLEMENTATION-ROADMAP.md com tarefas por fase',
    ],
  },

  execution: {
    title: 'Execute, valide, avance',
    body: 'Com o roadmap definido, a execução segue um ciclo por fase. Cada fase é tratada como uma unidade completa: o agente cria um plano de execução, gera uma PRD para a implementação, executa as tarefas, e ao final você atualiza o roadmap e gera um relatório do que foi feito.\n\nSó avance para a próxima fase depois de validar a atual. Esse ciclo evita acúmulo de dívida técnica e mantém o projeto previsível do início ao fim.',
    steps: [
      'Peça ao agente para criar um plano de execução da fase atual',
      'Peça uma PRD para a implementação',
      'Execute a fase',
      'Atualize o status do roadmap (marque tarefas concluídas)',
      'Gere um relatório do que foi implementado',
      'Valide e passe para a próxima fase',
    ],
  },

  templates: {
    title: 'Comece com estrutura, não do zero',
    body: 'Reunimos templates prontos para cada etapa do fluxo. Use-os como ponto de partida: adapte, modifique, faça seu. O objetivo não é seguir um modelo rígido — é ter clareza desde o primeiro passo.',
    items: [
      { name: 'PLAN', description: 'Template de planejamento de projeto' },
      { name: 'ROADMAP', description: 'Template de roadmap de implementação' },
      { name: 'PRD', description: 'Template de requisitos de produto' },
      { name: 'Rules', description: 'Template para regras de qualidade e segurança do agente' },
      { name: 'Skills', description: 'Template para habilidades reutilizáveis do agente' },
    ],
  },

  closing: {
    title: 'Estrutura é velocidade.',
    body: 'Bom desenvolvimento com agentes não começa com um prompt. Começa com um plano. Ferramenta certa, plano claro, roadmap organizado, execução fase a fase — cada camada reduz ambiguidade e multiplica a qualidade do que o agente entrega. Fluxos simples vencem prompts caóticos. Sempre.',
    cta: 'Ver no GitHub',
  },
}
