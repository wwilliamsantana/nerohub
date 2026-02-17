# 📖 NeroHub

Uma plataforma de histórias feita por quem ama contar e ouvir boas narrativas. No NeroHub, escritores compartilham seus contos, exploram o que a comunidade criou, salvam suas histórias favoritas e avaliam o trabalho uns dos outros — tudo isso com uma interface escura, imersiva e cheia de detalhes visuais.

Construído com **Next.js 16**, **Prisma**, **NextAuth** e uma pitada de WebGL para deixar tudo mais bonito.

---

## 🚀 Tecnologias

| Camada         | Tecnologia                         |
| -------------- | ---------------------------------- |
| Framework      | Next.js 16 (App Router, Turbopack) |
| Linguagem      | TypeScript 5                       |
| Estilização    | Tailwind CSS 4, tw-animate-css     |
| UI             | shadcn/ui (Radix UI + CVA)         |
| Ícones         | Lucide React                       |
| Autenticação   | NextAuth.js v4 (Credentials + JWT) |
| Banco de dados | PostgreSQL via Prisma 6 (Supabase) |
| Formulários    | React Hook Form + Zod (validação)  |
| Animações      | GSAP, Three.js, OGL (LiquidEther)  |
| Lint           | ESLint (config Rocketseat)         |

---

## ✨ Funcionalidades

- **Criar e publicar histórias** com validação (Zod): título 3-120 chars, conteúdo 50-50k chars, 1-5 tags
- **Tags personalizadas** além das 16 pré-definidas
- **Feed paginado** (14 histórias/página) com filtro por tags e ordenação por data
- **Salvar histórias** de outros autores (toggle com atualização otimista via Context)
- **Avaliar histórias** com sistema de 1 a 5 estrelas interativo (não é possível avaliar as próprias)
- **Perfil pessoal** com suas histórias publicadas e as que você mais gostou
- **Perfil de autor** público para explorar as publicações de outros escritores
- **Autenticação completa** com validação React Hook Form + Zod em todos os forms
- **Proteção de rotas** server-side com `getServerSession`
- **Landing page imersiva** com efeito de digitação animada e background fluido interativo (WebGL)
- **Responsividade Mobile-First** — totalmente otimizado para celulares, tablets e desktops

---

## 📁 Estrutura do Projeto

```
nerohub/
├── app/
│   ├── (public)/                  # Rotas públicas (sem login)
│   │   ├── about/                 # Página "Sobre"
│   │   ├── login/                 # Página de login
│   │   └── register/              # Página de registro
│   ├── (private)/                 # Rotas protegidas (requer sessão)
│   │   ├── layout.tsx             # Layout com verificação server-side
│   │   ├── dashboard/             # Feed principal do usuário
│   │   ├── profile/               # Perfil pessoal (minhas histórias + salvas)
│   │   ├── author/[name]/         # Perfil público de um autor
│   │   └── story/
│   │       ├── [id]/              # Visualização completa de uma história
│   │       └── create/            # Formulário de criação de história
│   ├── api/
│   │   ├── auth/[...nextauth]/    # API route do NextAuth
│   │   ├── register/              # Criação de conta
│   │   └── stories/
│   │       ├── route.ts           # GET (listar) / POST (criar história)
│   │       └── [id]/
│   │           ├── rate/route.ts  # POST (avaliar de 1 a 5)
│   │           └── save/route.ts  # POST (salvar/remover dos salvos)
│   ├── layout.tsx                 # Layout raiz com Providers
│   ├── page.tsx                   # Landing page
│   └── globals.css
├── components/
│   ├── Header.tsx                 # Header com navegação e estado de sessão
│   ├── RegisterForm.tsx           # Formulário de registro (RHF + Zod)
│   ├── SignOutButton.tsx          # Botão de logout (client component)
│   ├── feed/
│   │   ├── CreateStoryForm.tsx    # Formulário de criação de história
│   │   ├── StoryFeed.tsx          # Feed paginado com filtro por tags
│   │   ├── StoryCard.tsx          # Card de história no feed
│   │   ├── StoryView.tsx          # Visualização completa da história
│   │   ├── InteractiveRating.tsx  # Avaliação com estrelas clicáveis
│   │   ├── StarRating.tsx         # Exibição de nota (somente leitura)
│   │   ├── TagBadge.tsx           # Badge de tag
│   │   ├── MyProfileView.tsx      # Tela do perfil pessoal
│   │   └── AuthorProfileView.tsx  # Tela do perfil de autor
│   ├── provider/
│   │   ├── Providers.tsx          # SessionProvider + SavedStoriesProvider
│   │   └── SavedStoriesProvider.tsx  # Context de histórias salvas (API + otimista)
│   └── ui/
│       ├── button.tsx             # Botão (shadcn/ui)
│       ├── separator.tsx          # Separador (shadcn/ui)
│       ├── LiquidEther.tsx        # Background fluido interativo (OGL/WebGL)
│       ├── ScrollReveal.tsx       # Animação de revelação no scroll
│       └── TextType.tsx           # Efeito de digitação animada
├── lib/
│   ├── auth.ts                    # Configuração do NextAuth (Credentials + JWT)
│   ├── prisma.ts                  # Instância singleton do PrismaClient
│   ├── stories.ts                 # Queries do banco (histórias, tags, notas, salvos)
│   └── utils.ts                   # Utilitários (cn)
├── prisma/
│   ├── schema.prisma              # Schema completo do banco
│   └── migrations/                # Histórico de migrations
├── types/
│   └── next-auth.d.ts             # Tipagem estendida da sessão
└── public/
```

