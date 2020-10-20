export interface Hero {
    announcement: string;
    name: string;
    _id: string;
    hpText: string;
    distanceText: string;
    level: number;
    expPoints: number;
    specialMoves: SpecialMove[]
    stats: HeroStats;
    questInfo: BasicDetails;
    storyOver: boolean;
    journal: string[];
    backstory: string;
    startDate: number;
    deathDate: number;
    uniqueQuestCount: number;
    uniqueChapterCount: number;
    distanceTravelledTotal: number;
    status: number;
    age: number;
    seed: number;
}

export interface SpecialMove {
    name: string;
    multiplier: number;
    type: string;
}

export interface BasicDetails {
    title: string;
    flavorText: string;
}

export interface HeroStats {
    strength: number;
    dexterity: number;
    wisdom: number;
    charisma: number;
    inventory: string[];
    party: string[];
    advantage: string;
    disadvantage: string;
}
