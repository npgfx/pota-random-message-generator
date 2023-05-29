// ** Classes ** //
const classList = ["Artificer", "Barbarian", "Bard", "Cleric", "Druid", "Fighter", "Monk", "Paladin", "Ranger", "Rogue", "Sorcerer", "Warlock", "Wizard"];

// ** Skills ** //

const skills = {
    acrobatics: {
        name: "Acrobatics",
        description: "Your Dexterity (Acrobatics) check covers your attempt to stay on your feet in a tricky situation, such as when you're trying to run across a sheet of ice, balance on a tightrope, or stay upright on a rocking ship's deck. The GM might also call for a Dexterity (Acrobatics) check to see if you can perform acrobatic stunts, including dives, rolls, somersaults, and flips.",
    }
}

const skillList = []

// Character Level
let characterLevel = 0;

// Ability Scores
let strength = 0;
let dexterity = 0;
let constitution = 0;
let intelligence = 0;
let wisdom = 0;
let charisma = 0;

const abilities = [strength, dexterity, constitution, intelligence, wisdom, charisma];

// Get Ability Modifier Function

function getAbilityModifier (abilities) {
    let modifiers = [];
    for (let i=0; i < abilities.length; i++) {
        console.log(abilities[i]);
        if (abilities[i] <= 1) {
            let modifier = -5;
            modifiers.push(modifier);        
        } else if (abilities[i] >=2 && abilities[i]  <=3) {
            let modifier = -4;
            modifiers.push(modifier); 
        } else if (abilities[i] >=4 && abilities[i]  <=5) {
            let modifier = -3;
            modifiers.push(modifier); ;
        } else if (abilities[i] >=6 && abilities[i]  <=7) {
            let modifier = -2;
            modifiers.push(modifier); ;
        } else if (abilities[i] >=8 && abilities[i]  <=9) {           
            let modifier = -1;
            modifiers.push(modifier); 
        } else if (abilities[i] >=10 && abilities[i]  <=11) {     
            let modifier = 0;
            modifiers.push(modifier); ;
        } else if (abilities[i] >=12 && abilities[i]  <=13) { 
            let modifier = 1;
            modifiers.push(modifier); ;
        } else if (abilities[i] >=14 && abilities[i]  <=15) {
            let modifier = 2;
            modifiers.push(modifier); ;
        } else if (abilities[i] >=16 && abilities[i]  <=17) {
            let modifier = 3;
            modifiers.push(modifier); ;
        } else if (abilities[i] >=18 && abilities[i]  <=19) {
            let modifier = 4;
            modifiers.push(modifier); ;
        } else if (abilities[i] >=20 && abilities[i]  <=21) {
            let modifier = 5;
            modifiers.push(modifier); ;
        } else if (abilities[i] >=22 && abilities[i]  <=23) {
            let modifier = 6;
            modifiers.push(modifier); ;
        } else if (abilities[i] >=24 && abilities[i]  <=25) {
            let modifier = 7;
            modifiers.push(modifier); ;
        } else if (abilities[i] >=26 && abilities[i]  <=27) {
            let modifier = 8;
            modifiers.push(modifier); ;
        } else if (abilities[i] >=28 && abilities[i]  <=29) {
            let modifier = 9;
            modifiers.push(modifier); ;
        } else if (abilities[i] === 30) {
            let modifier = 10;
            modifiers.push(modifier); ;
        }
    }
    return modifiers;
}
// ** Race List ** //

