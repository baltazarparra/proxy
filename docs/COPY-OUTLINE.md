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
Antes de abrir o agente, crie um PLAN.md. Ele transforma sua ideia em decisões: o que construir, qual stack, como fazer deploy, o que fica de fora.

Pular direto pro prompt é tentador, mas sem um plano você rebate bola com o agente o tempo todo. Use qualquer LLM (ChatGPT, Claude, Gemini) pra gerar o rascunho: explique sua ideia com clareza, peça sugestão de stack. O resultado é um markdown que serve de referência pro projeto todo.

**steps:**

- Descreva sua ideia: o que é, pra quem, qual problema resolve
- Defina limites: o que entra e o que fica de fora
- Use qualquer LLM (ChatGPT, Claude, Gemini) pra gerar um rascunho
- Peça sugestão de stack alinhada ao projeto e ao deploy
- Revise o texto até fazer sentido pra você
- Ajuste o que não encaixar
- Salve como PLAN.md na raiz do projeto

---

### Seção 4 — Revisão do Agente e Roadmap

**title:** Deixe o agente revisar e organizar
**body:**
PLAN pronto? Leva pro agente (Cursor, Claude Code, qualquer um). Pede pra ele revisar sabendo que vai executar.

A revisão dele não é cosmética: é operacional. O agente analisa, identifica dependências, quebra em fases e gera o IMPLEMENTATION-ROADMAP.md. Esse arquivo vira o guia. Nada é feito fora dele.

**steps:**

- Abra o PLAN.md no seu agente (Cursor, Claude Code, qualquer um)
- Peça uma revisão considerando que ele vai executar
- Peça que ele identifique dependências entre partes do trabalho
- Peça que quebre o trabalho em fases de desenvolvimento
- Peça tarefas atômicas com critério claro de conclusão
- Revise o roadmap gerado e ajuste o que precisar
- Salve como IMPLEMENTATION-ROADMAP.md — nada é feito fora dele

---

### Seção 5 — Execução Fase a Fase

**title:** Execute, valide, avance
**body:**
Com o roadmap pronto, cada fase é uma unidade: o agente planeja, gera PRD, executa. No fim você atualiza o roadmap e anota o que foi feito.

A validação é o freio. Não é só rodar testes: é conferir que o produto faz o que o plano previu. Só avança quando validar. Assim você não acumula dívida técnica e sabe sempre onde o projeto tá.

**steps:**

- Escolha a fase atual no roadmap
- Peça ao agente um plano de execução dessa fase
- Peça uma PRD pra implementação
- Execute as tarefas da fase
- Rode os testes e valide o que foi feito
- Atualize o roadmap: marque tarefas concluídas
- Só avance pra próxima fase depois de validar
- Repita o ciclo até o fim do projeto

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
Before opening the agent, create a PLAN.md. It turns your idea into decisions: what to build, which stack, how to deploy, what's out of scope.

Jumping straight to the prompt is tempting, but without a plan you'll spend your time course-correcting the agent. Use any LLM (ChatGPT, Claude, Gemini) to generate the draft: explain your idea clearly, ask for a stack suggestion. The result is a markdown file that serves as reference for the whole project.

**steps:**

- Describe your idea: what it is, who it is for, what problem it solves
- Define limits: what is in scope and what stays out
- Use any LLM (ChatGPT, Claude, Gemini) to generate a draft
- Ask for a stack suggestion aligned with the project and deployment
- Review the text until it makes sense to you
- Adjust whatever does not fit
- Save as PLAN.md at the project root

---

### Section 4 — Agent Review and Roadmap

**title:** Let the agent review and organize
**body:**
PLAN ready? Take it to your agent (Cursor, Claude Code, whatever). Ask it to review knowing it'll be the one executing.

That review isn't cosmetic: it's operational. The agent analyzes, identifies dependencies, breaks into phases, and generates IMPLEMENTATION-ROADMAP.md. That file becomes the guide. Nothing gets built outside of it.

**steps:**

- Open PLAN.md in your agent (Cursor, Claude Code, whatever)
- Ask for a review considering it will execute
- Ask it to identify dependencies between parts of the work
- Ask it to break the work into development phases
- Ask for atomic tasks with clear completion criteria
- Review the generated roadmap and adjust as needed
- Save as IMPLEMENTATION-ROADMAP.md — nothing gets built outside of it

---

### Section 5 — Phase-by-Phase Execution

**title:** Execute, validate, advance
**body:**
With the roadmap set, each phase is a unit: the agent plans, generates a PRD, executes. At the end you update the roadmap and note what got done.

Validation is the brake. It's not just running tests: it's checking that the product does what the plan said it would. Only advance when you've validated. That way you don't pile up technical debt and you always know where the project stands.

**steps:**

- Pick the current phase from the roadmap
- Ask the agent for an execution plan for that phase
- Ask for a PRD for the implementation
- Execute the phase tasks
- Run tests and validate what was done
- Update the roadmap: mark completed tasks
- Only advance to the next phase after validating
- Repeat the cycle until the project is done

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
