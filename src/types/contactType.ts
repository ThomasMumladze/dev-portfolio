interface SocialUrl {
    linkedIn: string;
    gitHub: string;
    facebook: string;
    instagram: string;
}

export interface ContactInfo {
    contactId: number;
    email: string;
    location: string;
    socialUrl: SocialUrl;
    createdAt: string;
    updatedAt: string;
}
