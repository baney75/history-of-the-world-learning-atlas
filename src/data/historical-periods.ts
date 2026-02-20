import type { HistoricalPeriod, HistoricalFigure, Source } from '@/types/history';

export const biblicalFigures: HistoricalFigure[] = [
  {
    id: 'abraham',
    name: 'Abraham',
    title: 'Father of the Faithful',
    lifespan: 'c. early 2nd millennium BCE',
    description: 'Abraham is the patriarch of the covenant, called by God from Ur of the Chaldeans to become the father of many nations. Through his faith and obedience, God established an everlasting covenant promising descendants as numerous as the stars and the land of Canaan as an eternal inheritance. His journey from Ur to Canaan, his willingness to sacrifice Isaac, and his intercession for Sodom demonstrate a faith that trusted God completely.',
    significance: 'Father of Isaac and Ishmael; received the Abrahamic Covenant; exemplar of justifying faith for all believers; ancestor of the Messiah.',
    scripturalReference: 'Genesis 12-25; Romans 4; Galatians 3; Hebrews 11:8-19'
  },
  {
    id: 'moses',
    name: 'Moses',
    title: 'Prophet of God and Lawgiver',
    lifespan: 'c. 13th century BCE',
    description: 'Moses was chosen by God to deliver the Israelites from bondage in Egypt. Through mighty signs and wonders, God demonstrated His power over the false gods of Egypt. At Mount Sinai, Moses received the Ten Commandments and the Law that would govern God\'s chosen people. He led Israel through the wilderness for forty years, interceded for the people when they sinned, and glimpsed the Promised Land before his death.',
    significance: 'Mediator of the Mosaic Covenant; delivered Israel from Egypt; received the Law; authored the Pentateuch; greatest prophet of the Old Testament.',
    scripturalReference: 'Exodus, Leviticus, Numbers, Deuteronomy; Acts 7:20-44; Hebrews 3:1-6'
  },
  {
    id: 'david',
    name: 'David',
    title: 'King of Israel, Man After God\'s Heart',
    lifespan: 'c. 1040-970 BCE',
    description: 'David, the shepherd boy anointed by Samuel, defeated Goliath and rose to become Israel\'s greatest king. He conquered Jerusalem and established it as the eternal capital of God\'s people. God made an everlasting covenant with David, promising that the Messiah would come from his lineage. Though he fell into sin with Bathsheba, his repentance produced the Psalms of contrition that have comforted believers for millennia.',
    significance: 'Established Jerusalem as capital; received the Davidic Covenant; composed the Psalms; ancestor of Jesus Christ; model of repentance.',
    scripturalReference: '1 Samuel 16 - 1 Kings 2; Psalms; Matthew 1:1; Acts 13:22'
  },
  {
    id: 'solomon',
    name: 'Solomon',
    title: 'King of Israel',
    lifespan: 'c. 970-931 BCE',
    description: 'Solomon, son of David and Bathsheba, was granted wisdom by God surpassing all men. He built the First Temple in Jerusalem, the dwelling place of God\'s presence among His people. His reign marked the zenith of Israel\'s power and prosperity. Yet his later years were marred by idolatry through foreign wives, demonstrating that wisdom without faithfulness leads to ruin.',
    significance: 'Built the First Temple; renowned for divine wisdom; authored Proverbs, Ecclesiastes, and Song of Solomon; exemplifies both wisdom and warning.',
    scripturalReference: '1 Kings 1-11; Proverbs; Ecclesiastes; Song of Solomon; Matthew 12:42'
  },
  {
    id: 'elijah',
    name: 'Elijah',
    title: 'Prophet of Fire',
    lifespan: 'c. 9th century BCE',
    description: 'Elijah the Tishbite was a prophet of unparalleled boldness who confronted King Ahab and the prophets of Baal on Mount Carmel. God answered his prayer with fire from heaven, demonstrating that the Lord alone is God. His flight to Horeb, where God spoke in a still small voice, reveals that divine power often works through quiet persistence rather than spectacular signs.',
    significance: 'Confronted Baal worship; demonstrated God\'s power over false gods; forerunner of John the Baptist; taken to heaven in a chariot of fire.',
    scripturalReference: '1 Kings 17-19; 2 Kings 2; Matthew 17:1-13; James 5:17-18'
  },
  {
    id: 'isaiah',
    name: 'Isaiah',
    title: 'Prophet of the Messiah',
    lifespan: 'c. 8th century BCE',
    description: 'Isaiah, the prince of prophets, ministered in Jerusalem during the reigns of Uzziah, Jotham, Ahaz, and Hezekiah. His prophecy contains more explicit predictions of Christ than any other Old Testament book, including the virgin birth, the Suffering Servant, and the Messianic kingdom. His vision of God\'s holiness in the temple transformed his life and ministry.',
    significance: 'Foretold the virgin birth and Suffering Servant; saw the Lord high and lifted up; prophesied the Messiah\'s birth, death, and kingdom.',
    scripturalReference: 'Isaiah; Matthew 1:22-23; Acts 8:30-35; Romans 10:16-21'
  },
  {
    id: 'jeremiah',
    name: 'Jeremiah',
    title: 'Weeping Prophet',
    lifespan: 'c. 650-570 BCE',
    description: 'Jeremiah prophesied judgment to Judah for forty years, weeping over Jerusalem\'s coming destruction. Despite persecution, imprisonment, and rejection, he faithfully proclaimed God\'s word. His prophecy of the New Covenant anticipated the coming of Christ and the writing of God\'s law on human hearts.',
    significance: 'Prophesied the New Covenant; wept over Jerusalem; ministered through persecution; witnessed the fall of Jerusalem.',
    scripturalReference: 'Jeremiah; Lamentations; Matthew 2:17-18; Hebrews 8:7-13'
  },
  {
    id: 'daniel',
    name: 'Daniel',
    title: 'Prophet of the Kingdoms',
    lifespan: 'c. 620-530 BCE',
    description: 'Daniel was taken to Babylon as a young man and rose to prominence in the courts of Nebuchadnezzar, Belshazzar, and Darius. His interpretation of dreams, deliverance from the lions\' den, and visions of the four kingdoms demonstrate God\'s sovereignty over all nations. His prophecy of the seventy weeks provides the timeline for the coming of the Messiah.',
    significance: 'Interpreted dreams; delivered from lions; prophesied the seventy weeks; revealed the succession of world kingdoms.',
    scripturalReference: 'Daniel; Matthew 24:15; Mark 13:14'
  },
  {
    id: 'jesus',
    name: 'Jesus Christ',
    title: 'Lord and Savior, Son of God',
    lifespan: 'c. 6-4 BC - c. AD 30-33',
    description: 'Jesus Christ is the eternal Son of God, the Word made flesh, who dwelt among us. He is the fulfillment of all Old Testament prophecy, the promised Messiah who came to save His people from their sins. Through His death on the cross and resurrection on the third day, He accomplished the redemption of all who believe. He is the only way to the Father, the only name under heaven by which we must be saved.',
    significance: 'The only begotten Son of God; Savior of the world; fulfilled all Scripture; conquered death and sin; will return to judge the living and the dead.',
    scripturalReference: 'Matthew, Mark, Luke, John; Colossians 1:15-20; Philippians 2:5-11; Hebrews 1:1-4'
  },
  {
    id: 'peter',
    name: 'Peter',
    title: 'Apostle to the Jews',
    lifespan: 'c. 1 BC - c. AD 64-68',
    description: 'Simon Peter was a fisherman called by Jesus to become a fisher of men. He confessed Jesus as the Christ, denied Him three times, and was restored by the risen Lord. On Pentecost, he preached the first gospel sermon, and three thousand souls were saved. He became the leading apostle to the Jews and authored two epistles before his martyrdom in Rome.',
    significance: 'Leading apostle; preached at Pentecost; apostle to the Jews; authored 1 and 2 Peter; martyred for Christ.',
    scripturalReference: 'Matthew 4:18-20; Matthew 16:13-20; Acts 2; 1 Peter; 2 Peter'
  },
  {
    id: 'john',
    name: 'John',
    title: 'Apostle of Love',
    lifespan: 'c. AD 6-100',
    description: 'John, the beloved disciple, was a fisherman called by Jesus along with his brother James. He leaned on Jesus\' breast at the Last Supper, stood at the cross with Mary, and received the vision of the Apocalypse. His Gospel and epistles emphasize love, light, and life in Christ. He was the only apostle to die a natural death.',
    significance: 'Authored the Gospel of John, 1-3 John, and Revelation; emphasized love and truth; received the apocalyptic vision.',
    scripturalReference: 'John 13:23-25; John 19:26-27; John 21:20-24; Revelation 1:1-3'
  },
  {
    id: 'paul',
    name: 'Paul the Apostle',
    title: 'Apostle to the Gentiles',
    lifespan: 'c. 5 AD - c. 67 AD',
    description: 'Paul, formerly Saul of Tarsus, was a Pharisee who persecuted the church until the risen Christ appeared to him on the Damascus road. Transformed by God\'s grace, he became the foremost apostle to the Gentiles, establishing churches throughout the Roman world and penning thirteen epistles of the New Testament. His letters systematically articulate justification by faith alone, the unity of Jew and Gentile in Christ, and the practical implications of the gospel.',
    significance: 'Authored 13 New Testament epistles; established churches across Asia Minor and Greece; articulated justification by faith alone; missionary par excellence.',
    scripturalReference: 'Acts 9-28; Romans through Philemon; 2 Peter 3:15-16'
  },
  {
    id: 'joseph',
    name: 'Joseph',
    title: 'Patriarch and Vizier of Egypt',
    lifespan: 'c. 19th century BCE',
    description: 'Joseph, the beloved son of Jacob, was sold into slavery by his jealous brothers. Through God\'s providence, he rose from prisoner to vizier of Egypt, second only to Pharaoh. His interpretation of dreams saved Egypt and surrounding nations from famine. Joseph\'s forgiveness of his brothers demonstrates God\'s sovereignty: "You meant evil against me, but God meant it for good" (Genesis 50:20).',
    significance: 'Preserved the family of Jacob; exemplified forgiveness and providence; foreshadowed Christ\'s rejection and exaltation.',
    scripturalReference: 'Genesis 37-50; Psalm 105:16-22; Acts 7:9-16'
  },
  {
    id: 'joshua',
    name: 'Joshua',
    title: 'Conqueror of Canaan',
    lifespan: 'c. 14th-13th century BCE',
    description: 'Joshua, son of Nun, was Moses\' successor who led Israel into the Promised Land. He served as Moses\' assistant for forty years, spied out the land with Caleb, and was commissioned by God to conquer Canaan. His famous declaration, "As for me and my house, we will serve the Lord" (Joshua 24:15), expresses covenant faithfulness. Under his leadership, Israel possessed the land God promised to Abraham.',
    significance: 'Led the conquest of Canaan; divided the land among the tribes; called Israel to covenant faithfulness; military leader and faithful servant.',
    scripturalReference: 'Joshua; Exodus 17:8-16; Numbers 13-14; Hebrews 4:8'
  },
  {
    id: 'samuel',
    name: 'Samuel',
    title: 'Prophet, Priest, and Judge',
    lifespan: 'c. 11th century BCE',
    description: 'Samuel was the last judge and first prophet of the monarchy period. Born to Hannah in answer to prayer, he was dedicated to the Lord\'s service from childhood. He anointed both Saul and David as kings, establishing the monarchy in Israel. His ministry marked the transition from the period of judges to the united kingdom.',
    significance: 'Last judge of Israel; anointed the first two kings; established schools of prophets; faithful intercessor for the nation.',
    scripturalReference: '1 Samuel 1-25; Psalm 99:6; Jeremiah 15:1; Acts 3:24; Acts 13:20'
  },
  {
    id: 'ruth',
    name: 'Ruth',
    title: 'Moabitess and Ancestor of David',
    lifespan: 'c. 11th century BCE',
    description: 'Ruth, a Moabite woman, demonstrated extraordinary loyalty to her Israelite mother-in-law Naomi: "Your people shall be my people, and your God my God" (Ruth 1:16). Her faith in the God of Israel led her to Bethlehem, where she married Boaz and became the great-grandmother of King David. She is one of four women named in Matthew\'s genealogy of Christ.',
    significance: 'Great-grandmother of David; exemplified loyalty and faith; included in the Messianic lineage; convert to the true God.',
    scripturalReference: 'Ruth; Matthew 1:5'
  },
  {
    id: 'esther',
    name: 'Esther',
    title: 'Queen of Persia and Deliverer',
    lifespan: 'c. 5th century BCE',
    description: 'Esther, a Jewish orphan raised by her cousin Mordecai, became queen of Persia during the exile. When Haman plotted to destroy the Jews, Esther risked her life to intercede for her people: "If I perish, I perish" (Esther 4:16). God used her courage to save the Jewish people from genocide. The feast of Purim commemorates this deliverance.',
    significance: 'Saved the Jewish people from genocide; exemplified courage and providence; queen of the Persian Empire; heroine of Purim.',
    scripturalReference: 'Esther'
  },
  {
    id: 'ezra',
    name: 'Ezra',
    title: 'Scribe and Reformer',
    lifespan: 'c. 5th-4th century BCE',
    description: 'Ezra was a scribe skilled in the Law of Moses who led a group of exiles from Babylon to Jerusalem. He read the Law to the assembled people, leading to national repentance and covenant renewal. His reforms purified the community from pagan influences. Ezra\'s ministry, alongside Nehemiah, restored proper worship after the exile.',
    significance: 'Restored the Law\'s authority; led spiritual renewal; reformed the community; compiled and preserved Scripture.',
    scripturalReference: 'Ezra; Nehemiah 8-10'
  },
  {
    id: 'nehemiah',
    name: 'Nehemiah',
    title: 'Governor and Builder',
    lifespan: 'c. 5th century BCE',
    description: 'Nehemiah, cupbearer to King Artaxerxes, led the effort to rebuild Jerusalem\'s walls despite fierce opposition. His leadership combined prayer, planning, and perseverance. In fifty-two days, the walls were completed, demonstrating that "the people had a mind to work" (Nehemiah 4:6). He also partnered with Ezra in spiritual renewal.',
    significance: 'Rebuilt Jerusalem\'s walls; governed Judah; partnered with Ezra in reform; exemplified prayerful leadership.',
    scripturalReference: 'Nehemiah'
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
  }
];