// Dragonborn
const dragonborn = {
    name: "Dragonborn",
    description: "Dragonborn look very much like dragons standing erect in humanoid form, though they lack wings or a tail.",
    racialTraits: {
        abilityScoreIncrease: {
            name: "Ability Score Increase",
            description: "Your Strength score increases by 2, and your Charisma score increases by 1.",
            strength: 2,
            charisma: 1
        },
        age: {
            name: "Age",
            description: "Young dragonborn grow quickly. They walk hours after hatching, attain the size and development of a 10-year-old human child by the age of 3, and reach adulthood by 15. They live to be around 80."
        },
        size: {
            name: "Size",
            description: "Dragonborn are taller and heavier than humans, standing well over 6 feet tall and averaging almost 250 pounds. Your size is Medium.",
            value: "Medium"
        },
        speed: {
            name: "Speed",
            description: "Your base walking speed is 30 feet.",
            value: 30
        },
        draconicAncestry: {
            name: "Draconic Ancestry",
            description: "You have draconic ancestry. Choose one type of dragon from the Draconic Ancestry table. Your breath weapon and damage resistance are determined by the dragon type, as shown in the table.",
            draconicAncestryTable: {
                dragonTypes: ["Black","Blue","Brass","Bronze","Copper","Gold","Green","Red","Silver","White"],
                damageTypes: ["Acid","Lightning","Fire","Lightning","Acid","Fire","Poison","Fire","Cold","Cold"],
                breathWeaponTypes: ["5 by 30 ft. line (Dex. save)", "5 by 30 ft. line (Dex. save)", "5 by 30 ft. line (Dex. save)", "5 by 30 ft. line (Dex. save)", "5 by 30 ft. line (Dex. save)", "15 ft. cone (Dex. save)", "15 ft. cone (Dex. save)", "15 ft. cone (Dex. save)", "15 ft. cone (Dex. save)", "15 ft. cone (Dex. save)"]
            }
        },
        breathWeapon: {
            name: "Breath Weapon",
            description: "You can use your action to exhale destructive energy. Your draconic ancestry determines the size, shape, and damage type of the exhalation. When you use your breath weapon, each creature in the area of the exhalation must make a saving throw, the type of which is determined by your draconic ancestry. The DC for this saving throw equals 8 + your Constitution modifier + your proficiency bonus. A creature takes 2d6 damage on a failed save, and half as much damage on a successful one. The damage increases to 3d6 at 6th level, 4d6 at 11th level, and 5d6 at 16th level. After you use your breath weapon, you can’t use it again until you complete a short or long rest."
        },
        damageResistance: {
            name: "Damage Resistance",
            description: "You have resistance to the damage type associated with your draconic ancestry."
        },
        languages: {
            name: "Languages",
            description: "You can speak, read, and write Common and Draconic. Draconic is thought to be one of the oldest languages and is often used in the study of magic. The language sounds harsh to most other creatures and includes numerous hard consonants and sibilants.",
            languages: ["Common", "Draconic"]
        }
    }
};
// Dwarf
const dwarf = {
    name: "Dwarf",
    description: "Bold and hardy, dwarves are known as skilled warriors, miners, and workers of stone and metal.",
    racialTraits: {
        age: {
            name: "Age",
            description: "Dwarves mature at the same rate as humans, but they’re considered young until they reach the age of 50. On average, they live about 350 years."
        },
        size: {
            name: "Size",
            value: "Medium",
            description: "Dwarves stand between 4 and 5 feet tall and average about 150 pounds. Your size is Medium."
        },
        speed: {
            name: "Speed",
            value: 25,
            description: "Your base walking speed is 25 feet. Your speed is not reduced by wearing heavy armor."
        },
        darkvision: {
            name: "Darkvision",
            value: 60,
            description: "Accustomed to life underground, you have superior vision in dark and dim conditions. You can see in dim light within 60 feet of you as if it were bright light, and in darkness as if it were dim light. You can’t discern color in darkness, only shades of gray."
        },
        dwarvenResilience: {
            name: "Dwarven Resilience",
            description: "You have advantage on saving throws against poison, and you have resistance against poison damage (explained in the “Combat” section)."
        },
        dwarvenCombatTraining: {
            name: "Dwarven Combat Training",
            description: "You have proficiency with the battleaxe, handaxe, light hammer, and warhammer."
        },
        toolProficiency: {
            name: "Tool Proficiency",
            description: "You gain proficiency with the artisan’s tools of your choice: smith’s tools, brewer’s supplies, or mason’s tools."
        },
        stonecunning: {
            name: "Stonecunning",
            description: "Whenever you make an Intelligence (History) check related to the origin of stonework, you are considered proficient in the History skill and add double your proficiency bonus to the check, instead of your normal proficiency bonus."
        },
        languages: {
            name: "Languages",
            description: "You can speak, read, and write Common and Dwarvish. Dwarvish is full of hard consonants and guttural sounds, and those characteristics spill over into whatever other language a dwarf might speak."
        }
    },
    subraces: {
        hillDwarf: {
            name: "Hill Dwarf",
            description: "As a hill dwarf, you have keen senses, deep intuition, and remarkable resilience. The gold dwarves of Faerûn in their mighty southern kingdom are hill dwarves, as are the exiled Neidar and the debased Klar of Krynn in the Dragonlance setting.",
            racialTraits: {
                abilityScoreIncrease: {
                    name: "Ability Score Increase",
                    description: "Your Wisdom score increases by 1.",
                    wisdom: 1
                },
                dwarvenToughness: {
                    description: "Your hit point maximum increases by 1, and it increases by 1 every time you gain a level.",
                    maxHitPoints: characterLevel    
                }
            }
        },
        mountainDwarf: {
            name: "Mountain Dwarf",
            description: "As a mountain dwarf, you’re strong and hardy, accustomed to a difficult life in rugged terrain. You’re probably on the tall side (for a dwarf), and tend toward lighter coloration. The shield dwarves of northern Faerûn, as well as the ruling Hylar clan and the noble Daewar clan of Dragonlance, are mountain dwarves.",
            racialTraits: {
                abilityScoreIncrease: {
                    name: "Ability Score Increase",
                    description: "Your Strength score increases by 2.",
                    strength: 2
                },
                dwarvenArmorTraining: {
                    name: "Dwarven Armor Training",
                    description: "You have proficiency with light and medium armor."
                }
            }
        }
    }
};
// Elf
const elf = {
    name: "Elf",
    description: "Elves are a magical people of otherworldly grace, living in the world but not entirely part of it.",
    racialTraits: {
        abilityScoreIncrease: {
            name: "Ability Score Increase",
            description: "Your Dexterity score increases by 2",
            dexterity: 2
        },
        age: {
            name: "Age",
            description: "Although elves reach physical maturity at about the same age as humans, the elven understanding of adulthood goes beyond physical growth to encompass worldly experience. An elf typically claims adulthood and an adult name around the age of 100 and can live to be 750 years old."
        },
        size: {
            name: "Size",
            value: "Medium",
            description: "Elves range from under 5 to over 6 feet tall and have slender builds. Your size is Medium."
        },
        speed: {
            name: "Speed",
            value: 30,
            description: "Your base walking speed is 30 feet."
        },
        darkvision: {
            name: "Darkvision",
            value: 60,
            description: "Accustomed to twilit forests and the night sky, you have superior vision in dark and dim conditions. You can see in dim light within 60 feet of you as if it were bright light, and in darkness as if it were dim light. You can’t discern color in darkness, only shades of gray."
        },
        keenSenses: {
            name: "Keen Senses",
            description: "You have proficiency in the Perception skill.",
        },
        feyAncestry: {
            name: "Fey Ancestry",
            description: "You have advantage on saving throws against being charmed, and magic can’t put you to sleep.",
        },
        trance: {
            name: "Trance",
            description: "Elves don’t need to sleep. Instead, they meditate deeply, remaining semiconscious, for 4 hours a day. (The Common word for such meditation is “trance.”) While meditating, you can dream after a fashion; such dreams are actually mental exercises that have become reflexive through years of practice. After resting in this way, you gain the same benefit that a human does from 8 hours of sleep."
        },
        languages: {
            name: "Languages",
            description: "You can speak, read, and write Common and Elvish. Elvish is fluid, with subtle intonations and intricate grammar. Elven literature is rich and varied, and their songs and poems are famous among other races. Many bards learn their language so they can add Elvish ballads to their repertoires.",
            languages: ["Common", "Elvish"]
        }
    },
    subraces: {
        highElf: {
            name: "High Elf",
            description: "As a high elf, you have a keen mind and a mastery of at least the basics of magic. In many of the worlds of D&D, there are two kinds of high elves. One type (which includes the gray elves and valley elves of Greyhawk, the Silvanesti of Dragonlance, and the sun elves of the Forgotten Realms) is haughty and reclusive, believing themselves to be superior to non-elves and even other elves. The other type (including the high elves of Greyhawk, the Qualinesti of Dragonlance, and the moon elves of the Forgotten Realms) are more common and more friendly, and often encountered among humans and other races. The sun elves of Faerûn (also called gold elves or sunrise elves) have bronze skin and hair of copper, black, or golden blond. Their eyes are golden, silver, or black. Moon elves (also called silver elves or gray elves) are much paler, with alabaster skin sometimes tinged with blue. They often have hair of silver-white, black, or blue, but various shades of blond, brown, and red are not uncommon. Their eyes are blue or green and flecked with gold.",
            racialTraits: {
                abilityScoreIncrease: {
                    name: "Ability Score Increase",
                    description: "Your Intelligence score increases by 1.",
                    intelligence: 1
                },
                elfWeaponTraining: {
                    name: "Elf Weapon Training",
                    description: "You have proficiency with the longsword, shortsword, shortbow, and longbow."
                },
                cantrip: {
                    name: "Cantrip",
                    description: "You know one cantrip of your choice from the wizard spell list. Intelligence is your spellcasting ability for it."
                },
                extraLanguage: {
                    name: "Extra Language",
                    description: "You can speak, read, and write one extra language of your choice."
                }
            }
        },
        woodElf: {
            name: "Wood Elf",
            description: "As a wood elf, you have keen senses and intuition, and your fleet feet carry you quickly and stealthily through your native forests. This category includes the wild elves (grugach) of Greyhawk and the Kagonesti of Dragonlance, as well as the races called wood elves in Greyhawk and the Forgotten Realms. In Faerûn, wood elves (also called wild elves, green elves, or forest elves) are reclusive and distrusting of non-elves. Wood elves’ skin tends to be copperish in hue, sometimes with traces of green. Their hair tends toward browns and blacks, but it is occasionally blond or copper-colored. Their eyes are green, brown, or hazel.",
            racialTraits: {
                abilityScoreIncrease: {
                    name: "Ability Score Increase",
                    description: "Your Wisdom score increases by 1.",
                    wisdom: 1
                },
                elfWeaponTraining: {
                    name: "Elf Weapon Training",
                    description: "You have proficiency with the longsword, shortsword, shortbow, and longbow."
                },
                fleetOfFoot: {
                    name: "Fleet of Foot",
                    description: "Your base walking speed increases to 35 feet.",
                    speed: 35
                },
                maskOfTheWild: {
                    name: "Mask of the Wild",
                    description: "You can attempt to hide even when you are only lightly obscured by foliage, heavy rain, falling snow, mist, and other natural phenomena."
                }
            }
        },
        darkElf: {
            name: "Dark Elf (Drow)",
            description: "As a drow, you are infused with the magic of the Underdark, an underground realm of wonders and horrors rarely seen on the surface above. You are at home in shadows and, thanks to your innate magic, learn to conjure forth both light and darkness. Your kin tend to have stark white hair and grayish skin of many hues. The cult of the god Lolth, Queen of Spiders, has corrupted some of the oldest drow cities, especially in the worlds of Oerth and Toril. Eberron, Krynn, and other realms have escaped the cult’s influence—for now. Wherever the cult lurks, drow heroes stand on the front lines in the war against it, seeking to sunder Lolth’s web.",
            racialTraits: {
                abilityScoreIncrease: {
                    name: "Ability Score Increase",
                    description: "Your Charisma score increases by 1.",
                    charisma: 1
                },
                superiorDarkvision: {
                    name: "Superior Darkvision",
                    description: "Superior Darkvision. Your darkvision has a radius of 120 feet.",
                    value: 120
                },
                sunlightSensitivity: {
                    name: "Sunlight Sensitivity",
                    description: "You have disadvantage on attack rolls and on Wisdom (Perception) checks that rely on sight when you, the target of your attack, or whatever you are trying to perceive is in direct sunlight."
                },
                drowMagic: {
                    name: "Drow Magic",
                    description: "You know the dancing lights cantrip. When you reach 3rd level, you can cast the faerie fire spell once with this trait and regain the ability to do so when you finish a long rest. When you reach 5th level, you can cast the darkness spell once with this trait and regain the ability to do so when you finish a long rest. Charisma is your spellcasting ability for these spells."
                },
                drowWeaponTraining: {
                    name: "Drow Weapon Training",
                    description: "You have proficiency with rapiers, shortswords, and hand crossbows."
                }
            }
        }
    }
};
// Genasi
const genasi = {
    name: "Genasi",
    description: "Genasi carry the power of the elemental planes of air, earth, fire, and water in their blood.",
    racialTraits: {
        languages: {
            name: "Languages",
            description: "You can speak, read, and write Common and Primordial. Primordial is a guttural language, filled with harsh syllables and hard consonants.",
            languages: ["Common", "Primordial"]
        },
        abilityScoreIncrease: {
            name: "Ability Score Increase",
            description: "Your Constitution score increases by 2.",
            constitution: 2
        },
        age: {
            name: "Age",
            description: "Genasi mature at about the same rate as humans and reach adulthood in their late teens. They live somewhat longer than humans do, up to 120 years."
        },
        alignment: {
            name: "Alignment",
            description: "Independent and self-reliant, genasi tend toward a neutral alignment."
        },
        size: {
            name: "Size",
            value: "Medium",
            description: "Genasi are as varied as their mortal parents but are generally built like humans, standing anywhere from 5 feet to over 6 feet tall. Your size is Medium."
        },
        speed: {
            name: "Speed",
            value: 30,
            description: "Your base walking speed is 30 feet."
        }
    },
    subraces: {
        air: {
            name: "Air Genasi",
            description: "As an air genasi, you are descended from the djinn. As changeable as the weather, your moods shift from calm to wild and violent with little warning, but these storms rarely last long. Air genasi typically have light blue skin, hair, and eyes. A faint but constant breeze accompanies them, tousling the hair and stirring the clothing. Some air genasi speak with breathy voices, marked by a faint echo. A few display odd patterns in their flesh or grow crystals from their scalps.",
            racialTraits: {
                abilityScoreIncrease: {
                    name: "Ability Score Increase",
                    description: "Your Dexterity score increases by 1.",
                    dexterity: 1
                },
                unendingBreath: {
                    name: "Unending Breath",
                    description: "You can hold your breath indefinitely while you’re not incapacitated."
                },
                mingleWithTheWind: {
                    name: "Mingle with the Wind",
                    description: "You can cast the levitate spell once with this trait, requiring no material components, and you regain the ability to cast it this way when you finish a long rest. Constitution is your spellcasting ability for this spell."
                }
            }
        },
        earth: {
            name: "Earth Genasi",
            description: "As an earth genasi, you are descended from the cruel and greedy dao, though you aren’t necessarily evil. You have inherited some measure of control over earth, reveling in superior strength and solid power. You tend to avoid rash decisions, pausing long enough to consider your options before taking action. Elemental earth manifests differently from one individual to the next. Some earth genasi always have bits of dust falling from their bodies and mud clinging to their clothes, never getting clean no matter how often they bathe. Others are as shiny and polished as gemstones, with skin tones of deep brown or black, eyes sparkling like agates. Earth genasi can also have smooth metallic flesh, dull iron skin spotted with rust, a pebbled and rough hide, or even a coating of tiny embedded crystals. The most arresting have fissures in their flesh, from which faint light shines.",
            racialTraits: {
                abilityScoreIncrease: {
                    name: "Ability Score Increase",
                    description: "Your Strength score increases by 1.",
                    strength: 1
                },
                earthWalk: {
                    name: "Earth Walk",
                    description: "You can move across difficult terrain made of earth or stone without expending extra movement."
                },
                mergeWithStone: {
                    name: "Merge with Stone",
                    description: "You can cast the pass without trace spell once with this trait, requiring no material components, and you regain the ability to cast it this way when you finish a long rest. Constitution is your spellcasting ability for this spell."
                }
            }
        },
        fire: {
            name: "Fire Genasi",
            description: "As a fire genasi, you have inherited the volatile mood and keen mind of the efreet. You tend toward impatience and making snap judgments. Rather than hide your distinctive appearance, you exult in it. Nearly all fire genasi are feverishly hot as if burning inside, an impression reinforced by flaming red, coal- black, or ash-gray skin tones. The more human-looking have fiery red hair that writhes under extreme emotion, while more exotic specimens sport actual flames dancing on their heads. Fire genasi voices might sound like crackling flames, and their eyes flare when angered. Some are accompanied by the faint scent of brimstone.",
            racialTraits: {
                abilityScoreIncrease: {
                    name: "Ability Score Increase",
                    description: "Your Intelligence score increases by 1.",
                    intelligence: 1
                },
                darkvision: {
                    name: "Darkvision",
                    description: "You can see in dim light within 60 feet of you as if it were bright light, and in darkness as if it were dim light. Your ties to the Elemental Plane of Fire make your darkvision unusual: everything you see in darkness is in a shade of red.",
                    value: 60
                },
                fireResistance: {
                    name: "Fire Resistance",
                    description: "You have resistance to fire damage.",
                },
                reachToTheBlaze: {
                    name: "Reach to the Blaze",
                    description: "You know the produce flame cantrip. Once you reach 3rd level, you can cast the burning hands spell once with this trait as a 1st-level spell, and you regain the ability to cast it this way when you finish a long rest. Constitution is your spellcasting ability for these spells."
                }
            }
        },
        water: {
            name: "Water Genasi",
            description: "The lapping of waves, the spray of sea foam on the wind, the ocean depths—all of these things call to your heart. You wander freely and take pride in your independence, though others might consider you selfish. Most water genasi look as if they just finished bathing, with beads of moisture collecting on their skin and hair. They smell of fresh rain and clean water. Blue or green skin is common, and most have somewhat overlarge eyes, blue-black in color. A water genasi’s hair might float freely, swaying and waving as if underwater. Some have voices with undertones reminiscent of whale song or trickling streams.",
            racialTraits: {
                abilityScoreIncrease: {
                    name: "Ability Score Increase",
                    description: "Your Wisdom score increases by 1.",
                    wisdom: 1
                },
                acidResistance: {
                    name: "Acid Resistance",
                    description: "You have resistance to acid damage."
                },
                amphibious: {
                    name: "Amphibious",
                    description: "You can breathe air and water."
                },
                swim: {
                    name: "Swim",
                    description: "You have a swimming speed of 30 feet."
                },
                callToTheWave: {
                    name: "Call to the Wave",
                    description: "You know the shape water cantrip. When you reach 3rd level, you can cast the create or destroy water spell as a 2nd-level spell once with this trait, and you regain the ability to cast it this way when you finish a long rest. Constitution is your spellcasting ability for these spells."
                }
            }
        }
    }
};
// Gnome
const gnome = {
    name: "Gnome",
    description: "A gnome’s energy and enthusiasm for living shines through every inch of his or her tiny body.",
    racialTraits: {
        abilityScoreIncrease: {
            name: "Ability Score Increase",
            description: "Your Intelligence score increases by 2.",
            intelligence: 2
        },
        age: {
            name: "Age",
            description: "Gnomes mature at the same rate humans do, and most are expected to settle down into an adult life by around age 40. They can live 350 to almost 500 years."
        },
        size: {
            name: "Size",
            description: "Gnomes are between 3 and 4 feet tall and average about 40 pounds. Your size is Small.",
            value: "Small"
        },
        speed: {
            name: "Speed",
            description: "Your base walking speed is 25 feet.",
            value: 25
        },
        darkvision: {
            name: "Darkvision",
            value: 60,
            description: "Accustomed to life underground, you have superior vision in dark and dim conditions. You can see in dim light within 60 feet of you as if it were bright light, and in darkness as if it were dim light. You can’t discern color in darkness, only shades of gray."
        },
        gnomeCunning: {
            name: "Gnome Cunning",
            description: "You have advantage on all Intelligence, Wisdom, and Charisma saving throws against magic."
        },
        languages: {
            name: "Languages",
            description: "You can speak, read, and write Common and Gnomish. The Gnomish language, which uses the Dwarvish script, is renowned for its technical treatises and its catalogs of knowledge about the natural world.",
            languages: ["Common", "Gnomish"]
        }
    },
    subraces: {
        forestGnome: {
            name: "Forest Gnome",
            description: "As a forest gnome, you have a natural knack for illusion and inherent quickness and stealth. In the worlds of D&D, forest gnomes are rare and secretive. They gather in hidden communities in sylvan forests, using illusions and trickery to conceal themselves from threats or to mask their escape should they be detected. Forest gnomes tend to be friendly with other good-spirited woodland folk, and they regard elves and good fey as their most important allies. These gnomes also befriend small forest animals and rely on them for information about threats that might prowl their lands.",
            racialTraits: {
                abilityScoreIncrease: {
                    name: "Ability Score Increase",
                    description: "Your Dexterity score increases by 1.",
                    dexterity: 1
                },
                naturalIllusionist: {
                    name: "Natural Illusionist",
                    description: "You know the minor illusion cantrip. Intelligence is your spellcasting ability for it."
                },
                speakWithSmallBeasts: {
                    name: "Speak with Small Beasts",
                    description: "Through sounds and gestures, you can communicate simple ideas with Small or smaller beasts. Forest gnomes love animals and often keep squirrels, badgers, rabbits, moles, woodpeckers, and other creatures as beloved pets."
                }
            }
        },
        rockGnome: {
            name: "Rock Gnome",
            description: "As a rock gnome, you have a natural inventiveness and hardiness beyond that of other gnomes. Most gnomes in the worlds of D&D are rock gnomes, including the tinker gnomes of the Dragonlance setting.",
            racialTraits: {
                abilityScoreIncrease: {
                    name: "Ability Score Increase",
                    description: "Your Constitution score increases by 1.",
                    constitution: 1
                },
                artificersLore: {
                    name: "Artificer’s Lore",
                    description: "Whenever you make an Intelligence (History) check related to magic items, alchemical objects, or technological devices, you can add twice your proficiency bonus, instead of any proficiency bonus you normally apply."
                },
                tinker: {
                    name: "Tinker",
                    description: "You have proficiency with artisan’s tools (tinker’s tools). Using those tools, you can spend 1 hour and 10 gp worth of materials to construct a Tiny clockwork device (AC 5, 1 hp). The device ceases to function after 24 hours (unless you spend 1 hour repairing it to keep the device functioning), or when you use your action to dismantle it; at that time, you can reclaim the materials used to create it. You can have up to three such devices active at a time. When you create a device, choose one of the following options: 1) Clockwork Toy. This toy is a clockwork animal, monster, or person, such as a frog, mouse, bird, dragon, or soldier. When placed on the ground, the toy moves 5 feet across the ground on each of your turns in a random direction. It makes noises as appropriate to the creature it represents. 2) Fire Starter. The device produces a miniature flame, which you can use to light a candle, torch, or campfire. Using the device requires your action. 3) Music Box. When opened, this music box plays a single song at a moderate volume. The box stops playing when it reaches the song’s end or when it is closed."
                }
            }
        }
    }
};
// Half-Elf
const halfElf = {
    name: "Half-Elf",
    description: "Half-elves combine what some say are the best qualities of their elf and human parents.",
    racialTraits: {
        abilityScoreIncrease: {
            name: "Ability Score Increase",
            description: "Your Charisma score increases by 2, and two other ability scores of your choice increase by 1.",
            charisma: 2
        },
        age: {
            name: "Age",
            description: "Half-elves mature at the same rate humans do and reach adulthood around the age of 20. They live much longer than humans, however, often exceeding 180 years."
        },
        size: {
            name: "Size",
            description: "Half-elves are about the same size as humans, ranging from 5 to 6 feet tall. Your size is Medium.",
            value: "Medium"
        },
        speed: {
            name: "Speed",
            description: "Your base walking speed is 30 feet.",
            value: 30
        },
        darkvision: {
            name: "Darkvision",
            value: 60,
            description: "Accustomed to twilit forests and the night sky, you have superior vision in dark and dim conditions. You can see in dim light within 60 feet of you as if it were bright light, and in darkness as if it were dim light. You can’t discern color in darkness, only shades of gray."
        },
        feyAncestry: {
            name: "Fey Ancestry",
            description: "You have advantage on saving throws against being charmed, and magic can’t put you to sleep."
        },
        skillVersatility: {
            name: "Skill Versatility",
            description: "You gain proficiency in two skills of your choice."
        },
        languages: {
            name: "Languages",
            description: "You can speak, read, and write Common, Elvish, and one extra language of your choice.",
            languages: ["Common", "Elvish"]
        }
    }
};
// Half-Orc
const halfOrc = {
    name: "Half-Orc",
    description: "Some half-orcs rise to become proud leaders of orc communities. Some venture into the world to prove their worth. Many of these become adventurers, achieving greatness for their mighty deeds.",
    racialTraits: {
        abilityScoreIncrease: {
            name: "Ability Score Increase",
            description: "Your Strength score increases by 2, and your Constitution score increases by 1.",
            strength: 2,
            constitution: 1
        },
        age: {
            name: "Age",
            description: "Half-orcs mature a little faster than humans, reaching adulthood around age 14. They age noticeably faster and rarely live longer than 75 years."
        },
        size: {
            name: "Size",
            description: "Half-orcs are somewhat larger and bulkier than humans, and they range from 5 to well over 6 feet tall. Your size is Medium.",
            value: "Medium"
        },
        speed: {
            name: "Speed",
            description: "Your base walking speed is 30 feet.",
            value: 30
        },
        darkvision: {
            name: "Darkvision",
            description: "Thanks to your orc blood, you have superior vision in dark and dim conditions. You can see in dim light within 60 feet of you as if it were bright light, and in darkness as if it were dim light. You can’t discern color in darkness, only shades of gray.",
            value: 60
        },
        menacing: {
            name: "Menacing",
            description: "You gain proficiency in the Intimidation skill."
        },
        relentlessEndurance: {
            name: "Relentless Endurance",
            description: "When you are reduced to 0 hit points but not killed outright, you can drop to 1 hit point instead. You can’t use this feature again until you finish a long rest."
        },
        savageAttacks: {
            name: "Savage Attacks",
            description: "When you score a critical hit with a melee weapon attack, you can roll one of the weapon’s damage dice one additional time and add it to the extra damage of the critical hit."
        },
        languages: {
            name: "Languages",
            description: "You can speak, read, and write Common and Orc. Orc is a harsh, grating language with hard consonants. It has no script of its own but is written in the Dwarvish script.",
            languages: ["Common", "Orc"]
        }
    }
};
//Halfling
const halfling = {
    name: "Halfling",
    description: "The diminutive halflings survive in a world full of larger creatures by avoiding notice or, barring that, avoiding offense.",
    racialTraits: {
        abilityScoreIncrease: {
            name: "Ability Score Increase",
            description: "Your Dexterity score increases by 2.",
            dexterity: 2
        },
        age: {
            name: "Age",
            description: "A halfling reaches adulthood at the age of 20 and generally lives into the middle of his or her second century."
        },
        size: {
            name: "Size",
            description: "Halflings average about 3 feet tall and weigh about 40 pounds. Your size is Small.",
            value: "Small"
        },
        speed: {
            name: "Speed",
            description: "Your base walking speed is 25 feet.",
            value: 25
        },
        lucky: {
            name: "Lucky",
            description: "When you roll a 1 on the d20 for an attack roll, ability check, or saving throw, you can reroll the die and must use the new roll."
        },
        brave: {
            name: "Brave",
            description: "You have advantage on saving throws against being frightened."
        },
        halflingNimbleness: {
            name: "Halfling Nimbleness",
            description: "You can move through the space of any creature that is of a size larger than yours."
        },
        languages: {
            name: "Languages",
            description: "You can speak, read, and write Common and Halfling. The Halfling language isn’t secret, but halflings are loath to share it with others. They write very little, so they don’t have a rich body of literature. Their oral tradition, however, is very strong. Almost all halflings speak Common to converse with the people in whose lands they dwell or through which they are traveling.",
            languages: ["Common", "Halfling"]
        }
    },
    subraces: {
        ghostwise: {
            name: "Ghostwise Halfling",
            description: "Ghostwise halflings trace their ancestry back to a war among halfling tribes that sent their ancestors into flight from Luiren. Ghostwise halflings are the rarest of the hin, found only in the Chondalwood and a few other isolated forests, clustered in tight-knit clans. Many ghostwise clans select a natural landmark as the center of their territory, and members carry a piece of that landmark with them at all times. Clan warriors known as nightgliders bond with and ride giant owls as mounts. Because these folk are clannish and mistrustful of outsiders, ghostwise halfling adventurers are rare. Ask your DM if you can play a member of this subrace, which has the halfling traits in the Player’s Handbook, plus the subrace traits below.",
            racialTraits: {
                abilityScoreIncrease: {
                    name: "Ability Score Increase",
                    description: "Your Wisdom score increases by 1.",
                    wisdom: 1
                },
                silentSpeech: {
                    name: "Silent Speech",
                    description: "You can speak telepathically to any creature within 30 feet of you. The creature understands you only if the two of you share a language. You can speak telepathically in this way to one creature at a time."
                }
            }
        },
        lightfoot: {
            name: "Lightfoot Halfling",
            description: "As a lightfoot halfling, you can easily hide from notice, even using other people as cover. You’re inclined to be affable and get along well with others. In the Forgotten Realms, lightfoot halflings have spread the farthest and thus are the most common variety. Lightfoots are more prone to wanderlust than other halflings, and often dwell alongside other races or take up a nomadic life. In the world of Greyhawk, these halflings are called hairfeet or tallfellows.",
            racialTraits: {
                abilityScoreIncrease: {
                    name: "Ability Score Increase",
                    description: "Your Charisma score increases by 1.",
                    charisma: 1
                },
                naturallyStealthy: {
                    name: "Naturally Stealthy",
                    description: "You can attempt to hide even when you are obscured only by a creature that is at least one size larger than you."
                } 
            }
        },
        stout: {
            name: "Stout Halfling",
            description: "As a stout halfling, you’re hardier than average and have some resistance to poison. Some say that stouts have dwarven blood. In the Forgotten Realms, these halflings are called stronghearts, and they’re most common in the south.",
            racialTraits: {
                abilityScoreIncrease: {
                    name: "Ability Score Increase",
                    description: "Your Constitution score increases by 1.",
                    constitution: 1
                },
                stoutResilience: {
                    name: "Stout Resilience",
                    description: "You have advantage on saving throws against poison, and you have resistance against poison damage."
                }
            }
        }
    }
};
// Human
const human = {
    name: "Human",
    description: "Humans are the most adaptable and ambitious people among the common races. Whatever drives them, humans are the innovators, the achievers, and the pioneers of the worlds.",
    racialTraits: {
        abilityScoreIncrease: {
            name: "Ability Score Increase",
            description: "Your ability scores each increase by 1.",
            strength: 1,
            dexterity: 1,
            constitution: 1,
            intelligence: 1,
            wisdom: 1,
            charisma: 1
        },
        age: {
            name: "Age",
            description: "Humans reach adulthood in their late teens and live less than a century."
        },
        size: {
            name: "Size",
            description: "Humans vary widely in height and build, from barely 5 feet to well over 6 feet tall. Regardless of your position in that range, your size is Medium.",
            value: "Medium"
        },
        speed: {
            name: "Speed",
            description: "Your base walking speed is 30 feet.",
            value: 30
        },
        languages: {
            name: "Languages",
            description: "You can speak, read, and write Common and one extra language of your choice. Humans typically learn the languages of other peoples they deal with, including obscure dialects. They are fond of sprinkling their speech with words borrowed from other tongues: Orc curses, Elvish musical expressions, Dwarvish military phrases, and so on.",
            languages: ["Common"]
        }
    }
};
// Minotaur
const minotaur = {
    name: "Minotaur",
    description: "Minotaurs are barrel-chested humanoids with heads resembling those of bulls. Blessed with a supernaturally strong sense of direction, minotaurs make great navigators.",
    racialTraits: {
        age: {
            name: "Age",
            description: "The typical life span of a player character in the D&D multiverse is about a century, assuming the character doesn’t meet a violent end on an adventure. Members of some races, such as dwarves and elves, can live for centuries. If typical members of a race can live longer than a century, that fact is mentioned in the race’s description."
        },
        creatureType: {
            name: "Creature Type",
            description: "You are a Humanoid."
        },
        size: {
            name: "Size",
            description: "You are Medium",
            value: "Medium"
        },
        speed: {
            name: "Speed",
            description: "Your walking speed is 30 feet.",
            value: 30
        },
        horns: {
            name: "Horns",
            description: "You have horns that you can use to make unarmed strikes. When you hit with them, the strike deals 1d6 + your Strength modifier piercing damage, instead of the bludgeoning damage normal for an unarmed strike."
        },
        goringRush: {
            name: "Goring Rush",
            description: "Immediately after you take the Dash action on your turn and move at least 20 feet, you can make one melee attack with your Horns as a bonus action."
        },
        hammeringHorns: {
            name: "Hammering Horns",
            description: "Immediately after you hit a creature with a melee attack as part of the Attack action on your turn, you can use a bonus action to attempt to push that target with your horns. The target must be within 5 feet of you and no more than one size larger than you. Unless it succeeds on a Strength saving throw against a DC equal to 8 + your proficiency bonus + your Strength modifier, you push it up to 10 feet away from you."
        },
        labyrinthineRecall: {
            name: "Labyrinthine Recall",
            description: "You always know which direction is north, and you have advantage on any Wisdom (Survival) check you make to navigate or track."
        }
    }
}
// Tiefling
const tiefling = {
    name: "Tiefling",
    description: "To be greeted with stares and whispers, to suffer violence and insult on the street, to see mistrust and fear in every eye: this is the lot of the tiefling.",
    racialTraits: {
        abilityScoreIncrease: {
            name: "Ability Score Increase",
            description: "Your Intelligence score increases by 1, and your Charisma score increases by 2.",
            intelligence: 1,
            charisma: 2
        },
        age: {
            name: "Age",
            description: "Tieflings mature at the same rate as humans but live a few years longer."
        },
        size: {
            name: "Size",
            description: "Tieflings are about the same size and build as humans. Your size is Medium.",
            value: "Medium"
        },
        darkvision: {
            name: "Darkvision",
            description: "Thanks to your infernal heritage, you have superior vision in dark and dim conditions. You can see in dim light within 60 feet of you as if it were bright light, and in darkness as if it were dim light. You can’t discern color in darkness, only shades of gray.",
            value: 60
        },
        hellishResistance: {
            name: "Hellish Resistance",
            description: "You have resistance to fire damage."
        },
        infernalLegacy: {
            name: "Infernal Legacy",
            description: "You know the thaumaturgy cantrip. When you reach 3rd level, you can cast the hellish rebuke spell as a 2nd-level spell once with this trait and regain the ability to do so when you finish a long rest. When you reach 5th level, you can cast the darkness spell once with this trait and regain the ability to do so when you finish a long rest. Charisma is your spellcasting ability for these spells."
        },
        languages: {
            name: "Languages",
            description: "You can speak, read, and write Common and Infernal.",
            languages: ["Common","Infernal"]
        }
    }
};

