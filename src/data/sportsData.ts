import { Article, SportCategory } from '../types';

export const SPORT_CATEGORIES: { name: SportCategory; emoji: string; count: number }[] = [
  { name: 'Cricket', emoji: '🏏', count: 18 },
  { name: 'Football', emoji: '⚽', count: 15 },
  { name: 'Hockey', emoji: '🏑', count: 9 },
  { name: 'Kabaddi', emoji: '🤼', count: 8 },
  { name: 'Tennis', emoji: '🎾', count: 7 },
  { name: 'Basketball', emoji: '🏀', count: 6 },
  { name: 'Badminton', emoji: '🏸', count: 5 },
  { name: 'Formula 1', emoji: '🏎️', count: 7 },
  { name: 'Boxing & Wrestling', emoji: '🥊', count: 4 },
  { name: 'Athletics', emoji: '🏃', count: 6 },
  { name: 'Other Sports', emoji: '🎯', count: 8 },
];

export const ARTICLES: Article[] = [
  {
    id: 'cricket-future-india',
    slug: 'indias-changing-cricket-landscape-next-era',
    category: 'Cricket',
    categoryEmoji: '🏏',
    title: "India's Changing Cricket Landscape: The Players Who Could Define the Next Era",
    subtitle: "A detailed look at the players, tactics, and trends shaping the sport across formats — from uncompromising strike rates to bowling polymaths.",
    author: 'Sports Desk',
    authorRole: 'Senior Cricket Correspondent',
    date: 'October 7, 2026',
    readTime: '12 min read',
    wordCount: 2840,
    heroCaption: 'Under the floodlights of Ahmedabad, the next generation executes aggressive strokes without the traditional conservatism of previous decades.',
    heroCredit: 'Photo: SportsPulse Editorial / High-Speed Sports Archive',
    accentColor: '#C8102E',
    isFeatured: true,
    isTrending: true,
    trendingRank: 1,
    keyTakeaways: [
      "The traditional doctrine of 'building an innings' has been replaced by a probabilistic maximization model, where powerplay dot-ball minimization supersedes personal preservation.",
      "Young batters are groomed on high-frequency boundary options against both spin and 145km/h hard lengths, altering the average strike rate by 18% over four seasons.",
      "Multi-dimensional bowling depth has transformed selections: specialist single-discipline players are losing ground to versatile all-phase tacticians.",
      "Red-ball transition remains the defining crucible, with domestic four-day technical resilience facing scrutiny against relentless overseas seaming conditions."
    ],
    sections: [
      {
        paragraphs: [
          "For almost half a century, the grammar of Indian batting was written in sentences of preservation. The foundational virtue was patience: leaving the swinging ball outside off-stump, wearing down the opposing attack through stubborn attrition, and earning the right to strike only once the shine had faded and the shadows lengthened across the outfield.",
          "That grammar is now being systematically rewritten. Watch Yashasvi Jaiswal meet an opening spell from Mitchell Starc or Kagiso Rabada in the first over of a Test morning, and you are not watching a batter searching for survival. You are watching an athlete who treats the first ten overs as an offensive territory, calculating angles, exploiting field gaps with ferocious back-foot cuts, and forcing captains into defensive field adjustments before the bowlers have even loosened their shoulders.",
          "What we are witnessing is not merely a cluster of gifted individuals experiencing a purple patch; it is an epochal doctrine shift in Indian cricket. From the red-soil pitches of Mumbai's Azad Maidan to the state-of-the-art biomechanics labs of the National Cricket Academy in Bengaluru, an entirely different archetype of cricketer has been engineered for the high-velocity demands of the mid-2020s."
        ]
      },
      {
        heading: "The Changing Landscape",
        level: 'h2',
        paragraphs: [
          "To understand how fundamentally the landscape has evolved, one must look closely at how modern scoring rates interact with risk management. In previous eras, a team scoring at 3.2 runs per over in Test cricket was considered dominant; today, the expectation routinely touches 4.5, even when conditions offer lateral movement.",
          "In white-ball formats, the change is even more acute. The old template—anchoring through overs 10 to 35 before exploding in the final ten—has been cast aside as statistically obsolete. Instead, modern tactical models view dot balls as irreparable resource leakages. A batter who scores 40 off 38 deliveries is no longer praised for 'steadiness'; their innings is analyzed through the lens of lost equity.",
          "Domestic pathways have adapted accordingly. The Ranji Trophy, long regarded as a sanctuary of classical restraint, now features batters who manipulate field settings through reverse-sweeps and ramps against express seamers. Scouts are no longer scouring the nation exclusively for defensive solidity; they want spatial awareness, boundary-option versatility, and an emotional indifference to failure."
        ],
        pullQuote: {
          text: "Cricket was once an art of containment. The modern cohort does not just embrace calculated risk; they calculate it down to the microsecond before executing without hesitation.",
          attribution: "Rahul Dravid, High Performance Advisory Panel"
        }
      },
      {
        heading: "Data Comparison: The Generational Velocity Shift",
        level: 'h3',
        paragraphs: [
          "The numbers substantiate what the naked eye observes. Across Indian Premier League matches, bilateral T20Is, and recent World Test Championship cycles, the velocity of scoring in the initial twelve deliveries of an innings has surged dramatically among players under 25 compared to the cohort of 2012–2018."
        ],
        statsTable: {
          title: "Generational Batting Metrics: First 15 Balls of Innings (2020–2026 vs 2012–2018)",
          columns: ["Cohort Era", "Powerplay Dot %", "Boundary Freq. (Balls)", "Avg Strike Rate", "Risk-Equity Index"],
          rows: [
            ["2012–2018 Cohort", "44.2%", "7.4 balls", "121.8", "68.4 / 100"],
            ["2019–2023 Cohort", "36.8%", "5.6 balls", "138.5", "79.1 / 100"],
            ["2024–2026 (New Gen)", "27.3%", "4.1 balls", "154.2", "91.8 / 100"]
          ],
          footnote: "Data aggregated across certified ICC & BCCI competitive fixture databases. Risk-Equity Index calculated based on expected match run contribution."
        }
      },
      {
        image: {
          caption: 'Yashasvi Jaiswal drives through extra cover during a morning session, holding his shape while exerting immense bat-speed.',
          credit: 'SportsPulse Analytics & Imagery / High Precision Sensor Capture',
          visualStyle: 'cricket'
        },
        heading: "The Players to Watch",
        level: 'h2',
        paragraphs: [
          "A generation is defined by its standard-bearers. At the summit of this movement stands Yashasvi Jaiswal, whose technical repertoire marries the wristy elegance of classic subcontinental batsmanship with the ferocious bat speed demanded by contemporary boundaries. His hunger for monumental centuries is old-fashioned; his tempo is revolutionary.",
          "Alongside him, Shubman Gill represents the refined synthesizer: an immaculate front-foot driver who can glide from classical defensive compact balance into sudden 160-strike-rate demolition without fracturing his shape. Where older critics questioned whether aesthetic purity could survive in the hyper-condensed format, Gill has proved that textbook balance is the ultimate foundation for power.",
          "Further down the order, Tilak Varma and Rinku Singh personify the nerve-center of crisis management. They are not merely sloggers; they possess an icy situational clarity, calculating required rates against specific bowling types and exploiting the short boundary with surgical precision."
        ],
        playerProfiles: [
          {
            name: "Yashasvi Jaiswal",
            role: "Left-Hand Opening Batter",
            team: "India / Mumbai",
            stats: "Test Avg: 63.8 · Strike Rate: 72.4 · 100s: 6 in 18 matches",
            bio: "Equipped with ruthless square cuts and a dominant aerial game against spin, Jaiswal has dismantled international attacks from Rajkot to Perth."
          },
          {
            name: "Shubman Gill",
            role: "Top-Order Batter / Captaincy Core",
            team: "India / Punjab",
            stats: "ODI Avg: 58.2 · Strike Rate: 102.5 · Double Century Club",
            bio: "A master of short-arm pull strokes and classical straight drives, combining effortless timing with modern power metrics."
          },
          {
            name: "Arshdeep Singh",
            role: "Left-Arm Fast-Medium Seamer",
            team: "India / Punjab",
            stats: "T20I Wickets: 92 · Death-Overs Economy: 8.12",
            bio: "The left-arm angle with late inward swing in the powerplay and pinpoint wide yorkers under high-pressure final overs."
          }
        ]
      },
      {
        video: {
          title: "Tactical Breakdown: The Anatomy of Jaiswal's High-Velocity Cover Drive",
          duration: "4:38",
          caption: "A frame-by-frame mechanical analysis showing bat swing trajectory, head position over the ball, and weight transfer at 142 km/h.",
          previewBadge: "HD TACTICAL REEL"
        },
        heading: "What This Means for the Future",
        level: 'h2',
        paragraphs: [
          "The implications of this transition extend far beyond individual averages. For opposing international teams, playing against India in any format now demands an overhaul of conventional fielding deployments. Traditional sweepers on the cover and mid-wicket boundaries are no longer sufficient to stem the bleeding, as these young batters possess 360-degree scoring arcs that weaponize third-man and fine-leg.",
          "Moreover, the bowling pipeline is adapting in tandem. Fast bowlers are no longer evaluated solely on raw pace; they must master scrambled-seam cutters, knuckleballs, and heavy yorkers while maintaining the stamina to bowl twenty overs of hostile bouncers in a five-day Test match.",
          "The challenge for Indian management will be calibration: protecting these players from physical burnout in an overcrowded calendar while ensuring that red-ball temperament is not cannibalized by the financial and psychological magnetism of franchise cricket.",
          "If the early evidence of 2026 is any barometer, Indian cricket is entering an era of unprecedented tactical assertiveness. The fear of failure has been exorcised, replaced by a ruthless, beautiful conviction that every ball is an opportunity to assert dominance."
        ]
      }
    ],
    tags: ['Cricket', 'Indian Cricket', 'Youth Movement', 'Tactical Analysis', 'World Test Championship', 'IPL']
  },
  {
    id: 'football-tactical-renaissance',
    slug: 'football-tactical-renaissance-positional-fluidity',
    category: 'Football',
    categoryEmoji: '⚽',
    title: "The Tactical Renaissance: Why Positional Fluidity Is Overhauling Asian & European Football",
    subtitle: "From inverted full-backs to box midfields, how modern managers are erasing traditional positions in favor of spatial control.",
    author: 'Elena Rostova',
    authorRole: 'Tactical Analyst & European Football Editor',
    date: 'October 6, 2026',
    readTime: '10 min read',
    wordCount: 2210,
    heroCaption: 'A high-press defensive block engages in rapid spatial compression during an elite continental showdown.',
    heroCredit: 'Photo: SportsPulse International / UEFA Champions League Lens',
    accentColor: '#1E3A8A',
    isTrending: true,
    trendingRank: 2,
    keyTakeaways: [
      "Rigid formations (4-3-3, 4-2-3-1) have become obsolete during the buildup phase, replaced by flexible 3-2-4-1 resting shapes.",
      "Goalkeepers and central defenders are now primary playmakers, completing more progressive passes than traditional central midfielders.",
      "The traditional number 10 has vanished, absorbed into dual attacking-8 roles operating in the half-spaces.",
      "Asian and Indian Super League clubs are adopting high-pressing transition matrices with striking tactical fidelity."
    ],
    sections: [
      {
        paragraphs: [
          "On the chalkboard in team dressing rooms across Manchester, Madrid, Munich, and Kolkata, the lines that once demarcated a player's territory have blurred beyond recognition. Ask a modern full-back what their position is, and they might tell you they defend the flank, build up as a holding midfielder, and occasionally finish as a false nine in the opponent's penalty box.",
          "Football in 2026 has completely decoupled itself from static formations. The numbers on team sheets—4-4-2, 4-3-3—are merely opening coordinates. Once the referee blows the whistle, the pitch transforms into a fluid geometric puzzle governed by space, time, and numerical superiority."
        ]
      },
      {
        heading: "The Disappearance of the Fixed Role",
        level: 'h2',
        paragraphs: [
          "For decades, football was structured around specialization. Wingers hugged touchlines to cross with their dominant foot; center-backs cleared danger without aesthetic pretense; strikers waited inside the 18-yard box for deliveries.",
          "Today, a center-back who cannot break lines with a 35-yard diagonal or carry the ball past the first pressing wave is practically unplayable at the top level. Goalkeepers are judged as much on their passing completion under pressure as their shot-stopping reflexes."
        ],
        pullQuote: {
          text: "Space is not a place you occupy; it is a relationship between where the ball is and where your teammate will arrive in two seconds.",
          attribution: "Mikel Arteta, Technical Seminar 2026"
        }
      },
      {
        heading: "The Half-Space Revolution",
        level: 'h2',
        paragraphs: [
          "The true battleground of modern football is the half-space—the vertical channel situated between the wing and the central corridor. By occupying both half-spaces simultaneously with two attacking midfielders while wingers pin the opposing full-backs wide, attacking teams create an unsolvable dilemma for low blocks.",
          "Defenders must either step out to challenge, creating gaps in behind, or stay compact and concede shooting opportunities from the edge of the penalty arc. The precision required to execute this choreography is why coaching training sessions resemble chess tournaments more than athletic drills."
        ]
      }
    ],
    tags: ['Football', 'Tactics', 'Champions League', 'ISL', 'Modern Coaching', 'Half-Spaces']
  },
  {
    id: 'kabaddi-30-second-chess',
    slug: 'physics-and-ferocity-modern-kabaddi-raid',
    category: 'Kabaddi',
    categoryEmoji: '🤼',
    title: "The Physics and Ferocity of the Kabaddi Raid: How 30 Seconds Became Sport's Purest Chess Match",
    subtitle: "Biomechanics, chain maneuvers, and psychological warfare inside the high-octane 13-meter battleground of Pro Kabaddi.",
    author: 'Vikramaditya Sen',
    authorRole: 'Combat & Indigenous Sports Editor',
    date: 'October 5, 2026',
    readTime: '11 min read',
    wordCount: 2450,
    heroCaption: 'A raider leaps horizontally in mid-air over a two-man ankle-hold attempt in the dying seconds of a do-or-die raid.',
    heroCredit: 'Photo: SportsPulse Editorial / High-Speed Flash Photography',
    accentColor: '#D97706',
    isTrending: true,
    trendingRank: 3,
    keyTakeaways: [
      "The 30-second raid clock forces a strict physiological split: 18 seconds of defensive probing followed by a 12-second explosive anaerobic burst.",
      "Corner defenders execute ankle holds with deceleration forces exceeding 1,200 Newtons, requiring defensive pairings to synchronize within 0.15 seconds.",
      "The 'Dubki' (ducking beneath a chain) and 'Frog Jump' (aerial leap over a diving cover) have become biomechanically refined weapons.",
      "Pro Kabaddi's television audience in Season 12 has rivaled global leagues, establishing an indigenous contact sport as a global spectacle."
    ],
    sections: [
      {
        paragraphs: [
          "Inside a 13-by-10 meter mat illuminated by thousands of lumens, one man steps forward into hostile territory. Behind him, his teammates are forbidden from offering aid. Ahead of him, seven men stand linked by hand in pairs, muscles taut, eyes tracking every tremor in his breathing.",
          "He has thirty seconds. In those thirty seconds, he must touch an opponent and escape back across the baulk line while uttering no breath of doubt. Welcome to the modern kabaddi raid: the fastest, purest distillation of human combat sports in the world today."
        ]
      },
      {
        heading: "The Geometry of the Chain Defense",
        level: 'h2',
        paragraphs: [
          "To the untrained spectator, kabaddi defense looks like an avalanche of human limbs. To a sports scientist, it is a fluid kinetic trap. Defenders work in linked pairs—the 'Cover' and the 'Corner'—connected at the wrist to create an elastic barrier.",
          "When the raider moves toward the right corner, the left cover shifts forward diagonally, closing the escape corridor like the jaws of a hydraulic clamp. If the raider hesitates for a quarter-second, the corner strikes at the ankle while the cover delivers an upper-body block that absorbs all kinetic momentum."
        ],
        pullQuote: {
          text: "You can be as strong as a bull, but if your chain communication is delayed by even five hundredths of a second, the raider slips through like water.",
          attribution: "Manpreet Singh, Master Coach"
        }
      },
      {
        video: {
          title: "Masterclass: Deconstructing the Perfect Dubki by Pardeep Narwal",
          duration: "3:45",
          caption: "Breakdown of the centre-of-gravity drop to 32cm off the mat while generating 8.2m/s forward horizontal slide beneath two converging defenders.",
          previewBadge: "COMBAT REEL"
        },
        heading: "The Do-or-Die Psychology",
        level: 'h2',
        paragraphs: [
          "The introduction of the 'Do-or-Die' rule—where two empty raids force a mandatory point on the third—transformed kabaddi from a conservative waiting game into a relentless tactical thrill ride. Coaches now calculate risk matrices during timeouts with stopwatch precision.",
          "Young raiders entering the league from Haryana, Maharashtra, and Tamil Nadu are athletes of extraordinary power-to-weight ratios: capable of squatting double their body weight while possessing the flexibility of gymnasts to slide their legs out from underneath a three-man tackle."
        ]
      }
    ],
    tags: ['Kabaddi', 'Pro Kabaddi', 'Biomechanics', 'Indigenous Sports', 'Combat Sports', 'India']
  },
  {
    id: 'hockey-resurgence-speed',
    slug: 'speed-synthetic-turf-indian-hockey-olympic-hegemony',
    category: 'Hockey',
    categoryEmoji: '🏑',
    title: "Resurgence of the Stick: Modern Hockey's Relentless Speed and India's Tactical Rebirth",
    subtitle: "How watered synthetic pitches, aerial scoops, and penalty-corner science transformed field hockey into the fastest ball sport on turf.",
    author: 'Harpreet Sandhu',
    authorRole: 'Field Hockey Correspondent',
    date: 'October 4, 2026',
    readTime: '9 min read',
    wordCount: 1950,
    heroCaption: 'A drag-flicker coils into release position, unleashing a ball clocked at 122 km/h into the top corner.',
    heroCredit: 'Photo: International Hockey Archives / SportsPulse',
    accentColor: '#059669',
    isTrending: true,
    trendingRank: 4,
    keyTakeaways: [
      "The elimination of offsides and introduction of self-passes increased active playing time and transition frequency by over 35%.",
      "Modern watered turf allows ball travel speeds exceeding 130 km/h, requiring goalkeepers to react in under 0.22 seconds.",
      "The Indian team's Olympic podium consistency is anchored by sports science, endurance GPS monitoring, and Dutch tactical pressing.",
      "Drag-flick conversion rates remain the single most decisive statistical correlation to tournament victories."
    ],
    sections: [
      {
        paragraphs: [
          "For decades after the introduction of artificial turf in the late 1970s, romantic lamentations dominated subcontinental hockey conversations. The glorious natural-grass era—where wizards like Dhyan Chand mesmerized defenders with velvet wrists—had given way to brute European physicality, carbon-fiber composite sticks, and mechanical running.",
          "Yet today, the wheel has turned full circle. India has not merely adapted to the lightning tempo of watered blue poly-turf; it has infused that mechanical structure with the instinctive improvisation that has always lived in the DNA of Indian hockey. The result is a team that can out-sprint Belgium, out-muscle Australia, and out-think Germany on the biggest stages in world sport."
        ]
      },
      {
        heading: "The Science of the Drag Flick",
        level: 'h2',
        paragraphs: [
          "No play in modern sport is more brutally condensed than the penalty corner drag-flick. From the moment the ball is injected from the backline to the moment it crashes into the goalboard, barely 1.8 seconds elapse.",
          "In that window, the injector must deliver a flat pass at 70 km/h, the stopper must cushion the rolling sphere on the circle edge without bounce, and the drag-flicker must channel the rotational force of their entire torso through a customized hook stick to propel a hard plastic projectile at 120 km/h into an area no larger than a shoebox."
        ]
      }
    ],
    tags: ['Hockey', 'Indian Hockey', 'Olympics', 'Penalty Corner', 'FIH Pro League']
  },
  {
    id: 'tennis-post-big-three-velocity',
    slug: 'post-big-three-velocity-shift-grand-slam-tennis',
    category: 'Tennis',
    categoryEmoji: '🎾',
    title: "The Post-Big Three Velocity Shift: How Heavy Forehands & 140mph Returns Remapped Grand Slams",
    subtitle: "Inside the era of Carlos Alcaraz, Jannik Sinner, and the new baseline artillery that made defense an act of offensive violence.",
    author: 'Mateo Rossi',
    authorRole: 'Tour Tennis Correspondent',
    date: 'October 3, 2026',
    readTime: '8 min read',
    wordCount: 1820,
    heroCaption: 'Jannik Sinner strikes an open-stance backhand crosscourt at 88 mph, driving the ball within two inches of the baseline.',
    heroCredit: 'Photo: ATP Tour Archive / SportsPulse Lens',
    accentColor: '#0284C7',
    isTrending: true,
    trendingRank: 5,
    keyTakeaways: [
      "Average forehand speeds on the men's tour have risen by 6 mph in three years, with players sliding on hard courts like clay.",
      "Rally lengths of 9+ shots have declined as second-serve return aggression forces immediate court-position surrender.",
      "Recovery technology, cold immersion, and micro-nutrition enable five-set high-velocity sustainability into the fifth hour."
    ],
    sections: [
      {
        paragraphs: [
          "When Roger Federer, Rafael Nadal, and Novak Djokovic held Grand Slam tennis in their golden vice, tennis was an exquisite war of attrition and classical geometry. Federer danced on air; Nadal battered you with 3,500 RPM topspin until your spirit yielded; Djokovic suffocated you by placing every return on your shoelaces.",
          "Today's reigning kings do not dance, and they do not suffocate. They detonate. To watch Carlos Alcaraz or Jannik Sinner on a fast hard court is to witness the speed of light rendered in yellow felt."
        ]
      },
      {
        heading: "Offensive Defense as the New Standard",
        level: 'h2',
        paragraphs: [
          "In the 2000s, being stretched wide meant floating a defensive slice to buy recovery time. If you float a defensive slice against Sinner in 2026, the point is already over. Today's players slide six feet past the tramlines and hit full-throttle open-stance lasers that hit the corner at 92 mph. Defense is no longer about survival; it is an ambush."
        ]
      }
    ],
    tags: ['Tennis', 'Grand Slam', 'Alcaraz', 'Sinner', 'ATP Tour', 'Biomechanics']
  },
  {
    id: 'f1-ground-effect-dirty-air',
    slug: 'formula-one-ground-effect-aerodynamics-regulations',
    category: 'Formula 1',
    categoryEmoji: '🏎️',
    title: "Ground Effect Aerodynamics & The Dirty Air Dilemma: Why 2026 Engine Rules Shift the Grid",
    subtitle: "Inside the 50/50 electrical combustion split, active aerodynamics, and the engineering war between Red Bull, Ferrari, and Mercedes.",
    author: 'Christian Vane',
    authorRole: 'Motorsport Technical Editor',
    date: 'October 2, 2026',
    readTime: '10 min read',
    wordCount: 2150,
    heroCaption: 'An F1 challenger cuts through the spray of Spa-Francorchamps, downforce floor venturis generating tons of atmospheric suction.',
    heroCredit: 'Photo: Formula 1 Engineering Archive / SportsPulse',
    accentColor: '#DC2626',
    keyTakeaways: [
      "The 2026 engine regulations mandate 350kW from the MGU-K, equaling the internal combustion engine's output for the first time.",
      "Active front and rear wings switch automatically between high-downforce cornering and low-drag straightline modes.",
      "Sustainable fuels with 100% advanced bio-origins have achieved parity with traditional petrochemical compounds."
    ],
    sections: [
      {
        paragraphs: [
          "Down the Kemmel Straight at Spa or through the flat-out curves of Suzuka, a Formula 1 car is less of an automobile and more of an inverted fighter jet fighting against the boundary layers of the atmosphere.",
          "The 2026 technical regulations represent the most radical philosophical reset in fifty years of Grand Prix racing. By ditching the expensive MGU-H and scaling the kinetic motor generator to an astonishing 350 kilowatts, Formula 1 has forced engineers to reinvent power delivery from scratch."
        ]
      },
      {
        heading: "The Active Aero Revolution",
        level: 'h2',
        paragraphs: [
          "With so much electrical power deployed down the straights, cars threatened to run out of battery before reaching the braking zone. The solution? Movable aerodynamic surfaces. In corners, wings open to deliver crushing downforce; on straights, they trim out into ultra-low-drag slivers."
        ]
      }
    ],
    tags: ['Formula 1', 'Engineering', 'Aerodynamics', 'Motorsport', 'Ferrari', 'Red Bull']
  },
  {
    id: 'badminton-400kmh-shuttle',
    slug: 'the-400-kmh-shuttle-relentless-reflexes-modern-badminton',
    category: 'Badminton',
    categoryEmoji: '🏸',
    title: "The 400 km/h Shuttle: Inside the Relentless Reflexes of Modern Badminton Rallies",
    subtitle: "How lighter graphite frames and lightning net deception turned badminton into the fastest racket sport on Earth.",
    author: 'Priya Nambiar',
    authorRole: 'Racket Sports Analyst',
    date: 'October 1, 2026',
    readTime: '7 min read',
    wordCount: 1650,
    heroCaption: 'A jump-smash executed at full apex, racquet head accelerating through the air at supersonic speeds.',
    heroCredit: 'Photo: BWF World Tour Lens / SportsPulse',
    accentColor: '#7C3AED',
    keyTakeaways: [
      "Smash speeds regularly surpass 450 km/h, leaving net defenders with under 0.12 seconds to react and orient the racket face.",
      "Cardiovascular loads in a 70-minute badminton duel exceed that of a half-marathon, with players covering miles of lunges.",
      "Asian dominance across men's and women's singles is driven by early technical specialization in deceptive tumbling net shots."
    ],
    sections: [
      {
        paragraphs: [
          "To understand the sensory madness of elite badminton, consider this simple equation: a goose-feather shuttlecock leaves the sweet spot of a carbon-frame racket at speeds exceeding 450 kilometers per hour. That is faster than an F1 car at Monza, faster than a high-speed maglev train, faster than any projectile struck in human sport.",
          "And yet, standing barely five meters away on the opposite side of the net, another human being doesn't merely dodge it; they position the mesh of their strings to feather the cork into an unplayable tumbling drop shot that grazes the white tape."
        ]
      }
    ],
    tags: ['Badminton', 'BWF', 'Smash Speed', 'Racket Sports', 'Sensory Reflexes']
  },
  {
    id: 'athletics-sub-880-sprint',
    slug: 'sub-880-sprint-barrier-biomechanics-spikes',
    category: 'Athletics',
    categoryEmoji: '🏃',
    title: "The Sub-8.80 Sprint Barrier: Biomechanics, Spikes, and the Future of Human Acceleration",
    subtitle: "How stiff carbon plates, energy-return foams, and stride frequency algorithms are rewriting the physiological limits of the 100 meters.",
    author: 'Marcus Vance',
    authorRole: 'Track & Field Science Specialist',
    date: 'September 30, 2026',
    readTime: '9 min read',
    wordCount: 2010,
    heroCaption: 'Sprinters explode out of starting blocks, foot strikes generating vertical ground reaction forces five times their body weight.',
    heroCredit: 'Photo: World Athletics Archive / SportsPulse Track Camera',
    accentColor: '#EA580C',
    keyTakeaways: [
      "Ground contact times during top-end sprint speed measure between 0.08 and 0.09 seconds.",
      "Super-spikes featuring stiff curved carbon plates reduce metatarsophalangeal energy loss by 1.8%.",
      "The next barrier is not stride length, but optimizing front-side mechanics to eliminate braking forces upon touchdown."
    ],
    sections: [
      {
        paragraphs: [
          "Every hundredth of a second in the 100-meter sprint represents roughly eleven centimeters of track. When Usain Bolt stopped the clock at 9.58 seconds in Berlin in 2009, exercise physiologists declared that human biology had approached its asymptote.",
          "Seventeen years later, the frontier is shifting again. Armed with high-speed motion capture cameras, pressure-sensing track surfaces, and custom-tuned carbon spike plates, researchers and coaches are dissecting the exact millisecond where energy transfers into propulsion."
        ]
      }
    ],
    tags: ['Athletics', 'Track & Field', 'Sprint Biomechanics', 'World Athletics', 'Sports Science']
  },
  {
    id: 'basketball-space-and-pace',
    slug: 'basketball-space-and-pace-global-evolution',
    category: 'Basketball',
    categoryEmoji: '🏀',
    title: "Beyond the Arc: How Deep Spacing and Positionless Big Men Conquered the Global Court",
    subtitle: "From Victor Wembanyama to the FIBA World Cup, how 7-foot unicorns with guard handles redefined international basketball.",
    author: 'Jordan Hayes',
    authorRole: 'Hoops & Analytics Editor',
    date: 'September 29, 2026',
    readTime: '8 min read',
    wordCount: 1780,
    heroCaption: 'A 7-foot-3 center pulls up from 30 feet out, forcing the defensive anchor outside the paint.',
    heroCredit: 'Photo: FIBA / NBA International Archive',
    accentColor: '#D97706',
    keyTakeaways: [
      "Traditional back-to-the-basket centers have virtually vanished from top-tier international and NBA rotations.",
      "Shot charts now show heavy concentration strictly at the rim and beyond the 3-point line, eradicating contested mid-rangers.",
      "European and global player development programs emphasize ball-handling and vision for players of all heights from age eight."
    ],
    sections: [
      {
        paragraphs: [
          "If you showed a basketball scout from 1995 video footage of a 7-foot-4 athlete bringing the ball up against a full-court press, executing a crossover dribble, and stepping back into a 28-foot three-pointer, they would assume you were showing a science-fiction video game simulation.",
          "Today, that is simply an ordinary Tuesday night for modern basketball. The sport's traditional positions—point guard, shooting guard, small forward, power forward, center—have collapsed into a single unified philosophy: positionless playmakers who can shoot, switch, and pass regardless of their physical dimensions."
        ]
      }
    ],
    tags: ['Basketball', 'NBA', 'FIBA', 'Analytics', 'Wembanyama', 'Tactics']
  },
  {
    id: 'boxing-wrestling-olympic-mat',
    slug: 'wrestling-akhada-to-olympic-podium-indian-grit',
    category: 'Boxing & Wrestling',
    categoryEmoji: '🥊',
    title: "From Clay Akhadas to Olympic Gold: The Relentless Discipline of Indian Wrestling",
    subtitle: "Inside the mud-stained training grounds of Haryana and Kolhapur where Olympic champions are forged through clay and sweat.",
    author: 'Vikramaditya Sen',
    authorRole: 'Combat Sports Editor',
    date: 'September 28, 2026',
    readTime: '9 min read',
    wordCount: 1980,
    heroCaption: 'Pehelwans train at dawn, wrestling in freshly tilled red clay mixed with mustard oil and turmeric.',
    heroCredit: 'Photo: SportsPulse Documentary Expedition / Haryana',
    accentColor: '#B91C1C',
    keyTakeaways: [
      "Traditional dangal wrestling provides the core core-stability and mental toughness that transitions onto Olympic polyurethane mats.",
      "Women wrestlers from small villages in Haryana have created one of the most remarkable social and athletic transformations in South Asian history.",
      "Modern training regimes integrate centuries-old mud conditioning with sports nutrition, video review, and recovery cryotherapy."
    ],
    sections: [
      {
        paragraphs: [
          "At four in the morning, before the winter mist has lifted from the sugarcane fields of Haryana, the sound begins: the rhythmic thud of bodies hitting the tilled red earth. Here, in the traditional akhadas, wrestling is not an extracurricular hobby; it is a sacred tapasya, an all-consuming way of life.",
          "In the pit, soil is blended with mustard oil, ghee, rose water, and turmeric—an ancient formula designed to heal abrasions and test grip strength. From these muddy pits, a quiet revolution has marched onto the world stage, producing world champions and Olympic medalists who refuse to be intimidated by anyone."
        ]
      }
    ],
    tags: ['Wrestling', 'Boxing & Wrestling', 'Olympics', 'Haryana', 'Pehelwan', 'Combat Sports']
  },
  {
    id: 'other-sports-chess-table-tennis',
    slug: 'india-chess-golden-generation-candidates-champion',
    category: 'Other Sports',
    categoryEmoji: '🎯',
    title: "The Chess Renaissance: Inside the Mind Laboratory of India's Teenage Grandmasters",
    subtitle: "How an ecosystem of dedicated academies, supercomputer engines, and fearlessness placed the Indian flag atop the chess world.",
    author: 'Anandita Roy',
    authorRole: 'Mind Sports & Strategy Editor',
    date: 'September 27, 2026',
    readTime: '8 min read',
    wordCount: 1850,
    heroCaption: 'A deep evaluation position analyzed on the board, silent clock ticking down in the final five minutes.',
    heroCredit: 'Photo: FIDE / SportsPulse Chess Desk',
    accentColor: '#047857',
    keyTakeaways: [
      "India boasts more top-20 grandmasters under the age of 21 than any other nation in modern chess history.",
      "Modern neural-network engines (Stockfish 17, Leela Chess Zero) have demystified classical opening dogmas.",
      "The legacy of Viswanathan Anand has evolved into a structured institutional pipeline nurturing prodigies from age seven."
    ],
    sections: [
      {
        paragraphs: [
          "In a quiet room with black and white wooden pieces and a digital DGT clock, a war of ideas is waged without a single word spoken. The silence is deafening; the heart rates of the competitors rival that of marathon runners.",
          "India has emerged as the undisputed epicenter of international chess. What began as one legendary pioneer, Viswanathan Anand, winning five world championships has blossomed into a constellation of young masters who fear no one—not even Magnus Carlsen."
        ]
      }
    ],
    tags: ['Chess', 'Other Sports', 'Grandmasters', 'Mind Sports', 'FIDE', 'India']
  }
];

export const TRENDING_STORIES = ARTICLES.filter(a => a.isTrending).sort((a, b) => (a.trendingRank || 99) - (b.trendingRank || 99));

export const LATEST_STORIES = ARTICLES.slice(0, 6);

export const CRICKET_ARTICLES = ARTICLES.filter(a => a.category === 'Cricket');
export const FOOTBALL_ARTICLES = ARTICLES.filter(a => a.category === 'Football');
export const KABADDI_ARTICLES = ARTICLES.filter(a => a.category === 'Kabaddi');
export const HOCKEY_ARTICLES = ARTICLES.filter(a => a.category === 'Hockey');
