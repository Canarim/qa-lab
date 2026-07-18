# qa-lab

Meu laboratório de estudos em automação de testes, saindo de QA para SDET, em TypeScript.

Aqui eu pratico escrevendo testes que rodam de verdade. Tudo que está no repositório é código que eu montei entendendo o que faz, não copiado.

## Stack

TypeScript, Vitest e Playwright. GitHub Actions entra mais pra frente.

## Como rodar

```bash
npm install
npm test             # roda os testes uma vez
npm run test:watch   # roda em modo watch
```

## Status

- [x] Ambiente configurado, primeiro teste passando
- [x] Teste de login reescrito do zero, rodando nos 3 navegadores
- [ ] Organizar os testes com Page Object
- [ ] Cobrir um fluxo completo com testes de UI e de API
- [ ] Rodar tudo sozinho no CI

## Próximo passo

Montar uma suíte de testes completa contra uma aplicação real, com UI e API, organizada como um projeto de verdade.
