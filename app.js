// ─────────────────────────────────────────────
//  DECK DATA
//  image: null → colour gradient placeholder
//  image: 'covers/god-of-war.jpg' → set path to show artwork
// ─────────────────────────────────────────────

const decks = [

  // ── GOD OF WAR ──────────────────────────────
  {
    id: 'god-of-war',
    title: 'God of War',
    color: '#4A0000',
    colorLight: '#9B1A1A',
    image: null,
    cards: [
      { question: "What are the names of Kratos's iconic chained weapons from the original trilogy?", answer: "The Blades of Chaos — twin blades on chains forged by Ares and permanently seared to Kratos's arms." },
      { question: "Who is the main antagonist of the original God of War (2005)?", answer: "Ares, the Greek God of War, who tricked Kratos into serving him." },
      { question: "What tragic act does Kratos commit in the original God of War, haunting him throughout the series?", answer: "He kills his own wife Lysandra and daughter Calliope, tricked by Ares into burning down a village." },
      { question: "Why does Kratos have ash-white skin?", answer: "The ashes of his slain wife and daughter were magically bonded to his skin by a village oracle as a constant reminder of his crime." },
      { question: "What is the name of Kratos's son in God of War (2018)?", answer: "Atreus." },
      { question: "Which mythology does God of War (2018) move into, departing from the Greek setting?", answer: "Norse mythology." },
      { question: "What weapon replaces the Blades of Chaos as Kratos's primary tool in God of War (2018)?", answer: "The Leviathan Axe — a frost-infused axe that can be thrown and magically recalled." },
      { question: "Who gifted Kratos the Leviathan Axe in God of War (2018)?", answer: "His late wife Faye (Laufey), who had the dwarves Brok and Sindri forge it." },
      { question: "What is the central quest that Kratos and Atreus undertake in God of War (2018)?", answer: "Reaching the highest peak in all the realms to scatter the ashes of Atreus's mother, Faye." },
      { question: "Who is the main antagonist of God of War (2018)?", answer: "Baldur — an Aesir god cursed to feel nothing, son of Freya." },
      { question: "What secret identity is Atreus revealed to have at the end of God of War (2018)?", answer: "He is Loki — a figure destined to play a key role in Ragnarök." },
      { question: "Who is Freya in God of War (2018)?", answer: "A Vanir goddess and former queen of the Valkyries who helps Kratos and Atreus, and is Baldur's mother." },
      { question: "What is the name of the giant World Serpent that Atreus can speak with?", answer: "Jörmungandr." },
      { question: "Who are Brok and Sindri?", answer: "Dwarf brothers and master weapon smiths who upgrade Kratos's axe and gear throughout the game." },
      { question: "What realm are Faye's ashes finally scattered in at the end of God of War (2018)?", answer: "Jötunheim, the realm of the Giants." },
      { question: "Who killed Zeus, and how, at the climax of God of War 3?", answer: "Kratos beat Zeus to death with his bare fists after an extended battle on Mount Olympus." },
      { question: "What does Kratos do with the Sword of Olympus at the end of God of War 3?", answer: "He plunges it into himself, releasing the power of Hope to all of humanity." },
      { question: "In God of War 2, how does Kratos survive being killed by Zeus?", answer: "He is rescued by the Titan Gaia and the other Titans, who pull him into the past using the Loom of Fate." },
      { question: "Who voices Kratos in God of War (2018) and Ragnarök?", answer: "Christopher Judge." },
      { question: "Who is the main antagonist of God of War: Ragnarök?", answer: "Odin, king of the Aesir gods." },
      { question: "Which previously unvisitable realms become accessible in God of War: Ragnarök?", answer: "Vanaheim, Svartalfheim, and Asgard (plus others) are all fully explorable." },
      { question: "Who kills Thor in God of War: Ragnarök, and why?", answer: "Odin kills Thor after Thor hesitates to fight Kratos, showing doubt and mercy." },
      { question: "What is Spartan Rage in God of War (2018)?", answer: "A temporary invulnerable berserker state Kratos can unleash, connected to his grief and Spartan bloodline." },
      { question: "What are Odin's Ravens in God of War (2018)?", answer: "Glowing green crows that serve as Odin's eyes across the realms — collectibles players can destroy." },
      { question: "Who is Angrboda in God of War: Ragnarök?", answer: "A young Giant girl who Atreus is destined to have children with, fulfilling Norse prophecy." },
      { question: "What triggers Freya's vendetta against Kratos in God of War (2018)?", answer: "Kratos kills her son Baldur to protect her, which also breaks the curse that prevented Baldur from feeling anything — she sees this as Kratos taking her son's chance at feeling away and then killing him." },
      { question: "What is the name of the foldable boat gifted to Kratos and Atreus in God of War: Ragnarök?", answer: "Skidbladnir — a legendary ship that can shrink to pocket size." },
      { question: "What Studio developed the God of War series?", answer: "Santa Monica Studio, a Sony first-party developer." },
      { question: "In God of War: Chains of Olympus, who is the primary antagonist?", answer: "Persephone, queen of the Underworld." },
      { question: "Who is Deimos, revealed in God of War: Ghost of Sparta?", answer: "Kratos's younger brother, kidnapped by Ares as a child and imprisoned in the Domain of Death." },
      { question: "What power does Kratos gain from defeating Helios in God of War 3?", answer: "The Head of Helios — he uses Helios's severed head as a torch and camera to blind enemies and reveal hidden passages." },
      { question: "In God of War (2018), what is the central hub area Kratos navigates by boat?", answer: "The Lake of Nine, which surrounds Tyr's Temple." },
      { question: "What is the Bifröst crystal in God of War (2018) used for?", answer: "It is embedded in Mimir's eye socket and used to travel between the Nine Realms." },
      { question: "Who is Mimir, and what is his condition in God of War (2018)?", answer: "The smartest man alive, formerly Odin's advisor, who was imprisoned in a tree. Kratos decapitates him and Freya reanimates his head so he can serve as their guide." },
      { question: "What prophetic mural do Kratos and Atreus discover in Jötunheim?", answer: "A Giant mural depicting the full story of Kratos and Atreus's journey — including Atreus's illness and Kratos's apparent future death, which Atreus keeps secret." },
      { question: "Who is Thrud in God of War: Ragnarök?", answer: "Thor's daughter, who eventually becomes an ally to Atreus." },
      { question: "What year was God of War (2018) released?", answer: "April 20, 2018." },
      { question: "What is the name of the nine connected realms in Norse mythology featured in God of War?", answer: "The Nine Realms: Midgard, Asgard, Vanaheim, Alfheim, Svartalfheim, Helheim, Niflheim, Muspelheim, and Jötunheim." },
      { question: "In God of War 3, what happens to the Titan Gaia?", answer: "Kratos abandons her when she calls him a pawn — he cuts off her hand and she falls during the assault on Mount Olympus." },
      { question: "What is the significance of the mistletoe arrow in God of War (2018)?", answer: "Mistletoe is the one thing that can bypass Baldur's invulnerability curse — Atreus's quiver accidentally breaks the curse when Baldur grabs him." },
      { question: "What is the realm of Helheim in God of War?", answer: "The Norse realm of the dishonoured dead, ruled by Hel — bitterly cold and populated by the spirits of those who did not die in battle." },
      { question: "What fighting style change does God of War (2018) introduce compared to the original trilogy?", answer: "A closer over-the-shoulder camera and slower, weightier combat focused on enemy positioning and axe mechanics, replacing the fixed-camera hack-and-slash style." },
      { question: "Who is Baldur's mother?", answer: "Freya — she cast the invulnerability spell on him to protect him, which also left him unable to feel anything." },
      { question: "In God of War: Ragnarök, what role does the Norns (Fates) play?", answer: "They are referenced as the weavers of fate — the game's central theme is defying fate, shown when Kratos refuses to die as the prophecy dictates." },
      { question: "What is Niflheim in God of War (2018)?", answer: "A realm of poisonous mist where Kratos can farm resources in a randomised dungeon system." },
      { question: "What is Muspelheim in God of War (2018)?", answer: "The realm of fire, home to combat trials Kratos can complete to earn special gear." },
      { question: "In God of War 3, which Olympian does Kratos kill to plunge the world into darkness?", answer: "Helios — his death causes the sun to go dark across the world." },
      { question: "What is the ending of God of War: Ragnarök's post-credits scene?", answer: "It shows Kratos has become a god of a new kind — a figure of Hope — with people beginning to worship him, hinting at a future mythology built around him." },
      { question: "What weapon from his Greek past does Kratos carry with him into the Norse era?", answer: "The Blades of Chaos — he kept them hidden in a chest but retrieves them when Atreus falls ill and needs to travel to Helheim." },
      { question: "Who is the God of War series directed by, responsible for its Norse reinvention?", answer: "Cory Barlog directed God of War (2018). The original trilogy was directed by David Jaffe (GoW 1) and Cory Barlog (GoW 2)." },
    ]
  },

  // ── THE LAST OF US ──────────────────────────
  {
    id: 'last-of-us',
    title: 'The Last of Us',
    color: '#1A2D0A',
    colorLight: '#3D6B1A',
    image: null,
    cards: [
      { question: "What type of pathogen causes the outbreak in The Last of Us?", answer: "A mutated Cordyceps fungus that infects the brain and takes control of the host's body." },
      { question: "What is the name of Joel's daughter who dies in the prologue?", answer: "Sarah — she is shot by a soldier during the initial outbreak chaos." },
      { question: "What makes Ellie unique in the infected world?", answer: "She is immune to the Cordyceps infection — she was bitten but never turned." },
      { question: "What is the name of Joel's smuggling partner at the start of The Last of Us?", answer: "Tess." },
      { question: "What organisation wants Ellie for a medical procedure?", answer: "The Fireflies — a rebel militia group who believe her immunity can be used to create a vaccine." },
      { question: "What does Firefly leader Marlene intend to do with Ellie to create the vaccine?", answer: "Extract the mutated Cordyceps from her brain — a procedure that would kill her." },
      { question: "What does Joel do at the end of The Last of Us to save Ellie?", answer: "He kills the Firefly doctors and rescues Ellie from the operating table, preventing the creation of a vaccine." },
      { question: "What lie does Joel tell Ellie at the end of Part I?", answer: "He tells her the Fireflies found many immune people and that the vaccine research failed — hiding that he saved her and destroyed the only chance at a cure." },
      { question: "What year is the main story of The Last of Us Part I set in?", answer: "2033 — twenty years after the outbreak began in 2013." },
      { question: "What is the most advanced stage of Cordyceps infection called in The Last of Us?", answer: "A Bloater — covered in thick fungal plates, nearly impervious to most attacks." },
      { question: "How do Clickers navigate their environment despite being blind?", answer: "Echolocation — they emit rapid clicking sounds to detect movement, making them especially dangerous in quiet environments." },
      { question: "What quarantine zone do Joel and Ellie begin their journey from?", answer: "Boston, Massachusetts." },
      { question: "Where is the Fireflies' base where Ellie is to be operated on?", answer: "St. Mary's Hospital in Salt Lake City, Utah." },
      { question: "Who is Bill, and what does he give Joel and Ellie?", answer: "A survivalist living alone in a fortified town who supplies them with a working vehicle to continue west." },
      { question: "In the DLC 'Left Behind', who is Ellie's best friend shown in the flashback?", answer: "Riley Abel." },
      { question: "What happens to both Riley and Ellie at the end of Left Behind?", answer: "Both are bitten — Riley turns, but Ellie does not due to her immunity, leaving her to watch her friend die." },
      { question: "Who kills Joel in The Last of Us Part II, and with what?", answer: "Abby — she beats him to death with a golf club while Ellie and Tommy are forced to watch." },
      { question: "What is Abby's motivation for killing Joel?", answer: "Joel killed her father — the lead Firefly surgeon who was about to operate on Ellie." },
      { question: "What military faction does Abby belong to in Part II?", answer: "The Washington Liberation Front (WLF), also called 'the Wolves'." },
      { question: "What rival faction do the WLF fight in Seattle in Part II?", answer: "The Seraphites, also called 'the Scars' — a religious cult who communicate in whistles." },
      { question: "Who is Lev in The Last of Us Part II?", answer: "A young Seraphite who was assigned female at birth but identifies as male — he runs away from his community and is protected by Abby." },
      { question: "What decision does Ellie make at the very end of Part II?", answer: "She chooses not to kill Abby — she lets her and Lev go, stopping the cycle of revenge." },
      { question: "What does Ellie lose as a result of her final fight with Abby?", answer: "Two fingers on her left hand — which prevents her from playing guitar, representing the final thing she loses in her pursuit of revenge." },
      { question: "What Pearl Jam song is central to The Last of Us Part II?", answer: "'Future Days' — Joel teaches Ellie to play it, and it becomes emotionally significant throughout the game." },
      { question: "What is the settlement where Joel and Ellie live at the start of Part II?", answer: "Jackson, Wyoming — a thriving community run by Joel's brother Tommy and his wife Maria." },
      { question: "What is the name of the TV adaptation of The Last of Us and which network aired it?", answer: "The Last of Us, aired on HBO — first episode January 2023." },
      { question: "Who plays Joel and Ellie in the HBO TV series?", answer: "Pedro Pascal plays Joel; Bella Ramsey plays Ellie." },
      { question: "Which episode of the TV series became famous as a standalone love story?", answer: "Episode 3, 'Long Long Time' — following Bill and Frank's relationship across decades." },
      { question: "What real-world fungus inspired the Cordyceps infection in The Last of Us?", answer: "Ophiocordyceps unilateralis — a real parasitic fungus that infects and controls the behaviour of ants." },
      { question: "Who developed The Last of Us?", answer: "Naughty Dog, a Sony first-party developer." },
      { question: "What award did The Last of Us Part II win at The Game Awards 2020?", answer: "Game of the Year, along with several other awards." },
      { question: "What are Runners in The Last of Us?", answer: "The earliest stage of Cordyceps infection — they can still see and move quickly, but are erratic and aggressive." },
      { question: "What is the Rat King in The Last of Us Part II?", answer: "A massive boss enemy — a horrific amalgamation of multiple infected that have fused together over years." },
      { question: "What is the emotional centrepiece flashback level in Part II involving Joel?", answer: "'The Birthday Gift' — Joel takes Ellie to a natural history museum for her birthday, one of their happiest memories." },
      { question: "What happens to Sam at the end of the Pittsburgh chapter in Part I?", answer: "Sam is bitten and turns overnight — Henry shoots him and then kills himself." },
      { question: "What is Ellie's tattoo in Part II and what is its significance?", answer: "A moth tattoo on her right forearm — it covers her bite mark, concealing the visible sign of her immunity." },
      { question: "Who composed the music for The Last of Us games?", answer: "Gustavo Santaolalla — his sparse, acoustic guitar score is iconic to the series." },
      { question: "What was The Last of Us originally released on, and what remasters followed?", answer: "PlayStation 3 in 2013, remastered for PS4 in 2014, and fully remade for PS5 in 2022." },
      { question: "Who is Jesse in The Last of Us Part II?", answer: "Dina's ex-boyfriend and one of Ellie's closest friends in Jackson — he is killed by Abby during the theatre confrontation." },
      { question: "What is the name of Ellie's girlfriend who accompanies her to Seattle in Part II?", answer: "Dina." },
      { question: "Where does most of The Last of Us Part II take place?", answer: "Seattle, Washington — specifically over three days from multiple characters' perspectives." },
      { question: "How does The Last of Us Part II structure its narrative compared to Part I?", answer: "It tells the same events from two perspectives — first Ellie's, then Abby's — asking players to understand and empathise with both sides." },
      { question: "What secret does Joel admit to Ellie near the start of Part II?", answer: "He confirms the truth about what he did at the Firefly hospital — that he saved her and lied about it." },
      { question: "Who is Yara in The Last of Us Part II?", answer: "Lev's older sister, who helps him escape the Seraphites and is later killed trying to protect him." },
      { question: "What is the name of the fourth stage of infection introduced in Part I (besides Runner, Stalker, Clicker, Bloater)?", answer: "Stalkers — a mid-stage infected that hides and ambushes, bridging Runners and Clickers." },
      { question: "What does Ellie find in the farmhouse at the end of Part II that she ultimately cannot keep?", answer: "A peaceful life with Dina and their baby — she abandons it to chase Abby, and returns to find Dina has gone." },
      { question: "In Part I, who is Henry and what is his relationship to Sam?", answer: "Henry is Sam's older brother and caretaker — he sacrificed others to keep Sam safe, which weighs on him throughout." },
      { question: "What is the hydroelectric dam settlement in Part I associated with Tommy?", answer: "Tommy's settlement near Jackson County, Wyoming — a self-sustaining community powered by the dam." },
      { question: "What injury does Abby receive during the final beach fight with Ellie?", answer: "Ellie bites off two of Abby's fingers during their struggle." },
      { question: "What is the central theme of The Last of Us Part II as summarised by its narrative?", answer: "The cyclical and destructive nature of revenge — that pursuing vengeance at all costs leads only to further loss on all sides." },
      { question: "Who is the Firefly leader who tasks Joel with escorting Ellie across the country?", answer: "Marlene — who also has a personal connection to Ellie's mother, Anna." },
    ]
  },

  // ── UNCHARTED ──────────────────────────────
  {
    id: 'uncharted',
    title: 'Uncharted',
    color: '#2D1A00',
    colorLight: '#8B6000',
    image: null,
    cards: [
      { question: "What is Nathan Drake's real surname, revealed in Uncharted 4?", answer: "Morgan — Nathan Morgan. He adopted the name 'Drake' as a teenager, falsely claiming descent from Sir Francis Drake." },
      { question: "Who is Nathan Drake's best friend and father figure throughout the series?", answer: "Victor 'Sully' Sullivan — a veteran treasure hunter, smuggler, and pilot." },
      { question: "Who is Nathan Drake's main love interest across Uncharted 1–3?", answer: "Elena Fisher — a journalist who accompanies Nate on his expeditions." },
      { question: "What treasure is Nathan Drake seeking in Uncharted: Drake's Fortune?", answer: "El Dorado — a legendary golden idol connected to a lost Spanish expedition." },
      { question: "What is El Dorado actually revealed to be in Uncharted 1?", answer: "A cursed golden sarcophagus whose contents transform exposed humans into demonic, zombie-like creatures." },
      { question: "Who is the main villain of Uncharted: Drake's Fortune?", answer: "Gabriel Roman — a British crime lord funding the expedition who is ultimately consumed by El Dorado's curse." },
      { question: "What legendary location is the centrepiece of Uncharted 2: Among Thieves?", answer: "Shambhala (Shangri-La) — a mythical Himalayan paradise." },
      { question: "What is the Cintamani Stone revealed to be in Uncharted 2?", answer: "A massive chunk of amber resin containing a blue sap from the Tree of Life, which transforms those who drink it." },
      { question: "Who is the main villain of Uncharted 2: Among Thieves?", answer: "Zoran Lazarević — a Serbian war criminal obsessed with obtaining the power of Shambhala." },
      { question: "Who is Chloe Frazer?", answer: "A British-Indian treasure hunter and former ally/love interest of Nate, introduced in Uncharted 2." },
      { question: "What lost city does Nathan Drake search for in Uncharted 3: Drake's Deception?", answer: "Iram of the Pillars — the 'Atlantis of the Sands', a legendary Arabian city." },
      { question: "What is revealed about Nathan Drake's past in Uncharted 3?", answer: "His real surname is Morgan; he met Sully as a teenager while trying to steal Sir Francis Drake's ring from a museum in Cartagena." },
      { question: "Who is Katherine Marlowe, the villain of Uncharted 3?", answer: "The leader of a secret society dating back to Queen Elizabeth I — she seeks the power hidden in Iram of the Pillars." },
      { question: "What does Nathan experience in the desert in Uncharted 3 that threatens his life?", answer: "He is poisoned and left to die in the Rub' al Khali desert, hallucinating as he crawls towards safety." },
      { question: "Who is Sam Drake, introduced in Uncharted 4?", answer: "Nathan's older brother, presumed dead for fifteen years — his reappearance pulls Nate out of retirement." },
      { question: "What treasure do Nate and Sam search for in Uncharted 4: A Thief's End?", answer: "The pirate colony of Libertalia and the treasure of the legendary pirate Henry Avery." },
      { question: "Who is the main villain of Uncharted 4: A Thief's End?", answer: "Rafe Adler — a wealthy former associate of Nate and Sam who becomes obsessed with claiming Avery's treasure for glory." },
      { question: "How does Uncharted 4 end for Nathan Drake?", answer: "He retires from treasure hunting and settles in New Orleans with Elena, working in a salvage company — they later have a daughter named Cassie." },
      { question: "Who is Cassie Drake?", answer: "Nathan and Elena's daughter, seen as a teenager in Uncharted 4's epilogue, discovering her parents' adventuring past." },
      { question: "What is Uncharted: The Lost Legacy, and who are its protagonists?", answer: "A standalone spin-off set after Uncharted 4, following Chloe Frazer and Nadine Ross in India." },
      { question: "What treasure do Chloe and Nadine search for in The Lost Legacy?", answer: "The Tusk of Ganesh — a legendary artefact hidden across the Hoysala Empire ruins of India." },
      { question: "Who is Nadine Ross?", answer: "The leader of Shoreline, a South African private military company — an antagonist in Uncharted 4 who becomes Chloe's reluctant partner in The Lost Legacy." },
      { question: "In what year was Uncharted: Drake's Fortune released?", answer: "2007, as a PlayStation 3 launch-window title." },
      { question: "Who voices Nathan Drake across the main Uncharted games?", answer: "Nolan North." },
      { question: "Who voices Elena Fisher in the Uncharted series?", answer: "Emily Rose." },
      { question: "What is Nathan Drake's iconic ring, and what is inscribed on it?", answer: "A ring belonging to Sir Francis Drake, inscribed with 'Sic Parvis Magna' — his most treasured possession since childhood." },
      { question: "What does 'Sic Parvis Magna' translate to?", answer: "'Greatness from small beginnings' — Sir Francis Drake's personal motto." },
      { question: "Where is Libertalia located in Uncharted 4?", answer: "On a fictional island off the coast of Madagascar." },
      { question: "Why did Libertalia fall, as revealed in Uncharted 4?", answer: "The pirate founders turned on each other in greed, eventually massacring themselves over the treasure." },
      { question: "What supernatural element is present in Uncharted 1 and 2 but absent from Uncharted 4?", answer: "Monstrous transformed enemies — El Dorado's curse creates zombie-like creatures in 1; the Cintamani sap creates super-soldiers in 2. Uncharted 4 is grounded in reality." },
      { question: "Who plays Nathan Drake in the 2022 Uncharted film?", answer: "Tom Holland, playing a younger version of Nate before the events of the games." },
      { question: "Who plays Sully in the 2022 Uncharted film?", answer: "Mark Wahlberg." },
      { question: "What famous action sequence opens Uncharted 2 and is considered one of gaming's greatest openings?", answer: "Nate waking up wounded and hanging from a derailed train carriage off a Himalayan cliff — the player must climb up while the train falls." },
      { question: "What is Shoreline in Uncharted 4?", answer: "A private military company led by Nadine Ross, hired by Rafe Adler to assist in the hunt for Avery's treasure." },
      { question: "What jobs do Nate and Elena have at the start of Uncharted 4 before Sam reappears?", answer: "Nate works at a salvage company; Elena is a documentary journalist — both leading ordinary, settled lives." },
      { question: "Which historical explorer's route does Nate follow in Uncharted 3?", answer: "T.E. Lawrence (Lawrence of Arabia), tracing his path through Syria and into the Arabian Peninsula." },
      { question: "Which Uncharted game is most commonly cited as one of the greatest games ever made?", answer: "Uncharted 2: Among Thieves — it won multiple Game of the Year awards in 2009." },
      { question: "What is the name of the lost pirate captain whose treasure underpins Uncharted 4's story?", answer: "Henry Avery — a real 17th-century pirate who disappeared with an enormous haul." },
      { question: "What did Cassie Drake discover in the attic in Uncharted 4's epilogue?", answer: "Her parents' old journals, maps, artefacts, and records — the full history of their adventuring lives they had kept from her." },
      { question: "Who is the villain of The Lost Legacy?", answer: "Asav — an Indian warlord seeking the Tusk of Ganesh to fund a civil war." },
      { question: "What ancient Indian dynasty features heavily in The Lost Legacy?", answer: "The Hoysala Empire, an 11th–14th century dynasty known for its ornate temple architecture." },
      { question: "Who developed the Uncharted series?", answer: "Naughty Dog — the same studio behind The Last of Us." },
      { question: "In Uncharted 3, what does Marlowe's society do to erase Nathan's past?", answer: "They destroyed records of his true identity and fabricated his history, making his claim to Drake's lineage impossible to verify." },
      { question: "What is the name of the island where El Dorado is hidden in Uncharted 1?", answer: "A remote island in the Pacific, said to be where Sir Francis Drake buried the idol." },
      { question: "What happened during the prison escape attempt that caused Sam to 'disappear' from Nate's life?", answer: "Their escape from a Panamanian prison went wrong — Nate and Sully escaped but Sam was shot and presumed dead, left behind." },
      { question: "What is the famous train level in Uncharted 2 considered a landmark of game design?", answer: "A multi-part sequence across a moving train in the Himalayas — Nate fights enemies on the roof, inside carriages, and escapes as it crashes." },
      { question: "Who is Charlie Cutter in Uncharted 3?", answer: "A British associate of Sully and Nate who assists in the early chapters before being sidelined by a broken leg." },
      { question: "What artefact do Nathan and Sully retrieve at the start of Uncharted 3 that kicks off the main story?", answer: "Sir Francis Drake's ring — stolen from Marlowe's associates in a London pub." },
      { question: "What remaster collection brought Uncharted 1–3 to PS4?", answer: "Uncharted: The Nathan Drake Collection (2015) — remastered versions of all three original games." },
      { question: "What key line does Nathan Drake say that becomes a recurring theme of the series?", answer: "'Oh crap' is his most-used exclamation — but the thematic line is 'Sic Parvis Magna' from his ring." },
      { question: "Is Nathan Drake genuinely descended from Sir Francis Drake?", answer: "No — it was a fiction he created as a teenager. Francis Drake had no known legitimate heirs." },
    ]
  },

  // ── INFAMOUS ───────────────────────────────
  {
    id: 'infamous',
    title: 'inFamous',
    color: '#0A0A1A',
    colorLight: '#2A2A5A',
    image: null,
    cards: [
      { question: "Who is the protagonist of the original inFamous?", answer: "Cole MacGrath — a bike messenger living in Empire City." },
      { question: "What event gives Cole his powers at the start of inFamous?", answer: "A Ray Sphere explosion in the Historic District of Empire City, triggered while Cole was making a delivery." },
      { question: "What are Cole's core powers in inFamous?", answer: "Electrokinesis — he can shoot lightning bolts, channel electricity, grind on rails, and glide using shockwaves." },
      { question: "What is the moral choice system in inFamous called?", answer: "The Karma system — players' choices shift Cole toward being a Hero or Infamous, affecting his powers and how the city treats him." },
      { question: "Who is Cole's best friend throughout the inFamous series?", answer: "Zeke Dunbar — his loyal but sometimes unreliable companion." },
      { question: "What is the Ray Sphere in inFamous?", answer: "A device that absorbs the bio-electric energy of all nearby Conduits to empower one individual — its explosion created Cole's powers at the cost of thousands of lives." },
      { question: "Who is the mysterious villain known as Kessler in inFamous?", answer: "An alternate future version of Cole MacGrath who travelled back in time to make Cole stronger to face the Beast." },
      { question: "What does Kessler's reveal mean for Cole's story?", answer: "That Kessler is Cole's future self who fled when the Beast appeared, losing everyone he loved — he returned to train Cole to fight instead of fleeing." },
      { question: "What are the three factions that control Empire City in inFamous?", answer: "The Reapers, the Dust Men, and the First Sons." },
      { question: "What city is inFamous set in?", answer: "Empire City — a fictional city inspired by New York." },
      { question: "In inFamous 2, where does Cole travel to seek more power?", answer: "New Marais — a fictional city inspired by New Orleans." },
      { question: "Who is the Beast in inFamous 2?", answer: "John White — an NSA agent who becomes an immensely powerful Conduit after being caught in a second Ray Sphere explosion." },
      { question: "What are Conduits in the inFamous universe?", answer: "Humans with a dormant genetic ability to develop superpowers, activated by exposure to Ray Sphere energy or other triggers." },
      { question: "What is the Ray Field Plague in inFamous 2?", answer: "A fatal disease spread by the Beast that kills ordinary humans — only Conduits are immune." },
      { question: "What happens in the Good ending of inFamous 2?", answer: "Cole activates the Ray Field Inhibitor (RFI), which kills all Conduits worldwide — including himself — but cures the plague and saves ordinary humanity." },
      { question: "What happens in the Evil ending of inFamous 2?", answer: "Cole destroys the RFI, sides with the Beast, and allows the plague to kill ordinary humans — establishing a world ruled by Conduits." },
      { question: "Who is Kuo in inFamous 2?", answer: "An NSA agent who becomes an ally of Cole and gains ice powers after being experimented on by the First Sons." },
      { question: "Who is Nix in inFamous 2?", answer: "A Conduit from New Marais with fire and tar powers who seeks revenge on Bertrand, the local militia leader." },
      { question: "Who is Delsin Rowe, the protagonist of inFamous: Second Son?", answer: "A 24-year-old graffiti artist and member of the Akomish Native American tribe with the unique ability to absorb powers from other Conduits." },
      { question: "What city is inFamous: Second Son set in?", answer: "Seattle, Washington — making it the most recognisable real-world setting in the series." },
      { question: "What is Delsin's unique Conduit ability in Second Son?", answer: "Power absorption — he can copy and permanently use the powers of any Conduit he makes contact with." },
      { question: "What is the first power Delsin absorbs in Second Son?", answer: "Smoke — taken from a Conduit named Hank during a prison transport accident." },
      { question: "Who is the main antagonist of inFamous: Second Son?", answer: "Brooke Augustine — the director of the DUP (Department of Unified Protection), a government agency that hunts Conduits." },
      { question: "What is the DUP in inFamous: Second Son?", answer: "The Department of Unified Protection — a government agency formed after the events of inFamous 2 to capture and contain Conduits." },
      { question: "What is Brooke Augustine's Conduit power?", answer: "Concrete — she can create, shape, and weaponise concrete, and inject it into others as a slow-killing restraint." },
      { question: "What powers can Delsin absorb besides Smoke in Second Son?", answer: "Neon (from Fetch), Video (from Eugene), and Concrete (from Augustine)." },
      { question: "Who is Reggie Rowe?", answer: "Delsin's older brother and a county sheriff — protective but initially hostile toward Conduits, he dies trying to save Delsin." },
      { question: "What causes Delsin's tribe to be in danger at the start of Second Son?", answer: "Augustine injects the tribe's elders with concrete shards that will slowly kill them — threatening Delsin to give her information." },
      { question: "What happens in the Good ending of Second Son?", answer: "Delsin defeats Augustine and forces her concrete back into her, exposing her crimes — the Conduits are freed and Delsin's tribe is healed." },
      { question: "What happens in the Evil ending of Second Son?", answer: "Delsin absorbs power from many Conduits, kills Augustine, and uses his powers to destroy the evidence against him — at the cost of his tribe and brother." },
      { question: "Who is the protagonist of inFamous: First Light?", answer: "Abigail 'Fetch' Walker — a Conduit with neon powers." },
      { question: "What is inFamous: First Light?", answer: "A standalone prequel spin-off to Second Son that tells Fetch's backstory and how she ended up in DUP custody." },
      { question: "What are Fetch's powers in First Light and Second Son?", answer: "Neon — she can move at superhuman speed, fire neon blasts, and create energy constructs." },
      { question: "Who is Shane in First Light, and what happened to him?", answer: "Fetch's older brother and protector — he was killed by criminals who exploited Fetch's powers, driving her story." },
      { question: "Where is inFamous: First Light primarily set?", answer: "Curdun Cay — a DUP detention facility — and flashbacks to Seattle and Portland." },
      { question: "Who developed the inFamous series?", answer: "Sucker Punch Productions — a Sony first-party developer based in Washington state." },
      { question: "In what year did the original inFamous release?", answer: "2009 on PlayStation 3." },
      { question: "What is the Karma system's effect on Cole's appearance in inFamous?", answer: "A Hero Cole looks healthy with blue electricity; an Infamous Cole becomes gaunt with red-tinged lightning and a more monstrous look." },
      { question: "How does Cole recharge his electricity in inFamous?", answer: "By draining electricity from any power source — generators, substations, train rails, or (Evil karma) directly from civilians." },
      { question: "What is Paper Trail in inFamous: Second Son?", answer: "A companion ARG (Alternate Reality Game) tied to Second Son that players could participate in online through a dedicated website." },
      { question: "What Native American tribe does Delsin Rowe belong to?", answer: "The Akomish tribe — a fictional tribe based in the Pacific Northwest." },
      { question: "What PS4 hardware feature does Second Son use for immersion during gameplay?", answer: "The DualShock 4's touchpad (for spraying graffiti and other actions), speaker (for audio cues), and light bar (which changes colour to match Delsin's active power)." },
      { question: "In inFamous, who is the NSA agent that becomes the Beast?", answer: "John White — an agent who was investigating the Ray Sphere and was caught in the explosion that created it." },
      { question: "What is Second Son set approximately how many years after inFamous 2?", answer: "Seven years after inFamous 2's Good ending." },
      { question: "In the original inFamous, what does Kessler do to Trish?", answer: "He engineers a situation where Cole must choose between saving Trish or six doctors — she dies either way, forcing Cole to live with the guilt." },
      { question: "Who is Trish in inFamous?", answer: "Cole's girlfriend at the start of the game, a medical worker who blames Cole for the Ray Sphere explosion that killed her sister." },
      { question: "What unique aesthetic feature defines inFamous: Second Son's open world?", answer: "The real-world setting of modern-day Seattle, including recognisable landmarks like the Space Needle, Pike Place Market, and the waterfront." },
      { question: "What triggers Delsin's Conduit ability to activate?", answer: "Physical contact with Hank, an escaped Conduit — Delsin inadvertently absorbs Hank's smoke powers during a struggle." },
      { question: "What is the name of the DUP facility that serves as a prison for Conduits in First Light?", answer: "Curdun Cay — a remote island detention centre." },
      { question: "In inFamous 2, what new power does Cole gain from Nix on the evil path?", answer: "Fire — he can channel Nix's tar and fire abilities as an alternative to Kuo's ice powers on the good path." },
      { question: "What is the significance of the Conduit gene in wider society in the inFamous universe?", answer: "Conduits are feared and called 'bioterrorists' by the public — this discrimination is a central social theme, particularly in Second Son's DUP storyline." },
      { question: "In inFamous, what visual effect does Cole's Karma level have on Empire City itself?", answer: "A Hero Cole restores power and improves the city's appearance; an Infamous Cole leaves it darker, more crime-ridden, and residents flee from him." },
    ]
  },

];

