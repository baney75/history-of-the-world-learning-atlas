import type { HistoricalPeriod, HistoricalFigure } from '@/types/history';

export const biblicalFigures: HistoricalFigure[] = [
  {
    id: 'abraham',
    name: 'Abraham',
    title: 'Father of the Faithful',
    lifespan: 'c. early 2nd millennium BCE',
    description: 'Abraham is the patriarch of the covenant, called by God from Ur of the Chaldeans to become the father of many nations. Through his faith and obedience, God established an everlasting covenant promising descendants as numerous as the stars and the land of Canaan as an eternal inheritance.',
    significance: 'Father of Isaac and Ishmael; received the Abrahamic Covenant; exemplar of justifying faith for all believers.',
    scripturalReference: 'Genesis 12-25; Romans 4; Galatians 3; Hebrews 11'
  },
  {
    id: 'moses',
    name: 'Moses',
    title: 'Prophet of God and Lawgiver',
    lifespan: 'c. 13th century BCE',
    description: 'Moses was chosen by God to deliver the Israelites from bondage in Egypt. Through mighty signs and wonders, God demonstrated His power over the false gods of Egypt. At Mount Sinai, Moses received the Ten Commandments and the Law that would govern God\'s chosen people.',
    significance: 'Mediator of the Mosaic Covenant; delivered Israel from Egypt; received the Law; authored the Pentateuch.',
    scripturalReference: 'Exodus, Leviticus, Numbers, Deuteronomy'
  },
  {
    id: 'david',
    name: 'David',
    title: 'King of Israel, Man After God\'s Heart',
    lifespan: 'c. 1000 BCE',
    description: 'David, the shepherd boy anointed by Samuel, defeated Goliath and rose to become Israel\'s greatest king. He conquered Jerusalem and established it as the eternal capital of God\'s people. God made an everlasting covenant with David, promising that the Messiah would come from his lineage.',
    significance: 'Established Jerusalem as capital; received the Davidic Covenant; composed the Psalms; ancestor of Jesus Christ.',
    scripturalReference: '1 Samuel 16 - 1 Kings 2; Psalms; Matthew 1:1'
  },
  {
    id: 'solomon',
    name: 'Solomon',
    title: 'King of Israel',
    lifespan: 'c. 970-931 BCE',
    description: 'Solomon, son of David and Bathsheba, was granted wisdom by God surpassing all men. He built the First Temple in Jerusalem, the dwelling place of God\'s presence among His people. His reign marked the zenith of Israel\'s power and prosperity.',
    significance: 'Built the First Temple; renowned for divine wisdom; authored Proverbs, Ecclesiastes, and Song of Solomon.',
    scripturalReference: '1 Kings 1-11; Proverbs; Ecclesiastes; Song of Solomon'
  },
  {
    id: 'jesus',
    name: 'Jesus Christ',
    title: 'Lord and Savior, Son of God',
    lifespan: 'c. 6-4 BC - c. AD 30-33',
    description: 'Jesus Christ is the eternal Son of God, the Word made flesh, who dwelt among us. He is the fulfillment of all Old Testament prophecy, the promised Messiah who came to save His people from their sins. Through His death on the cross and resurrection on the third day, He accomplished the redemption of all who believe.',
    significance: 'The only begotten Son of God; Savior of the world; fulfilled all Scripture; conquered death and sin.',
    scripturalReference: 'Matthew, Mark, Luke, John; Colossians 1:15-20; Philippians 2:5-11'
  },
  {
    id: 'paul',
    name: 'Paul the Apostle',
    title: 'Apostle to the Gentiles',
    lifespan: 'c. 5 AD - c. 67 AD',
    description: 'Paul, formerly Saul of Tarsus, was a Pharisee who persecuted the church until the risen Christ appeared to him on the Damascus road. Transformed by God\'s grace, he became the foremost apostle to the Gentiles, establishing churches throughout the Roman world and penning thirteen epistles of the New Testament.',
    significance: 'Authored 13 New Testament epistles; established churches across Asia Minor and Greece; articulated justification by faith alone.',
    scripturalReference: 'Acts 9-28; Romans through Philemon'
  }
];

