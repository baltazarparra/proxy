# Copy Outline — Guia

**Status:** Final v3
**Languages:** PT-BR (primary), EN (translation)
**Tone:** informal, conversacional, direto, prático, sem hype
**Last updated:** March 2026

---

## PT-BR

### Seção 1 — Hero

**title:** Guia prático
**subtitle:** para desenvolvimento com agentes de código.
**body:**
Agentes de código estão mudando a forma como software é construído. Mas sem um fluxo claro, velocidade vira caos. Guia te guia do zero, da escolha da ferramenta até a entrega, com um método simples que funciona com qualquer agente.

---

### Seção 2 — Agentes de Código: IDE vs CLI

**title:** Duas formas de trabalhar com agentes
**body:**
Agentes de código vêm em dois formatos: dentro de uma IDE ou direto no terminal. Entender a diferença é o primeiro passo.

**lastUpdated:** Março 2026
**note:** Preços podem mudar. Dá uma olhada nos sites oficiais pra ver os valores atualizados.

**categories:**

**Agentes via IDE**
Funcionam dentro de um editor de código com interface visual. Você escreve, pede mudanças e vê o resultado no mesmo ambiente. Bem mais fácil pra quem tá começando.

- **Cursor** — IDE baseada no VS Code com agente integrado. Suporta vários modelos (Claude, GPT, Gemini). Tem interface visual com diff, chat e edição inline. Planos: Hobby (grátis) · Pro ($20/mês) · Pro+ ($60/mês) · Ultra ($200/mês). Instalar: cursor.com (link).
- **Trae** — IDE da ByteDance com agente embutido. Interface parecida com o VS Code. Foco em acessibilidade e custo baixo. Planos: Free (grátis) · Pro ($10/mês ou $7.50/mês anual). Instalar: trae.ai (link).

**Agentes via CLI**
Rodam no terminal, sem interface gráfica. Você conversa com o agente por texto, e ele lê, edita e executa comandos direto no seu projeto. Mais poder e mais controle, mas você precisa ter familiaridade com o terminal.

- **Claude Code** — Agente de terminal da Anthropic. Usa Claude como modelo. Planos: Free · Pro ($20/mês) · Max 5x ($100/mês) · Max 20x ($200/mês) · ou via API. Instalar: `npm install -g @anthropic-ai/claude-code` (link para docs).
- **Codex** — Agente de terminal da OpenAI. Integrado ao ecossistema ChatGPT. Planos: Incluído no ChatGPT Plus ($20/mês) · Pro ($200/mês) · Business ($25/user/mês). Instalar: `npm install -g @openai/codex` (link para docs).
- **OpenCode** — Agente de terminal open-source. Suporta vários provedores (Claude, GPT, Gemini, Ollama). Gratuito. Instalar: `brew install opencode-ai/tap/opencode` (link para GitHub).

---

### Seção 3 — O Plano Inicial

**title:** Comece com um plano, não com um prompt
**body:**
Antes de abrir o agente de código, crie um PLAN.md. É o documento que transforma sua ideia em decisões concretas: o que vai ser construído, qual stack usar, como vai ser o deploy e o que fica de fora.

Você pode usar qualquer LLM pra gerar o plano inicial, como ChatGPT, Claude ou Gemini. O importante é explicar sua ideia com clareza: o que você quer construir, pra quem, com quais restrições. Peça uma sugestão de stack baseada no tipo de projeto e no modelo de deploy.

O resultado tem que ser um arquivo markdown sólido que funciona como fonte da verdade pra todo o desenvolvimento.

**steps:**

- Descreva sua ideia com contexto: tipo de produto, público, restrições
- Peça uma sugestão de stack alinhada ao projeto
- Revise e ajuste o plano até que faça sentido pra você
- Salve como PLAN.md na raiz do projeto

---

### Seção 4 — Revisão do Agente e Roadmap

