// Todos os textos, links e imagens do site ficam aqui.
export const clinic = {
  name: "Angélica Thiengo Machado",
  role: "Psicanalista",
  registry: "SBP/ES 21000234",
  // Telefone do perfil no Doctoralia: (21) 99731-8544
  whatsapp: "5521997318544",
  whatsappMessage: "Olá, Angélica! Vim pelo seu site e gostaria de agendar uma consulta.",
  instagram: "@angelicathiengo_psi",
  instagramUrl: "https://www.instagram.com/angelicathiengo_psi",
  doctoraliaUrl: "https://www.doctoralia.com.br/angelica-thiengo-machado/psicanalista-terapeuta-complementar/niteroi",
  mapsUrl: "https://www.google.com/maps/place/Espa%C3%A7o+Terap%C3%AAutico+Equil%C3%ADbrio+e+Afeto/data=!4m2!3m1!1s0x0:0x8ce8f80c33d4f44a?sa=X&ved=1t:2428&ictx=111",
  // Link oficial do Google Meu Negócio que abre direto a tela de escrever avaliação.
  googleReviewUrl: "https://g.page/r/CUr01DMM-OiMEAI/review",
  address: "Avenida Ewerton Xavier, 2101/sl. 227 - Itaipu - Niterói-RJ · CEP 24340-105 · Shopping Ibiza",
  office: "Espaço Terapêutico Equilíbrio e Afeto",
  mapEmbed: "https://www.google.com/maps?q=Avenida+Ewerton+Xavier+2101+Shopping+Ibiza+Itaipu+Niteroi+RJ&output=embed",
  // Vídeo POV do consultório: coloque o arquivo em public/video/consultorio.mp4
  // (ou cole um link do YouTube). Deixe vazio para mostrar o espaço reservado.
  video: { src: "/video/consultorio.mp4", poster: "/img/video-poster.webp", title: "Conheça o consultório por dentro" },
  images: {
    heroHd: "/img/angelica-hd.webp",
    hero: "/img/angelica.webp",
    heroSm: "/img/angelica-360.webp",
    heroHdSm: "/img/angelica-hd-420.webp",
    office: "/img/consultorio.webp",
    faqBg: "/img/consultorio.webp",
  },
};

export const heroBadges = ["26 avaliações Doctoralia (Nota 5.0)", "Registro SBP/ES 21000234", "Desde 2021"];

export const symptoms = [
  { icon: "heart", title: "Crises de Ansiedade e Pânico", text: "A sensação constante de aperto no peito, pensamentos acelerados e o medo recorrente de perder o controle." },
  { icon: "cloud", title: "Depressão e Vazio Profundo", text: "A falta de energia para o dia a dia, a perda de sentido nas conquistas e o desânimo silencioso." },
  { icon: "heartcrack", title: "Conflitos de Relacionamento", text: "Dificuldades de comunicação no casal, dependência afetiva, medo do abandono e desgaste de respeito mútuo." },
  { icon: "paw", title: "Processos de Luto e Perdas", text: "A dor de uma despedida dolorosa de um ente querido, término, ou o luto profundo por um animal de estimação (pet)." },
  { icon: "smile", title: "Baixa Autoestima e Autocobrança", text: "Sensação persistente de insuficiência, necessidade de agradar a todos e sacrifício da própria identidade." },
  { icon: "infinity", title: "Sintomas Psicossomáticos e Estresse", text: "O corpo expressando em tensões, insônias e dores físicas aquilo que a mente não consegue colocar em palavras." },
];