export const churchFathers: HistoricalFigure[] = [
  {
    id: 'athanasius',
    name: 'Athanasius',
    title: 'Church Father and Defender of Orthodoxy',
    lifespan: 'c. 296-373 AD',
    description: 'Athanasius, Bishop of Alexandria, was the foremost defender of the deity of Christ against Arian heresy. At the Council of Nicaea in 325, he championed the biblical truth that the Son is homoousios—of the same essence—as the Father. His tireless defense of Trinitarian orthodoxy, despite five exiles, earned him the title "Athanasius Contra Mundum"—Athanasius Against the World.',
    significance: 'Defended Christ\'s deity at Nicaea; authored On the Incarnation; champion of Trinitarian orthodoxy.',
    scripturalReference: 'John 1:1-14; Colossians 1:15-20'
  },
  {
    id: 'john-chrysostom',
    name: 'John Chrysostom',
    title: 'Church Father and Preacher',
    lifespan: 'c. 347-407 AD',
    description: 'John Chrysostom, Archbishop of Constantinople, was renowned as the greatest preacher of the early church—his name means "Golden Mouth." His homilies on Scripture, especially Matthew and Romans, remain treasures of biblical exposition. He fearlessly condemned sin in high places, which led to his exile and death, yet his preaching continues to instruct the church.',
    significance: 'Greatest preacher of the early church; authored influential homilies; martyred for prophetic witness.',
    scripturalReference: '2 Timothy 4:2; James 3:1-12'
  },
  {
    id: 'jerome',
    name: 'Jerome',
    title: 'Church Father and Translator',
    lifespan: 'c. 342-420 AD',
    description: 'Jerome, scholar and ascetic, translated the Bible into Latin—the Vulgate—which served as the standard Bible of Western Christianity for over a thousand years. His mastery of Hebrew, rare among Latin fathers, enabled him to translate the Old Testament directly from the original. His scholarship preserved Scripture for generations of believers.',
    significance: 'Translated the Latin Vulgate; mastered Hebrew and Greek; preserved Scripture for the Western church.',
    scripturalReference: 'Psalm 119:105; 2 Timothy 3:16-17'
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
    id: 'irenaeus',
    name: 'Irenaeus of Lyons',
    title: 'Church Father and Apologist',
    lifespan: 'c. 130-202 AD',
    description: 'Irenaeus, Bishop of Lyons, wrote Against Heresies to combat Gnosticism, defending the unity of God, the goodness of creation, and the reality of Christ\'s incarnation. He emphasized the rule of faith handed down from the apostles and the importance of apostolic succession. His theology of recapitulation—Christ summing up all things—profoundly shaped Christian thought.',
    significance: 'Defended orthodoxy against Gnosticism; articulated recapitulation theology; emphasized apostolic tradition.',
    scripturalReference: 'Ephesians 1:10; Colossians 1:20'
  },
  {
    id: 'tertullian',
    name: 'Tertullian',
    title: 'Church Father and Apologist',
    lifespan: 'c. 155-240 AD',
    description: 'Tertullian, a lawyer turned Christian apologist, was the first major theologian to write in Latin, coining terms like "Trinity" and "sacrament." His vigorous defense of Christianity against pagan accusations and his treatises on prayer, baptism, and repentance shaped Western theology. Though later influenced by Montanism, his early works remain invaluable.',
    significance: 'First major Latin theologian; coined "Trinity"; defended Christianity against paganism; shaped Western theological vocabulary.',
    scripturalReference: 'Matthew 28:19; 2 Corinthians 13:14'
  },
  {
    id: 'origen',
    name: 'Origen',
    title: 'Church Father and Scholar',
    lifespan: 'c. 185-254 AD',
    description: 'Origen of Alexandria was the greatest biblical scholar of the early church, producing the Hexapla—a six-column comparison of Old Testament texts—and writing extensive commentaries. His method of allegorical interpretation influenced later exegesis. Though some of his speculative teachings were later condemned, his scholarship and devotion to Scripture remain exemplary.',
    significance: 'Produced the Hexapla; wrote extensive commentaries; developed allegorical interpretation; greatest biblical scholar of antiquity.',
    scripturalReference: '2 Timothy 2:15; Psalm 119:18'
  }
];

