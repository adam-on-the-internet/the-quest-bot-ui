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
    questInfo: any;
    chapterInfo: any;
    uniqueQuestCount: number,
    uniqueChapterCount: number,
    age: number,
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