// Races //
const raceList = [dragonborn, dwarf, elf, genasi, gnome, halfElf, halfOrc, halfling, human, minotaur, tiefling];

// ** Player Characters ** //

// Belmur Boldshield
const belmurBoldshield = {
    id: "belmurBoldshield",
    name: "Belmur Boldshield",
    race: dwarf,
    subrace: dwarf.subraces.mountainDwarf,
    characterLevel: 5,
    classLevel: {
        artificer: 0,
        barbarian: 0,
        bard: 0,
        cleric: 0,
        druid: 0,
        fighter: 0,
        monk: 0,
        paladin: 5,
        ranger: 0,
        rogue: 0,
        sorcerer: 0,
        warlock: 0,
        wizard: 0
    },
    armorClass: 19,
    maxHitPoints: 64,
    currentHitPoints: 64,
    preparedSpells: ["Command", "Compelled Duel", "Searing Smite", "Thunderous Smite", "Warding Bond", "Zone of Truth"],
    abilityScores: [14, 12, 14, 9, 11, 13],
    abilityScoreBonus: [2, 0, 2, 0, 0, 0],
    abilityImprovements: [0, 0, 0, 0, 0, 2],
    get abilityScoreTotal () {
      return {
          strength: this.abilityScores[0]+this.abilityScoreBonus[0]+this.abilityImprovements[0],
          dexterity: this.abilityScores[1]+this.abilityScoreBonus[1]+this.abilityImprovements[1],
          constitution: this.abilityScores[2]+this.abilityScoreBonus[2]+this.abilityImprovements[2],
          intelligence: this.abilityScores[3]+this.abilityScoreBonus[3]+this.abilityImprovements[3],
          wisdom: this.abilityScores[4]+this.abilityScoreBonus[4]+this.abilityImprovements[4],
          charisma: this.abilityScores[5]+this.abilityScoreBonus[5]+this.abilityImprovements[5],
      };  
    },
    weapons: ["Light Hammer", "Warhammer", "Great Axe"]
};
// Blue Walker
const blueWalker = {
    id: "blueWalker",
    name: "Blue Walker",
    race: minotaur,
    subrace: null,
    characterLevel: 5,
    classLevel: {
        artificer: 0,
        barbarian: 3,
        bard: 0,
        cleric: 0,
        druid: 2,
        fighter: 0,
        monk: 0,
        paladin: 0,
        ranger: 0,
        rogue: 0,
        sorcerer: 0,
        warlock: 0,
        wizard: 0
    },
    armorClass: 14,
    maxHitPoints: 39,
    currentHitPoints: 39,
    preparedSpells: ["Gust", "Primary Savagery", "Cure Wounds", "Earth Tremor", "Entangle", "Ice Knife", "Speak with Animals", "Thunderwave", "Beast Sense"],
    abilityScores: [12, 12, 12, 11, 14, 12],
    abilityScoreBonus: [1, 0, 0, 0, 2, 0],
    abilityImprovements: [0, 0, 0, 0, 0, 0],
    get abilityScoreTotal () {
        return {
            strength: this.abilityScores[0]+this.abilityScoreBonus[0]+this.abilityImprovements[0],
            dexterity: this.abilityScores[1]+this.abilityScoreBonus[1]+this.abilityImprovements[1],
            constitution: this.abilityScores[2]+this.abilityScoreBonus[2]+this.abilityImprovements[2],
            intelligence: this.abilityScores[3]+this.abilityScoreBonus[3]+this.abilityImprovements[3],
            wisdom: this.abilityScores[4]+this.abilityScoreBonus[4]+this.abilityImprovements[4],
            charisma: this.abilityScores[5]+this.abilityScoreBonus[5]+this.abilityImprovements[5],
        };  
      },
    weapons: ["Battleaxe", "Glaive", "Greatclub", "Javelin"]
};
// Dexter Slick
const dexterSlick = {
    id: "dexterSlick",
    name: "Dexter Slick",
    race: human,
    subrace: null,
    characterLevel: 5,
    classLevel: {
        artificer: 1,
        barbarian: 0,
        bard: 0,
        cleric: 0,
        druid: 0,
        fighter: 4,
        monk: 0,
        paladin: 0,
        ranger: 0,
        rogue: 0,
        sorcerer: 0,
        warlock: 0,
        wizard: 0
    },
    armorClass: 18,
    maxHitPoints: 38,
    currentHitPoints: 38,
    preparedSpells: ["Mage Hand", "Sword Burst", "Catapult", "Cure Wounds", "Disguise Self", "Sanctuary"],
    abilityScores: [9, 18, 12, 17, 11, 9],
    abilityScoreBonus: [1, 1, 1, 1, 1, 1],
    abilityImprovements: [0, 0, 0, 0, 0, 0],
    get abilityScoreTotal () {
        return {
            strength: this.abilityScores[0]+this.abilityScoreBonus[0]+this.abilityImprovements[0],
            dexterity: this.abilityScores[1]+this.abilityScoreBonus[1]+this.abilityImprovements[1],
            constitution: this.abilityScores[2]+this.abilityScoreBonus[2]+this.abilityImprovements[2],
            intelligence: this.abilityScores[3]+this.abilityScoreBonus[3]+this.abilityImprovements[3],
            wisdom: this.abilityScores[4]+this.abilityScoreBonus[4]+this.abilityImprovements[4],
            charisma: this.abilityScores[5]+this.abilityScoreBonus[5]+this.abilityImprovements[5],
        };  
      },
    weapons: ["Crossbow, light", "Revolver"]
};
// Lythrana Claddath
const lythranaCladdath = {
    id: "lythranaCladdath",
    name: "Lythrana Claddath",
    race: elf,
    subrace: elf.subraces.darkElf,
    characterLevel: 5,
    classLevel: {
        artificer: 0,
        barbarian: 0,
        bard: 0,
        cleric: 0,
        druid: 0,
        fighter: 0,
        monk: 0,
        paladin: 0,
        ranger: 0,
        rogue: 0,
        sorcerer: 0,
        warlock: 5,
        wizard: 0
    },
    armorClass: 13,
    maxHitPoints: 27,
    currentHitPoints: 27,
    preparedSpells: ["Dancing Lights", "Eldritch Blast", "Mind Sliver", "Toll the Dead", "Fearie Fire", "Darkness", "Animate Dead", "Hellish Rebuke", "Mind Spike", "Shadow Blade", "Shield", "Summon Lesser Demons", "Witch Bolt"],
    abilityScores: [13, 13, 8, 12, 17, 15],
    abilityScoreBonus: [0, 0, 2, 0, 0, 1],
    abilityImprovements: [0, 0, 2, 0, 0, 0],
    get abilityScoreTotal () {
      return {
          strength: this.abilityScores[0]+this.abilityScoreBonus[0]+this.abilityImprovements[0],
          dexterity: this.abilityScores[1]+this.abilityScoreBonus[1]+this.abilityImprovements[1],
          constitution: this.abilityScores[2]+this.abilityScoreBonus[2]+this.abilityImprovements[2],
          intelligence: this.abilityScores[3]+this.abilityScoreBonus[3]+this.abilityImprovements[3],
          wisdom: this.abilityScores[4]+this.abilityScoreBonus[4]+this.abilityImprovements[4],
          charisma: this.abilityScores[5]+this.abilityScoreBonus[5]+this.abilityImprovements[5],
      };  
    },
    weapons: ["Dagger", "Scimitar", "Sickle", "Whip"]
};
// Nifi Gnarlbeard
const nifiGnarlbeard = {
    id: "nifiGnarlbeard",
    name: "Nifi Gnarlbeard",
    race: dwarf,
    subrace: dwarf.subraces.hillDwarf,
    characterLevel: 5,
    classLevel: {
        artificer: 0,
        barbarian: 0,
        bard: 0,
        cleric: 0,
        druid: 0,
        fighter: 0,
        monk: 0,
        paladin: 0,
        ranger: 0,
        rogue: 0,
        sorcerer: 0,
        warlock: 0,
        wizard: 5
    },
    armorClass: 9,
    maxHitPoints: 28,
    currentHitPoints: 28,
    preparedSpells: ["Dancing Lights", "Fire Bolt", "Frostbite", "Message", "Comprehend Languages", "False Life", "Grease", "Ice Knife", "Identify", "Shield", "Invisibility", "Mind Spike", "Mirror Image", "Misty Step", "Melf's Minute Meteors"],
    abilityScores: [13, 9, 10, 16, 15, 13],
    abilityScoreBonus: [0, 0, 2, 0, 1, 0],
    abilityImprovements: [0, 0, 0, 2, 0, 0],
    get abilityScoreTotal () {
      return {
          strength: this.abilityScores[0]+this.abilityScoreBonus[0]+this.abilityImprovements[0],
          dexterity: this.abilityScores[1]+this.abilityScoreBonus[1]+this.abilityImprovements[1],
          constitution: this.abilityScores[2]+this.abilityScoreBonus[2]+this.abilityImprovements[2],
          intelligence: this.abilityScores[3]+this.abilityScoreBonus[3]+this.abilityImprovements[3],
          wisdom: this.abilityScores[4]+this.abilityScoreBonus[4]+this.abilityImprovements[4],
          charisma: this.abilityScores[5]+this.abilityScoreBonus[5]+this.abilityImprovements[5],
      };  
    },
    weapons: ["Quaterstaff"]
};
// Retra Flickerboot
const retraFlickerboot = {
    id: "retraFlickerboot",
    name: "Retra Flickerboot",
    race: gnome,
    subrace: gnome.subraces.rockGnome,
    characterLevel: 5,
    classLevel: {
        artificer: 0,
        barbarian: 0,
        bard: 0,
        cleric: 0,
        druid: 0,
        fighter: 0,
        monk: 0,
        paladin: 0,
        ranger: 0,
        rogue: 5,
        sorcerer: 0,
        warlock: 0,
        wizard: 0
    },
    armorClass: 14,
    maxHitPoints: 38,
    currentHitPoints: 38,
    preparedSpells: [],
    abilityScores: [12, 16, 13, 13, 13, 14],
    abilityScoreBonus: [0, 0, 1, 2, 0, 0],
    abilityImprovements: [0, 0, 0, 0, 0, 0],
    get abilityScoreTotal () {
      return {
          strength: this.abilityScores[0]+this.abilityScoreBonus[0]+this.abilityImprovements[0],
          dexterity: this.abilityScores[1]+this.abilityScoreBonus[1]+this.abilityImprovements[1],
          constitution: this.abilityScores[2]+this.abilityScoreBonus[2]+this.abilityImprovements[2],
          intelligence: this.abilityScores[3]+this.abilityScoreBonus[3]+this.abilityImprovements[3],
          wisdom: this.abilityScores[4]+this.abilityScoreBonus[4]+this.abilityImprovements[4],
          charisma: this.abilityScores[5]+this.abilityScoreBonus[5]+this.abilityImprovements[5],
      };  
    },
    weapons: ["Dagger", "Dagger", "Scimitar", "Shortbow"]
};
//Thorn Stonefall
const thornStonefall = {
    id: "thornStonefall",
    name: "Thorn Stonefall",
    race: dwarf,
    subrace: dwarf.subraces.hillDwarf,
    characterLevel: 5,
    classLevel: {
        artificer: 0,
        barbarian: 0,
        bard: 0,
        cleric: 5,
        druid: 0,
        fighter: 0,
        monk: 0,
        paladin: 0,
        ranger: 0,
        rogue: 0,
        sorcerer: 0,
        warlock: 0,
        wizard: 0
    },
    armorClass: 18,
    maxHitPoints: 53,
    currentHitPoints: 53,
    preparedSpells: ["Guidance", "Sacred Flame", "Toll the Dead", "Word of Radiance", "Bless", "Cure Wounds", "Guiding Bolt", "Healing Word", "Inflict Wounds", "Calm Emotions", "Healing Word", "Lesser Restoration", "Prayer of Healing", "Spiritual Weapon", "Zone of Truth", "Beacon of Hope", "Guiding Bolt", "Revivify", "Speak with Dead", "Spirit Shroud"],
    abilityScores: [15, 14, 15, 8, 17, 8],
    abilityScoreBonus: [0, 0, 2, 0, 1, 0],
    abilityImprovements: [1, 0, 1, 0, 0, 0],
    get abilityScoreTotal () {
      return {
          strength: this.abilityScores[0]+this.abilityScoreBonus[0]+this.abilityImprovements[0],
          dexterity: this.abilityScores[1]+this.abilityScoreBonus[1]+this.abilityImprovements[1],
          constitution: this.abilityScores[2]+this.abilityScoreBonus[2]+this.abilityImprovements[2],
          intelligence: this.abilityScores[3]+this.abilityScoreBonus[3]+this.abilityImprovements[3],
          wisdom: this.abilityScores[4]+this.abilityScoreBonus[4]+this.abilityImprovements[4],
          charisma: this.abilityScores[5]+this.abilityScoreBonus[5]+this.abilityImprovements[5],
      };
    },
    weapons: ["Cross Bow, light", "Warhammer"]
}
// Zaheer Beifong
const zaheerBeifong = {
    id: "zaheerBeifong",
    name: "Zaheer Beifong",
    race: genasi,
    subrace: genasi.subraces.air,
    characterLevel: 5,
    get classList () {
        for (const [key, value] of Object.entries(this.classLevel)) {
            console.log(`${key}: ${value}`);
        }
    },
    classLevel: {
        artificer: 0,
        barbarian: 0,
        bard: 0,
        cleric: 0,
        druid: 0,
        fighter: 0,
        monk: 5,
        paladin: 0,
        ranger: 0,
        rogue: 0,
        sorcerer: 0,
        warlock: 0,
        wizard: 0
    },
    armorClass: 16,
    maxHitPoints: 33,
    currentHitPoints: 33,
    preparedSpells: ["Shocking Grasp", "Feather Fall", "Levitate"],
    abilityScores: [11, 18, 14, 13, 14, 14],
    abilityScoreBonus: [0, 0, 0, 1, 0, 2],
    abilityImprovements: [0, 0, 0, 0, 0, 0],
    get abilityScoreTotal () {
      return {
          strength: this.abilityScores[0]+this.abilityScoreBonus[0]+this.abilityImprovements[0],
          dexterity: this.abilityScores[1]+this.abilityScoreBonus[1]+this.abilityImprovements[1],
          constitution: this.abilityScores[2]+this.abilityScoreBonus[2]+this.abilityImprovements[2],
          intelligence: this.abilityScores[3]+this.abilityScoreBonus[3]+this.abilityImprovements[3],
          wisdom: this.abilityScores[4]+this.abilityScoreBonus[4]+this.abilityImprovements[4],
          charisma: this.abilityScores[5]+this.abilityScoreBonus[5]+this.abilityImprovements[5],
      };
    },
    weapons: ["Javelin", "Dart", "Dagger"]
}

