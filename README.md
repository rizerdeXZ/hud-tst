# HUD 3D Neon - FiveM

HUD moderna e vibrante com estilo 3D neon para seu servidor FiveM.

## 🎨 Características

- ✨ **Estilo 3D Neon** com cores vibrantes (Cyan, Verde, Pink, Roxo, Laranja)
- 🟦 **Glassmorphism** com efeitos de vidro fosco
- 💫 **Animações suaves** e fluidas
- 🎯 **Responsive** e otimizado para todos os tamanhos de tela
- ⚡ **Performance otimizada** com React + Vite

## 📦 Elementos da HUD

- 💚 **Barra de Vida** com indicador em tempo real
- 🛡️ **Barra de Armadura** aparece apenas quando equipada
- 🔫 **Display de Arma** mostrando munição no pente e total
- 💰 **Contador de Dinheiro** formatado (K, M)
- ⚡ **Contador de XP** formatado
- 📢 **Sistema de Notificações** com 4 tipos (info, success, warning, error)
- 🎯 **Estrutura pronta** para Hotbar e Scoreboard

## 🚀 Instalação

### Requisitos
- Node.js 16+ instalado
- npm ou yarn

### Setup

```bash
# 1. Clone ou baixe o repositório
git clone https://github.com/rizerdeXZ/hud-tst.git
cd hud-tst

# 2. Instale as dependências
npm install

# 3. Faça o build
npm run build
```

A pasta `web-side/build/` será criada com os arquivos compilados.

## 📁 Integração ao FiveM

1. Coloque a pasta `hud-tst` em `resources/`
2. Adicione ao `server.cfg`:
```
ensure hud-tst
```

3. Reinicie o servidor

## 🎮 Uso

### Ativar/Desativar HUD

```lua
-- No console do jogo (F8)
TriggerEvent("hud:setEnabled", true)  -- Ativar
TriggerEvent("hud:setEnabled", false) -- Desativar

-- Ou usando export
exports['hud-tst']:setEnabled(true)
```

### Testar Elementos

```lua
-- Atualizar vida e armadura
TriggerEvent("hud:updateStatus", 85, 50)

-- Atualizar dinheiro
TriggerEvent("whud:client:updateMoney", 15000)

-- Atualizar XP
TriggerEvent("whud:client:updateXp", 1500)

-- Enviar notificação
TriggerEvent("whud:client:updateNotify", {
  title = "Teste",
  text = "HUD funcionando!",
  type = "success" -- info, success, warning, error
})
```

## 🛠️ Desenvolvimento

```bash
# Modo de desenvolvimento (com hot reload)
npm run dev

# Build para produção
npm run build

# Preview do build
npm run preview
```

## 📂 Estrutura do Projeto

```
hud-tst/
├── src/
│   ├── components/        # Componentes React
│   ├── store/             # Zustand store
│   ├── utils/             # Utilitários (NUI communication)
│   ├── App.tsx            # Componente principal
│   ├── main.tsx           # Entry point
│   └── index.css          # Estilos globais
├── web-side/
│   └── build/             # Build compilado (gerado)
├── fxmanifest.lua         # Manifest do resource
├── package.json
└── vite.config.ts
```

## 🎨 Customização

As cores neon podem ser customizadas em `src/index.css`:

```css
:root {
  --neon-cyan: #00ffff;
  --neon-green: #00ff41;
  --neon-pink: #ff006e;
  --neon-purple: #b500ff;
  --neon-orange: #ff6b35;
}
```

## 📝 Licença

Feito com ❤️ por Marquez
