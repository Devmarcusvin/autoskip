# AutoSkip

AutoSkip é uma extensão de navegador desenvolvida em JavaScript para detectar e pular automaticamente aberturas em plataformas de streaming.

O projeto surgiu como uma forma de automatizar o clique em botões como **"Pular abertura"** e **"Ignorar abertura"**, evitando que o usuário precise realizar essa ação manualmente a cada episódio.

## Plataformas

Atualmente testado em:

- ✅ Prime Video
- ✅ HBO Max
- 🚧 Netflix

Outras plataformas poderão ser adicionadas futuramente.

## Como funciona

O AutoSkip utiliza JavaScript para observar alterações na página durante a reprodução de um conteúdo.

Quando um botão relacionado à abertura aparece, a extensão:

1. Detecta alterações no DOM.
2. Procura pelos botões disponíveis.
3. Analisa o texto de cada botão.
4. Identifica termos relacionados a pular a abertura.
5. Executa automaticamente o clique.
6. Registra que aquela abertura já foi pulada para evitar cliques repetidos.

Exemplos de textos reconhecidos:

```text
Pular abertura
Pular introdução
Skip intro
Ignorar abertura