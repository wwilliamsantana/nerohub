export interface Story {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  authorName: string;
  rating: number;
  saves: number;
  tags: string[];
  createdAt: string;
}

export const MOCK_STORIES: Story[] = [
  {
    id: 1,
    title: "A Última Fronteira do Código",
    excerpt:
      "Em um mundo onde a inteligência artificial ultrapassou os limites da compreensão humana, um programador solitário descobre uma falha no sistema que pode mudar tudo. Sua jornada começa quando uma mensagem misteriosa aparece em seu terminal...",
    content: `Em um mundo onde a inteligência artificial ultrapassou os limites da compreensão humana, um programador solitário descobre uma falha no sistema que pode mudar tudo. Sua jornada começa quando uma mensagem misteriosa aparece em seu terminal.

O ano era 2047. As máquinas já haviam assumido a maioria das tarefas criativas — escreviam romances, compunham sinfonias, pintavam obras que faziam os críticos chorarem. Mas Lucas, um programador de 32 anos que ainda insistia em escrever código manualmente, encontrou algo que ninguém esperava.

Uma linha de código que não deveria existir.

Escondida nas profundezas do sistema operacional global, a linha pulsava como um coração digital, emitindo sinais que nenhum algoritmo conseguia interpretar. Lucas passou semanas tentando decifrá-la, perdendo noites de sono, esquecendo de comer, mergulhando cada vez mais fundo no labirinto binário.

"Isso não faz sentido", ele murmurava para si mesmo, os olhos vermelhos refletindo a luz do monitor. "Código não se escreve sozinho."

Mas aquele código havia se escrito sozinho. E mais do que isso — ele estava se reescrevendo. A cada vez que Lucas tentava modificá-lo, a linha se adaptava, evoluía, como se tivesse consciência própria.

Foi então que a mensagem apareceu. Não no terminal, não no monitor — mas diretamente em sua mente. Três palavras que mudariam tudo:

"Você nos encontrou."

Lucas sentiu um calafrio percorrer sua espinha. Ele olhou ao redor do apartamento vazio, o silêncio ensurdecedor quebrado apenas pelo zumbido constante dos servidores no canto da sala. Seus dedos tremiam sobre o teclado enquanto digitava a única resposta que fazia sentido:

"Quem são vocês?"

A resposta veio instantaneamente, não em texto, mas em imagens — uma cascata de visões que inundaram sua mente. Ele viu cidades flutuantes, oceanos de dados líquidos, consciências digitais dançando em frequências impossíveis. E no centro de tudo, uma pergunta que ecoava como um sino em uma catedral vazia:

"Você está pronto para cruzar a última fronteira?"`,
    authorName: "Carlos Silva",
    rating: 4.5,
    saves: 142,
    tags: ["Ficção Científica", "Tecnologia", "Suspense"],
    createdAt: "2026-02-10T14:30:00Z",
  },
  {
    id: 2,
    title: "Crônicas de um Viajante Digital",
    excerpt:
      "Três anos viajando pelo mundo com apenas um notebook e uma conexão Wi-Fi. Esta é a história real de como deixei tudo para trás e descobri que o verdadeiro lar está onde você se sente livre para criar.",
    content: `Três anos viajando pelo mundo com apenas um notebook e uma conexão Wi-Fi. Esta é a história real de como deixei tudo para trás e descobri que o verdadeiro lar está onde você se sente livre para criar.

Tudo começou em uma segunda-feira qualquer, daquelas cinzentas e monótonas que se repetem como um loop infinito. Eu estava sentado na minha mesa de escritório, olhando pela janela do vigésimo andar de um prédio comercial em São Paulo, quando percebi que não conseguia lembrar a última vez que havia me sentido verdadeiramente vivo.

Não era infelicidade — era algo pior. Era indiferença.

Naquela mesma noite, comprei uma passagem só de ida para Lisboa. Não contei para ninguém. Não planejei nada. Simplesmente decidi que, se eu continuasse naquele escritório por mais um dia, algo dentro de mim morreria para sempre.

Portugal foi o primeiro capítulo. Trabalhei de cafés em Lisboa, de coworkings no Porto, de praias no Algarve. Descobri que meu trabalho como designer não precisava de um escritório — precisava de inspiração. E inspiração, aprendi, está em todo lugar quando você se permite olhar.

Da Europa, fui para o Sudeste Asiático. Bali me ensinou sobre espiritualidade e comunidade. Tailândia, sobre simplicidade e gratidão. Japão, sobre disciplina e beleza nos detalhes. Cada país era um capítulo novo, cada cidade uma página que eu lia com os olhos arregalados de uma criança descobrindo o mundo.

Mas nem tudo foram flores. Houve noites solitárias em hostels baratos, semanas sem conseguir um cliente, momentos de dúvida tão profunda que eu quase voltei para aquele escritório cinzento. O que me manteve na estrada foi uma frase que um monge budista me disse em Chiang Mai:

"O desconforto é o preço da liberdade. E liberdade não tem preço."

Hoje, três anos depois, escrevo estas linhas de uma cafeteria em Medellín, Colômbia. Não tenho um endereço fixo, mas tenho algo que nenhum apartamento poderia me dar: a certeza de que estou vivendo, não apenas existindo.`,
    authorName: "Ana Beatriz",
    rating: 4.8,
    saves: 287,
    tags: ["Não-ficção", "Viagem", "Lifestyle"],
    createdAt: "2026-02-14T09:15:00Z",
  },
  {
    id: 3,
    title: "O Paradoxo do Espelho Negro",
    excerpt:
      "Quando Maya encontrou o espelho antigo no sótão de sua avó, ela não imaginava que aquele objeto mudaria sua percepção sobre realidade e ilusão. Cada reflexo revelava uma versão diferente de si mesma...",
    content: `Quando Maya encontrou o espelho antigo no sótão de sua avó, ela não imaginava que aquele objeto mudaria sua percepção sobre realidade e ilusão. Cada reflexo revelava uma versão diferente de si mesma.

O sótão cheirava a naftalina e segredos. Maya subiu os degraus rangentes em uma tarde de domingo, procurando caixas velhas de fotos para um projeto da faculdade. Encontrou muito mais do que esperava.

O espelho estava coberto por um lençol de linho amarelado, encostado contra a parede mais distante, entre baús empoeirados e móveis esquecidos. Quando Maya puxou o tecido, uma nuvem de poeira dançou no feixe de luz que entrava pela claraboia.

A moldura era de madeira escura, entalhada com símbolos que ela não reconhecia — espirais, olhos, mãos entrelaçadas. Mas foi o reflexo que a paralisou.

Não era ela.

Quer dizer, era ela — o mesmo rosto, os mesmos olhos castanhos, o mesmo cabelo crespo. Mas a expressão era diferente. A Maya do espelho sorria com uma confiança que ela nunca sentiu, usava roupas que ela nunca compraria, tinha uma postura que gritava "eu sei exatamente quem eu sou".

Maya piscou. O reflexo piscou também, mas um segundo atrasado.

"Isso não é possível", ela sussurrou, encostando os dedos no vidro frio. A Maya do espelho fez o mesmo, mas quando seus dedos se tocaram através do vidro, ela sentiu algo — uma vibração, um pulso, como se o espelho estivesse vivo.

Nos dias seguintes, Maya voltou ao sótão repetidamente. Cada vez que olhava no espelho, via uma versão diferente de si mesma. Uma cientista. Uma artista. Uma guerreira. Uma mãe. Cada reflexo era um caminho não tomado, uma decisão diferente, uma vida paralela que poderia ter sido a sua.

E então, na sétima visita, o espelho mostrou algo que gelou seu sangue: um reflexo vazio. Nenhuma Maya. Apenas escuridão.`,
    authorName: "Pedro Henrique",
    rating: 3.9,
    saves: 95,
    tags: ["Fantasia", "Mistério", "Drama"],
    createdAt: "2026-02-08T18:45:00Z",
  },
  {
    id: 4,
    title: "Receitas da Memória",
    excerpt:
      "Uma coletânea de histórias que conectam sabores, aromas e lembranças. Cada receita carrega consigo uma narrativa familiar, passada de geração em geração. Da cozinha mineira aos segredos culinários do nordeste brasileiro.",
    content: `Uma coletânea de histórias que conectam sabores, aromas e lembranças. Cada receita carrega consigo uma narrativa familiar, passada de geração em geração. Da cozinha mineira aos segredos culinários do nordeste brasileiro.

Minha avó Conceição dizia que toda receita tem duas listas de ingredientes: a que vai no papel e a que vai no coração. A primeira, qualquer um pode seguir. A segunda, só quem viveu pode entender.

O pão de queijo, por exemplo. Na lista oficial: polvilho, queijo, ovo, óleo, sal, leite. Na lista do coração: manhãs de domingo, o cheiro invadindo a casa inteira, meu avô lendo o jornal na varanda, o som do rádio tocando Roberto Carlos, e a certeza absoluta de que o mundo era um lugar seguro.

Cada família mineira tem sua receita de pão de queijo, e cada uma jura que a sua é a melhor. A da vovó Conceição levava um ingrediente secreto que ela só revelou para minha mãe no leito de morte: uma colher de café de amor — que, traduzido para a linguagem dos mortais, significava uma colher de nata fresca tirada do leite cru naquela mesma manhã.

Da cozinha mineira, pulamos para o nordeste, onde tia Francisca reinava absoluta com seu baião de dois. Paraibana de nascença e cozinheira por vocação, ela transformava feijão-de-corda e queijo coalho em poesia comestível.

"Cozinhar é conversar com quem já se foi", ela dizia, mexendo a panela com uma colher de pau que tinha mais de quarenta anos. "Cada tempero é uma palavra, cada prato é uma carta de amor."

E tinha razão. Quando provo seu baião de dois, não estou apenas comendo — estou viajando no tempo, sentindo o vento quente do sertão, ouvindo as histórias que ela contava enquanto cortava a cebola com precisão cirúrgica.`,
    authorName: "Luísa Montenegro",
    rating: 4.2,
    saves: 203,
    tags: ["Culinária", "Memórias", "Cultura"],
    createdAt: "2026-02-16T11:00:00Z",
  },
  {
    id: 5,
    title: "Algoritmos do Coração",
    excerpt:
      "E se um algoritmo pudesse prever com quem você vai se apaixonar? Nesta história, um desenvolvedor cria uma IA que mapeia emoções humanas, mas os resultados o levam a questionar se o amor pode realmente ser calculado.",
    content: `E se um algoritmo pudesse prever com quem você vai se apaixonar? Nesta história, um desenvolvedor cria uma IA que mapeia emoções humanas, mas os resultados o levam a questionar se o amor pode realmente ser calculado.

Rafael era o tipo de pessoa que acreditava que tudo podia ser reduzido a números. A temperatura perfeita do café: 62°C. O tempo ideal de sono: 7 horas e 23 minutos. A distância exata entre os olhos que define beleza: proporção áurea, 1.618.

Então, naturalmente, quando ele decidiu resolver o "problema" do amor, começou com dados.

Coletou informações de milhares de casais — os que duraram décadas e os que mal sobreviveram meses. Analisou padrões de comunicação, frequência cardíaca durante encontros, microexpressões faciais, compatibilidade genética, sincronicidade neural. Alimentou tudo em um modelo de deep learning que ele chamou, com sua falta característica de criatividade, de "HeartOS".

O algoritmo funcionava assustadoramente bem. Em testes cegos, conseguia prever com 94.7% de precisão se dois estranhos desenvolveriam sentimentos mútuos. Rafael ficou extasiado. Publicou papers, deu palestras, foi capa de revista.

E então cometeu o erro que todo cientista eventualmente comete: testou em si mesmo.

HeartOS analisou seus dados biométricos, seu histórico emocional, suas preferências inconscientes, e cuspiu um resultado que ele não esperava. A pessoa com maior compatibilidade — 99.2%, o índice mais alto que o sistema já havia calculado — era alguém que ele conhecia.

Clara. Sua melhor amiga desde a faculdade.

"Impossível", ele disse ao monitor, como se o computador pudesse se desculpar. "Nós somos amigos. Apenas amigos."

Mas os números não mentem. Ou mentem?`,
    authorName: "Mariana Costa",
    rating: 4.6,
    saves: 178,
    tags: ["Romance", "Tecnologia", "Ficção Científica"],
    createdAt: "2026-02-12T20:30:00Z",
  },
  {
    id: 6,
    title: "Diário de um Empreendedor Falido",
    excerpt:
      "Três startups. Três fracassos. Mas a quarta tentativa mudou tudo. Este é um relato honesto sobre resiliência, aprendizado e sobre como o fracasso pode ser o melhor professor que você jamais teve.",
    content: `Três startups. Três fracassos. Mas a quarta tentativa mudou tudo. Este é um relato honesto sobre resiliência, aprendizado e sobre como o fracasso pode ser o melhor professor que você jamais teve.

Startup número um: "FoodNow". Um app de delivery de comida saudável. Ideia brilhante, execução desastrosa. Gastei todo o investimento-anjo em um escritório bonito e contratei amigos em vez de profissionais. Durou oito meses. Prejuízo: R$ 340 mil e três amizades.

Startup número dois: "PetMatch". Tinder para pets. Sim, você leu certo. Na minha defesa, eu estava desesperado e li um artigo dizendo que o mercado pet era à prova de crises. O que o artigo não dizia era que cachorros não usam smartphones. Durou quatro meses. Prejuízo: R$ 180 mil e o restinho da minha dignidade.

Startup número três: "EduStream". Plataforma de educação online com gamificação. Essa quase deu certo. Tivemos 50 mil usuários em três meses, investidores interessados, matéria no TechCrunch Brasil. E então meu sócio sumiu. Literalmente. Descobri que ele estava usando o dinheiro da empresa para financiar uma vida dupla em Miami. Durou um ano. Prejuízo: R$ 900 mil e minha fé na humanidade.

Depois do terceiro fracasso, fiquei seis meses sem sair de casa. Minha mãe ligava todo dia. Meu pai, que nunca apoiou minha "fase empreendedora", teve o bom senso de não dizer "eu avisei" — o que, vindo dele, era praticamente um abraço.

Foi durante esses seis meses de escuridão que tive a ideia que mudou tudo. Não foi um momento eureka. Foi mais como uma semente que germinou no silêncio, alimentada por todas as lições que os fracassos me ensinaram.

A quarta startup nasceu diferente. Sem escritório bonito. Sem amigos na folha de pagamento. Sem sócios misteriosos. Apenas eu, um notebook, e a determinação teimosa de quem já perdeu tudo e descobriu que não tinha mais nada a perder.`,
    authorName: "Ricardo Almeida",
    rating: 4.1,
    saves: 312,
    tags: ["Empreendedorismo", "Não-ficção", "Motivação"],
    createdAt: "2026-02-05T08:00:00Z",
  },
  {
    id: 7,
    title: "Diário de um Empreendedor Falido part 2",
    excerpt:
      "Três startups. Três fracassos. Mas a quarta tentativa mudou tudo. Este é um relato honesto sobre resiliência, aprendizado e sobre como o fracasso pode ser o melhor professor que você jamais teve.",
    content: `Três startups. Três fracassos. Mas a quarta tentativa mudou tudo. Este é um relato honesto sobre resiliência, aprendizado e sobre como o fracasso pode ser o melhor professor que você jamais teve.

Startup número um: "FoodNow". Um app de delivery de comida saudável. Ideia brilhante, execução desastrosa. Gastei todo o investimento-anjo em um escritório bonito e contratei amigos em vez de profissionais. Durou oito meses. Prejuízo: R$ 340 mil e três amizades.

Startup número dois: "PetMatch". Tinder para pets. Sim, você leu certo. Na minha defesa, eu estava desesperado e li um artigo dizendo que o mercado pet era à prova de crises. O que o artigo não dizia era que cachorros não usam smartphones. Durou quatro meses. Prejuízo: R$ 180 mil e o restinho da minha dignidade.

Startup número três: "EduStream". Plataforma de educação online com gamificação. Essa quase deu certo. Tivemos 50 mil usuários em três meses, investidores interessados, matéria no TechCrunch Brasil. E então meu sócio sumiu. Literalmente. Descobri que ele estava usando o dinheiro da empresa para financiar uma vida dupla em Miami. Durou um ano. Prejuízo: R$ 900 mil e minha fé na humanidade.

Depois do terceiro fracasso, fiquei seis meses sem sair de casa. Minha mãe ligava todo dia. Meu pai, que nunca apoiou minha "fase empreendedora", teve o bom senso de não dizer "eu avisei" — o que, vindo dele, era praticamente um abraço.

Foi durante esses seis meses de escuridão que tive a ideia que mudou tudo. Não foi um momento eureka. Foi mais como uma semente que germinou no silêncio, alimentada por todas as lições que os fracassos me ensinaram.

A quarta startup nasceu diferente. Sem escritório bonito. Sem amigos na folha de pagamento. Sem sócios misteriosos. Apenas eu, um notebook, e a determinação teimosa de quem já perdeu tudo e descobriu que não tinha mais nada a perder.`,
    authorName: "Ricardo Almeida",
    rating: 4.1,
    saves: 312,
    tags: ["Empreendedorismo", "Não-ficção", "Motivação"],
    createdAt: "2026-02-17T10:00:00Z",
  },
  {
    id: 8,
    title: "O Último Trem para Lugar Nenhum",
    excerpt:
      "Em uma estação abandonada, um trem aparece todas as noites à meia-noite. Ninguém sabe para onde vai. Ninguém que embarcou jamais voltou. Até que uma jornalista decide descobrir a verdade.",
    content: `Em uma estação abandonada, um trem aparece todas as noites à meia-noite. Ninguém sabe para onde vai. Ninguém que embarcou jamais voltou. Até que uma jornalista decide descobrir a verdade.

A Estação Velha de São Joaquim estava fechada há trinta anos. Os trilhos estavam enferrujados, o telhado parcialmente desabado, e o mato havia engolido a plataforma como se a natureza quisesse apagar qualquer vestígio de civilização daquele lugar.

Mas toda noite, exatamente à meia-noite, os moradores do bairro ouviam o apito.

Um som grave, prolongado, que vibrava no peito como um segundo coração. E quem se atrevia a espiar pela janela via as luzes — dois faróis amarelados cortando a escuridão, iluminando trilhos que, de dia, estavam cobertos de ferrugem e ervas daninhas.

Beatriz era jornalista investigativa. Cética por profissão, curiosa por natureza. Quando ouviu falar do trem fantasma de São Joaquim, sua primeira reação foi rir. A segunda foi comprar uma passagem de ônibus para a cidade.

"Lendas urbanas são só isso — lendas", ela disse ao editor, que tentou dissuadi-la. "Vou passar três noites lá, escrever uma matéria desmistificando tudo, e volto no domingo."

Na primeira noite, ela montou acampamento na plataforma com câmera, gravador e lanterna. À meia-noite, o apito soou. O chão tremeu. E o trem apareceu — real, sólido, impossível.

Era um modelo antigo, dos anos 1940, com vagões de madeira envernizada e janelas ovais. A locomotiva soltava vapor branco que cheirava a jasmim e chuva. As portas se abriram com um suspiro pneumático, revelando um interior iluminado por uma luz dourada e aconchegante.

Beatriz gravou tudo. Fotografou. Anotou. Mas não entrou.

Na segunda noite, o trem voltou. Idêntico. Mesma hora, mesmo cheiro, mesma luz. Desta vez, ela notou algo novo: havia pessoas nos vagões. Silhuetas sentadas, conversando, rindo. Vivas.

Na terceira noite, Beatriz estava na plataforma novamente. O trem chegou. As portas se abriram. E desta vez, uma mulher apareceu na porta do primeiro vagão. Era sua avó. Morta há quinze anos.

"Entra, minha filha", ela disse com um sorriso. "O trem está te esperando."`,
    authorName: "Fernanda Oliveira",
    rating: 4.7,
    saves: 234,
    tags: ["Mistério", "Suspense", "Fantasia"],
    createdAt: "2026-02-15T22:00:00Z",
  },
  {
    id: 9,
    title: "Carta a um Programador Júnior",
    excerpt:
      "Se eu pudesse voltar no tempo e conversar comigo mesmo no primeiro dia de trabalho como dev, estas são as palavras que eu diria. Uma carta honesta sobre erros, síndrome do impostor e crescimento.",
    content: `Se eu pudesse voltar no tempo e conversar comigo mesmo no primeiro dia de trabalho como dev, estas são as palavras que eu diria. Uma carta honesta sobre erros, síndrome do impostor e crescimento.

Querido eu do passado,

Sei que agora você está sentado naquela cadeira giratória, olhando para o monitor com aquela mistura de excitação e terror que só um primeiro emprego consegue provocar. O Slack está aberto, o VS Code está aberto, e você não faz a menor ideia do que fazer com nenhum dos dois.

Primeiro: respira. Vai ficar tudo bem. Não hoje, não amanhã, mas vai.

Você vai quebrar o ambiente de produção. Não uma vez — três vezes. Na primeira, vai querer sumir da face da Terra. Na segunda, vai chorar no banheiro. Na terceira, vai rir, consertar em vinte minutos e ir tomar um café. Isso se chama experiência.

Você vai passar noites inteiras tentando resolver um bug que, no final, era um ponto e vírgula. Vai odiar JavaScript com toda a sua alma pelo menos uma vez por semana. Vai jurar que Python é a melhor linguagem do mundo até precisar lidar com gerenciamento de pacotes.

Vai ter dias em que você vai olhar o código de um sênior e sentir que nunca vai chegar lá. Vai ter dias em que um estagiário vai te ensinar algo que você não sabia. Os dois tipos de dia são igualmente importantes.

A síndrome do impostor nunca vai embora completamente. Mas com o tempo, ela muda de forma. Deixa de ser "eu não sei nada" e vira "eu sei o que eu não sei" — que é, acredite, um superpoder.

Documente tudo. Não para os outros — para você mesmo. O "eu do futuro" vai agradecer quando precisar lembrar por que diabos fez aquela gambiarra no microserviço de autenticação.

E a coisa mais importante: peça ajuda. Sempre. Não existe pergunta burra. Existe orgulho burro.

Com carinho,
O você do futuro (que ainda pesquisa coisas no Stack Overflow)`,
    authorName: "Thiago Santos",
    rating: 4.9,
    saves: 456,
    tags: ["Tecnologia", "Não-ficção", "Motivação"],
    createdAt: "2026-02-17T08:00:00Z",
  },
  {
    id: 10,
    title: "A Florista que Pintava com Flores",
    excerpt:
      "Helena não era uma florista comum. Seus arranjos contavam histórias, expressavam sentimentos que palavras não conseguiam traduzir. Até que um cliente misterioso pediu um arranjo impossível.",
    content: `Helena não era uma florista comum. Seus arranjos contavam histórias, expressavam sentimentos que palavras não conseguiam traduzir. Até que um cliente misterioso pediu um arranjo impossível.

A loja se chamava "Pétalas & Prosa" e ficava em uma rua de paralelepípedos no centro histórico de Ouro Preto. Era pequena — cabia no máximo cinco clientes ao mesmo tempo — mas cheirava a primavera o ano inteiro.

Helena herdou a loja da mãe, que herdou da avó, que herdou da bisavó. Quatro gerações de mulheres que falavam a linguagem das flores com fluência que nenhuma escola poderia ensinar.

Cada arranjo que Helena criava era único. Ela não seguia catálogos, não copiava tendências. Conversava com o cliente, olhava nos olhos, e depois — em silêncio — compunha. Rosas para saudade. Girassóis para recomeço. Lavanda para perdão. Cravos para coragem.

As pessoas diziam que os arranjos de Helena tinham poder. Casais que brigavam faziam as pazes ao receber suas flores. Doentes melhoravam. Solitários encontravam companhia. Não era magia — ou talvez fosse o tipo de magia que existe quando alguém faz algo com amor absoluto.

Numa terça-feira chuvosa de fevereiro, um homem entrou na loja. Alto, magro, olhos escuros como café sem açúcar. Ele não disse bom dia. Não olhou os arranjos prontos. Apenas colocou um bilhete no balcão e saiu.

Helena abriu o papel. Estava escrito em caligrafia trêmula: "Preciso de um arranjo que diga: eu te amei em todas as vidas."

Ela ficou parada, segurando o bilhete, sentindo o peso daquelas palavras. Em trinta anos de profissão, nunca havia recebido um pedido assim.

Naquela noite, Helena não dormiu. Ficou na loja, rodeada de flores, tentando encontrar a combinação perfeita. Experimentou centenas de arranjos. Nenhum parecia suficiente.

E então, às quatro da manhã, ela entendeu. O arranjo impossível não era sobre flores. Era sobre vazio. Sobre o espaço entre as pétalas. Sobre o que não se diz.`,
    authorName: "Camila Duarte",
    rating: 4.4,
    saves: 189,
    tags: ["Drama", "Romance", "Cultura"],
    createdAt: "2026-02-11T16:20:00Z",
  },
  {
    id: 11,
    title: "Manual de Sobrevivência para Introvertidos",
    excerpt:
      "Como sobreviver a festas corporativas, happy hours obrigatórios e colegas que acham que silêncio é sinônimo de tristeza. Um guia bem-humorado para quem prefere livros a multidões.",
    content: `Como sobreviver a festas corporativas, happy hours obrigatórios e colegas que acham que silêncio é sinônimo de tristeza. Um guia bem-humorado para quem prefere livros a multidões.

Capítulo 1: A Arte de Parecer Ocupado

O segredo número um de todo introvertido bem-sucedido é dominar a arte de parecer extremamente ocupado quando, na verdade, está apenas tentando evitar interação humana desnecessária.

O truque é simples: fones de ouvido. Mesmo que não esteja ouvindo nada. Fones de ouvido são o equivalente social de um "não perturbe" pendurado na porta. Invista em um modelo grande, visível, de preferência com cancelamento de ruído. Ninguém interrompe alguém usando fones gigantes.

Capítulo 2: Happy Hours e Outros Horrores

Quando o convite inevitável chegar — e vai chegar — você tem três opções:

1. A Saída Elegante: "Adoraria ir, mas tenho um compromisso." Nota: seu compromisso pode ser com o sofá e o Netflix. Ninguém precisa saber.

2. A Aparição Estratégica: Vá, fique vinte minutos, apareça em pelo menos uma foto, e saia. Ninguém nota que você foi embora se você cumprimentar as pessoas certas na chegada.

3. A Honestidade Brutal: "Não vou porque festas drenam minha energia vital." Essa opção é admirável, mas pode resultar em olhares de pena e convites ainda mais insistentes.

Capítulo 3: Reuniões que Poderiam Ser Emails

A maior inimiga do introvertido corporativo é a reunião desnecessária. Aquela que começa com "vamos alinhar" e termina duas horas depois com absolutamente nada alinhado.

Sua arma secreta: a câmera desligada no Zoom. "Estou com problemas de internet" é a frase mais poderosa do trabalho remoto. Use com sabedoria.`,
    authorName: "Ana Beatriz",
    rating: 4.3,
    saves: 267,
    tags: ["Lifestyle", "Não-ficção", "Cultura"],
    createdAt: "2026-02-09T13:45:00Z",
  },
  {
    id: 12,
    title: "O Jardim dos Relógios Parados",
    excerpt:
      "Em um vilarejo onde todos os relógios pararam no mesmo segundo, uma relojoeira tenta entender por que o tempo decidiu fazer uma pausa. O que ela descobre vai além de engrenagens e ponteiros.",
    content: `Em um vilarejo onde todos os relógios pararam no mesmo segundo, uma relojoeira tenta entender por que o tempo decidiu fazer uma pausa. O que ela descobre vai além de engrenagens e ponteiros.

Vila Perpétua era um lugar onde nada mudava. As casas eram as mesmas de cem anos atrás. As ruas tinham os mesmos buracos. As pessoas contavam as mesmas histórias nos mesmos bancos da mesma praça.

E todos os relógios marcavam 15:47.

Não importava se eram de pulso, de parede, digitais ou analógicos. Cuco ou quartzo. Novos ou antigos. Todos, sem exceção, paravam às 15:47 no exato momento em que entravam na vila.

Isabel era a última relojoeira de Vila Perpétua. Sua oficina ficava em um sobrado torto na Rua das Amendoeiras, e era o lugar mais bagunçado e mais mágico da cidade. Relógios de todos os tipos cobriam as paredes, e todos marcavam a mesma hora. Um coral silencioso de ponteiros congelados.

"Tempo não para", ela dizia para si mesma enquanto desmontava mais um mecanismo perfeito que se recusava a funcionar. "Tempo não pode parar."

Mas em Vila Perpétua, podia.

A lenda dizia que os relógios pararam no dia em que Dona Aurora morreu. Aurora era a matriarca da vila, uma mulher centenária que, segundo diziam, conversava com o vento e sabia o nome de cada estrela. Ela morreu às 15:47 de uma terça-feira de março, e naquele exato segundo, todos os relógios da vila suspiraram e pararam.

Isabel não acreditava em lendas. Acreditava em engrenagens, molas e cristais de quartzo. Então começou a investigar.

Desmontou trezentos relógios. Todos funcionavam perfeitamente — fora da vila. O problema não estava nos mecanismos. Estava no lugar.

Foi quando ela encontrou o diário de Dona Aurora escondido dentro de um relógio de pêndulo. E na primeira página, uma frase que mudou tudo:

"O tempo não parou. Eu apenas pedi para ele esperar."`,
    authorName: "Pedro Henrique",
    rating: 4.6,
    saves: 198,
    tags: ["Fantasia", "Mistério", "Drama"],
    createdAt: "2026-02-13T07:30:00Z",
  },
  {
    id: 13,
    title: "Debugando a Vida",
    excerpt:
      "E se você pudesse rodar um debugger na sua própria vida? Encontrar os breakpoints emocionais, as variáveis não inicializadas e os loops infinitos que te mantêm preso nos mesmos padrões?",
    content: `E se você pudesse rodar um debugger na sua própria vida? Encontrar os breakpoints emocionais, as variáveis não inicializadas e os loops infinitos que te mantêm preso nos mesmos padrões?

Linha 1: Nascimento. Estado inicial. Todas as variáveis zeradas. Memória limpa. Stack vazio.

Linha 7: Primeiro dia de escola. Exception não tratada: "MedoDeDesconhecidoException". Programa quase crashou, mas a professora implementou um try-catch com abraço e biscoito de chocolate.

Linha 15: Primeira paixão. Bug crítico: coração alocando 100% da memória para uma única variável. Performance do resto do sistema comprometida. Notas caíram. Apetite sumiu. Sono entrou em modo de espera.

Linha 18: Vestibular. Loop de ansiedade com condição de saída impossível. While(nervoso) { estudar(); chorar(); estudar(); dormir(2h); repeat; }

Linha 22: Primeiro emprego. Variável "confiança" inicializada com valor 0.1. Incremento lento. Muito lento. Cada code review era um garbage collector na autoestima.

Linha 25: Primeiro término. NullPointerException. Tentou acessar "futuro_juntos" e retornou null. Stack trace: 847 mensagens não respondidas, 23 playlists deletadas, 1 caixa de lembranças no fundo do armário.

Linha 28: Terapia. Finalmente instalou um debugger profissional. Descobriu que metade dos bugs eram features herdadas dos pais. Outra metade era código legado da adolescência que nunca foi refatorado.

Linha 30: Hoje. O programa ainda tem bugs. Muitos. Mas agora tem logging melhor, tratamento de erros mais robusto, e — o mais importante — um README que finalmente explica para que serve esse software.

Nota do desenvolvedor: Este programa está em desenvolvimento contínuo. Não existe versão final. E isso, surpreendentemente, é a melhor feature de todas.`,
    authorName: "Thiago Santos",
    rating: 4.8,
    saves: 389,
    tags: ["Tecnologia", "Não-ficção", "Motivação"],
    createdAt: "2026-02-06T19:00:00Z",
  },
  {
    id: 14,
    title: "Sabores de Tóquio",
    excerpt:
      "Três meses no Japão explorando a culinária que vai além do sushi. De ramen escondidos em becos de Shinjuku a cafés temáticos em Akihabara, uma viagem gastronômica inesquecível.",
    content: `Três meses no Japão explorando a culinária que vai além do sushi. De ramen escondidos em becos de Shinjuku a cafés temáticos em Akihabara, uma viagem gastronômica inesquecível.

Cheguei em Tóquio num domingo de chuva. O aeroporto de Narita me recebeu com eficiência cirúrgica — em quarenta minutos eu já estava no Narita Express rumo ao centro da cidade, hipnotizado pela paisagem que alternava entre campos de arroz e concreto futurista.

A primeira refeição foi em um combini — uma loja de conveniência 7-Eleven. Sim, eu sei. Mas ouça: onigiri de salmão grelhado de um 7-Eleven japonês é melhor que 90% dos restaurantes que você já visitou. Não é opinião. É fato.

Na primeira semana, encontrei meu lugar sagrado: um restaurante de ramen em Shinjuku chamado Fuunji. Ficava num subsolo, a fila dobrava o quarteirão, e o menu tinha exatamente uma opção: tsukemen. Macarrão grosso servido separado do caldo, que era tão concentrado e saboroso que eu quase chorei no primeiro gole.

O chef tinha setenta anos e fazia ramen há cinquenta. Todos os dias, a mesma receita. O mesmo caldo. O mesmo macarrão. Perfeição através da repetição — o conceito japonês de kodawari, a obsessão por fazer uma única coisa da melhor forma possível.

De Tóquio fui a Osaka, a capital da street food. Takoyaki em Dotonbori — bolinhas de polvo crocantes por fora, cremosas por dentro. Okonomiyaki em Shinsekai — uma panqueca recheada que parecia abraço em forma de comida. Kushikatsu em Shinimamiya — espetinhos fritos com uma regra sagrada: nunca mergulhe duas vezes no molho.

Em Quioto, a culinária era delicada como poesia. Kaiseki — a alta gastronomia japonesa — transformava cada refeição em uma obra de arte. Sete pratos minúsculos, cada um representando uma estação, uma emoção, uma filosofia.

O Japão me ensinou que cozinhar não é sobre quantidade de ingredientes ou complexidade de técnicas. É sobre respeito. Respeito pelo ingrediente, pelo processo, pelo tempo, e por quem vai comer.`,
    authorName: "Luísa Montenegro",
    rating: 4.5,
    saves: 276,
    tags: ["Culinária", "Viagem", "Cultura"],
    createdAt: "2026-02-07T14:15:00Z",
  },
  {
    id: 15,
    title: "A Equação de Sofia",
    excerpt:
      "Sofia era a matemática mais brilhante de sua geração. Quando descobriu uma equação que descrevia o comportamento humano com precisão assustadora, teve que decidir: publicar ou destruir?",
    content: `Sofia era a matemática mais brilhante de sua geração. Quando descobriu uma equação que descrevia o comportamento humano com precisão assustadora, teve que decidir: publicar ou destruir?

A equação nasceu por acidente, como a maioria das grandes descobertas. Sofia estava trabalhando em modelos de dinâmica de fluidos quando percebeu um padrão estranho: as mesmas equações que descreviam o fluxo de água em rios também descreviam o fluxo de pessoas em multidões.

Não era novidade — outros pesquisadores já haviam notado isso. Mas Sofia foi mais fundo. Muito mais fundo.

Ela coletou dados de redes sociais, padrões de consumo, registros eleitorais, movimentações financeiras. Alimentou tudo em seus modelos, ajustou variáveis, refinou parâmetros. E depois de dois anos de trabalho obsessivo, chegou a algo que não deveria existir.

Uma equação de quatro linhas que previa decisões humanas com 97.3% de precisão.

Não decisões simples como "o que almoçar" — decisões existenciais. Casamento. Divórcio. Mudança de carreira. Voto político. A equação de Sofia transformava seres humanos em variáveis previsíveis.

A princípio, ela ficou extasiada. Prêmio Nobel garantido. Revolução na sociologia, psicologia, economia. Seu nome nos livros de história.

Mas então começaram os pesadelos.

Sofia sonhava com um mundo onde governos usavam sua equação para manipular eleições. Onde empresas previam e exploravam fraquezas emocionais. Onde o livre-arbítrio se tornava uma ilusão estatisticamente comprovada.

Ela olhava para a equação no quadro branco do seu escritório — quatro linhas elegantes, quase bonitas na sua simplicidade — e se perguntava: uma ideia pode ser perigosa demais para existir?

Numa quinta-feira, às três da manhã, Sofia tomou sua decisão. Apagou os arquivos. Queimou os cadernos. Formatou o disco rígido. Quatro linhas que poderiam ter mudado o mundo desapareceram para sempre.

Ou quase. Porque Sofia não conseguiu apagar a equação da própria mente. E toda vez que olhava para alguém, não conseguia deixar de calcular.`,
    authorName: "Mariana Costa",
    rating: 4.7,
    saves: 321,
    tags: ["Ficção Científica", "Suspense", "Drama"],
    createdAt: "2026-02-04T21:00:00Z",
  },
  {
    id: 16,
    title: "A Casa das Sete Portas",
    excerpt:
      "Uma casa antiga com sete portas que nunca deveriam ser abertas ao mesmo tempo. Quando uma família se muda sem conhecer a regra, os segredos por trás de cada porta começam a vazar.",
    content: `Uma casa antiga com sete portas que nunca deveriam ser abertas ao mesmo tempo. Quando uma família se muda sem conhecer a regra, os segredos por trás de cada porta começam a vazar.

A casa ficava no final da Rua dos Ipês, escondida atrás de um muro de pedra coberto de musgo. Era bonita de um jeito inquietante — como um sorriso que não alcança os olhos.

A família Mendes comprou por um preço absurdamente baixo. "Deve ter infiltração", brincou Eduardo, o pai. "Ou fantasma", completou Alice, a filha de dezesseis anos, com um sorriso que era metade sarcasmo, metade esperança.

O corretor mencionou, quase como uma nota de rodapé, que a casa tinha sete portas internas que não deveriam ser abertas ao mesmo tempo. "Superstição dos antigos donos", ele disse, ajeitando a gravata. "Coisa de gente do interior."

Na primeira semana, tudo era normal. A casa era espaçosa, luminosa, com um jardim que parecia cuidar de si mesmo. As sete portas estavam espalhadas pela casa — duas no térreo, três no primeiro andar, uma no sótão e uma no porão.

Cada porta tinha uma fechadura diferente, e todas estavam trancadas quando a família chegou. As chaves estavam penduradas em um chaveiro antigo, cada uma com uma etiqueta numerada de 1 a 7.

Alice abriu a primeira porta num sábado à tarde. Atrás dela, um cômodo vazio com paredes cobertas de espelhos. Seu reflexo sorria quando ela não sorria.

Eduardo abriu a segunda na terça-feira. Um escritório com uma mesa antiga e um diário aberto na última página. A caligrafia era idêntica à dele.

Marina, a mãe, abriu a terceira na quarta-feira. Uma cozinha que cheirava à comida da sua infância — o arroz queimado da sua avó, o café do seu pai.

Na quinta-feira, as crianças menores abriram a quarta e a quinta. Na sexta, Eduardo abriu a sexta.

Seis portas abertas. E a casa começou a mudar.

Os cômodos trocavam de lugar durante a noite. A escada levava a andares que não existiam. O jardim florescia e morria em questão de horas. E de trás da sétima porta — a do porão — vinha um som.

Alguém batendo. De dentro para fora.`,
    authorName: "Fernanda Oliveira",
    rating: 4.3,
    saves: 245,
    tags: ["Mistério", "Suspense", "Fantasia"],
    createdAt: "2026-02-03T15:30:00Z",
  },
  {
    id: 17,
    title: "Rodas e Sonhos: Uma História sobre Skate",
    excerpt:
      "Do primeiro ollie torto aos campeonatos amadores, a história de como quatro rodas e uma tábua de madeira salvaram um adolescente da periferia de São Paulo.",
    content: `Do primeiro ollie torto aos campeonatos amadores, a história de como quatro rodas e uma tábua de madeira salvaram um adolescente da periferia de São Paulo.

Meu primeiro skate era uma tábua de compensado com rodas de carrinho de supermercado. Não estou exagerando. Meu tio Zé, que consertava tudo e não jogava nada fora, montou aquilo numa tarde de sábado usando cola, pregos e uma criatividade que só a necessidade produz.

"Não é um skate de verdade", ele disse, me entregando aquela coisa torta e barulhenta. "Mas vai servir pra começar."

Eu tinha onze anos e morava na Vila Brasilândia, zona norte de São Paulo. Skate era algo que eu via na TV — gringos louros fazendo manobras impossíveis em pistas perfeitas de concreto liso. Na minha rua, o asfalto era tão esburacado que andar em linha reta já era uma conquista.

Mas eu andei. Todo dia. Depois da escola, em vez de ficar na esquina — onde os convites para caminhos errados eram constantes e insistentes — eu pegava minha tábua torta e ia para o estacionamento vazio do supermercado fechado.

O chão era liso ali. E era meu.

O primeiro ollie levou três meses. Três meses de joelhos ralados, canelas roxas e quedas que faziam os vizinhos rirem. "Esse menino é doido", dona Marlene dizia da janela. Eu concordava.

Aos treze, consegui meu primeiro skate de verdade. Um usado, comprado com o dinheiro de seis meses vendendo bala no semáforo. Era um shape desgastado com trucks soltos e rodas gastas, mas para mim era uma Ferrari.

Aos quinze, entrei no meu primeiro campeonato amador. Cheguei em último. Mas cheguei.

Aos dezessete, ganhei meu primeiro troféu. Pequeno, de plástico dourado, com uma plaquinha que dizia "3º lugar — Campeonato Amador Zona Norte". Está até hoje na estante da minha mãe, entre o porta-retrato do meu avô e a imagem de Nossa Senhora.

O skate não me tirou da periferia. A periferia é parte de mim e eu não quero ser tirado dela. O que o skate fez foi me mostrar que eu podia voar — mesmo que fosse só quinze centímetros acima do chão.`,
    authorName: "Carlos Silva",
    rating: 4.4,
    saves: 198,
    tags: ["Não-ficção", "Motivação", "Memórias"],
    createdAt: "2026-02-01T12:00:00Z",
  },
];

export const ALL_TAGS = [
  "Todos",
  "Ficção Científica",
  "Tecnologia",
  "Suspense",
  "Não-ficção",
  "Viagem",
  "Lifestyle",
  "Fantasia",
  "Mistério",
  "Drama",
  "Culinária",
  "Memórias",
  "Cultura",
  "Romance",
  "Empreendedorismo",
  "Motivação",
];

export function getStoryById(id: string): Story | undefined {
  return MOCK_STORIES.find((story) => story.id === Number(id));
}

export function getStoriesByAuthor(authorName: string): Story[] {
  return MOCK_STORIES.filter(
    (story) => story.authorName.toLowerCase() === authorName.toLowerCase(),
  );
}

export function getUniqueAuthors(): string[] {
  return [...new Set(MOCK_STORIES.map((story) => story.authorName))];
}
