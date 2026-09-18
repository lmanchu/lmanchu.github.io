// 全站共用的身分資料。講者介紹等文字沿用 2026-09-14 上線、已核對過的講者頁；改生平前先確認原始資料。
export const site = {
  url: 'https://lmanchu.github.io',
  name: { zh: '朱宜振', en: 'Lman Chu' },
  title: { zh: 'IrisGo.AI 共同創辦人暨營運長', en: 'Co-founder & COO, IrisGo.AI' },
  tagline: {
    zh: '連續創業三十年，從 1994 年的校園 BBS 一路走到 Agentic AI。',
    en: 'Thirty years of building, from a 1994 campus bulletin board to agentic AI.',
  },
  // 首頁標題卡的斷行版本
  heroTitle: { zh: ['連續創業', '三十年。'], en: ['Thirty years', 'of building.'] },
  heroSub: {
    zh: '從 1994 年的校園 BBS 一路走到 Agentic AI。',
    en: 'From a 1994 campus bulletin board to agentic AI.',
  },
  // 草稿：待 Lman 定稿
  now: [
    {
      zh: '在 IrisGo.AI 打造 AI PC 的系統層：示範一次工作流程，它就學會。',
      en: "At IrisGo.AI, I'm building the system layer of the AI PC: show it a workflow once, and it learns.",
    },
    {
      zh: '到學校、企業與創業社群，談 AI 會怎麼改變工作。',
      en: "I'm talking with students, companies and founder communities about how AI will change work.",
    },
    {
      zh: '把跟 AI 一起工作的方法與翻車，寫成筆記。',
      en: "I'm writing down how I work with AI, including what broke.",
    },
  ],
  contacts: [
    { label: 'EMAIL', text: 'Lman.chu@gmail.com', href: 'mailto:Lman.chu@gmail.com' },
    { label: 'LINKEDIN', text: '/in/lmanchu', href: 'https://www.linkedin.com/in/lmanchu', rel: 'me noopener' },
    { label: 'X', text: '@lmanchu', href: 'https://x.com/lmanchu', rel: 'me noopener' },
    { label: 'IRISGO', text: 'irisgo.ai', href: 'https://irisgo.ai', rel: 'noopener' },
  ],
};

// 組織 → 官網。2026-09-18 逐一開啟確認過確實是該段經歷的那一家，才列在這裡。
// 刻意不列（查不到可信官網，維持純文字）：
//   南星創速器 SSX  southstarx.com 是 2024 年註冊的 GoDaddy 停車頁，與本人無關
//   MOX 加速器      mox.vc 已易主為日本個人開發者；sosv.com/mox 導向 SOSV 通用頁
//   夢之大地 BBS    無官網，中文維基亦無條目
//   南京資訊        查無
// 刻意不列（2026-09-18 決定）：Intel、Acer —— 合作關係加上官網連結會讀起來像對方背書。
export const orgs = [
  { href: 'https://irisgo.ai', zh: ['IrisGo.AI', 'IrisGo'], en: ['IrisGo.AI', 'IrisGo'] },
  { href: 'https://aifund.ai', zh: ['AI Fund'], en: ['AI Fund'] },
  { href: 'https://www.tallgeese.ai', zh: ['Tallgeese AI'], en: ['Tallgeese AI'] },
  { href: 'https://biilabs.io', zh: ['BiiLabs'], en: ['BiiLabs'] },
  { href: 'https://www.lileesystems.com', zh: ['LILEE Systems'], en: ['LILEE Systems'] },
  { href: 'https://www.adlinktech.com', zh: ['凌華科技'], en: ['ADLINK'] },
  { href: 'https://www.kontron.com', zh: ['Kontron Asia', 'Kontron'], en: ['Kontron Asia', 'Kontron'] },
  { href: 'https://www.bnext.com.tw', zh: ['數位時代'], en: ['Business Next'] },
  { href: 'https://www.ccns.io', zh: ['電腦網路愛好社 CCNS', 'CCNS'], en: ['Computer Network Club (CCNS)', 'CCNS'] },
];