---

## 🔐 Autenticação

O sistema usa **NextAuth.js v4** com estratégia **JWT** e **CredentialsProvider**:

### Registro

1. Formulário com **React Hook Form + Zod** para validação robusta:
   - Nome: 2-50 caracteres
   - E-mail: formato válido, normalizado com `.toLowerCase()`
   - Senha: 6-100 caracteres
   - Confirmação de senha com verificação `refine()`
   - Mensagens de erro em tempo real

2. `POST /api/register` → valida schema, verifica duplicata, faz hash com **bcrypt** (12 rounds), salva no banco
3. Login automático logo após o registro
4. Redirecionamento para `/dashboard`

### Login

1. Formulário com **React Hook Form + Zod**:
   - E-mail: validação de formato
   - Senha: campo obrigatório
   - Erros mostrados dinamicamente

2. `signIn("credentials")` do NextAuth
3. Busca o usuário por e-mail e compara a senha com bcrypt
4. Gera JWT com o `id` do usuário via callbacks
5. Redirecionamento para `/dashboard`

### Proteção de Rotas

- **Rotas privadas** (`app/(private)/`) são protegidas via `getServerSession` no layout server-side — quem não está logado é redirecionado para `/login`
- **Usuários logados** que acessam `/login` ou `/register` são automaticamente levados ao `/dashboard`
- **Header** exibe o nome do usuário e o botão "Sair" quando há uma sessão ativa
- **Loading state** na página de login durante verificação de sessão

---

## 🗄️ Banco de Dados

PostgreSQL com Prisma (hospedado em Supabase). O schema possui 6 modelos que cobrem toda a lógica da plataforma:

```prisma
model User {
  id           String       @id @default(cuid())
  name         String
  email        String       @unique
  password     String
  createdAt    DateTime     @default(now())
  stories      Story[]
  savedStories SavedStory[]
  ratings      Rating[]
}

model Story {
  id        String     @id @default(cuid())
  title     String
  content   String
  createdAt DateTime   @default(now())
  updatedAt DateTime   @updatedAt
  authorId  String
  author    User       @relation(...)
  tags      StoryTag[]
  savedBy   SavedStory[]
  ratings   Rating[]
}

model Tag {
  id      String     @id @default(cuid())
  name    String     @unique
  stories StoryTag[]
}

model StoryTag {
  storyId String
  tagId   String
  @@id([storyId, tagId])
}

model SavedStory {
  userId    String
  storyId   String
  createdAt DateTime @default(now())
  @@id([userId, storyId])
}

model Rating {
  userId    String
  storyId   String
  value     Int        // 1 a 5
  createdAt DateTime   @default(now())
  @@id([userId, storyId])
}
```

### Relações

- Um **usuário** pode ter várias histórias, salvar histórias de outros e avaliá-las
- Uma **história** pertence a um autor e pode ter várias tags (muitos-para-muitos via `StoryTag`)
- **Salvos e avaliações** usam chave composta `[userId, storyId]` — cada usuário salva/avalia uma história apenas uma vez
- Todas as relações possuem `onDelete: Cascade`

---

## 📡 API Routes

