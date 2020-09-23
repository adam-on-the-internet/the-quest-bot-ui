export interface Hero {
    name: string;
    announcement: string;
    storyOver: boolean;
    backstory: string;
    hpText: string;
    journal: string[];
    _id: string;
    level: number;
    startDate: number;
    deathDate: number;
    distanceTravelledTotal: number;
    stats: HeroStats;
    questInfo: BasicDetails;
    chapterInfo: BasicDetails;
    uniqueQuestCount: number;
    uniqueChapterCount: number;
    age: number;
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
    item: number;
    ally: number;
    ability: number;
    weakness: number;
}