export const medievalTheologians: HistoricalFigure[] = [
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
    id: 'anselm',
    name: 'Anselm of Canterbury',
    title: 'Doctor of the Church',
    lifespan: 'c. 1033-1109',
    description: 'Anselm, Archbishop of Canterbury, developed the ontological argument for God\'s existence and the satisfaction theory of atonement. His motto "faith seeking understanding" expressed his conviction that reason serves faith. In Cur Deus Homo (Why God Became Man), he explained why Christ\'s death was necessary for salvation.',
    significance: 'Developed ontological argument; formulated satisfaction theory of atonement; "faith seeking understanding."',
    scripturalReference: 'Psalm 14:1; Romans 3:23-26'
  },
  {
    id: 'bernard-clairvaux',
    name: 'Bernard of Clairvaux',
    title: 'Abbot and Mystic',
    lifespan: '1090-1153',
    description: 'Bernard, Abbot of Clairvaux, was the most influential monk of the twelfth century. His sermons on the Song of Songs explored the soul\'s love for Christ. He preached the Second Crusade and counseled popes and kings. His hymn "Jesus, the Very Thought of Thee" expresses his devotion to Christ.',
    significance: 'Most influential monk of the 12th century; authored sermons on the Song of Songs; preached the Second Crusade; hymn writer.',
    scripturalReference: 'Song of Solomon 2:4; Psalm 42:1'
  }
];