export const about = {
  title: "Olá, sou **Angélica** Thiengo Machado",
  lead: "Psicanalista clínica, com especialização **Junguiana** e registro SBP/ES 21000234, dedicada a um atendimento humano, empático e de **total sigilo**.",
  paragraphs: [
    "Também sou formada em **Gestão de Recursos Humanos** pela Universidade Estácio de Sá, em Niterói - RJ, o que amplia meu olhar sobre pessoas, relações e ambientes de trabalho.",
    "Minha missão como Psicanalista é promover o **autoconhecimento** e o equilíbrio emocional, acolhendo a história de cada paciente e interpretando os conteúdos inconscientes de palavras, ações e sonhos.",
    "Atuo com base na **análise Junguiana** e na **abordagem sistêmica familiar**, duas lentes que se complementam para olhar a sua mente profunda sem esquecer o contexto e a história de onde você veio.",
    "O atendimento é estruturado tanto de forma presencial no Espaço Terapêutico Equilíbrio e Afeto, em Niterói, quanto **online** via Google Meet com flexibilidade para pacientes em todo o Brasil e no exterior.",
  ],
  quote: "Domine todas teorias, domine todas as técnicas, mas ao tocar uma alma humana, seja apenas outra **alma humana**.",
  quoteAuthor: "Carl G. Jung",
  training: [
    "Formação em Psicanálise Clínica · Sociedade Brasileira de Psicanálise-ES",
    "Especialização Junguiana · Sociedade Brasileira de Psicanálise-ES",
    "Tenho formação em Terapia Sistêmica Familiar, pela Academia Internacional de Ciências Sistêmicas, em que o foco é na compreensão de indivíduos, casais e famílias a partir de seus contextos relacionais.",
    "Curso de Terapia Transpessoal e Interpretação dos Sonhos · SBP-ES",
    "Curso Superior de Tecnologia em Gestão de Recursos Humanos · Universidade Estácio de Sá, Niterói - RJ",
  ],
  tags: ["Psicanálise Clínica", "Análise Junguiana", "Terapia Transpessoal", "Interpretação dos Sonhos", "Acompanhamento Terapêutico", "Luto por Pets", "Gestão de Pessoas (RH)"],
};

export const services = [
  { title: "Consulta Psicanalítica Junguiana", price: "R$ 150", priceNote: "Sessão avulsa", unit: "50 min · Semanal", packageNote: "Pacote mensal: sob consulta", text: "Aprofundamento na interpretação dos conteúdos inconscientes, tratamento de ansiedade, depressão, fobias e fortalecimento da autonomia emocional.", mode: "Presencial em Niterói (Itaipu) e online" },
  { title: "Terapia sistêmica familiar", price: "R$ 150", priceNote: "Sessão avulsa", unit: "50 min · Semanal", packageNote: "Pacote mensal: sob consulta", text: "Compreende a pessoa dentro dos sistemas relacionais dos quais ela faz parte — principalmente a família — considerando que seus comportamentos, emoções e dificuldades podem estar relacionados às dinâmicas, vínculos, padrões e histórias familiares.", mode: "Presencial em Niterói (Itaipu) e online" },
  { title: "Suporte ao Luto e Luto Pet", price: "R$ 150", priceNote: "Sessão avulsa", unit: "50 min · Semanal", packageNote: "Pacote mensal: sob consulta", text: "Espaço de acolhimento sensível para a dor da perda de pessoas queridas ou de animais de estimação, validando sentimentos sem julgamentos.", mode: "Presencial em Niterói (Itaipu) e online" },
];

export const included = [
  { icon: "shield", title: "Sigilo Total e Ética", text: "Ambiente estritamente confidencial garantido pelo código deontológico psicanalítico." },
  { icon: "users", title: "Escuta Humanizada e Acolhedora", text: "Espaço seguro onde você pode ser você mesmo, sem pressa, sem críticas ou julgamentos." },
  { icon: "compass", title: "Processo Personalizado", text: "Cada história é única. O ritmo do tratamento respeita sua singularidade e seus limites." },
];

export const benefits = [
  { icon: "bulb", title: "Clareza sobre si mesmo", text: "Compreenda a raiz de comportamentos e reações automáticas, resgatando a **clareza** sobre quem você é de verdade." },
  { icon: "users", title: "Relações mais conscientes e saudáveis", text: "Reconheça limites, cure padrões de dependência afetiva e cultive vínculos baseados em **afeto genuíno**." },
  { icon: "lotus", title: "Menos peso, mais serenidade diária", text: "Aprenda a lidar com as pressões internas, aliviando o excesso de **autocobrança** e a angústia constante." },
  { icon: "sprout", title: "Autonomia emocional e força interior", text: "Desenvolva recursos internos para tomar decisões com segurança e viver a vida com protagonismo e **paz de espírito**." },
];

