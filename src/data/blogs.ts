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
    type: "p" | "quote" | "list" | "highlight" | "heading" | "gallery";
    content: string | string[];
    images?: { src: string; caption: string }[];
  }[];
}

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "brez-ljubezni-mi-ziveti-ni",
    title: "“Brez ljubezni mi živeti ni…”",
    author: "Mirjana Groznik",
    date: "30. april 2026",
    readTime: "4 min",
    category: "Odnosi & Ljubezen",
    image: "https://static.wixstatic.com/media/dfaf38_a0bc3f19155947b6b1c3e2c9a4aa3f6b~mv2.jpeg/v1/fill/w_800,h_1000,al_c,q_85,usm_0.66_1.00_0.01/dfaf38_a0bc3f19155947b6b1c3e2c9a4aa3f6b~mv2.jpeg",
    excerpt: "Ljubezen – najmočnejša sila v Vesolju. A zakaj se v partnerskih odnosih tako pogosto vklopi strah, obrambni mehanizem in misel, da si ljubezni ne zaslužimo?",
    paragraphs: [
      {
        type: "p",
        content: "Ljubezen - najmočnejša sila v Vesolju. Ljubezen v vseh oblikah in odnosih. SSKJ (Slovar slovenskega knjižnega jezika) ljubezen opredeljuje kot psihološko in čustveno stanje, ki vključuje navezanost, skrb in željo po bližini. Duhovni pogled pa na ljubezen gleda širše, kot nekaj, kar presega posameznika in deluje kot povezovalna sila vseh z vsemi.",
      },
      {
        type: "p",
        content: "A kako se ljubezen odraža v romantičnih, partnerskih odnosih?",
      },
      {
        type: "quote",
        content: "“Zaslužiš si ljubezen. Vredna si ljubezni. Ne sprejemaj drobtinic.”",
      },
      {
        type: "p",
        content: "Družbena omrežja so polna takih in podobnih motivacijskih izjav na prelepih podlagah. Prebereš, za delček sekunde jim pritrdiš, a v naslednji se telo odzove z iritacijo in mislijo “ja, ja, seveda, lahko govoriti…” – vklopi se obrambni mehanizem. Srce se stisne, bolečina duše se poglobi.",
      },
      {
        type: "p",
        content: "Ena od strank je tako lepo rekla: ”Vse lahko naredim, ni problema, ampak odnosi… odnosi so mi pa najtežji, najbolj utrujajoči.” In ne bi se mogla bolj strinjati z njo. V mislih je imela vse odnose, a danes se bom osredotočila na partnerske.",
      },
      {
        type: "p",
        content: "Vsi si želimo ljubiti in biti ljubljeni. Lahko to z razumom zanikamo, a duša ne laže, telo prav tako ne. Zakaj je to potem tako težko?\n\n• Zato, ker svojo vrednost iščemo v očeh drugih.\n• Zato, ker iščemo potrditev, da si “zaslužimo” ljubezen.\n• Zato, ker iščemo potrditev, da če si bomo dovolili biti dovolj ranljivi in si dovolili nekoga ljubiti, da to ne bo prineslo bolečine.\n• Zato, ker morda niti ne vemo, kaj prava ljubezen sploh je, kaj pomeni, če te ima nekdo res rad, če te želi osrečiti, ti pomagati, biti podpora, če želi, da zares delujeta kot “midva”.",
      },
      {
        type: "highlight",
        content: "Želim si, a si ne želim… je preveč boleče. Tako bi lahko povzela sporočila iz intuitivnih masaž. Velja tako za ženske kot za moške. Na ravni duše ni razlik.",
      },
      {
        type: "p",
        content: "Najpogostejša sporočila teles, ki sem jih do sedaj prejela na intuivnih masažah so:",
      },
      {
        type: "list",
        content: [
          "Ne zaslužim si ljubezni",
          "Kdo me bo pa imel rad?",
          "Nisem vredna/vreden ljubezni",
          "Ne znam ljubiti",
          "Ljubezen prinaša samo bolečino",
          "Nimam časa za ljubezen",
        ],
      },
      {
        type: "p",
        content: "A pod temi sporočili - prepričanji, ki so tako globoko zarezani v telo, so še globlja sporočila, ki hranijo ta prepričanja:\n\n• Globoka bolečina zaradi fizične in/ali čustvene odsotnosti očeta ali mame (pri ženskah ima velik vpliv na partnerske odnose njen odnos z očetom, pri moških pa z mamo). Sporočilo: “nisem vredna/vreden ljubezni; nisem dovolj pomembna/pomemben, nisem zaželen(a), nima me dovolj rad(a).”\n• Globoka bolečina, ker je oče “imel rajši brata”; v moških vedno vidi rivale, v družbi katerih se mora “dokazovati”.\n• Gojenje zamer do partnerja, ker “ni dovolj” odločen, vodja. V resnici mu te vloge ne prepušča, saj mora od malega za vse poskrbeti sama.\n• “Ne želim ga/jo prizadeti”, v resnici pa sam(a) ne želi znova občutiti bolečine in razočaranja.\n• Besede staršev ali partnerja iz preteklosti: “poglej se, kdo pa te bo imel rad?” In prepričanje “ne zaslužim si ljubezni” je rojeno.",
      },
      {
        type: "p",
        content: "Na bolečino in na izzive smo navajeni, a kaj, ko končno srečamo partnerja, ob katerem se imamo lepo, ob katerih so občutki popolnoma drugačni, ki mi kaže, kaj ljubezen je? Takrat se vklopi samosabotaža: ali sem jaz prava za njega? Ali je on pravi zame? Čakanje na to, da bo “nekaj narobe”, ker je “preveč lepo, da bi bilo res.” In tudi v takih primerih je zelo pomembno ozavestiti strah in prepričanja, ki nam ne dovolijo prepustiti.",
      },
      {
        type: "p",
        content: "A osamljeni in z željo po ljubezni smo lahko tudi v partnerski zvezi. Biti sam ni enako biti osamljen. Lahko smo v zvezi, a se počutimo osamljeni, ker ni (več) ljubezni, nismo slišani, videni, nismo ljubljeni.",
      },
      {
        type: "quote",
        content: "“Znam in zmorem ljubiti. Sprejemam ljubezen v vseh oblikah, varna sem. Naj traja kolikor traja, v tem času bom uživala. Hvaležna za ljubezen in pozornost, ki mi jo daje. Hvaležna, ker me uči, kaj ljubezen je.”",
      },
      {
        type: "p",
        content: "Kakšne so tvoje izkušnje in mnenje o ljubezni? Če čutiš, da bi potrebovala podporo, te toplo vabim na intuitivno masažo v center Akilea. Piši mi na mirjana@akilea.si ali me pokliči na 040 863 594.",
      },
    ],
  },
  {
    slug: "notranji-otrok-kako-jih-vidim-jaz-na-intuitivnih-masazah",
    title: "»Notranji otrok – kako jih vidim jaz na intuitivnih masažah«",
    author: "Mirjana Groznik",
    date: "16. marec 2026",
    readTime: "3 min",
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
          "Punca, stara 8 let, stoji, gleda okoli sebe, v očeh solze: »Nihče me ne razume.«",
          "Punčka, stara 3 leta: »Zakaj ON LAHKO in jaz ne?« – žalost, jeza, razočaranje, občutek nepravičnosti.",
          "Punca, stara 10 let: »Mami, zakaj me ne maraš?« – globoka žalost, solze tečejo.",
          "Punca, stara 13 let: z globokim občutkom osamljenosti: »Sama sem.«",
          "Punčka, stara 7 let, vleče očeta za rokav: »Ati, poglej me, tukaj sem. To je zate.« – neskončna želja po očetovi pozornosti.",
          "Fant, star 12 let: »Nikoli ne bom tak moški kot ati.« – odraščanje ob avtoritativnem očetu.",
          "Punca, stara 10 let: »Nikoli ne bom taka kot mama.« (tako dobra, polna ljubezni...)",
          "»Prosim, ne zapusti me.« – zelo pogosta bolečina in občutek zapuščenosti po izgubi starša.",
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
        content: "A to je le nekaj primerov bolečin notranjega otroka, ki sem jih videla na intuitivnih masažah. V samem procesu, ko mu s stranko dava vedeti, da je viden in slišan v tej svoji bolečini, ko se mu ponudi varnost, ki je ni dobil, ko tudi stranka svojega notranjega otroka pomiri in objame, je ob koncu intuitivne masaže popolnoma druga slika. Sedaj je tu smeh, olajšanje, razigranost. Včasih je že to, da vstane, da na obrazu ni več solz in da je čutiti olajšanje, velik premik naprej.",
      },
      {
        type: "highlight",
        content: "Zato je izredno pomembno zavedanje, da če želimo zaceliti ranjenega otroka v sebi, je potrebno, da odrasli del nas vzpostavi stik z njim in mu ponudi varnost ter ljubezen, ki je ni dobil.",
      },
      {
        type: "p",
        content: "In ravno o tem, kako pomagati svojemu notranjemu otroku, govorimo tudi na naših tematskih Čajankah v Holističnem centru Akilea v Kopru. Če imaš vprašanja ali bi se želela naročiti na intuitivno masažo, mi kar piši na mirjana@akilea.si ali pokliči na 040 863 594.",
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
        content: "Moje mantre so postali trije stavki »vsaka minuta šteje«, »lovim minute« in »lahko na hitro«.\n\nTo sem upoštevala tako rigorozno, da če sem se ujela v mislih »imam 10 min časa«, sem hitro iskala, kaj bi lahko naredila. »Lahko dam perilo prat, lahko na hitro posesam, lahko na hitro napišem čestitko, lahko na hitro skočim v trgovino po dve stvari, lahko na hitro nesem smeti...«. Dobra stran je bila, da sem v tem »na hitro« dodala tudi hitro hojo 10-15min po vasi ali v mestu med čakanjem hčerke, da konča trening. Vse je bilo »na hitro« in »lovljenje minut«.",
      },
      {
        type: "p",
        content: "A v vsem hitenju sem se pozabila ustaviti, te minute videti kot trenutke zame, za povezavo s sabo, za umiritev, za dihanje, za »nerazmišljanje«, za način, da umirim telo in živčni sistem. V vsem tem tempu sem se odločila še za študij naturopatije in kolikor je bilo naporno, sem v tem res uživala; ti vikendi so bili moj reset, 36 ur za počitek.",
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
      {
        type: "p",
        content: "Če imaš vprašanja ali bi se želela naročiti na intuitivno masažo, mi kar piši na mirjana@akilea.si ali na 040 863 594. Objem, Mirjana.",
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
        content: "Preprosta enačba DECEMBER = HITENJE+ STRES+IZČRPANOST. Zapisana v kolektivni zavesti. Zapisana v vsaki celici našega telesa. Zapisana v zraku, ki ga dihamo. Enačba, ki v zadnjih letih, še preden koledar pokaže na 1. december, povzroči nemir in stiskanje v prsih. Ker telo ve.",
      },
      {
        type: "p",
        content: "Ne vem, kako vi gledate na to, v kaj so spremenili december, a meni je kar hudo zanj. December samo je. Mesec kot vsi ostali. Mesec, ki ima začetek in konec. Mesec, ki smo mu mi določili, da je mesec upanja, veselja, a tudi zaključkov in večje usmerjenosti v prihodnost.",
      },
      {
        type: "quote",
        content: "Enačba: DECEMBER = UPANJE + VESELJE + OBDAROVANJE + ZAKLJUČEVANJE + POGLED V PRIHODNOST",
      },
      {
        type: "p",
        content: "Kje se je izgubila ta enačba? Nikjer. Še vedno je tu, med nami, le mi preveč verjamemo šumu okoli nas, preveč verjamemo narativu v medijih. A v zadnjih treh letih, odkar skoraj vsakodnevno delam s strankami, vam lahko mirno povem, da je ta lepša enačba še vedno v nas in pogumno ponovno prihaja na plano.",
      },
      {
        type: "p",
        content: "Kako vem? Tako, ker vidim, kako vse več ljudi zavrača to teorijo hitenja s tem, ko si dovoli ne poslušati ga. Uporabljajo tehniko IZBIRE:\n• Sami izberejo, katerih dogodkov se bodo udeležili.\n• Sami izberejo, koliko in koga bodo obdarovali.\n• Sami izberejo, koliko piškotov bodo spekli ali pa jih kupili.\n• Sami izberejo, kako bodo preživeli december in kako se želijo počutiti.",
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
          "Hvaležna, da imamo mir.",
        ],
      },
      {
        type: "highlight",
        content: "IZBIRA + HVALEŽNOST = NOTRANJI MIR IN VEČJI STIK S SABO = VEČJI UŽITEK V DECEMBRU IN ŽIVLJENJU",
      },
      {
        type: "p",
        content: "Telo si vse zapomni. Naj si letošnji december zapomni drugače. Nobena popolna večerja ali zabava ne more odtehtati napetosti ali jeze, ki smo jo v tistem trenutku občutili v sebi. Ta občutek bo ostal z nami in ne popolno pečena potica. Verjemite sebi.",
      },
    ],
  },
  {
    slug: "toliko-se-trudimo-a-kaj-ko-se-ne-bi",
    title: "TOLIKO SE TRUDIMO, A KAJ, KO SE NE BI?",
    author: "Mirjana Groznik",
    date: "30. oktober 2025",
    readTime: "2 min",
    category: "Čustva & Prisotnost",
    image: "https://static.wixstatic.com/media/dfaf38_d211d9f8785948cfb615e1151b09c99e~mv2.png/v1/fill/w_1000,h_1000,al_c,q_90,usm_0.66_1.00_0.01/dfaf38_d211d9f8785948cfb615e1151b09c99e~mv2.png",
    excerpt: "Toliko se trudimo slišati sebe, da slišimo samo tisto, kar prihaja od zunaj. A kaj, ko se ne bi več trudili, ampak enostavno končno le SMO?",
    paragraphs: [
      {
        type: "p",
        content: "Hvala ti za čas, ki si ga boš vzel(a) za tokratni blog, ki je drugačen. Beri ga počasi, z občutenjem vsake besede. Naj ti bodo spodnje besede opomnik...",
      },
      {
        type: "list",
        content: [
          "Toliko se trudimo slišati sebe, da slišimo samo tisto, kar prihaja od zunaj.",
          "Toliko se trudimo biti dobri, da smo dobri do vseh, samo do sebe ne.",
          "Toliko se trudimo ustreči drugim, da pozabimo nase.",
          "Toliko se trudimo biti vse, da se na koncu počutimo kot nič.",
          "Toliko se trudimo vklopiti, da se vmes odklopimo od sebe.",
          "Toliko se trudimo biti vsepovsod, da na koncu nismo nikjer.",
          "Toliko se trudimo biti »in«, da smo na koncu vedno »out«.",
          "Toliko se trudimo biti prisotni, a niti ne vemo (še), kaj prisotnost v trenutku zares pomeni.",
          "Toliko se trudimo biti »pristni«, da se v iskanju lastne pristnosti izgubimo.",
          "Toliko se trudimo, da bi se zaščitili pred bolečino, da si jo na koncu povzročimo sami.",
          "Toliko se trudimo ne biti preveč, da smo na koncu premalo zase.",
          "Toliko se trudimo narediti »vse prav«, a pozabimo, da ima vsak svoj »prav« in ustreči vsem je nemogoče.",
          "Toliko se trudimo postaviti prioritete, a na seznam pozabimo dodati sebe.",
          "Toliko se trudimo biti ljubljeni, da pozabimo ljubiti sebe.",
          "Toliko se trudimo preživeti vsakdan, da ga na koncu pozabimo doživeti.",
          "Toliko se trudimo najti srečo, a pozabimo, da je sreča že v nas.",
          "Toliko se trudimo najti ravnovesje, da ga pozabimo najprej ustvariti znotraj nas.",
          "Toliko se trudimo najti se, a pozabimo, da se moramo najprej izgubiti, da bi se našli.",
          "Toliko se trudimo spremeniti svet, a pozabimo, da moramo najprej spremeniti sebe, ljubiti svoje otroke in svet se bo spremenil.",
        ],
      },
      {
        type: "highlight",
        content: "Toliko se trudimo.... a kaj, ko se ne bi več trudili, ampak enostavno končno le SMO?\n\nCel paket. Brez mašne. Brez okraskov. V vsej svoji hkratni surovosti in nežnosti.\nV vsem svojem levjem pogumu in zajčjem strahu.\nV vseh svojih težnjah po nedostopnem in sprejemanjem, kar imamo v tem trenutku.\nV vseh svojih sanjah in nočnih morah, ki se (ne)uresničijo.",
      },
      {
        type: "quote",
        content: "»Trud zamenjajmo z odkrivanjem, kdo v resnici smo. Sem.«",
      },
      {
        type: "p",
        content: "Bi želel(a) na seznam še kaj dodati ali podeliti svoje mnenje, izkušnjo? Piši mi na mirjana@akilea.si ali na tel.: 040 863 594. Podeli ta blog z nekom, za katerega čutiš, da bi ga moral prebrati.\n\nHvala za tvoj čas in podporo! Objem, Mirjana.",
      },
    ],
  },
  {
    slug: "moja-izkusnja-z-bolecinami-v-krizu",
    title: "Moja izkušnja z bolečinami v križu",
    author: "Mirjana Groznik",
    date: "16. oktober 2025",
    readTime: "3 min",
    category: "Telo & Zdravje",
    image: "https://static.wixstatic.com/media/dfaf38_b8fc30075de84ce9b872d620d0859c42~mv2.jpg/v1/fill/w_678,h_678,al_c,lg_1,q_85/dfaf38_b8fc30075de84ce9b872d620d0859c42~mv2.jpg",
    excerpt: "»… ne že spet … ne grem še enkrat skozi to …« Fizična bolečina v križu je pogosto odraz notranje bolečine, spuščanja nadzora in potlačenih čustev.",
    paragraphs: [
      {
        type: "quote",
        content: "»… ne že spet … ne grem še enkrat skozi to …«",
      },
      {
        type: "p",
        content: "Jeza. Žalost. Nemoč. Solze, ki niso bile samo telesne – v nekem trenutku je zajokal cel moj jaz, duša. Po tednu bolečin v križu sem se, kot vsak dan, namenila na sprehod. A tokrat ni šlo. Nisem se mogla skloniti, niti dvigniti noge, da bi se obula. Poklicati sem morala hčerko, da mi pomaga.\n\nIn takrat sem zajokala. Na ves glas.",
      },
      {
        type: "p",
        content: "Spomin na operacijo hernije iz leta 2013 je bil še vedno živ. Ne toliko v glavi – temveč v telesu. Čeprav sem predelala razloge, rehabilitacijo, okrevanje … očitno vsega še nisem popolnoma izpustila. Se to sploh da? Morda bo čas pokazal.",
      },
      {
        type: "highlight",
        content: "Začetek – 1. september 2025: Zjutraj sem se zbudila z rahlo bolečino v križu. Z vsako uro sedenja je bila bolečina hujša. Do srede je postala tako močna, da nisem več mogla sedeti. Pomagala je le hoja.",
      },
      {
        type: "p",
        content: "Po operaciji leta 2013 sem bila nekaj let 'vremenska postaja'. A zadnje desetletje? Komaj kaj. Zato me je tokratni izbruh presenetil. Začela sem iskati odgovore. Vedela sem, da vzrok ni le fizičen – da izhaja iz čustvene in energetske ravni.",
      },
      {
        type: "heading",
        content: "Kaj mi je pomagalo:",
      },
      {
        type: "list",
        content: [
          "Samomasaža ušes in stopal – večkrat dnevno.",
          "Sprehodi s palicami, raztezne vaje in sproščanje napetosti v ledvenem delu.",
          "Masaža z ventuzo – boleče, a je prinašalo olajšanje.",
          "Moxanje z moxa cigaro zvečer in grelna vrečka čez dan.",
          "Prehranski dodatki: homeopatske granule arnike, tkivne soli, vitamini C in D, magnezij, silicij, probiotiki.",
          "Terapevtska masaža in masaža stopal.",
        ],
      },
      {
        type: "p",
        content: "Ob vsem tem sem si ponavljala mantri:\n»Bolečina, kaj mi želiš povedati?«\n»Na nežen način spuščam, kar mi ne služi.«",
      },
      {
        type: "p",
        content: "Fizična bolečina je pogosto odraz notranje bolečine. Poleti sem se odločila, da zapustim redno službo in stopim na pot, ki me resnično izpolnjuje. Avgusta sem dala odpoved. Sprva sem čutila olajšanje, nato strah: kaj zdaj? Zame največji izziv je bil spuščanje nadzora nad procesom in rezultatom.",
      },
      {
        type: "quote",
        content: "»Telo si zapomni. Prisluhnimo mu. Dovolimo si spustiti, kar nam ne služi več.«",
      },
    ],
  },
  {
    slug: "moxanje",
    title: "MOXANJE",
    author: "Mirjana Groznik",
    date: "20. maj 2025",
    readTime: "2 min",
    category: "Tradicionalne tehnike",
    image: "https://static.wixstatic.com/media/dfaf38_ebeb9c043801435a891973858b9ebe06~mv2.jpg/v1/fill/w_1000,h_667,al_c,q_85,usm_0.66_1.00_0.01/dfaf38_ebeb9c043801435a891973858b9ebe06~mv2.jpg",
    excerpt: "Moxanje je postopek, kjer s prižgano mokso v obliki cigare ogrevamo akupresurne točke in meridiane, razsluzimo organe ter krepimo imunski sistem.",
    paragraphs: [
      {
        type: "p",
        content: "Moxanje je postopek, kjer s prižgano mokso v obliki cigare, v kateri so pelin in še druga zelišča:\n\n• ogrevamo akupresurne točke in meridiane, s čimer okrepimo in uravnavamo pretok krvi in življenjske energije (Qi),\n• organom dovajamo toploto oz. energijo in jih s tem krepimo,\n• razsluzimo organe in telo,\n• krepimo imunski sistem.",
      },
      {
        type: "p",
        content: "Na Kitajskem se moxanje izvaja že več kot 3000 let in v kombinaciji z akupunkturo daje zelo dobre rezultate. Moxamo se lahko vsi, od dojenčkov do starejših oseb (dojenčke in otroke moxamo samo med lopaticama).",
      },
      {
        type: "highlight",
        content: "POMEMBNO ❗\n• Z moxo se nikoli ne dotikamo kože, da ne pride do opeklin.\n• Nikoli se NE moxamo, če imamo povišano telesno temperaturo.\n• Nikoli NE moxamo popka, če imamo težave z večdnevno zaprtostjo.",
      },
      {
        type: "heading",
        content: "Predeli, ki jih lahko sami doma moxamo:",
      },
      {
        type: "list",
        content: [
          "Predel med lopaticama (tukaj lahko uporabimo tudi moxa grelno vrečko)",
          "Popek (skozi popek energija prodre do vseh vitalnih organov; v popek damo žličko soli in moxamo, dokler se ne segreje)",
          "Trtica (za krepitev in dovajanje energije ledvicam)",
        ],
      },
      {
        type: "p",
        content: "Moxamo do 20 min vsak predel. Moxanje je priporočljivo pri: veliko sluzi v telesu, artritisu, prebavnih težavah, ginekoloških težavah (miomi, ciste, PMS, težave z zanositvijo), vnetju mehurja, prostati ter boleznih pljuč.",
      },
      {
        type: "quote",
        content: "Še posebej priporočljivo je moxanje v času spomladanskega in jesenskega enakonočja, saj 1x velja za 3x!",
      },
    ],
  },
  {
    slug: "5-tipov-osebnosti-po-tkm",
    title: "5 TIPOV OSEBNOSTI PO TRADICIONALNI KITAJSKI MEDICINI (TKM)",
    author: "Mirjana Groznik",
    date: "28. marec 2025",
    readTime: "9 min",
    category: "TKM & Osebnost",
    image: "https://static.wixstatic.com/media/dfaf38_2fcb198e18a8473ea6c5a5082d008cb3~mv2.jpg/v1/fill/w_1000,h_1000,al_c,q_85,usm_0.66_1.00_0.01/dfaf38_2fcb198e18a8473ea6c5a5082d008cb3~mv2.jpg",
    excerpt: "Najpomembnejši korak do boljšega odnosa s sabo in drugimi je ta, da ugotovimo KDO SMO. Spoznajte 5 tipov osebnosti: les, ogenj, zemlja, kovina in voda.",
    paragraphs: [
      {
        type: "p",
        content: "V odnosih velikokrat izhajamo iz sebe. Pričakujemo, da bodo tudi drugi delovali, razmišljali, sočustvovali, pomagali, gledali, videli, opazili, tako kot to počnemo mi. Skladno s tem imamo lahko velika pričakovanja, a velika pričakovanja vodijo v velika razočaranja. Posledično so nesoglasja in slabi odnosi na vseh področjih življenja skorajda neizogibni.",
      },
      {
        type: "quote",
        content: "Najpomembnejši korak do boljšega odnosa s sabo in drugimi je ta, da ugotovimo KDO SMO. Šele ko razumemo sebe in se sprejmemo, bomo lahko razumeli in sprejeli druge.",
      },
      {
        type: "p",
        content: "V TKM (Tradicionalni kitajski medicini) je osnova narava in 5 elementov – les (jetra), voda (ledvice), kovina (pljuča), zemlja (vranica), ogenj (srce). Vsi smo mešanica vseh petih tipov, le pri vsakem posamezniku so določeni tipi nekoliko bolj izraženi.",
      },
      {
        type: "heading",
        content: "1. ELEMENT LESA – JETRNI TIP",
      },
      {
        type: "p",
        content: "Fizične značilnosti: vitko, mišičasto telo, ozki boki in pas, močna ramena, temna polt, močni lasje.\n\nOsebnostne lastnosti: vedo, KAJ želijo in KAKO bodo to dosegli. Imajo načrt, so zelo organizirani, odlični vodje, realizirajo ideje. Trmasti, odločni, ne marajo, da jim drugi govorijo, kaj naj delajo. Čustvo in največji izziv: JEZA.\n\nV neravnovesju: hitro se razjezijo, so zamerljivi, razdražljivi, pretirana želja po nadzoru in dokazovanju svojega prav.",
      },
      {
        type: "heading",
        content: "2. ELEMENT OGNJA – SRČNI TIP",
      },
      {
        type: "p",
        content: "Fizične značilnosti: okrogel obraz ali v obliki srca, močnejša postava, veliko se potijo, vedno jim je vroče.\n\nOsebnostne lastnosti: družabni, strastni, radi se smejijo, imajo velik krog prijateljev, živijo v sedanjem trenutku in želijo uživati. Težko rečejo NE. Čustvo: veselje, ob neravnovesju pa panika in tesnoba.",
      },
      {
        type: "heading",
        content: "3. ELEMENT ZEMLJE – VRANIČNI TIP",
      },
      {
        type: "p",
        content: "Fizične značilnosti: telo v obliki hruške, nagnjenost k zatekanju vode.\n\nOsebnostne lastnosti: sočutni, skrbijo za druge, želijo rešiti svet in druge postavljajo na 1. mesto. Dobri poslušalci, težko prosijo za pomoč. Gonilno čustvo: ZASKRBLJENOST.",
      },
      {
        type: "heading",
        content: "4. ELEMENT KOVINE – PLJUČNI TIP",
      },
      {
        type: "p",
        content: "Fizične značilnosti: široka ramena, ozki boki, svetla porcelanasta polt, pogosto pegice.\n\nOsebnostne lastnosti: zanesljivi, organizirani, težijo k popolnosti, uživajo v samoti in samorefleksiji. Izogibajo se konfliktom in dramam, včasih delujejo hladno. Gonilno čustvo: ŽALOST, MELANHOLIJA.",
      },
      {
        type: "heading",
        content: "5. ELEMENT VODE – LEDVIČNI TIP",
      },
      {
        type: "p",
        content: "Fizične značilnosti: nežen obraz, malo mišic, vedno jih zebe, potrebujejo veliko počitka.\n\nOsebnostne lastnosti: umirjeni, ustvarjalni, filozofi, sanjači, radi imajo globoke pogovore, delajo počasi in v svojem ritmu. Gonilno čustvo: STRAH.",
      },
      {
        type: "highlight",
        content: "KAKO KOMUNICIRATI? Z lesom govorite jasno in neposredno. Z ognjem skozi veselje in navdušenje. Z zemljo s toplino in skrbjo. S kovino umirjeno ena na ena. Z vodo pa brez priganjanja in z veliko potrpežljivosti.",
      },
    ],
  },
  {
    slug: "nasa-izkusnja-z-atopijskim-dermatitisom",
    title: "NAŠA IZKUŠNJA Z ATOPIJSKIM DERMATITISOM",
    author: "Mirjana Groznik",
    date: "28. marec 2025",
    readTime: "10 min",
    category: "Celostno zdravje & Izkušnje",
    image: "/images/blog/dermatitis/dermatitis-izbruh-2016.jpg",
    excerpt: "14. septembra obeležujemo svetovni dan atopijskega dermatitisa. Preberite našo celostno pot, kako smo hčerki pomagali z naravnimi pristopi, prehrano in podporo telesu.",
    paragraphs: [
      {
        type: "p",
        content: "14. septembra obeležujemo svetovni dan atopijskega dermatitisa (AD). V spodnjih vrsticah si lahko preberete, kako smo mi pomagali mlajši hčerki, kako ga je ona doživljala, kako jaz kot mama in kako je vplival na družino. A ker že od malega verjamem, da se vse zgodi z razlogom, sem ves čas našega popotovanja iskala dobre plati. To me je držalo pokonci in mi vlivalo upanje, da se bomo izvlekli iz tega.",
      },
      {
        type: "gallery",
        content: "Slikovni prikaz poteka zdravljenja atopijskega dermatitisa skozi leta:",
        images: [
          {
            src: "/images/blog/dermatitis/dermatitis-izbruh-2016.jpg",
            caption: "Julij 2016: Najhujši izbruh dermatitisa na rokah (hči je bila stara skoraj 7 let).",
          },
          {
            src: "/images/blog/dermatitis/dermatitis-potek-1.jpg",
            caption: "Potek regeneracije: Rdečina in vnetje kože ob začetku naravnih terapij.",
          },
          {
            src: "/images/blog/dermatitis/dermatitis-potek-2.jpg",
            caption: "Napredek s presličinimi kopelmi, tkivnimi solmi in prilagojeno prehrano.",
          },
          {
            src: "/images/blog/dermatitis/dermatitis-potek-3.jpg",
            caption: "Umirjanje vnetja na pregibih rok.",
          },
          {
            src: "/images/blog/dermatitis/dermatitis-pozdravljeno-2020.png",
            caption: "16. september 2020: Popolnoma pozdravljena, gladka koža brez znakov vnetja!",
          },
        ],
      },
      {
        type: "p",
        content: "Začelo se je marca oz. aprila 2016 z nabuhlimi, rdečimi očmi z luskami. Izkazalo se je, da je bil vzrok za kasnejši AD atipični znak parazitov v črevesju (glist)! Ko smo se jih znebili, so bile oči po dveh tednih spet v redu. A po dobrem mesecu se je pojavila suha koža na notranji strani komolcev, ki se je razvila v hud AD. Žalost, jok, neprespane noči zaradi praskanja in skrbi so nas spravljali v obup.",
      },
      {
        type: "heading",
        content: "Odpravljanja težav z atopijskim dermatitisom smo se lotili celostno:",
      },
      {
        type: "list",
        content: [
          "Prehrana: Popolna izločitev glutena in mlečnih izdelkov. Uvedba riževega, mandljevega mleka, ajde, quinoe, leče, prosa ter sveže sezonske zelenjave in sadja. Vse obroke sem pripravljala doma.",
          "Probiotiki: Ciljno podprto črevesje (AxiBoulardi in AxiDophilus).",
          "Prehranski dodatki: Omega 3, organski silicij, oligoelement mangan-baker, vitamina C in D ter svetlinovo olje.",
          "Tkivne soli (Schüsslerjeve soli): Calcium Phos., Ferrum Phos., Kalium Chlor., Magnesium Phos., Natrium Phos. in Silicea. Tkivne soli so resnično pomagale pri hitri regeneraciji tkiva!",
          "Kreme: Mazilo s kanabinoidi in ognjičem (Hemptouch) v najhujši fazi, kasneje Atopic Cream (SkinFairytale).",
          "Presličine kopeli: Vsaj 1x tedensko ter 3 večere zapored ob polni luni. Poleti kopanje v morju in slanici.",
          "Moxanje in masaža: Moxanje med lopaticama za krepitev pljuč ter vsakodnevna nežna masaža meridianov.",
          "Bachove cvetne esence: Crab apple, Mimulus in Chicory – za pomiritev čustvene stiske in strahov.",
        ],
      },
      {
        type: "highlight",
        content: "Na srečo je skupek vseh pristopov deloval in AD se je spomladi l. 2017 počasi začel poslavljati. Do začetka poletja ga ni bilo več! Zadnja slika prikazuje roke iz 16. 9. 2020 – koža je popolnoma gladka in zdrava.",
      },
      {
        type: "p",
        content: "Še nekaj bi dodala – bolj ko sem bila kot mama v krču od skrbi, slabša je bila hčerkina koža. Ko sem pozimi 2016 s trdim delom na sebi začela spuščati ta krč in zaupati, da se bo vse uredilo, se je tudi njena koža začela izboljševati. Otroci čutijo naš notranji svet.\n\nP.S.: Hčerka je danes stara 15 let in je sama z veseljem dovolila objavo slik, saj ve, da lahko naša izkušnja pomaga še komu.",
      },
    ],
  },
];

