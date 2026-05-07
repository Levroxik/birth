const garnacho = [
  "Garnacho odešel do Chelsea. Dostal číslo 49. Todd Boehly nakupuje hráče jako Pokémony.",
  "Subject 49: Garnacho. Chelsea pokračuje ve vědeckém experimentu co kdyby koupili úplně všechny hráče.",
  "Chelsea má 49 útočníků. Garnacho je číslo 49. Sestava se vejde na dva autobusy.",
  "Temu Ronaldo přestoupil do Chelsea. Teď je Subject 49 v největším fotbalovém experimentu v historii.",
  "Garnacho v Chelsea: číslo 49, 0 garantovaných startů, plat kosmický. Sen každého.",
  "Chelsea nákup číslo 49: Garnacho. Nákup číslo 50 se oznamuje příští týden.",
  "Subject 49 dorazil na Stamford Bridge. Todd Boehly si odškrtl další políčko v Excelu.",
  "Garnacho šel z United do Chelsea. Vyměnil chaos za chaos, ale s lepším číslem dresu. 49.",
];

const gyokeres = [
  "Gyökeres: 43 gólů za sezónu. Šeško: zvažuji možnosti. Jeden přišel, druhý uvažoval. Výsledek jasný.",
  "Arsenal koupil Gyökerse a ne Šeška. Správné rozhodnutí. Statistiky souhlasí. Šeško nesouhlasí.",
  "Gyökeres přišel z Lisabonu s průměrem gól za zápas. Šeško přišel z Lipska s průměrem: možná příští rok.",
  "Šeško byl hype celé léto. Gyökeres byl prostě nejlepší útočník Evropy a nikdo se tomu nedivil.",
  "Gyökeres vs Šeško: jeden dal 43 gólů a jeden byl na každém trhu ale nikde nepodepsal.",
  "Šeško: talentovaný, perspektivní, pomalý v rozhodování. Gyökeres: podepsal, dal gól, dal další gól.",
  "Gyökeres je důkazem, že lepší nákup není ten nejdražší, ale ten co prostě dává góly.",
  "Šeško byl linked se vším. Gyökeres byl linked s góly. Rozdíl je zřejmý.",
];

const arsenalLines = [
  "Arsenal jsou v jejich upřímně nebezpečné éře.",
  "Emocionální škody se konečně promítly do tabulky.",
  "Trpěli roky jen proto, aby se stali nesnesitelnými.",
  "Arsenal fanoušci po jednom dobrém výsledku: zapínají dynastický diskurs.",
  "Ta sebedůvěra je medicínsky znepokojivá.",
  "Arsenal se probudil a znovu zvolil násilí.",
  "Ta drzost po letech skoro to bylo je neuvěřitelná.",
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
];

const rivalryLines = [
  "jeden tým pláče, druhý předstírá, že nepláče",
  "jeden má plán, druhý má výmluvy",
  "kontrast je krutý a pro jeden z nich se nezlepšuje",
  "historie vs. přítomnost. Historii se to nedaří.",
];

const notifications = [
  "GÓL INKASOVÁN (90+7') — United",
  "Bývalý hráč dal gól proti United. Přirozeně.",
  "VAR detekoval další utrpení.",
  "Arsenal je opět podezřele kompetentní.",
  "United krizové setkání naplánováno. Třetí tento týden.",
  "Arsenal fanoušci vstoupili do oblouku přehnané sebedůvěry.",
  "Garnacho (Subject 49) nenastoupil. Počítadlo hráčů Chelsea roste.",
  "Gyökeres dal gól. Šeško sledoval ze zálohy.",
];

function pick(arr) { return arr[Math.floor(Math.random() * arr.length)]; }
function shuffle(arr) { return [...arr].sort(() => Math.random() - 0.5); }

export default function handler(req, res) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.json({
    arsenal: pick(arsenalLines),
    united: pick(unitedLines),
    rivalry: pick(rivalryLines),
    notifications: shuffle(notifications).slice(0, 3),
    garnacho: pick(garnacho),
    gyokeres: pick(gyokeres),
  });
}
