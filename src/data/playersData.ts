import { PlayerData, SportCategory } from '../types';

export const PLAYERS: PlayerData[] = [
  // 🏏 Cricket
  {
    id: 'jaiswal',
    name: 'Yashasvi Jaiswal',
    sport: 'Cricket',
    role: 'Opening Batter',
    team: 'India / Rajasthan',
    nationality: 'India',
    jerseyNumber: 64,
    stats: 'Test Avg: 63.8 · Strike Rate: 72.4 · 2x Double 100s',
    bio: 'The left-handed run machine combining relentless hunger with fearless powerplay boundaries.',
    quote: 'Every ball in red-ball cricket gives you a window to dictate terms.',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Yashasvi_Jaiswal_in_2023.jpg/480px-Yashasvi_Jaiswal_in_2023.jpg',
    accentColor: '#C8102E'
  },
  {
    id: 'gill',
    name: 'Shubman Gill',
    sport: 'Cricket',
    role: 'Top-Order Batter',
    team: 'India / Gujarat Titans',
    nationality: 'India',
    jerseyNumber: 77,
    stats: 'ODI Avg: 58.2 · Strike Rate: 102.5 · 200 Club',
    bio: 'Pure aesthetic elegance converted into modern power metrics across all three international formats.',
    quote: 'Balance at the point of impact is where true bat speed generates.',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Shubman_Gill_2023.jpg/480px-Shubman_Gill_2023.jpg',
    accentColor: '#1E3A8A'
  },
  {
    id: 'bumrah',
    name: 'Jasprit Bumrah',
    sport: 'Cricket',
    role: 'Premier Fast Bowler',
    team: 'India / Mumbai Indians',
    nationality: 'India',
    jerseyNumber: 93,
    stats: 'Test Wickets: 165+ · Bowling Avg: 20.2 · Economy: 2.7',
    bio: 'The generational bowling polymath possessing hyperspeed reverse-swing and pinpoint yorkers.',
    quote: 'Pace is an asset, but accuracy and seam orientation win Test matches.',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/Jasprit_Bumrah_in_2023.jpg/480px-Jasprit_Bumrah_in_2023.jpg',
    accentColor: '#0284C7'
  },
  {
    id: 'arshdeep',
    name: 'Arshdeep Singh',
    sport: 'Cricket',
    role: 'Left-Arm Fast Seamer',
    team: 'India / Punjab Kings',
    nationality: 'India',
    jerseyNumber: 2,
    stats: 'T20I Wickets: 95 · Death Overs Economy: 8.1',
    bio: 'The high-pressure specialist mastering wide yorkers and late inward swinging deliveries.',
    quote: 'Under pressure, backing your execution is the only variable that counts.',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Arshdeep_Singh_2022.jpg/480px-Arshdeep_Singh_2022.jpg',
    accentColor: '#B91C1C'
  },

  // ⚽ Football
  {
    id: 'mbappe',
    name: 'Kylian Mbappé',
    sport: 'Football',
    role: 'Forward / Winger',
    team: 'Real Madrid / France',
    nationality: 'France',
    jerseyNumber: 9,
    stats: '300+ Career Goals · Top Speed: 38.0 km/h · World Cup Golden Boot',
    bio: 'Unmatched acceleration and lethal composure in the final third, redefining European transitions.',
    quote: 'Speed without tactical precision is just running.',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/2019-06-11_Fu%C3%9Fball%2C_M%C3%A4nner%2C_L%C3%A4nderspiel%2C_Andorra_-_Frankreich_StP_1021_LR10_by_Stepro_%28cropped%29.jpg/480px-2019-06-11_Fu%C3%9Fball%2C_M%C3%A4nner%2C_L%C3%A4nderspiel%2C_Andorra_-_Frankreich_StP_1021_LR10_by_Stepro_%28cropped%29.jpg',
    accentColor: '#1E3A8A'
  },
  {
    id: 'haaland',
    name: 'Erling Haaland',
    sport: 'Football',
    role: 'Striker',
    team: 'Manchester City / Norway',
    nationality: 'Norway',
    jerseyNumber: 9,
    stats: 'Premier League Record 36 Goals · 1.05 Goals/90 min',
    bio: 'A physical titan inside the penalty box with superhuman anticipation and kinetic finishing.',
    quote: 'My only job is to touch the ball into the net.',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/07/Erling_Haaland_2023_%28cropped%29.jpg/480px-Erling_Haaland_2023_%28cropped%29.jpg',
    accentColor: '#0284C7'
  },
  {
    id: 'bellingham',
    name: 'Jude Bellingham',
    sport: 'Football',
    role: 'Attacking Midfielder',
    team: 'Real Madrid / England',
    nationality: 'England',
    jerseyNumber: 5,
    stats: 'Duels Won: 72% · Clutch 90+ min Winners: 8',
    bio: 'The complete modern box-to-box maestro combining defensive bite with box-crashing leadership.',
    quote: 'Pressure is a privilege when you wear this shirt.',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/Jude_Bellingham_2024.jpg/480px-Jude_Bellingham_2024.jpg',
    accentColor: '#D97706'
  },
  {
    id: 'chhangte',
    name: 'Lallianzuala Chhangte',
    sport: 'Football',
    role: 'Winger / Playmaker',
    team: 'Mumbai City / India',
    nationality: 'India',
    jerseyNumber: 7,
    stats: 'ISL Golden Ball · 16 Goal Contributions · 34.8 km/h',
    bio: 'The speed merchant and two-footed technician spearheading Indian football’s offensive renaissance.',
    quote: 'Indian football is ready to take the next tactical leap.',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/Lallianzuala_Chhangte.jpg/480px-Lallianzuala_Chhangte.jpg',
    accentColor: '#0EA5E9'
  },

  // 🤼 Kabaddi
  {
    id: 'pardeep',
    name: 'Pardeep Narwal',
    sport: 'Kabaddi',
    role: 'Dubki King / Lead Raider',
    team: 'Bengaluru Bulls / India',
    nationality: 'India',
    jerseyNumber: 9,
    stats: '1,700+ Raid Points · 80+ Super Raids · 3x PKL Champion',
    bio: 'The record-shattering titan whose low-gravity Dubki transformed kabaddi raiding into art.',
    quote: 'When the chain closes, drop your center of gravity and strike forward.',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/Pardeep_Narwal_in_2019.jpg/480px-Pardeep_Narwal_in_2019.jpg',
    accentColor: '#D97706'
  },
  {
    id: 'pawan',
    name: 'Pawan Sehrawat',
    sport: 'Kabaddi',
    role: 'High-Flyer Raider',
    team: 'Telugu Titans / India',
    nationality: 'India',
    jerseyNumber: 17,
    stats: '1,200+ Raid Points · 39 Pts Single Match Record',
    bio: 'The athletic phenomenon known for his gravity-defying Frog Jump over advancing defensive covers.',
    quote: 'In thirty seconds, fear is a luxury no raider can afford.',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Pawan_Sehrawat.jpg/480px-Pawan_Sehrawat.jpg',
    accentColor: '#DC2626'
  },
  {
    id: 'naveen',
    name: 'Naveen Kumar',
    sport: 'Kabaddi',
    role: 'Naveen Express / Raider',
    team: 'Dabang Delhi KC',
    nationality: 'India',
    jerseyNumber: 10,
    stats: 'Fastest to 1,000 Raid Points · 28 Consecutive Super 10s',
    bio: 'Lightning-fast toe touches and agility that leave opposing corners frozen in their stance.',
    quote: 'Speed forces defenders to hesitate; hesitation creates the gap.',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/Naveen_Kumar_Goyat.jpg/480px-Naveen_Kumar_Goyat.jpg',
    accentColor: '#2563EB'
  },
  {
    id: 'fazel',
    name: 'Fazel Atrachali',
    sport: 'Kabaddi',
    role: 'Sultan / Left Corner Defender',
    team: 'Bengal Warriors / Iran',
    nationality: 'Iran',
    jerseyNumber: 1,
    stats: '500+ Tackle Points · 30+ High 5s · 2x Best Defender',
    bio: 'The Iranian powerhouse and fiercest defensive anchor in Pro Kabaddi history.',
    quote: 'The corner is the guardian of the mat. No one passes without payment.',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/Fazel_Atrachali_2018.jpg/480px-Fazel_Atrachali_2018.jpg',
    accentColor: '#059669'
  },

  // 🏑 Hockey
  {
    id: 'harmanpreet',
    name: 'Harmanpreet Singh',
    sport: 'Hockey',
    role: 'Drag-Flicker & Captain',
    team: 'India Men’s Hockey Team',
    nationality: 'India',
    jerseyNumber: 13,
    stats: '2x Olympic Bronze Medalist · 180+ Goals · 122 km/h Drag Flick',
    bio: 'The world’s most feared penalty corner specialist and inspirational leader of modern Indian hockey.',
    quote: 'A penalty corner is won in training sessions under exhaustion.',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Harmanpreet_Singh_2022.jpg/480px-Harmanpreet_Singh_2022.jpg',
    accentColor: '#047857'
  },
  {
    id: 'sreejesh',
    name: 'PR Sreejesh',
    sport: 'Hockey',
    role: 'Goalkeeper / "The Wall"',
    team: 'India Men’s Hockey Team (Legend)',
    nationality: 'India',
    jerseyNumber: 16,
    stats: '2x Olympic Medalist · 330+ Caps · 0.18s Reaction Time',
    bio: 'The legendary shot-stopper whose heroics delivered historic back-to-back Olympic podium finishes.',
    quote: 'Behind me there is only the net. That is where the buck stops.',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/P._R._Sreejesh_2022.jpg/480px-P._R._Sreejesh_2022.jpg',
    accentColor: '#1E3A8A'
  },
  {
    id: 'hardik',
    name: 'Hardik Singh',
    sport: 'Hockey',
    role: 'Midfield Playmaker',
    team: 'India Men’s Hockey Team',
    nationality: 'India',
    jerseyNumber: 8,
    stats: 'FIH Player of the Year Nominee · 85% Pass Completion',
    bio: 'The high-octane engine controlling the transition tempo between defense and blistering attack.',
    quote: 'Control the middle 30 meters, and you control the match.',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Hardik_Singh_2022.jpg/480px-Hardik_Singh_2022.jpg',
    accentColor: '#0284C7'
  },

  // 🎾 Tennis
  {
    id: 'alcaraz',
    name: 'Carlos Alcaraz',
    sport: 'Tennis',
    role: 'All-Court Phenom',
    team: 'Spain / ATP Tour',
    nationality: 'Spain',
    jerseyNumber: 'ATP #1',
    stats: '4x Grand Slam Champion · Forehand Avg: 84 mph · 82% Win Rate',
    bio: 'Explosive athleticism, devastating drop shots, and the spirit of a Spanish warrior.',
    quote: 'I play with heart, head, and balls on every single point.',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/Carlos_Alcaraz_%28ESP%29_2023.jpg/480px-Carlos_Alcaraz_%28ESP%29_2023.jpg',
    accentColor: '#EA580C'
  },
  {
    id: 'sinner',
    name: 'Jannik Sinner',
    sport: 'Tennis',
    role: 'Baseline Ballistic',
    team: 'Italy / ATP Tour',
    nationality: 'Italy',
    jerseyNumber: 'ATP #1',
    stats: 'Australian & US Open Champion · Backhand RPM: 3,200',
    bio: 'Icy baseline composure unleashing continuous 90mph artillery down the tramlines.',
    quote: 'Consistency is doing the extraordinary things on ordinary days.',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Jannik_Sinner_2023.jpg/480px-Jannik_Sinner_2023.jpg',
    accentColor: '#DC2626'
  },

  // 🏎️ Formula 1
  {
    id: 'verstappen',
    name: 'Max Verstappen',
    sport: 'Formula 1',
    role: 'Lead Driver',
    team: 'Red Bull Racing',
    nationality: 'Netherlands',
    jerseyNumber: 1,
    stats: '4x World Champion · 60+ GP Wins · 19 Wins in a Single Season',
    bio: 'Unrelenting mechanical mastery, surgical apex placement, and total tactical dominance.',
    quote: 'Simply lovely. We pushed every limit of the chassis today.',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Max_Verstappen_2023.jpg/480px-Max_Verstappen_2023.jpg',
    accentColor: '#1E3A8A'
  },
  {
    id: 'hamilton',
    name: 'Lewis Hamilton',
    sport: 'Formula 1',
    role: '7x World Champion',
    team: 'Scuderia Ferrari',
    nationality: 'Great Britain',
    jerseyNumber: 44,
    stats: '105+ GP Wins · 104 Pole Positions · 7 World Titles',
    bio: 'The historic benchmark for speed in changing weather and race-craft excellence.',
    quote: 'Still we rise. Every apex is a dialogue with destiny.',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Lewis_Hamilton_2022_Bahrain.jpg/480px-Lewis_Hamilton_2022_Bahrain.jpg',
    accentColor: '#DC2626'
  },

  // 🏸 Badminton
  {
    id: 'sindhu',
    name: 'PV Sindhu',
    sport: 'Badminton',
    role: 'Singles Legend',
    team: 'India / BWF Tour',
    nationality: 'India',
    jerseyNumber: 'IND',
    stats: '2x Olympic Medalist · World Champion · 5 World Medals',
    bio: 'Steep attacking smashes and towering reach that established India on the Olympic podium.',
    quote: 'You have to fight for every point; no one gives you an Olympic medal.',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/P._V._Sindhu_2022.jpg/480px-P._V._Sindhu_2022.jpg',
    accentColor: '#7C3AED'
  },
  {
    id: 'lakshya',
    name: 'Lakshya Sen',
    sport: 'Badminton',
    role: 'Singles Dynamo',
    team: 'India / BWF Tour',
    nationality: 'India',
    jerseyNumber: 'IND',
    stats: 'All England Finalist · Commonwealth Gold · Olympic Semi-finalist',
    bio: 'Relentless court retrieval, lightning dives, and supersonic cross-court jump smashes.',
    quote: 'If the shuttle is off the floor, the rally is still alive.',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/86/Lakshya_Sen_2022.jpg/480px-Lakshya_Sen_2022.jpg',
    accentColor: '#2563EB'
  },

  // 🏃 Athletics
  {
    id: 'neeraj',
    name: 'Neeraj Chopra',
    sport: 'Athletics',
    role: 'Javelin Thrower',
    team: 'India / World Athletics',
    nationality: 'India',
    jerseyNumber: 'IND',
    stats: 'Olympic Gold & Silver · World Champion · PB: 89.94m',
    bio: 'The national hero who unlocked India’s athletic zenith through explosive runway biomechanics.',
    quote: 'When the spear leaves your fingers cleanly, your soul knows the distance.',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/Neeraj_Chopra_in_2023.jpg/480px-Neeraj_Chopra_in_2023.jpg',
    accentColor: '#D97706'
  },
  {
    id: 'lyles',
    name: 'Noah Lyles',
    sport: 'Athletics',
    role: 'Sprinter',
    team: 'USA / World Athletics',
    nationality: 'USA',
    jerseyNumber: 'USA',
    stats: '100m Olympic Champion · 3x 200m World Champion · PB: 9.79s',
    bio: 'The showman of sprinting whose top-end stride frequency shreds opponents in the second 50 meters.',
    quote: 'I am the fastest man on this planet. Watch the clock.',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/Noah_Lyles_2023.jpg/480px-Noah_Lyles_2023.jpg',
    accentColor: '#DC2626'
  },

  // 🏀 Basketball
  {
    id: 'wembanyama',
    name: 'Victor Wembanyama',
    sport: 'Basketball',
    role: 'Unicorn Center',
    team: 'San Antonio Spurs / France',
    nationality: 'France',
    jerseyNumber: 1,
    stats: '7ft 4in · 3.6 Blocks/game · 21.4 PPG · 8ft Wingspan',
    bio: 'The rarest specimen in basketball history: an 8-foot wingspan handling and shooting like a point guard.',
    quote: 'Limits are self-imposed. I want to build a new way to play.',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Victor_Wembanyama_2023.jpg/480px-Victor_Wembanyama_2023.jpg',
    accentColor: '#18181B'
  },
  {
    id: 'jokic',
    name: 'Nikola Jokić',
    sport: 'Basketball',
    role: 'Point Center',
    team: 'Denver Nuggets / Serbia',
    nationality: 'Serbia',
    jerseyNumber: 15,
    stats: '3x NBA MVP · 130+ Triple-Doubles · 26.4 PPG, 12.4 RPG, 9.0 APG',
    bio: 'The ultimate cerebral mastermind, seeing passes two steps before defenders anticipate the angle.',
    quote: 'Basketball is about passing. When you pass, two people are happy.',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Nikola_Joki%C4%87_2023.jpg/480px-Nikola_Joki%C4%87_2023.jpg',
    accentColor: '#0284C7'
  },

  // 🥊 Boxing & Wrestling
  {
    id: 'vinesh',
    name: 'Vinesh Phogat',
    sport: 'Boxing & Wrestling',
    role: 'Freestyle Wrestler',
    team: 'India / World Wrestling',
    nationality: 'India',
    jerseyNumber: 'IND',
    stats: '3x Olympian · World Championship Medalist · Asian Games Gold',
    bio: 'The lioness of Indian combat sport whose unyielding resilience inspired millions across the subcontinent.',
    quote: 'The mat is where dignity is defended through sweat and honor.',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Vinesh_Phogat_2022.jpg/480px-Vinesh_Phogat_2022.jpg',
    accentColor: '#B91C1C'
  },
  {
    id: 'aman',
    name: 'Aman Sehrawat',
    sport: 'Boxing & Wrestling',
    role: 'Freestyle Wrestler (57kg)',
    team: 'India / Chhatrasal Stadium',
    nationality: 'India',
    jerseyNumber: 'IND',
    stats: 'Olympic Bronze Medalist (Paris) · Asian Champion',
    bio: 'The young warrior from Haryana carrying forward India’s unbroken Olympic wrestling legacy.',
    quote: 'Every gram cut and every bruise is for the tricolor.',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/Aman_Sehrawat_2023.jpg/480px-Aman_Sehrawat_2023.jpg',
    accentColor: '#EA580C'
  },

  // 🎯 Other Sports (Chess)
  {
    id: 'gukesh',
    name: 'D Gukesh',
    sport: 'Other Sports',
    role: 'World Championship Challenger',
    team: 'India / FIDE Chess',
    nationality: 'India',
    jerseyNumber: 'FIDE 2794',
    stats: 'Youngest Candidates Winner in History (17 yrs) · Olympiad Gold',
    bio: 'The ice-veined prodigy redefining classical opening preparation and end-game calculation.',
    quote: 'On the board, age does not calculate moves; accuracy does.',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/Gukesh_D_at_Tata_Steel_Chess_2024.jpg/480px-Gukesh_D_at_Tata_Steel_Chess_2024.jpg',
    accentColor: '#047857'
  },
  {
    id: 'pragg',
    name: 'R Praggnanandhaa',
    sport: 'Other Sports',
    role: 'Super-Grandmaster',
    team: 'India / FIDE Chess',
    nationality: 'India',
    jerseyNumber: 'FIDE 2760',
    stats: 'World Cup Silver Medalist · Defeated Magnus Carlsen Multiple Times',
    bio: 'The tactical sorcerer capable of finding microscopic dynamic resources in razor-sharp complications.',
    quote: 'Never fear a reputation; calculate the position in front of you.',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Praggnanandhaa_R_at_Tata_Steel_Chess_2024.jpg/480px-Praggnanandhaa_R_at_Tata_Steel_Chess_2024.jpg',
    accentColor: '#0F766E'
  }
];

export const getPlayersBySport = (sport: SportCategory): PlayerData[] => {
  return PLAYERS.filter((p) => p.sport === sport);
};
