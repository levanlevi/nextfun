export type Action = {
    isComplete: boolean;
    text: string;
};

export type Badge = {
    id: string;
    title: string;
    multiplier: number;
    actions?: Action[];
    description: string;
    selected?: boolean;
};

export type BadgesData = Badge[];