**title:** Deixe o agente revisar e organizar
**body:**
Com o PLAN.md pronto, leve ele pro seu agente de código, seja Cursor, Claude Code ou qualquer outro. Peça pro agente revisar o plano sabendo que ele mesmo vai executar o trabalho.

O agente analisa o plano, identifica dependências, separa o trabalho em fases e cria um IMPLEMENTATION-ROADMAP.md, que é um roteiro com tarefas atômicas organizadas por fase, cada uma com critérios claros de conclusão.

O roadmap vira o guia central da execução. Nada é implementado fora dele.

**steps:**

- Abra o PLAN.md no seu agente de código
- Peça uma revisão considerando que o agente vai executar
- Peça pra separar o trabalho em fases de desenvolvimento
- Peça pra gerar um IMPLEMENTATION-ROADMAP.md com tarefas por fase

---

### Seção 5 — Execução Fase a Fase

**title:** Execute, valide, avance
**body:**
Com o roadmap definido, a execução segue um ciclo por fase. Cada fase funciona como uma unidade completa: o agente cria um plano de execução, gera uma PRD pra implementação, executa as tarefas, e no final você atualiza o roadmap e gera um relatório do que foi feito.

Só avance pra próxima fase depois de validar a atual. Esse ciclo evita acúmulo de dívida técnica e mantém o projeto previsível do começo ao fim.

**steps:**

- Peça ao agente pra criar um plano de execução da fase atual
- Peça uma PRD pra implementação
- Execute a fase
- Atualize o status do roadmap (marque tarefas concluídas)
- Gere um relatório do que foi implementado
- Valide e passe pra próxima fase

---

### Seção 6 — Templates

**title:** Comece com estrutura, não do zero
**body:**
Reunimos templates prontos pra cada etapa do fluxo. Use como ponto de partida: adapte, modifique, faça do seu jeito. O objetivo não é seguir um modelo rígido, é ter clareza desde o primeiro passo.

**items:**

- PLAN — Template de planejamento de projeto
- ROADMAP — Template de roadmap de implementação
- PRD — Template de requisitos de produto
- Rules — Template de regras de qualidade e segurança do agente
- Skills — Template de habilidades reutilizáveis do agente

---

### Seção 7 — Fechamento

**title:** Estrutura é velocidade.
**body:**
Bom desenvolvimento com agentes não começa com um prompt. Começa com um plano. Ferramenta certa, plano claro, roadmap organizado, execução fase a fase. Cada camada reduz ambiguidade e multiplica a qualidade do que o agente entrega. Fluxos simples vencem prompts caóticos. Sempre.

**cta:** Ver no GitHub

---

## EN

### Section 1 — Hero

**title:** Practical guide
**subtitle:** to agentic development.
**body:**
Code agents are changing how software gets built. But without a clear flow, speed turns into chaos. Guia walks you through from zero, from picking your tool to shipping, with a simple method that works with any agent.

---

### Section 2 — Code Agents: IDE vs CLI

**title:** Two ways to work with agents
**body:**
Code agents come in two flavors: built into an IDE or running straight from the terminal. Understanding the difference is the first step.

**lastUpdated:** March 2026
**note:** Prices change. Check the official sites for the latest.

**categories:**

**IDE Agents**
They work inside a code editor with a visual interface. You write, ask for changes, and see results in the same environment. Way easier if you're just getting started.

- **Cursor** — IDE based on VS Code with an integrated agent. Supports multiple models (Claude, GPT, Gemini). Comes with a visual interface for diffs, chat, and inline editing. Plans: Hobby (free) · Pro ($20/mo) · Pro+ ($60/mo) · Ultra ($200/mo). Install: cursor.com (link).
- **Trae** — ByteDance IDE with a built-in agent. Interface similar to VS Code. Focused on accessibility and low cost. Plans: Free · Pro ($10/mo or $7.50/mo annual). Install: trae.ai (link).

