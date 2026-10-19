export function dateCompare(a: string, b: string) {
    if (typeof Temporal === 'undefined' || Temporal === undefined) {
        // Fallback to Date if Temporal API is not available
        const dateA = new Date(a);
        const dateB = new Date(b);
        return dateA.getTime() - dateB.getTime();
    }

    return Temporal.PlainDate.compare(a, b);
}