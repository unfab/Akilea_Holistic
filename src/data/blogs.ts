export interface BlogPost {
  slug: string;
  title: string;
  author: string;
  date: string;
  readTime: string;
  category: string;
  image: string;
  excerpt: string;
  paragraphs: {
    type: "p" | "quote" | "list" | "highlight";
    content: string | string[];
  }[];
}

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "brez-ljubezni-mi-ziveti-ni",
    title: "“Brez ljubezni mi živeti ni…”",
    author: "Mirjana Groznik",
    date: "30. april 2026",
    readTime: "3 min",
    category: "Odnosi & Ljubezen",
    image: "https://static.wixstatic.com/media/dfaf38_a0bc3f19155947b6b1c3e2c9a4aa3f6b~mv2.jpeg/v1/fill/w_800,h_1000,al_c,q_85,usm_0.66_1.00_0.01/dfaf38_a0bc3f19155947b6b1c3e2c9a4aa3f6b~mv2.jpeg",
    excerpt: "Ljubezen – najmočnejša sila v Vesolju. A zakaj se v partnerskih odnosih tako pogosto vklopi strah, obrambni mehanizem in občutek, da si ljubezni ne zaslužimo?",
    paragraphs: [
      {
        type: "p",
        content: "Ljubezen – najmočnejša sila v Vesolju. Ljubezen v vseh oblikah in odnosih. SSKJ (Slovar slovenskega knjižnega jezika) ljubezen opredeljuje kot psihološko in čustveno stanje, ki vključuje navezanost, skrb in željo po bližini. Duhovni pogled pa na ljubezen gleda širše, kot nekaj, kar presega posameznika in deluje kot povezovalna sila vseh z vsemi.",
      },
      {
        type: "p",
        content: "A kako se ljubezen odraža v romantičnih, partnerskih odnosih?",
      },
      {
        type: "quote",
        content: "»Zaslužiš si ljubezen. Vredna si ljubezni. Ne sprejemaj drobtinic.«",
      },
      {
        type: "p",
        content: "Družbena omrežja so polna takih in podobnih motivacijskih izjav na prelepih podlagah. Prebereš, za delček sekunde jim pritrdiš, a v naslednji se telo odzove z iritacijo in mislijo »ja, ja, seveda, lahko govoriti…« – vklopi se obrambni mehanizem. Srce se stisne, bolečina duše se poglobi.",
      },
      {
        type: "p",
        content: "Ena od strank je tako lepo rekla: »Vse lahko naredim, ni problema, ampak odnosi… odnosi so mi pa najtežji, najbolj utrujajoči.« In ne bi se mogla bolj strinjati z njo. V mislih je imela vse odnose, a danes se bom osredotočila na partnerske.",
      },
      {
        type: "p",
        content: "Vsi si želimo ljubiti in biti ljubljeni. Lahko to z razumom zanikamo, a duša ne laže, telo prav tako ne. Zakaj je to potem tako težko?\n\n• Zato, ker svojo vrednost iščemo v očeh drugih.\n• Zato, ker iščemo potrditev, da si »zaslužimo« ljubezen.\n• Zato, ker iščemo potrditev, da če si bomo dovolili biti dovolj ranljivi in si dovolili nekoga ljubiti, da to ne bo prineslo bolečine.\n• Zato, ker morda niti ne vemo, kaj prava ljubezen sploh je, kaj pomeni, če te ima nekdo res rad, če te želi osrečiti, ti pomagati, biti podpora, če želi, da zares delujeta kot »midva«.",
      },
      {
        type: "highlight",
        content: "»Želim si, a si ne želim… je preveč boleče.« Tako bi lahko povzela sporočila iz intuitivnih masaž. Velja tako za ženske kot za moške. Na ravni duše ni razlik.",
      },
      {
        type: "p",
        content: "Najpogostejša sporočila teles, ki sem jih do sedaj prejela na intuitivnih masažah:",
      },
      {
        type: "list",
        content: [
          "Ne zaslužim si ljubezni",
          "Kdo me bo pa imel rad?",
          "Nisem vredna / vreden ljubezni",
          "Ne znam ljubiti",
          "Ljubezen prinaša samo bolečino",
          "Nimam časa za ljubezen",
        ],
      },
      {
        type: "p",
        content: "A pod temi sporočili in prepričanji, ki so tako globoko zarezani v telo, so še globlje korenine: bolečina zaradi čustvene odsotnosti očeta ali mame, občutek manjvrednosti, strah pred izgubo nadzora ali prepričanje, da moramo za vse poskrbeti sami.",
      },
      {
        type: "p",
        content: "Tudi ko končno srečamo partnerja, ob katerem se imamo lepo, se pogosto vklopi samosabotaža – čakanje, da bo nekaj šlo narobe, ker je »preveč lepo, da bi bilo res«. Ravno zato je tako pomembno skozi intuitivno masažo ta potlačena čustva nežno ozavestiti in jih spustiti.",
      },
      {
        type: "quote",
        content: "»Znam in zmorem ljubiti. Sprejemam ljubezen v vseh oblikah, varna sem. Hvaležna za ljubezen in pozornost.«",
      },
      {
        type: "p",
        content: "Kakšne so tvoje izkušnje z ljubeznijo? Če čutiš, da bi na svoji poti potrebovala podporo in varen prostor za sprostitev, te toplo vabim na intuitivno masažo v Holistični center Akilea.",
      },
    ],
  },
  {
    slug: "notranji-otrok-kako-jih-vidim-jaz-na-intuitivnih-masazah",
    title: "»Notranji otrok – kako jih vidim jaz na intuitivnih masažah«",
    author: "Mirjana Groznik",
    date: "16. marec 2026",
    readTime: "4 min",
    category: "Intuitivna masaža & Telo",
    image: "https://static.wixstatic.com/media/dfaf38_3dde454674654e2f8cd0cecf1837fd2e~mv2.jpeg/v1/fill/w_667,h_1000,al_c,q_85,usm_0.66_1.00_0.01/dfaf38_3dde454674654e2f8cd0cecf1837fd2e~mv2.jpeg",
    excerpt: "Majhna punčka, stara 4 leta, sedi na tleh z rokami okoli kolen in joče: »Zakaj me ne poslušajo?« Kako se nepredelani občutki iz otroštva zapišejo v telo in kako jih skozi masažo zacelimo.",
    paragraphs: [
      {
        type: "p",
        content: "Majhna punčka, stara 4 leta, sedi na tleh, z rokami objema kolena in joče. »Zakaj me ne poslušajo? Zakaj me ne vidijo?« se sprašuje. Čutiti je globoko žalost, razočaranje, občutek ne-videnosti, ne-slišanosti.",
      },
      {
        type: "p",
        content: "Punca, stara 12 let, z resnim pogledom in izrazom na obrazu: »Moram poskrbeti za mamo. Zdaj smo same.« Čutiti je (pre)veliko breme odgovornosti po odhodu očeta.",
      },
      {
        type: "p",
        content: "Punčka, stara 6 let, v kotu sobe sedi, joče in se sprašuje: »Zakaj imajo rajši sestro? Zakaj mene ne marajo?« Čutiti je globoko žalost in občutek nesprejetosti – z mano nekaj ni v redu.",
      },
      {
        type: "list",
        content: [
          "Punca, stara 8 let, v očeh solze: »Nihče me ne razume.«",
          "Punčka, stara 3 leta: »Zakaj ON LAHKO in jaz ne?« – nepravičnost med bratci in sestricami.",
          "Punčka, stara 7 let, vleče očeta za rokav: »Ati, poglej me, tukaj sem.« – neskončna želja po očetovi pozornosti.",
          "Fant, star 12 let: »Nikoli ne bom tak moški kot ati.« – odraščanje ob avtoritativnem očetu.",
          "»Prosim, ne zapusti me.« – globok strah pred zapustitvijo pri tistih, ki so zgodaj ostali brez enega od staršev.",
        ],
      },
      {
        type: "p",
        content: "Priznam, ni enostavno slišati, še bolj pa dejansko videti in občutiti vso to žalost notranjih otrok strank, danes odraslih oseb. Vse te občutke, ki jih nosijo v sebi in jim na podzavestni ravni usmerjajo življenje.",
      },
      {
        type: "quote",
        content: "»Dokler nezavedno ne postane zavestno, bo vodilo vaše življenje in vi boste to imenovali usoda.« – Carl Gustav Jung",
      },
      {
        type: "p",
        content: "A to je le nekaj primerov bolečin notranjega otroka, ki sem jih videla na intuitivnih masažah. V samem procesu, ko mu s stranko dava vedeti, da je viden in slišan v tej svoji bolečini, ko se mu ponudi varnost, ki je ni dobil, ko tudi stranka svojega notranjega otroka pomiri in objame, je ob koncu intuitivne masaže popolnoma druga slika. Sedaj je tu smeh, olajšanje, razigranost.",
      },
      {
        type: "highlight",
        content: "Zato je izredno pomembno zavedanje: če želimo zaceliti ranjenega otroka v sebi, je potrebno, da odrasli del nas vzpostavi stik z njim in mu ponudi varnost ter ljubezen, ki je ni dobil.",
      },
      {
        type: "p",
        content: "Če čutite klic, da bi se posvetili svojemu notranjemu otroku in sprostili stare napetosti v telesu, vas toplo vabim na osebno intuitivno masažo ali na prihajajoče tematske čajanke v Kopru.",
      },
    ],
  },
  {
    slug: "dam-tebi-a-tudi-sebi",
    title: "»Dam tebi, a tudi sebi.«",
    author: "Mirjana Groznik",
    date: "30. januar 2026",
    readTime: "2 min",
    category: "Skrb zase",
    image: "https://static.wixstatic.com/media/dfaf38_8440b8bbc3ca47aca7c986f4ec8354bd~mv2.jpeg/v1/fill/w_800,h_1000,al_c,q_85,usm_0.66_1.00_0.01/dfaf38_8440b8bbc3ca47aca7c986f4ec8354bd~mv2.jpeg",
    excerpt: "»Kdor hoče, najde pot, kdor pa ne, najde izgovore« .. brrr, ne vem za vas, ampak mene je ta stavek v preteklosti tolikokrat prav znerviral...",
    paragraphs: [
      {
        type: "p",
        content: "»Kdor hoče, najde pot, kdor pa ne, najde izgovore« .. brrr, ne vem za vas, ampak mene je ta stavek v preteklosti tolikokrat prav znerviral. Strinjam se z njim, a jaz sem bila res iskreno utrujena od »iskanja poti«, iskanja dobesedno vsake proste minute, da sem lahko opravila vse, kar sem kot polno zaposlena mama dveh majhnih otrok, z možem, ki je bil veliko službeno odsoten, lahko naredila. Res utrujena.",
      },
      {
        type: "p",
        content: "Moje mantre so postali trije stavki: »vsaka minuta šteje«, »lovim minute« in »lahko na hitro«.\n\nTo sem upoštevala tako rigorozno, da če sem se ujela v mislih »imam 10 min časa«, sem hitro iskala, kaj bi lahko naredila. »Lahko dam perilo prat, lahko na hitro posesam, lahko na hitro napišem čestitko, lahko na hitro skočim v trgovino...«. Vse je bilo »na hitro« in »lovljenje minut«. Bila sem strašno utrujena, ampak produktivna. Iskreno, drugega mi niti ni preostalo, nihče ne bi ničesar naredil namesto mene.",
      },
      {
        type: "p",
        content: "A v vsem hitenju sem se pozabila ustaviti, te minute videti kot trenutke zame, za povezavo s sabo, za umiritev, za dihanje, za »nerazmišljanje«. Ni, da nisem želela, enostavno sem res pozabila, ker sem imela toliko stvari na to-do listi.",
      },
      {
        type: "p",
        content: "Na enem od predavanj mi je profesor pred sošolkami rekel: »Ona živi z nogo na gasu do konca«. Bilo je smešno, a od žalosti, saj me je bolela vsaka točka na telesu, ki se je je dotaknil. Nežno mi je prišepnil, da to ni ok in da naj upočasnim. In počasi sem res. Prelomna točka je bila, ko mi je mlajša hčerka rekla: »Mami, boš sedela z nami in gledala risanko?« Kar zajokala bi, ko sem dojela, da petkov družinski kino pomeni, da vsi skupaj sedimo in gledamo risanko in ne da jaz medtem likam.",
      },
      {
        type: "highlight",
        content: "Zakaj vam vse to pišem? Zato, ker pri iskanju poti ne smemo pozabiti tudi nase, ne smemo pozabiti obrniti te minute in sekunde sebi v prid, posvetiti jih sebi. Strankam vedno rečem – 10 sekund masiranja ušes ali tapkanja prsnice ali 3 vdihi in izdihi so boljše kot nič. »Vsaka sekunda šteje«.",
      },
      {
        type: "quote",
        content: "»Dam tebi, a tudi sebi.« Brez tega ne gre.",
      },
    ],
  },
  {
    slug: "ne-verjemi-vsemu-kar-slisis",
    title: "NE VERJEMI VSEMU, KAR SLIŠIŠ",
    author: "Mirjana Groznik",
    date: "11. december 2025",
    readTime: "4 min",
    category: "Umiritev & Čuječnost",
    image: "https://static.wixstatic.com/media/dfaf38_5ec3cd8402024e1bbf1b56695359ed48~mv2.jpeg/v1/fill/w_1000,h_563,al_c,q_85,usm_0.66_1.00_0.01/dfaf38_5ec3cd8402024e1bbf1b56695359ed48~mv2.jpeg",
    excerpt: "Preprosta enačba DECEMBER = HITENJE + STRES + IZČRPANOST. Zapisana v kolektivni zavesti. Kaj pa če izberemo hvaležnost in notranji mir?",
    paragraphs: [
      {
        type: "p",
        content: "Preprosta enačba DECEMBER = HITENJE + STRES + IZČRPANOST.\n\nZapisana v kolektivni zavesti. Zapisana v vsaki celici našega telesa. Zapisana v zraku, ki ga dihamo.\n\nTo nam govorijo. To beremo. O tem poslušamo na vsakem koraku. Že ob srečanju znanca na ulici se pogovor hitro obrne na to, da komaj čaka, da bo decembra konec, a se je šele začel. Ne vem, kako vi gledate na to, v kaj so spremenili december, a meni je kar hudo zanj. December samo je. Mesec kot vsi ostali. Mesec, ki ima začetek in konec.",
      },
      {
        type: "quote",
        content: "Enačba: DECEMBER = UPANJE + VESELJE + OBDAROVANJE + ZAKLJUČEVANJE + POGLED V PRIHODNOST",
      },
      {
        type: "p",
        content: "Kje se je izgubila ta enačba? Nikjer. Še vedno je tu, med nami, le mi preveč verjamemo šumu okoli nas, preveč verjamemo narativu, ki se v medijih ponavlja kot pesmica. A v zadnjih treh letih, odkar skoraj vsakodnevno delam s strankami, vam lahko mirno povem, da je ta lepša enačba še vedno v nas in pogumno ponovno prihaja na plano.",
      },
      {
        type: "p",
        content: "Kako vem? Tako, ker vidim in sem priča temu, kako vse več ljudi zavrača to teorijo hitenja s tem, ko si dovoli ne poslušati ga. Uporabljajo tehniko IZBIRE. Sami izberejo, katerih dogodkov se bodo udeležili, koga bodo obdarovali, koliko piškotov bodo spekli. Sami izberejo, kako bodo preživeli mesec in kako se želijo počutiti.",
      },
      {
        type: "p",
        content: "Nekoliko težje je reči ne, ko so otroci majhni in vrtci ter šole organizirajo različne predstave. Tukaj pa nastopi čas za uporabo druge zelo močne tehnike: HVALEŽNOST.",
      },
      {
        type: "list",
        content: [
          "Hvaležna za to, da lahko gledam predstavo, v kateri sodeluje moj otrok.",
          "Hvaležna, da vidim njen / njegov nasmeh na obrazu.",
          "Hvaležna, da sem lahko prišla na predstavo (da mi je zdravje to dopuščalo).",
          "Hvaležna, da živimo v miru.",
        ],
      },
      {
        type: "highlight",
        content: "IZBIRA + HVALEŽNOST = NOTRANJI MIR IN VEČJI STIK S SABO = VEČJI UŽITEK V ŽIVLJENJU",
      },
      {
        type: "p",
        content: "Ne verjemite vsemu, kar slišite, sploh pa ne temu, kako naj bi se morali počutiti. Naredite si življenje čim lepše – telo si vse zapomni. Nobena popolna večerja ali zabava ne more odtehtati napetosti ali jeze, ki smo jo v tistem trenutku občutili v sebi. Ta občutek bo ostal z nami in ne popolno pečena potica. Verjemite sebi.",
      },
    ],
  },
];

// Helper to look up by slug
export function getBlogPost(slug: string): BlogPost | undefined {
  // normalize slug variations (e.g. 'dam-tebi' or 'dam-tebi-a-tudi-sebi')
  return BLOG_POSTS.find((p) => p.slug === slug || p.slug.startsWith(slug));
}