export const testimonials = [
  { name: "Erika", text: "A Angélica é uma ótima profissional, atenciosa e pontual. Muito grata por tê-la encontrado! Obrigada por tanto acolhimento." },
  { name: "Rafael Gonçalves", text: "Profissional fantástica! Esclarece e desenvolve muito bem os pontos trazidos na sessão. É atenciosa, acolhedora, direta e profunda nas análises. Cada sessão é sempre um ganho." },
];

// TODO: confirmar/ajustar as respostas (só a primeira veio do layout aprovado)
export const faq = [
  { q: "Como funciona a minha abordagem clínica?", a: "No meu consultório, o seu processo terapêutico é conduzido através de duas grandes lentes que se complementam perfeitamente: a análise Junguiana e a abordagem sistêmica familiar.\n\nAtravés da visão de Carl Jung, mergulhamos no seu inconsciente, olhando para os seus sonhos, complexos e o seu processo de busca por quem você realmente é (individuação).\n\nParalelamente, com a minha formação pela Academia Internacional de Ciências Sistêmicas, trago o olhar da terapia sistêmica.\n\nUnir essas duas frentes significa olhar para a sua mente profunda sem esquecer o contexto e a história de onde você veio. É um convite para decifrar a si mesmo e se reconciliar com as suas raízes." },
  { q: "Qual a diferença entre psicanálise e terapia tradicional?", a: "A psicanálise vai além dos sintomas imediatos: ela busca compreender a origem inconsciente dos sentimentos, traumas e padrões repetitivos que você vive, promovendo uma transformação duradoura." },
  { q: "Como funcionam as sessões?", a: "As sessões têm duração de 50 minutos. Na primeira consulta conhecemos sua história e suas principais queixas, e a partir dela combinamos o ritmo do acompanhamento, geralmente semanal." },
  { q: "Você atende online? Funciona tão bem quanto presencial?", a: "Sim. O atendimento online é feito por Google Meet, com a mesma escuta e profundidade do presencial, e atende pacientes em todo o Brasil e no exterior." },
  { q: "Quanto tempo dura um processo terapêutico?", a: "Não há um prazo fixo. Cada processo respeita a singularidade e o ritmo de quem se analisa, e a duração é conversada e reavaliada ao longo do caminho." },
  { q: "Qual o valor das consultas e formas de pagamento aceitas?", a: "A sessão de 50 minutos custa R$ 150. Fale comigo pelo WhatsApp para conhecer as formas de pagamento." },
  { q: "Aceita planos de saúde ou convênios médicos?", a: "O atendimento é particular. Consulte pelo WhatsApp sobre a emissão de recibo para eventual solicitação de reembolso ao seu plano." },
  { q: "Como faço para marcar uma consulta ou primeira conversa?", a: "É só chamar pelo WhatsApp. A primeira conversa é sem compromisso, para tirarmos dúvidas e escolhermos o melhor horário e formato." },
  { q: "Como funciona o sigilo e a privacidade das sessões?", a: "Tudo o que é dito nas sessões é estritamente confidencial, protegido pelo código de ética da prática psicanalítica." },
];

export const modalities = [
  "Presencial: Niterói - RJ (Itaipu, com estacionamento e acessibilidade)",
  "Online: Todo o Brasil e brasileiros no exterior via Google Meet",
  "Atendimento para adultos e suporte especializado ao luto",
];

export const waLink = (msg = clinic.whatsappMessage) =>
  `https://wa.me/${clinic.whatsapp}?text=${encodeURIComponent(msg)}`;

// Redes sociais: só aparecem no site as que tiverem url preenchida.
export const socials = [
  { id: "instagram", label: "Instagram", url: clinic.instagramUrl },
  { id: "facebook", label: "Facebook", url: "https://www.facebook.com/juntoscomoevangelho" },
  { id: "youtube", label: "YouTube", url: "https://www.youtube.com/@angelicathiengopsicanalista" },
  { id: "tiktok", label: "TikTok", url: "https://www.tiktok.com/@angelicathiengo_psi" },
  { id: "linkedin", label: "LinkedIn", url: "" },
];

// Caixa de informações da seção inicial (versão PC). TODO: confirmar horários reais.
export const infoCard = {
  rating: "5.0",
  reviews: "26 avaliações verificadas no Doctoralia",
  rows: [
    { label: "Horário de atendimento", value: "Sob agendamento" },
    { label: "Sessão", value: "50 minutos · R$ 150" },
    { label: "Modalidades", value: "Presencial em Itaipu · Online" },
    { label: "Atendimento", value: "Adultos · Brasil e exterior" },
  ],
};


