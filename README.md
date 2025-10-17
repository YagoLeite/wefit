# 🎬 WeMovies - E-commerce de Filmes

Um e-commerce moderno de filmes desenvolvido com Next.js 15, React 19 e TypeScript. Este projeto foi desenvolvido como teste para uma vaga de frontend, implementando uma experiência completa de compra com carrinho, animações e feedback visual.

## 🚀 Tecnologias Utilizadas

- **Next.js 15** com App Router
- **React 19** com TypeScript
- **Tailwind CSS 4** para estilização
- **Framer Motion** para animações
- **TanStack Query** para gerenciamento de estado servidor
- **Axios** para requisições HTTP
- **Context API** para gerenciamento de estado global

## ✨ Funcionalidades Implementadas

### 🏠 Página Inicial

- Listagem de filmes em grid responsivo
- Cards com imagem, título e preço
- Botão "ADICIONAR AO CARRINHO" com contador animado
- Animações suaves de entrada dos cards

### 🛒 Sistema de Carrinho

- **Adicionar/remover itens** com persistência no localStorage
- **Controle de quantidades** com botões +/- personalizados
- **Cálculo automático** de subtotais e total geral
- **Contador de itens** no header
- **Animações de accordion** na remoção de itens
- **Estado vazio** com componente dedicado

### 🎨 Design System

- **Cores personalizadas**: `we-blue`, `we-green`, `we-gray`
- **Tipografia**: Open Sans (principal), Geist Mono
- **Componentes reutilizáveis**: Button, AnimatedCounter, Toast
- **Layout responsivo** para desktop e mobile

### 🔔 Sistema de Notificações

- **Toast customizado** sem dependências externas
- **Posicionamento** no canto inferior direito
- **Animações suaves** de entrada e saída
- **Múltiplos tipos**: success, error, info

### 📱 Responsividade

- **Layout adaptativo** para todas as telas
- **Componentes específicos** para mobile e desktop
- **Breakpoints otimizados** para melhor experiência

## 🏗️ Arquitetura do Projeto

### 📁 Estrutura de Pastas

```
wefit/
├── app/                    # App Router (Next.js 15)
│   ├── cart/              # Página do carrinho
│   ├── finished-purchase/ # Página de compra realizada
│   └── layout.tsx         # Layout principal
├── components/            # Componentes reutilizáveis
│   ├── cart/             # Componentes do carrinho
│   ├── movies/           # Componentes de filmes
│   ├── ui/               # Componentes de interface
│   └── pages/            # Componentes de página
├── contexts/             # Contextos React
│   ├── CartContext.tsx   # Gerenciamento do carrinho
│   └── ToastContext.tsx  # Gerenciamento de toasts
├── lib/                  # Utilitários
│   └── api.ts           # Configuração do Axios
├── query/               # Queries do TanStack Query
└── types/               # Definições TypeScript
```

### 🎯 Padrões Implementados

#### Server Components

- **Página inicial**: Server-side rendering para melhor SEO
- **Página de compra realizada**: Server component com client component apenas para interatividade

#### Client Components

- **Carrinho**: Gerenciamento de estado e interatividade
- **Animações**: Framer Motion para transições suaves
- **Toasts**: Sistema de notificações

## 🎬 Animações Implementadas

### 🛒 Carrinho - Efeito Accordion

```typescript
// Animação de remoção de itens
const itemVariants = {
  exit: {
    height: 0,
    opacity: 0,
    paddingTop: 0,
    paddingBottom: 0,
    marginBottom: 0,
    transition: { duration: 0.3 },
  },
};
```

### 🎭 Cards de Filmes

- **Entrada escalonada** com delay progressivo
- **Hover effects** nos botões
- **Contador animado** de quantidade

### 🔔 Toast Notifications

- **Entrada**: De baixo para cima
- **Saída**: Desliza para baixo
- **Posicionamento**: Canto inferior direito

## 🛠️ Configurações Técnicas

### 🎨 Design System

```css
:root {
  --color-surface: #2f2e41;
  --color-on-surface: #ffffff;
  --color-we-blue: #009edd;
  --color-we-green: #039b00;
  --color-we-gray: #999999;
}
```

### 📱 Responsividade

- **Desktop**: Layout em grid com sidebar
- **Mobile**: Layout em coluna única
- **Breakpoints**: `max-[450px]`, `md:` (768px+)

## 🚀 Como Executar

### Pré-requisitos

- Node.js 18+
- npm ou yarn

### Instalação

```bash
# Clone o repositório
git clone <url-do-repositorio>

# Instale as dependências
npm install

# Configure as variáveis de ambiente (opcional)
# Crie um arquivo .env.local com NEXT_PUBLIC_API_BASE_URL

# Execute o servidor de desenvolvimento
npm run dev

# Acesse http://localhost:3000
```

### Scripts Disponíveis

```bash
npm run dev      # Servidor de desenvolvimento
npm run build    # Build de produção
npm run start    # Servidor de produção
npm run lint     # Linting do código
```

## 📝 Notas de Implementação

### 🔄 Estado de Loading

**Desafio**: O requisito pedia um estado de loading para a tela home, mas como implementamos a requisição no servidor (Server Component), não há necessidade de loading state no cliente.

**Solução**: A página inicial renderiza os dados diretamente no servidor, proporcionando melhor performance e SEO.

### 📦 TanStack Query

**Decisão**: Instalamos o TanStack Query inicialmente pensando que seria necessário para gerenciamento de estado servidor, mas acabou não sendo utilizado.

**Motivo**: A implementação com Server Components e Context API foi suficiente para atender todos os requisitos do projeto.

### 🎯 Otimizações Implementadas

- **Memoização** de componentes pesados
- **Lazy loading** de imagens
- **Server-side rendering** para páginas estáticas
- **Context API** para estado global eficiente
- **Persistência** no localStorage

## 🎨 Componentes Principais

### 🛒 CartContext

```typescript
interface CartContextType {
  items: CartItem[];
  totalItems: number;
  totalPrice: number;
  addItem: (movie: Movie) => void;
  removeItem: (movieId: string) => void;
  updateItemQuantity: (movieId: string, quantity: number) => void;
  clearCart: () => void;
}
```

### 🔔 ToastContext

```typescript
interface ToastContextType {
  showToast: (message: string, type?: "success" | "error" | "info") => void;
}
```

## 🚀 Deploy

O projeto está configurado para deploy em plataformas como Vercel, Netlify ou qualquer provedor que suporte Next.js.

### Variáveis de Ambiente

Crie um arquivo `.env.local` na raiz do projeto com as seguintes variáveis:

```bash
# API Configuration
NEXT_PUBLIC_API_BASE_URL='api url'
```

**Nota**: O projeto funciona sem as variáveis de ambiente, usando valores padrão, mas é recomendado configurá-las para maior flexibilidade.

## 📄 Licença

Este projeto foi desenvolvido como teste técnico e não possui licença específica.

---

**Desenvolvido com ❤️ usando Next.js 15 e React 19**
