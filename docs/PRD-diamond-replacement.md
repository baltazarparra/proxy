# PRD — Substituição do Modelo 3D: Notebook → Diamante Negro

## Metadata

| Field  | Value      |
| ------ | ---------- |
| Date   | 2026-03-15 |
| Author | baltz      |
| Status | Draft      |

## Problem Statement

O modelo 3D atual (notebook) foi concebido como metáfora de "construção estruturada" no PLAN.md original. A decisão de substituí-lo por um diamante negro visa:

1. **Identidade visual distinta** — o diamante transmite valor, precisão e refinamento, alinhado à proposta de qualidade e estrutura do Guia
2. **Impacto visual superior** — a referência mostra um objeto com forte presença: preto profundo, reflexos nítidos e refração que cria brilho interno
3. **Coerência com o tema escuro** — o diamante negro se integra naturalmente ao fundo `#0c0c0e` e aos acentos dourados existentes

Se não for feito, a página mantém o notebook como elemento central, perdendo a oportunidade de uma identidade visual mais marcante e alinhada à referência fornecida.

## Goals

- Remover completamente o modelo 3D do notebook (NotebookModel e dependências)
- Criar um novo modelo 3D em forma de diamante (brilliant cut clássico)
- Aplicar material preto com efeitos de luz e refração próximos à referência:
  - Corpo escuro (preto profundo / charcoal)
  - Reflexos nítidos (highlights brancos/cinza claro)
  - Refração sutil com tons quentes (âmbar, dourado) e frios (azul, violeta)
  - Superfície polida, translúcida, com sensação de profundidade interna
- Manter o diamante centralizado na tela e reativo ao scroll (posição, rotação, possivelmente intensidade de luz)
- Preservar a arquitetura R3F + GSAP + Zustand (nenhuma mudança estrutural)
- Respeitar o orçamento de performance e `prefers-reduced-motion`

## Non-Goals

- Não alterar o conteúdo textual ou a estrutura das seções
- Não adicionar som, partículas ou efeitos WebGL complexos além do material do diamante
- Não mudar o stack (Vite, React, R3F, GSAP, Tailwind)
- Não implementar interação direta com o diamante (hover, click) — apenas scroll
- Não criar conteúdo legível dentro do diamante (equivalente ao Tier 3 do notebook)

## Target Audience

Os mesmos usuários do Guia: desenvolvedores interessados em desenvolvimento agentic, tech leads, builders. A mudança é puramente visual — o diamante reforça a sensação de premium e precisão sem alterar a mensagem.

## Proposed Solution

### Visão geral

Substituir o `NotebookModel` por um `DiamondModel` procedural (geometria gerada em código) com material customizado que reproduza:

1. **Forma** — brilliant cut: coroa superior, mesa plana, pavilhão pontiagudo, facetas bem definidas
2. **Material** — base preta/charcoal com:
   - `metalness` alto e `roughness` baixo para reflexos nítidos
   - Possível uso de `meshPhysicalMaterial` para refração (ior, transmission)
   - Ou shader customizado se o material físico padrão não atingir o efeito desejado
3. **Iluminação** — ajustar `SceneLights` e `Environment` para realçar highlights e refração; considerar luz direcional forte para criar os reflexos brancos/cinza da referência
4. **Pós-processamento** — Bloom existente pode ser afinado para destacar os reflexos do diamante (luminanceThreshold mais baixo para capturar highlights sutis)

### Reatividade ao scroll

O `SceneController` continua lendo `getTargetPose()` do Zustand e aplicando posição/rotação ao grupo do diamante. O arquivo `notebookStates.js` será renomeado para `diamondStates.js` (ou `sceneStates.js`) e as poses serão reajustadas para o diamante — possivelmente com rotações mais dinâmicas para explorar as facetas e o brilho em diferentes ângulos.

### Referência visual (imagem anexa)

A referência mostra:

- Diamante em corte brilhante, simétrico
- Corpo preto profundo, não mate — material cristalino e polido
- Highlights brancos/cinza nítidos em várias facetas (luz forte acima/lateral)
- Refração interna: tons quentes (âmbar, dourado) e frios (azul, violeta)
- Sensação de profundidade e brilho interno
- Fundo preto puro — o diamante se destaca pelo contraste de luz

O objetivo é aproximar-se ao máximo dessa estética dentro das restrições de performance.

## Technical Considerations

### Stack (inalterado)

| Layer            | Technology                  |
| ---------------- | --------------------------- |
| 3D rendering     | React Three Fiber + Drei    |
| Scroll animation | GSAP + ScrollTrigger        |
| State bridge     | Zustand                     |
| Post-processing  | @react-three/postprocessing |

### Geometria do diamante

- **Opção A (recomendada):** Geometria procedural com `ConeGeometry` ou combinação de geometrias (octaedro truncado, ou extrude de perfil de brilliant cut)
- **Opção B:** `IcosahedronGeometry` com subdivisão e escala para aproximar facetas — mais simples, menos fiel ao brilliant cut
- **Opção C:** Modelo `.glb` de diamante low-poly — verificar licença e peso (< 500KB)

A escolha depende do resultado visual e do custo de performance. Procedural é preferível para controle total e zero dependência externa.

### Material

- `meshPhysicalMaterial` com:
  - `color: '#0a0a0a'` ou `#1c1916` (preto profundo)
  - `roughness: 0.05–0.15`
  - `metalness: 0.1–0.3` (não metálico puro, mas reflexivo)
  - `transmission: 0.3–0.6` (refração)
  - `ior: 2.42` (índice de refração do diamante real)
  - `thickness: 0.5–1` (para transmission)
  - `envMapIntensity: 1.2–1.5` (realçar reflexos do Environment)