// ---------- Página "Formação e trajetória" (/formacao) ----------
export const approach = {
  eyebrow: "Minha abordagem",
  title: "Como funciona a minha abordagem clínica?",
  intro: "No meu consultório, o seu processo terapêutico é conduzido através de **duas grandes lentes** que se complementam perfeitamente: a análise Junguiana e a abordagem sistêmica familiar.",
  lenses: [
    {
      kicker: "A lente da mente profunda",
      name: "Análise Junguiana",
      text: "Através da visão de Carl Jung, mergulhamos no seu inconsciente, olhando para os seus sonhos, complexos e o seu processo de busca por quem você realmente é (individuação).",
      chips: ["Sonhos", "Complexos", "Individuação"],
    },
    {
      kicker: "A lente das suas raízes",
      name: "Abordagem sistêmica familiar",
      text: "Paralelamente, com a minha formação pela Academia Internacional de Ciências Sistêmicas, trago o olhar da terapia sistêmica: a compreensão de indivíduos, casais e famílias a partir de seus contextos relacionais.",
      chips: ["Indivíduos", "Casais", "Famílias"],
    },
  ],
  closing: "Unir essas duas frentes significa olhar para a sua **mente profunda** sem esquecer o contexto e a história de onde você veio. É um convite para decifrar a si mesmo e se reconciliar com as suas **raízes**.",
};

// Para esconder um certificado, apague a linha "image" (ou o item em "extras").
export const credentials = [
  {
    id: "clinico",
    period: "Out/2023",
    title: "Psicanalista Clínico",
    org: "Sociedade Brasileira de Psicanálise (SBP)",
    detail: "Formação em Psicanálise Clínica, a base de tudo: o estudo de Freud e da clínica psicanalítica, com análise individual e estágio supervisionado. Título de Psicanalista Clínico, amparado pela Classificação Brasileira de Ocupações (CBO 2515-50).",
    hours: "420h",
    image: "/img/cert/psicanalista-clinico.webp",
    extras: [{ label: "Grade curricular", image: "/img/cert/grade-psicanalise.webp" }],
  },
  {
    id: "junguiana",
    period: "Mar/2024 – Fev/2026",
    title: "Especialização Junguiana",
    org: "Sociedade Brasileira de Psicanálise (SBP)",
    detail: "Especialização que aprofunda a psicanálise a partir de Jung · título de Especialista Junguiano.",
    hours: "360h",
    image: "/img/cert/junguiana.webp",
  },
  {
    id: "sistemica",
    period: "Abr/2025 – Nov/2025",
    title: "Formação em Terapia Sistêmica Familiar",
    org: "Academia Internacional de Ciências Sistêmicas (AICS)",
    detail: "Níveis Básico e Avançado · formação híbrida (presencial e EAD). Foco na compreensão de indivíduos, casais e famílias a partir de seus contextos relacionais.",
    hours: "400h",
    image: "/img/cert/sistemica-aics.webp",
    extras: [{ label: "Básico", image: "/img/cert/sistemica-aics-basico.webp", thumb: true }],
    imageLabel: "Avançado",
  },
  {
    id: "transpessoal",
    period: "Complementar",
    title: "Terapia Transpessoal e Interpretação dos Sonhos",
    org: "Sociedade Brasileira de Psicanálise-ES",
    detail: "Cursos complementares que ampliam a escuta clínica.",
    hours: "",
    image: "",
  },
  {
    id: "rh",
    period: "2009",
    title: "Tecnólogo em Gestão de Recursos Humanos",
    org: "Universidade Estácio de Sá · Niterói - RJ",
    detail: "Formação acadêmica tradicional, que amplia o olhar sobre pessoas, relações e ambientes de trabalho. Não exerço a profissão.",
    hours: "",
    image: "/img/cert/rh-estacio.webp",
  },
];

export const pageStats = [
  { value: "420h", label: "Formação em Psicanálise Clínica" },
  { value: "360h", label: "Especialização Junguiana" },
  { value: "400h", label: "Formação em Terapia Sistêmica" },
  { value: "5.0", label: "26 avaliações no Doctoralia" },
];
