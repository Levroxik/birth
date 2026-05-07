const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

const dadAdvice = [
  { icon: "🚴", tip: "Na kolo si místo iontáku vezmi vodu s medem a se solí.", koment: "Jako vikingové, ale na Favoritu v parku." },
  { icon: "😴", tip: "Musíš spát 12 hodin. Mozek potřebuje regeneraci.", koment: "ChatGPT to říkal, takže je to věda. Diskuze ukončena." },
  { icon: "💧", tip: "Iontový nápoj je jed průmyslové společnosti. Voda, med, sůl.", koment: "Zadarmo. Chutná jako omyl, ale zadarmo." },
  { icon: "🤖", tip: "ChatGPT může pomoci s čímkoli. Stačí se zeptat správně.", koment: "Táta se ptá ChatGPT na vše. Včetně toho, co ti dát k narozeninám." },
  { icon: "🏃", tip: "Moderní výživa je přeceněná. Naši předci běhali bez RedBullu.", koment: "Naši předci se dožili 38. Ale ok." },
  { icon: "🧠", tip: "Tvůj mozek v 15 letech ještě není plně vyvinutý.", koment: "Toto říká každý rodič, který nechce diskutovat." },
  { icon: "📊", tip: "Studie ukazují, že pravidelný pohyb zlepšuje soustředění.", koment: "Zdroj: ChatGPT, leden 2025. Peer review: žádný." },
];

const garnacho = [
  "Garnacho odešel do Chelsea. Dostal číslo 49. Todd Boehly nakupuje hráče jako Pokémony.",
  "Subject 49: Garnacho. Chelsea pokračuje ve vědeckém experimentu 'co kdybychom koupili úplně všechny hráče'.",
  "Chelsea má 49 útočníků. Garnacho je číslo 49. Sestava se vejde na dva autobusy.",
  "Temu Ronaldo přestoupil do Chelsea. Teď je Subject 49 v největším fotbalovém experimentu v historii.",
  "Garnacho v Chelsea: číslo 49, 0 garantovaných startů, plat kosmický. Sen každého.",
  "Chelsea nákup číslo 49: Garnacho. Nákup číslo 50 se oznamuje příští týden.",
  "Subject 49 dorazil na Stamford Bridge. Todd Boehly si odškrtl další políčko v Excelu.",
  "Garnacho šel z United do Chelsea. Vyměnil chaos za chaos, ale s lepším číslem dresu. 49.",
];

const gyokeres = [
  "Gyökeres: 43 gólů za sezónu. Šeško: 'zvažuji možnosti'. Jeden přišel, druhý uvažoval. Výsledek jasný.",
  "Arsenal koupil Gyökerse a ne Šeška. Správné rozhodnutí. Statistiky souhlasí. Šeško nesouhlasí.",
  "Gyökeres přišel z Lisabonu s průměrem gól za zápas. Šeško přišel z Lipska s průměrem: 'možná příští rok'.",
  "Šeško byl hype celé léto. Gyökeres byl prostě nejlepší útočník Evropy a nikdo se tomu nedivil.",
  "Gyökeres vs Šeško: jeden dal 43 gólů a jeden byl na každém trhu ale nikde nepodepsal.",
  "Šeško: talentovaný, perspektivní, pomalý v rozhodování. Gyökeres: podepsal, dal gól, dal další gól.",
  "Gyökeres je dokazem, že lepší nákup není ten nejdražší, ale ten co prostě dává góly.",
  "Šeško byl linked se vším. Gyökeres byl linked s góly. Rozdíl je zřejmý.",
];

const arsenalLines = [
  "Arsenal jsou v jejich 'upřímně nebezpečné' éře.",
  "Emocionální škody se konečně promítly do tabulky.",
  "Trpěli roky jen proto, aby se stali nesnesitelnými.",
  "Arsenal fanoušci po jednom dobrém výsledku: zapínají dynastický diskurs.",
  "Ta sebedůvěra je medicínsky znepokojivá.",
  "Arsenal se probudil a znovu zvolil násilí.",
  "Ta drzost po letech 'skoro to bylo' je neuvěřitelná.",
  "Arsenal se chová, jako by vlastnili fotbal. Opět.",
  "Podezřele kompetentní, bohužel.",
  "Arsenal spustil hlavní postavový oblouk.",
];

const unitedLines = [
  "Manchester United: heritage moment.",
  "Další přestavba úspěšně přeměněna na utrpení.",
  "Tento klub funguje na nostalgii a omluvách.",
  "Old Trafford je v podstatě muzeum se špatnou náladou.",
  "Taktika: naděje a panika.",
  "Sledování United by mělo počítat jako veřejná služba.",
  "Přestavba nepřestavila vůbec nic.",
  "Jejich nejlepší protiútok je sdílení starých highlightů.",
  "Záložní řada existuje teoreticky.",
  "V tomto okamžiku je klub továrnou na content o bolesti.",
  "United fanoušci vysvětlují výsledek: načítám...",
  "Duch týmu je upřímně nejasný.",
];

const rivalryLines = [
  "jeden tým pláče, druhý předstírá, že nepláče",
  "jeden má plán, druhý má výmluvy",
  "kontrast je krutý a pro jeden z nich se nezlepšuje",
  "historie vs. přítomnost. Historii se to nedaří.",
  "tohle soupeření bývalo vyrovnané. Prý.",
];

const notifications = [
  "GÓL INKASOVÁN (90+7') — United",
  "Bývalý hráč dal gól proti United. Přirozeně.",
  "VAR detekoval další utrpení.",
  "Arsenal je opět podezřele kompetentní.",
  "United krizové setkání naplánováno. Třetí tento týden.",
  "United jmenovali někoho nového. Modlíme se.",
  "Arsenal fanoušci vstoupili do oblouku přehnané sebedůvěry.",
  "Garnacho dal gól. Garnacho slaví 40 sekund. Garnacho.",
  "Haaland dal hattrick. Pak meditoval. Pak šel spát ve 22:00.",
  "United tiskovka: připravte se.",
];

function pick(arr) { return arr[Math.floor(Math.random() * arr.length)]; }
function shuffle(arr) { return [...arr].sort(() => Math.random() - 0.5); }

app.get("/api/dad-advice", (req, res) => {
  res.json(dadAdvice);
});

app.get("/api/football/banter", (req, res) => {
  res.json({
    arsenal: pick(arsenalLines),
    united: pick(unitedLines),
    rivalry: pick(rivalryLines),
    notifications: shuffle(notifications).slice(0, 3),
    garnacho: pick(garnacho),
    gyokeres: pick(gyokeres),
  });
});

const PORT = process.env.PORT || 3002;
app.listen(PORT, () => {
  console.log(`lowkey cooked server :${PORT}`);
});
