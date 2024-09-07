export type BadgeAction = {
    isComplete: boolean;
    text: string;
};

export type Badge = {
    id: string;
    title: string;
    multiplier: number;
    actions?: BadgeAction[];
    description: string;
    selected?: boolean;
};

export type BadgesData = Badge[];