**CLI Agents**
Run in the terminal, no graphical interface. You talk to the agent through text, and it reads, edits, and runs commands directly in your project. More power and more control, but you'll need to be comfortable with the terminal.

- **Claude Code** — Anthropic's terminal agent. Uses Claude as the model. Plans: Free · Pro ($20/mo) · Max 5x ($100/mo) · Max 20x ($200/mo) · or via API. Install: `npm install -g @anthropic-ai/claude-code` (link to docs).
- **Codex** — OpenAI's terminal agent. Integrated into the ChatGPT ecosystem. Plans: Included in ChatGPT Plus ($20/mo) · Pro ($200/mo) · Business ($25/user/mo). Install: `npm install -g @openai/codex` (link to docs).
- **OpenCode** — Open-source terminal agent. Supports multiple providers (Claude, GPT, Gemini, Ollama). Free. Install: `brew install opencode-ai/tap/opencode` (link to GitHub).

---

### Section 3 — The Initial Plan

**title:** Start with a plan, not a prompt
**body:**
Before opening the code agent, create a PLAN.md. This is the document that turns your idea into concrete decisions: what gets built, which stack to use, how it'll be deployed, and what stays out of scope.

You can use any LLM to generate the initial plan, like ChatGPT, Claude, or Gemini. What matters is explaining your idea clearly: what you want to build, who it's for, and what the constraints are. Ask for a stack suggestion based on the project type and deployment model.

The result should be a solid markdown file that works as the source of truth for all development.

**steps:**

- Describe your idea with context: product type, audience, constraints
- Ask for a stack suggestion aligned to the project
- Review and tweak the plan until it makes sense to you
- Save it as PLAN.md at the project root

---

### Section 4 — Agent Review and Roadmap

**title:** Let the agent review and organize
**body:**
With the PLAN.md ready, take it to your code agent, whether that's Cursor, Claude Code, or whatever you prefer. Ask the agent to review the plan knowing that it'll be the one doing the work.

The agent analyzes the plan, identifies dependencies, breaks the work into phases, and creates an IMPLEMENTATION-ROADMAP.md, a roadmap with atomic tasks organized by phase, each with clear completion criteria.

The roadmap becomes the central guide for execution. Nothing gets built outside of it.

**steps:**

- Open PLAN.md in your code agent
- Ask for a review considering the agent will be the one executing it
- Ask it to break the work into development phases
- Ask it to generate an IMPLEMENTATION-ROADMAP.md with tasks per phase

---

### Section 5 — Phase-by-Phase Execution

**title:** Execute, validate, advance
**body:**
With the roadmap set, execution follows a per-phase cycle. Each phase works as a complete unit: the agent creates an execution plan, generates a PRD for the implementation, runs the tasks, and at the end you update the roadmap and generate a report of what got done.

Only move to the next phase after validating the current one. This cycle prevents technical debt from piling up and keeps the project predictable from start to finish.

**steps:**

- Ask the agent to create an execution plan for the current phase
- Ask for a PRD for the implementation
- Execute the phase
- Update the roadmap status (mark completed tasks)
- Generate a report of what was implemented
- Validate and move on to the next phase

---

### Section 6 — Templates

**title:** Start with structure, not from scratch
**body:**
We put together ready-made templates for each stage of the flow. Use them as a starting point: adapt, modify, make them yours. The goal isn't to follow a rigid template, it's to have clarity from the very first step.

**items:**

- PLAN — Project planning template
- ROADMAP — Implementation roadmap template
- PRD — Product requirements template
- Rules — Template for agent quality and safety rules
- Skills — Template for reusable agent skills

---

### Section 7 — Closing

**title:** Structure is speed.
**body:**
Good agentic development doesn't start with a prompt. It starts with a plan. Right tool, clear plan, organized roadmap, phase-by-phase execution. Each layer cuts ambiguity and multiplies the quality of what the agent delivers. Simple flows beat chaotic prompts. Every time.

**cta:** View on GitHub