// ─────────────────────────────────────────────
//  STORAGE
// ─────────────────────────────────────────────

const STORAGE_KEY = 'ps-quiz-user-data';

// Snapshot built-in deck IDs and original question texts before any mutations
const builtInCounts = Object.fromEntries(decks.map(d => [d.id, d.cards.length]));
const builtInCards  = Object.fromEntries(decks.map(d => [d.id, d.cards.map(c => c.question)]));

function loadFromStorage() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return;
    const {
      extraCards = {},
      customDecks = [],
      deletedBuiltInIds: deletedDecks = [],
      deletedBuiltInCards: deletedCards = {}
    } = JSON.parse(raw);

    // Remove built-in decks the user has deleted
    deletedDecks.forEach(id => {
      deletedBuiltInIds.add(id);
      const idx = decks.findIndex(d => d.id === id);
      if (idx !== -1) decks.splice(idx, 1);
    });

    // Remove individually deleted built-in cards (matched by question text)
    Object.entries(deletedCards).forEach(([deckId, questions]) => {
      const deck = decks.find(d => d.id === deckId);
      if (deck) {
        const removed = new Set(questions);
        deck.cards = deck.cards.filter(c => !removed.has(c.question));
      }
    });

    // Merge user-added cards into existing decks
    Object.entries(extraCards).forEach(([id, cards]) => {
      const deck = decks.find(d => d.id === id);
      if (deck) deck.cards.push(...cards);
    });

    // Re-add user-created decks
    decks.push(...customDecks);
  } catch (e) {
    // Corrupt storage — skip silently
  }
}