export const reformers: HistoricalFigure[] = [
  {
    id: 'martin-luther',
    name: 'Martin Luther',
    title: 'Reformer and Theologian',
    lifespan: '1483-1546',
    description: 'Martin Luther, German monk and professor, recovered the biblical doctrine of justification by faith alone from the corruption of medieval Catholicism. His posting of the Ninety-Five Theses in 1517 ignited the Protestant Reformation, returning the church to the authority of Scripture alone.',
    significance: 'Initiated the Protestant Reformation; recovered sola fide and sola scriptura; translated Bible into German.',
    scripturalReference: 'Romans 1:17; Galatians 3:11'
  },
  {
    id: 'john-calvin',
    name: 'John Calvin',
    title: 'Reformer and Theologian',
    lifespan: '1509-1564',
    description: 'John Calvin, French theologian and pastor, systematized Reformed theology in his Institutes of the Christian Religion. His exposition of Scripture, emphasis on God\'s sovereignty, and development of covenant theology shaped Protestant thought for centuries. His ministry in Geneva established a model of church order and discipline.',
    significance: 'Authored Institutes of the Christian Religion; systematized Reformed theology; established Geneva as Reformation center.',
    scripturalReference: 'Romans 8:28-30; Ephesians 1:3-14'
  },
  {
    id: 'william-tyndale',
    name: 'William Tyndale',
    title: 'Reformer and Translator',
    lifespan: 'c. 1494-1536',
    description: 'William Tyndale translated the New Testament into English, defying church authorities who forbade vernacular Scriptures. His translation, remarkably accurate and beautifully written, formed the basis for the King James Version. He was strangled and burned at the stake for his work, praying "Lord, open the King of England\'s eyes."',
    significance: 'Translated Bible into English; martyr for Scripture access; shaped English language through translation.',
    scripturalReference: '2 Timothy 3:16-17; Psalm 119:130'
  },
  {
    id: 'john-knox',
    name: 'John Knox',
    title: 'Scottish Reformer',
    lifespan: 'c. 1514-1572',
    description: 'John Knox led the Scottish Reformation, establishing Presbyterianism as the national church. His fiery preaching and uncompromising stand for Scripture transformed Scotland. He challenged monarchs, endured captivity, and laid the foundation for the Presbyterian tradition that would influence America\'s founding.',
    significance: 'Led Scottish Reformation; established Presbyterianism; champion of biblical authority over monarchy.',
    scripturalReference: 'Acts 5:29; Romans 13:1-4'
  },
  {
    id: 'ulrich-zwingli',
    name: 'Ulrich Zwingli',
    title: 'Swiss Reformer',
    lifespan: '1484-1531',
    description: 'Ulrich Zwingli led the Reformation in Zurich, emphasizing Scripture alone as authority and rejecting traditions not found in the Bible. His approach to the Lord\'s Supper differed from Luther\'s, viewing it as a memorial rather than a sacrament. He died in battle serving as chaplain to Zurich troops, but his reforms shaped Swiss Protestantism.',
    significance: 'Led Swiss Reformation; emphasized sola scriptura; reformed Zurich; influenced Reformed theology.',
    scripturalReference: '1 Corinthians 11:23-26; John 6:35-40'
  },
  {
    id: 'jonathan-edwards',
    name: 'Jonathan Edwards',
    title: 'Theologian and Revival Preacher',
    lifespan: '1703-1758',
    description: 'Jonathan Edwards, pastor and theologian, was the greatest mind America has produced. His sermon "Sinners in the Hands of an Angry God" became the most famous sermon in American history. He articulated the theology of the Great Awakening, defended Reformed orthodoxy, and served as president of Princeton. His works on free will, religious affections, and revival remain influential.',
    significance: 'Greatest American theologian; preached "Sinners in the Hands of an Angry God"; articulated revival theology; Princeton president.',
    scripturalReference: 'Deuteronomy 32:35; Romans 9:18-24'
  },
  {
    id: 'john-wesley',
    name: 'John Wesley',
    title: 'Founder of Methodism',
    lifespan: '1703-1791',
    description: 'John Wesley, Anglican clergyman, founded the Methodist movement after his heart was "strangely warmed" at a meeting on Aldersgate Street. He preached throughout Britain, emphasizing personal conversion, holiness, and the witness of the Spirit. His method of itinerant preaching, small groups, and hymnody transformed English-speaking Christianity.',
    significance: 'Founded Methodism; preached throughout Britain; emphasized holiness and personal conversion; wrote hymns.',
    scripturalReference: 'Romans 8:16; 1 Thessalonians 5:23'
  }
];

export const americanFounders: HistoricalFigure[] = [
  {
    id: 'george-washington',
    name: 'George Washington',
    title: 'First President of the United States',
    lifespan: '1732-1799',
    description: 'George Washington, commander of the Continental Army and first President of the United States, was indispensable to American independence and the establishment of the republic. His character, self-restraint, and reliance on divine providence set the standard for American leadership. He voluntarily relinquished power, establishing the precedent of peaceful transition.',
    significance: 'Commander-in-Chief of Continental Army; first President; "Father of his Country"; established precedent of peaceful transition.',
    scripturalReference: 'Micah 6:8; Romans 13:1-7'
  },
  {
    id: 'thomas-jefferson',
    name: 'Thomas Jefferson',
    title: 'Author of the Declaration of Independence',
    lifespan: '1743-1826',
    description: 'Thomas Jefferson authored the Declaration of Independence, articulating the self-evident truths that all men are created equal and endowed by their Creator with unalienable rights. As third President, he secured the Louisiana Purchase. Though his theological views were unorthodox, his political philosophy was shaped by biblical concepts of human dignity and liberty.',
    significance: 'Authored Declaration of Independence; third President; Louisiana Purchase; articulated Creator-endowed rights.',
    scripturalReference: 'Genesis 1:27; Acts 17:26-27'
  },
  {
    id: 'james-madison',
    name: 'James Madison',
    title: 'Father of the Constitution',
    lifespan: '1751-1836',
    description: 'James Madison, fourth President of the United States, was the principal architect of the Constitution and the Bill of Rights. His understanding of human nature, informed by biblical realism about sin, led him to design a system of separated powers and checks and balances. He championed religious liberty as an inalienable right.',
    significance: 'Principal author of Constitution; fourth President; "Father of the Bill of Rights"; champion of religious liberty.',
    scripturalReference: 'Jeremiah 17:9; Romans 3:23'
  },
  {
    id: 'john-adams',
    name: 'John Adams',
    title: 'Second President of the United States',
    lifespan: '1735-1826',
    description: 'John Adams, second President of the United States, was a leading advocate for independence and a key diplomat in securing European support. His conviction that only a moral and religious people can sustain a republic shaped his political philosophy. He recognized that the Constitution was made only for a moral and religious people.',
    significance: 'Second President; leading advocate for independence; negotiated peace with Britain; champion of virtue in public life.',
    scripturalReference: 'Proverbs 14:34; Psalm 33:12'
  },
  {
    id: 'benjamin-franklin',
    name: 'Benjamin Franklin',
    title: 'Founding Father and Inventor',
    lifespan: '1706-1790',
    description: 'Benjamin Franklin, though holding unorthodox religious views, recognized the necessity of divine providence in the American cause. At the Constitutional Convention, he called for daily prayer, acknowledging that God governs in the affairs of men. His diplomatic service in France was crucial to American victory.',
    significance: 'Diplomat to France; delegate to Constitutional Convention; inventor; called for prayer at Convention.',
    scripturalReference: 'Psalm 127:1; Proverbs 21:1'
  }
];

