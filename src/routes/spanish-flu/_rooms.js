const rooms = [{
    id: '7',
    title: 'Spanische Grippe',
    text: 'Am 11. März 2020 erklärt die WHO Covid 19 zu einer Pandemie. Die Situation mit ihren Herausforderungen ist neu, weltweite Infektionskrankheiten brachen aber in der Vergangenheit immer wieder aus.\nEine besonders verheerende war die Spanische Grippe vor rund 100 Jahren - auch in der Schweiz. Erfahre mehr in unserer Ausstellung.',
    icon: 'icon/7.png',
    background: 'background/7.png',
    layout: 'text',
    down: '32',
  }, {
    id: '14',
    title: 'Krankheitsbild',
    text: 'Zu den Symptomen gehören hohes Fieber, Kopf- und Gliederschmerzen sowie trockener Husten. Bei schweren Fällen tritt oft auch eine bakterielle Lungenentzündung auf. Durch den Sauerstoffmangel können sich Haut, Lippen und Fingerspitzen bläulich-schwarz verfärben. Zum Tod führen meist diese zusätzlichen bakteriellen Infektionen.',
    icon: 'icon/14.png',
    background: 'background/14.png',
    layout: 'mixed',
    left: '15',
    right: '18',
    down: '12',
    images: [{
      media: '14.jpg',
      rights: 'gemeinfrei',
      rightsowner: 'Yale Press',
    }]
  }, {
    id: '20',
    title: 'Bundesbeiträge',
    text: 'Am 19. November 1918 beschliesst der Bundesrat einen Teil der Kosten mitzutragen, die durch die Notfallmassnahmen verursacht worden sind. Zudem sollen diejenige Personen entschädigt werden, die durch die bundesrätlichen Massnahmen wie Betriebsschliessungen oder des Veranstaltungsverbots “brotlos” geworden sind.',
    icon: 'icon/20.png',
    background: 'background/20_1.png',
    layout: 'mixed',
    left: '19',
    images: [{
        media: '20_1.png',
        rights: 'gemeinfrei',
        rightsowner: 'SBB Historic',
      },
      {
        media: '20_2.png',
        rights: 'gemeinfrei',
        rightsowner: 'SBB Historic'
      }
    ]
  },
  {
    id: '23',
    title: 'Title missing',
    text: 'Streikende während des Landesstreiks in Basel.',
    icon: 'icon/23.png',
    layout: 'landscape',
    left: '22',
    right: '24',
    images: [{
        media: '23.tif',

        rights: 'gemeinfrei',
        rightsowner: 'Schweizerisches Nationalmuseum',
      }

    ]
  }
];

// FIXME Remove tabs in html!
rooms.forEach(room => {
  room.text = room.text.replace(/^\t{3}/gm, '');
});

export default rooms;