function saveToStorage() {
  const extraCards         = {};
  const deletedBuiltInCards = {};

  decks.forEach(deck => {
    const origQuestions = builtInCards[deck.id];
    if (origQuestions) {
      // User-added cards: present in deck but not in original built-ins
      const origSet = new Set(origQuestions);
      const added = deck.cards.filter(c => !origSet.has(c.question));
      if (added.length > 0) extraCards[deck.id] = added;

      // Deleted built-in cards: in original but no longer in deck
      const currentSet = new Set(deck.cards.map(c => c.question));
      const deleted = origQuestions.filter(q => !currentSet.has(q));
      if (deleted.length > 0) deletedBuiltInCards[deck.id] = deleted;
    }
  });

  const customDecks = decks.filter(d => !builtInCards[d.id]);
  localStorage.setItem(STORAGE_KEY, JSON.stringify({
    extraCards,
    customDecks,
    deletedBuiltInIds:   [...deletedBuiltInIds],
    deletedBuiltInCards,
  }));
}

// ─────────────────────────────────────────────
//  STATE
// ─────────────────────────────────────────────

let activeDeck        = null;
let activeCards       = [];
let currentIndex      = 0;
let deletedBuiltInIds = new Set();

// ─────────────────────────────────────────────
//  ELEMENT REFS
// ─────────────────────────────────────────────

