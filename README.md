# 📖 NeroHub

Plataforma de histórias onde escritores podem compartilhar seus contos e dar vida aos seus personagens. Construído com Next.js 16, autenticação completa e uma UI imersiva com efeitos visuais interativos.

---

## 🚀 Tecnologias

| Camada         | Tecnologia                         |
| -------------- | ---------------------------------- |
| Framework      | Next.js 16 (App Router, Turbopack) |
| Linguagem      | TypeScript 5                       |
| Estilização    | Tailwind CSS 4, tw-animate-css     |
| UI             | shadcn/ui (Radix UI + CVA)         |
| Autenticação   | NextAuth.js v4 (Credentials + JWT) |
| Banco de dados | SQLite via Prisma 5                |
| Formulários    | React Hook Form + Zod              |
| Animações      | GSAP, Three.js, OGL (LiquidEther)  |
| Lint           | ESLint (config Rocketseat)         |

---

## 📁 Estrutura do Projeto

```
nerohub/
├── app/
│   ├── (public)/                # Rotas públicas (acessíveis sem login)
│   │   ├── about/               # Página "Sobre"
│   │   ├── login/               # Página de login
│   │   └── register/            # Página de registro
│   ├── (private)/               # Rotas protegidas (requer autenticação)
│   │   ├── layout.tsx           # Layout com verificação de sessão server-side
│   │   └── dashboard/           # Painel do usuário
│   ├── api/
│   │   ├── auth/[...nextauth]/  # API route do NextAuth
│   │   └── register/            # API de criação de conta
│   ├── layout.tsx               # Layout raiz com SessionProvider
│   ├── page.tsx                 # Landing page
│   └── globals.css
├── components/
│   ├── Header.tsx               # Header com estado de sessão (login/sair)
│   ├── LiquidEther.tsx          # Efeito visual fluido interativo (OGL)
│   ├── Providers.tsx            # SessionProvider do NextAuth
│   ├── RegisterForm.tsx         # Formulário de registro (RHF + Zod)
│   ├── ScrollReveal.tsx         # Animação de revelação no scroll
│   ├── SignOutButton.tsx        # Botão de logout (client component)
│   ├── TextType.tsx             # Efeito de digitação animada
│   └── ui/                      # Componentes shadcn/ui
├── lib/
│   ├── auth.ts                  # Configuração do NextAuth (CredentialsProvider)
│   ├── prisma.ts                # Instância singleton do PrismaClient
│   └── utils.ts                 # Utilitários (cn)
├── prisma/
│   ├── schema.prisma            # Schema do banco (modelo User)
│   └── migrations/              # Histórico de migrations
├── types/
│   └── next-auth.d.ts           # Tipagem estendida da sessão
└── public/
```

---

## 🔐 Autenticação

O sistema utiliza **NextAuth.js v4** com estratégia **JWT** e **CredentialsProvider**:

### Registro

1. Formulário validado com **React Hook Form + Zod** (nome, e-mail, senha, confirmação)
2. `POST /api/register` → valida campos, verifica duplicata, hash com **bcrypt** (12 rounds), salva no banco
3. Login automático após registro bem-sucedido
4. Redirecionamento para `/dashboard`

### Login

1. `signIn("credentials")` do NextAuth
2. Busca o usuário pelo e-mail, compara senha com bcrypt
3. Gera JWT com `id` do usuário nos callbacks
4. Redirecionamento para `/dashboard`

### Proteção de Rotas

- **Rotas privadas** (`app/(private)/`) protegidas via `getServerSession` no layout server-side
- **Usuários logados** que acessam `/login` ou `/register` são redirecionados para `/dashboard`
- **Header** exibe nome do usuário + botão "Sair" quando autenticado

---

## 🗄️ Banco de Dados

SQLite com Prisma. Schema simplificado com apenas o modelo essencial:

```prisma
model User {
  id        String   @id @default(cuid())
  name      String
  email     String   @unique
  password  String
  createdAt DateTime @default(now())
}
```

---

## ⚡ Como Rodar

```bash
# Instalar dependências
npm install

# Configurar variáveis de ambiente
# Crie um arquivo .env com:
# DATABASE_URL="file:./dev.db"
# NEXTAUTH_URL="http://localhost:3000"
# NEXTAUTH_SECRET="sua-chave-secreta"

# Rodar migrations do Prisma
npx prisma migrate dev

# Iniciar em desenvolvimento
npm run dev
```

Acesse [http://localhost:3000](http://localhost:3000).

---

## 📜 Scripts

| Comando         | Descrição                            |
| --------------- | ------------------------------------ |
| `npm run dev`   | Inicia o servidor de desenvolvimento |
| `npm run build` | Gera o build de produção             |
| `npm run start` | Inicia o servidor de produção        |
| `npm run lint`  | Executa o ESLint                     |

---

## 🌊 Landing Page

A página inicial apresenta:

- **Header** com navegação e estado de sessão
- **TextType** — efeito de digitação animada com frases rotativas
- **LiquidEther** — background fluido interativo que reage ao mouse (OGL/WebGL)
- Botões de CTA para registro e exploração