const playerCharacters = [belmurBoldshield, blueWalker, dexterSlick, lythranaCladdath, nifiGnarlbeard, retraFlickerboot, thornStonefall, zaheerBeifong];

// Dice Roller

function getRandomInt (min,max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

//Remove all the child nodes from the parent object.
    function removeAllChildNodes(parent) {
        while (parent.firstChild) {
            parent.removeChild(parent.firstChild);
        }
    }

// Testing

const form = document.getElementById("form");
const characterSelect =  document.getElementById("character");
const mainDiv = document.getElementById("main");

function generateOptions(arrayName) {
    const selectField = document.getElementById('character');
  
    // Clear existing options
    selectField.innerHTML = '';
  
    // Generate options for each object in the array
    for (let i = 0; i < arrayName.length; i++) {
      const object = arrayName[i];
  
      // Create option element
      const option = document.createElement('option');
      option.value = object.id;
      console.log(option.value);
      option.textContent = object.name;
  
      // Append option to select field
      selectField.appendChild(option);
    }
};

  function generateCharacterInfo() {

    //Store the selectedCharacter value
    let selectedCharacter = eval(characterSelect.value);
    
    // Create an H1 element and...
    let characterNameHTML = document.createElement('h1');
    // set the ID to characterName
    characterNameHTML.setAttribute('id', 'characterName');
    //Set the characterName object to have a text value of the selectedCharacter name property
    characterNameHTML.textContent = selectedCharacter.name;
    //Insert the characterNameHTML object into the mainDiv
    mainDiv.appendChild(characterNameHTML);
    
    // Create a P element and...
    let characterDescription = document.createElement('p');
    // Set the ID to characterDescription
    characterDescription.setAttribute('id', 'characterDescription');
    //Set the characterDescription object to have a text value that describes the selectedCharacter's race and that race's description property.
    characterDescription.innerHTML = selectedCharacter.name + " is a <strong>" + selectedCharacter.race.name + ".</strong> " + selectedCharacter.race.description;
    // Insert the characterDescription object into the mainDiv
    mainDiv.appendChild(characterDescription);

    // Create a DIV element and...
    let characterAbilitiesHTML = document.createElement('div');
    // Set the ID to characterAbilities
    characterAbilitiesHTML.setAttribute('id', 'characterAbilities');
    // Insert the characterAbilitiesHTML object into the mainDiv
    mainDiv.appendChild(characterAbilitiesHTML);
    // Make sure there are no objects within the characterAbilitiesHTML object 

    function generateObjectKeys(obj) {
        for (const [key, value] of Object.entries(obj)) {
            let div = document.createElement('div');
            let heading3 = document.createElement('h3');
            let para = document.createElement('p');
            div.appendChild(heading3);
            div.appendChild(para);
            characterAbilitiesHTML.appendChild(div);
            heading3.innerHTML = value.name;
            para.innerHTML = value.description;
        }
      };

    generateObjectKeys(selectedCharacter.race.racialTraits);

    if (selectedCharacter.subrace) {
        let heading2 = document.createElement('h2');
        heading2.innerHTML = selectedCharacter.subrace.name;
        let para = document.createElement('p');
        para.innerHTML = selectedCharacter.subrace.description;
        characterAbilitiesHTML.appendChild(heading2);
        characterAbilitiesHTML.appendChild(para);
        generateObjectKeys(selectedCharacter.subrace.racialTraits);
    }


};


window.addEventListener("load", generateOptions(playerCharacters));
form.addEventListener("change", removeAllChildNodes(mainDiv));
form.addEventListener("change", generateCharacterInfo);