const libraryView   = document.getElementById("library-view");
const studyView     = document.getElementById("study-view");
const deckGrid      = document.getElementById("deck-grid");
const studyDeckTitle = document.getElementById("study-deck-title");
const studyDeckCount = document.getElementById("study-deck-count");
const btnBack        = document.getElementById("btn-back");
const cardList       = document.getElementById("card-list");
const btnDeleteCard  = document.getElementById("btn-delete-card");

const flashcard     = document.getElementById("flashcard");
const cardQuestion  = document.getElementById("card-question");
const cardAnswer    = document.getElementById("card-answer");
const cardCounter   = document.getElementById("card-counter");
const btnPrev       = document.getElementById("btn-prev");
const btnNext       = document.getElementById("btn-next");

const btnNewCard    = document.getElementById("btn-new-card");
const modalOverlay  = document.getElementById("modal-overlay");
const selectDeck    = document.getElementById("select-deck");
const newDeckField  = document.getElementById("new-deck-field");
const inputDeckName = document.getElementById("input-deck-name");
const inputQuestion = document.getElementById("input-question");
const inputAnswer   = document.getElementById("input-answer");
const btnCancel     = document.getElementById("btn-cancel");
const btnSave       = document.getElementById("btn-save");

// ─────────────────────────────────────────────
//  LIBRARY
// ─────────────────────────────────────────────

