const INT_MAX = 2 ** 31 - 1;
const INT_MIN = -(2 ** 31);

export function reverse(x: number): number {
    let n = Math.abs(x);
    let isNegative = x < 0;
    let reversed = 0;

    while (n !== 0) {
        let lastDigit = n % 10;
        reversed = reversed * 10 + lastDigit;
        n = Math.floor(n / 10);

        if (reversed < INT_MIN || reversed > INT_MAX) {
            return 0;
        }
    }

    return isNegative ? -reversed : reversed;
}