// 年表：新 → 舊。kind: milestone | origin
export const timeline = [
  {
    year: '2024',
    kind: 'milestone',
    title: { zh: '共同創辦 IrisGo.AI，任營運長', en: 'Co-founded IrisGo.AI, COO' },
    desc: {
      zh: '先以 Founder in Residence 身分在 AI Fund 驗證題目半年。種子輪 US$3.1M 由 AI Fund 領投。',
      en: 'Validated the idea for six months as a Founder in Residence at AI Fund first. US$3.1M seed round led by AI Fund.',
    },
  },
  {
    year: '2023',
    kind: 'milestone',
    title: { zh: '共同創辦 Tallgeese AI', en: 'Co-founded Tallgeese AI' },
    desc: { zh: '企業隱私優先的 AI 方案。', en: 'Privacy-first AI for enterprises.' },
  },
  {
    year: '2017',
    kind: 'milestone',
    title: { zh: '共同創辦 BiiLabs', en: 'Co-founded BiiLabs' },
    desc: { zh: '以分散式帳本解決物聯網的信任問題。', en: 'Distributed-ledger trust for IoT.' },
  },
  {
    year: '2014',
    kind: 'milestone',
    title: { zh: '成立南星創速器 SSX', en: 'Started SouthStar Xelerator (SSX)' },
    desc: { zh: '投入科技新創育成。', en: 'A tech startup accelerator.' },
  },
  {
    year: '2008',
    kind: 'milestone',
    title: { zh: '加入 LILEE Systems 創始團隊', en: 'Joined the founding team of LILEE Systems' },
    desc: {
      zh: '建立超過 50 人的跨領域團隊，就此跨入創新創業。',
      en: 'Built a cross-functional team of more than 50 people. This is when I moved into startups.',
    },
  },
  {
    year: '2004',
    kind: 'milestone',
    title: { zh: '硬體產品經理十五年以上', en: 'Fifteen-plus years in hardware product management' },
    desc: {
      zh: '凌華科技、南京資訊、Kontron Asia。經手產品獲 2004、2005 台灣精品獎，2004 Computex 台灣最佳外銷資訊產品獎。',
      en: 'ADLINK, Kontron Asia and others. Products won the Taiwan Excellence Award in 2004 and 2005, and a Computex best exported IT product award in 2004.',
    },
  },
  {
    year: '1994',
    kind: 'origin',
    title: { zh: '創辦成大電腦網路愛好社 CCNS', en: 'Founded CCNS at National Cheng Kung University' },
    // CRT 畫面逐行顯示
    lines: {
      zh: ['任創社社長，將夢之大地 BBS 移入 CCNS，', '後成為台灣前三大 BBS 站。'],
      en: ['First president; brought the DreamLand BBS into the club,', "where it became one of Taiwan's three largest."],
    },
  },
];

export const alsoRoles = {
  zh: '數位時代創新顧問、專欄作家；MOX 加速器 Mentor。',
  en: 'Innovation advisor and columnist, Business Next; mentor, MOX accelerator.',
};

export const topics = [
  {
    t: { zh: 'AI 會怎麼改變你的工作', en: 'How AI will change your work' },
    d: { zh: '從會聊天的 AI，到會替你動手的 agent。', en: 'From AI that chats to agents that act for you.' },
  },
  {
    t: { zh: '創業三十年：從校園 BBS 到 Agentic AI', en: 'Thirty years of building' },
    d: { zh: '每一次轉彎學到什麼，哪些是運氣、哪些是準備。', en: 'From a campus BBS to agentic AI, and what each turn taught.' },
  },
  {
    t: { zh: '台灣團隊怎麼走進 AI Fund', en: 'A Taiwan team inside AI Fund' },
    d: { zh: '先驗證題目再成立公司，矽谷與台灣怎麼接起來。', en: 'Validating before incorporating, and bridging Silicon Valley and Taiwan.' },
  },
  {
    t: { zh: 'AI Native 公司怎麼運作', en: 'How an AI-native company runs' },
    d: { zh: '一個人，太多前線：跟 agent 一起工作的方法與翻車。', en: 'One person, too many fronts: working with agents, including what broke.' },
  },
];

export const photos = [
  { web: '/photos/lman-stage-web.jpg', full: '/photos/lman-stage.jpg', w: 960, h: 640, dim: '3374×2249', pos: '61% 30%',
    label: { zh: '演講', en: 'On stage' }, alt: '朱宜振在 AI 創新交流會台上分享' },
  { web: '/photos/lman-outdoor-1-web.jpg', full: '/photos/lman-outdoor-1.jpg', w: 720, h: 960, dim: '2316×3088',
    label: { zh: '人像', en: 'Portrait' }, alt: '朱宜振 戶外人像' },
  { web: '/photos/lman-outdoor-2-web.jpg', full: '/photos/lman-outdoor-2.jpg', w: 720, h: 960, dim: '2316×3088',
    label: { zh: '人像 2', en: 'Portrait 2' }, alt: '朱宜振 戶外人像側面' },
];