function deleteDeck(deckId) {
  if (!confirm("Delete this deck? This cannot be undone.")) return;

  if (builtInCounts[deckId] !== undefined) {
    deletedBuiltInIds.add(deckId);
  }

  const idx = decks.findIndex(d => d.id === deckId);
  if (idx !== -1) decks.splice(idx, 1);

  saveToStorage();
  renderLibrary();
}

function renderLibrary() {
  deckGrid.innerHTML = "";
  decks.forEach(deck => {
    const card = document.createElement("div");
    card.className = "deck-card";
    card.dataset.id = deck.id;

    const bg = document.createElement("div");
    bg.className = "deck-card-bg";

    if (deck.image) {
      bg.style.backgroundImage = `url('${deck.image}')`;
    } else {
      bg.style.background = `linear-gradient(160deg, ${deck.color}, ${deck.colorLight})`;
    }

    const placeholder = document.createElement("div");
    placeholder.className = "deck-card-placeholder";
    placeholder.textContent = deck.title;

    const body = document.createElement("div");
    body.className = "deck-card-body";
    body.innerHTML = `
      <div class="deck-card-title">${deck.title}</div>
      <div class="deck-card-count">${deck.cards.length} cards</div>
    `;

    const deleteBtn = document.createElement("button");
    deleteBtn.className = "deck-delete-btn";
    deleteBtn.title = "Delete deck";
    deleteBtn.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="3 6 5 6 21 6"/><path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6"/><path d="M10 11v6"/><path d="M14 11v6"/><path d="M9 6V4h6v2"/></svg>`;
    deleteBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      deleteDeck(deck.id);
    });

    card.appendChild(bg);
    if (!deck.image) card.appendChild(placeholder);
    card.appendChild(body);
    card.appendChild(deleteBtn);

    card.addEventListener("click", () => openDeck(deck.id));
    deckGrid.appendChild(card);
  });
}