export const philosophers: HistoricalFigure[] = [
  {
    id: 'socrates',
    name: 'Socrates',
    title: 'Greek Philosopher',
    lifespan: 'c. 470-399 BCE',
    description: 'Socrates developed the dialectical method of inquiry, seeking truth through systematic questioning. His pursuit of wisdom and virtue, though limited by pagan understanding, demonstrated humanity\'s need for absolute truth—a need ultimately fulfilled in Christ.',
    significance: 'Father of Western philosophy; developed the Socratic method; sought truth through reason.',
    scripturalReference: 'Acts 17:22-31 (Paul\'s engagement with Greek philosophy)'
  },
  {
    id: 'plato',
    title: 'Greek Philosopher',
    name: 'Plato',
    lifespan: 'c. 427-347 BCE',
    description: 'Plato, student of Socrates, founded the Academy and developed the Theory of Forms, positing eternal ideals beyond the material world. His conception of ultimate Good and eternal truths, though incomplete, prepared the intellectual soil for the reception of Christian revelation.',
    significance: 'Founded the Academy; developed the Theory of Forms; influenced Augustine and Christian metaphysics.',
    scripturalReference: 'Hebrews 1:1-2 (God speaking through various means before Christ)'
  },
  {
    id: 'aristotle',
    name: 'Aristotle',
    title: 'Greek Philosopher',
    lifespan: '384-322 BCE',
    description: 'Aristotle, student of Plato, developed systematic logic and empirical investigation. His categories and metaphysical framework, though not divinely revealed, provided tools that Christian thinkers like Thomas Aquinas would later employ to articulate and defend the faith.',
    significance: 'Father of logic and biology; developed systematic metaphysics; influenced medieval scholasticism.',
    scripturalReference: 'Romans 1:19-20 (God\'s invisible attributes perceived in creation)'
  },
  {
    id: 'augustine',
    name: 'Augustine of Hippo',
    title: 'Church Father and Theologian',
    lifespan: '354-430 AD',
    description: 'Saint Augustine, Bishop of Hippo, stands as one of the greatest theologians in Christian history. Converted from Manichaeism and a life of sin through the prayers of his mother Monica and the preaching of Ambrose, Augustine articulated the doctrines of grace, original sin, and predestination with profound biblical insight. His Confessions and City of God remain foundational works of Christian thought.',
    significance: 'Doctor of the Church; articulated doctrines of grace and original sin; wrote Confessions and City of God.',
    scripturalReference: 'Romans 5:12-21; Ephesians 2:8-9'
  },
  {
    id: 'thomas-aquinas',
    name: 'Thomas Aquinas',
    title: 'Doctor of the Church',
    lifespan: 'c. 1225-1274',
    description: 'Saint Thomas Aquinas, the Angelic Doctor, systematically reconciled Aristotelian philosophy with Christian revelation in his masterwork Summa Theologiae. His Five Ways demonstrate God\'s existence through reason, while his synthesis of faith and reason established the intellectual foundation for Catholic theology.',
    significance: 'Author of Summa Theologiae; demonstrated God\'s existence through reason; synthesized faith and philosophy.',
    scripturalReference: 'Psalm 19:1; Romans 1:20'
  },
  {
    id: 'martin-luther',
    name: 'Martin Luther',
    title: 'Reformer and Theologian',
    lifespan: '1483-1546',
    description: 'Martin Luther, German monk and professor, recovered the biblical doctrine of justification by faith alone from the corruption of medieval Catholicism. His posting of the Ninety-Five Theses in 1517 ignited the Protestant Reformation, returning the church to the authority of Scripture alone.',
    significance: 'Initiated the Protestant Reformation; recovered sola fide and sola scriptura; translated Bible into German.',
    scripturalReference: 'Romans 1:17; Galatians 3:11'
  }
];

