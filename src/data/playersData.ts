import { PlayerData, SportCategory } from '../types';

export const PLAYERS: PlayerData[] = [
  // ==========================================
  // 🏏 CRICKET (6 Stars with Cricbuzz Dossiers)
  // ==========================================
  {
    id: 'virat-kohli',
    slug: 'virat-kohli',
    name: 'Virat Kohli',
    fullName: 'Virat Prem Kohli',
    sport: 'Cricket',
    role: 'Top-order Batter',
    team: 'India / Royal Challengers Bengaluru',
    nationality: 'India',
    jerseyNumber: 18,
    dateOfBirth: 'Nov 05, 1988 (Age 37)',
    birthPlace: 'Delhi, India',
    height: "5 ft 9 in (175 cm)",
    battingStyle: 'Right Handed Bat',
    bowlingStyle: 'Right-arm medium',
    worldRanking: 'ICC #3 ODI Batting · Hall of Fame Benchmark',
    teamsPlayedFor: ['India', 'Royal Challengers Bengaluru', 'Delhi', 'India U19'],
    debutInfo: {
      test: 'Jun 20, 2011 vs West Indies at Kingston',
      odi: 'Aug 18, 2008 vs Sri Lanka at Dambulla',
      t20i: 'Jun 12, 2010 vs Zimbabwe at Harare',
      league: 'Apr 18, 2008 vs KKR (IPL)'
    },
    stats: '80 International 100s · 26,000+ Runs · 50+ ODI Centuries (World Record)',
    statsTable: [
      { format: 'Test', matches: 118, innings: 200, runs: 9040, highestScore: '254*', average: '48.9', strikeRate: '55.6', hundreds: 29, fifties: 31 },
      { format: 'ODI', matches: 295, innings: 283, runs: 13906, highestScore: '183', average: '58.2', strikeRate: '93.5', hundreds: 50, fifties: 72 },
      { format: 'T20I', matches: 125, innings: 117, runs: 4188, highestScore: '122*', average: '48.7', strikeRate: '137.0', hundreds: 1, fifties: 38 },
      { format: 'IPL', matches: 252, innings: 244, runs: 8004, highestScore: '113*', average: '38.7', strikeRate: '132.0', hundreds: 8, fifties: 55 },
    ],
    bio: 'The archetype of the modern chase master. Kohli synthesized superhuman physical conditioning with surgical risk assessment to rewrite the record books of white-ball cricket.',
    fullBio: [
      'Born in Delhi, Virat Kohli burst into public consciousness captaining India to the ICC U19 World Cup trophy in 2008 in Kuala Lumpur. Within months, he received his senior ODI call-up against Sri Lanka.',
      'Known for his bottom-handed flick through midwicket and an imperious cover drive executed with full forward extension, Kohli became the fastest batter in cricket history to cross 8,000, 9,000, 10,000, 11,000, 12,000, and 13,000 ODI runs.',
      'His defining masterclass came in the 2023 ODI World Cup, where he notched 765 runs in a single edition and eclipsed Sachin Tendulkar’s mythical record of 49 ODI centuries with his 50th ton at the Wankhede Stadium.',
      'In red-ball cricket, his tenure as India Test captain revolutionized Indian fast bowling, turning the side into a lethal overseas hunting unit that claimed back-to-back series victories in Australia.'
    ],
    strengths: ['Mastery of run-chase run rates', 'Lightning running between wickets', 'Signature wristy cover-drive & flick', 'Fitness benchmark in modern sport'],
    careerHighlights: [
      'Player of the Tournament: 2014 & 2016 T20 World Cups',
      'Player of the Tournament: 2023 ICC ODI World Cup (765 runs)',
      'First batter to score 50 ODI centuries',
      'T20 World Cup Champion 2024'
    ],
    quote: 'Self-belief and hard work will always earn you success. When chasing, every ball is a puzzle waiting to be solved.',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/Virat_Kohli_during_the_India_vs_Aus_4th_Test_match_at_Narendra_Modi_Stadium_on_09_March_2023.jpg/480px-Virat_Kohli_during_the_India_vs_Aus_4th_Test_match_at_Narendra_Modi_Stadium_on_09_March_2023.jpg',
    accentColor: '#B91C1C'
  },
  {
    id: 'rohit-sharma',
    slug: 'rohit-sharma',
    name: 'Rohit Sharma',
    fullName: 'Rohit Gurunath Sharma',
    sport: 'Cricket',
    role: 'Captain & Opening Batter',
    team: 'India / Mumbai Indians',
    nationality: 'India',
    jerseyNumber: 45,
    dateOfBirth: 'Apr 30, 1987 (Age 38)',
    birthPlace: 'Nagpur, Maharashtra, India',
    height: "5 ft 8 in (173 cm)",
    battingStyle: 'Right Handed Bat',
    bowlingStyle: 'Right-arm off break',
    worldRanking: 'ICC World Cup Winning Captain · #2 ODI All-Time Six-Hitter',
    teamsPlayedFor: ['India', 'Mumbai Indians', 'Deccan Chargers', 'Mumbai'],
    debutInfo: {
      test: 'Nov 06, 2013 vs West Indies at Eden Gardens',
      odi: 'Jun 23, 2007 vs Ireland at Belfast',
      t20i: 'Sep 19, 2007 vs England at Durban',
      league: 'Apr 20, 2008 vs KKR (IPL)'
    },
    stats: '3x ODI Double Centuries (World Record: 264) · 600+ Sixes · 2024 T20 World Cup Champion Captain',
    statsTable: [
      { format: 'Test', matches: 64, innings: 111, runs: 4279, highestScore: '212', average: '42.8', strikeRate: '56.4', hundreds: 12, fifties: 18 },
      { format: 'ODI', matches: 265, innings: 257, runs: 10866, highestScore: '264', average: '49.2', strikeRate: '92.4', hundreds: 31, fifties: 57 },
      { format: 'T20I', matches: 159, innings: 151, runs: 4231, highestScore: '121*', average: '32.1', strikeRate: '140.9', hundreds: 5, fifties: 32 },
      { format: 'IPL', matches: 257, innings: 252, runs: 6628, highestScore: '109*', average: '29.7', strikeRate: '131.1', hundreds: 2, fifties: 43 },
    ],
    bio: 'The "Hitman" of cricket. Endowed with that extra fraction of a second against 150 km/h express pace, Rohit redefined modern powerplay opening with effortless pull shots and supreme six-hitting arc.',
    fullBio: [
      'Rohit Sharma emerged from Mumbai’s Maidans under coach Dinesh Lad as a gifted middle-order stroke maker before MS Dhoni’s tactical masterstroke elevated him to open in the 2013 ICC Champions Trophy.',
      'The move unlocked history: Rohit blasted a world-record 264 against Sri Lanka at Eden Gardens and became the only human to register three double-centuries in 50-over international cricket.',
      'His leadership philosophy—empathetic, clear-minded, and hyper-aggressive in powerplays—guided India to an unbeaten campaign at the 2024 T20 World Cup in the Caribbean, ending an 11-year ICC trophy drought.'
    ],
    strengths: ['Front-foot pull shot against elite pace', 'Effortless lofted bat swing over long-on', 'Tactical calm under match crisis'],
    careerHighlights: [
      'World Record: Highest individual ODI score (264 vs Sri Lanka)',
      '5 Centuries in a single World Cup (2019)',
      '5x IPL Titles as Mumbai Indians Captain',
      'T20 World Cup Champion Captain (2024)'
    ],
    quote: 'In white-ball cricket, if you control the first ten overs, you dictate the heartbeat of the contest.',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/Rohit_Sharma_during_the_India_vs_Aus_4th_Test_match_at_Narendra_Modi_Stadium_on_09_March_2023.jpg/480px-Rohit_Sharma_during_the_India_vs_Aus_4th_Test_match_at_Narendra_Modi_Stadium_on_09_March_2023.jpg',
    accentColor: '#1E3A8A'
  },
  {
    id: 'jasprit-bumrah',
    slug: 'jasprit-bumrah',
    name: 'Jasprit Bumrah',
    fullName: 'Jasprit Jasbirsingh Bumrah',
    sport: 'Cricket',
    role: 'Premier Fast Bowler',
    team: 'India / Mumbai Indians',
    nationality: 'India',
    jerseyNumber: 93,
    dateOfBirth: 'Dec 06, 1993 (Age 32)',
    birthPlace: 'Ahmedabad, Gujarat, India',
    height: "5 ft 9 in (175 cm)",
    battingStyle: 'Right Handed Bat',
    bowlingStyle: 'Right-arm fast',
    worldRanking: 'ICC #1 Ranked Test Bowler · T20 World Cup Player of Tournament',
    teamsPlayedFor: ['India', 'Mumbai Indians', 'Gujarat'],
    debutInfo: {
      test: 'Jan 05, 2018 vs South Africa at Cape Town',
      odi: 'Jan 23, 2016 vs Australia at Sydney',
      t20i: 'Jan 26, 2016 vs Australia at Adelaide',
      league: 'Apr 04, 2013 vs RCB (IPL)'
    },
    stats: 'Test Wickets: 175+ · Bowling Avg: 20.1 · T20 WC Economy: 4.17 · Hyperspeed Reverse Swing',
    statsTable: [
      { format: 'Test', matches: 40, innings: 76, wickets: 173, bestBowling: '6/27', average: '20.5', economy: '2.74', fiveWickets: 10 },
      { format: 'ODI', matches: 89, innings: 88, wickets: 149, bestBowling: '6/19', average: '23.5', economy: '4.59', fiveWickets: 2 },
      { format: 'T20I', matches: 70, innings: 69, wickets: 89, bestBowling: '3/7', average: '17.7', economy: '6.27', fiveWickets: 0 },
      { format: 'IPL', matches: 133, innings: 133, wickets: 165, bestBowling: '5/10', average: '22.5', economy: '7.30', fiveWickets: 2 },
    ],
    bio: 'The generational bowling polymath. With his hyperextended elbow release, short stuttering run-up, and pinpoint yorkers, Bumrah is widely regarded as the most complete all-conditions fast bowler of the 21st century.',
    fullBio: [
      'Discovered by John Wright in domestic T20 cricket, Bumrah puzzled batters with an unorthodox, hyperextended arm and an release point closer to the stumps than almost any pacer.',
      'He swiftly proved that his action was a mechanical marvel rather than a quirk. Possessing venomous outswing with the new ball, lethal bouncers from skiddy trajectories, and unerring reverse-swing on abrasive pitches, he won Test matches in South Africa, England, Australia, and the West Indies.',
      'His legendary spell in the 2024 T20 World Cup Final against South Africa—conceding just 6 runs across the 16th and 18th overs—clinched India’s global championship.'
    ],
    strengths: ['Laser-guided death-overs yorkers', 'Late reverse-swing with red and white balls', 'Deceptive slower ball dip', 'Clutch execution in final overs'],
    careerHighlights: [
      'Player of the Tournament: ICC T20 World Cup 2024 (15 wkts at 4.17 ER)',
      'Fastest Indian pacer to 150 Test wickets',
      'Test Hat-trick vs West Indies (Kingston)',
      'Only Asian bowler with 5-wicket hauls in SA, Eng, Aus, and WI in same calendar year'
    ],
    quote: 'Pace is a weapon, but seam orientation and understanding batter psychology is what takes twenty wickets.',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/Jasprit_Bumrah_in_2023.jpg/480px-Jasprit_Bumrah_in_2023.jpg',
    accentColor: '#0284C7'
  },
  {
    id: 'yashasvi-jaiswal',
    slug: 'yashasvi-jaiswal',
    name: 'Yashasvi Jaiswal',
    fullName: 'Yashasvi Bhupendra Kumar Jaiswal',
    sport: 'Cricket',
    role: 'Opening Batter',
    team: 'India / Rajasthan Royals',
    nationality: 'India',
    jerseyNumber: 64,
    dateOfBirth: 'Dec 28, 2001 (Age 24)',
    birthPlace: 'Suriya, Bhadohi, Uttar Pradesh, India',
    height: "5 ft 8 in (173 cm)",
    battingStyle: 'Left Handed Bat',
    bowlingStyle: 'Right-arm leg break',
    worldRanking: 'ICC #4 Test Batter · Youngest to 1,000 Test Runs for India',
    teamsPlayedFor: ['India', 'Rajasthan Royals', 'Mumbai', 'India U19'],
    debutInfo: {
      test: 'Jul 12, 2023 vs West Indies at Roseau',
      odi: 'Yet to debut',
      t20i: 'Aug 08, 2023 vs West Indies at Providence',
      league: 'Sep 22, 2020 vs CSK (IPL)'
    },
    stats: 'Test Avg: 60.2 · 2x Back-to-Back Double Centuries · Fastest 50 in IPL History (13 balls)',
    statsTable: [
      { format: 'Test', matches: 14, innings: 26, runs: 1407, highestScore: '214*', average: '61.1', strikeRate: '70.2', hundreds: 3, fifties: 8 },
      { format: 'T20I', matches: 23, innings: 22, runs: 723, highestScore: '100', average: '36.1', strikeRate: '164.3', hundreds: 1, fifties: 5 },
      { format: 'IPL', matches: 52, innings: 52, runs: 1607, highestScore: '124', average: '32.1', strikeRate: '150.6', hundreds: 2, fifties: 9 },
    ],
    bio: 'From selling pani-puri and sleeping in groundsman tents at Azad Maidan to tearing through Test bowling attacks, Jaiswal combines relentless hunger with fearless powerplay boundaries.',
    fullBio: [
      'Jaiswal’s origin story is an Indian sports epic: moving alone from rural Uttar Pradesh to Mumbai as an 11-year-old, training in tents, and practicing against leather balls till his palms cracked.',
      'His breakthrough in the 2020 U19 World Cup heralded a rare temperament. By 2024, facing England’s Bazball unit, Jaiswal replied with ferocious counter-punching, hammering 712 runs in five Tests with consecutive double-hundreds.',
      'With high backlift, effortless pull strokes over midwicket, and devastating range against spin, he represents the vanguard of Indian batting.'
    ],
    strengths: ['Relentless boundary appetite in first 10 overs', 'Flawless footwork stepping out to spin', 'Unshakeable mental tenacity'],
    careerHighlights: [
      'Consecutive Test Double-Centuries vs England (Visakhapatnam & Rajkot)',
      'Fastest Fifty in IPL History (13 deliveries vs KKR)',
      'Player of the Series vs England 2024 (712 runs)',
      'Test debut century (171 vs West Indies at Dominica)'
    ],
    quote: 'When you have slept on the ground, no bowler can frighten you. I play every ball to score.',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Yashasvi_Jaiswal_in_2023.jpg/480px-Yashasvi_Jaiswal_in_2023.jpg',
    accentColor: '#E11D48'
  },
  {
    id: 'shubman-gill',
    slug: 'shubman-gill',
    name: 'Shubman Gill',
    fullName: 'Shubman Gill',
    sport: 'Cricket',
    role: 'Top-Order Batter & Captain',
    team: 'India / Gujarat Titans',
    nationality: 'India',
    jerseyNumber: 77,
    dateOfBirth: 'Sep 08, 1999 (Age 26)',
    birthPlace: 'Fazilka, Punjab, India',
    height: "5 ft 10 in (178 cm)",
    battingStyle: 'Right Handed Bat',
    bowlingStyle: 'Right-arm off break',
    worldRanking: 'Youngest to score ODI 200 · Orange Cap Winner',
    teamsPlayedFor: ['India', 'Gujarat Titans', 'Kolkata Knight Riders', 'Punjab'],
    debutInfo: {
      test: 'Dec 26, 2020 vs Australia at Melbourne',
      odi: 'Jan 31, 2019 vs New Zealand at Hamilton',
      t20i: 'Jan 03, 2023 vs Sri Lanka at Wankhede',
      league: 'Apr 14, 2018 vs SRH (IPL)'
    },
    stats: 'ODI Avg: 58.2 · Strike Rate: 102.5 · Double Century Club (208 vs NZ) · 890 Runs in IPL 2023',
    statsTable: [
      { format: 'Test', matches: 29, innings: 55, runs: 1800, highestScore: '128', average: '35.2', strikeRate: '59.1', hundreds: 5, fifties: 7 },
      { format: 'ODI', matches: 47, innings: 47, runs: 2328, highestScore: '208', average: '58.2', strikeRate: '101.7', hundreds: 6, fifties: 13 },
      { format: 'T20I', matches: 21, innings: 21, runs: 578, highestScore: '126*', average: '30.4', strikeRate: '139.2', hundreds: 1, fifties: 3 },
      { format: 'IPL', matches: 103, innings: 100, runs: 3216, highestScore: '129', average: '37.8', strikeRate: '135.7', hundreds: 4, fifties: 20 },
    ],
    bio: 'Pure aesthetic elegance converted into modern power metrics. Gill’s signature short-arm jab pull and high-elbow punch through extra-cover have drawn comparisons to batting royalty.',
    fullBio: [
      'Raised on his family’s farm in Punjab where his father set up turf nets with tractor headlights, Gill was groomed for fast bowling from early childhood.',
      'His iconic 91 on Day 5 at the Gabba in 2021 broke Australia’s 32-year undefeated fortress in Brisbane, providing the bedrock for India’s greatest Test series triumph.',
      'He went on to blast 208 off 149 balls against New Zealand in Hyderabad, becoming the youngest man ever to register an ODI double-hundred.'
    ],
    strengths: ['Signature short-arm jab pull', 'Effortless straight loft through the line', 'Impeccable back-foot punch'],
    careerHighlights: [
      'Gabba Day 5 Epic: 91 vs Australia (Brisbane 2021)',
      'Double Century: 208 vs New Zealand in Hyderabad',
      'IPL Orange Cap 2023: 890 runs with 3 centuries',
      'Fastest batter to 2,000 ODI runs (38 innings)'
    ],
    quote: 'Balance at the point of impact is where true bat speed generates.',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Shubman_Gill_2023.jpg/480px-Shubman_Gill_2023.jpg',
    accentColor: '#1E3A8A'
  },
  {
    id: 'rishabh-pant',
    slug: 'rishabh-pant',
    name: 'Rishabh Pant',
    fullName: 'Rishabh Rajendra Pant',
    sport: 'Cricket',
    role: 'Wicketkeeper-Batter',
    team: 'India / Lucknow Super Giants',
    nationality: 'India',
    jerseyNumber: 17,
    dateOfBirth: 'Oct 04, 1997 (Age 28)',
    birthPlace: 'Roorkee, Uttarakhand, India',
    height: "5 ft 7 in (170 cm)",
    battingStyle: 'Left Handed Bat',
    bowlingStyle: 'Right-arm medium (occasional)',
    worldRanking: 'Only Asian Wicketkeeper with Test 100s in Eng, Aus, and SA',
    teamsPlayedFor: ['India', 'Delhi Capitals', 'Lucknow Super Giants', 'Delhi'],
    debutInfo: {
      test: 'Aug 18, 2018 vs England at Nottingham',
      odi: 'Oct 21, 2018 vs West Indies at Guwahati',
      t20i: 'Feb 01, 2017 vs England at Bengaluru',
      league: 'Apr 08, 2016 vs Gujarat Lions (IPL)'
    },
    stats: 'Test 100s in England, Australia & South Africa · 89* at the Gabba · Miraculous Return to Sport',
    statsTable: [
      { format: 'Test', matches: 38, innings: 66, runs: 2693, highestScore: '159*', average: '44.1', strikeRate: '74.5', hundreds: 6, fifties: 14, catches: 135 },
      { format: 'ODI', matches: 31, innings: 27, runs: 871, highestScore: '125*', average: '33.5', strikeRate: '106.6', hundreds: 1, fifties: 5, catches: 27 },
      { format: 'T20I', matches: 76, innings: 66, runs: 1209, highestScore: '65*', average: '23.2', strikeRate: '127.3', hundreds: 0, fifties: 3, catches: 36 },
      { format: 'IPL', matches: 111, innings: 110, runs: 3284, highestScore: '128*', average: '35.3', strikeRate: '148.9', hundreds: 1, fifties: 18, catches: 75 },
    ],
    bio: 'Cricket’s ultimate chaos agent and miracle comeback story. Pant’s one-handed helicopter sixes and audacious reverse-sweeps off 90mph pacers turned fourth-innings run-chases upside down.',
    fullBio: [
      'Trained at Delhi’s Sonnet Club by the late Tarak Sinha, Pant emerged as an explosive game-changer willing to take on any bowling field configuration.',
      'His unbeaten 89 at the Gabba in 2021 to breach Australia’s fortress is etched as one of the most famous fourth-innings chases in Test history.',
      'After surviving a near-fatal car accident in December 2022 that threatened his life and mobility, Pant underwent grueling rehabilitation to return in 2024, winning the T20 World Cup with India and striking another emotional Test century.'
    ],
    strengths: ['Reverse sweeps and ramp shots against express fast bowlers', 'Counter-attacking under match pressure', 'Uncanny bat speed and one-handed clearing power'],
    careerHighlights: [
      'Gabba 89* to win Border-Gavaskar Trophy (2021)',
      'Centuries at Edgbaston, Sydney, Cape Town, and The Oval',
      'T20 World Cup Champion 2024',
      'Fastest Test half-century by an Indian (28 balls vs Sri Lanka)'
    ],
    quote: 'In cricket and life, fear only holds you back. Back yourself and the ball will fly over the rope.',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Rishabh_Pant_2022.jpg/480px-Rishabh_Pant_2022.jpg',
    accentColor: '#0284C7'
  },

  // ==========================================
  // ⚽ FOOTBALL (6 Stars with Full Tactical Dossiers)
  // ==========================================
  {
    id: 'kylian-mbappe',
    slug: 'kylian-mbappe',
    name: 'Kylian Mbappé',
    fullName: 'Kylian Mbappé Lottin',
    sport: 'Football',
    role: 'Forward / Left Inverted Winger',
    team: 'Real Madrid / France',
    nationality: 'France',
    jerseyNumber: 9,
    dateOfBirth: 'Dec 20, 1998 (Age 27)',
    birthPlace: 'Bondy, Paris, France',
    height: "5 ft 10 in (178 cm)",
    battingStyle: 'Right-Footed Forward',
    worldRanking: 'FIFA World Cup Golden Boot · Real Madrid Galáctico',
    teamsPlayedFor: ['Real Madrid', 'Paris Saint-Germain', 'AS Monaco', 'France'],
    stats: '300+ Career Goals · Top Sprint: 38.0 km/h · World Cup Final Hat-Trick',
    statsTable: [
      { format: 'Club (Senior)', matches: 380, goals: 295, assists: 125, winRate: '74%' },
      { format: 'UEFA Champions League', matches: 75, goals: 50, assists: 26, winRate: '68%' },
      { format: 'International (France)', matches: 86, goals: 48, assists: 34, winRate: '72%' },
    ],
    bio: 'Unmatched explosive acceleration combined with ice-cold finishing. Mbappé’s diagonal dart from the left half-space into the penalty box remains the most devastating individual action in world football.',
    fullBio: [
      'Raised in the northeastern Paris suburb of Bondy, Mbappé debuted for AS Monaco at age 16, dethroning PSG to win Ligue 1 and reaching the Champions League semifinals.',
      'At 19, he became the youngest player since Pelé to score in a World Cup final, leading France to glory in Russia 2018.',
      'In the 2022 World Cup Final in Qatar, he authored one of football’s greatest individual feats, netting a breathtaking hat-trick against Argentina.'
    ],
    strengths: ['Burst acceleration over first 15 meters', 'Near-post snap shot inside box', 'Decisive transition runs'],
    careerHighlights: [
      'FIFA World Cup Winner (2018) & Golden Boot (2022)',
      'World Cup Final Hat-trick vs Argentina (2022)',
      '6x Ligue 1 Golden Boot Winner',
      'All-time PSG Top Goalscorer (256 goals)'
    ],
    quote: 'Speed without tactical precision is just running. You must read the defender’s balance.',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/2019-06-11_Fu%C3%9Fball%2C_M%C3%A4nner%2C_L%C3%A4nderspiel%2C_Andorra_-_Frankreich_StP_1021_LR10_by_Stepro_%28cropped%29.jpg/480px-2019-06-11_Fu%C3%9Fball%2C_M%C3%A4nner%2C_L%C3%A4nderspiel%2C_Andorra_-_Frankreich_StP_1021_LR10_by_Stepro_%28cropped%29.jpg',
    accentColor: '#1E3A8A'
  },
  {
    id: 'erling-haaland',
    slug: 'erling-haaland',
    name: 'Erling Haaland',
    fullName: 'Erling Braut Haaland',
    sport: 'Football',
    role: 'Centre-Forward / Striker',
    team: 'Manchester City / Norway',
    nationality: 'Norway',
    jerseyNumber: 9,
    dateOfBirth: 'Jul 21, 2000 (Age 25)',
    birthPlace: 'Leeds, England',
    height: "6 ft 4 in (194 cm)",
    battingStyle: 'Left-Footed Striker',
    worldRanking: 'European Golden Shoe · Premier League Single Season Record',
    teamsPlayedFor: ['Manchester City', 'Borussia Dortmund', 'Red Bull Salzburg', 'Molde', 'Norway'],
    stats: 'Premier League Record 36 Goals · 1.05 Goals/90 min · Treble Winner',
    statsTable: [
      { format: 'Premier League', matches: 75, goals: 73, assists: 14, winRate: '76%' },
      { format: 'UEFA Champions League', matches: 42, goals: 44, assists: 5, winRate: '70%' },
      { format: 'International (Norway)', matches: 37, goals: 34, assists: 4, winRate: '62%' },
    ],
    bio: 'A physical titan inside the penalty box with superhuman anticipation, kinetic aerial authority, and unsparing finishing from any conceivable angle.',
    fullBio: [
      'Haaland broke onto the global stage with Salzburg in 2019, scoring nine goals in a single U20 World Cup match before terrorizing the Bundesliga with Borussia Dortmund.',
      'In his debut season in England under Pep Guardiola, he obliterated the Premier League single-season record with 36 goals in 35 games, guiding Manchester City to an historic European Treble.'
    ],
    strengths: ['Blind-side penalty box runs', 'Aerial dominance & acrobatic volleying', 'Elite physical shielding'],
    careerHighlights: [
      'European Treble with Manchester City (2022-23)',
      'Premier League All-Time Single Season Record: 36 goals',
      'UEFA Men’s Player of the Year (2022-23)',
      'Fastest player to 50 Champions League goals in history'
    ],
    quote: 'My only job is to touch the ball into the net. Every split-second movement is calculated for that touch.',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/07/Erling_Haaland_2023_%28cropped%29.jpg/480px-Erling_Haaland_2023_%28cropped%29.jpg',
    accentColor: '#0284C7'
  },
  {
    id: 'jude-bellingham',
    slug: 'jude-bellingham',
    name: 'Jude Bellingham',
    fullName: 'Jude Victor William Bellingham',
    sport: 'Football',
    role: 'Attacking Midfielder / Box-to-Box',
    team: 'Real Madrid / England',
    nationality: 'England',
    jerseyNumber: 5,
    dateOfBirth: 'Jun 29, 2003 (Age 22)',
    birthPlace: 'Stourbridge, England',
    height: "6 ft 1 in (186 cm)",
    battingStyle: 'Right-Footed Midfielder',
    worldRanking: 'Kopa Trophy Winner · Golden Boy · UEFA Champions League Champion',
    teamsPlayedFor: ['Real Madrid', 'Borussia Dortmund', 'Birmingham City', 'England'],
    stats: 'Duels Won: 72% · Clutch 90+ min Winners: 8 · 23 Goals in Debut Madrid Season',
    statsTable: [
      { format: 'La Liga', matches: 38, goals: 21, assists: 11, winRate: '78%' },
      { format: 'UEFA Champions League', matches: 36, goals: 11, assists: 10, winRate: '72%' },
      { format: 'International (England)', matches: 40, goals: 6, assists: 6, winRate: '70%' },
    ],
    bio: 'The complete modern box-to-box maestro combining defensive bite, spatial vision, and late box-crashing leadership reminiscent of Zinedine Zidane.',
    fullBio: [
      'After Birmingham City retired his shirt number at age 17, Bellingham sharpened his trade at Dortmund before Real Madrid acquired him for €103m.',
      'He delivered an instant fairytale debut campaign in Madrid, taking the iconic No. 5 shirt and scoring dramatic stoppage-time winners in El Clásico and Europe.'
    ],
    strengths: ['Late third-man runs into penalty area', 'Defensive ball recoveries', 'Emotional leadership under adversity'],
    careerHighlights: [
      'UEFA Champions League Champion (2023-24)',
      'La Liga Player of the Year (2023-24)',
      'Golden Boy & Kopa Trophy 2023',
      'Euro 2024 Bicycle-kick miracle vs Slovakia'
    ],
    quote: 'Pressure is a privilege when you wear this shirt. You welcome the biggest moments.',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/Jude_Bellingham_2024.jpg/480px-Jude_Bellingham_2024.jpg',
    accentColor: '#D97706'
  },
  {
    id: 'lionel-messi',
    slug: 'lionel-messi',
    name: 'Lionel Messi',
    fullName: 'Lionel Andrés Messi',
    sport: 'Football',
    role: 'Playmaker / Forward',
    team: 'Inter Miami / Argentina',
    nationality: 'Argentina',
    jerseyNumber: 10,
    dateOfBirth: 'Jun 24, 1987 (Age 38)',
    birthPlace: 'Rosario, Argentina',
    height: "5 ft 7 in (170 cm)",
    battingStyle: 'Left-Footed Playmaker',
    worldRanking: '8x Ballon d’Or Winner · World Cup Champion · All-Time Football Legend',
    teamsPlayedFor: ['Inter Miami', 'Paris Saint-Germain', 'FC Barcelona', 'Argentina'],
    stats: '840+ Career Goals · 375+ Assists · 45 Trophies (Most in Football History)',
    statsTable: [
      { format: 'FC Barcelona', matches: 778, goals: 672, assists: 303, winRate: '71%' },
      { format: 'International (Argentina)', matches: 189, goals: 112, assists: 60, winRate: '68%' },
      { format: 'UEFA Champions League', matches: 163, goals: 129, assists: 45, winRate: '69%' },
    ],
    bio: 'The undisputed genius of football. Low center of gravity, telepathic vision, and left-foot trajectory geometry that turned sport into sublime art for over two decades.',
    fullBio: [
      'Diagnosed with growth hormone deficiency as an 11-year-old in Rosario, Messi joined Barcelona’s La Masia on a napkin agreement.',
      'He led Barcelona through an unprecedented era of dominance, winning four Champions League titles and ten La Liga crowns.',
      'His crowning glory came in Qatar 2022, scoring seven goals and guiding Argentina to the World Cup trophy in an unforgettable final.'
    ],
    strengths: ['Low-center-of-gravity slalom dribble', 'Threading disguised through-balls', 'Pinpoint free-kick curlers'],
    careerHighlights: [
      '8x Ballon d’Or Winner (World Record)',
      'FIFA World Cup Champion & Golden Ball (2022)',
      '2x Copa América Champion (2021, 2024)',
      '4x UEFA Champions League Titles'
    ],
    quote: 'It took me 17 years and 114 days to become an overnight success.',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Lionel_Messi_20180626.jpg/480px-Lionel_Messi_20180626.jpg',
    accentColor: '#0EA5E9'
  },
  {
    id: 'sunil-chhetri',
    slug: 'sunil-chhetri',
    name: 'Sunil Chhetri',
    fullName: 'Sunil Chhetri',
    sport: 'Football',
    role: 'Captain & Striker',
    team: 'Bengaluru FC / India (Legend)',
    nationality: 'India',
    jerseyNumber: 11,
    dateOfBirth: 'Aug 03, 1984 (Age 41)',
    birthPlace: 'Secunderabad, Telangana, India',
    height: "5 ft 7 in (170 cm)",
    battingStyle: 'Right-Footed Striker',
    worldRanking: '4th Highest International Goalscorer in Football History',
    teamsPlayedFor: ['India', 'Bengaluru FC', 'Sporting CP B', 'Kansas City Wizards', 'Mohun Bagan'],
    stats: '94 International Goals (4th All-Time Globally) · 151 Caps · 7x AIFF Player of the Year',
    statsTable: [
      { format: 'International (India)', matches: 151, goals: 94, assists: 16, winRate: '52%' },
      { format: 'Indian Super League', matches: 160, goals: 65, assists: 13, winRate: '54%' },
      { format: 'I-League / AFC Cup', matches: 210, goals: 115, assists: 24, winRate: '58%' },
    ],
    bio: 'The heartbeat of modern Indian football. Chhetri shouldered the hopes of 1.4 billion people for nineteen continuous years, placing India among global international scoring charts alongside Ronaldo and Messi.',
    fullBio: [
      'Beginning his professional path with Mohun Bagan in 2002, Chhetri became the symbol of Indian football’s modernization, adopting professional fitness, nutrition, and tactical discipline.',
      'His international goal tally surpassed legends like Ferenc Puskás and Pelé, inspiring an entire generation of young footballers across the subcontinent before retiring in 2024.'
    ],
    strengths: ['Aerial leaping timing despite height', 'First-touch composure inside six-yard box', 'Inspirational dressing room leadership'],
    careerHighlights: [
      '4th All-Time International Goalscorer in football history (94 goals)',
      '7x AIFF Player of the Year',
      'AFC Challenge Cup Winner (2008)',
      'Khel Ratna & Padma Shri Awardee'
    ],
    quote: 'If you want to be remembered, leave everything on the pitch. No excuses, only passion.',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Sunil_Chhetri_2018.jpg/480px-Sunil_Chhetri_2018.jpg',
    accentColor: '#1E3A8A'
  },
  {
    id: 'lallianzuala-chhangte',
    slug: 'lallianzuala-chhangte',
    name: 'Lallianzuala Chhangte',
    fullName: 'Lallianzuala Chhangte',
    sport: 'Football',
    role: 'Winger / Inverted Attacker',
    team: 'Mumbai City FC / India',
    nationality: 'India',
    jerseyNumber: 7,
    dateOfBirth: 'Jun 08, 1997 (Age 28)',
    birthPlace: 'Lunglei, Mizoram, India',
    height: "5 ft 6 in (168 cm)",
    battingStyle: 'Left-Footed Winger',
    worldRanking: 'ISL Golden Ball Winner · AIFF Men’s Player of the Year',
    teamsPlayedFor: ['Mumbai City FC', 'Chennaiyin FC', 'Delhi Dynamos', 'India'],
    stats: 'ISL Golden Ball · 16 Goal Contributions · Top Speed: 34.8 km/h',
    statsTable: [
      { format: 'Indian Super League', matches: 130, goals: 38, assists: 24, winRate: '56%' },
      { format: 'AFC Champions League', matches: 12, goals: 3, assists: 2, winRate: '45%' },
      { format: 'International (India)', matches: 38, goals: 8, assists: 6, winRate: '50%' },
    ],
    bio: 'The speed merchant and two-footed technician spearheading Indian football’s offensive transition. His electric burst down the right flank and cut-backs have unlocked top continental defenses.',
    fullBio: [
      'Hailing from the football-obsessed hills of Mizoram, Chhangte joined the DSK Shivajians academy before moving to the ISL.',
      'Under Des Buckingham at Mumbai City, he evolved from raw sprinter to clinical inside-forward, winning the ISL Shield and consecutive Indian Player of the Year awards.'
    ],
    strengths: ['Burst acceleration on the touchline', 'Inside curling shots with left foot', 'High-press defensive tracking'],
    careerHighlights: [
      'ISL Hero of the League (Golden Ball)',
      'AIFF Men’s Player of the Year (2022-23, 2023-24)',
      'ISL Championship with Mumbai City FC',
      'SAFF Championship Winner'
    ],
    quote: 'Indian football is ready to take the next tactical leap. We just need to trust our technique.',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/Lallianzuala_Chhangte.jpg/480px-Lallianzuala_Chhangte.jpg',
    accentColor: '#0EA5E9'
  },

  // ==========================================
  // 🏑 HOCKEY (5 Stars with Dossiers)
  // ==========================================
  {
    id: 'harmanpreet-singh',
    slug: 'harmanpreet-singh',
    name: 'Harmanpreet Singh',
    fullName: 'Harmanpreet Singh (Sarpanch)',
    sport: 'Hockey',
    role: 'Captain & Drag-Flicker / Defender',
    team: 'India Men’s National Hockey Team',
    nationality: 'India',
    jerseyNumber: 13,
    dateOfBirth: 'Jan 06, 1996 (Age 30)',
    birthPlace: 'Amritsar, Punjab, India',
    height: "5 ft 11 in (180 cm)",
    battingStyle: 'Right-Stick Drag-flicker',
    worldRanking: 'FIH Player of the Year · 2x Olympic Medalist Captain',
    teamsPlayedFor: ['India', 'Soorma Hockey Club', 'Punjab'],
    stats: '2x Olympic Bronze Medalist · 190+ International Goals · 122 km/h Drag Flick',
    statsTable: [
      { format: 'Olympic Games (Paris & Tokyo)', matches: 16, goals: 16, penaltyCorners: 14, winRate: '75%' },
      { format: 'FIH Pro League', matches: 68, goals: 52, penaltyCorners: 48, winRate: '66%' },
      { format: 'Asian Games & Champions Trophy', matches: 45, goals: 44, penaltyCorners: 39, winRate: '82%' },
    ],
    bio: 'The world’s most lethal penalty corner drag-flicker and the stoic "Sarpanch" who captained India to back-to-back Olympic podium finishes in Paris 2024.',
    fullBio: [
      'Learning his craft at the Surjit Hockey Academy in Jalandhar, Harmanpreet perfected the biomechanics of the drag flick using heavy farm implements in his village.',
      'At Paris 2024, his 10 tournament goals—including decisive clutch strikes against Australia and Great Britain with a man down—cemented his status among all-time Indian hockey legends.'
    ],
    strengths: ['120+ km/h drag flick accuracy into roof of net', 'Aerial scoop distribution from deep defence', 'Clutch leadership under cards'],
    careerHighlights: [
      'Paris 2024 Olympic Bronze Medal (Top Tournament Goalscorer with 10 goals)',
      'Tokyo 2020 Olympic Bronze Medal',
      '3x FIH Player of the Year',
      'Asian Games Gold Medal (Hangzhou 2023)'
    ],
    quote: 'A penalty corner is won in training sessions under total exhaustion. In the match, it is just muscle memory.',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Harmanpreet_Singh_2022.jpg/480px-Harmanpreet_Singh_2022.jpg',
    accentColor: '#047857'
  },
  {
    id: 'pr-sreejesh',
    slug: 'pr-sreejesh',
    name: 'PR Sreejesh',
    fullName: 'Parattu Raveendran Sreejesh',
    sport: 'Hockey',
    role: 'Goalkeeper / "The Great Wall of India"',
    team: 'India Men’s National Hockey Team (Legend)',
    nationality: 'India',
    jerseyNumber: 16,
    dateOfBirth: 'May 08, 1988 (Age 38)',
    birthPlace: 'Kizhakkambalam, Kochi, Kerala, India',
    height: "6 ft 0 in (183 cm)",
    battingStyle: 'Right-Stick Goalkeeper',
    worldRanking: '2x FIH Goalkeeper of the Year · World Games Athlete of Year',
    teamsPlayedFor: ['India', 'Uttar Pradesh Wizards', 'Kerala'],
    stats: '2x Olympic Medalist · 336 Caps · 0.18s Reaction Time · Shootout Specialist',
    statsTable: [
      { format: 'Olympic Games (London, Rio, Tokyo, Paris)', matches: 28, cleanSheets: 6, winRate: '68%' },
      { format: 'Asian Games & Commonwealth', matches: 58, cleanSheets: 22, winRate: '74%' },
      { format: 'FIH Pro League', matches: 72, cleanSheets: 14, winRate: '62%' },
    ],
    bio: 'The immortal guardian of Indian hockey. Sreejesh’s superhuman reflex saves in Tokyo 2020 and the heroic 10-man shootout triumph against Great Britain in Paris 2024 ended India’s four-decade Olympic medal drought.',
    fullBio: [
      'Born into a farming family in Kerala, Sreejesh initially tried sprinting and volleyball before finding his calling inside the goalkeeper pads.',
      'Over eighteen years of dedication, his agility and booming commands organized India’s defence, concluding his glorious career atop the Paris 2024 podium.'
    ],
    strengths: ['Shootout one-on-one spatial closure', 'Right-boot deflection against drag flicks', 'Commanding the defensive circle'],
    careerHighlights: [
      'Back-to-back Olympic Medals: Tokyo 2020 & Paris 2024',
      'The Great Shootout Save vs Great Britain in Paris (Playing with 10 men)',
      'World Games Athlete of the Year 2021',
      'Major Dhyan Chand Khel Ratna Awardee'
    ],
    quote: 'Behind me there is only the net. That is where the buck stops. I fight for every inch.',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/P._R._Sreejesh_2022.jpg/480px-P._R._Sreejesh_2022.jpg',
    accentColor: '#1E3A8A'
  },
  {
    id: 'hardik-singh',
    slug: 'hardik-singh',
    name: 'Hardik Singh',
    fullName: 'Hardik Singh',
    sport: 'Hockey',
    role: 'Central Midfielder / Playmaker',
    team: 'India Men’s National Hockey Team',
    nationality: 'India',
    jerseyNumber: 8,
    dateOfBirth: 'Sep 23, 1998 (Age 27)',
    birthPlace: 'Khusropur, Jalandhar, Punjab, India',
    height: "5 ft 8 in (173 cm)",
    battingStyle: 'Right-Stick Midfielder',
    worldRanking: 'FIH Player of the Year 2023 · 2x Olympic Medalist',
    teamsPlayedFor: ['India', 'Punjab'],
    stats: 'FIH Player of the Year · 85% Pass Completion · 32 km/h Counter-Attack Transition',
    statsTable: [
      { format: 'Olympic Games (Tokyo & Paris)', matches: 15, goals: 3, assists: 11, winRate: '73%' },
      { format: 'FIH Pro League', matches: 54, goals: 9, assists: 26, winRate: '65%' },
    ],
    bio: 'The midfield dynamo and transition orchestrator of Indian hockey. Hardik controls the tempo between deep defensive recoveries and blistering circle penetrations.',
    fullBio: [
      'Hailing from a family of hockey internationals, Hardik rose through the junior ranks before commanding India’s midfield engine room.',
      'His solo goal against Great Britain in Tokyo 2020—running 60 meters through three defenders—remains one of the finest individual goals in modern Olympic hockey.'
    ],
    strengths: ['Lightning aerial ball control under sprint', 'Precision stick-checks on counter-attacks', 'High-speed circle entries'],
    careerHighlights: [
      'FIH Men’s Player of the Year 2023',
      '2x Olympic Bronze Medalist (Tokyo & Paris)',
      'Solo Goal vs Great Britain (Tokyo 2020)',
      'Asian Games Gold 2023'
    ],
    quote: 'Control the middle thirty meters, and you control the match. Never concede space.',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Hardik_Singh_2022.jpg/480px-Hardik_Singh_2022.jpg',
    accentColor: '#0284C7'
  },
  {
    id: 'manpreet-singh',
    slug: 'manpreet-singh',
    name: 'Manpreet Singh',
    fullName: 'Manpreet Singh Pawar',
    sport: 'Hockey',
    role: 'Midfield Anchor / Halfback',
    team: 'India Men’s National Hockey Team',
    nationality: 'India',
    jerseyNumber: 7,
    dateOfBirth: 'Jun 26, 1992 (Age 33)',
    birthPlace: 'Mithapur, Jalandhar, Punjab, India',
    height: "5 ft 8 in (173 cm)",
    battingStyle: 'Right-Stick Midfielder',
    worldRanking: 'Tokyo 2020 Historic Captain · 370+ International Caps',
    teamsPlayedFor: ['India', 'Ranchi Rays', 'Punjab'],
    stats: '370+ Caps · Tokyo 2020 Bronze Captain · Paris 2024 Medalist',
    statsTable: [
      { format: 'Olympic Games (London, Rio, Tokyo, Paris)', matches: 27, goals: 6, winRate: '67%' },
      { format: 'Asian Games & Commonwealth', matches: 64, goals: 18, winRate: '72%' },
    ],
    bio: 'The tireless engine and inspirational veteran who led India as captain to its historic first Olympic medal in 41 years in Tokyo 2020.',
    fullBio: [
      'Inspired by Pargat Singh from his native Mithapur, Manpreet debuted in 2011 and became the linchpin of India’s midfield transitions.',
      'In Paris 2024, his positional flexibility dropping into central defense when Amit Rohidas was red-carded proved vital in holding Great Britain to a historic draw.'
    ],
    strengths: ['Box-to-box stamina', 'Defensive stick interception', 'Cool-headed match regulation'],
    careerHighlights: [
      'Tokyo 2020 Bronze Winning Captain',
      'Paris 2024 Bronze Medalist',
      'FIH Player of the Year 2019',
      'Khel Ratna Awardee'
    ],
    quote: 'We played for the tri-color and for forty-one years of wait. Hockey is our heritage.',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Manpreet_Singh_2022.jpg/480px-Manpreet_Singh_2022.jpg',
    accentColor: '#059669'
  },
  {
    id: 'abhishek-nain',
    slug: 'abhishek-nain',
    name: 'Abhishek Nain',
    fullName: 'Abhishek Nain',
    sport: 'Hockey',
    role: 'Forward / Goal Poacher',
    team: 'India Men’s National Hockey Team',
    nationality: 'India',
    jerseyNumber: 11,
    dateOfBirth: 'Aug 15, 1999 (Age 26)',
    birthPlace: 'Sonipat, Haryana, India',
    height: "5 ft 9 in (175 cm)",
    battingStyle: 'Right-Stick Forward',
    worldRanking: 'Paris 2024 Olympic Bronze Medalist · India Top Field Goal Scorer',
    teamsPlayedFor: ['India', 'Haryana'],
    stats: 'Paris 2024 Medalist · 35+ International Goals in 70 Caps · Reverse Tomahawk Specialist',
    statsTable: [
      { format: 'Olympic Games (Paris 2024)', matches: 8, goals: 3, fieldGoals: 3, winRate: '75%' },
      { format: 'FIH Pro League', matches: 38, goals: 18, fieldGoals: 16, winRate: '64%' },
    ],
    bio: 'India’s most dangerous field-goal assassin. Abhishek’s lightning 180-degree turn and reverse-stick tomahawk into the top corner dismantled defenses across Europe and Australia.',
    fullBio: [
      'Discovered during domestic trials in Haryana, Abhishek made an immediate splash on the international scene with his physical shielding and ruthless circle instincts.',
      'His wonder-goal against Australia at the Paris 2024 Olympics helped India defeat the Kookaburras at the Olympics for the first time in 52 years.'
    ],
    strengths: ['Reverse-stick tomahawk striking', 'Back-to-goal shielding in D', 'High pressing on opposing sweepers'],
    careerHighlights: [
      'Paris 2024 Olympic Bronze Medalist',
      'Historic Goal vs Australia in Paris 2024 (First Olympic win vs Aus in 52 years)',
      'Asian Games Gold 2023',
      'FIH Rising Star Nominee'
    ],
    quote: 'In the D, you don’t think. You turn, you strike, and you find the corner.',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/Abhishek_Hockey_2023.jpg/480px-Abhishek_Hockey_2023.jpg',
    accentColor: '#D97706'
  },

  // ==========================================
  // 🤼 KABADDI (5 Stars with Dossiers)
  // ==========================================
  {
    id: 'pardeep-narwal',
    slug: 'pardeep-narwal',
    name: 'Pardeep Narwal',
    fullName: 'Pardeep Narwal (Dubki King)',
    sport: 'Kabaddi',
    role: 'Dubki King / Lead Raider',
    team: 'Bengaluru Bulls / India',
    nationality: 'India',
    jerseyNumber: 9,
    dateOfBirth: 'Feb 16, 1997 (Age 29)',
    birthPlace: 'Rindhana, Sonipat, Haryana, India',
    height: "5 ft 10 in (178 cm)",
    worldRanking: 'All-Time PKL Record Point Scorer (1,700+ Points)',
    teamsPlayedFor: ['Patna Pirates', 'UP Yoddhas', 'Bengaluru Bulls', 'India'],
    stats: '1,700+ Raid Points · 85+ Super Raids · 3x Consecutive PKL Champion',
    statsTable: [
      { format: 'Pro Kabaddi League (All-Time)', matches: 175, raidPoints: 1720, superRaids: 82, super10s: 85 },
      { format: 'Kabaddi World Cup & Asian Games', matches: 18, raidPoints: 145, superRaids: 12, super10s: 9 },
    ],
    bio: 'The record-shattering titan whose low-gravity "Dubki" transformed kabaddi raiding into art. Pardeep ducks under full-body chains to score multi-point raids in the blink of an eye.',
    fullBio: [
      'Born in Rindhana, the nursery of Indian kabaddi, Pardeep led Patna Pirates to three successive PKL titles from Season 3 to Season 5.',
      'His unforgettable 8-point raid against Haryana Steelers in Season 5—eliminating six defenders in one breath—remains the greatest individual raid in kabaddi history.'
    ],
    strengths: ['The Dubki: Diving under defensive arms', 'Side-roll escape from ankle holds', 'Relentless multi-point appetite'],
    careerHighlights: [
      'First player to cross 1,000, 1,200, and 1,500 PKL raid points',
      '8-point raid record vs Haryana Steelers',
      '3x Consecutive PKL Champion (Seasons 3, 4, 5)',
      'Kabaddi World Cup Winner 2016'
    ],
    quote: 'When the chain closes, drop your center of gravity and dive through.',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/Pardeep_Narwal_in_2019.jpg/480px-Pardeep_Narwal_in_2019.jpg',
    accentColor: '#D97706'
  },
  {
    id: 'pawan-sehrawat',
    slug: 'pawan-sehrawat',
    name: 'Pawan Sehrawat',
    fullName: 'Pawan Kumar Sehrawat (Hi-Flyer)',
    sport: 'Kabaddi',
    role: 'Hi-Flyer / Right Raider',
    team: 'Telugu Titans / India',
    nationality: 'India',
    jerseyNumber: 17,
    dateOfBirth: 'Jul 09, 1996 (Age 29)',
    birthPlace: 'Delhi, India',
    height: "5 ft 10 in (178 cm)",
    worldRanking: 'Asian Games Gold Captain · PKL Season 6 MVP',
    teamsPlayedFor: ['Bengaluru Bulls', 'Tamil Thalaivas', 'Telugu Titans', 'India'],
    stats: '1,250+ Raid Points · 39 Pts Single Match Record · Frog Jump Specialist',
    statsTable: [
      { format: 'Pro Kabaddi League', matches: 128, raidPoints: 1220, superRaids: 38, super10s: 66 },
      { format: 'Asian Games (Hangzhou 2023)', matches: 6, raidPoints: 62, superRaids: 5, super10s: 4 },
    ],
    bio: 'The athletic phenomenon known for his gravity-defying "Frog Jump" over advancing defensive covers. Pawan’s sheer leap and reach make him nearly uncatchable.',
    fullBio: [
      'Pawan took PKL Season 6 by storm, scoring 22 points in the final to hand Bengaluru Bulls their first championship.',
      'He captained India to the Gold medal at the 2023 Hangzhou Asian Games in a tense, historic final against Iran.'
    ],
    strengths: ['Frog jump over defenders', 'Flying hand touch on left corner', 'Physical strength escaping ankle holds'],
    careerHighlights: [
      'Asian Games Gold Medalist Captain (2023)',
      'Single-match scoring record: 39 points vs Haryana Steelers',
      'PKL Season 6 MVP and Champion',
      'Most Raid Points in PKL Season 6, 7 & 8'
    ],
    quote: 'In thirty seconds, fear is a luxury no raider can afford. Leap over the challenge.',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Pawan_Sehrawat.jpg/480px-Pawan_Sehrawat.jpg',
    accentColor: '#DC2626'
  },
  {
    id: 'naveen-kumar',
    slug: 'naveen-kumar',
    name: 'Naveen Kumar',
    fullName: 'Naveen Kumar Goyat (The Naveen Express)',
    sport: 'Kabaddi',
    role: 'Naveen Express / Right Raider',
    team: 'Dabang Delhi KC / India',
    nationality: 'India',
    jerseyNumber: 10,
    dateOfBirth: 'Feb 14, 2000 (Age 26)',
    birthPlace: 'Bhangur, Jhajjar, Haryana, India',
    height: "5 ft 9 in (175 cm)",
    worldRanking: 'Fastest to 1,000 PKL Points · PKL Season 8 Champion MVP',
    teamsPlayedFor: ['Dabang Delhi KC', 'India'],
    stats: 'Fastest to 1,000 Raid Points (90 matches) · 28 Consecutive Super 10s (World Record)',
    statsTable: [
      { format: 'Pro Kabaddi League', matches: 96, raidPoints: 1045, superRaids: 22, super10s: 64 },
    ],
    bio: 'Lightning-fast toe touches and agility that leave opposing corners frozen in their stance. Naveen’s consistent Super 10 streak is unprecedented in contact sport.',
    fullBio: [
      'Introduced through the Future Kabaddi Heroes program, Naveen took Dabang Delhi to two consecutive PKL finals, lifting the trophy in Season 8 as MVP.',
      'His trademark running hand touch executed at sprinting speed makes him the most reliable point scorer in thirty-second raid situations.'
    ],
    strengths: ['Running hand-touch at sprint speed', 'Microsecond bonus line crossing', 'Rapid recovery back to midline'],
    careerHighlights: [
      'World record 28 consecutive Super 10s',
      'PKL Season 8 Champion & MVP',
      'Asian Games Gold Medalist 2023',
      'Fastest to 1,000 raid points in league history'
    ],
    quote: 'Speed forces defenders to hesitate; hesitation creates the gap to escape.',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/Naveen_Kumar_Goyat.jpg/480px-Naveen_Kumar_Goyat.jpg',
    accentColor: '#2563EB'
  },
  {
    id: 'fazel-atrachali',
    slug: 'fazel-atrachali',
    name: 'Fazel Atrachali',
    fullName: 'Fazel Atrachali (Sultan)',
    sport: 'Kabaddi',
    role: 'Sultan / Left Corner Defender',
    team: 'Bengal Warriors / Iran',
    nationality: 'Iran',
    jerseyNumber: 1,
    dateOfBirth: 'Mar 29, 1992 (Age 34)',
    birthPlace: 'Gorgan, Golestan, Iran',
    height: "5 ft 11 in (180 cm)",
    worldRanking: 'All-Time PKL Defender Point Leader · 2x Best Defender',
    teamsPlayedFor: ['U Mumba', 'Gujarat Giants', 'Puneri Paltan', 'Bengal Warriors', 'Iran'],
    stats: '510+ Tackle Points · 32 High 5s · 2x Best Defender Award',
    statsTable: [
      { format: 'Pro Kabaddi League', matches: 168, tacklePoints: 508, superTackles: 31, winRate: '62%' },
      { format: 'Asian Games (Iran)', matches: 22, tacklePoints: 72, winRate: '75%' },
    ],
    bio: 'The Iranian powerhouse and fiercest defensive anchor in Pro Kabaddi history. Fazel’s waist hold and back hold are inescapable traps for advancing raiders.',
    fullBio: [
      'Captain of the Iranian national team that stunned India at the 2018 Asian Games in Jakarta, Fazel is the most successful foreign player in Indian league history.',
      'His ferocious timing and leadership from the left corner earned him the moniker "Sultan".'
    ],
    strengths: ['Ironclad waist hold', 'Double thigh hold on charging raiders', 'Psychological command of the mat'],
    careerHighlights: [
      'Asian Games Gold Medalist (Jakarta 2018 with Iran)',
      'Most Tackle Points in PKL history (500+ points)',
      '2x PKL Best Defender of the Tournament',
      'PKL Champion with U Mumba & Patna Pirates'
    ],
    quote: 'The corner is the guardian of the mat. No one passes without paying the toll.',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/Fazel_Atrachali_2018.jpg/480px-Fazel_Atrachali_2018.jpg',
    accentColor: '#059669'
  },
  {
    id: 'aslam-inamdar',
    slug: 'aslam-inamdar',
    name: 'Aslam Inamdar',
    fullName: 'Aslam Mustafa Inamdar',
    sport: 'Kabaddi',
    role: 'All-Rounder / Raider & Left Cover',
    team: 'Puneri Paltan / India',
    nationality: 'India',
    jerseyNumber: 5,
    dateOfBirth: 'Feb 23, 2000 (Age 26)',
    birthPlace: 'Taklibhan, Ahmednagar, Maharashtra, India',
    height: "5 ft 9 in (175 cm)",
    worldRanking: 'PKL Season 10 Champion Captain · Asian Games Gold',
    teamsPlayedFor: ['Puneri Paltan', 'India'],
    stats: 'PKL 10 Champion Captain · 450+ Raid Points · 120+ Tackle Points',
    statsTable: [
      { format: 'Pro Kabaddi League', matches: 72, raidPoints: 460, tacklePoints: 110, superRaids: 11, super10s: 18 },
    ],
    bio: 'The versatile all-round captain who led Puneri Paltan to their historic first PKL title in Season 10 with calm tactical balance and clutch bonus points.',
    fullBio: [
      'Hailing from rural Maharashtra, Aslam’s rapid rise from Yuva Kabaddi Series to leading the national team showcased his ability to contribute equally in raiding and defending.',
      'His leadership under BC Ramesh’s system created one of the most dominant defensive outfits in PKL history.'
    ],
    strengths: ['Quick bonus point conversion', 'Surprise ankle hold as cover defender', 'Tactical captaincy during Do-or-Die raids'],
    careerHighlights: [
      'PKL Season 10 Champion Captain with Puneri Paltan',
      'Asian Games Gold Medalist 2023',
      'Asian Kabaddi Championship Gold Medalist',
      'PKL Best All-Rounder Award'
    ],
    quote: 'A true kabaddi player must be able to raid under pressure and tackle when the team is down.',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Kabaddi_Action_Generic.jpg/480px-Kabaddi_Action_Generic.jpg',
    accentColor: '#EA580C'
  },

  // ==========================================
  // 🎾 TENNIS (5 Stars with Dossiers)
  // ==========================================
  {
    id: 'carlos-alcaraz',
    slug: 'carlos-alcaraz',
    name: 'Carlos Alcaraz',
    fullName: 'Carlos Alcaraz Garfia',
    sport: 'Tennis',
    role: 'All-Court Phenom',
    team: 'Spain / ATP Tour',
    nationality: 'Spain',
    jerseyNumber: 'ATP #1',
    dateOfBirth: 'May 05, 2003 (Age 23)',
    birthPlace: 'El Palmar, Murcia, Spain',
    height: "6 ft 0 in (183 cm)",
    battingStyle: 'Right-Handed (Two-Handed Backhand)',
    worldRanking: '4x Grand Slam Champion · Surface Slam on Clay, Grass & Hard',
    teamsPlayedFor: ['Spain (Davis Cup & Olympics)', 'ATP Tour'],
    stats: '4x Grand Slam Champion · Forehand Speed: 84 mph · 82% Career Match Win Rate',
    statsTable: [
      { format: 'Grand Slams (Wimbledon, Roland Garros, US Open)', matches: 74, runs: 62, winRate: '84%', titles: 4 },
      { format: 'ATP Masters 1000', matches: 85, winRate: '78%', titles: 5 },
    ],
    bio: 'Explosive athleticism, devastating disguise on drop shots, and the fighting spirit of a Spanish gladiator. Alcaraz is the youngest man to conquer Slams on hard, grass, and clay courts.',
    fullBio: [
      'Mentored by Juan Carlos Ferrero in Alicante, Alcaraz won the 2022 US Open at age 19 to become the youngest World No. 1 in ATP history.',
      'He followed with epic five-set Wimbledon triumphs against Novak Djokovic and conquered Roland Garros in 2024 to complete a historic channel slam.'
    ],
    strengths: ['Disguised forehand drop-shot from baseline', 'Explosive court recovery sprinting', 'Fearless aggression on break points'],
    careerHighlights: [
      '2x Wimbledon Champion (2023, 2024)',
      'Roland Garros Champion (2024)',
      'US Open Champion (2022)',
      'Youngest ATP World No. 1 in history'
    ],
    quote: 'I play with heart, head, and courage on every single point.',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/Carlos_Alcaraz_%28ESP%29_2023.jpg/480px-Carlos_Alcaraz_%28ESP%29_2023.jpg',
    accentColor: '#EA580C'
  },
  {
    id: 'jannik-sinner',
    slug: 'jannik-sinner',
    name: 'Jannik Sinner',
    fullName: 'Jannik Sinner',
    sport: 'Tennis',
    role: 'Baseline Ballistic / All-Court',
    team: 'Italy / ATP Tour',
    nationality: 'Italy',
    jerseyNumber: 'ATP #1',
    dateOfBirth: 'Aug 16, 2001 (Age 24)',
    birthPlace: 'San Candido, South Tyrol, Italy',
    height: "6 ft 3 in (191 cm)",
    battingStyle: 'Right-Handed (Two-Handed Backhand)',
    worldRanking: 'ATP World No. 1 · Australian Open & US Open Champion',
    teamsPlayedFor: ['Italy (Davis Cup)', 'ATP Tour'],
    stats: 'Australian & US Open Champion · Backhand RPM: 3,200 · 90+ mph Baseline Pace',
    statsTable: [
      { format: 'Grand Slams', matches: 68, winRate: '82%', titles: 2 },
      { format: 'ATP Tour (Season 2024)', matches: 76, winRate: '92%', titles: 8 },
    ],
    bio: 'Icy baseline composure unleashing continuous 90mph artillery down the tramlines. A former junior ski champion whose balance on hard courts has made him virtually unbeatable.',
    fullBio: [
      'Hailing from the snowy mountains of South Tyrol, Sinner committed to tennis under Riccardo Piatti before teaming up with Darren Cahill.',
      'In 2024, he ascended to World No. 1 by capturing both the Australian Open and US Open in dominant fashion.'
    ],
    strengths: ['Heaviest backhand drive on tour', 'Unflappable mental resilience', 'Serving accuracy under pressure'],
    careerHighlights: [
      'Australian Open Champion (2024)',
      'US Open Champion (2024)',
      'ATP World No. 1 (First Italian in history)',
      'Davis Cup Champion with Italy (2023)'
    ],
    quote: 'Consistency is doing the extraordinary things on ordinary days.',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Jannik_Sinner_2023.jpg/480px-Jannik_Sinner_2023.jpg',
    accentColor: '#DC2626'
  },
  {
    id: 'novak-djokovic',
    slug: 'novak-djokovic',
    name: 'Novak Djokovic',
    fullName: 'Novak Djokovic',
    sport: 'Tennis',
    role: 'Master of Return / Baseline Anchor',
    team: 'Serbia / ATP Tour',
    nationality: 'Serbia',
    jerseyNumber: '24 Slams',
    dateOfBirth: 'May 22, 1987 (Age 39)',
    birthPlace: 'Belgrade, Serbia',
    height: "6 ft 2 in (188 cm)",
    battingStyle: 'Right-Handed (Two-Handed Backhand)',
    worldRanking: '24x Grand Slam Champion (All-Time Record) · Olympic Gold Medalist',
    teamsPlayedFor: ['Serbia', 'ATP Tour'],
    stats: '24 Grand Slam Singles Titles (All-Time Record) · 428 Weeks at World No. 1 · Career Golden Slam',
    statsTable: [
      { format: 'Grand Slams (All-Time)', matches: 420, winRate: '88%', titles: 24 },
      { format: 'ATP Masters 1000', matches: 490, winRate: '82%', titles: 40 },
    ],
    bio: 'The statistical benchmark and greatest returner in tennis history. Flexible sliding splits, elastic defense into offense, and peerless mental resolve.',
    fullBio: [
      'Growing up amidst conflict in Belgrade, Djokovic reached the pinnacle through relentless discipline, flexibility training, and gluten-free nutrition.',
      'In Paris 2024, at age 37, he defeated Carlos Alcaraz to capture the missing Olympic Gold medal, cementing the ultimate Career Golden Slam.'
    ],
    strengths: ['Greatest return of serve in tennis history', 'Sliding recovery on all court surfaces', 'Clutch tiebreak conversion rate'],
    careerHighlights: [
      '24 Grand Slam Singles Titles',
      'Olympic Gold Medal (Paris 2024)',
      '428 Weeks as World No. 1 (All-time record)',
      '40 ATP Masters 1000 Titles'
    ],
    quote: 'Belief precedes triumph. When everyone doubts your stamina, that is when you must be strongest.',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/Novak_Djokovic_2023.jpg/480px-Novak_Djokovic_2023.jpg',
    accentColor: '#2563EB'
  },
  {
    id: 'rafael-nadal',
    slug: 'rafael-nadal',
    name: 'Rafael Nadal',
    fullName: 'Rafael Nadal Parera (King of Clay)',
    sport: 'Tennis',
    role: 'King of Clay / Gladiator',
    team: 'Spain / ATP Tour (Legend)',
    nationality: 'Spain',
    jerseyNumber: '22 Slams',
    dateOfBirth: 'Jun 03, 1986 (Age 39)',
    birthPlace: 'Manacor, Mallorca, Spain',
    height: "6 ft 1 in (185 cm)",
    battingStyle: 'Left-Handed (Two-Handed Backhand)',
    worldRanking: '14x Roland Garros Champion · 22 Grand Slams · Olympic Singles & Doubles Gold',
    teamsPlayedFor: ['Spain', 'ATP Tour'],
    stats: '14 Roland Garros Titles (Unprecedented in Sport) · 22 Grand Slams · 112-4 Match Record in Paris',
    statsTable: [
      { format: 'Roland Garros (Clay)', matches: 116, winRate: '97%', titles: 14 },
      { format: 'Grand Slams Total', matches: 350, winRate: '86%', titles: 22 },
    ],
    bio: 'The fierce Mallorcan gladiator whose looping 3,500 RPM forehands and unbending warrior ethos turned clay-court tennis into an unbreachable personal empire.',
    fullBio: [
      'Trained by Uncle Toni on the island of Mallorca, Nadal’s 14 titles on the red clay of Paris stand as perhaps the most dominant single-venue record in sports history.',
      'He completed the Career Golden Slam and retired in 2024 revered as the epitome of humility, sportsmanship, and physical fortitude.'
    ],
    strengths: ['Whipped banana forehand passing shot', 'Clay court slide and topspin kick', 'Tenacity on every individual point'],
    careerHighlights: [
      '14x Roland Garros French Open Champion',
      '22 Grand Slam Men’s Singles Titles',
      'Olympic Gold in Singles (2008) and Doubles (2016)',
      '5x Davis Cup Champion with Spain'
    ],
    quote: 'If you don’t lose, you cannot enjoy the victories. You have to accept both with humility.',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/Rafael_Nadal_2022.jpg/480px-Rafael_Nadal_2022.jpg',
    accentColor: '#D97706'
  },
  {
    id: 'rohan-bopanna',
    slug: 'rohan-bopanna',
    name: 'Rohan Bopanna',
    fullName: 'Rohan Machanda Bopanna',
    sport: 'Tennis',
    role: 'Doubles Maestro',
    team: 'India / ATP Tour',
    nationality: 'India',
    jerseyNumber: 'ATP Doubles #1',
    dateOfBirth: 'Mar 04, 1980 (Age 46)',
    birthPlace: 'Bengaluru, Karnataka, India',
    height: "6 ft 4 in (193 cm)",
    battingStyle: 'Right-Handed (One-Handed Backhand)',
    worldRanking: 'Oldest World No. 1 in Men’s Tennis History (Age 43) · Australian Open Champion',
    teamsPlayedFor: ['India (Davis Cup & Olympics)', 'ATP Tour'],
    stats: 'Oldest Men’s Doubles No. 1 in History · Australian Open Men’s Doubles Champion · 25+ ATP Titles',
    statsTable: [
      { format: 'Grand Slam Men’s Doubles', matches: 120, winRate: '68%', titles: 1 },
      { format: 'Grand Slam Mixed Doubles', matches: 65, winRate: '65%', titles: 1 },
    ],
    bio: 'The ageless doubles titan who rewrote tennis longevity. Bopanna’s thunderous serve and net volleys made him the oldest Grand Slam champion and World No. 1 in history at age 43.',
    fullBio: [
      'Beginning on the coffee estates of Coorg, Bopanna built a storied doubles career alongside partners like Aisam-ul-Haq Qureshi, Florin Mergea, and Matthew Ebden.',
      'Relying on Iyengar yoga rather than cartilage surgeries, he won the 2024 Australian Open men’s doubles title and reached No. 1 in the world.'
    ],
    strengths: ['Booming kick serve out wide', 'Intercepting reflex volleys at the net', 'Yoga-based longevity and physical poise'],
    careerHighlights: [
      'Australian Open Men’s Doubles Champion (2024)',
      'Oldest World No. 1 in ATP History (Age 43)',
      'French Open Mixed Doubles Champion (2017)',
      'Padma Shri & Arjuna Awardee'
    ],
    quote: 'Age is really just a number if you train the mind and keep the joints supple through discipline.',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Rohan_Bopanna_2023.jpg/480px-Rohan_Bopanna_2023.jpg',
    accentColor: '#047857'
  },

  // ==========================================
  // 🏀 BASKETBALL (5 Stars with Dossiers)
  // ==========================================
  {
    id: 'victor-wembanyama',
    slug: 'victor-wembanyama',
    name: 'Victor Wembanyama',
    fullName: 'Victor Wembanyama (The Alien)',
    sport: 'Basketball',
    role: 'Unicorn Center',
    team: 'San Antonio Spurs / France',
    nationality: 'France',
    jerseyNumber: 1,
    dateOfBirth: 'Jan 04, 2004 (Age 22)',
    birthPlace: 'Le Chesnay, France',
    height: "7 ft 4 in (224 cm)",
    worldRanking: 'NBA Rookie of the Year · All-Defensive First Team',
    teamsPlayedFor: ['San Antonio Spurs', 'Metropolitans 92', 'France'],
    stats: '7ft 4in · 3.6 Blocks/game (NBA Leader) · 21.4 PPG, 10.6 RPG · 8ft Wingspan',
    statsTable: [
      { format: 'NBA Regular Season', matches: 82, points: 1780, average: '21.8', blocks: 275 },
      { format: 'Olympic Games (Paris 2024)', matches: 6, points: 95, average: '15.8', silverMedal: true },
    ],
    bio: 'The rarest physical and basketball specimen in history: an 8-foot wingspan handling the rock like a point guard, pulling up from the logo, and anchoring the rim with 4 blocks a night.',
    fullBio: [
      'Groomed in Paris under rigorous flexibility and posture routines, Wembanyama entered the NBA with San Antonio as the most anticipated prospect since LeBron James.',
      'In his rookie season, he led the league in blocks while hitting pull-up step-back threes and taking France to the Olympic silver medal in Paris.'
    ],
    strengths: ['8-foot wingspan rim protection', 'Off-the-dribble perimeter shooting at 7ft 4in', 'Unmatched defensive deterrence'],
    careerHighlights: [
      'Unanimous NBA Rookie of the Year (2024)',
      'Olympic Silver Medalist with France (Paris 2024)',
      'Youngest player to record a 5x5 game in NBA history',
      'All-Defensive First Team as a Rookie'
    ],
    quote: 'Limits are self-imposed. I want to build a completely new way to play this game.',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Victor_Wembanyama_2023.jpg/480px-Victor_Wembanyama_2023.jpg',
    accentColor: '#18181B'
  },
  {
    id: 'nikola-jokic',
    slug: 'nikola-jokic',
    name: 'Nikola Jokić',
    fullName: 'Nikola Jokić (The Joker)',
    sport: 'Basketball',
    role: 'Point Center',
    team: 'Denver Nuggets / Serbia',
    nationality: 'Serbia',
    jerseyNumber: 15,
    dateOfBirth: 'Feb 19, 1995 (Age 31)',
    birthPlace: 'Sombor, Serbia',
    height: "6 ft 11 in (211 cm)",
    worldRanking: '3x NBA Most Valuable Player (MVP) · NBA Finals MVP',
    teamsPlayedFor: ['Denver Nuggets', 'Mega Basket', 'Serbia'],
    stats: '3x NBA MVP · 135+ Triple-Doubles · 26.4 PPG, 12.4 RPG, 9.0 APG · Sombor Shuffle',
    statsTable: [
      { format: 'NBA Regular Season', matches: 680, points: 14500, average: '21.0', assists: 4800, rebounds: 7500 },
      { format: 'NBA Playoffs', matches: 80, points: 2200, average: '27.7', assists: 600, rebounds: 980 },
    ],
    bio: 'The ultimate cerebral basketball mastermind. Jokić orchestrates entire offensive sets with touch passes, no-look lobs, and impossible Sombor Shuffle jumpers from the high post.',
    fullBio: [
      'Drafted 41st overall during a Taco Bell commercial in 2014, Jokić transformed Denver into a championship juggernaut with his generational passing genius.',
      'He led the Nuggets to the 2023 NBA Championship and took Serbia to an Olympic Bronze in Paris 2024.'
    ],
    strengths: ['Touch passing out of double teams', 'Sombor Shuffle one-footed fadeaway', 'Offensive rebound positioning'],
    careerHighlights: [
      '3x NBA Most Valuable Player (2021, 2022, 2024)',
      'NBA Champion & Finals MVP (2023)',
      'Olympic Bronze Medalist (Paris 2024)',
      'Over 130 career triple-doubles'
    ],
    quote: 'Basketball is about passing. When you score, one person is happy. When you pass, two people are happy.',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Nikola_Joki%C4%87_2023.jpg/480px-Nikola_Joki%C4%87_2023.jpg',
    accentColor: '#0284C7'
  },
  {
    id: 'lebron-james',
    slug: 'lebron-james',
    name: 'LeBron James',
    fullName: 'LeBron Raymone James Sr. (King James)',
    sport: 'Basketball',
    role: 'Forward / Playmaker',
    team: 'Los Angeles Lakers / USA',
    nationality: 'USA',
    jerseyNumber: 23,
    dateOfBirth: 'Dec 30, 1984 (Age 41)',
    birthPlace: 'Akron, Ohio, USA',
    height: "6 ft 9 in (206 cm)",
    worldRanking: 'All-Time NBA Scoring Leader (40,000+ Pts) · 4x NBA Champion · 3x Olympic Gold',
    teamsPlayedFor: ['Los Angeles Lakers', 'Cleveland Cavaliers', 'Miami Heat', 'USA'],
    stats: '40,000+ Points (All-Time Record) · 4x NBA Champion · 4x Finals MVP · 3x Olympic Gold',
    statsTable: [
      { format: 'NBA Regular Season (All-Time)', matches: 1500, points: 40500, average: '27.1', assists: 11000, rebounds: 11200 },
      { format: 'NBA Playoffs', matches: 287, points: 8162, average: '28.4', titles: 4 },
    ],
    bio: 'The immortal king of basketball. Over two decades of sustained athletic supremacy, IQ, and leadership culminating in passing Kareem Abdul-Jabbar as the all-time scoring leader.',
    fullBio: [
      'The "Chosen One" from Akron fulfilled impossible hype: winning championships in Miami, delivering Cleveland’s emotional 2016 comeback from 3-1 down, and winning with the Lakers.',
      'In Paris 2024, he led USA’s Redeem-style squad as tournament MVP to capture his third Olympic Gold medal.'
    ],
    strengths: ['Tomahawk transition freight-train dunk', 'Full-court chase-down block', 'Floor general IQ and clock management'],
    careerHighlights: [
      'All-Time NBA Leading Scorer (40,000+ points)',
      '4x NBA Champion & 4x Finals MVP',
      '3x Olympic Gold Medalist & Paris 2024 Olympic MVP',
      '20x All-NBA Selection'
    ],
    quote: 'Nothing is given. Everything is earned. You work for every second of greatness.',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/LeBron_James_%2851959977144%29_%28cropped2%29.jpg/480px-LeBron_James_%2851959977144%29_%28cropped2%29.jpg',
    accentColor: '#D97706'
  },
  {
    id: 'stephen-curry',
    slug: 'stephen-curry',
    name: 'Stephen Curry',
    fullName: 'Wardell Stephen Curry II (Chef Curry)',
    sport: 'Basketball',
    role: 'Point Guard / Sniper',
    team: 'Golden State Warriors / USA',
    nationality: 'USA',
    jerseyNumber: 30,
    dateOfBirth: 'Mar 14, 1988 (Age 38)',
    birthPlace: 'Akron, Ohio, USA',
    height: "6 ft 2 in (188 cm)",
    worldRanking: 'All-Time 3-Point King (3,700+ Threes) · 4x NBA Champion · 2x MVP',
    teamsPlayedFor: ['Golden State Warriors', 'USA'],
    stats: 'All-Time 3-Point Leader (3,700+ Threes) · 4x Champion · 50-40-90 Club · "Night Night" Dagger',
    statsTable: [
      { format: 'NBA Regular Season', matches: 960, points: 23800, average: '24.8', threePointers: 3750 },
      { format: 'Olympic Games (Paris 2024)', matches: 6, points: 89, threePointers: 22, goldMedal: true },
    ],
    bio: 'The sniper who revolutionized basketball geometry forever. Curry stretched the defensive perimeter to the half-court logo, making off-ball movement and quick-release threes the modern standard.',
    fullBio: [
      'From Davidson College underdog to 4x champion, Curry’s shooting mechanics and stamina running through screens changed how coaches teach the sport worldwide.',
      'His four consecutive fourth-quarter threes against France in the Paris 2024 Olympic Gold medal game delivered iconic "Golden Dagger" status.'
    ],
    strengths: ['0.3-second lightning shooting release', 'Endless off-ball conditioning', 'Ball-handling crossover into step-back three'],
    careerHighlights: [
      'NBA All-Time Leader in 3-Pointers Made (3,700+)',
      '4x NBA Champion & Finals MVP (2022)',
      '2x NBA MVP (Only unanimous MVP in history)',
      'Olympic Gold Medalist with 8 threes in final (Paris 2024)'
    ],
    quote: 'I can do all things. When you trust the reps you put in when nobody is watching, the rim looks like an ocean.',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/Stephen_Curry_dribbling_2016_%28cropped%29.jpg/480px-Stephen_Curry_dribbling_2016_%28cropped%29.jpg',
    accentColor: '#1E3A8A'
  },
  {
    id: 'luka-doncic',
    slug: 'luka-doncic',
    name: 'Luka Dončić',
    fullName: 'Luka Dončić (Luka Magic)',
    sport: 'Basketball',
    role: 'Lead Guard / Offensive Orchestrator',
    team: 'Dallas Mavericks / Slovenia',
    nationality: 'Slovenia',
    jerseyNumber: 77,
    dateOfBirth: 'Feb 28, 1999 (Age 27)',
    birthPlace: 'Ljubljana, Slovenia',
    height: "6 ft 7 in (201 cm)",
    worldRanking: 'NBA Scoring Champion · 5x All-NBA First Team',
    teamsPlayedFor: ['Dallas Mavericks', 'Real Madrid', 'Slovenia'],
    stats: 'Scoring Champion (33.9 PPG) · 75+ Triple-Doubles · 73-point Single Game Record',
    statsTable: [
      { format: 'NBA Regular Season', matches: 405, points: 11500, average: '28.7', assists: 3300, rebounds: 3500 },
      { format: 'EuroBasket & Olympics', matches: 38, average: '25.4', assists: 240 },
    ],
    bio: 'The Slovenian maestro who plays at his own deliberate pace. Luka backs down defenders, hits high-arcing step-back threes, and whips cross-court darts through impossible angles.',
    fullBio: [
      'EuroLeague MVP at age 19 with Real Madrid, Dončić became an immediate global force with Dallas, leading them to the 2024 NBA Finals.',
      'His 73-point explosion against Atlanta in 2024 is the fourth-highest single-game scoring mark in NBA history.'
    ],
    strengths: ['Step-back three-pointer going left', 'Manipulating pick-and-roll pace', 'One-handed skip passes to corner shooters'],
    careerHighlights: [
      'NBA Scoring Champion (2023-24)',
      '5x All-NBA First Team',
      '73-Point Game vs Atlanta Hawks',
      'EuroLeague Champion & MVP'
    ],
    quote: 'I like when they talk trash. It gets me going. You cannot rush me; I play on my time.',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Luka_Don%C4%8Di%C4%87_2021.jpg/480px-Luka_Don%C4%8Di%C4%87_2021.jpg',
    accentColor: '#0284C7'
  },

  // ==========================================
  // 🏸 BADMINTON (5 Stars with Dossiers)
  // ==========================================
  {
    id: 'pv-sindhu',
    slug: 'pv-sindhu',
    name: 'PV Sindhu',
    fullName: 'Pusarla Venkata Sindhu',
    sport: 'Badminton',
    role: 'Women’s Singles Legend',
    team: 'India / BWF World Tour',
    nationality: 'India',
    jerseyNumber: 'IND',
    dateOfBirth: 'Jul 05, 1995 (Age 30)',
    birthPlace: 'Hyderabad, Telangana, India',
    height: "5 ft 10 in (178 cm)",
    worldRanking: 'World Champion · 2x Olympic Medalist (Silver & Bronze)',
    teamsPlayedFor: ['India', 'Hyderabad Hunters'],
    stats: '2x Olympic Medalist · World Champion (Basel 2019) · 5 World Championship Medals',
    statsTable: [
      { format: 'Olympic Games (Rio, Tokyo, Paris)', matches: 16, winRate: '81%', medals: 2 },
      { format: 'BWF World Championships', matches: 32, winRate: '78%', titles: 1, medals: 5 },
    ],
    bio: 'Steep attacking smashes and towering reach that established India on the Olympic badminton podium. Sindhu’s big-match temperament is legendary in world sport.',
    fullBio: [
      'Trained at the Gopichand Badminton Academy, Sindhu became the first Indian woman to win an Olympic Silver medal in Rio 2016.',
      'She etched her name in history by winning the 2019 World Championship gold in Basel with an overwhelming 21-7, 21-7 final victory.'
    ],
    strengths: ['Steep cross-court jump smash', 'Reach retrieving net kill attempts', 'Big-tournament stamina and intensity'],
    careerHighlights: [
      'World Champion (2019 Basel)',
      'Olympic Silver (Rio 2016) & Bronze (Tokyo 2020)',
      'Commonwealth Games Gold (Birmingham 2022)',
      'Khel Ratna & Padma Bhushan Awardee'
    ],
    quote: 'You have to fight for every point; no one hands you an Olympic medal. You must take it.',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/P._V._Sindhu_2022.jpg/480px-P._V._Sindhu_2022.jpg',
    accentColor: '#7C3AED'
  },
  {
    id: 'lakshya-sen',
    slug: 'lakshya-sen',
    name: 'Lakshya Sen',
    fullName: 'Lakshya Sen',
    sport: 'Badminton',
    role: 'Men’s Singles Dynamo',
    team: 'India / BWF World Tour',
    nationality: 'India',
    jerseyNumber: 'IND',
    dateOfBirth: 'Aug 16, 2001 (Age 24)',
    birthPlace: 'Almora, Uttarakhand, India',
    height: "5 ft 10 in (178 cm)",
    worldRanking: 'All England Finalist · Commonwealth Gold · Thomas Cup Champion',
    teamsPlayedFor: ['India', 'Prakash Padukone Academy'],
    stats: 'Thomas Cup Historic Champion · CWG Gold · Olympic Semi-finalist · 420 km/h Smash',
    statsTable: [
      { format: 'BWF World Tour', matches: 180, winRate: '68%', titles: 4 },
      { format: 'Thomas Cup & Major Games', matches: 28, winRate: '75%', goldMedals: 2 },
    ],
    bio: 'Relentless court retrieval, lightning dives, and supersonic cross-court jump smashes. Lakshya’s defense-to-attack transitions have pushed the world’s elite to the limit.',
    fullBio: [
      'Mentored by Prakash Padukone in Bengaluru, Lakshya anchored India’s historic 2022 Thomas Cup triumph over Indonesia.',
      'At Paris 2024, his thrilling run to the Olympic semi-finals captured international headlines for athletic court coverage.'
    ],
    strengths: ['Full-court sliding retrievals', 'Explosive jump smash down the line', 'High-pressure net tumble control'],
    careerHighlights: [
      'Thomas Cup Historic Gold Champion (2022)',
      'Commonwealth Games Men’s Singles Gold (2022)',
      'Paris 2024 Olympic Men’s Singles Semi-finalist',
      'All England Open Finalist'
    ],
    quote: 'If the shuttle is off the floor, the rally is still alive. Keep diving.',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/86/Lakshya_Sen_2022.jpg/480px-Lakshya_Sen_2022.jpg',
    accentColor: '#2563EB'
  },
  {
    id: 'satwiksairaj-rankireddy',
    slug: 'satwiksairaj-rankireddy',
    name: 'Satwiksairaj Rankireddy',
    fullName: 'Satwiksairaj Rankireddy',
    sport: 'Badminton',
    role: 'Men’s Doubles Power Anchor',
    team: 'India (Sat-Chi) / BWF Tour',
    nationality: 'India',
    jerseyNumber: 'BWF #1',
    dateOfBirth: 'Aug 13, 2000 (Age 25)',
    birthPlace: 'Amalapuram, Andhra Pradesh, India',
    height: "6 ft 0 in (183 cm)",
    worldRanking: 'World No. 1 Men’s Doubles · World Record 565 km/h Smash',
    teamsPlayedFor: ['India'],
    stats: 'Guinness World Record 565 km/h Smash · Asian Games Gold · BWF World No. 1',
    statsTable: [
      { format: 'BWF World Tour / Super Series', matches: 240, winRate: '74%', titles: 8 },
      { format: 'Asian Games & Thomas Cup', matches: 34, winRate: '82%', titles: 3 },
    ],
    bio: 'The biggest artillery in world badminton. Satwik holds the official Guinness World Record for the fastest smash in badminton history at an astonishing 565 km/h.',
    fullBio: [
      'Paired with Chirag Shetty by coach Tan Kim Her, the "Sat-Chi" duo rose from outsiders to World No. 1, capturing Asian Games Gold, Thomas Cup, and the Asian Championship.',
      'Satwik’s booming back-court firepower provides the platform for their devastating tandem attack.'
    ],
    strengths: ['565 km/h Guinness World Record backcourt smash', 'Heavy steep jump smashes from rearcourt', 'Calm service returns'],
    careerHighlights: [
      'Guinness World Record: Fastest Smash in History (565 km/h)',
      'World No. 1 Men’s Doubles (First Indian pair)',
      'Asian Games Men’s Doubles Gold Medal (2023)',
      'Major Dhyan Chand Khel Ratna Awardee'
    ],
    quote: 'When you hit with full body extension from the back of the court, the sound alone intimidates opponents.',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/Satwiksairaj_Rankireddy_2022.jpg/480px-Satwiksairaj_Rankireddy_2022.jpg',
    accentColor: '#0EA5E9'
  },
  {
    id: 'chirag-shetty',
    slug: 'chirag-shetty',
    name: 'Chirag Shetty',
    fullName: 'Chirag Chandrashekhar Shetty',
    sport: 'Badminton',
    role: 'Men’s Doubles Net Interceptor',
    team: 'India (Sat-Chi) / BWF Tour',
    nationality: 'India',
    jerseyNumber: 'BWF #1',
    dateOfBirth: 'Jul 04, 1997 (Age 28)',
    birthPlace: 'Mumbai, Maharashtra, India',
    height: "6 ft 1 in (185 cm)",
    worldRanking: 'World No. 1 Men’s Doubles · Asian Games Gold Medalist',
    teamsPlayedFor: ['India'],
    stats: 'World No. 1 Doubles · Net Interceptor · Indonesia Open Super 1000 Champion',
    statsTable: [
      { format: 'BWF World Tour', matches: 240, winRate: '74%', titles: 8 },
    ],
    bio: 'The front-court tactician and interceptor. Chirag dominates the tape with lightning reflex blocks, flick drives, and vocal intensity that keeps the duo firing.',
    fullBio: [
      'Growing up in Malad, Mumbai, Chirag partnered Satwik to transform Indian badminton’s doubles landscape, conquering the prestigious Indonesia Open Super 1000.'
    ],
    strengths: ['Net interceptions and flat drive exchanges', 'Prowling front-court presence', 'Vocal match leadership'],
    careerHighlights: [
      'World No. 1 BWF Ranking',
      'Asian Games Gold Medal (2023)',
      'Thomas Cup Champion (2022)',
      'Khel Ratna Awardee'
    ],
    quote: 'In doubles, you win at the net. If you dominate the first three shots, the point is yours.',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/Chirag_Shetty_2022.jpg/480px-Chirag_Shetty_2022.jpg',
    accentColor: '#D97706'
  },
  {
    id: 'hs-prannoy',
    slug: 'hs-prannoy',
    name: 'HS Prannoy',
    fullName: 'Prannoy Haseena Sunil Kumar (The Beast)',
    sport: 'Badminton',
    role: 'Men’s Singles Giant-Killer',
    team: 'India / BWF World Tour',
    nationality: 'India',
    jerseyNumber: 'IND',
    dateOfBirth: 'Jul 17, 1992 (Age 33)',
    birthPlace: 'Thiruvananthapuram, Kerala, India',
    height: "5 ft 10 in (178 cm)",
    worldRanking: 'World Championship Bronze Medalist · Thomas Cup Hero',
    teamsPlayedFor: ['India'],
    stats: 'World Championship Medalist · Decider Specialist · Thomas Cup Hero',
    statsTable: [
      { format: 'BWF World Tour', matches: 320, winRate: '62%', titles: 3 },
    ],
    bio: 'Badminton’s ultimate warrior. Prannoy built his reputation taking down World No. 1s in grueling third-set deciders through sheer physical grit and cross-court power.',
    fullBio: [
      'Overcoming chronic gastrointestinal health hurdles, Prannoy anchored India’s Thomas Cup 2022 victories with clutch third-singles wins in the quarters and semis.'
    ],
    strengths: ['Unbreakable endurance in 70+ minute matches', 'Cross-court backhand winners', 'Mental fortitude in deciders'],
    careerHighlights: [
      'World Championship Bronze Medal (Copenhagen 2023)',
      'Asian Games Bronze Medal (Hangzhou 2023)',
      'Thomas Cup Historic Gold Hero',
      'Malaysia Masters Champion'
    ],
    quote: 'When the match goes into an hour and twenty minutes, it is no longer about skill. It is about soul.',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/H._S._Prannoy_2022.jpg/480px-H._S._Prannoy_2022.jpg',
    accentColor: '#059669'
  },

  // ==========================================
  // 🏎️ FORMULA 1 (5 Drivers with Dossiers)
  // ==========================================
  {
    id: 'max-verstappen',
    slug: 'max-verstappen',
    name: 'Max Verstappen',
    fullName: 'Max Emilian Verstappen',
    sport: 'Formula 1',
    role: 'Lead Driver',
    team: 'Red Bull Racing',
    nationality: 'Netherlands',
    jerseyNumber: 1,
    dateOfBirth: 'Sep 30, 1997 (Age 28)',
    birthPlace: 'Hasselt, Belgium',
    height: "5 ft 11 in (181 cm)",
    worldRanking: '4x Consecutive Formula 1 World Champion',
    teamsPlayedFor: ['Red Bull Racing', 'Scuderia Toro Rosso'],
    stats: '4x World Champion · 62+ Grand Prix Wins · 19 Wins in a Single Season (Record)',
    statsTable: [
      { format: 'Formula 1 Career', matches: 206, wins: 62, podiums: 110, polePositions: 40, points: 2980 },
    ],
    bio: 'Unrelenting mechanical mastery, surgical apex placement, and total psychological dominance. Verstappen turned modern Formula 1 into his personal playground.',
    fullBio: [
      'Groomed for F1 by father Jos Verstappen, Max became the youngest race winner in F1 history at Barcelona 2016 at age 18.',
      'Between 2021 and 2024, he rattled off four consecutive World Championships, authoring the most dominant individual season in motorsport history in 2023 with 19 victories.'
    ],
    strengths: ['Braking on the absolute ragged edge', 'Mastery in wet weather conditions', 'Relentless race-pace consistency'],
    careerHighlights: [
      '4x Formula 1 World Champion (2021, 2022, 2023, 2024)',
      'Record 19 Grand Prix victories in a single season (2023)',
      'Record 10 consecutive Grand Prix wins',
      'Youngest F1 race winner in history'
    ],
    quote: 'Simply lovely. We pushed every limit of the chassis and the rubber today.',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Max_Verstappen_2023.jpg/480px-Max_Verstappen_2023.jpg',
    accentColor: '#1E3A8A'
  },
  {
    id: 'lewis-hamilton',
    slug: 'lewis-hamilton',
    name: 'Lewis Hamilton',
    fullName: 'Sir Lewis Carl Davidson Hamilton',
    sport: 'Formula 1',
    role: '7x World Champion',
    team: 'Scuderia Ferrari',
    nationality: 'Great Britain',
    jerseyNumber: 44,
    dateOfBirth: 'Jan 07, 1985 (Age 41)',
    birthPlace: 'Stevenage, Hertfordshire, England',
    height: "5 ft 9 in (174 cm)",
    worldRanking: '7x World Champion (Tied Record) · Most F1 Wins in History (105+)',
    teamsPlayedFor: ['Scuderia Ferrari', 'Mercedes-AMG Petronas', 'McLaren'],
    stats: '105+ GP Wins (All-Time Record) · 104 Pole Positions · 7 World Titles',
    statsTable: [
      { format: 'Formula 1 Career', matches: 350, wins: 105, podiums: 201, polePositions: 104, points: 4800 },
    ],
    bio: 'The historic benchmark of modern motor racing. Uncanny tire management, wet-weather artistry, and trailblazing impact on and off the circuit.',
    fullBio: [
      'Hamilton arrived in F1 in 2007 with McLaren, winning his first title in dramatic fashion in 2008 before dominating the turbo-hybrid era with Mercedes to equal Michael Schumacher’s seven crowns.'
    ],
    strengths: ['Tire degradation preservation over long stints', 'Wet weather feel on traction edge', 'Qualifying lap commitment'],
    careerHighlights: [
      '7x Formula 1 World Champion',
      'Most F1 Wins in history (105+)',
      'Most F1 Pole Positions in history (104)',
      '9x British Grand Prix Winner'
    ],
    quote: 'Still we rise. Every apex is a dialogue with destiny; never stop believing in your team.',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Lewis_Hamilton_2022_Bahrain.jpg/480px-Lewis_Hamilton_2022_Bahrain.jpg',
    accentColor: '#DC2626'
  },
  {
    id: 'charles-leclerc',
    slug: 'charles-leclerc',
    name: 'Charles Leclerc',
    fullName: 'Charles Marc Hervé Perceval Leclerc',
    sport: 'Formula 1',
    role: 'Ferrari Lead Driver',
    team: 'Scuderia Ferrari',
    nationality: 'Monaco',
    jerseyNumber: 16,
    dateOfBirth: 'Oct 16, 1997 (Age 28)',
    birthPlace: 'Monte Carlo, Monaco',
    height: "5 ft 11 in (180 cm)",
    worldRanking: 'Monaco GP & Monza GP Champion · 25+ Pole Positions',
    teamsPlayedFor: ['Scuderia Ferrari', 'Sauber'],
    stats: 'Monaco GP Winner · Monza Winner · 26 Pole Positions · Pure Qualifying Pace',
    statsTable: [
      { format: 'Formula 1 Career', matches: 145, wins: 8, podiums: 41, polePositions: 26, points: 1380 },
    ],
    bio: 'The prince of qualifying. Leclerc extracts speed out of the Ferrari chassis that leaves engineers spellbound, crowned by his emotional home Monaco victory in 2024.',
    fullBio: [
      'The Monegasque driver rose through Ferrari’s Driver Academy to claim the iconic red seat, conquering Monza in front of the Tifosi and winning Monaco in 2024.'
    ],
    strengths: ['Single-lap qualifying commitment', 'High-speed street circuit bravery', 'Late braking maneuvers into chicanes'],
    careerHighlights: [
      'Monaco Grand Prix Winner (2024)',
      '2x Italian Grand Prix Winner at Monza',
      'Over 25 career pole positions',
      'F2 & GP3 Champion'
    ],
    quote: 'Winning in Monaco is everything I dreamed of since watching the cars as a four-year-old from the balcony.',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/Charles_Leclerc_2022_Bahrain.jpg/480px-Charles_Leclerc_2022_Bahrain.jpg',
    accentColor: '#B91C1C'
  },
  {
    id: 'lando-norris',
    slug: 'lando-norris',
    name: 'Lando Norris',
    fullName: 'Lando Norris',
    sport: 'Formula 1',
    role: 'McLaren Lead Driver',
    team: 'McLaren F1 Team',
    nationality: 'Great Britain',
    jerseyNumber: 4,
    dateOfBirth: 'Nov 13, 1999 (Age 26)',
    birthPlace: 'Bristol, England',
    height: "5 ft 9 in (175 cm)",
    worldRanking: 'F1 Title Challenger · Miami & Zandvoort Grand Prix Winner',
    teamsPlayedFor: ['McLaren'],
    stats: 'Miami & Dutch GP Winner · 25+ Podiums · McLaren Team Leader',
    statsTable: [
      { format: 'Formula 1 Career', matches: 125, wins: 4, podiums: 26, polePositions: 8, points: 950 },
    ],
    bio: 'The charismatic British ace who spearheaded McLaren’s revival back to the front of the grid with razor-sharp reflexes and relentless tire conservation.',
    fullBio: [
      'Norris graduated through British karting to become McLaren’s franchise driver, claiming his maiden win in Miami 2024 before challenging for the World Championship.'
    ],
    strengths: ['High-speed corner balance', 'Precision throttle modulation', 'Adaptability to changing aero balances'],
    careerHighlights: [
      'Miami Grand Prix Victory (2024)',
      'Dutch Grand Prix Dominant Victory (2024)',
      'Singapore GP Dominant Victory',
      'Constructors Championship Contender for McLaren'
    ],
    quote: 'It’s about trusting the rear axle when you carry that speed into the apex.',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Lando_Norris_2022_Bahrain.jpg/480px-Lando_Norris_2022_Bahrain.jpg',
    accentColor: '#EA580C'
  },
  {
    id: 'fernando-alonso',
    slug: 'fernando-alonso',
    name: 'Fernando Alonso',
    fullName: 'Fernando Alonso Díaz (El Nano)',
    sport: 'Formula 1',
    role: 'Veteran Legend',
    team: 'Aston Martin F1 Team',
    nationality: 'Spain',
    jerseyNumber: 14,
    dateOfBirth: 'Jul 29, 1981 (Age 44)',
    birthPlace: 'Oviedo, Asturias, Spain',
    height: "5 ft 7 in (171 cm)",
    worldRanking: '2x World Champion · 400+ Grands Prix (Most in History)',
    teamsPlayedFor: ['Aston Martin', 'Alpine', 'McLaren', 'Ferrari', 'Renault', 'Minardi'],
    stats: '400+ GP Starts (All-Time Record) · 32 GP Wins · 106 Podiums · 2x World Champion',
    statsTable: [
      { format: 'Formula 1 Career', matches: 402, wins: 32, podiums: 106, polePositions: 22, points: 2320 },
    ],
    bio: 'The eternal samurai of motorsport. Still out-braking and out-thinking drivers half his age in his forties, Alonso remains the fiercest wheel-to-wheel racer on the grid.',
    fullBio: [
      'Alonso famously ended Michael Schumacher’s five-year reign to win consecutive titles with Renault in 2005 and 2006, continuing to compete at the sharp end four decades into his life.'
    ],
    strengths: ['First-lap overtake spatial awareness', 'Racecraft defense in slower machinery', 'Relentless analytical mind in cockpit'],
    careerHighlights: [
      '2x Formula 1 World Champion (2005, 2006)',
      '2x 24 Hours of Le Mans Winner',
      'First driver to start 400 Formula 1 Grands Prix',
      'Over 105 career podiums'
    ],
    quote: 'I drive to the maximum every single lap. If there is a centimeter of space, I will place the car there.',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/Fernando_Alonso_2022_Bahrain.jpg/480px-Fernando_Alonso_2022_Bahrain.jpg',
    accentColor: '#047857'
  },

  // ==========================================
  // 🥊 BOXING & WRESTLING (5 Athletes with Dossiers)
  // ==========================================
  {
    id: 'vinesh-phogat',
    slug: 'vinesh-phogat',
    name: 'Vinesh Phogat',
    fullName: 'Vinesh Phogat',
    sport: 'Boxing & Wrestling',
    role: 'Freestyle Wrestler (50kg / 53kg)',
    team: 'India / World Wrestling',
    nationality: 'India',
    jerseyNumber: 'IND',
    dateOfBirth: 'Aug 25, 1994 (Age 31)',
    birthPlace: 'Balali, Charkhi Dadri, Haryana, India',
    height: "5 ft 3 in (160 cm)",
    worldRanking: '3x Olympian · 2x World Championship Medalist · Asian Games Gold',
    teamsPlayedFor: ['India'],
    stats: 'Defeated Unbeaten 82-0 Susaki · 2x World Championship Medalist · CWG Gold',
    statsTable: [
      { format: 'World Championships & Olympics', matches: 48, winRate: '78%', medals: 4 },
      { format: 'Commonwealth & Asian Games', matches: 22, winRate: '86%', goldMedals: 3 },
    ],
    bio: 'The lioness of Indian combat sport whose unyielding resilience inspired millions across the subcontinent. Her shock victory over Japan’s undefeated Yui Susaki in Paris stunned the Olympic world.',
    fullBio: [
      'From the famed Phogat wrestling family in Haryana, Vinesh overcame career-threatening knee surgeries, administrative protests, and intense weight-cuts to establish herself as an icon of athletic courage.'
    ],
    strengths: ['Low level ankle-pick takedowns', 'Counter-defending underhooks', 'Indomitable psychological courage'],
    careerHighlights: [
      'Stunned 82-0 Olympic Champion Yui Susaki in Paris 2024',
      '2x World Championship Bronze Medalist (2019, 2022)',
      'Asian Games Gold Medalist (Jakarta 2018)',
      '3x Commonwealth Games Gold Medalist'
    ],
    quote: 'The mat is where dignity is defended through sweat and honor. Never surrender your voice.',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Vinesh_Phogat_2022.jpg/480px-Vinesh_Phogat_2022.jpg',
    accentColor: '#B91C1C'
  },
  {
    id: 'aman-sehrawat',
    slug: 'aman-sehrawat',
    name: 'Aman Sehrawat',
    fullName: 'Aman Sehrawat',
    sport: 'Boxing & Wrestling',
    role: 'Freestyle Wrestler (57kg)',
    team: 'India / Chhatrasal Stadium',
    nationality: 'India',
    jerseyNumber: 'IND',
    dateOfBirth: 'Jul 16, 2003 (Age 22)',
    birthPlace: 'Birohar, Jhajjar, Haryana, India',
    height: "5 ft 6 in (168 cm)",
    worldRanking: 'Paris 2024 Olympic Bronze Medalist · Asian Champion',
    teamsPlayedFor: ['India', 'Chhatrasal Stadium'],
    stats: 'Olympic Bronze Medalist at 21 (India Youngest) · Asian Champion · U23 World Champion',
    statsTable: [
      { format: 'Olympic Games (Paris 2024)', matches: 4, winRate: '75%', bronzeMedal: true },
      { format: 'Senior Asian Championship', matches: 8, winRate: '88%', goldMedals: 1 },
    ],
    bio: 'The young warrior from Haryana carrying forward India’s unbroken Olympic wrestling legacy. At age 21, he became India’s youngest individual Olympic medalist.',
    fullBio: [
      'Orphaned at age eleven, Aman found a home and purpose at Delhi’s famed Chhatrasal Stadium under Lalit Kumar, mastering relentless leg attacks and stamina.'
    ],
    strengths: ['Continuous pace in the final two minutes', 'Double-leg snapshot takedowns', 'Agile sprawl defenses'],
    careerHighlights: [
      'Paris 2024 Olympic Bronze Medalist (Youngest Indian Olympic medalist in history)',
      'Asian Wrestling Championships Gold Medalist',
      'U23 World Wrestling Champion (First Indian)',
      'Commonwealth Games Champion'
    ],
    quote: 'Every gram cut and every bruise in training is for the tri-color on the podium.',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/Aman_Sehrawat_2023.jpg/480px-Aman_Sehrawat_2023.jpg',
    accentColor: '#EA580C'
  },
  {
    id: 'nikhat-zareen',
    slug: 'nikhat-zareen',
    name: 'Nikhat Zareen',
    fullName: 'Nikhat Zareen',
    sport: 'Boxing & Wrestling',
    role: 'Flyweight Boxer (50kg)',
    team: 'India / Inspire Institute of Sport',
    nationality: 'India',
    jerseyNumber: 'IND',
    dateOfBirth: 'Jun 14, 1996 (Age 29)',
    birthPlace: 'Nizamabad, Telangana, India',
    height: "5 ft 3 in (160 cm)",
    worldRanking: '2x World Boxing Champion · Commonwealth Games Gold',
    teamsPlayedFor: ['India'],
    stats: '2x Consecutive World Champion (2022, 2023) · CWG Gold · Southpaw Stance Shifts',
    statsTable: [
      { format: 'IBA World Boxing Championships', matches: 16, winRate: '94%', goldMedals: 2 },
      { format: 'Commonwealth & Asian Games', matches: 10, winRate: '80%', medals: 2 },
    ],
    bio: 'India’s two-time World Champion pugilist. Nikhat combines rapid footwork, switch-hitting hooks, and supreme counter-punching in the ring.',
    fullBio: [
      'Breaking cultural barriers in Nizamabad, Nikhat persevered behind Mary Kom’s shadow before winning back-to-back World Championship golds in Istanbul and New Delhi.'
    ],
    strengths: ['Sharp lead left-hook', 'Upper-body slip and weave', 'Rapid combination flurries to body'],
    careerHighlights: [
      '2x World Boxing Champion (Istanbul 2022 & New Delhi 2023)',
      'Commonwealth Games Gold (Birmingham 2022)',
      'Asian Games Bronze Medalist',
      'Arjuna Awardee'
    ],
    quote: 'When someone tells you a girl cannot fight, smile and let your gloves do the talking.',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/Nikhat_Zareen_2022.jpg/480px-Nikhat_Zareen_2022.jpg',
    accentColor: '#0EA5E9'
  },
  {
    id: 'lovlina-borgohain',
    slug: 'lovlina-borgohain',
    name: 'Lovlina Borgohain',
    fullName: 'Lovlina Borgohain',
    sport: 'Boxing & Wrestling',
    role: 'Middleweight Boxer (75kg)',
    team: 'India',
    nationality: 'India',
    jerseyNumber: 'IND',
    dateOfBirth: 'Oct 02, 1997 (Age 28)',
    birthPlace: 'Golaghat, Assam, India',
    height: "5 ft 10 in (178 cm)",
    worldRanking: 'Olympic Bronze Medalist · World Champion',
    teamsPlayedFor: ['India'],
    stats: 'Tokyo 2020 Olympic Bronze · World Champion (2023) · Long Reach Jab Specialist',
    statsTable: [
      { format: 'Olympic Games & World Championships', matches: 24, winRate: '75%', titles: 1, medals: 3 },
    ],
    bio: 'The tall, rangy pugilist from Assam whose straight jab and back-foot counter-punches earned India an Olympic medal in Tokyo.',
    fullBio: [
      'Starting as a Muay Thai practitioner, Lovlina converted to amateur boxing, winning an Olympic Bronze medal in Tokyo before stepping up in weight to become World Champion in 2023.'
    ],
    strengths: ['Range management with stiff lead jab', 'Step-back right straight counter', 'Inside clinch control'],
    careerHighlights: [
      'Tokyo 2020 Olympic Bronze Medalist',
      'World Boxing Champion (New Delhi 2023)',
      'Asian Games Silver Medalist (2023)',
      'Major Dhyan Chand Khel Ratna Awardee'
    ],
    quote: 'Stay tall, control the distance, and let your jab dictate where the opponent can walk.',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Lovlina_Borgohain_2021.jpg/480px-Lovlina_Borgohain_2021.jpg',
    accentColor: '#7C3AED'
  },
  {
    id: 'bajrang-punia',
    slug: 'bajrang-punia',
    name: 'Bajrang Punia',
    fullName: 'Bajrang Punia',
    sport: 'Boxing & Wrestling',
    role: 'Freestyle Wrestler (65kg)',
    team: 'India / Chhatrasal Stadium (Legend)',
    nationality: 'India',
    jerseyNumber: 'IND',
    dateOfBirth: 'Feb 26, 1994 (Age 32)',
    birthPlace: 'Khudan, Jhajjar, Haryana, India',
    height: "5 ft 5 in (165 cm)",
    worldRanking: 'Olympic Bronze Medalist · 4x World Championship Medalist',
    teamsPlayedFor: ['India'],
    stats: 'Tokyo 2020 Bronze Medalist · 4x World Championship Medals (Most for Indian Wrestler)',
    statsTable: [
      { format: 'World Championships & Olympics', matches: 38, winRate: '78%', medals: 5 },
    ],
    bio: 'India’s relentless pressure tank on the wrestling mat. Punia is the only Indian wrestler with four World Championship medals, renowned for stamina and late comebacks.',
    fullBio: [
      'Mentored by Yogeshwar Dutt, Bajrang dominated the 65kg division, capturing an Olympic Bronze medal in Tokyo 2020 while battling a severe knee ligament injury.'
    ],
    strengths: ['Relentless lung capacity in second period', 'Underhook to duck-under takedown', 'Leg defense under extreme tiredness'],
    careerHighlights: [
      'Tokyo 2020 Olympic Bronze Medalist',
      '4x World Wrestling Championship Medalist (Record for India)',
      'Asian Games Gold Medalist (Jakarta 2018)',
      '2x Commonwealth Games Gold Medalist'
    ],
    quote: 'When your lungs burn in the fifth minute, that is when champions are separated from the rest.',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Bajrang_Punia_2021.jpg/480px-Bajrang_Punia_2021.jpg',
    accentColor: '#059669'
  },

  // ==========================================
  // 🏃 ATHLETICS (5 Athletes with Dossiers)
  // ==========================================
  {
    id: 'neeraj-chopra',
    slug: 'neeraj-chopra',
    name: 'Neeraj Chopra',
    fullName: 'Neeraj Chopra (Golden Arm)',
    sport: 'Athletics',
    role: 'Javelin Thrower',
    team: 'India / World Athletics',
    nationality: 'India',
    jerseyNumber: 'IND',
    dateOfBirth: 'Dec 24, 1997 (Age 28)',
    birthPlace: 'Khandra, Panipat, Haryana, India',
    height: "6 ft 0 in (183 cm)",
    worldRanking: 'Olympic Gold (Tokyo) & Silver (Paris) · World Champion · Diamond League Champion',
    teamsPlayedFor: ['India'],
    stats: 'Olympic Gold & Silver · World Champion (Budapest 2023) · Personal Best: 89.94m',
    statsTable: [
      { format: 'Olympic Games (Tokyo & Paris)', matches: 2, distance: '87.58m / 89.45m', goldMedals: 1, silverMedals: 1 },
      { format: 'World Athletics Championships', matches: 3, distance: '88.17m / 88.77m', goldMedals: 1, silverMedals: 1 },
    ],
    bio: 'The national hero who unlocked India’s athletic zenith through explosive runway biomechanics and nerves of steel. India’s first-ever track and field Olympic Gold medalist.',
    fullBio: [
      'Beginning javelin to combat childhood obesity in Panipat, Chopra shocked the world with an 87.58m launch in Tokyo 2020, ending India’s century-long Olympic track and field gold drought.',
      'He followed by winning the 2023 World Athletics Championship in Budapest and taking Olympic Silver in Paris 2024.'
    ],
    strengths: ['Runway cross-step transition speed', 'Elastic shoulder blocking angle', 'First-throw psychological dominance'],
    careerHighlights: [
      'Olympic Gold Medal (Tokyo 2020) & Olympic Silver (Paris 2024)',
      'World Athletics Champion (Budapest 2023)',
      'Diamond League Trophy Champion',
      'Padma Shri & Khel Ratna Awardee'
    ],
    quote: 'When the spear leaves your fingers cleanly, your soul knows the distance before the javelin hits the turf.',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/Neeraj_Chopra_in_2023.jpg/480px-Neeraj_Chopra_in_2023.jpg',
    accentColor: '#D97706'
  },
  {
    id: 'noah-lyles',
    slug: 'noah-lyles',
    name: 'Noah Lyles',
    fullName: 'Noah Lyles',
    sport: 'Athletics',
    role: 'Sprinter (100m / 200m)',
    team: 'USA / World Athletics',
    nationality: 'USA',
    jerseyNumber: 'USA',
    dateOfBirth: 'Jul 18, 1997 (Age 28)',
    birthPlace: 'Gainesville, Florida, USA',
    height: "5 ft 11 in (180 cm)",
    worldRanking: 'Olympic 100m Champion (9.79s) · 3x 200m World Champion',
    teamsPlayedFor: ['USA'],
    stats: '100m Olympic Champion (9.79s) · PB 200m: 19.31s (American Record) · 6x World Champion',
    statsTable: [
      { format: '100m Sprint', matches: 45, personalBest: '9.79s', goldMedals: 2 },
      { format: '200m Sprint', matches: 60, personalBest: '19.31s', goldMedals: 4 },
    ],
    bio: 'The charismatic showman of sprinting whose top-end stride frequency shreds opponents in the second 50 meters. The reigning "Fastest Man on Earth".',
    fullBio: [
      'Overcoming childhood asthma, Lyles established himself as Michael Johnson’s heir in the 200m before shocking the world by edging Kishane Thompson by 0.005 seconds in the 100m final in Paris 2024.'
    ],
    strengths: ['Top-end speed maintenance from 60m-100m', 'Curve running mechanics in 200m', 'Electric showmanship'],
    careerHighlights: [
      'Paris 2024 Olympic 100m Champion (9.79s)',
      'American Record Holder in 200m (19.31s)',
      'Triple Gold Medalist at 2023 Budapest World Championships',
      'Olympic Bronze Medalist in 200m (Tokyo & Paris)'
    ],
    quote: 'I am the fastest man on this planet. Watch the clock when I hit top stride.',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/Noah_Lyles_2023.jpg/480px-Noah_Lyles_2023.jpg',
    accentColor: '#DC2626'
  },
  {
    id: 'armand-duplantis',
    slug: 'armand-duplantis',
    name: 'Armand Duplantis',
    fullName: 'Armand Gustav "Mondo" Duplantis',
    sport: 'Athletics',
    role: 'Pole Vaulter',
    team: 'Sweden / World Athletics',
    nationality: 'Sweden',
    jerseyNumber: 'SWE',
    dateOfBirth: 'Nov 10, 1999 (Age 26)',
    birthPlace: 'Lafayette, Louisiana, USA',
    height: "5 ft 11 in (181 cm)",
    worldRanking: 'World Record Holder (6.26m) · 2x Olympic Gold Medalist',
    teamsPlayedFor: ['Sweden'],
    stats: 'World Record: 6.26m · 2x Olympic Champion (Tokyo & Paris) · 10+ World Records Broken',
    statsTable: [
      { format: 'Olympic Games', matches: 2, heights: '6.02m / 6.25m (WR)', goldMedals: 2 },
      { format: 'World Athletics Championships', matches: 4, heights: '6.21m (WR)', goldMedals: 2 },
    ],
    bio: 'The flying phenomenon. Duplantis has rewritten pole vault physics, repeatedly breaking his own world record centimeter-by-centimeter up to an astronomical 6.26 meters.',
    fullBio: [
      'Practicing in his backyard runway since age four, Mondo claimed consecutive Olympic titles in Tokyo and Paris, punctuating his Paris gold with a new world record under the stadium lights.'
    ],
    strengths: ['10.3-second 100m runway sprint speed', 'Fiberglass pole bend energy transfer', 'Inverted spatial clearance'],
    careerHighlights: [
      '2x Olympic Gold Medalist (Tokyo 2020 & Paris 2024)',
      'Current World Record Holder (6.26m)',
      'Broke the World Record 10 different times',
      'World Athletics Athlete of the Year'
    ],
    quote: 'The bar is just an idea. You run, plant, and let the pole fling you into the sky.',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/Armand_Duplantis_2022.jpg/480px-Armand_Duplantis_2022.jpg',
    accentColor: '#2563EB'
  },
  {
    id: 'sydney-mclaughlin',
    slug: 'sydney-mclaughlin',
    name: 'Sydney McLaughlin-Levrone',
    fullName: 'Sydney Michelle McLaughlin-Levrone',
    sport: 'Athletics',
    role: '400m Hurdler / Sprinter',
    team: 'USA / World Athletics',
    nationality: 'USA',
    jerseyNumber: 'USA',
    dateOfBirth: 'Aug 07, 1999 (Age 26)',
    birthPlace: 'New Brunswick, New Jersey, USA',
    height: "5 ft 9 in (175 cm)",
    worldRanking: 'World Record Holder (50.37s) · 2x Olympic 400m Hurdles Gold',
    teamsPlayedFor: ['USA'],
    stats: 'World Record: 50.37s · 4x Olympic Gold Medalist · Stride Pattern Perfection',
    statsTable: [
      { format: '400m Hurdles', matches: 25, personalBest: '50.37s (WR)', goldMedals: 4 },
    ],
    bio: 'The master of stride precision. Sydney broke the 400m hurdles world record six separate times, dipping down to an unprecedented 50.37 seconds in Paris 2024.',
    fullBio: [
      'Coached by Bob Kersee, Sydney became the first woman to break 52, 51, and approach 50 seconds in the 400m hurdles with flawless 14-stride rhythm between hurdles.'
    ],
    strengths: ['14-stride consistent rhythm', 'Lead-leg hurdle snap with minimal vertical lift', 'Unbroken speed endurance in final 100m'],
    careerHighlights: [
      '2x Olympic 400m Hurdles Champion (Tokyo & Paris)',
      'World Record 50.37 seconds in Paris 2024',
      '4x Olympic Gold Medals (including 4x400m relays)',
      'World Athlete of the Year'
    ],
    quote: 'Trust the rhythm. The hurdles are simply steps in the stride.',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Sydney_McLaughlin_2022.jpg/480px-Sydney_McLaughlin_2022.jpg',
    accentColor: '#7C3AED'
  },
  {
    id: 'avinash-sable',
    slug: 'avinash-sable',
    name: 'Avinash Sable',
    fullName: 'Avinash Mukund Sable',
    sport: 'Athletics',
    role: '3000m Steeplechaser',
    team: 'India / Indian Army',
    nationality: 'India',
    jerseyNumber: 'IND',
    dateOfBirth: 'Sep 13, 1994 (Age 31)',
    birthPlace: 'Mandwa, Beed, Maharashtra, India',
    height: "5 ft 7 in (170 cm)",
    worldRanking: 'Asian Games Gold Medalist · CWG Silver · National Record Holder (8:09.91)',
    teamsPlayedFor: ['India', 'Indian Army'],
    stats: 'National Record: 8:09.91 · Commonwealth Games Silver · Asian Games Champion',
    statsTable: [
      { format: '3000m Steeplechase', matches: 30, nationalRecord: '8:09.91', medals: 3 },
    ],
    bio: 'The trailblazer from rural Maharashtra who broke Kenya’s 24-year monopoly on the Commonwealth Games steeplechase podium through sheer aerobic grit.',
    fullBio: [
      'Serving in the Indian Army at Siachen Glacier before taking up steeplechase, Sable broke India’s national record ten times, reaching the Olympic final in Paris 2024.'
    ],
    strengths: ['Water jump clearance efficiency', 'Lactic acid tolerance in final 400m', 'High-altitude lung conditioning'],
    careerHighlights: [
      'Asian Games Gold Medalist in 3000m Steeplechase (Hangzhou 2023)',
      'Commonwealth Games Silver Medalist (Birmingham 2022)',
      'First Indian to reach Olympic 3000m Steeplechase Final (Paris 2024)',
      'Indian National Record Holder (8:09.91)'
    ],
    quote: 'From Siachen cold to the red Olympic track, if you can endure, you can race anyone in the world.',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Avinash_Sable_2022.jpg/480px-Avinash_Sable_2022.jpg',
    accentColor: '#059669'
  },

  // ==========================================
  // 🎯 OTHER SPORTS (Chess & Shooting - 5 Stars)
  // ==========================================
  {
    id: 'd-gukesh',
    slug: 'd-gukesh',
    name: 'D Gukesh',
    fullName: 'Dommaraju Gukesh',
    sport: 'Other Sports',
    role: 'World Championship Challenger / Grandmaster',
    team: 'India / FIDE Chess',
    nationality: 'India',
    jerseyNumber: 'FIDE 2794',
    dateOfBirth: 'May 29, 2006 (Age 19)',
    birthPlace: 'Chennai, Tamil Nadu, India',
    height: "5 ft 9 in (175 cm)",
    worldRanking: 'Youngest Candidates Winner in History (Age 17) · World Top 5',
    teamsPlayedFor: ['India', 'FIDE'],
    stats: 'Youngest Candidates Winner in History (17 yrs) · Olympiad Individual Gold (9/10 score)',
    statsTable: [
      { format: 'Classical Chess', matches: 320, rating: '2794 Peak', winRate: '68%' },
      { format: 'FIDE Olympiad (Budapest 2024)', matches: 10, wins: 8, draws: 2, goldMedals: 2 },
    ],
    bio: 'The ice-veined chess prodigy redefining classical opening preparation and end-game calculation. Youngest challenger in World Championship history.',
    fullBio: [
      'Tutored in Chennai’s legendary chess nurseries, Gukesh stunned the world by winning the 2024 FIDE Candidates in Toronto at age 17, followed by leading India to historic double gold at the 45th Chess Olympiad.'
    ],
    strengths: ['Endgame calculation precision', 'Ice-cold composure under time pressure', 'Deep classical opening preparation'],
    careerHighlights: [
      'Youngest Winner of the FIDE Candidates Tournament (Toronto 2024)',
      'Double Gold Medalist at 45th FIDE Chess Olympiad (Budapest 2024)',
      'Third Youngest Grandmaster in History (12 yrs 7 mos)',
      'Crossed 2750+ Elo rating'
    ],
    quote: 'On the board, age does not calculate moves; accuracy does. Every position has an objective truth.',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/Gukesh_D_at_Tata_Steel_Chess_2024.jpg/480px-Gukesh_D_at_Tata_Steel_Chess_2024.jpg',
    accentColor: '#047857'
  },
  {
    id: 'r-praggnanandhaa',
    slug: 'r-praggnanandhaa',
    name: 'R Praggnanandhaa',
    fullName: 'Rameshbabu Praggnanandhaa',
    sport: 'Other Sports',
    role: 'Super-Grandmaster',
    team: 'India / FIDE Chess',
    nationality: 'India',
    jerseyNumber: 'FIDE 2760',
    dateOfBirth: 'Aug 10, 2005 (Age 20)',
    birthPlace: 'Chennai, Tamil Nadu, India',
    height: "5 ft 8 in (173 cm)",
    worldRanking: 'FIDE World Cup Silver · Olympiad Gold · Defeated Carlsen Multiple Times',
    teamsPlayedFor: ['India', 'FIDE'],
    stats: 'World Cup Silver Medalist · 45th Olympiad Gold · Multiple Victories over Magnus Carlsen',
    statsTable: [
      { format: 'Classical Chess', matches: 300, rating: '2760 Peak', winRate: '66%' },
      { format: 'FIDE World Cup (Baku 2023)', matches: 14, silverMedal: true },
    ],
    bio: 'The tactical sorcerer capable of finding microscopic dynamic resources in razor-sharp complications. Famous for multiple wins over World No. 1 Magnus Carlsen.',
    fullBio: [
      'Starting chess alongside his elder sister Vaishali under coach RB Ramesh, Pragg became an International Master at age 10 and reached the 2023 FIDE World Cup final in Baku.'
    ],
    strengths: ['Tactical complications in middlegames', 'Resilient defense in worse positions', 'Dynamic bishop-pair activation'],
    careerHighlights: [
      'FIDE World Cup 2023 Silver Medalist (qualified for Candidates)',
      'Olympiad Gold Medalist with India (Budapest 2024)',
      'Multiple classical and rapid victories over Magnus Carlsen',
      'Arjuna Awardee'
    ],
    quote: 'Never fear a reputation; calculate the position in front of you with an open mind.',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Praggnanandhaa_R_at_Tata_Steel_Chess_2024.jpg/480px-Praggnanandhaa_R_at_Tata_Steel_Chess_2024.jpg',
    accentColor: '#0F766E'
  },
  {
    id: 'magnus-carlsen',
    slug: 'magnus-carlsen',
    name: 'Magnus Carlsen',
    fullName: 'Sven Magnus Øen Carlsen',
    sport: 'Other Sports',
    role: 'World No. 1 & 5x Classical World Champion',
    team: 'Norway / FIDE Chess',
    nationality: 'Norway',
    jerseyNumber: 'FIDE 2882 Peak',
    dateOfBirth: 'Nov 30, 1990 (Age 35)',
    birthPlace: 'Tønsberg, Norway',
    height: "5 ft 7 in (170 cm)",
    worldRanking: 'Continuous World No. 1 since 2011 · Highest Elo in History (2882)',
    teamsPlayedFor: ['Norway', 'FIDE'],
    stats: 'Peak Rating: 2882 (Highest in History) · 5x Classical World Champion · 17x World Blitz/Rapid Champion',
    statsTable: [
      { format: 'Classical Chess', matches: 1200, rating: '2882 Peak', winRate: '75%' },
      { format: 'World Championship Matches', matches: 68, wins: 24, draws: 42, titles: 5 },
    ],
    bio: 'The Mozart of chess and the greatest player in history. Renowned for squeezing wins from completely equal positions through endless intuition and positional squeeze.',
    fullBio: [
      'Carlsen ascended to World No. 1 in 2011, defeating Viswanathan Anand in 2013 to claim the crown he defended five times before dominating global speed chess.'
    ],
    strengths: ['Grinding microscopic advantages in equal endgames', 'Intuitive pawn-structure evaluation', 'Unrivaled rapid and blitz speed'],
    careerHighlights: [
      'Highest Elo Rating in Chess History: 2882',
      '5x Classical World Chess Champion',
      '17x World Rapid and Blitz Champion',
      'Continuous World No. 1 for over 14 consecutive years'
    ],
    quote: 'Some people think that if their opponent plays a beautiful game, it’s okay to lose. I have never thought that.',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Magnus_Carlsen_at_Tata_Steel_Chess_2023.jpg/480px-Magnus_Carlsen_at_Tata_Steel_Chess_2023.jpg',
    accentColor: '#1E3A8A'
  },
  {
    id: 'manu-bhaker',
    slug: 'manu-bhaker',
    name: 'Manu Bhaker',
    fullName: 'Manu Bhaker',
    sport: 'Other Sports',
    role: 'Pistol Shooter (10m & 25m)',
    team: 'India / Shooting',
    nationality: 'India',
    jerseyNumber: 'IND',
    dateOfBirth: 'Feb 18, 2002 (Age 24)',
    birthPlace: 'Goria, Jhajjar, Haryana, India',
    height: "5 ft 4 in (163 cm)",
    worldRanking: 'Historic Double Olympic Bronze Medalist (Paris 2024)',
    teamsPlayedFor: ['India'],
    stats: 'First Athlete in Independent India History to Win 2 Medals in Same Olympics (Paris 2024)',
    statsTable: [
      { format: 'Olympic Games (Paris 2024)', matches: 2, events: '10m Air Pistol & Mixed Team', medals: 2, bronzeMedals: 2 },
      { format: 'ISSF World Cups & Championships', matches: 30, goldMedals: 9 },
    ],
    bio: 'The historic sharpshooter who broke India’s 12-year Olympic shooting medal drought. She became the first athlete in independent India to win two medals at a single Olympic Games in Paris 2024.',
    fullBio: [
      'Overcoming devastating weapon malfunction heartbreak at Tokyo 2020, Manu reunited with mentor Jaspal Rana to clinch Bronze in both 10m Air Pistol and 10m Air Pistol Mixed Team.'
    ],
    strengths: ['Heartbeat trigger-pull synchronization', 'Mental reset between single-shot rounds', 'Two-handed stability in rapid-fire series'],
    careerHighlights: [
      '2x Bronze Medals at Paris 2024 Olympics (First Indian with two medals at one Games)',
      'Commonwealth Games Gold Medalist',
      'ISSF World Cup Multiple Gold Medalist',
      'Arjuna Awardee'
    ],
    quote: 'Read the Gita, focus on your karma, and let the bullet find the center of the ring.',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Manu_Bhaker_2024.jpg/480px-Manu_Bhaker_2024.jpg',
    accentColor: '#D97706'
  },
  {
    id: 'sharath-kamal',
    slug: 'sharath-kamal',
    name: 'Sharath Kamal',
    fullName: 'Achanta Sharath Kamal',
    sport: 'Other Sports',
    role: 'Table Tennis Legend',
    team: 'India / Table Tennis',
    nationality: 'India',
    jerseyNumber: 'IND',
    dateOfBirth: 'Jul 12, 1982 (Age 43)',
    birthPlace: 'Chennai, Tamil Nadu, India',
    height: "6 ft 1 in (185 cm)",
    worldRanking: '5x Olympian · 13x Commonwealth Games Medalist · Khel Ratna',
    teamsPlayedFor: ['India'],
    stats: '5x Olympian · Paris 2024 India Flagbearer · 7x Commonwealth Games Gold Medalist',
    statsTable: [
      { format: 'Commonwealth Games (2006-2022)', matches: 40, goldMedals: 7, totalMedals: 13 },
      { format: 'Olympic Games (5 Editions)', matches: 15, caps: 5 },
    ],
    bio: 'The father figure and ageless titan of Indian table tennis. Sharath carried the Indian flag at Paris 2024 after two decades of international dominance.',
    fullBio: [
      'From Melbourne 2006 to Birmingham 2022, Sharath captured seven Commonwealth Games gold medals, lifting Indian table tennis onto the global professional circuit.'
    ],
    strengths: ['Huge wingspan forehand top-spin loops', 'Heavy backspin short serves', 'Longevity and locker room mentorship'],
    careerHighlights: [
      '7x Commonwealth Games Gold Medalist',
      'India Flagbearer at Paris 2024 Olympic Opening Ceremony',
      '5x Olympian (2004, 2008, 2016, 2020, 2024)',
      'Major Dhyan Chand Khel Ratna & Padma Shri Awardee'
    ],
    quote: 'Stay curious, respect the bounce of the ball, and age will always be second to passion.',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/Achanta_Sharath_Kamal_2022.jpg/480px-Achanta_Sharath_Kamal_2022.jpg',
    accentColor: '#1E3A8A'
  }
];

export const getPlayersBySport = (sport: SportCategory): PlayerData[] => {
  return PLAYERS.filter((p) => p.sport === sport);
};

export const getPlayerBySlug = (slug: string): PlayerData | undefined => {
  const normalized = slug.toLowerCase().trim();
  return PLAYERS.find((p) => p.slug === normalized || p.id === normalized);
};
