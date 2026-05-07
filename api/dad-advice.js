const dadAdvice = [
  { icon: "🚴", tip: "Na kolo si místo iontáku vezmi vodu s medem a se solí.", koment: "Jako vikingové, ale na Favoritu v parku." },
  { icon: "😴", tip: "Musíš spát 12 hodin. Mozek potřebuje regeneraci.", koment: "ChatGPT to říkal, takže je to věda. Diskuze ukončena." },
  { icon: "💧", tip: "Iontový nápoj je jed průmyslové společnosti. Voda, med, sůl.", koment: "Zadarmo. Chutná jako omyl, ale zadarmo." },
  { icon: "🤖", tip: "ChatGPT může pomoci s čímkoli. Stačí se zeptat správně.", koment: "Táta se ptá ChatGPT na vše. Včetně toho, co ti dát k narozeninám." },
  { icon: "🏃", tip: "Moderní výživa je přeceněná. Naši předci běhali bez RedBullu.", koment: "Naši předci se dožili 38. Ale ok." },
  { icon: "🧠", tip: "Tvůj mozek v 15 letech ještě není plně vyvinutý.", koment: "Toto říká každý rodič, který nechce diskutovat." },
  { icon: "📊", tip: "Studie ukazují, že pravidelný pohyb zlepšuje soustředění.", koment: "Zdroj: ChatGPT, leden 2025. Peer review: žádný." },
];

export default function handler(req, res) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.json(dadAdvice);
}