export const modernFigures: HistoricalFigure[] = [
  {
    id: 'william-wilberforce',
    name: 'William Wilberforce',
    title: 'Abolitionist and Statesman',
    lifespan: '1759-1833',
    description: 'William Wilberforce, British parliamentarian and evangelical Christian, led the campaign to abolish the slave trade and slavery itself in the British Empire. His conversion to Christ compelled him to fight for the dignity of every human being created in God\'s image. After decades of struggle, Parliament abolished slavery three days before his death.',
    significance: 'Led abolition of British slave trade and slavery; evangelical statesman; demonstrated faith in public life.',
    scripturalReference: 'Genesis 1:27; Galatians 3:28'
  },
  {
    id: 'cs-lewis',
    name: 'C.S. Lewis',
    title: 'Christian Apologist and Author',
    lifespan: '1898-1963',
    description: 'C.S. Lewis, Oxford don and convert from atheism, became one of the most influential Christian apologists of the twentieth century. His books Mere Christianity, The Screwtape Letters, and the Chronicles of Narnia have led millions to consider the claims of Christ. He articulated the faith with clarity, imagination, and intellectual rigor.',
    significance: 'Authored Mere Christianity and Chronicles of Narnia; Oxford scholar; influential apologist for Christianity.',
    scripturalReference: '1 Peter 3:15; Colossians 4:6'
  },
  {
    id: 'abraham-lincoln',
    name: 'Abraham Lincoln',
    title: '16th President of the United States',
    lifespan: '1809-1865',
    description: 'Abraham Lincoln preserved the Union and ended slavery in the United States. His Gettysburg Address and Second Inaugural reflect profound theological reflection on divine providence and human sin. He recognized the Civil War as divine judgment for the sin of slavery, yet trusted in God\'s purposes for the nation.',
    significance: 'Preserved the Union; issued Emancipation Proclamation; ended slavery; theological reflection on providence.',
    scripturalReference: 'Genesis 9:6; Galatians 3:28'
  },
  {
    id: 'dietrich-bonhoeffer',
    name: 'Dietrich Bonhoeffer',
    title: 'Theologian and Martyr',
    lifespan: '1906-1945',
    description: 'Dietrich Bonhoeffer, German pastor and theologian, opposed the Nazi regime and the German church\'s compromise with Hitler. His books The Cost of Discipleship and Life Together call Christians to radical obedience. He participated in the plot to assassinate Hitler and was executed in Flossenbürg concentration camp three weeks before its liberation.',
    significance: 'Opposed Nazi regime; authored The Cost of Discipleship; martyr for the faith; witness against tyranny.',
    scripturalReference: 'Matthew 16:24-26; Revelation 2:10'
  },
  {
    id: 'aleksandr-solzhenitsyn',
    name: 'Aleksandr Solzhenitsyn',
    title: 'Author and Dissident',
    lifespan: '1918-2008',
    description: 'Aleksandr Solzhenitsyn, Russian writer and Nobel laureate, exposed the horrors of the Soviet gulag in The Gulag Archipelago. His Christian faith informed his critique of totalitarianism and his call for repentance. He warned the West against materialism and spiritual decline, urging a return to moral foundations.',
    significance: 'Exposed Soviet gulags; Nobel laureate; Christian dissident; warned the West against spiritual decline.',
    scripturalReference: 'John 8:32; Ephesians 5:11'
  },
  {
    id: 'winston-churchill',
    name: 'Winston Churchill',
    title: 'Prime Minister and Statesman',
    lifespan: '1874-1965',
    description: 'Winston Churchill led Britain through its darkest hour against Nazi tyranny. His speeches rallied the free world: "We shall fight on the beaches... we shall never surrender." Though not orthodox in faith, he recognized the spiritual dimension of the struggle against evil and spoke of "Christian civilization" that must be defended.',
    significance: 'Led Britain in World War II; rallied the free world; defended Western civilization; Nobel laureate in Literature.',
    scripturalReference: 'Ecclesiastes 3:1-8; Proverbs 24:10'
  },
  {
    id: 'ronald-reagan',
    name: 'Ronald Reagan',
    title: '40th President of the United States',
    lifespan: '1911-2004',
    description: 'Ronald Reagan, the "Great Communicator," restored American confidence after a decade of decline. His commitment to limited government, strong defense, and traditional values reflected his conservative convictions. He challenged the Soviet Union as an "evil empire" and called for the Berlin Wall to be torn down, contributing to the Cold War\'s end.',
    significance: 'Restored American confidence; challenged Soviet tyranny; ended Cold War; champion of liberty and traditional values.',
    scripturalReference: 'John 8:36; Galatians 5:1'
  },
  {
    id: 'martin-luther-king-jr',
    name: 'Martin Luther King Jr.',
    title: 'Civil Rights Leader and Pastor',
    lifespan: '1929-1968',
    description: 'Martin Luther King Jr., Baptist pastor and civil rights leader, led the movement for racial equality through nonviolent resistance grounded in Christian conviction. His "Letter from Birmingham Jail" and "I Have a Dream" speech articulated the biblical basis for justice. He was assassinated in Memphis while supporting sanitation workers.',
    significance: 'Led civil rights movement; advocated nonviolent resistance; grounded justice in Scripture; Nobel Peace Prize laureate.',
    scripturalReference: 'Amos 5:24; Galatians 3:28; Matthew 5:9'
  }
];

