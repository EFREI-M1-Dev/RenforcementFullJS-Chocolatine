export function isNotDefined(str: string): boolean {
    return !str;
}

export function containsSpaces(str: string): boolean {
    return str.includes(" ");
}

export function isNegativeNumber(nbr: number): boolean {
    return nbr < 0;
}