Se o resultado não for satisfatório, considerar shader customizado com `ShaderMaterial` ou `RawShaderMaterial` para controle fino de reflexão/refração.

### Iluminação

- Manter o rig atual (ambient + directional + rim gold + fill)
- Ajustar posições e intensidades para criar highlights nítidos nas facetas
- O `Environment` preset "city" pode ser trocado por "studio" ou "night" se melhorar o contraste
- Considerar `pointLight` adicional posicionado para simular a luz forte da referência

### Arquivos a modificar

| Arquivo                  | Ação                                                                        |
| ------------------------ | --------------------------------------------------------------------------- |
| `NotebookModel.jsx`      | Substituir por `DiamondModel.jsx` (ou renomear e reescrever)                |
| `SceneController.jsx`    | Trocar `NotebookModel` por `DiamondModel`; manter lógica de pose            |
| `notebookStates.js`      | Renomear para `diamondStates.js`; ajustar poses para o diamante             |
| `useNotebookState.js`    | Renomear para `useDiamondState.js` ou `useSceneState.js`; atualizar imports |
| `SceneLights.jsx`        | Ajustar posições/intensidades para o diamante                               |
| `NotebookScene.jsx`      | Manter nome ou renomear para `Scene3D.jsx`; sem mudança estrutural          |
| `AGENTS.md`, `PLAN.md`   | Atualizar referências de "notebook" para "diamond" onde aplicável           |
| `MobileSceneVariant.jsx` | Se existir, adaptar para o diamante                                         |

### Performance budget (inalterado)

| Métrica              | Target                   |
| -------------------- | ------------------------ |
| LCP                  | < 2.5s em 4G mobile      |
| JS bundle (excl. 3D) | < 300KB gzipped          |
| 3D model             | < 500KB (procedural = 0) |
| Frame rate no scroll | 30fps+ em iPhone 12      |
| Time to interactive  | < 4s em 4G               |

O material com `transmission` pode impactar performance em GPUs fracas. Validar em mobile; se necessário, desativar transmission em `useReducedComplexity` e usar material mais simples (Standard com metalness/roughness).

### Acessibilidade

- `prefers-reduced-motion`: diamante estático, sem transições de pose
- `WebGLErrorBoundary`: fallback CSS continua funcionando
- Página totalmente utilizável sem WebGL

## Scope

### In scope

- Remoção de `NotebookModel` e todas as referências ao notebook
- Criação de `DiamondModel` com geometria procedural e material preto reflexivo/refrativo
- Ajuste de `SceneLights` e `Environment` para realçar o diamante
- Renomeação/atualização de `notebookStates` → `diamondStates` e hooks relacionados
- Atualização de `SceneController` para usar `DiamondModel`
- Reajuste das poses por seção para o diamante (posição, rotação)
- Validação de performance em mobile e desktop
- Respeito a `prefers-reduced-motion`
- Atualização de documentação (AGENTS.md, referências no PLAN.md)
- Testes de smoke existentes atualizados

### Out of scope

- Alteração de copy ou estrutura de seções
- Novas bibliotecas (exceto se shader customizado exigir)
- Interação direta com o diamante (hover, click)
- Múltiplos objetos 3D ou cena complexa
- Animações de página (equivalente ao Tier 2 do notebook)
- Conteúdo legível no diamante

## Risks and Mitigations

| Risk                                                | Severity | Mitigation                                                                                  |
| --------------------------------------------------- | -------- | ------------------------------------------------------------------------------------------- |
| Material transmission degrada performance em mobile | High     | Desativar transmission em `useReducedComplexity`; usar `meshStandardMaterial` simplificado  |
| Efeito visual fica distante da referência           | Medium   | Iterar material (roughness, metalness, envMap); considerar shader customizado como fallback |
| Geometria procedural do brilliant cut é complexa    | Medium   | Começar com octaedro ou icosaedro; refinar facetas em iterações posteriores                 |
| Renomeação quebra imports em vários arquivos        | Low      | Fazer busca global por "notebook" e atualizar de forma atômica; rodar `npm run check` após  |
| Bloom destaca demais ou de menos o diamante         | Low      | Ajustar `luminanceThreshold` e `intensity` no EffectComposer                                |

## Success Criteria

- [ ] O modelo do notebook foi completamente removido
- [ ] O diamante aparece centralizado na tela, com forma reconhecível (brilliant cut)
- [ ] O diamante tem cor preta/charcoal com reflexos nítidos e refração sutil (tons quentes e frios)
- [ ] O diamante reage ao scroll (posição e rotação interpoladas por seção)
- [ ] A arquitetura R3F + GSAP + Zustand permanece intacta
- [ ] `prefers-reduced-motion` exibe diamante estático
- [ ] Performance: 30fps+ no scroll em iPhone 12; LCP < 2.5s
- [ ] Página funciona sem WebGL (error boundary + fallback)
- [ ] `npm run check` passa sem erros
- [ ] Documentação (AGENTS.md) reflete o novo elemento central

## Dependencies

- **Decisão de geometria** — procedural vs. modelo .glb; se procedural, qual abordagem (octaedro, icosaedro, brilliant cut custom)
- **Validação do material** — confirmar que `meshPhysicalMaterial` com transmission atinge o efeito desejado antes de considerar shader customizado
- **Aprovação da referência** — a imagem anexa é a referência final para cores, texturas e efeito de luz

## Open Questions

- Geometria: brilliant cut procedural completo ou aproximação com icosaedro/octaedro?
- Material: `meshPhysicalMaterial` com transmission é suficiente, ou será necessário shader customizado?
- Poses: o diamante deve ter rotações mais dinâmicas que o notebook para explorar as facetas, ou manter transições sutis?
- Nomenclatura: manter "NotebookScene" por compatibilidade ou renomear para "Scene3D" / "DiamondScene"?
