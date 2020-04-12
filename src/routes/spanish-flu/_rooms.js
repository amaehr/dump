const rooms = [
  {
      title: "Spanische Grippe",
      description: "Am 11. März 2020 erklärt die WHO Covid 19 zu einer Pandemie. Die Situation mit ihren Herausforderungen ist neu, weltweite Infektionskrankheiten brachen aber in der Vergangenheit immer wieder aus. Eine besonders verheerende war die Spanische Grippe vor rund 100 Jahren – auch in der Schweiz. Erfahre mehr in unserer Ausstellung.",
      id: "7",
      layout: "text",
      background: "virus_1",
      icon: "7",
      right: "32"
  },
  {
      title: "Patient 0",
      description: "Anfang 1918 wird im US-Bundesstaat Kansas von einer neuen, heftigen Grippe berichtet. Kurz darauf wird der erste Fall im militärischen Ausbildungslager Camp Funston registriert: Der Küchenunteroffizier Albert Gitchell gilt als Patient 0. \nDer Ursprung des Virus ist jedoch nicht endgültig geklärt. Gesichert ist: Das Virus wurde von Wasservögeln auf den Menschen übertragen.",
      id: "32",
      layout: "text",
      background: "virus_2",
      icon: "32",
      left: "7",
      right: "8"
  },
  {
      title: "Globale Verbreitung",
      description: "Das Virus breitet sich in den militärischen Lagern rasch weiter aus. Bis im August 1918 werden mehr als eine Million amerikanischer Soldaten nach Europa verschoben. Sie unterstützen die Entente an der Westfront im Ersten Weltkrieg. So erreicht das Virus Frankreich. Kriegsbedingte Truppenbewegungen befördern die weltweite Ausbreitung des Virus.",
      id: "8",
      layout: "text",
      background: "virus_10",
      icon: "8",
      left: "32",
      down: "9"
  },
  {
      title: "Das Virus erreicht die Schweiz",
      description: "Die Schweiz bleibt von den Kriegshandlungen des Ersten Weltkriegs verschont, jedoch nicht vom Virus. Im Juli 1918 erreicht es die Schweiz. Grenzsoldaten infizieren sich an der deutsch-französischen Frontlinie und verbreiten das Virus. Die Bevölkerung ist aufgrund der schlechten Versorgungslage während der Kriegsjahre geschwächt. Optimale Voraussetzungen für das Virus, sich weiter auszubreiten.",
      id: "9",
      layout: "text",
      background: "virus_7",
      icon: "9",
      right: "17",
      up: "8",
      down: "15"
  },
  {
      title: "Steckbrief",
      id: "15",
      layout: "landscape",
      background: "virus_4",
      icon: "15",
      image: "15",
      right: "14",
      up: "9"
  },
  {
      title: "Das Krankheitsbild",
      description: "Zu den Symptomen gehören hohes Fieber, Kopf- und Gliederschmerzen sowie trockener Husten. Bei schweren Fällen tritt oft auch eine bakterielle Lungenentzündung auf. Durch den Sauerstoffmangel können sich Haut, Lippen und Fingerspitzen bläulich-schwarz verfärben. Zum Tod führen meist diese bakteriellen Infektionen.",
      id: "14",
      layout: "mixed",
      background: "14",
      icon: "14",
      image: "14",
      rightsowner: "Yale Press",
      rights: "gemeinfrei",
      left: "15",
      right: "18",
      up: "17",
      down: "12"
  },
  {
      title: "Gefährliche Angreifer",
      description: "Viren sind organische Strukturen, die Krankheiten erregen. Da sie keine eigenen Zellen haben, brauchen sie einen Wirtsorganismus wie Menschen, Tiere, Pflanzen oder Pilze zur Fortpflanzung. In den Wirtszellen vermehren sie sich und zerstören die Zellen dabei. Dies schwächt den Wirtsorganismus und kann zu Krankheit und Tod führen.",
      id: "12",
      layout: "text",
      background: "virus_4",
      icon: "12",
      up: "14"
  },
  {
      title: "Gesunde Luft",
      description: "Das Virus macht keinen Halt vor der Zivilbevölkerung und schlägt auch bei schönem Wetter zu. In einer Postkarte schreibt ein Mädchen ihrem Vater, dass die Krankheit sie zur Bettruhe zwingt. “Lieber Papi! Ich bin im Bett. Ich habe Influenza. Wir haben schönes Wetter. Grüsse von Elisabeth.”",
      id: "18",
      layout: "mixed",
      background: "virus_1",
      icon: "18",
      image: "18",
      rightsowner: "Schaffhauser Intelligenzblatt, 13.8.1918",
      left: "14"
  },
  {
      title: "Wundermittel",
      description: "1918 ist kein effektives Heilmittel gegen das neue Grippevirus bekannt. Trotzdem wird in Zeitungsinseraten und Verkaufswerbungen mit eigenen Naturheilmitteln geworben. So werden etwa Mittel aus Alpenkräutern von privaten Verkäufern als universale Heil- und Vorbeugungsmittel mit Erfolgsaussichten angepriesen.",
      id: "17",
      layout: "mixed",
      background: "virus_5",
      icon: "17",
      image: "17",
      rightsowner: "Neue Züricher Nachrichten, 16.8.1918",
      left: "9",
      right: "13",
      up: "16",
      down: "14"
  },
  {
      title: "Grippe aus Spanien?",
      description: "Nicht der Ursprung der Grippe liegt in Spanien, jedoch der Ursprung der Berichterstattung. Als der spanische König Alfonso XIII. am Virus erkrankt, schreiben die spanischen Zeitungen offen darüber. In kriegführenden Ländern hingegen wird die Berichterstattung durch die Zensur verhindert. Erste Nachrichten über die Seuche kommen daher aus Spanien.",
      id: "13",
      layout: "text",
      background: "virus_6",
      icon: "13",
      left: "17",
      right: "21",
      up: "20",
      down: "10"
  },
  {
      title: "Tödlicher als der Krieg",
      description: "Die Hälfte der Schweizer Bevölkerung infiziert sich an der Spanischen Grippe. Das Virus fordert zwischen Juli 1918 und Mai 1919 rund 25’000 Todesopfer. Weltweit sterben zwischen 20 und 50 Millionen Menschen.\nDie Pandemie verläuft je nach Gegend in zwei bis drei Wellen, wobei die zweite Welle am schlimmsten wütet. Zudem ist die Sterblichkeit der 20 bis 40 Jährigen aussergewöhnlich hoch.",
      id: "10",
      layout: "text",
      background: "virus_3",
      icon: "10",
      up: "13"
  },
  {
      title: "Wie schützt sich die Bevölkerung?",
      description: "Die Massnahmen fallen je nach Kanton unterschiedlich aus. Prinzipiell gilt das vom Bundesrat am 18. Juli 1918 beschlossene Versammlungsverbot. Teilweise werden Schulen geschlossen. Die Bevölkerung ist angehalten, zu Hause auf Sauberkeit zu achten. Kranke werden gebeten, das Haus nicht zu verlassen und in Wirtshäusern dürfen nur gesunde Personen arbeiten.",
      id: "16",
      layout: "text",
      background: "virus_5",
      icon: "16",
      right: "19",
      up: "33",
      down: "17"
  },
  {
      title: "Anzeigepflicht",
      description: "Am 11. Oktober 1918 weitet der Bundesrat das “Bundesgesetz betreffend Massnahmen gegen gemeingefährliche Epidemien” von 1886 aus. Neu müssen Ärzte Fälle der Spanischen Grippe unverzüglich der zuständigen Behörde melden.",
      id: "19",
      layout: "mixed",
      background: "19",
      icon: "19",
      image: "19",
      rightsowner: "SBB Historic",
      rights: "gemeinfrei",
      left: "16",
      right: "20"
  },
  {
      title: "Bundesbeiträge",
      description: "Am 19. November 1918 beschliesst der Bundesrat einen Teil der Kosten mitzutragen, die durch die Notfallmassnahmen verursacht worden sind. Zudem sollen diejenige Personen entschädigt werden, die durch Betriebsschliessungen oder aufgrund des Veranstaltungsverbots “brotlos” geworden sind.",
      id: "20",
      layout: "mixed",
      background: "20_1",
      icon: "20",
      image: "20_1",
      image_alternative: "20_2",
      rightsowner: "SBB Historic",
      rights: "gemeinfrei",
      left: "19",
      down: "13"
  },
  {
      title: "Angesteckt im Dienst",
      description: "Die erste und der Anfang der zweiten Grippewelle fallen in den Ersten Weltkrieg. Aufgrund der engen Platzverhältnisse im Militärdienst verbreitet sich das Virus rasch unter den Soldaten. Kranke werden nach Hause geschickt und tragen so die Spanische Grippe in ihre Heimatregionen. ",
      id: "21",
      layout: "mixed",
      background: "21",
      icon: "21",
      image: "21",
      rightsowner: "ETH-Bibliothek Zürich, Bildarchiv",
      rights: "gemeinfrei",
      left: "13",
      right: "28",
      up: "25",
      down: "22"
  },
  {
      title: "Der Landesstreik und die Spanische Gruppe",
      description: "Vom 12. bis 14. November 1918 kommt es unter anderem wegen der schlechten Versorgungslage zum Landesstreik. Aus Angst vor einer Revolution zieht die Armee in den Städten Truppen zusammen. In den Kasernen sterben viele Soldaten an der Grippe. Im folgenden Streit um die Verhältnismässigkeit der Reaktion der Armee geben sich die Konfliktparteien des Streiks gegenseitig die Schuld an diesen Toten. ",
      id: "22",
      layout: "text",
      background: "virus_9",
      icon: "22",
      right: "23",
      up: "21"
  },
  {
      title: "Streikende",
      description: "Streikende während des Landesstreiks in Zürich auf dem Paradeplatz.",
      id: "23",
      layout: "landscape",
      background: "virus_6",
      icon: "23_24_26_27",
      image: "23",
      rightsowner: "unbekannt",
      rights: "gemeinfrei",
      left: "22",
      right: "24"
  },
  {
      title: "Armee",
      description: "Angehörige der Armee bewachen während des Landesstreiks das Bundeshaus.",
      id: "24",
      layout: "landscape",
      background: "virus_6",
      icon: "23_24_26_27",
      image: "24",
      rightsowner: "Schweizerisches Bundesarchiv",
      rights: "gemeinfrei",
      left: "23"
  },
  {
      title: "Erholung im Hotel",
      description: "In den Spitälern herrscht Bettenmangel. Schulen werden zu Notspitälern umfunktioniert und Hotels zu Erholungszentren. Das Gruppenbild zeigt genesene Soldaten in St. Beatenberg. Die Soldaten sind zwar nun immun gegen das Virus, sind aber von der Krankheit geschwächt und können deshalb noch nicht zu ihren Truppen geschickt werden.",
      id: "25",
      layout: "mixed",
      background: "25",
      icon: "25",
      image: "25",
      rightsowner: "Schweizerisches Bundesarchiv",
      rights: "gemeinfrei",
      left: "26",
      right: "29",
      up: "27",
      down: "21"
  },
  {
      title: "Alpenluft",
      description: "Ein Erholungszentrum bei einer Alphütte in Beatenberg (BE).",
      id: "26",
      layout: "landscape",
      background: "virus_3",
      icon: "23_24_26_27",
      image: "26",
      rightsowner: "Schweizerisches Bundesarchiv",
      rights: "gemeinfrei",
      right: "25"
  },
  {
      title: "Zeitvertreib",
      description: "Kegeln im Keller des Erholungszentrums Sigriswil (BE).",
      id: "27",
      layout: "landscape",
      background: "virus_3",
      icon: "23_24_26_27",
      image: "27",
      rightsowner: "Schweizerisches Bundesarchiv",
      rights: "gemeinfrei",
      down: "25"
  },
  {
      title: "Gegen das Vergessen",
      description: "Viele Soldaten erliegen der Krankheit. Etliche Denkmäler zieren die Schweizer Landschaft und erinnern an diese Grippetoten. Das Wehrmännerdenkmal in Forch – eine 18 Meter hohe Flammenskulptur aus Bronze – erinnert an die 365 Zürcher Soldaten, die im Ersten Weltkrieg an der Spanischen Grippe starben.",
      id: "29",
      layout: "mixed",
      background: "29",
      icon: "29",
      image: "29",
      rightsowner: "Bibliothek am Guisanplatz, Bern",
      rights: "CC BY-NC-ND",
      left: "25"
  },
  {
      title: "Grüsse aus dem Krankenbett",
      description: "Das Virus macht keinen Halt vor der Zivilbevölkerung und schlägt auch bei schönem Wetter zu. In einer Postkarte schreibt ein Mädchen ihrem Vater, dass die Krankheit sie zur Bettruhe zwingt. “Lieber Papi! Ich bin im Bett. Ich habe Influenza. Wir haben schönes Wetter. Grüsse von Elisabeth.” ",
      id: "28",
      layout: "mixed",
      background: "28_1",
      icon: "28",
      image: "28_1",
      image_alternative: "28_2",
      rightsowner: "Wehrli A.-G., Kilchberg/Zürich",
      rights: "gemeinfrei",
      left: "21",
      up: "30"
  },
  {
      title: "Selbstbildnis um 1918",
      description: "Jakob Wäch (1893–1918) ist ein Schweizer Künstler aus dem Kanton Glarus, der in München studiert. Als der Erste Weltkrieg ausbricht, ist Wäch gezwungen, in die Schweiz zurückzukehren. Hier verstirbt der Maler 1918 an der Spanischen Grippe. Das düstere Selbstporträt in Ölfarbe auf Malkarton hat er kurz vor seinem Tod gefertigt.",
      id: "30",
      layout: "mixed",
      background: "30",
      icon: "30",
      image: "30",
      rightsowner: "Sammlung des Glarner Kunstvereins",
      rights: "gemeinfrei",
      up: "31",
      down: "28"
  },
  {
      title: "Grippe in der Kunst",
      description: "Das “Selbstportrait mit Spanischer Grippe” von Edvard Munch ist ein Zeitzeugnis der Grippewelle. Krankheiten begleiten und prägen Munch sein Leben lang. 1919 malt er sich, gezeichnet von der Spanischen Grippe: bleich, erschöpft und in warme Decken eingepackt. Zugleich zeigt es den Triumph über die Krankheit, als Überlebender bannt er die Schrecken der Grippe auf Leinwand. ",
      id: "31",
      layout: "mixed",
      background: "31",
      icon: "31",
      image: "31",
      rightsowner: "Nasjonalmuseet (NO), Jacques Lathion",
      rights: "gemeinfrei",
      up: "11",
      down: "30"
  },
  {
      title: "Alles gesehen?",
      description: "Du bist nun am Ende unserer Ausstellung angelangt. Gönn dir nach der virtuellen Erfahrung doch einen analogen Kaffee oder Aperol Spritz.\n\nDanke für deinen Besuch!\nPlease share, \ndein open-museum.",
      id: "11",
      icon: "11",
      down: "31"
  },
  {
      title: "Willkommen im open-museum!",
      description: "Stöbere wie in einem echten Museum in unseren Räumen und tausche dich mit anderen Besucher*innen via Audiochat aus. Entdecke allein oder als Gruppe ausgewählte Inhalte zur Spanischen Grippe.\n\nViel Spass beim Durchklicken und Verweilen!\n",
      id: "0"
  },
  {
      title: "Verlaufen?",
      id: "1"
  },
  {
      title: "Oh, nooo!",
      description: "Etwas ist schief gelaufen. Was willst du tun?",
      id: "2"
  },
  {
      title: "Yeah.",
      description: "Du bist nun im Museum und mit anderen Besucher*innen über Audiochat verbunden.",
      id: "3"
  },
  {
      title: "Hast du bereits eine Gruppe?",
      description: "Wähle, ob du eine neue Gruppe erstellen oder einer bestehenden Gruppe beitreten möchtest.",
      id: "4"
  },
  {
      title: "Willkommen!",
      description: "Gebe deine Gruppennummer ein. ",
      id: "5"
  },
  {
      title: "Yeah. ",
      description: "Neue Gruppe XY erfolgreich erstellt. Teile den Link mit deinen Freund*innen.",
      id: "6"
  }
];

// FIXME Remove tabs in html!
// rooms.forEach(room => {
//   room.description = room.description.replace(/^\t{3}/gm, '');
// });

export default rooms;