// ─────────────────────────────────────────────
//  STUDY VIEW
// ─────────────────────────────────────────────

function renderCardList() {
  cardList.innerHTML = "";
  activeCards.forEach((_, i) => {
    const item = document.createElement("div");
    item.className = "card-list-item";
    item.textContent = i + 1;
    item.dataset.index = i;
    item.addEventListener("click", () => {
      currentIndex = i;
      showCard(i);
    });
    cardList.appendChild(item);
  });
}

function updateCardListHighlight(index) {
  cardList.querySelectorAll(".card-list-item").forEach(el => {
    el.classList.toggle("active", Number(el.dataset.index) === index);
  });
  const active = cardList.querySelector(".card-list-item.active");
  if (active) active.scrollIntoView({ block: "nearest" });
}

function openDeck(deckId) {
  activeDeck  = decks.find(d => d.id === deckId);
  activeCards = activeDeck.cards;
  currentIndex = 0;

  studyDeckTitle.textContent = activeDeck.title;
  studyDeckCount.textContent = `${activeCards.length} cards`;

  libraryView.classList.add("hidden");
  studyView.classList.remove("hidden");

  renderCardList();
  showCard(0);
}

function showCard(index) {
  flashcard.classList.remove("flipped");
  const card = activeCards[index];
  cardQuestion.textContent = card.question;
  cardAnswer.textContent   = card.answer;
  cardCounter.textContent  = `${index + 1} / ${activeCards.length}`;
  btnPrev.disabled = index === 0;
  btnNext.disabled = index === activeCards.length - 1;
  updateCardListHighlight(index);
}