const baseHistoricalPeriods: HistoricalPeriod[] = [
  {
    id: 'creation',
    title: 'Creation',
    subtitle: 'The Doctrine of Ex Nihilo',
    era: 'The Foundation of All Things',
    description: 'The narrative of Creation establishes the absolute sovereignty and self-existence of God. Against the chaotic cosmogonies of the Ancient Near East, Genesis presents a deliberate, intelligent Creator who forms all things ex nihilo (out of nothing). The climax of this divine act is the creation of man in the imago Dei (image of God), establishing human dignity and the mandate to exercise stewardship over the earth.',
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
      { title: 'Genesis 1-2 (ESV)', url: 'https://www.biblegateway.com/passage/?search=Genesis%201-2&version=ESV', type: 'bible' },
      { title: 'John 1:1-3 (ESV)', url: 'https://www.biblegateway.com/passage/?search=John%201%3A1-3&version=ESV', type: 'bible' }
    ]
  },
  {
    id: 'ancient-near-east',
    title: 'The Ancient Near East',
    subtitle: 'The Cradle of Human Endeavor',
    era: 'c. 10000-500 BCE',
    description: 'The Ancient Near East (ANE) laid the foundation for human civilization post-Flood. In Mesopotamia, the Sumerians built the first urban centers (Uruk, Eridu) and developed cuneiform writing, codified law, and monumental architecture. The hubris of these early empires culminated in the Tower of Babel—humanity\'s attempt to centralize power and secure a legacy independent of the Creator, resulting in divine linguistic dispersion.',
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
      { title: 'Met Museum: Ancient Near Eastern Art', url: 'https://www.metmuseum.org/about-the-met/collection-areas/ancient-near-eastern-art', type: 'historical' },
      { title: 'Genesis 11 (ESV)', url: 'https://www.biblegateway.com/passage/?search=Genesis%2011&version=ESV', type: 'bible' }
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
      { title: 'British Museum: Ancient Egypt', url: 'https://www.britishmuseum.org/collection/ancient-egypt-sudan', type: 'historical' },
      { title: 'Exodus 1-15 (ESV)', url: 'https://www.biblegateway.com/passage/?search=Exodus%201-15&version=ESV', type: 'bible' }
    ]
  },
  {
    id: 'patriarchal-era',
    title: 'The Patriarchal Era',
    subtitle: 'The Abrahamic Covenant',
    era: 'c. 2000-1600 BCE',
    description: 'God\'s redemptive arc narrows from the nations to a single family. The call of Abraham from Ur of the Chaldeans marks the inauguration of the Covenant of Grace in history. Through a unilateral, promissory covenant, God pledges land, seed, and global blessing. The narratives of Isaac and Jacob demonstrate that this election relies entirely on divine sovereign grace, not human merit or primogeniture.',
    scripturalContext: 'Genesis 12-50; Galatians 3',
    quote: 'In you all the families of the earth shall be blessed.',
    quoteSource: 'Genesis 12:3',
    imageUrl: '/images/periods/patriarchal-era.svg',
    imageAlt: 'Illustrated desert tent under stars for the patriarchs',
    keyFigures: [biblicalFigures[0], biblicalFigures[12]],
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
      { title: 'Abraham (ESV)', url: 'https://www.biblegateway.com/passage/?search=Genesis%2012-25&version=ESV', type: 'bible' },
      { title: 'Romans 4 (ESV)', url: 'https://www.biblegateway.com/passage/?search=Romans%204&version=ESV', type: 'bible' }
    ]
  },
  {
    id: 'exodus-period',
    title: 'The Exodus and Sinai',
    subtitle: 'Deliverance and Law',
    era: 'c. 13th century BCE',
    description: 'The Exodus constitutes the primary redemptive paradigm of the Old Testament. God delivers Israel not through military revolt, but through unilateral, miraculous intervention, dismantling the Egyptian pantheon. At Sinai, the Mosaic Covenant establishes a holy nation—providing the Decalogue (moral law), the ceremonial system (foreshadowing Christ\'s atonement), and the Tabernacle (the locus of God\'s presence amidst His people).',
    scripturalContext: 'Exodus, Leviticus, Numbers',
    quote: 'I am the Lord your God, who brought you out of the land of Egypt, out of the house of slavery.',
    quoteSource: 'Exodus 20:2',
    imageUrl: '/images/periods/exodus-period.svg',
    imageAlt: 'Illustrated parted waters and stone tablets for the Exodus',
    keyFigures: [biblicalFigures[1], biblicalFigures[13]],
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
      { title: 'Moses and the Exodus (ESV)', url: 'https://www.biblegateway.com/passage/?search=Exodus%201-20&version=ESV', type: 'bible' },
      { title: 'Deuteronomy 5 (ESV)', url: 'https://www.biblegateway.com/passage/?search=Deuteronomy%205&version=ESV', type: 'bible' }
    ]
  },
  {
    id: 'israelite-kingdom',
    title: 'The Israelite Kingdom',
    subtitle: 'Monarchy and Theocracy',
    era: 'c. 1050-586 BCE',
    description: 'The transition from loose tribal confederacy under the Judges to a centralized monarchy culminates in the reign of David. The Davidic Covenant promises an everlasting throne, explicitly tying the theocratic kingdom to a coming Messiah. Solomon builds the First Temple, centralizing Israelite worship. Yet, rampant idolatry leads to the kingdom\'s fracture (Israel and Judah) and eventual subjugation by Assyria and Babylon (the Exile), proving the insufficiency of human kingship.',
    scripturalContext: '1 & 2 Samuel, 1 & 2 Kings, Prophets',
    quote: 'Your house and your kingdom shall be made sure forever before me. Your throne shall be established forever.',
    quoteSource: '2 Samuel 7:16',
    imageUrl: '/images/periods/israelite-kingdom.svg',
    imageAlt: 'Illustrated crown and temple pillars for the Kingdom of Israel',
    keyFigures: [biblicalFigures[2], biblicalFigures[3], biblicalFigures[4], biblicalFigures[5]],
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
      { title: '2 Samuel 7 (ESV)', url: 'https://www.biblegateway.com/passage/?search=2%20Samuel%207&version=ESV', type: 'bible' },
      { title: '1 Kings 6-8 (ESV)', url: 'https://www.biblegateway.com/passage/?search=1%20Kings%206-8&version=ESV', type: 'bible' }
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
      { title: 'IEP: Ancient Greek Philosophy', url: 'https://iep.utm.edu/ancient-greek-philosophy/', type: 'historical' },
      { title: 'SEP: Presocratic Philosophy', url: 'https://plato.stanford.edu/entries/presocratics/', type: 'historical' },
      { title: 'Perseus Digital Library', url: 'https://www.perseus.tufts.edu/hopper/collection?collection=Perseus:collection:Greco-Roman', type: 'primary' }
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
      { title: 'Galatians 4:4 (ESV)', url: 'https://www.biblegateway.com/passage/?search=Galatians%204%3A4&version=ESV', type: 'bible' },
      { title: 'Luke 2 (ESV)', url: 'https://www.biblegateway.com/passage/?search=Luke%202&version=ESV', type: 'bible' }
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
      { title: 'Matthew 1-28 (ESV)', url: 'https://www.biblegateway.com/passage/?search=Matthew%201-28&version=ESV', type: 'bible' },
      { title: 'John 1:1-18 (ESV)', url: 'https://www.biblegateway.com/passage/?search=John%201%3A1-18&version=ESV', type: 'bible' }
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
      { title: 'Acts 1-15 (ESV)', url: 'https://www.biblegateway.com/passage/?search=Acts%201-15&version=ESV', type: 'bible' },
      { title: 'Early Church Fathers (CCEL)', url: 'https://ccel.org/fathers/', type: 'primary' }
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
    keyFigures: [churchFathers[3]],
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
      { title: 'New Advent: Augustine', url: 'https://www.newadvent.org/fathers/', type: 'primary' },
      { title: 'Augustine\'s Confessions (CCEL)', url: 'https://ccel.org/ccel/augustine/confessions.html', type: 'primary' }
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
      { title: 'Council of Nicaea (New Advent)', url: 'https://www.newadvent.org/fathers/3801.htm', type: 'primary' },
      { title: 'Nicene Creed', url: 'https://www.newadvent.org/cathen/11044a.htm', type: 'historical' }
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
    keyFigures: [medievalTheologians[0]],
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
      { title: 'SEP: Aquinas', url: 'https://plato.stanford.edu/entries/aquinas/', type: 'historical' },
      { title: 'Summa Theologiae (New Advent)', url: 'https://www.newadvent.org/summa/', type: 'primary' }
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
    keyFigures: [reformers[0]],
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
      { title: 'Romans 1:16-17 (ESV)', url: 'https://www.biblegateway.com/passage/?search=Romans%201%3A16-17&version=ESV', type: 'bible' },
      { title: 'Luther\'s 95 Theses', url: 'https://www.luther.de/en/95thesen.html', type: 'primary' }
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
      { title: 'Declaration of Independence', url: 'https://www.archives.gov/founding-docs/declaration-transcript', type: 'primary' },
      { title: 'U.S. Constitution', url: 'https://www.archives.gov/founding-docs/constitution-transcript', type: 'primary' }
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
      { title: 'Imperial War Museums', url: 'https://www.iwm.org.uk/history', type: 'historical' },
      { title: 'National WWII Museum', url: 'https://www.nationalww2museum.org/', type: 'historical' }
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
      { title: 'NATO History', url: 'https://www.nato.int/cps/en/natohq/declassified.htm', type: 'historical' },
      { title: 'Reagan Library: Berlin Wall', url: 'https://www.reaganlibrary.gov/research/collections/berlin-wall', type: 'historical' }
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
      { title: 'Revelation 22:20 (ESV)', url: 'https://www.biblegateway.com/passage/?search=Revelation%2022%3A20&version=ESV', type: 'bible' },
      { title: 'Matthew 28:18-20 (ESV)', url: 'https://www.biblegateway.com/passage/?search=Matthew%2028%3A18-20&version=ESV', type: 'bible' }
    ]
  }
];

