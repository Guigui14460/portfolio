export interface LanguageOption {
    readonly value: string;
    readonly label: string;
    readonly color: string;
    readonly type: string;
};

export interface KeywordOption {
    readonly value: string;
    readonly label: string;
    readonly type: string;
};

export interface GroupedOption {
    readonly label: string;
    readonly options: readonly LanguageOption[] | readonly KeywordOption[];
}
