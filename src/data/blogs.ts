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
    type: "p" | "quote" | "list" | "highlight" | "heading" | "gallery" | "image";
    content: string | string[];
    images?: { src: string; caption: string; width?: number; height?: number }[];
  }[];
}

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "ko-maternica-spregovori",
    title: "Ko maternica spregovori",
    author: "Mirjana Groznik",
    date: "28. september 2026",
    readTime: "4 min",
    category: "Intuitivna masaža & Telo",
    image: "/images/blog/ko-maternica-spregovori.jpg",
    excerpt: "Z vsakim dnem se bolj zavedam in prejemam potrditve, kako pomembno je spoznanje, da naše telo ni le fizična lupina, ni le stroj. Kaj se zgodi, ko na intuitivni masaži maternica končno spregovori?",
    paragraphs: [
      {
        type: "p",
        content: "Z vsakim dnem se bolj zavedam in prejemam potrditve, kako pomembno je spoznanje, da naše\ntelo ni le fizična lupina, ni le stroj, ni le nekaj, kar nam služi in na koncu “odsluži”. Kako\npomembno je ozavestiti tudi nefizični del nas, našega teles(a) in ta neoprijemljiv, na trenutke\ntežko razumljiv. Za nekatere še vedno težko sprejemljiv.",
      },
      {
        type: "p",
        content: "Hvaležna za možnost, da lahko s pomočjo intuitivne masaže predajam zapise, ki so se skozi leta\nzapisali v telo. Hvaležna, da se tudi maternica in jajčniki počutijo dovolj varne in mi zaupajo.",
      },
      {
        type: "p",
        content: "Sprva se to lahko pokaže skozi energijo, ko začutim:",
      },
      {
        type: "list",
        content: [
          "da je maternica tako zelo utrujena, izčrpana",
          "da v maternici zeva ogromna luknja (skozi katero ji odteka največ energije),",
          "da ima odebeljene stene, brazgotine",
          "da je razočarana,",
          "da žaluje",
          "jajčnik (ali oba) je tako velik kot jabolko ali tako posušen kot rozina",
        ],
      },
      {
        type: "p",
        content: "Pogosto se zgodi, da že skoraj na koncu intuitivne masaže, preda sporočila,\nko začne kričati od neizražene bolečine,\nod občutkov, odnosov, razočaranj, žalosti, neizgovorjenih besed in vsega tistega, kar je leta\nnosila v sebi.",
      },
      {
        type: "p",
        content: "Od občutkov izdaje, razočaranja, od jeze in zamere, ker je v partnerskem odnosu nenehno\ndajala:\nLjubezen.\nČas.\nSvojo energijo.\nSvoje telo.",
      },
      {
        type: "p",
        content: "In končno spregovori. Ubesedi misli, občutke, ki jih je mnoga leta zadrževala.\n\nZgodi se, da preda spomine in vso bolečino iz določenih preteklih življenj, ki jih tako zelo\ngloboko nosi v sebi. Napočil je čas, da jih izpusti.",
      },
      {
        type: "highlight",
        content: "Spomini na nasilje, na izdajo.\nMaternica si želi občutka varnosti.\nŽeli si zaupanja.\nŽeli si občutka, da je ljubljena.\nDa je sprejeta.\nDa je opažena.\nDa je zaželena.\nDa ji ni treba ves čas biti močna in ponavljati “zmorem”, tudi ko v resnici ne more več.\nDa ni za vse sama.",
      },
      {
        type: "p",
        content: "Vse to išče najprej pri partnerju. A najprej mora začeti graditi občutek varnosti v sebi, ker je to\npredpogoj za zaupanje partnerju. Občutek varnosti in zaupanja je dvosmeren proces.\n\nNa intutivnih masažah se zelo močno čuti in vidi, da je ob partnerju, ob katerem se ženska\npočuti varno, ljubljeno, opaženo in slišano, partnerju, ki mu zaupa, grajenje notranjega stebra\nlažje. Lahko je veliko več v svoji ženski energiji.\n\nPotrebuje občutek varnosti, želi biti sprejeta, ljubljena, biti dovolj takšna kot je.\n\nŠele nato je pripravljena tudi na sprejemanje.",
      },
      {
        type: "list",
        content: [
          "Sprejemanje ljubezni – ljubim in sprejemam ljubezen",
          "Sprejemanje pomoči – pomagam, a zname sprejeti tudi pomoč",
          "Sprejemanje sebe – sprejemam tebe, a tudi sebe.",
        ],
      },
      {
        type: "p",
        content: "Dajem tebi, a tudi sebi. ([tukaj si lahko prebereš blog na to temo](/blog/dam-tebi-a-tudi-sebi))",
      },
      {
        type: "p",
        content: "Vse pogosteje se govori tudi o endometriozi. Kako jo na intuitivnih masažah čutim, vidim jaz?\n\nPri ženskah z endometriozo je v maternici zaznati",
      },
      {
        type: "list",
        content: [
          "občutek velike energetske blokade",
          "veliko bolečine.",
          "veliko neizražene jeze in neizjokanih solz",
        ],
      },
      {
        type: "highlight",
        content: "Več o tem bo v e-knjigi, ki izide predvidoma konec oktobra. [Tukaj se lahko prijavš in med prvimi izveš o njenem izidu.](https://preview.mailerlite.io/preview/1336581/forms/198580470970057791)",
      },
      {
        type: "heading",
        content: "Maternica in druga čakra",
      },
      {
        type: "p",
        content: "Ko govorimo o maternici, ne moremo mimo druge čakre.\nSakralne čakre.\n\nDruga čakra leži v spodnjem delu trebuha in je v energijskem izročilu povezan z ženskostjo,\nustvarjalnostjo, čustvi, užitkom, spolnostjo, odnosi in sposobnostjo sprejemanja.\n\nDruga čakra je v energijskem smislu prostor »jaz čutim«.\n\nIn maternica res veliko čuti, nosi.",
      },
      {
        type: "heading",
        content: "Spremembe na bolje",
      },
      {
        type: "p",
        content: "A spremembe so možne. Hvaležna sem, da lahko s pomočjo predaje sporočil telesa na\nintiuitivnih masažah celega telesa, stranko podprem na poti transformacije:",
      },
      {
        type: "list",
        content: [
          "velika energetska gmota se zmanjša",
          "energija steče po nogah",
          "maternica zadiha, začne šepetati, ne kriči več",
          "napetost v trebuhu se zmanjša",
          "bolečine so na splošno manjše",
          "občutek lahkotnosti v telesu in srcu",
        ],
      },
      {
        type: "p",
        content: "To je le nekaj primerov, o katerih mi stranke poročajo.",
      },
      {
        type: "highlight",
        content: "O vsem tem bo več govora v e-knjigi, ki izide predvidoma konec oktobra. [Tukaj se lahko prijavš in med prvimi izveš o njenem izidu.](https://preview.mailerlite.io/preview/1336581/forms/198580470970057791)",
      },
      {
        type: "p",
        content: "Če se najdeš v zgoraj opisanem in bi si želela rezervirati termin za intuitivno masažo, mi piši na [mirjana@akilea.si](mailto:mirjana@akilea.si) ali na tel.št.: [040 863 594](tel:040863594).\n\nVsekakor so vprašanja ali predlogi o čem bi želela izvedeti več, dobrodošli.\n\nVeselim se srečanja ter vseh sporočil in uvidov, ki ti jih želi telo predati.",
      },
    ],
  },
  {
    slug: "brez-ljubezni-mi-ziveti-ni",
    title: "“Brez ljubezni mi živeti ni…”",
    author: "Mirjana Groznik",
    date: "30. april 2026",
    readTime: "4 min",
    category: "Odnosi & Ljubezen",
    image: "/images/blog/brez-ljubezni-mi-ziveti-ni.jpg",
    excerpt: "Ljubezen – najmočnejša sila v Vesolju. A zakaj se v partnerskih odnosih tako pogosto vklopi strah, obrambni mehanizem in misel, da si ljubezni ne zaslužimo?",
    paragraphs: [
      {
        type: "p",
        content: "**Ljubezen**  -  najmočnejša sila v Vesolju. Ljubezen v vseh oblikah in odnosih.",
      },
      {
        type: "p",
        content: "SSKJ (__Slovar slovenskega knjižnega jezika__) **ljubezen** opredeljuje kot psihološko in čustveno stanje, ki vključuje navezanost, skrb in željo po bližini.",
      },
      {
        type: "p",
        content: "Duhovni pogled pa na ljubezen gleda širše, kot nekaj, kar presega posameznika in deluje kot povezovalna sila vseh z vsemi.",
      },
      {
        type: "p",
        content: "**A kako se ljubezen odraža v romantičnih, partnerskih odnosih?**",
      },
      {
        type: "p",
        content: "__“Zaslužiš si ljubezen.__\n__Vredna si ljubezni.__\n__Ne sprejemaj drobtinic.”__",
      },
      {
        type: "p",
        content: "Družbena omrežja so polna takih in podobnih motivacijskih izjav na prelepih podlagah.",
      },
      {
        type: "p",
        content: "Prebereš, za delček sekunde jim pritrdiš, a v naslednji se telo odzove z iritacijo in mislijo “ja, ja, seveda, lahko govoriti…” – vklopi se obrambni mehanizem. Srce se stisne, bolečina duše se poglobi.",
      },
      {
        type: "p",
        content: "Ena od strank je tako lepo rekla: ”Vse lahko naredim, ni problema, ampak odnosi… odnosi so mi pa najtežji, najbolj utrujajoči.” In ne bi se mogla bolj strinjati z njo. __V mislih je imela vse odnose, a danes se bom osredotočila na partnerske.__",
      },
      {
        type: "p",
        content: "Vsi si želimo ljubiti in biti ljubljeni. Lahko to z razumom zanikamo, a duša ne laže, telo prav  tako ne. Zakaj je to potem tako težko?",
      },
      {
        type: "p",
        content: "Zato, ker svojo vrednost iščemo v očeh drugih.\n\nZato, ker iščemo potrditev, da si “zaslužimo” ljubezen.\n\nZato, ker iščemo potrditev, da če si bomo dovolili biti dovolj ranljivi in si dovolili nekoga ljubiti, da to ne bo prineslo bolečine __(opazite dvojno dozo dovoljenja?).__\n\nZato, ker morda niti ne vemo, kaj prava ljubezen sploh je, kaj pomeni, če te ima nekdo res rad, če te želi osrečiti, ti pomagati, biti podpora, če želi, da zares delujeta kot “midva”.",
      },
      {
        type: "p",
        content: "Želim si, a si ne želim… je preveč boleče.  Tako bi lahko povzela sporočila iz intuitivnih masaž.",
      },
      {
        type: "p",
        content: "Velja tako za ženske kot za moške. Na ravni duše ni razlik.",
      },
      {
        type: "p",
        content: "Najpogostejša sporočila teles, ki sem jih do sedaj prejela na intuivnih masažah so:",
      },
      {
        type: "list",
        content: [
          "      ne zaslužim si ljubezni",
          "      kdo me bo pa imel rad?",
          "      nisem vredna/vreden ljubezni",
          "      ne znam ljubiti",
          "      ljubezen prinaša samo bolečino",
          "      nimam časa za ljubezen",
        ],
      },
      {
        type: "p",
        content: "A pod temi sporočili - prepričanji, ki so tako globoko zarezani v telo, so še globlja sporočila, ki hranijo ta prepričanja:",
      },
      {
        type: "list",
        content: [
          "globoka bolečina zaradi fizične in/ali čustvene odsotnosti očeta ali mame __(pri ženskah ima velik vpliv na partnerske odnose njen odnos z očetom, pri moških pa z mamo);__\n\nSporočilo, ki ga je s tem prejel(a) od očeta ali mame: “nisem vredna/vreden ljubezni; nisem dovolj pomembna/pomemben, nisem zaželen(a), nima me dovolj rad(a), da bi bil(a) ob meni in me imela rada, pa čeprav sem njegov/njen otrok.”",
          "globoka bolečina, ker je oče “imel rajši brata”; kot majhna punčka je dobila ta občutek in zato je v moških vedno videla rivale, v družbi katerih se mora “dokazovati”, kar se je odražalo tako na partnerskih odnosih kot med kolegi v službi.",
          "gojenje zamer do partnerja, ker “ni dovolj” odločen, močan, vodja, ker ni bolj v moški energiji. V resnici pa niti ne more biti, ker mu ona te vloge ne prepušča, saj je sama veliko v moški energiji. Želi se prepustiti, a si ne upa; od malega se je naučila, da se na moške (očeta) ne more zanesti, sama mora poskrbeti zase in za vse – več nadzora kot ima, manj je možnosti za bolečino.",
          "“ne želim ga/jo prizadeti”, v resnici pa sam(a) ne želi (spet) občutiti bolečine in iti skozi ves proces, ki jo razočaranje ali razpadli odnos prinese",
          "mama ali oče ji/mu govorili že od majhnega – “poglej se, kakšna / kakšen si, kdo pa te bo imel rad?“ In prepričanje “ne zaslužim si ljubezni”, je rojeno.",
          "“poglej se, kakšna si, kdo pa te bo imel rad? Bodi srečna, da sem jaz s tabo.” Tudi partner nas lahko prepriča, da si ljubezni “nisem vredna; si je ne zaslužim”.",
        ],
      },
      {
        type: "p",
        content: "Še veliko je primerov, na žalost.",
      },
      {
        type: "p",
        content: "Na bolečino in na izzive smo navajeni, a kaj, ko končno srečamo partnerja, ob katerem se imamo lepo, ob katerih so občutki popolnoma drugačni, ki mi kaže, kaj ljubezen je?",
      },
      {
        type: "p",
        content: "**Takrat se vklopi samosabotaža:** ali sem jaz prava za njega?\nali je on pravi zame?",
      },
      {
        type: "p",
        content: "Čakanje na to, da bo “nekaj narobe”, ker je “preveč lepo, da bi bilo res.”",
      },
      {
        type: "p",
        content: "In tudi v takih primerih je zelo pomembno ozavestiti strah in prepričanja, ki nam ne dovolijo prepustiti.",
      },
      {
        type: "p",
        content: "**A osamljeni in z željo po ljubezni smo lahko tudi v partnerski zvezi.**",
      },
      {
        type: "p",
        content: "Bit sam ni enako biti osamljen. Lahko smo v zvezi, a se počutimo osamljeni, ker ni (več) ljubezni, nismo slišani, videni, nismo ljubljeni.",
      },
      {
        type: "p",
        content: "V takih primerih pridejo sporočila:",
      },
      {
        type: "list",
        content: [
          "      želim si ljubezni",
          "      tako sem sam(a)",
          "      jaz sem tako osamljen(a)",
          "      zakaj me nima rad(a)?",
          "      očitno si ne zaslužim ljubezni",
        ],
      },
      {
        type: "p",
        content: "To je le nekaj sporočil.",
      },
      {
        type: "p",
        content: "Obstaja pa druga plat – ko smo samski, a ne osamljeni, ker nas obdaja veliko ljudi, ki nas imajo radi.",
      },
      {
        type: "p",
        content: "Če smo začeli s pozitivnimi mislimi, pa tudi končajmo z afirmacijami:",
      },
      {
        type: "p",
        content: "“Znam in zmorem ljubiti.\nSprejemam ljubezen v vseh oblikah, varna sem.\nNaj traja kolikor traja, v tem času bom uživala.\nHvaležna za ljubezen in pozornost, ki mi jo daje.\nHvaležna, ker me uči, kaj ljubezen je.”",
      },
      {
        type: "p",
        content: "Kakšne so tvoje izkušnje in mnenje o ljubezni? Piši mi na [mirjana@akilea.si](mailto:mirjana@akilea.si), vesela bom.",
      },
      {
        type: "p",
        content: "Imaš vprašanje ali bi o določeni temi želel(a) izvedeti več, mi prav tako piši.",
      },
      {
        type: "p",
        content: "Če pa čutiš, da bi potrebovala podporo, te vabim na intuitivno masažo. Za termin mi piši na [mirjana@akilea.si](mailto:mirjana@akilea.si) ali na tel.št.: 040 863 594.",
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
    image: "/images/blog/notranji-otrok-kako-jih-vidim-jaz-na-intuitivnih-masazah.jpg",
    excerpt: "Majhna punčka, stara 4 leta, sedi na tleh z rokami okoli kolen in joče: »Zakaj me ne poslušajo?« Kako se nepredelani občutki iz otroštva zapišejo v telo in kako jih skozi masažo zacelimo.",
    paragraphs: [
      {
        type: "p",
        content: "**__Majhna punčka, stara 4 leta,__** __sedi na tleh, z rokami objema kolena in joče.__\n**__»Zakaj me ne poslušajo? Zakaj me ne vidijo?«__** __se sprašuje__.\n__Čutiti je globoko žalost, razočaranje, občutek ne-videnosti, ne-slišanosti.__",
      },
      {
        type: "p",
        content: "**__Punca, stara 12 let__**__, z resnim pogledom in izrazom na obrazu.__\n**__»Moram poskrbeti za mamo. Zdaj smo same.«__**\n__Čutiti je (pre)veliko breme odgovornosti po odhodu očeta.__",
      },
      {
        type: "p",
        content: "**__Punčka, stara 6 let__**__, v kotu sobe sedi, joče in se sprašuje__\n**__»Zakaj imajo rajši sestro? Zakaj mene ne marajo?«__**\n__Čutiti je globoko žalost in občutek nesprejetosti – z mano nekaj ni v redu.__",
      },
      {
        type: "p",
        content: "**__Punca, stara 8 let__**__, stoji, gleda okoli sebe, v očeh solze__ **__»Nihče me ne razume«__**",
      },
      {
        type: "p",
        content: "**__Punčka, stara 3 leta__**__, stoji in gleda bratca:__\n**__»Zakaj ON LAHKO in jaz ne?«__**\n__Žalost, jeza, razočaranje, občutek nepravičnosti in »zakaj fantje lahko«?__",
      },
      {
        type: "p",
        content: "**__Punca, stara 10 let,__** __žalostno gleda mamo in jo sprašuje__\n**__»Mami, zakaj me ne maraš?«__** __globoka žalost, solze tečejo__",
      },
      {
        type: "p",
        content: "**__Punca, stara 13let__**__,z globokim občutkom osamljenosti, nerazumljenosti__ **__»Sama sem.«__**",
      },
      {
        type: "p",
        content: "**__Punčka, stara 7 let__**__, hodi ob očetu in ga vleče za rokav__\n**__»Ati, poglej me, tukaj sem. To je zate.«__**\n__neskončna želja po očetovi pozornosti (oče čustveno odsoten)__",
      },
      {
        type: "p",
        content: "**__Fant, star 12 let__** __z globokim občutkom, da je kot sin že razočaral očeta__\n**__»Nikoli ne bom tak moški kot ati.«__**\n__odrašča ob avtoritativnem očetu, »pravem moškem«, ki ne kaže čustev__",
      },
      {
        type: "p",
        content: "**__Punca stara 10 let__**\n**__»Nikoli ne bom taka kot mama.«__** __(tako dobra, tako skrbna, tako polna ljubezni....)__\n__potem, ko že odkar ve zase, posluša, kako neposlušna in » poredna« je.__",
      },
      {
        type: "p",
        content: "**__»Prosim, ne zapusti me.«__** __zelo pogosta bolečina in občutek zapuščenosti pri tistih, ki so zgodaj ostali brez enega od staršev (zaradi smrti ali ločitve staršev).__\n__Posledično strah spustiti se v globlje odnose – da ne bi izgubili ljubljene osebe (partnerstvo ali prijateljstvo).__",
      },
      {
        type: "p",
        content: "Priznam, ni enostavno slišati, še bolj pa dejansko videti in občutiti vso to žalost notranjih otrok strank, danes odraslih oseb. Vse te občutke, ki jih nosijo v sebi in jim na podzavestni ravni usmerjajo življenje.",
      },
      {
        type: "p",
        content: "Kot je rekel Carl Jung,",
      },
      {
        type: "quote",
        content: "»Dokler nezavedno ne postane zavestno, bo vodilo vaše življenje in vi boste to imenovali usoda.«",
      },
      {
        type: "p",
        content: "A to je le nekaj primerov bolečin **notranjega otroka, ki sem jih videla na intuitvnih masažah.** V samem procesu, ko mu s stranko dava vedeti, da je viden in slišan v tej svoji bolečini, ko se mu ponudi varnost, ki je ni dobil, ko tudi stranka svojega notranjega otroka pomiri, objame, je ob koncu intuitivne masaže popolnoma druga slika.  Sedaj je tu smeh, olajšanje, razigranost. Včasih je že to, da vstane, da na obrazu ni več solz in da je čutiti olajšanje, velik premik naprej.",
      },
      {
        type: "p",
        content: "Zato je izredno pomembno zavedanje, da če želimo zaceliti ranjenega otroka v sebi, je potrebno, da odrasli del nas vzpostavi stik z njim in mu ponudi varnost ter ljubezen, ki je ni dobil.",
      },
      {
        type: "p",
        content: "Vesela bom tudi, če boš delila ta blog. Morda pa nekdo ravno sedaj potrebuje takšno srečanje, da mu/ji pomaga narediti korak naprej.",
      },
      {
        type: "p",
        content: "In ravno o tem, kako pomagati svojemu notranjemu otroku, govorimo tudi na naših tematskih Čajankah v Holističnem centru Akilea v Kopru. Če imaš vprašanja ali bi se želela naročiti na intuitivno masažo, mi kar piši na [mirjana@akilea.si](mailto:mirjana@akilea.si) ali pokliči na 040 863 594. Veselim se srečanja in vse sporočil, ki jih telo želi predati.",
      },
      {
        type: "p",
        content: "Objem,\n__Mirjana Groznik__",
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
    image: "/images/blog/dam-tebi-a-tudi-sebi.jpg",
    excerpt: "»Kdor hoče, najde pot, kdor pa ne, najde izgovore« .. brrr, ne vem za vas, ampak mene je ta stavek v preteklosti tolikokrat prav znerviral...",
    paragraphs: [
      {
        type: "p",
        content: "»Kdor hoče, najde pot, kdor pa ne, najde izgovore«  .. brrr, ne vem za vas, ampak mene je ta stavek v preteklosti tolikokrat prav znerviral. Strinjam se z njim, a jaz sem bila res iskreno utrujena od »iskanja poti«, iskanja dobesedno vsake proste minute, da sem lahko opravila vse, kar sem kot polno zaposlena mama dveh majhnih otrok, z možem, ki je bil veliko slubeno odsoten, lahko naredila. Res utrujena.",
      },
      {
        type: "p",
        content: "Moje mantre so postali trije stavki »vsaka minuta šteje«, »lovim minute« in »lahko na hitro«.",
      },
      {
        type: "p",
        content: "To sem upoštevala tako rigorozno, da če sem se ujela v mislih »imam 10 min časa«, sem hitro iskala, kaj bi lahko naredila. »Lahko dam perilo prat, lahko na hitro posesam, lahko na hitro napišem čestitko, lahko na hitro skočim v trgovino po dve stvari, lahko na hitro nesem smeti...«.  Dobra stran je bila, da sem v tem »na hitro« dodala tudi hitro hojo (kaj pa drugega :) ) 10-15min, po vasi ali v mestu med čakanjem hčerke, da končna trening. Vse je bilo »na hitro« in »lovljenje minut«. V primeru, da med temi dobesedno 10-15min nisem mogla narediti ničesar »konkretnega«, sem postala nemirna, razočarana, imela sem to za »izgubljen čas«. Bila sem strašno utrujena, ampak produktivna. Iskreno, drugega mi niti ni preostalo,  nihče ne bi ničesar naredil namesto mene.",
      },
      {
        type: "p",
        content: "A v vsem hitenju sem se pozabila ustaviti, te minute videti kot trenutke zame, za povezavo s sabo, za umiritev, za dihanje, za »nerazmišljanje«, za pisanje, za način, da umirim misli, umirim telo, umirim živčni sistem. Ni, da nisem želela, enostavno sem res pozabila, ker sem imela toliko stvari na to-do listi. V vsem tem tempu sem se odločila še za študij naturopatije in kolikor je bilo naporno še skoncentrirati se na učenje, sem v tem res uživala; ti vikendi so bili moj reset, 36ur za počitek.",
      },
      {
        type: "p",
        content: "Na enem od predavanj mi je profesor pred sošolkami rekel: »Ona živi z nogo na gasu do konca«. Bilo je smešno, a od žalosti, saj me je bolela vsaka točka na telesu, ki se je je dotaknil.  Nežno mi je prišepnil, da to ni ok in da naj upočasnim. In počasi sem res. Prelomna točka je bila, ko mi je mlajša hčerka rekla »mami, boš sedela z nami in gledala risanko?« Kar zajokala bi, ko sem dojela, da petkov družinski kino pomeni, da vsi skupaj sedimo in gledamo risanko, film in ne da jaz medtem likam. Ta čas sem seveda izkoristila za likanje. Logično, ne?! Ko samo pomislim, kako težko mi je bilo »samo« sedeti, medtem bi pa lahko počela še kaj drugega.",
      },
      {
        type: "p",
        content: "Zakaj vam vse to pišem? Zato, ker pri iskanju poti ne smemo pozabiti tudi nase, ne smemo pozabiti obrniti te minute in sekunde sebi v prid, posvetiti jih sebi. Strankam vedno rečem -  10sekund masiranja ušes ali tapkanja prsnice ali 3 vdihi in izdihi ali nekaj stavkov napisanih na list papirja, ki ga lahko potem tudi zavržeš, so boljše kot nič«.  »Vsaka sekunda šteje« :).  In res delujejo.",
      },
      {
        type: "p",
        content: "»Dam tebi, a tudi sebi.« Brez tega ne gre.",
      },
      {
        type: "p",
        content: "Če imaš vprašanja ali bi želela o kakšni temi izvedeti več ali bi se želela naročiti na intuitivno masažo, mi kar piši na [mirjana@akilea.si](mailto:mirjana@akilea.si) ali na 040 863 594. Veselim se srečanja in vse sporočil, ki jih telo želi predati.",
      },
      {
        type: "p",
        content: "Objem,",
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
    image: "/images/blog/ne-verjemi-vsemu-kar-slisis.jpg",
    excerpt: "Preprosta enačba DECEMBER = HITENJE + STRES + IZČRPANOST. Zapisana v kolektivni zavesti. Kaj pa če izberemo hvaležnost in notranji mir?",
    paragraphs: [
      {
        type: "p",
        content: "**Preprosta enačba DECEMBER = HITENJE+ STRES+IZČRPANOST**.",
      },
      {
        type: "p",
        content: "Zapisana v kolektvni zavesti. Zapisana v vsaki celici našega telesa. Zapisana v zraku, ki ga dihamo.",
      },
      {
        type: "p",
        content: "Enačba, ki jo postavijo na ogled že novembra, marsikje še preden dogorijo sveče, ki smo jim prižgali ljubim osebam za mavrico.",
      },
      {
        type: "p",
        content: "Enačba, ki v zadnjih letih, še preden koledar pokaže na 1.december, povzroči nemir in stiskanje v prsih. Ker telo ve. Telo se spomni, kako je bilo lani. Telo se spomni, kako je bilo predlani. Telo se spomni, kako je bilo v zadnjih letih. »Samo stres, hitenje in izčrpanost ter želja, da vse »to« čim prej mine«.",
      },
      {
        type: "p",
        content: "To nam govorijo. To beremo. O tem poslušamo na vsakem koraku. Že ob srečanju znanca na ulici, se pogovor hitro obrne na to, da komaj čaka, da bo decembra konec, a se je šele začel.",
      },
      {
        type: "p",
        content: "Ne vem, kako vi gledate na to, v kaj so spremenili december, a meni je kar hudo zanj. December  samo je. Mesec kot vsi ostali. Mesec, ki ima začetek in konec. Mesec, ki smo mu mi, ljudje, določili, da je mesec upanja, veselja, a tudi zaključkov in večje usmerjenosti v prihodnost.",
      },
      {
        type: "p",
        content: "**Enačba DECEMBER = UPANJE + VESELJE+ OBDAROVANJE+ZAKLJUČEVANJE+POGLED V PRIHODNOST**",
      },
      {
        type: "p",
        content: "Kje se je izgubila ta enačba?",
      },
      {
        type: "p",
        content: "Nikjer. Še vedno je tu, med nami, le mi **preveč verjamamo šumu okoli nas, preveč verjamemo narativu, ki se v medijih ponavlja kot pesmica, ki jo je »pač treba« povedati vsako leto. Ljudi je treba »spomniti«, da nam je decembra težko,** da nimamo druge izbire kot slediti **enačbi  DECEMBER = HITENJE+ STRES+IZČRPANOST.**  Kot nek matematični aksiom »tako pač je in o tem se ne razpravlja«.",
      },
      {
        type: "p",
        content: "A v zadnjih treh letih odkar skoraj vsakodnevno delam s strankami, vam lahko mirno povem, da je enačba",
      },
      {
        type: "p",
        content: "**DECEMBER = UPANJE + VESELJE+ OBDAROVANJE+ZAKLJUČEVANJE+POGLED V PRIHODNOST**\n**še vedno v nas**, v ljudeh in pogumno, korak za korakom, ponovno prihaja na plano.",
      },
      {
        type: "p",
        content: "Kako vem? Tako, ker vidim in sem priča temu, kako vse več ljudi zavrača to teorijo hitenja s tem, ko si dovoli ne poslušati ga.",
      },
      {
        type: "p",
        content: "Uporabljajo **tehniko IZBIRE**.",
      },
      {
        type: "p",
        content: "Sami izberejo, katerih dogodkov se bodo udeležili in koliko časa bodo tam ostali.\n\nSami izberejo, koliko in koga bodo obdarovali.\n\nSami izberejo, koliko piškotov bodo spekli ali pa jih kupili.\n\nSami izberejo, koliko voščilnic bodo ročno naredili in napisali in koliko kupili.\n\nSami izberejo, kako bodo preživeli december.\n\n**Sami izberejo, kako se želijo počutiti in zavestno delajo na tem**.",
      },
      {
        type: "p",
        content: "Ko vstopite v slaščičarno, naročite vse, kar ponujajo ali izberete pijačo in slaščice ?",
      },
      {
        type: "p",
        content: "Nekoliko težje je reči ne, ko so otroci majhni in vrtci, šole organizirajo različne predstave za starše. In marsikdaj (tudi meni), to predstavlja »samo še dodaten opravek na to-do listi«.",
      },
      {
        type: "p",
        content: "Tukaj pa nastopi čas za uporabo druge zelo močne tehnike, in sicer  **HVALEŽNOST.**",
      },
      {
        type: "p",
        content: "Hvaležna za to, da lahko gledam predstavo, v kateri sodeluje moj otrok.\n\nHvaležna, da vidim njen/njegov nasmeh na obrazu.\n\nHvaležna, da sem lahko prišla na predstavo (da mi je služba, zdravje to dopuščalo)\n\nHvaležna, da imam otroka, ki sodeluje v predstavi.\n\nHvaležna, da živimo v miru (koliko vojn je v svetu)\n\nHvaležna, da se kot ženska sploh lahko sama pripeljem na predstavo (marsikje tega ženskam ni dovoljeno)",
      },
      {
        type: "p",
        content: "Od obdobja C**ida, ko so nam dobesedno čez noč vzeli možnost izbire, le-te ne jemljem tako samoumevno. Ne jaz, ne moje stranke, ne vsak, ki se trudi, uči, živeti zavestno.",
      },
      {
        type: "p",
        content: "**Enačba**\n**IZBIRA + HVALEŽNOST = NOTRANJI MIR IN VEČJI STIK S SABO = VEČJI UŽITEK V DECEMBRU IN ŽIVLJENJU**\n**naj bo vaše vodilo.**\n**Ne verjemite vsemu, kar slišite**, **sploh pa ne temu, kako naj bi se počutili v decembru**.",
      },
      {
        type: "p",
        content: "Naredite si ga čim lepšega, pa",
      },
      {
        type: "list",
        content: [
          "čeprav boste kupili vse vočščilnice ali samo poslali elektronske,",
          "čeprav boste kupili piškote in jih ne spekli doma,",
          "čeprav se boste udeležili le »nujnih« zabav, prireditev in bili na njih kolikor nujno potrebno,",
          "čeprav ne boste generalno pospravili stanovanja/hiše",
          "čeprav ne boste okrasili stanovanje/hiše kot iz reklame",
          "čeprav bo božična ali silvestrska večerja obed z dvemi hodi in ne destimi",
          "čeprav bo na mizi kupljena potica in ne domača",
          "čeprav boste večino decembra veliko delali, a kljub tem uspeli najti trenutke za veselje",
          "čeprav boste na trenutke jezni, ker morate v službi ostati dlje kot ponavadi",
          "čeprav boste v telesu čutili napetost zaradi vseh opravkov, ki ste jih dali na seznam.\nTo je znak, da seznam ponovno pogledate in postavite prioritete, kaj prečrtate.",
          "čeprav boste počeli le to, kar si sami želite in ne, kar bi času primerno »morali«",
        ],
      },
      {
        type: "p",
        content: "**Telo si vse zapomni. Naj si letošnji december zapomni drugače.**",
      },
      {
        type: "p",
        content: "Nobena popolna večerja ali zabava ne more odtehtati napetosti, jeze, ki smo jo v tistem trenutku občutili v sebi ali ob nekom drugem. Ta občutek bo ostal z nami in ne popolno pečena potica.",
      },
      {
        type: "p",
        content: "Verjemite sebi. Vem, niti to ni enostavno, a se da; korak za korakom.",
      },
      {
        type: "p",
        content: "Želim vam en lep, ljubezni in veselja poln december.",
      },
      {
        type: "p",
        content: "Kako pa vi doživljate december danes v primerjavi z leti nazaj?",
      },
      {
        type: "p",
        content: "Vesela bom tudi vaših izkušenj, mnenj, vprašanj.",
      },
      {
        type: "p",
        content: "Pišite mi na [mirjana@akilea.si](mailto:mirjana@akilea.si) ali na tel.št.040 863 594",
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
    image: "/images/blog/toliko-se-trudimo-a-kaj-ko-se-ne-bi.png",
    excerpt: "Toliko se trudimo slišati sebe, da slišimo samo tisto, kar prihaja od zunaj. A kaj, ko se ne bi več trudili, ampak enostavno končno le SMO?",
    paragraphs: [
      {
        type: "p",
        content: "__Hvala ti za čas, ki si ga boš vzel(a) za tokratni blog, ki je drugačen. Beri ga **počasi**, z **občutenjem vsake besede**. Naj ti bodo spodnje besede **opomnik**...__",
      },
      {
        type: "p",
        content: "Toliko se **trudimo slišati sebe**, da slišimo samo tisto, kar prihaja od zunaj.\n\nToliko se **trudimo biti dobri**, da smo dobri do vseh, samo **do sebe ne**.\n\nToliko se **trudimo ustreči drugim**, da pozabimo **nase**.\n\nToliko se **trudimo biti vse**, da se na koncu počutimo kot nič.\n\nToliko se **trudimo vklopiti**, da se vmes odklopimo od sebe.\n\nToliko se **trudimo biti vsepovsod**, da na koncu **nismo nikjer**.\n\nToliko se **trudimo biti »in«**, da smo na koncu vedno »out«.\n\nToliko se **trudimo biti prisotni**, a niti ne vemo (še), kaj prisotnost v trenutku zares pomeni.\n\nToliko se **trudimo biti »pristni«**, da se v iskanju lastne **pristnosti izgubimo**.\n\nToliko se **trudimo,** da bi se **zaščitili pred bolečino**, da si jo na koncu **povzročimo sami**.\n\nToliko se **trudimo ne biti preveč**, da smo na koncu **premalo zase**.\n\nToliko se **trudimo narediti »vse prav«**, a pozabimo, da ima vsak svoj **»prav« in ustreči vsem je nemogoče.**\n\nToliko se **trudimo postaviti prioritete**, a na seznam **pozabimo dodati sebe**.\n\nToliko se **trudimo biti ljubljeni**, da **pozabimo ljubiti sebe**.\n\nToliko se **trudimo preživeti vsakdan**, da ga na koncu pozabimo doživeti.\n\nToliko se **trudimo najti srečo**, a pozabimo, da je **sreča že v nas**.\n\nToliko se **trudimo najti ravnovesje**, da ga pozabimo najprej ustvariti znotraj nas.\n\nToliko se **trudimo najti se**, a pozabimo, da se **moramo najprej izgubiti**, da bi se našli.\n\nToliko se **trudimo spremeniti svet**, a pozabimo, **da moramo najprej spremeniti sebe**, ljubiti svoje otroke in svet se bo spremenil.",
      },
      {
        type: "p",
        content: "Toliko se trudimo....  a kaj, **ko se ne bi več trudili**, ampak enostavno končno le SMO?",
      },
      {
        type: "p",
        content: "**Cel paket. Brez mašne. Brez okraskov.** V vsej svoji hkratni surovosti in nežnosti.",
      },
      {
        type: "p",
        content: "V vsem svojem levjem pogumu in zajčjem strahu.",
      },
      {
        type: "p",
        content: "V vseh svojih težnjah po nedostopnem in sprejemanjem, kar imamo v tem trenutku.",
      },
      {
        type: "p",
        content: "V vseh svojih sanjah in nočnih morah, ki se (ne)uresničijo.",
      },
      {
        type: "p",
        content: "**Trud** zamenjajmo **z odkrivanjem kdo v resnici smo**.",
      },
      {
        type: "p",
        content: "**Sem.**",
      },
      {
        type: "p",
        content: "__Bi želel(a) na seznam še kaj dodati ali podeliti svoje mnenje, izkušnjo? Piši mi na__ [mirjana@akilea.si](mailto:mirjana@akilea.si) __ali na tel.: 040 863 594.__",
      },
      {
        type: "p",
        content: "__Podeli ta blog z nekom, za katerega čutiš, da bi ga moral prebrati.__",
      },
      {
        type: "p",
        content: "__Hvala za tvoj čas in podporo!__",
      },
      {
        type: "p",
        content: "Objem,\nMirjana",
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
    image: "/images/blog/moja-izkusnja-z-bolecinami-v-krizu.jpg",
    excerpt: "»… ne že spet … ne grem še enkrat skozi to …« Fizična bolečina v križu je pogosto odraz notranje bolečine, spuščanja nadzora in potlačenih čustev.",
    paragraphs: [
      {
        type: "quote",
        content: "“… ne že spet … ne grem še enkrat skozi to …”",
      },
      {
        type: "p",
        content: "Jeza. Žalost. Nemoč. Solze, ki niso bile samo telesne – v nekem trenutku je zajokal cel moj jaz, duša. Po tednu bolečin v križu sem se, kot vsak dan, namenila na sprehod. A tokrat ni šlo. Nisem se mogla skloniti, niti dvigniti noge, da bi se obula. Poklicati sem morala hčerko, da mi pomaga.",
      },
      {
        type: "p",
        content: "In takrat sem zajokala. Na ves glas.",
      },
      {
        type: "p",
        content: "Spomin na operacijo hernije iz leta 2013 je bil še vedno živ. Ne toliko v glavi – temveč v **telesu.** Čeprav sem predelala razloge, rehabilitacijo, okrevanje … očitno vsega še nisem popolnoma izpustila. Se to sploh da? Morda bo čas pokazal.",
      },
      {
        type: "heading",
        content: "Začetek – 1. september 2025",
      },
      {
        type: "p",
        content: "Zjutraj sem se zbudila z rahlo bolečino v križu. \"Verjetno od prepiha\", sem si rekla. Okna so bila ponoči odprta. Vstala sem, se raztegnila, uredila in odšla v službo. A z vsako uro sedenja je bila bolečina hujša.",
      },
      {
        type: "p",
        content: "Do srede je postala tako močna, da nisem več mogla sedeti. Pomagala je le hoja. V četrtek sem ostala doma. Na bolniški sem bila do 19. septembra.",
      },
      {
        type: "heading",
        content: "Spomini, ki jih telo ni pozabilo",
      },
      {
        type: "p",
        content: "Po operaciji leta 2013 sem bila nekaj let \"vremenska postaja\" – vsak vremenski preobrat sem začutila v križu. A zadnje desetletje? Komaj kaj. Le redki opomini, da si nalagam preveč.",
      },
      {
        type: "p",
        content: "Zato me je tokratni izbruh presenetil. **Zakaj zdaj?**",
      },
      {
        type: "p",
        content: "Začela sem iskati odgovore.",
      },
      {
        type: "p",
        content: "Vedela sem, da vzrok ni le fizičen – da izhaja iz **čustvene in energetske ravni**. A najprej sem morala pomagati telesu. Akutni bolečini.",
      },
      {
        type: "heading",
        content: "Kaj mi je pomagalo",
      },
      {
        type: "image",
        content: "",
        images: [
          {
            src: "/images/blog/moja-izkusnja-z-bolecinami-v-krizu/krizu-1.jpg",
            caption: "",
            width: 900,
            height: 1600,
          },
        ],
      },
      {
        type: "list",
        content: [
          "**Samomasaža ušes in stopal** – večkrat dnevno.",
          "**Sprehodi s palicami**, raztezne vaje in sproščanje napetosti v ledvenem delu.",
          "**Masaža z ventuzo** – boleče, a prinašalo je olajšanje. Po 10 dneh je bolečina ostala le na določenih točkah.",
          "**Moxanje** – z moxa cigaro zvečer (ob pomoči moža ali hčerk), čez dan grelna vrečka. (več o tem [tukaj](/blog/moxanje))",
          "**Prehranski dodatki:** homeopatske granule arnike, tkivne soli (Calcium Phos., Fluor., Magnesium Phos., Ferrum Phos.), vitamini C in D, magnezij, silicij, probiotiki.",
          "**Masaže:** terapevtska masaza ter masaza stopal (na masaze sem sla, ko sem ze lahko sedla v avto, v dneh po 15.9.)",
        ],
      },
      {
        type: "p",
        content: "Ob vsem tem sem si ponavljala mantre:",
      },
      {
        type: "p",
        content: "**\"Bolečina, kaj mi želiš povedati?\"**\n**\"Na nežen način spuščam, kar mi ne služi.\"**",
      },
      {
        type: "image",
        content: "",
        images: [
          {
            src: "/images/blog/moja-izkusnja-z-bolecinami-v-krizu/krizu-2.jpg",
            caption: "",
            width: 1167,
            height: 1526,
          },
        ],
      },
      {
        type: "heading",
        content: "Notranje delo – srce bolečine",
      },
      {
        type: "p",
        content: "Fizična bolečina je pogosto odraz **notranje bolečine**. Zato sem se poglobila vase.",
      },
      {
        type: "p",
        content: "Na plano so prihajali stari spomini, potlačena čustva, strahovi iz otroštva in kasneje. Vse, kar sem morda že \"predelala\", a očitno še spustila iz telesa.",
      },
      {
        type: "p",
        content: "Poleti sem naredila pomemben korak – sledila sem klicu duše in se odločila, da **zapustim redno službo** ter stopim na pot, ki me resnično izpolnjuje. Avgusta sem dala odpoved. Sprva sem čutila olajšanje. Nato … **strah**.",
      },
      {
        type: "p",
        content: "Kaj zdaj?",
      },
      {
        type: "p",
        content: "Spomini, dvomi, negotovost glede prihodnosti – vse je prišlo na plan. Nisem se zavedala, **koliko vsega se je nabralo v meni**.",
      },
      {
        type: "heading",
        content: "Pomoč in podpora",
      },
      {
        type: "p",
        content: "Po pomoč sem se obrnila k čudoviti **Jerici Lebar (@jericalebar)**, ki me je podprla z energetsko terapijo. Pomagala mi je tudi draga **P**.",
      },
      {
        type: "p",
        content: "Slikanje z magnetno resonanco je pokazalo, da ni razloga za večjo skrb – hvaležna prijateljici **M.**, fizioterapevtki, ki je prva prebrala izvid, me potolažila, da ni dodatnih razlogov za skrb ter mi dala vaje (jih še vedno dosledno delam :) ).",
      },
      {
        type: "p",
        content: "Takrat sem vedela: **čas je, da se še bolj obrnem vase in spustim, kar mi ne služi več.**",
      },
      {
        type: "heading",
        content: "Ozaveščanje in transformacija",
      },
      {
        type: "list",
        content: [
          "Napisala sem **pismo hvaležnosti** herniji iz 2013 – za vse, kar me je naučila.",
          "Zahvalila sem se **trenutni bolečini** – za nova sporočila in uvid.",
          "Hodila sem po gozdu, meditirala, jokala, dovolila čustvom, da preplavijo telo.",
        ],
      },
      {
        type: "p",
        content: "In počasi … sem v telesu začutila **olajšanje.**\n**Zaupanje vase, v Življenje.**\n**Vera, da zmorem.** Da bo vse tako, kot mora biti.",
      },
      {
        type: "heading",
        content: "Učenje spuščanja nadzora",
      },
      {
        type: "p",
        content: "Zame največji izziv: **spuščanje nadzora.** (vsi vi, ki se soočate z bolečinami v križu – znano?)",
      },
      {
        type: "p",
        content: "Nad procesom. Nad rezultatom. Nad tem, \"kako bi moralo biti\".",
      },
      {
        type: "p",
        content: "Vsakič, ko pride dvom – si ponovim:",
      },
      {
        type: "p",
        content: "**\"Vse je tako, kot mora biti. Naredila sem, kar je v moji moči.\"**",
      },
      {
        type: "heading",
        content: "Zahvale",
      },
      {
        type: "p",
        content: "Iz srca hvala moji čudoviti mentorici Jerici, dragi P., prijateljici M. in **najboljši prijateljici Katarini** – za vso podporo, ljubezen, sočutje.",
      },
      {
        type: "image",
        content: "",
        images: [
          {
            src: "/images/blog/moja-izkusnja-z-bolecinami-v-krizu/krizu-3.jpg",
            caption: "",
            width: 1200,
            height: 1599,
          },
        ],
      },
      {
        type: "heading",
        content: "Zaključek",
      },
      {
        type: "p",
        content: "22.septembra sem se vrnila v službo. Več sem stala kot sedela, a **bila sem boljša** – fizično in čustveno.",
      },
      {
        type: "p",
        content: "Danes, ko to pišem, **sem brez bolečine.**",
      },
      {
        type: "p",
        content: "Z veliko mero hvaležnosti. Ker vem – **to ni samoumevno.**",
      },
      {
        type: "p",
        content: "Pot celjenja telesa je pogosto tudi pot celjenja čustev, misli, duše.",
      },
      {
        type: "p",
        content: "**Telo si zapomni.**\n**Prisluhnimo mu.**\n**Dovolimo si spustiti, kar nam ne služi več.**",
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
    image: "/images/blog/moxanje.jpg",
    excerpt: "Moxanje je postopek, kjer s prižgano mokso v obliki cigare ogrevamo akupresurne točke in meridiane, razsluzimo organe ter krepimo imunski sistem.",
    paragraphs: [
      {
        type: "p",
        content: "Moxanje je postopek, kjer s prižgano mokso v obliki cigare, v kateri so pelin in še druga zelišča:",
      },
      {
        type: "list",
        content: [
          "ogrevamo akupresurne točke in meridiane, s čimer okrepimo in uravnavamo pretok krvi in življenjske energije (Qi),",
          "organom dovajamo toploto oz. energijo in jih s tem krepimo,",
          "razsluzimo organe in telo",
          "krepimo imunski sistem",
        ],
      },
      {
        type: "p",
        content: "Na Kitajskem se moxanje izvaja že več kot 3000 let in v kombinaciji z akupunkturo daje zelo dobre rezultate.",
      },
      {
        type: "p",
        content: "Moxamo se lahko vsi, od dojenčkov do starejših oseb (dojenčke, otroke moxamo samo med lopaticama)",
      },
      {
        type: "highlight",
        content: "POMEMBNO❗\n❌ Z moxo se nikoli ne dotikamo kože, da ne pride do opeklin.\n❌ Nikoli se NE moxamo, če imamo povišano telesno temperaturo.\n❌ Nikoli NE moxamo popka, če imamo težave z večdnevno zaprtostjo.",
      },
      {
        type: "p",
        content: "Predeli, ki jih lahko sami doma moxamo:",
      },
      {
        type: "list",
        content: [
          "predel med lopaticama (tukaj lahko uporabimo tudi moxa grelno vrečko)",
          "popek (skozi popek energija prodre do vseh vitalnih organov. V popek damo žličko soli in ga moxamo, dokler se ne segreje. Z moxo se lahko sprehodimo še do predela maternice in jajčnikov oz ostalih predelov trebuha)",
          "trtico (za krepitev in dovajanje energije ledvicam; tukaj lahko uporabimo tudi moxa grelno vrečko)",
        ],
      },
      {
        type: "p",
        content: "Moxamo do 20 min vsak predel. Uporabimo lahko tudi moxa grelno vrečko.",
      },
      {
        type: "p",
        content: "Moxanje je priporočljivo pri:",
      },
      {
        type: "list",
        content: [
          "veliko sluzi v telesu (posledica uživanja prevelike količine mlečnih izdelkov, sladkorja in pšenice; bivanje ali delo v vlažnem okolju)",
          "artritisu (zaradi svojih grelnih in protibolečinskih lastnosti)",
          "prebavnih težavah",
          "ginekoloških težavah (miomi, ciste, težave z zanositvijo, endometrioza, PMS, itd.)",
          "vnetju mehurja,",
          "prostati,",
          "boleznih pljuč",
          "itd.",
        ],
      },
      {
        type: "p",
        content: "Naj poudarim, da pri razsluzitvi telesa in krepitvi organov NI dovolj samo moxanje. Nujno je iz prehrane izločiti živila, ki povzročajo sluz oz. poskrbeti, da odpravimo vlago v bivalnem oz. delovnem okolju.",
      },
      {
        type: "p",
        content: "Še posebej priporočljivo je moxanje v času spomladanskega in jesenskega enakonočja, saj 1x velja za 3x",
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
    image: "/images/blog/5-tipov-osebnosti-po-tkm.jpg",
    excerpt: "Najpomembnejši korak do boljšega odnosa s sabo in drugimi je ta, da ugotovimo KDO SMO. Spoznajte 5 tipov osebnosti: les, ogenj, zemlja, kovina in voda.",
    paragraphs: [
      {
        type: "p",
        content: "V odnosih velikokrat izhajamo iz sebe. Pričakujemo, da bodo tudi drugi delovali, razmišljali, sočustvovali, pomagali, gledali, videli, opazili, tako kot to počnemo mi.  Skladno s tem imamo lahko velika pričakovanja, a velika pričakovanja vodijo v velika razočaranja. Posledično so nesoglasja in slabi odnosi na vseh področjih življenja, skorajda neizogibni.",
      },
      {
        type: "p",
        content: "Najpomembnejši korak do boljšega odnosda s sabo in drugimi je ta, da ugotovimo KDO SMO. Šele ko razumemo sebe in se sprejmemo, bomo lahko razumeli in sprejeli druge.",
      },
      {
        type: "p",
        content: "Načinov in tehnik je veliko, obstaja tudi ogromno psiholoških testov, ki nam lahko pomagajo sestaviti mozaik. Eden od načinov, ki je meni veliko pomagal, je opazovanje ljudi glede na teorijo PET TIPOV OSEBNOSTI PO TKM (Tradicionalni kitajski medicini). V TKM je osnova narava in 5 elementov – les (jetra), voda (ledvice), kovina (pljuča), zemlja (vranica), ogenj (srce), zato poznamo tudi pet tipov osebnosti, ki pripadajo določenemu elementu.",
      },
      {
        type: "p",
        content: "Z uporabo te teorije, hitreje in lažje razumem in pomagam stranki, ki se obrne name po nasvet, obenem mi je ponudila neprecenljivo pomoč v zasebnem življenju in vseh odnosih.",
      },
      {
        type: "p",
        content: "V nadaljevanju je predstavljen vsak od petih tipov osebnosti po TKM, njihove značilnosti ter kako (ne)sodelujejo z drugimi elementi. Ti orisi naj vam bodo v pomoč, morda prvi korak k boljšemu razumevanju partnerja, otroka, staršev, sodelavca, sodelavke, vodje, in vseh, ki vas obkrožajo. “Spremeni pogled in vse se bo spremenilo” velja tudi v tem primeru.",
      },
      {
        type: "p",
        content: "Vsi smo mešanica vseh pet tipov (elementov), le pri vsakem posamezniku so določeni tipi nekoliko bolj izraženi; v veliki večini sta to dva, morda trije in potem rečemo, da je nekdo npr. jetro-srčni tip. Upoštevati je treba tudi to, da v različnih življenjskih obdobjih lahko nekoliko stopijo v ospredje drugi elementi, zato je pomembno, da ne posplošujemo preveč.",
      },
      {
        type: "p",
        content: "Spodnji opisi naj vam služijo kot orisi, za natančnejšo določitev, je potreben stik in pogovor s posameznikom.",
      },
      {
        type: "heading",
        content: "ELEMENT LESA – JETRNI TIP",
      },
      {
        type: "p",
        content: "**Fizične značilnosti:**",
      },
      {
        type: "list",
        content: [
          "vitko, mišičasto telo,",
          "ozki boki in pas,",
          "močna ramena,",
          "temna polt (hitro porjavijo), močni, ponavadi temni lasje,",
          "nizko čelo,",
          "dlake močne in goste",
          "fizično močni, vzdržljivi",
        ],
      },
      {
        type: "p",
        content: "**Osebnostne lastnosti**:",
      },
      {
        type: "list",
        content: [
          "vedo, KAJ želijo in KAKO bodo to doseglji,",
          "imajo načrt, zelo organizirani, delovni (deloholiki), kreativni",
          "odlični vodje, imajo vizijo, realizirajo ideje, iščejo rešitve, spreminjajo stvari",
          "trmasti, odločni, radi dokazujejo svoj “prav”",
          "redko sprejemajo tuja mnenja",
          "prvi odgovor je vedno NE, želijo ukazovati",
          "ne marajo, da jim drugi govorijo kaj in kako naj delajo",
          "radi imajo red, strukturo, organizacijo",
          "dobro delujejo v stresnih stiuacijah in pod pritiskom",
          "vidijo “širšo sliko”, zato niso pozorni na podrobnosti",
          "ne marajo krivic, laži, ovinkarjenja",
          "pogumni, ne poznajo strahu",
          "največ energije in najraje delajo od poznega popoldneva do pozne noči",
          "ne marajo zgodnjega vstajanja, juter, težko vstanejo iz postelje",
          "ko jim je dolgčas, iščejo nekaj, s čim bi se zaposlili",
          "čustvo in največji izziv: JEZA",
        ],
      },
      {
        type: "p",
        content: "**Svetlolasi jetrni tipi** niso tako maščevalni, ne kričijo kot temni jetrni tipi, so bolj nagnjeni h kritiziranju.",
      },
      {
        type: "p",
        content: "Radi imajo red in čistočo, težijo k popolnosti. “Vse imajo in naredijo boljše kot drugi”.",
      },
      {
        type: "p",
        content: "Vedno so v pogonu, vedno iščejo kaj, s čimer bi se zaposlili.",
      },
      {
        type: "p",
        content: "**Ko je element lesa v neravnovesju:**",
      },
      {
        type: "list",
        content: [
          "hitro se razjezijo, zamerljivi, razdražljivi, vzkipljivi, povzdignejo glas",
          "brezkompromisni, pretirana želja po nadzoru, nepotrpežljivi",
          "pretirana želja po dokazovanju in uveljavljanju svojega “prav”",
          "če je kaj narobe, to izpostavijo na glas, ne glede na čustva drugih,",
          "imajo radi red in čistočo, težijo k popolnosti",
        ],
      },
      {
        type: "heading",
        content: "ELEMENT OGNJA – SRČNI TIP",
      },
      {
        type: "p",
        content: "**Fizične značilnosti:**",
      },
      {
        type: "list",
        content: [
          "Obraz okrogel ali v obliki srca",
          "močnejše postave (večje prsi in trebuh), kratek vrat",
          "skoraj neporaščeni, veliko se potijo, vedno jim je vroče",
        ],
      },
      {
        type: "p",
        content: "**Osebnostne lastnosti:**",
      },
      {
        type: "list",
        content: [
          "družabni, strastni, radi se smejijo in zabavajo druge,",
          "radi imajo ljudi, radi se družijo, veliko se objemajo, imajo",
          "vellik krog prijateljev, družinski, želijo, da bi bili tudi drugi srečni",
          "veliki gurmani, radi kuhajo",
          "živijo v sedanjem trenutku, želijo uživati",
          "težko rečejo NE, ker želijo vsem ustreči",
          "radi veliko govorijo, vse povejo in opišejo do podrobnosti",
          "romantiki,",
          "čustvo: poleg veselja; panika",
        ],
      },
      {
        type: "p",
        content: "Ne delajo dolgoročnih planov, delujejo po trenutnem vzgibu, ne željo se obremenjevati, kaj bo jutri. A ravno zaradi tega si hitro predstavljajo najhujše scenarije in radi zapaničarijo, zapadejo v tesnobo, nespečnost, občutke krivde in notranjega kaosa. Izogibajo se težkim pogovorom. Pogosto si naložijo veliko odgovornosti in obveznosti, težko rečejo “ne”.",
      },
      {
        type: "p",
        content: "**Ko je element ognja v neravnovesju**:",
      },
      {
        type: "list",
        content: [
          "hitro zapaničarijo, nemir, zaskrbljenost,",
          "občutki praznine, krivde, tesnobe, nespečnost,",
          "predstavljajo si najhujše možne scenarije",
          "vedno v iskanju užitka, sreče, tudi v odnosih (menjava partnerjev, prijateljev, itd.)",
        ],
      },
      {
        type: "heading",
        content: "ELEMENT ZEMLJE – VRANIČNI TIP",
      },
      {
        type: "p",
        content: "**Fizične značilnosti:**",
      },
      {
        type: "list",
        content: [
          "telo v obliki hruške,",
          "pogosto močnejši tudi v predelu trebuha",
          "podvrženi k zatekanju vode, še posebej v spodnjem delu",
          "(notranji del kolen, meča, veliko celulita, malo mišic)",
          "veliko se potijo",
        ],
      },
      {
        type: "p",
        content: "**Osebnostne lastnosti**:",
      },
      {
        type: "list",
        content: [
          "sočutni, skrbijo za druge, želijo pomagati ljudem",
          "želijo rešiti svet, druge postavljajo na 1.mesto",
          "radi izdelujejo stvari, vrtnarijo,",
          "vedno spakirajo preveč (od hrane do oblačil),",
          "težko zaračunavajo svoje storitve",
          "dobri poslušalci, ne postavljajo se na nobeno stran",
          "težko prosijo za pomoč",
          "gonilno čustvo: ZASKRBLJENOST",
        ],
      },
      {
        type: "p",
        content: "**Ko je element zemlje v neravnovesju**:",
      },
      {
        type: "list",
        content: [
          "radi se oprijemajo ljudi (prijateljev, družinskih članov)",
          "pričakujejo, da bodo drugi opravili stvari za njih oz. namesto njih",
          "premišljujevanje se spremeni v obsesivno razmišljanje,",
          "slabši spomin",
          "postanejo počasni in leni",
        ],
      },
      {
        type: "heading",
        content: "ELEMENT KOVINE – PLJUČNI TIP",
      },
      {
        type: "p",
        content: "**Fizične značilnosti:**",
      },
      {
        type: "list",
        content: [
          "široka ramena, ozki boki",
          "močne poteze obraza",
          "svetla, porcelanasta polt",
          "pogosto pegice po obrazu",
        ],
      },
      {
        type: "p",
        content: "**Osebnostne lastnosti**:",
      },
      {
        type: "list",
        content: [
          "zanesljivi, delovni, organizirani, radi imajo stvari pod nadzorom",
          "radodarni, dobrodelni, nesebični, težijo k popolnosti",
          "življenje jemljejo kot duhovno potovanje, polno preizkušenj, so “realni”",
          "ne znajo potolažiti, še posebej do ljudi, ki so jim blizu, znajo delovati “hladno”",
          "iščejo višji pomen življenja in k temu želijo spodbuditi tudi druge, da postanejo najboljša verzija sebe",
          "Uživajo v samoti, v samorefleksiji",
          "zlahka se distancirajo od oseb, stvari, dogodkov, ki jim ne ustrezajo",
          "Izogibajo se konfliktom in dramam,",
          "zato pogosto delujejo hladno, ne znajo potolažiti",
          "ne marajo vljudnostnih pogovorov brez vsebine",
          "ko se razjezijo, sde umaknejo, tako fizično kot čustveno, izogibajo se konfliktom, potrebujeo čas, da predelajo (za razliko od elementa lesa, ki se takoj razjezi)",
          "gonilno čustvo: ŽALOST, MELANHOLIJA, ODMAKNJENOST",
        ],
      },
      {
        type: "p",
        content: "Ko jim je dolgčas, se znajo ustaviti, počivati, meditirati.",
      },
      {
        type: "p",
        content: "**Ko je element kovine v neravnovesju**:",
      },
      {
        type: "list",
        content: [
          "pretirano iskanje duhovnosti, novega “guruja”, novega duhovnega vodje",
          "zgodi se, da se zaciklajo, analizirajo kar NAJ bi počeli, čeprav to ne deluje  in vedno znova počnejo stvari, ki ne delujejo. Težko se ustavijo in pogledajo drugam, poiščejo drugo rešitev.",
          "zato pogosto delujejo hladno, ne znajo potolažiti",
        ],
      },
      {
        type: "p",
        content: "Ob sebi potrebujejo tudi “prizemljene” ljudi, da jih ne odnese.",
      },
      {
        type: "heading",
        content: "ELEMENT VODE – LEDVIČNI TIP",
      },
      {
        type: "p",
        content: "**Fizične značilnosti:**",
      },
      {
        type: "list",
        content: [
          "nežen, okrogel obraz (baby face)",
        ],
      },
      {
        type: "p",
        content: "Če je element vode v neravnovesju:",
      },
      {
        type: "list",
        content: [
          "telo zelo suho,",
          "suh in podolgovat obraz",
          "ustnice ozke in majhne",
          "koža nagubana, suha,",
          "noge in roke dolge, malo mišic",
          "se ne potijo",
          "vedno jih zebe, ne marajo grobih masaž",
          "malo energije, potrebujejo veliko počitka",
        ],
      },
      {
        type: "p",
        content: "**Osebnostne lastnosti:**",
      },
      {
        type: "list",
        content: [
          "umirjeni, ustvarjalni, umetniki, sanjači,",
          "radi imajo globoke pogovore, filozofi, pišejo, berejo",
          "opazijo podrobnosti, radi zbirajo predmete, znajdejo se v neredu",
          "ne znajo in ne marajo hiteti, vse delajo počasi",
          "najraje delajo sami, potrebujejo “varen” prostor",
          "imajo težave z dokončevanjem zadev, ne sprovedejo jih do konca, odlašajo",
          "ne govorijo veliko, govor počasen, umirjen, tih",
          "gonilno čustvo: STRAH",
        ],
      },
      {
        type: "p",
        content: "**Ko je element vode v neravnovesju**:",
      },
      {
        type: "list",
        content: [
          "samotarji, nagnjeni k depresiji, strah pred zapuščenostjo",
          "imajo malo energije",
        ],
      },
      {
        type: "heading",
        content: "KAKO KOMUNICIRATI S POSAMEZNIM ELEMENTOM?",
      },
      {
        type: "p",
        content: "**Element LESA**:",
      },
      {
        type: "list",
        content: [
          "želijo jasno, neposredno komunkacijo, brez ovinkarjenja, jasna navodila, strukturo in cilje",
          "želijo imeti občutek, da oni vodijo",
          "ne poudarjajte, da nimajo prav ali kaj so naredili narobe, ker se bodo uprli, razjezili in na vsak način želeli dokazati, da imajo oni prav in ne vi",
          "uporabite mehkejši pristop, govorite nežno, polglasno, v nižjem tonu kot oni",
          "ne hvalite jih preveč, ker vas ne bodo cenili",
        ],
      },
      {
        type: "p",
        content: "Eden od za njih značilnih stavkov je: “Daj, daj, povej, nimam časa.”",
      },
      {
        type: "p",
        content: "**Element OGNJA:**",
      },
      {
        type: "list",
        content: [
          "stvari jim predstavite skozi veselje, radost, pozitivizmom",
          "ob hrani je vse lažje",
          "zelo hitro se navdušijo nad nečim in ko jim ni več zanimivo, bi prešli na naslednjo navdušujočo stvar, nalogo, odnos, zato moramo biti pozorni, da zadeve speljejo do konca",
        ],
      },
      {
        type: "p",
        content: "**Element ZEMLJE**",
      },
      {
        type: "list",
        content: [
          "ob hrani, s pozitivizmom, skrbjo za dobrobit",
          "če je element zemlja v neravnovesju in postanejo počasni in leni, je potrebna dodatna spodbuda, jasna navodila in roki za izvedbo.",
          "“Kako bomo to izpeljali, ali imamo dovolj sredstev, ljudi, lahko komu pomagam…?”",
        ],
      },
      {
        type: "p",
        content: "**Element KOVINE**:",
      },
      {
        type: "list",
        content: [
          "želijo govoriti ena na ena, še najraje na sprehodu, v gibanju",
          "dati jim občutek varnosti, da  se lahko povežejo z nami, da lahko začutijo in izrazijo tudi druga bolj globoka čustva, kot so radost, žalost,...",
          "velikokrat meni, da so tako velika radost, veselje, sreča, ipd. zaigrani, zato se tako težko povežejo z osebo z elementom ognja",
          "polni so modrosti in razumevanja življenja, zato bodo cenili, če se boste vsaj občasno spustili z njimi v take pogovore",
          "**“To ni nič takega, vse je v redu. Ok, dobro, malo pretiravaš s tem navdušenjem/dramo… to je pač življenje”**",
        ],
      },
      {
        type: "p",
        content: "**Element VODE:**",
      },
      {
        type: "list",
        content: [
          "potrebujejo čas za pogovor, delo in umirjeno okolje",
          "potrebujejo nemoten čas za dokončanje nalog",
          "njihov največji izziv je STRAH, strah pred življenjenjem, pred neznanim, pred spremembami, zato  radi zavlačujejo, ker se bojijo (ne vem, kako bom to naredil).",
          "potrebujejo ustaljene tirnice, rituale, kar jim daje občutek varnosti",
          "pogosto imajo občutek, da jih nihče ne razume, zato jim stopimo naproti, si vzamemo čas zanje, jih poslušamo",
        ],
      },
      {
        type: "p",
        content: "Pomembno: **osebe z elementom VODE, ZEMLJE in KOVINE ne marajo hitenja in priganjanja.**",
      },
      {
        type: "p",
        content: "S tem, kar smo do sedaj spoznali, lahko bolje razumete sebe in druge. Tako, npr. če imate sodelavca ali nadrejenega, kjer je dominanten element lesa, potem imejte v mislih, da je njegovo gonilno čustvo JEZA in če pridete v pisarno in je že jezen, razdražljiv, to ne pomeni, da je jezen na vas (no, morda je, a obstaja velika verjetnost, da ni☺), temveč, da le na ta način izraža svoj frustracijo nad nastalo situacijo. Ponavadi se hitro pomirijo, velikokrat sploh nimajo občutka, da so morda pregrobo odreagirali in naprej nadaljuejo, kot da ni bilo nič.",
      },
      {
        type: "p",
        content: "Od osebe z elementom vode ne moremo pričakovati, da se bo smejala na ves glas in želela biti v veliki ali glasni družbi, če vemo, da imajo radi mir in prostor za razmislek, branje, razmišljanje, ustvarjanje.",
      },
      {
        type: "p",
        content: "Od osebe, ki jo je vsepovspod polno, kot npr. oseba z elementom ognja, ne moremo pričakovati, da bo lahko optimalno delala in se dobro počutila, če ji namenimo pisarno, kjer bo sama v njej. In če se hitro prestraši ali zapaničari, jo pomirimo, ne obsojamo, to je pač “normalna” reakcija osebe z elementom ognja.",
      },
      {
        type: "p",
        content: "Oseba z elementom zemlja pogosto sprašuje, ali lahko kako pomaga, a to ne pomeni, da vi nečesa ne znate ali delate dobro, ona le želi pomagati. V kolikor je element zemlje v neravnovesju, pa imejmo v mislih, da so nagnjene k pretiranemu premlevanju, postanejo počasni in leni.",
      },
      {
        type: "heading",
        content: "(NE) SODELOVANJE MED POSAMEZNIMI ELEMENTI?",
      },
      {
        type: "p",
        content: "**Sodelovanje** steče **zlahka** med elementoma:",
      },
      {
        type: "p",
        content: "**voda hrani les**  (brez vode ni rasti dreves in rastlin)\n**les  nahrani ogenj**  (zažgemo les, da dobimo ogenj)\n**ogenj ustvarja zemljo** (pri gorenju nastajajo saje, ki sčasom postanejo zemlja)\n**zemlja proizvaja kovino** (zemlja ustvari vse, kar potrebujemo za nastanek kovine)\n**kovina zbira vodo**  (pri segrevanju kovine, pride do kondenza vode na površini kovine)",
      },
      {
        type: "p",
        content: "Primeri:",
      },
      {
        type: "p",
        content: "Ker osebe z elementom vode stežka izpeljejo zadeve do konca, jim bodo v veliko pomoč osebe z elementom lesa.",
      },
      {
        type: "p",
        content: "Osebo z elementom vode lahko povežete tudi z osebo z elementom ognja, da se navzamejo  strasti za nova doživetja.",
      },
      {
        type: "p",
        content: "Osebo z elementom zemljo lahko povežemo z osebo z elementom ognja. Obe imata radi ljudi, skrbita za druge, a bo oseba z elementom ognja odvrnila osebo zemljo od prevelike zaskrbljenosti, čeprav ne bosta verjetno nikoli ravno najboljši prijateljici.",
      },
      {
        type: "p",
        content: "**Sodelovanje** med elementoma bo **zelo težko**, mnoga nesoglasja, vedno na robu “iskrice”:",
      },
      {
        type: "p",
        content: "**ogenj topi kovino**\n**kovina reže les**\n**les oslabi zemljo** (les poseže v zemljo)\n**zemlja ustavi vodo** (voda ne more teči)\n**voda pogasi ogenj**",
      },
      {
        type: "p",
        content: "Pri oblikovanju delovnih skupin ali pripravi projektov, moramo vedeti:",
      },
      {
        type: "list",
        content: [
          "CILJ naloge, projekta, kaj želimo doseči",
          "S KOM BOMO SODELOVALI (ne glede na to, ali gre za poslove partnerje ali oddelke znotraj podjetja)",
          "Dobro SPOZNAMO sodelavce, KDO, KAJ, KAKO",
        ],
      },
      {
        type: "p",
        content: "Na podlagi naštetih (ne)sodelovanj, bomo lažje sestavili delovne skupine ali razdelili naloge.",
      },
      {
        type: "p",
        content: "Podajam primer uporabe teorije 5 tipov osebnosti v delovnem okolju.",
      },
      {
        type: "p",
        content: "Če imamo npr. projekt pripraviti marketinško akcijo:",
      },
      {
        type: "list",
        content: [
          "bomo za pojavljanje v javnosti, vodenje in pripravo načrtov, strategij, izbrali element lesa,",
          " lahko tudi v sodelovanju z elem. ognja, ki je lahko zadolžen tudi za povezave z drugimi akterji, potrebnimi za izpeljavo akcije",
          "za analize in podporo v ozadju pa elem. vode. Ta element ima lahko tudi veliko idej.",
        ],
      },
      {
        type: "p",
        content: "To je le eden od primerov, zelo posplošen, seveda. Terorijo 5 tipov osebnosti lahko res uporabimo v vseh odnosih, kjerkoli. Deluje, preverjeno.",
      },
      {
        type: "p",
        content: "Ste se že prepoznali v katerem od tipov osebnosti? Morda otroka, partnerja, sodelavce? Poskusite upoštevati njihove značilnosti in opazujte, kako se bodo odnosi spreminjali. Zelo bom vesela vaših sporočil, izkušenj.",
      },
      {
        type: "p",
        content: "Seveda lahko to znanje uporabite tudi izven delovnega okolja. Celo priporočam to. Osebno mi je veliko pomagalo razumeti družinske člane, ne razburjam se več (toliko ☺) po nepotrebnem, ker sem jih lažje sprejela.",
      },
      {
        type: "p",
        content: "__V kolikor menite, da bi to poznavanje teorije Pet tipov osebnosti po TKM še komu koristilo, ga lahko delite, a le v celoti. Prepovedano je spreminjanje članka brez mojega soglasja.__",
      },
      {
        type: "p",
        content: "__Hvala, ker ste si  vzeli čas za branje in naj vam pridobljeno znanje služi!__",
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
        content: "14. septembra obeležujemo svetovni dan atopijskega dermatitisa (AD). O naši izkušnji z AD sem 16.9. na FB objavila krajši zapis, v spodnjih vrsticah pa si lahko preberete, kako smo mi pomagali mlajši hčerki, kako ga je ona doživljala, kako jaz kot mama, kako je vplival na družino. A ker že od malega verjamem, da se vse zgodi z razlogom, da je v vsaki, še tako, na videz slabi stvari, nekaj dobrega, sem ves čas našega popotovanja, iskala dobre plati. To me je držalo pokonci, mi vlivalo moči in upanje, da bo boljše, da se bo(mo) izvlekli iz tega.",
      },
      {
        type: "p",
        content: "Prva slika je slika rokic iz julija l. 2016, takrat skoraj 7 letne hčerke, ko je bil izbruh dermatitisa najhujši. Naslednje slike so slike njenih oči iz marca oz aprila istega leta – nabuhle, rdeče, z luskami – ki se je v začetku maja izkazal kot atipični znak PARAZITOV V ČREVESJU oz. glist in vzrok za kasnejši AD! Ja, naša hči je dobila gliste, se zbudila z rdečimi, natečenimi očmi. Tako pediatrinja kot zdravnica v alergološki ambulanti sta suvereno ocenili, da gre za AD. Moje besede, da dvomim v to, ker se je taka zbudila, enostavno nista želeli slišati. Dobra novica obiska v alergološki ambulanti je bila ta, da so bili kožni testi negativni.",
      },
      {
        type: "p",
        content: "Po slabih dveh mesecih, ko se je stanje z očmi samo slabšalo, navkljub spremembi prehrane in jemanju probiotikov, itd., smo po “naključju” prišli v stik z zdravnico, ki je takoj, ko jo je zagledala, rekla, da ima parazite! Kakšno olajšanje! Morda pa smo le našli vzrok in rešitev. Test je res pokazal prisotnost glist. Presenečenje je bilo še toliko večje, ker ni imela za njih tipičnih znakov. Znebili smo jih, oči so bile po 2 tednih spet brez rdečine in lusk. Jupi!",
      },
      {
        type: "p",
        content: "Po slabem mesecu pa se je pojavila suha koža na notranji strani komolcev, ki se je res razvila v AD. Žalost, jok, neprespane noči zaradi praskanja in skrbi, kako ji pomagati, kaj ji skuhati, preizkušanje orodij, ki sem se jih učila na naturopatski šoli (ko sem prišla domov s prvih predavanj, me je hčerka pričakala z natečenimi očmi, takoj sem dobila “case study”), so me, nas, naju, spravljali v obup.",
      },
      {
        type: "heading",
        content: "Odpravljanja težav z atopijskim dermatitisom smo se lotili s:",
      },
      {
        type: "p",
        content: "**Prehrano**: izločitev in vpeljava določenih živil v prehrano je bil prvi korak že februarja, ko še nismo vedeli, zakaj ima natečene oči. Vedela pa sem, da je to reakcija telesa na nekaj, kar mu škodi.",
      },
      {
        type: "p",
        content: "Odločila sem se, da **iz prehrane izločim ene najbolj vnetnih živil - gluten in mlečne izdelke.** Namesto njih smo uporabljali riževo mleko, občasno mandljevo ali kokosovo, riževo moko, ajdovo moko, brezglutensko moko, quinoo, riž, lečo, čičeriko, proso, adzuki fižol, kus kus, ipd.",
      },
      {
        type: "p",
        content: "Meso: perutnina, občasno goveje, telečje, kokoš za kokošjo juhico, pozimi svinjsko, ribe, občasno kozice.",
      },
      {
        type: "p",
        content: "Zelenjava: bučke, korenček, brokoli, koromač, koleraba, grah, zelena solata, krompir, hokaido buče, brokoli, cvetača, zelena, rdeča pesa, ipd., gobe; sveže in sezonsko.",
      },
      {
        type: "p",
        content: "Sadje: jabolka, breskve, lubenice, poleti občasno češnje, melone, suhe brusnice, jagode, gozdni sadeži, ananas, grozdje, kostanj, ipd.",
      },
      {
        type: "p",
        content: "Začimbe: sol, cimet, ingver, kurkuma.",
      },
      {
        type: "p",
        content: "Semena: bučna, lanena, sončnična, konopljina, chia semena.",
      },
      {
        type: "p",
        content: "**Vse jedi** sem **sama pripravljala**, tudi kruh, marmelade, namaze. Edino, kar smo kupovali, so bila rastlinska mleka, le mandljevo sem sama delala.",
      },
      {
        type: "p",
        content: "Hčerko sem **izpisala iz šolske prehrane**, kupila sem ji termos posodo s tremi mini posodicami, v katerih je imela malico, kosilo in popoldansko malico. Doma je pojedla zajtrk, zvečer pa večerjo. Ja, prav predvidevate, tisto leto sem bila velikoooo v kuhinji. Zvečer in zjutraj, a nisem videla drugega izhoda.",
      },
      {
        type: "p",
        content: "Želela sem vedeti, kaj vnaša v svoje telo, da sem lahko hitreje ugotovila, kaj ji ustreza in kaj ne. Poskusili smo tudi s kupljenimi bio brezglutenskimi veganskimi piškoti, a je imela že po nekaj minutah tako srbečico, da se je spraskala do krvi. Ona je jokala, jaz pa še bolj.",
      },
      {
        type: "image",
        content: "",
        images: [
          {
            src: "/images/blog/dermatitis/dermatitis-potek-1.jpg",
            caption: "",
            width: 1024,
            height: 1024,
          },
        ],
      },
      {
        type: "p",
        content: "**Popoldan in zvečer so bile na krožniku samo beljakovine (živalske in rastlinske) in zelenjava.**",
      },
      {
        type: "p",
        content: "Priznam, ni bilo lahko, še posebej na začetku, ko smo se vsi morali privaditi na žita, ki jih prej sploh nismo poznali. A smo se, še posebej, ko smo pri hčerki opazili izboljšanja. In verjemite, otroci so veliko bolj dosledni in brez težav rečejo dolčeni hrane NE, pa čeprav jo imajo radi, ker se takoj spomnijo, kako jih boli, če jo pojejo. Za zgled so nam lahko. Meni je moja hči vsekakor bila.",
      },
      {
        type: "list",
        content: [
          "**Probiotiki:** 2x AxiBoulardi junior po zajtrku + 2x AxiDophilus junior po večerji.",
          "**Prehranski dodatki:**",
          "**Omega 3** (ribje olje; ves čas),",
          "**Organski silicij** ((iz izvlečka riža) pila 3x/dan, poskusili namazati na roke, a jo je peklo, zato samo pila (2 x po 1 mesec)),",
          "**Oligoelement mangan-baker** (2 škatli),",
          "**vitamin C, vitamin D** (to dvoje ves čas),",
          "**svetlinovo olje** (2 meseca),",
          "od marca l. 2017 pričela s pitjem **zeolita** 2x na dan 1 čajno žličko (peljala sem jo tudi na bioresonanco, kjer je priporočila pitje zeolita) in",
          "**Schusslerjeve oz. tkivne soli**: Calcium Phosphoricum, Ferrum Phosphoricum, Kalium Chloratum (Muriaticum), Magnesium Phosphoricum, Natrium Phosphoricum, Silicea (po ½ tablete od vsake soli, 2x na dan).",
        ],
      },
      {
        type: "p",
        content: "Tkivne soli so naši hčeri res pomagale pri celostni regeneraciji. Učinek je bil viden že po nekaj dneh, predvsem je hitro izginila rdečica, koža ni bila več vneta. Kar malo hudo mi je bilo, ker nisem že prej izvedela za njih, ampak zato so pa od takrat tkivne soli pri nas doma del domače lekarne, “prva pomoč” za celo družino (od praskanja v grlu, do bolečin v trebuhu, do regeneracije po treningu, slabostih, itd.).",
      },
      {
        type: "list",
        content: [
          "**Mazanje z različnimi kremami** – iskanje najbolj ustrezne. Avene Cicalfate občasno na začetku. Veliko časa in denarja smo porabili za iskanje primerne čim bolj naravne kreme, ki pa ji žal niso ustrezale. Nato smo poskusili z mazilom za problematično kožo, narejeno z dodatki kanabinoidov, vanilije, ognjiča in vitamina E od Hemptoucha, ki ji je res pomagalo, še posebej poleti, ko je bilo najhujše. Z izboljšanjem kože ji je to mazilo postalo premočno, zato smo poskusili z Atopic Cream od SkinFairytale in tudi ta se je čudovito obnesla.",
          "**Redno namakanje v presličini kopeli**: to smo počeli že od februarja dalje, vsaj 1x/teden, ob polni luni pa 3 večere zapored.",
          "Poleti **kopanje samo v morju** + doma **namakanje rok v slanici**",
          "**Vsak večer masaža** rok po meridianih debelega črevesa in pljuč, masaža najbolj bolečih točk. **Masaža ušes,** večkrat na dan.",
          "**Moxanje s cigaro in grelnimi vrečkami.** Moxanje s cigaro med lopaticama za krepitev pljuč (ali zamašenega nosa, po potrebi) vsaj 1x/teden + 3 večere zapored ob polni luni.",
          "**Bachove kapljice:** od začetka novembra najprej samo Crab apple pitje + mazanje rokic skupaj s kremo in kapljicami; po cca 2 tednih pa mešanica: Crab apple, Mimulus, Chicory pitje + mazanje rokic s kremo in kapljicami.",
        ],
      },
      {
        type: "p",
        content: "To mešanico sem pila tudi jaz. Pri otrocih vedno pijejo mešanice Bachovih esenc tudi mame oz. drugi skrbnik, če ni mame. Otroci nas čutijo in naš notranji svet preslikavajo v svojega.",
      },
      {
        type: "list",
        content: [
          "Za mnenje in nasvet smo v sredini septembra l. 2016 obiskali **homeopata**,\nki je zatipal povečane bezgavke na vratu, pod pazduhami in v dimljah.\nPredpisal 3 mesečno terapijo granul Calcium carbonicum Cortex Quercus (3 x 10 granul) in Aquilinum comp. (3 x 10 granul)",
        ],
      },
      {
        type: "p",
        content: "Na srečo je skupek vseh pristopov deloval in AD se je spomladi l. 2017 počasi začel poslavljati. Do začetka poletja ga ni bilo več. Le beli fleki so ostali, a še ti so pozimi izginili.",
      },
      {
        type: "image",
        content: "",
        images: [
          {
            src: "/images/blog/dermatitis/dermatitis-potek-2.jpg",
            caption: "",
            width: 768,
            height: 1024,
          },
        ],
      },
      {
        type: "p",
        content: "**Poleg izboljšanja stanja AD, so se pozitivne plati skupka teh pristopov kazale tudi na hčerkinem splošnem zdravju:**",
      },
      {
        type: "list",
        content: [
          "bolj trdi nohti na rokah in nogah,",
          "koža po telesu ni bila več suha (tudi prej smo jo mazali, a je bila koža vseeno suha),",
          "lasje so začeli hitreje rasti, postali so močnejši in gostejši,",
          "bela obloga na jeziku se je stanjšala, skorajda je ni več,",
          "redno, vsakodnevno odvajanje blata, brez težav",
          "ni bilo več skrivanja za mano ali joka v neznanem okolju ali med neznanimi ljudmi (sedaj le umirjenost, opazovanje, hitreje se sprosti)",
        ],
      },
      {
        type: "heading",
        content: "Moje doživljanje izkušnje s hčerinim AD:",
      },
      {
        type: "p",
        content: "Dejstvo je, da so kot pri vsaki bolezni, tudi v tem primeru, v dogajanje vpeti vsi družinski člani, a največje breme nosi mama, ki lahko bolečino otroka čuti in doživlja še bolj kot otrok sam.",
      },
      {
        type: "p",
        content: "In **v kakšne pasti v razmišljanju sem se takrat ujela, s kakšnimi težavami sem se  soočala?**",
      },
      {
        type: "list",
        content: [
          "Na prvem mestu je vsekakor tisto večno vprašanje »zakaj moj otrok?« in iskanje vzrokov pri sebi »kaj sem kot mama naredila narobe, da moj otrok sedaj tako trpi?«",
          "(Pre)velika želja po takojšnjem izboljšanju otrokovih težav, ki me je pogosto vodila do tesnobe, obtičanja v trenutku, neprestanega premlevanja o AD, kaj bi lahko še naredila, kaj izboljšala, kdo mi še lahko pomaga. Stežka sem  razmišljala še o čem drugem.",
          "Razočaranje, občutek nemoči, krivde, pri vsakem novem pojavu rdečice, poslabšanju stanja kože, še posebej po kratkotrajnih izboljšanjih stanja",
          "Polaganje vseh upov v eno metodo zdravljenja in veliko razočaranje, ko le-ta ne deluje popolnoma",
          "(Pre)hitro preskakovanje in preizkušanje novih metod, pristopov, po principu »tistemu je pa to pomagalo, naj poskusim še jaz«. In ko ni bilo vidnejšega učinka, je sledilo razočaranje, spet od začetka in večna vprašanja: »Zakaj? Kaj zdaj? Kako naprej?«",
          "Neprestano premišljevanje o prehrani; kaj ji dati jesti, da bo dobila dovolj potrebnih hranil, da bo sita, da ne bo telo odreagiralo s poslabšanjem na koži, ipd.  Vprašanje »mami, kaj bom jutri jedla?« pa je stisko še bolj povečevalo.",
          "Zelo pomemben dejavnik so tudi finance, saj vsi probiotiki, kreme, razni dodatki, prehrana, žal stane. In večna dilema - kako to usklajevati z družinskim proračunom? Kako se v danem trenutku odločiti, kaj je nujnejše; krema, dodatek k prehrani, hrana?",
          "Pritiski okolice začenši z vprašanji »__o, ubožca, kaj ima to?«, »a res »nič« ne sme jesti?«,__ do nerazumevanja, da če rečeš, da ne sme mlečnih izdelkov in glutena, da to pomeni, da ne sme piškotov, čokoladic in raznoraznih barvastih bonbonov, polnih barvil in za vsakega otroka, kaj pa šele takega s težavami s kožo, neprimernih izdelkov. In to, da ne je' bele moke in mleka, ne pomeni, da ne je' ničesar! Uh, kolikokrat sem bila razjarjena zaradi tega!",
        ],
      },
      {
        type: "p",
        content: "Mamice, ki se s tem srečujete to verjetno poznate. Potem pa sem jim jaz lepo razložila, da pa se meni dosti bolj smili, ko se zaradi takega piškota, bonbona, čokoladice, itd., potem spraska do krvi, ko jo peče, ko joče in ji ne moremo pomagati. No, takrat so prenehali s takimi izjavami in so nas prej vprašali, če so ji želeli kaj ponuditi.",
      },
      {
        type: "list",
        content: [
          "Iskanje ravnotežja - kako skrb za otroka z AD vpeti v delovanje družine, da ne bodo ostali člani čutili prevelikih razlik med danes in časom pred AD (glede same prehrane, časa, ki jim mama oz. žena posveti, ipd.)",
          "In nenazadnje, kako verjeti, zaupati si, da kot mama delaš prav, da verjameš, da so izbrani pristopi, ki so v danem trenutku na razpolago, res najboljše za tvojega otroka?",
        ],
      },
      {
        type: "p",
        content: "Moram poudariti, da smo si različni, mame v svoji vlogi prav tako, zato so zgoraj našteta moja doživljanja, moje stiske. Verjamem pa, da bi se marsikatera mama našla vsaj v nekaterih točkah.",
      },
      {
        type: "p",
        content: "Še nekaj bi dodala – **bolj kot sem bila v krču od skrbi kaj in kako, slabša je bila hčerkina koža.** Ko sem pozimi l. 2016, s trdim delom na sebi in svojih občutkih,  **začela počasi spuščati ta krč, zaupati, da se bo vse uredilo in da delam(o) kot najbolje znamo v danem trenutku, se je tudi njena koža počasi začela izboljševati, pristopi so bolje delovali**. Slučaj? Morda. A glede na to, kar danes vem, lahko samo ponovno potrdim, kar sem že prej napisala – otroci čutijo naš notranji svet.",
      },
      {
        type: "image",
        content: "",
        images: [
          {
            src: "/images/blog/dermatitis/dermatitis-potek-3.jpg",
            caption: "",
            width: 768,
            height: 1024,
          },
        ],
      },
      {
        type: "heading",
        content: "Hčerino doživljanje AD:",
      },
      {
        type: "p",
        content: "Zanimivo je bilo opazovati, kako hčerka doživlja svojo kožo z AD. Na trenutke se mi je zazdelo, da gre pri njej vse lažje, živi v sedanjem trenutku, ne pozna strahu pred »kaj pa, če...« in posledično je nekako “sprejela” AD in živela z njim.",
      },
      {
        type: "p",
        content: "Izpostavila bi nekaj zanimivosti:",
      },
      {
        type: "list",
        content: [
          "Pogosto je govorila, da je »lačna«, pa čeprav je veliko pojedla. Kmalu sem ugotovila, da je šlo verjetno bolj za «lakoto oči«. Ko si je zaželela hrane, ki jo je prej jedla ali če jo je nekdo drug jedel. Vprašanje, ki je ponovila vsaj 5x na dan je bilo: »Mama, kaj bom jedla za kosilo, večerjo, jutri v šoli, ipd?«",
          "Zelo hitro je dojela in razumela, kaj lahko je’ in česa ne. Rada je sodelovala pri pripravi obrokov, vestno je jemala prehranske dodatke. Druge je znala opozoriti na to, česar sme ali ne sme jesti.",
          "Pojavila se ji je občasna želja po izolaciji od vrstnikov, še posebej, ko so jo  začeli spraševati, kaj ima na koži, zakaj določenih živil ne sme jesti in/ali so se norčevali iz hrane, ki jo je prinesla od doma. Večinoma seveda zato, ker teh jedi niso poznali. Se je pa tudi zgodilo, da je palačinke z domačo “nutello” razdelila med sošolce, ker so jo prosili za kos in jim je bila všeč. Kako je bila takrat vesela. Sem morala od takrat naprej pripraviti kar dvojno dozo teh palačink. Pa še sošolka si je za rojstni dan zaželela “nutello” in sva ji jo naredili.",
          "Ko se je stanje poslabšalo, je skrivala roke za dolgimi rokavi ali za hrbtom. Bila je vidno otožna, ko je začutila poglede drugih ljudi na svojih rokah.",
        ],
      },
      {
        type: "p",
        content: "Srce se mi je paralo, ko sem jo opazovala, zato sem jo vsakič objela in ji razložila, da se vsak spopada s svojo težavo, ona ima AD, jaz sem bila operirana na križu, itd. Skratka, vsak ima nekaj in da ni z njo nič narobe. Delovalo je. Pomirila se je.",
      },
      {
        type: "heading",
        content: "Kako se je hčerin AD odražal v družinskim življenju?",
      },
      {
        type: "p",
        content: "Z dvema besedama – na trenutke je bilo ZELO TEŽKO, a naj dodam še A NE NEMOGOČE.",
      },
      {
        type: "p",
        content: "Zelo težko, ker :",
      },
      {
        type: "list",
        content: [
          "Vsak obrok je bilo potrebno sproti načrtovati in pripraviti",
          "Obroke načrtovati tako, da jih lahko jedo tudi ostali družinski člani, z manjšimi moderacijami",
          "V primeru zabav, rojstnih dnevov, izletov ali zgolj navadnega daljšega pohajkovanja, je potrebno imeti »pravo« hrano s sabo",
          "Spoprijemanje z občasno hčerino žalostjo ali slabo voljo, ker ostali družinski člani ali druge osebe, jedo drugačno hrano kot oni sami (trudila sem se, da so bile razlike res minimalne)",
          "Je potrebno veliko domišljije, usklajevanja časa priprave obrokov s službo, obšolskimi dejavnostmi (»taxi mama ali ati«), gospodinjskimi deli, z vsaj minimalno skrbjo za svoje zdravje (ker »vsi so lahko bolni, le mama ne sme biti«)",
          "Večerni obredi niso namenjeni samo branju pravljice, šolskim obveznostim, temveč še namakanju, masaži, moxanju, ipd., gospodinjenje in priprava obrokov se zato zavlečejo pozno v noč. Pomembna je organizacija.",
          "Razno, ker nam življenje vsak dan ponudi nov izziv",
        ],
      },
      {
        type: "p",
        content: "**A tu so še pozitivni učinki:**",
      },
      {
        type: "list",
        content: [
          "Vsa družina se je začela prehranjevati bolj zdravo",
          "Hčeri sta spoznali pomen prehrane na naše telo - kaj je gluten, kaj so ogljikovi hidrati, blejakovine, spoznali smo vrsto drugih okusov in živil (npr. ajda, proso, quinoa, sončnični namaz, stročnice, ipd.)",
          "Hčeri sta se naučili pripravljati bolj zdrave jedi, pa čeprav se je začelo s palačinkami, rižem, namazi, mafini, ipd. Sami sta začeli predlagati kombinacije živil za pripravo obrokov, ipd.",
          "Vsi skupaj smo se še bolj naučli pomena organizacije časa, dela,  spoprijemanja z izzivi, ustvariti nekaj s čim manj sredstvi in sestavinami",
          "Pričakovanje naslednjega obroka, ker je »vedno nekaj novega«. To sicer ni najbolj enostavno in predstavlja določeno mero stresa za starše, a kot pravijo",
        ],
      },
      {
        type: "p",
        content: "»SREČNI OTROCI, SREČNI STARŠI«  No, v resnici pravijo ravno obratno, a v takih primerih je prva verzija tista, ki šteje.",
      },
      {
        type: "p",
        content: "Hvala, ker ste zapis prebrali do konca. Omenjeni pristopi so pomagali naši hčeri in ni nujno, da bodo zagotovo tudi vam, a že če boste dobili kakšen namig, kako si lahko še pomagate, bo moj namen izpolnjen. Vem, kako je, ko si želiš, da bi ti nekdo vsaj nakazal, kaj, kam, komu se še lahko obrneš po pomoč. Kar korajžno, zmorete!",
      },
      {
        type: "p",
        content: "Zadnja slika je slika rokic iz 16.9.2020",
      },
      {
        type: "image",
        content: "",
        images: [
          {
            src: "/images/blog/dermatitis/dermatitis-pozdravljeno-2020.png",
            caption: "",
            width: 768,
            height: 1024,
          },
        ],
      },
      {
        type: "p",
        content: "P.S. hčerka je danes stara 15 let in je dovolila objavo slik. Sedaj jih lahko pogleda. Še nekaj let nazaj se ni želela niti pogovarjati o tem, kaj šele, da bi slike pogledala ali jih komu pokazala.",
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
    (normalized.includes("maternica")
      ? BLOG_POSTS.find((p) => p.slug === "ko-maternica-spregovori")
      : undefined) ||
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