function deleteCard(index) {
  if (!confirm("Delete this flashcard? This cannot be undone.")) return;

  activeCards.splice(index, 1);

  if (activeCards.length === 0) {
    saveToStorage();
    renderLibrary();
    studyView.classList.add("hidden");
    libraryView.classList.remove("hidden");
    activeDeck = null;
    return;
  }

  saveToStorage();
  renderCardList();
  if (currentIndex >= activeCards.length) currentIndex = activeCards.length - 1;
  showCard(currentIndex);
}

btnDeleteCard.addEventListener("click", (e) => {
  e.stopPropagation();
  deleteCard(currentIndex);
});

btnBack.addEventListener("click", () => {
  studyView.classList.add("hidden");
  libraryView.classList.remove("hidden");
  activeDeck = null;
});

flashcard.addEventListener("click", () => {
  flashcard.classList.toggle("flipped");
});

btnPrev.addEventListener("click", () => {
  if (currentIndex > 0) showCard(--currentIndex);
});

btnNext.addEventListener("click", () => {
  if (currentIndex < activeCards.length - 1) showCard(++currentIndex);
});

// ─────────────────────────────────────────────
//  MODAL — NEW CARD
// ─────────────────────────────────────────────

function populateDeckSelect() {
  selectDeck.innerHTML = "";
  decks.forEach(deck => {
    const opt = document.createElement("option");
    opt.value = deck.id;
    opt.textContent = deck.title;
    selectDeck.appendChild(opt);
  });
  const newOpt = document.createElement("option");
  newOpt.value = "__new__";
  newOpt.textContent = "+ Create new deck";
  selectDeck.appendChild(newOpt);
}

