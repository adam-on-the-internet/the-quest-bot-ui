export interface Hero {
    announcement: string;
    name: string;
    path: string;
    weather: string;
    race: string;
    alignment: string;
    _id: string;
    hpText: string;
    expText: string;
    distanceText: string;
    currentQuest: string;
    currentQuestDetails: string;
    currentChapter: string;
    level: number;
    expPoints: number;
    status: number;
    specialMoves: SpecialMove[];
    standardMoves: SpecialMove[];
    stats: HeroStats;
    inventory: string[];
    party: string[];
    conditions: string[];
    storyOver: boolean;
    journal: string[];
    backstory: string;
    startDate: number;
    deathDate: number;
    completedChapters: string[];
    completedQuests: string[];
    uniqueCompletedChapters: string[];
    uniqueCompletedQuests: string[];
    distanceTravelledTotal: number;
    damageTakenTotal: number;
    age: number;
    seed: number;
}

export interface SpecialMove {
    name: string;
    multiplier: number;
    type: string;
}

export interface HeroStats {
    strength: number;
    dexterity: number;
    wisdom: number;
    charisma: number;
    advantage: string;
    disadvantage: string;
}