export const historicalPeriods: HistoricalPeriod[] = [
  {
    id: 'creation',
    title: 'Creation',
    subtitle: 'In the Beginning God Created',
    era: 'The Foundation of All Things',
    description: 'In the beginning, God created the heavens and the earth. By His word, all things were made—light and darkness, land and sea, plants and animals, and finally man in His own image. The universe did not emerge from chaos or chance but from the deliberate act of an intelligent, personal Creator who formed all things ex nihilo—out of nothing.',
    scripturalContext: 'Genesis 1-2; John 1:1-3; Colossians 1:16-17',
    quote: 'In the beginning, God created the heavens and the earth.',
    quoteSource: 'Genesis 1:1',
    imageUrl: '/images/periods/creation.svg',
    imageAlt: 'Illustrated cosmic rings and dawn horizon representing Creation',
    keyFigures: [],
    keyEvents: [
      {
        id: 'creation-light',
        name: 'Creation of Light',
        date: 'Day One',
        description: 'God said, "Let there be light," and there was light. God saw that the light was good.',
        scripturalReference: 'Genesis 1:3-4'
      },
      {
        id: 'creation-man',
        name: 'Creation of Man',
        date: 'Day Six',
        description: 'God created man in His own image, male and female He created them, blessing them to be fruitful and multiply.',
        scripturalReference: 'Genesis 1:26-28'
      },
      {
        id: 'creation-sabbath',
        name: 'The Sabbath Rest',
        date: 'Day Seven',
        description: 'God rested from all His work which He had done, blessing and sanctifying the seventh day.',
        scripturalReference: 'Genesis 2:2-3'
      }
    ],
    sources: [
      { title: 'Creationism', url: 'https://grokipedia.com/page/Creationism', type: 'grokipedia' },
      { title: 'Bible', url: 'https://grokipedia.com/page/Bible', type: 'grokipedia' }
    ]
  },
  {
    id: 'ancient-near-east',
    title: 'The Ancient Near East',
    subtitle: 'Cradle of Civilization',
    era: 'c. 10000-500 BCE',
    description: 'The Ancient Near East witnessed the first civilizations after the Flood. Here in Mesopotamia, the Sumerians established the first city-states, developing writing and law. These peoples, descendants of Noah, built kingdoms that would form the backdrop for God\'s dealings with Abraham and the patriarchs.',
    scripturalContext: 'Genesis 2-11',
    quote: 'Come, let us build ourselves a city and a tower with its top in the heavens.',
    quoteSource: 'Genesis 11:4',
    imageUrl: '/images/periods/ancient-near-east.svg',
    imageAlt: 'Illustrated stepped ziggurat for Ancient Near Eastern civilization',
    keyFigures: [],
    keyEvents: [
      {
        id: 'sumerian-cities',
        name: 'Rise of Sumerian City-States',
        date: 'c. 3500 BCE',
        description: 'Sumerians established the first city-states including Uruk, developing cuneiform writing for record-keeping.',
        location: 'Mesopotamia'
      },
      {
        id: 'tower-babel',
        name: 'Tower of Babel',
        date: 'c. 2200 BCE',
        description: 'God confused the languages of mankind at Babel, scattering the peoples across the earth.',
        location: 'Babylon',
        scripturalReference: 'Genesis 11:1-9'
      }
    ],
    sources: [
      { title: 'Ancient Near East', url: 'https://grokipedia.com/page/Ancient_Near_East', type: 'grokipedia' }
    ]
  },
  {
    id: 'ancient-egypt',
    title: 'Ancient Egypt',
    subtitle: 'Land of the Pharaohs',
    era: 'c. 3100-30 BCE',
    description: 'Egypt arose as a mighty kingdom along the Nile, its pharaohs building monuments that stand to this day. It was in Egypt that God\'s people sojourned, first as guests and then as slaves, until the Lord delivered them with a mighty hand. The plagues demonstrated God\'s judgment on Egypt\'s false gods.',
    scripturalContext: 'Genesis 37-50; Exodus 1-15',
    quote: 'Let my people go, that they may serve me.',
    quoteSource: 'Exodus 8:1',
    imageUrl: '/images/periods/ancient-egypt.svg',
    imageAlt: 'Illustrated pyramids and desert sun for Ancient Egypt',
    keyFigures: [],
    keyEvents: [
      {
        id: 'joseph-egypt',
        name: 'Joseph in Egypt',
        date: 'c. 1800 BCE',
        description: 'Joseph, sold by his brothers, rose to rule Egypt under Pharaoh, preserving his family during famine.',
        location: 'Egypt',
        scripturalReference: 'Genesis 37-50'
      },
      {
        id: 'exodus',
        name: 'The Exodus',
        date: 'c. 13th century BCE',
        description: 'God delivered Israel from Egyptian bondage through Moses, with ten plagues and the crossing of the Red Sea.',
        location: 'Egypt to Sinai',
        scripturalReference: 'Exodus 7-15'
      }
    ],
    sources: [
      { title: 'Ancient Egypt', url: 'https://grokipedia.com/page/Ancient_Egypt', type: 'grokipedia' }
    ]
  },
  {
    id: 'patriarchal-era',
    title: 'The Patriarchal Era',
    subtitle: 'Fathers of the Faith',
    era: 'c. 2000-1600 BCE',
    description: 'God called Abraham from Ur of the Chaldeans to journey to Canaan, where He established an everlasting covenant. Through Abraham, Isaac, and Jacob, God built a people for His own possession, promising that through their Seed all nations would be blessed.',
    scripturalContext: 'Genesis 12-50',
    quote: 'In you all the families of the earth shall be blessed.',
    quoteSource: 'Genesis 12:3',
    imageUrl: '/images/periods/patriarchal-era.svg',
    imageAlt: 'Illustrated desert tent under stars for the patriarchs',
    keyFigures: [biblicalFigures[0]],
    keyEvents: [
      {
        id: 'abrahamic-call',
        name: 'Call of Abraham',
        date: 'c. 2000 BCE',
        description: 'God called Abram to leave his homeland, promising to make him a great nation and bless all peoples through him.',
        location: 'Ur to Canaan',
        scripturalReference: 'Genesis 12:1-3'
      },
      {
        id: 'covenant-sign',
        name: 'Covenant of Circumcision',
        date: 'c. 1900 BCE',
        description: 'God established circumcision as the sign of His everlasting covenant with Abraham and his descendants.',
        scripturalReference: 'Genesis 17'
      },
      {
        id: 'binding-isaac',
        name: 'Binding of Isaac',
        date: 'c. 1870 BCE',
        description: 'Abraham demonstrated his faith by obeying God\'s command to sacrifice Isaac, foreshadowing God\'s own sacrifice of His Son.',
        location: 'Mount Moriah',
        scripturalReference: 'Genesis 22'
      }
    ],
    sources: [
      { title: 'Abraham', url: 'https://grokipedia.com/page/Abraham', type: 'grokipedia' }
    ]
  },
  {
    id: 'exodus-period',
    title: 'The Exodus and Wilderness',
    subtitle: 'Deliverance and Covenant',
    era: 'c. 13th century BCE',
    description: 'God delivered Israel from slavery in Egypt with a mighty hand and outstretched arm. At Mount Sinai, He established His covenant with His people, giving them the Law through Moses. The tabernacle was constructed as God\'s dwelling place among His people.',
    scripturalContext: 'Exodus - Deuteronomy',
    quote: 'I am the Lord your God, who brought you out of the land of Egypt, out of the house of slavery.',
    quoteSource: 'Exodus 20:2',
    imageUrl: '/images/periods/exodus-period.svg',
    imageAlt: 'Illustrated parted waters and stone tablets for the Exodus',
    keyFigures: [biblicalFigures[1]],
    keyEvents: [
      {
        id: 'passover',
        name: 'The Passover',
        date: 'c. 13th century BCE',
        description: 'The Lord passed over the houses of Israel marked with blood, while striking the firstborn of Egypt.',
        location: 'Egypt',
        scripturalReference: 'Exodus 12'
      },
      {
        id: 'red-sea',
        name: 'Crossing the Red Sea',
        date: 'c. 13th century BCE',
        description: 'God parted the Red Sea for Israel to pass through on dry ground, then destroyed Pharaoh\'s army.',
        location: 'Red Sea',
        scripturalReference: 'Exodus 14'
      },
      {
        id: 'ten-commandments',
        name: 'Giving of the Law',
        date: 'c. 13th century BCE',
        description: 'Moses received the Ten Commandments and the Law from God on Mount Sinai.',
        location: 'Mount Sinai',
        scripturalReference: 'Exodus 19-20'
      }
    ],
    sources: [
      { title: 'Moses', url: 'https://grokipedia.com/page/Moses', type: 'grokipedia' },
      { title: 'Israelites', url: 'https://grokipedia.com/page/Israelites', type: 'grokipedia' }
    ]
  },
  {
    id: 'israelite-kingdom',
    title: 'Kingdom of Israel',
    subtitle: 'God\'s Chosen Nation',
    era: 'c. 1050-586 BCE',
    description: 'Israel emerged as a united kingdom under Saul, David, and Solomon. David conquered Jerusalem and established it as the eternal capital, while Solomon built the Temple as God\'s dwelling place. After Solomon\'s apostasy, the kingdom divided, and both Israel and Judah eventually fell to judgment for their idolatry.',
    scripturalContext: '1 Samuel - 2 Chronicles',
    quote: 'Your house and your kingdom shall be made sure forever before me. Your throne shall be established forever.',
    quoteSource: '2 Samuel 7:16',
    imageUrl: '/images/periods/israelite-kingdom.svg',
    imageAlt: 'Illustrated crown and temple pillars for the Kingdom of Israel',
    keyFigures: [biblicalFigures[2], biblicalFigures[3]],
    keyEvents: [
      {
        id: 'david-kingdom',
        name: 'David\'s Kingdom',
        date: 'c. 1000 BCE',
        description: 'David unified the tribes, conquered Jerusalem, and received the Davidic Covenant promising an eternal dynasty.',
        location: 'Jerusalem',
        scripturalReference: '2 Samuel 5-7'
      },
      {
        id: 'temple-built',
        name: 'Building of the Temple',
        date: 'c. 966 BCE',
        description: 'Solomon built the First Temple in Jerusalem as the permanent dwelling place of God\'s presence.',
        location: 'Jerusalem',
        scripturalReference: '1 Kings 6-8'
      },
      {
        id: 'kingdom-divided',
        name: 'Division of the Kingdom',
        date: 'c. 930 BCE',
        description: 'Following Solomon\'s death, the kingdom divided into Israel (north) and Judah (south).',
        scripturalReference: '1 Kings 12'
      },
      {
        id: 'babylonian-exile',
        name: 'Babylonian Exile',
        date: '586 BCE',
        description: 'Babylon destroyed Jerusalem and the Temple, exiling Judah for seventy years of judgment.',
        location: 'Jerusalem',
        scripturalReference: '2 Kings 25'
      }
    ],
    sources: [
      { title: 'Israelites', url: 'https://grokipedia.com/page/Israelites', type: 'grokipedia' },
      { title: 'David', url: 'https://grokipedia.com/page/David', type: 'grokipedia' },
      { title: 'Solomon', url: 'https://grokipedia.com/page/Solomon', type: 'grokipedia' }
    ]
  },
  {
    id: 'greek-philosophy',
    title: 'Greek Philosophy',
    subtitle: 'Preparation for the Gospel',
    era: 'c. 600-300 BCE',
    description: 'Greek philosophy, though operating in the realm of natural reason rather than divine revelation, demonstrated humanity\'s search for truth, meaning, and the divine. Socrates, Plato, and Aristotle developed frameworks of thought that, while incomplete, would later be employed by Christian theologians to articulate and defend the faith. God, in His providence, used Greek thought to prepare the intellectual soil for the reception of the Gospel.',
    scripturalContext: 'Acts 17:16-34; Romans 1:19-20',
    quote: 'The fear of the Lord is the beginning of wisdom, and the knowledge of the Holy One is insight.',
    quoteSource: 'Proverbs 9:10',
    imageUrl: '/images/periods/greek-philosophy.svg',
    imageAlt: 'Illustrated classical columns for Greek philosophical schools',
    keyFigures: [philosophers[0], philosophers[1], philosophers[2]],
    keyEvents: [
      {
        id: 'socrates-death',
        name: 'Death of Socrates',
        date: '399 BCE',
        description: 'Socrates was executed in Athens for "corrupting the youth" and impiety, dying for his pursuit of truth.',
        location: 'Athens'
      },
      {
        id: 'academy-founded',
        name: 'Plato Founds the Academy',
        date: 'c. 387 BCE',
        description: 'Plato established the Academy in Athens, creating the model for Western higher education.',
        location: 'Athens'
      },
      {
        id: 'aristotle-lyceum',
        name: 'Aristotle Founds the Lyceum',
        date: '335 BCE',
        description: 'Aristotle established his school in Athens, developing systematic logic and empirical investigation.',
        location: 'Athens'
      }
    ],
    sources: [
      { title: 'Ancient Greece', url: 'https://grokipedia.com/page/Ancient_Greece', type: 'grokipedia' },
      { title: 'Plato', url: 'https://grokipedia.com/page/Plato', type: 'grokipedia' },
      { title: 'Aristotle', url: 'https://grokipedia.com/page/Aristotle', type: 'grokipedia' }
    ]
  },
  {
    id: 'roman-empire',
    title: 'The Roman Empire',
    subtitle: 'Pax Romana and the Fullness of Time',
    era: '27 BC - 476 AD',
    description: 'The Roman Empire, established under Augustus, brought unprecedented peace and order to the Mediterranean world. In the fullness of time, when Rome\'s roads and common language made communication possible, God sent forth His Son. The Roman Empire would become the vessel through which the Gospel spread to the ends of the earth.',
    scripturalContext: 'Luke 2:1; Galatians 4:4',
    quote: 'When the fullness of time had come, God sent forth his Son, born of woman, born under the law.',
    quoteSource: 'Galatians 4:4',
    imageUrl: '/images/periods/roman-empire.svg',
    imageAlt: 'Illustrated Roman arch and imperial roadway motif',
    keyFigures: [],
    keyEvents: [
      {
        id: 'augustus-reign',
        name: 'Reign of Augustus',
        date: '27 BC - 14 AD',
        description: 'Caesar Augustus established the Pax Romana, bringing peace to the empire at the time of Christ\'s birth.',
        location: 'Rome',
        scripturalReference: 'Luke 2:1'
      },
      {
        id: 'crucifixion',
        name: 'Crucifixion of Jesus Christ',
        date: 'c. 30-33 AD',
        description: 'Jesus Christ was crucified under Pontius Pilate, accomplishing the redemption of God\'s people.',
        location: 'Jerusalem',
        scripturalReference: 'Matthew 27; Mark 15; Luke 23; John 19'
      },
      {
        id: 'resurrection',
        name: 'Resurrection of Jesus Christ',
        date: 'c. 30-33 AD',
        description: 'On the third day, Jesus rose from the dead, conquering death and proving Himself the Son of God.',
        location: 'Jerusalem',
        scripturalReference: 'Matthew 28; Mark 16; Luke 24; John 20'
      }
    ],
    sources: [
      { title: 'Roman Empire', url: 'https://grokipedia.com/page/Roman_Empire', type: 'grokipedia' }
    ]
  },
  {
    id: 'life-of-christ',
    title: 'The Life of Christ',
    subtitle: 'The Word Made Flesh',
    era: 'c. 4 BC - 33 AD',
    description: 'Jesus Christ, the eternal Son of God, took on human flesh and dwelt among us. He lived a sinless life, taught with authority, healed the sick, and raised the dead. He died as a substitutionary sacrifice for the sins of His people and rose again on the third day. He is the only way to the Father, the only name under heaven by which we must be saved.',
    scripturalContext: 'Matthew, Mark, Luke, John',
    quote: 'I am the way, and the truth, and the life. No one comes to the Father except through me.',
    quoteSource: 'John 14:6',
    imageUrl: '/images/periods/life-of-christ.svg',
    imageAlt: 'Illustrated cross and halo for the life and ministry of Christ',
    keyFigures: [biblicalFigures[4]],
    keyEvents: [
      {
        id: 'incarnation',
        name: 'The Incarnation',
        date: 'c. 4 BC',
        description: 'The Word became flesh and dwelt among us, born of the Virgin Mary in Bethlehem of Judea.',
        location: 'Bethlehem',
        scripturalReference: 'Matthew 1-2; Luke 1-2; John 1:14'
      },
      {
        id: 'baptism',
        name: 'Baptism of Jesus',
        date: 'c. 26 AD',
        description: 'Jesus was baptized by John in the Jordan, and the Father declared, "This is my beloved Son."',
        location: 'Jordan River',
        scripturalReference: 'Matthew 3:13-17'
      },
      {
        id: 'crucifixion-event',
        name: 'The Crucifixion',
        date: 'c. 30-33 AD',
        description: 'Jesus suffered and died on the cross, bearing the sins of His people and satisfying God\'s justice.',
        location: 'Golgotha',
        scripturalReference: 'Matthew 27:32-56'
      },
      {
        id: 'resurrection-event',
        name: 'The Resurrection',
        date: 'c. 30-33 AD',
        description: 'Jesus rose from the dead on the third day, demonstrating His victory over sin and death.',
        location: 'Jerusalem',
        scripturalReference: 'Matthew 28:1-10'
      },
      {
        id: 'ascension',
        name: 'The Ascension',
        date: 'c. 30-33 AD',
        description: 'Jesus ascended to heaven and sat down at the right hand of the Father, where He intercedes for His people.',
        location: 'Mount of Olives',
        scripturalReference: 'Acts 1:9-11'
      }
    ],
    sources: [
      { title: 'Jesus', url: 'https://grokipedia.com/page/Jesus', type: 'grokipedia' }
    ]
  },
  {
    id: 'early-church',
    title: 'The Early Church',
    subtitle: 'The Spread of the Gospel',
    era: 'c. 30-313 AD',
    description: 'After Pentecost, the Holy Spirit empowered the apostles to preach the Gospel throughout the Roman Empire. Despite persecution, the church grew rapidly. Paul\'s missionary journeys established churches across Asia Minor and Greece. The faith spread from Jerusalem to Rome, transforming the ancient world.',
    scripturalContext: 'Acts - Revelation',
    quote: 'And they devoted themselves to the apostles\' teaching and the fellowship, to the breaking of bread and the prayers.',
    quoteSource: 'Acts 2:42',
    imageUrl: '/images/periods/early-church.svg',
    imageAlt: 'Illustrated flame and fish motif for the early church mission',
    keyFigures: [biblicalFigures[5]],
    keyEvents: [
      {
        id: 'pentecost',
        name: 'Day of Pentecost',
        date: 'c. 30 AD',
        description: 'The Holy Spirit descended upon the disciples, and three thousand souls were saved.',
        location: 'Jerusalem',
        scripturalReference: 'Acts 2'
      },
      {
        id: 'paul-conversion',
        name: 'Conversion of Paul',
        date: 'c. 33-36 AD',
        description: 'The risen Christ appeared to Saul on the Damascus road, transforming him from persecutor to apostle.',
        location: 'Damascus Road',
        scripturalReference: 'Acts 9:1-19'
      },
      {
        id: 'council-jerusalem',
        name: 'Council of Jerusalem',
        date: 'c. 48-50 AD',
        description: 'The apostles affirmed that Gentile believers are saved by grace through faith, not by works of the Law.',
        location: 'Jerusalem',
        scripturalReference: 'Acts 15'
      }
    ],
    sources: [
      { title: 'Christianity', url: 'https://grokipedia.com/page/Christianity', type: 'grokipedia' },
      { title: 'Paul the Apostle', url: 'https://grokipedia.com/page/Paul_the_Apostle', type: 'grokipedia' }
    ]
  },
  {
    id: 'church-fathers',
    title: 'The Church Fathers',
    subtitle: 'Guardians of Orthodoxy',
    era: 'c. 100-500 AD',
    description: 'The Church Fathers defended the faith against heresy and articulated orthodox doctrine. Augustine of Hippo, the greatest of the Latin Fathers, wrote profoundly on grace, sin, and salvation. His works shaped the church\'s understanding of Scripture for over a thousand years.',
    scripturalContext: 'Jude 1:3; 2 Timothy 1:13-14',
    quote: 'You have made us for yourself, O Lord, and our heart is restless until it rests in you.',
    quoteSource: 'Augustine, Confessions',
    imageUrl: '/images/periods/church-fathers.svg',
    imageAlt: 'Illustrated codex and quill for writings of the Church Fathers',
    keyFigures: [philosophers[3]],
    keyEvents: [
      {
        id: 'augustine-conversion',
        name: 'Conversion of Augustine',
        date: '386 AD',
        description: 'Augustine was converted to Christ through the preaching of Ambrose and his mother Monica\'s prayers.',
        location: 'Milan',
        scripturalReference: 'Romans 13:13-14'
      },
      {
        id: 'city-of-god',
        name: 'City of God Published',
        date: '426 AD',
        description: 'Augustine completed his masterwork defending Christianity after Rome\'s sack by the Visigoths.',
        location: 'Hippo'
      }
    ],
    sources: [
      { title: 'Augustine of Hippo', url: 'https://grokipedia.com/page/Augustine_of_Hippo', type: 'grokipedia' }
    ]
  },
  {
    id: 'constantinian-era',
    title: 'The Constantinian Era',
    subtitle: 'Church and Empire',
    era: '313-476 AD',
    description: 'Constantine the Great ended persecution of Christians and granted the church legal status. The Council of Nicaea in 325 affirmed the deity of Christ against Arian heresy. Christianity would become the foundation of Western civilization.',
    scripturalContext: 'Daniel 2:44-45; Matthew 16:18',
    quote: 'I believe in one God, the Father Almighty, Maker of heaven and earth, and of all things visible and invisible.',
    quoteSource: 'Nicene Creed',
    imageUrl: '/images/periods/constantinian-era.svg',
    imageAlt: 'Illustrated Chi-Rho monogram for the Constantinian era',
    keyFigures: [],
    keyEvents: [
      {
        id: 'edict-milan',
        name: 'Edict of Milan',
        date: '313 AD',
        description: 'Constantine granted religious toleration, ending state persecution of Christians.',
        location: 'Milan'
      },
      {
        id: 'council-nicaea',
        name: 'Council of Nicaea',
        date: '325 AD',
        description: 'The first ecumenical council affirmed the full deity of Christ: "God from God, Light from Light."',
        location: 'Nicaea',
        scripturalReference: 'John 1:1-14'
      },
      {
        id: 'constantinople',
        name: 'Founding of Constantinople',
        date: '330 AD',
        description: 'Constantine established Constantinople as the new Christian capital of the Roman Empire.',
        location: 'Byzantium'
      }
    ],
    sources: [
      { title: 'Constantine the Great', url: 'https://grokipedia.com/page/Constantine_the_Great', type: 'grokipedia' }
    ]
  },
  {
    id: 'middle-ages',
    title: 'The Middle Ages',
    subtitle: 'Christendom Established',
    era: 'c. 500-1500 AD',
    description: 'The Middle Ages saw the establishment of Christendom throughout Europe. Monasteries preserved Scripture and learning. Universities were founded on Christian principles. Thomas Aquinas synthesized faith and reason, demonstrating that truth cannot contradict truth. Gothic cathedrals rose to the glory of God.',
    scripturalContext: 'Psalm 78:4-7; 2 Timothy 2:2',
    quote: 'Faith and reason are like two wings on which the human spirit rises to the contemplation of truth.',
    quoteSource: 'John Paul II, Fides et Ratio',
    imageUrl: '/images/periods/middle-ages.svg',
    imageAlt: 'Illustrated cathedral spires for medieval Christendom',
    keyFigures: [philosophers[4]],
    keyEvents: [
      {
        id: 'fall-rome',
        name: 'Fall of Western Rome',
        date: '476 AD',
        description: 'The Western Roman Empire fell, but the church continued to preserve civilization and knowledge.',
        location: 'Rome'
      },
      {
        id: 'charlemagne',
        name: 'Coronation of Charlemagne',
        date: '800 AD',
        description: 'Charlemagne was crowned Holy Roman Emperor, uniting Christian Europe.',
        location: 'Rome'
      },
      {
        id: 'great-schism',
        name: 'East-West Schism',
        date: '1054 AD',
        description: 'The Eastern Orthodox and Roman Catholic churches divided over papal authority and the filioque.',
        location: 'Rome and Constantinople'
      },
      {
        id: 'summa-theologiae',
        name: 'Summa Theologiae',
        date: '1274 AD',
        description: 'Thomas Aquinas completed his systematic theology, reconciling faith and reason.',
        location: 'Paris'
      }
    ],
    sources: [
      { title: 'Middle Ages', url: 'https://grokipedia.com/page/Middle_Ages', type: 'grokipedia' },
      { title: 'Thomas Aquinas', url: 'https://grokipedia.com/page/Thomas_Aquinas', type: 'grokipedia' }
    ]
  },
  {
    id: 'reformation',
    title: 'The Protestant Reformation',
    subtitle: 'Return to Scripture',
    era: '1517-1648 AD',
    description: 'Martin Luther, a German monk and professor, recovered the biblical doctrine of justification by faith alone. His Ninety-Five Theses, posted on October 31, 1517, challenged the corruption of indulgences and ignited the Reformation. The principles of sola scriptura, sola fide, and sola gratia returned the church to apostolic Christianity.',
    scripturalContext: 'Romans 1:16-17; Galatians 3; Ephesians 2:8-9',
    quote: 'The just shall live by faith.',
    quoteSource: 'Romans 1:17',
    imageUrl: '/images/periods/reformation.svg',
    imageAlt: 'Illustrated hammer and document for the Protestant Reformation',
    keyFigures: [philosophers[5]],
    keyEvents: [
      {
        id: 'luther-theses',
        name: 'Ninety-Five Theses',
        date: 'October 31, 1517',
        description: 'Luther posted his theses challenging the sale of indulgences, calling the church back to Scripture.',
        location: 'Wittenberg'
      },
      {
        id: 'diet-worms',
        name: 'Diet of Worms',
        date: '1521 AD',
        description: 'Luther refused to recant before Emperor Charles V: "My conscience is captive to the Word of God."',
        location: 'Worms'
      },
      {
        id: 'luther-bible',
        name: 'German Bible Translation',
        date: '1534 AD',
        description: 'Luther completed his translation of the Bible into German, making Scripture accessible to the common people.',
        location: 'Wartburg Castle'
      }
    ],
    sources: [
      { title: 'Reformation', url: 'https://grokipedia.com/page/Reformation', type: 'grokipedia' },
      { title: 'Martin Luther', url: 'https://grokipedia.com/page/Martin_Luther', type: 'grokipedia' }
    ]
  },
  {
    id: 'american-founding',
    title: 'The American Founding',
    subtitle: 'One Nation Under God',
    era: '1775-1789 AD',
    description: 'The American Revolution established a nation founded on the principle that all men are created equal, endowed by their Creator with unalienable rights. The Founders, shaped by biblical Christianity and the Protestant tradition, established a constitutional republic of limited government. The United States was founded on the truths of Scripture and the conviction that rights come from God, not the state.',
    scripturalContext: 'Genesis 1:27; Acts 17:26-27; Romans 13:1-4',
    quote: 'We hold these truths to be self-evident, that all men are created equal, that they are endowed by their Creator with certain unalienable Rights.',
    quoteSource: 'Declaration of Independence',
    imageUrl: '/images/periods/american-founding.svg',
    imageAlt: 'Illustrated liberty bell and stars for the American Founding',
    keyFigures: [],
    keyEvents: [
      {
        id: 'declaration',
        name: 'Declaration of Independence',
        date: 'July 4, 1776',
        description: 'The Continental Congress declared independence, affirming that all men are created equal and endowed by their Creator with unalienable rights.',
        location: 'Philadelphia',
        scripturalReference: 'Genesis 1:27'
      },
      {
        id: 'constitution',
        name: 'Constitution Ratified',
        date: '1788 AD',
        description: 'The Constitution established a federal republic of limited, separated powers—the oldest written constitution still in use.',
        location: 'Philadelphia'
      },
      {
        id: 'bill-of-rights',
        name: 'Bill of Rights',
        date: '1791 AD',
        description: 'The first ten amendments protected freedom of religion, speech, and other fundamental rights against government infringement.',
        location: 'United States'
      }
    ],
    sources: [
      { title: 'United States', url: 'https://grokipedia.com/page/United_States', type: 'grokipedia' },
      { title: 'American Revolution', url: 'https://grokipedia.com/page/American_Revolution', type: 'grokipedia' }
    ]
  },
  {
    id: 'world-wars',
    title: 'The World Wars',
    subtitle: 'Crisis of the Twentieth Century',
    era: '1914-1945 AD',
    description: 'Two world wars devastated Europe and reshaped the global order. World War II saw the defeat of Nazi Germany and Imperial Japan—totalitarian regimes that rejected God\'s law and committed unspeakable atrocities. The United States emerged from these conflicts as the defender of liberty against tyranny.',
    scripturalContext: 'Psalm 2; Matthew 24:6-7; Revelation 6:3-4',
    quote: 'Greater love has no one than this, that someone lay down his life for his friends.',
    quoteSource: 'John 15:13',
    imageUrl: '/images/periods/world-wars.svg',
    imageAlt: 'Illustrated memorial cross and poppy for the World Wars',
    keyFigures: [],
    keyEvents: [
      {
        id: 'wwi',
        name: 'World War I',
        date: '1914-1918 AD',
        description: 'The Great War devastated Europe, ending empires and setting the stage for the twentieth century.',
        location: 'Europe'
      },
      {
        id: 'wwii',
        name: 'World War II',
        date: '1939-1945 AD',
        description: 'The Allies defeated Nazi Germany and Imperial Japan, ending the Holocaust and preserving Western civilization.',
        location: 'Global'
      },
      {
        id: 'd-day',
        name: 'D-Day Invasion',
        date: 'June 6, 1944',
        description: 'Allied forces landed at Normandy, beginning the liberation of Europe from Nazi tyranny.',
        location: 'Normandy, France'
      }
    ],
    sources: [
      { title: 'World War II', url: 'https://grokipedia.com/page/World_War_II', type: 'grokipedia' }
    ]
  },
  {
    id: 'cold-war',
    title: 'The Cold War',
    subtitle: 'Liberty Against Tyranny',
    era: '1947-1991 AD',
    description: 'The United States led the free world against the expansion of Soviet communism—a godless ideology that denied human dignity and persecuted the church. Through the policy of containment, NATO, and the Marshall Plan, the West prevented the spread of communist tyranny. The Cold War ended with the fall of the Berlin Wall and the collapse of the Soviet Union, vindicating the principles of liberty over totalitarianism.',
    scripturalContext: 'Isaiah 61:1; Galatians 5:1; 1 Peter 2:16',
    quote: 'Mr. Gorbachev, tear down this wall!',
    quoteSource: 'Ronald Reagan, 1987',
    imageUrl: '/images/periods/cold-war.svg',
    imageAlt: 'Illustrated cracked wall motif for Cold War division',
    keyFigures: [],
    keyEvents: [
      {
        id: 'nato',
        name: 'NATO Founded',
        date: '1949 AD',
        description: 'The North Atlantic Treaty Organization was established to defend Western Europe against Soviet aggression.',
        location: 'Washington, D.C.'
      },
      {
        id: 'berlin-wall',
        name: 'Fall of the Berlin Wall',
        date: 'November 9, 1989',
        description: 'The Berlin Wall fell, marking the collapse of communist tyranny in Eastern Europe.',
        location: 'Berlin'
      },
      {
        id: 'soviet-collapse',
        name: 'Collapse of the Soviet Union',
        date: 'December 26, 1991',
        description: 'The Soviet Union dissolved, ending the Cold War and freeing millions from communist oppression.',
        location: 'Moscow'
      }
    ],
    sources: [
      { title: 'Cold War', url: 'https://grokipedia.com/page/Cold_War', type: 'grokipedia' }
    ]
  },
  {
    id: 'modern-era',
    title: 'The Present Age',
    subtitle: 'Awaiting His Return',
    era: '1991 AD - Present',
    description: 'We live in the age between Christ\'s first and second comings. The Gospel continues to advance throughout the world, even as Western civilization faces unprecedented challenges. The church must remain faithful to Scripture, proclaim Christ to a lost world, and look forward to His return in glory.',
    scripturalContext: 'Matthew 24:42-44; 2 Timothy 3:1-5; Revelation 22:20-21',
    quote: 'He who testifies to these things says, "Surely I am coming soon." Amen. Come, Lord Jesus!',
    quoteSource: 'Revelation 22:20',
    imageUrl: '/images/periods/modern-era.svg',
    imageAlt: 'Illustrated connected globe for the modern global age',
    keyFigures: [],
    keyEvents: [
      {
        id: 'church-growth',
        name: 'Global Church Growth',
        date: '21st Century',
        description: 'The Christian church continues to grow rapidly in Africa, Asia, and Latin America.',
        location: 'Global'
      },
      {
        id: 'scripture-translation',
        name: 'Scripture Translation',
        date: 'Ongoing',
        description: 'The Bible has been translated into over 3,500 languages, fulfilling Christ\'s command to make disciples of all nations.',
        scripturalReference: 'Matthew 28:19-20'
      }
    ],
    sources: [
      { title: 'Christianity', url: 'https://grokipedia.com/page/Christianity', type: 'grokipedia' }
    ]
  }
];

export function getAllFigures(): HistoricalFigure[] {
  return [...biblicalFigures, ...philosophers];
}

export function getFigureById(id: string): HistoricalFigure | undefined {
  return getAllFigures().find(figure => figure.id === id);
}

export function getPeriodById(id: string): HistoricalPeriod | undefined {
  return historicalPeriods.find(period => period.id === id);
}