| Rota                      | Método | Descrição                                                     |
| ------------------------- | ------ | ------------------------------------------------------------- |
| `/api/register`           | POST   | Cria nova conta (validação server-side, hash bcrypt)          |
| `/api/auth/[...nextauth]` | \*     | Handlers do NextAuth (login, sessão, callback, etc.)          |
| `/api/stories`            | GET    | Lista todas as histórias com nota média e contagens de salvos |
| `/api/stories`            | POST   | Cria história (requer autenticação, valida tags)              |
| `/api/stories/[id]/save`  | POST   | Toggle de salvamento (atualização otimista)                   |
| `/api/stories/[id]/rate`  | POST   | Avalia história (1-5 stars, impede auto-rating)               |

---

## ⚡ Como Rodar

```bash
# 1. Instalar dependências
npm install

# 2. Configurar variáveis de ambiente
#    Crie um arquivo .env.local na raiz com:
#    DATABASE_URL="postgresql://user:password@host:port/database"
#    NEXTAUTH_URL="http://localhost:3000"
#    NEXTAUTH_SECRET="sua-chave-secreta-aqui"

# 3. Rodar as migrations e gerar o Prisma Client
npx prisma migrate deploy

# 4. Iniciar o servidor de desenvolvimento
npm run dev
```

Acesse [http://localhost:3000](http://localhost:3000) e crie sua conta para começar a escrever.

> **Nota sobre Supabase:** Para obter a `DATABASE_URL`, acesse [https://supabase.com](https://supabase.com), crie um projeto, e copie a connection string em `Settings > Database > Connection string > URI`

---

## 📜 Scripts

| Comando         | Descrição                            |
| --------------- | ------------------------------------ |
| `npm run dev`   | Inicia o servidor de desenvolvimento |
| `npm run build` | Gera o build de produção             |
| `npm run start` | Inicia o servidor de produção        |
| `npm run lint`  | Executa o ESLint                     |

---

## 🧪 Validação de Formulários

Todos os formulários do projeto utilizam **React Hook Form** com **Zod** para validação robusta:

### RegisterForm (Registro)

```
name: 2-50 caracteres
email: formato válido, normalizado com .toLowerCase()
password: 6-100 caracteres
confirmPassword: deve coincidir com password
```

### Login

```
email: formato válido
password: obrigatório
```

### CreateStoryForm (Criar História)

```
title: 3-120 caracteres
content: 50-50.000 caracteres
tags: array com 1-5 itens (strings)
```

**Benefícios da Implementação:**

- ✅ Validação automática antes do submit
- ✅ Mensagens de erro claras e localizadas (português)
- ✅ Retroalimentação visual (borders vermelhas em erros)
- ✅ Type-safe com `z.infer<typeof schema>`
- ✅ Padrão consistente em todos os formulários
- ✅ Erros de servidor tratados com `setError()`

---

## 📱 Responsividade

O projeto é **100% responsivo** com Tailwind CSS usando abordagem mobile-first:

**Breakpoints utilizados:**

- `sm`: 640px (tablets pequenos)
- `md`: 768px (tablets)
- `lg`: 1024px (desktops)
- `xl`: 1280px (desktops maiores)

**Componentes otimizados:**

- **Header** — logo responsivo, menu adaptativo
- **Formulários** — padding/margin reduzido em mobile, font-size dinâmico
- **Cards** — 1 coluna (mobile) → 2 colunas (tablet) → 3 colunas (desktop)
- **Paginação** — ícones menores em mobile, scroll horizontal quando necessário
- **Buttons** — texto escondido em mobile (ícones apenas), labels completos em desktop

**Testes recomendados:**

- iPhone/Android (320px - 425px)
- Tablet (768px - 1024px)
- Desktop (1280px+)

---

## 🌊 Landing Page

A página inicial é a porta de entrada do NeroHub e combina animações com uma estética escura e moderna:

- **TextType** — frases motivacionais que se digitam e se apagam em loop, dando vida ao centro da tela
- **LiquidEther** — um fundo fluido e interativo renderizado em WebGL (via OGL) que reage ao movimento do mouse
- **Header** com navegação inteligente baseada no estado de sessão
- CTAs para registro e para conhecer mais sobre o projeto

---

## 🧭 Fluxo do Usuário

1. O visitante chega na landing page e se cadastra
2. Após o registro, é logado automaticamente e levado ao **dashboard**
3. No dashboard, explora o **feed de histórias** — pode filtrar por tags e navegar entre páginas
4. Clica em uma história para ler o conteúdo completo, e pode **salvar** ou **avaliar com estrelas**
5. Acessa **"Escrever"** para publicar sua própria história com título, conteúdo e tags
6. No **"Meu Perfil"**, visualiza suas publicações e as histórias que salvou
7. Pode visitar o **perfil de qualquer autor** clicando no nome dele em um card