selectDeck.addEventListener("change", () => {
  if (selectDeck.value === "__new__") {
    newDeckField.classList.remove("hidden");
    inputDeckName.focus();
  } else {
    newDeckField.classList.add("hidden");
  }
});

btnNewCard.addEventListener("click", () => {
  populateDeckSelect();

  // pre-select the open deck if we're in study view
  if (activeDeck) selectDeck.value = activeDeck.id;
  newDeckField.classList.add("hidden");
  inputDeckName.value = "";
  inputQuestion.value = "";
  inputAnswer.value   = "";
  clearModalError();
  modalOverlay.classList.remove("hidden");
  inputQuestion.focus();
});

btnCancel.addEventListener("click", () => {
  clearModalError();
  modalOverlay.classList.add("hidden");
});

modalOverlay.addEventListener("click", (e) => {
  if (e.target === modalOverlay) {
    clearModalError();
    modalOverlay.classList.add("hidden");
  }
});

const modalError = document.getElementById("modal-error");

function showModalError(msg) {
  modalError.textContent = msg;
  modalError.classList.remove("hidden");
}

function clearModalError() {
  modalError.textContent = "";
  modalError.classList.add("hidden");
}

btnSave.addEventListener("click", () => {
  const question = inputQuestion.value.trim();
  const answer   = inputAnswer.value.trim();

  if (!question) { showModalError("Please enter a question."); return; }
  if (question.length < 50) { showModalError(`Question must be at least 50 characters (currently ${question.length}).`); return; }
  if (!answer) { showModalError("Please enter an answer."); return; }
  if (answer.length < 50) { showModalError(`Answer must be at least 50 characters (currently ${answer.length}).`); return; }

  clearModalError();

  if (selectDeck.value === "__new__") {
    const deckName = inputDeckName.value.trim();
    if (!deckName) { showModalError("Please enter a name for the new deck."); return; }

    const newDeck = {
      id: deckName.toLowerCase().replace(/\s+/g, '-'),
      title: deckName,
      color: '#1a1a2e',
      colorLight: '#3a3a5e',
      image: null,
      cards: [{ question, answer }]
    };
    decks.push(newDeck);
    saveToStorage();
    renderLibrary();
  } else {
    const target = decks.find(d => d.id === selectDeck.value);
    target.cards.push({ question, answer });
    saveToStorage();

    if (activeDeck && activeDeck.id === target.id) {
      activeCards = target.cards;
      studyDeckCount.textContent = `${activeCards.length} cards`;
      renderCardList();
      currentIndex = activeCards.length - 1;
      showCard(currentIndex);
    }
  }

  modalOverlay.classList.add("hidden");
});

// ─────────────────────────────────────────────
//  INIT
// ─────────────────────────────────────────────

loadFromStorage();
renderLibrary();