const periodImageOverrides: Record<string, { imageUrl: string; imageAlt: string }> = {
  'creation': {
    imageUrl: '/images/periods/creation.jpg',
    imageAlt: 'Michelangelo\'s Creation of Adam detail from the Sistine Chapel ceiling',
  },
  'ancient-near-east': {
    imageUrl: '/images/periods/ancient-near-east.jpg',
    imageAlt: 'Ishtar Gate relief artifact representing Ancient Near Eastern civilization',
  },
  'ancient-egypt': {
    imageUrl: '/images/periods/ancient-egypt.jpg',
    imageAlt: 'The Great Pyramid of Giza at the Giza necropolis in Egypt',
  },
  'patriarchal-era': {
    imageUrl: '/images/periods/patriarchal-era.jpg',
    imageAlt: 'Classical painting depicting Abraham from the patriarchal narratives',
  },
  'exodus-period': {
    imageUrl: '/images/periods/exodus-period.jpg',
    imageAlt: 'Rembrandt painting of Moses with the tablets of the Law',
  },
  'israelite-kingdom': {
    imageUrl: '/images/periods/israelite-kingdom.jpg',
    imageAlt: 'Scale model of Jerusalem and the Temple Mount in the Israelite kingdom period',
  },
  'greek-philosophy': {
    imageUrl: '/images/periods/greek-philosophy.jpg',
    imageAlt: 'Raphael\'s School of Athens fresco symbolizing classical Greek philosophy',
  },
  'roman-empire': {
    imageUrl: '/images/periods/roman-empire.jpg',
    imageAlt: 'View of the Roman Forum, a central site of the Roman Empire',
  },
  'life-of-christ': {
    imageUrl: '/images/periods/life-of-christ.jpg',
    imageAlt: 'Historic Christ Pantocrator icon from Saint Catherine\'s Monastery, Sinai',
  },
  'early-church': {
    imageUrl: '/images/periods/early-church.jpg',
    imageAlt: 'Pentecost fresco representing the outpouring of the Holy Spirit on the early church',
  },
  'church-fathers': {
    imageUrl: '/images/periods/church-fathers.jpg',
    imageAlt: 'Portrait of Augustine of Hippo, a major Church Father and theologian',
  },
  'constantinian-era': {
    imageUrl: '/images/periods/constantinian-era.jpg',
    imageAlt: 'Capitoline Museums statue of Emperor Constantine the Great',
  },
  'middle-ages': {
    imageUrl: '/images/periods/middle-ages.jpg',
    imageAlt: 'Chartres Cathedral, a landmark Gothic church from the medieval period',
  },
  'reformation': {
    imageUrl: '/images/periods/reformation.jpg',
    imageAlt: 'Lucas Cranach portrait of Martin Luther from the Reformation era',
  },
  'american-founding': {
    imageUrl: '/images/periods/american-founding.jpg',
    imageAlt: 'John Trumbull painting of the Declaration of Independence presentation',
  },
  'world-wars': {
    imageUrl: '/images/periods/world-wars.jpg',
    imageAlt: 'Normandy landing troops during World War II on June 6, 1944',
  },
  'cold-war': {
    imageUrl: '/images/periods/cold-war.jpg',
    imageAlt: 'Photograph of the Berlin Wall during the Cold War period',
  },
  'modern-era': {
    imageUrl: '/images/periods/modern-era.jpg',
    imageAlt: 'The Blue Marble Earth photograph representing the modern global era',
  },
};