// Helper to look up by slug (supporting original Wix slug redirects)
export function getBlogPost(slug: string): BlogPost | undefined {
  const normalized = slug.toLowerCase();
  return (
    BLOG_POSTS.find((p) => p.slug === normalized) ||
    BLOG_POSTS.find((p) => normalized.startsWith(p.slug) || p.slug.startsWith(normalized)) ||
    // Wix URL alias mappings
    (normalized.includes("dermatitis") || normalized.includes("globoka-sprostitev")
      ? BLOG_POSTS.find((p) => p.slug === "nasa-izkusnja-z-atopijskim-dermatitisom")
      : undefined) ||
    (normalized.includes("odkrijte-prednosti") || normalized.includes("5-tipov")
      ? BLOG_POSTS.find((p) => p.slug === "5-tipov-osebnosti-po-tkm")
      : undefined) ||
    (normalized.includes("kri%c5%be") || normalized.includes("krizu")
      ? BLOG_POSTS.find((p) => p.slug === "moja-izkusnja-z-bolecinami-v-krizu")
      : undefined) ||
    (normalized.includes("toliko-se-trudimo")
      ? BLOG_POSTS.find((p) => p.slug === "toliko-se-trudimo-a-kaj-ko-se-ne-bi")
      : undefined)
  );
}
