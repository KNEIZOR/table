export default function differencePercent(day, yesterday) {
    return Math.round((yesterday / day) * 100 - 100);
}