const periodSourceOverrides: Record<string, Source[]> = {
  'creation': [
    { title: 'Genesis 1 (ESV)', url: 'https://www.biblegateway.com/passage/?search=Genesis%201&version=ESV', type: 'bible' },
    { title: 'John 1:1-3 (ESV)', url: 'https://www.biblegateway.com/passage/?search=John%201%3A1-3&version=ESV', type: 'bible' },
  ],
  'ancient-near-east': [
    { title: 'Metropolitan Museum: Ancient Near Eastern Art', url: 'https://www.metmuseum.org/about-the-met/collection-areas/ancient-near-eastern-art', type: 'historical' },
    { title: 'Genesis 11:1-9 (ESV)', url: 'https://www.biblegateway.com/passage/?search=Genesis%2011%3A1-9&version=ESV', type: 'bible' },
  ],
  'ancient-egypt': [
    { title: 'British Museum: Ancient Egypt', url: 'https://www.britishmuseum.org/collection/ancient-egypt-sudan', type: 'historical' },
    { title: 'Exodus 1-15 (ESV)', url: 'https://www.biblegateway.com/passage/?search=Exodus%201-15&version=ESV', type: 'bible' },
  ],
  'patriarchal-era': [
    { title: 'Genesis 12-25 (ESV)', url: 'https://www.biblegateway.com/passage/?search=Genesis%2012-25&version=ESV', type: 'bible' },
    { title: 'Romans 4 (ESV)', url: 'https://www.biblegateway.com/passage/?search=Romans%204&version=ESV', type: 'bible' },
  ],
  'exodus-period': [
    { title: 'Exodus 1-20 (ESV)', url: 'https://www.biblegateway.com/passage/?search=Exodus%201-20&version=ESV', type: 'bible' },
    { title: 'Deuteronomy 5 (ESV)', url: 'https://www.biblegateway.com/passage/?search=Deuteronomy%205&version=ESV', type: 'bible' },
  ],
  'israelite-kingdom': [
    { title: '2 Samuel 7 (ESV)', url: 'https://www.biblegateway.com/passage/?search=2%20Samuel%207&version=ESV', type: 'bible' },
    { title: '1 Kings 6-8 (ESV)', url: 'https://www.biblegateway.com/passage/?search=1%20Kings%206-8&version=ESV', type: 'bible' },
  ],
  'greek-philosophy': [
    { title: 'Internet Encyclopedia of Philosophy: Ancient Greek Philosophy', url: 'https://iep.utm.edu/ancient-greek-philosophy/', type: 'historical' },
    { title: 'Stanford Encyclopedia: Presocratic Philosophy', url: 'https://plato.stanford.edu/entries/presocratics/', type: 'historical' },
  ],
  'roman-empire': [
    { title: 'Perseus Digital Library: Roman History', url: 'https://www.perseus.tufts.edu/hopper/collection?collection=Perseus:collection:Greco-Roman', type: 'primary' },
    { title: 'Galatians 4:4 (ESV)', url: 'https://www.biblegateway.com/passage/?search=Galatians%204%3A4&version=ESV', type: 'bible' },
  ],
  'life-of-christ': [
    { title: 'Matthew 1-28 (ESV)', url: 'https://www.biblegateway.com/passage/?search=Matthew%201-28&version=ESV', type: 'bible' },
    { title: 'John 1:1-18 (ESV)', url: 'https://www.biblegateway.com/passage/?search=John%201%3A1-18&version=ESV', type: 'bible' },
  ],
  'early-church': [
    { title: 'Acts 1-15 (ESV)', url: 'https://www.biblegateway.com/passage/?search=Acts%201-15&version=ESV', type: 'bible' },
    { title: 'Christian Classics Ethereal Library: Early Church Fathers', url: 'https://ccel.org/fathers/', type: 'primary' },
  ],
  'church-fathers': [
    { title: 'New Advent: Fathers of the Church', url: 'https://www.newadvent.org/fathers/', type: 'primary' },
    { title: 'Augustine: Confessions (Christian Classics)', url: 'https://ccel.org/ccel/augustine/confessions.html', type: 'primary' },
  ],
  'constantinian-era': [
    { title: 'Fordham University: Edict of Milan', url: 'https://sourcebooks.fordham.edu/source/edict-milan.asp', type: 'primary' },
    { title: 'Nicene Creed (Christian Classics)', url: 'https://ccel.org/creeds/nicene.html', type: 'primary' },
  ],
  'middle-ages': [
    { title: 'Fordham University: Medieval Sourcebook', url: 'https://sourcebooks.fordham.edu/sbook1t.asp', type: 'primary' },
    { title: 'Aquinas: Summa Theologiae (Christian Classics)', url: 'https://ccel.org/ccel/aquinas/summa.html', type: 'primary' },
  ],
  'reformation': [
    { title: 'Ninety-Five Theses (Christian History Institute)', url: 'https://www.christianhistoryinstitute.org/institute/resource/ninety-five-theses/', type: 'primary' },
    { title: 'Romans 1:16-17 (ESV)', url: 'https://www.biblegateway.com/passage/?search=Romans%201%3A16-17&version=ESV', type: 'bible' },
  ],
  'american-founding': [
    { title: 'Declaration of Independence (National Archives)', url: 'https://www.archives.gov/founding-docs/declaration-transcript', type: 'primary' },
    { title: 'Constitution (National Archives)', url: 'https://www.archives.gov/founding-docs/constitution-transcript', type: 'primary' },
  ],
  'world-wars': [
    { title: 'Imperial War Museums: World War I', url: 'https://www.iwm.org.uk/history/first-world-war', type: 'historical' },
    { title: 'Imperial War Museums: World War II', url: 'https://www.iwm.org.uk/history/second-world-war', type: 'historical' },
  ],
  'cold-war': [
    { title: 'National Archives: Cold War Documents', url: 'https://www.archives.gov/research/foreign-policy/cold-war', type: 'primary' },
    { title: 'Reagan Library: Tear Down This Wall Speech', url: 'https://www.reaganlibrary.gov/archives/speech/june-12-1987-speech-brandenburg-gate-west-berlin', type: 'primary' },
  ],
  'modern-era': [
    { title: 'Revelation 22:20-21 (ESV)', url: 'https://www.biblegateway.com/passage/?search=Revelation%2022%3A20-21&version=ESV', type: 'bible' },
    { title: 'Matthew 28:19-20 (ESV)', url: 'https://www.biblegateway.com/passage/?search=Matthew%2028%3A19-20&version=ESV', type: 'bible' },
  ],
};

export const historicalPeriods: HistoricalPeriod[] = baseHistoricalPeriods.map((period) => {
  const imageOverride = periodImageOverrides[period.id];
  const sourceOverride = periodSourceOverrides[period.id];

  return {
    ...period,
    imageUrl: imageOverride?.imageUrl ?? period.imageUrl,
    imageAlt: imageOverride?.imageAlt ?? period.imageAlt,
    sources: sourceOverride ?? period.sources,
  };
});

export function getAllFigures(): HistoricalFigure[] {
  return [
    ...biblicalFigures,
    ...philosophers,
    ...churchFathers,
    ...medievalTheologians,
    ...reformers,
    ...americanFounders,
    ...modernFigures
  ];
}

export function getFigureById(id: string): HistoricalFigure | undefined {
  return getAllFigures().find(figure => figure.id === id);
}

export function getPeriodById(id: string): HistoricalPeriod | undefined {
  return historicalPeriods.find(period => period.id === id);
}
