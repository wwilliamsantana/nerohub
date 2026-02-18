# 📖 NeroHub

Plataforma de histórias onde escritores compartilham seus contos, leem trabalhos da comunidade, salvam favoritos e avaliam com estrelas.

🌐 **Deploy:** [nerohub.vercel.app](https://nerohub.vercel.app)

---

## Tech Stack

- **Framework:** Next.js 16 (App Router, Turbopack)
- **Linguagem:** TypeScript 5
- **Estilização:** Tailwind CSS 4
- **Autenticação:** NextAuth.js (JWT + Credentials)
- **Banco:** PostgreSQL (Prisma) — hospedado em **Supabase**
- **Validação:** React Hook Form + Zod
- **Animações:** GSAP, Three.js, OGL

---

## Funcionalidades

- Criar e publicar histórias com validação (título 3-120 chars, conteúdo 50-50k chars)
- Adicionar tags personalizadas
- Feed paginado com filtro por tags
- Salvar histórias favoritas
- Avaliar histórias (1 a 5 estrelas)
- Perfil pessoal com suas histórias e salvos
- Perfil público de autores
- Autenticação segura com bcrypt e JWT
- Interface responsiva (mobile-first)

---

## Estrutura

```
app/
├── (public)/          # Público: login, registro, sobre
├── (private)/         # Protegido: dashboard, perfil, criação
├── api/               # API: auth, stories, rating, save
└── globals.css

components/
├── feed/              # Cards, formulários, visualização
├── provider/          # Context, providers
└── ui/                # Componentes reutilizáveis

lib/
├── auth.ts            # NextAuth config
├── prisma.ts          # Prisma client
├── stories.ts         # Queries do banco
└── utils.ts           # Utilitários

prisma/
├── schema.prisma      # Schema do banco
└── migrations/        # Histórico de mudanças
```

---

## Autenticação

- Registro com validação (nome, email, senha com bcrypt)
- Login com JWT
- Proteção de rotas server-side
- Sessão persistida no cliente

---

## Banco de Dados

**PostgreSQL** via **Prisma**, hospedado em **Supabase**.

Modelos:

- **User** — contas (com senha hash)
- **Story** — histórias e seus metadados
- **Tag** — categorias de histórias
- **StoryTag** — relação many-to-many
- **SavedStory** — histórias salvas por usuários
- **Rating** — avaliações (1-5 estrelas)

Todas as relações possuem `onDelete: Cascade`.

---

## 📡 API Routes

| Endpoint                   | Método   | O que faz                           |
| -------------------------- | -------- | ----------------------------------- |
| `/api/register`            | POST     | Criar conta                         |
| `/api/stories`             | GET/POST | Listar/criar histórias              |
| `/api/stories/[id]/save`   | POST     | Salvar/remover salvos               |
| `/api/stories/[id]/rate`   | POST     | Avaliar de 1 a 5                    |
| `/api/stories/[id]/delete` | DELETE   | Deletar história do próprio usuário |

---

## ⚡ Como Rodar

```bash
# 1. Clonar e instalar
git clone https://github.com/seu-usuario/nerohub.git
cd nerohub
npm install

# 2. Configurar .env.local
DATABASE_URL="postgresql://user:password@host/db"
DIRECT_URL="postgresql://user:password@host/db"
NEXTAUTH_URL="http://localhost:3000"
NEXTAUTH_SECRET="chave-secreta-gerada"

# 3. Migrations
npx prisma migrate deploy

# 4. Rodar localmente
npm run dev
```

Abra [http://localhost:3000](http://localhost:3000)

---

## Deploy

- **Banco:** [Supabase](https://supabase.com) (PostgreSQL gerenciado)
- **App:** [Vercel](https://vercel.com) — [nerohub.vercel.app](https://nerohub.vercel.app)

---

## 📜 Scripts

| Comando         | O que faz                   |
| --------------- | --------------------------- |
| `npm run dev`   | Servidor de desenvolvimento |
| `npm run build` | Build de produção           |
| `npm run start` | Rodar produção localmente   |
| `npm run lint`  | ESLint                      |
