export function isNotDefined(str: string): boolean {
    return !str;
}

export function containsSpaces(str: string): boolean {
    return str.includes(" ");
}

export function isNegativeNumber(nbr: number): boolean {
    return nbr < 0;
}

export function areSameStrings(str1: string, str2: string): boolean {
    return str1 === str2;
}

export function isArrayEmpty(arr: any[]): boolean {
    return arr.length === 0;
}