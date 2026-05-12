interface SkillItem {
    name: string;
    icon: string;
    experience: string;
}

export interface SkillType {
    title: string;
    content: SkillItem[];
}
