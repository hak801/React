export const BASE_GUESTS = 2;
export const MAX_GUESTS = 6;

export const emptySearch = {place: '', checkIn: '', checkOut: '', guests: 0};

export function toDateString(date) {
    const y = date.getFullYear();
    const m = String(date.getMonth() + 1).padStart(2, '0');
    const d = String(date.getDate()).padStart(2, '0');
    return `${y}-${m}-${d}`;
}

function parseDate(value) {
    return new Date(value + 'T00:00:00');
}

export function today() {
    return toDateString(new Date());
}

export function addDays(value, n) {
    const d = parseDate(value);
    d.setDate(d.getDate() + n);
    return toDateString(d);
}

export function nightsBetween(checkIn, checkOut) {
    if (!checkIn || !checkOut) return 0;
    return Math.round((parseDate(checkOut) - parseDate(checkIn)) / (1000 * 60 * 60 * 24));
}

export function formatRange(checkIn, checkOut) {
    const a = parseDate(checkIn);
    const b = parseDate(checkOut);
    const start = `${a.getMonth() + 1}월 ${a.getDate()}일`;
    const end = a.getMonth() === b.getMonth()
        ? `${b.getDate()}일`
        : `${b.getMonth() + 1}월 ${b.getDate()}일`;
    return `${start}~${end}`;
}

export function hasValidDates(search) {
    return nightsBetween(search.checkIn, search.checkOut) > 0;
}

export const FALLBACK_IMG = 'data:image/svg+xml;charset=UTF-8,' + encodeURIComponent(
    '<svg xmlns="http://www.w3.org/2000/svg" width="600" height="570" viewBox="0 0 600 570">' +
    '<rect width="600" height="570" fill="#f1f1f1"/>' +
    '<text x="300" y="300" font-size="72" text-anchor="middle">🏠</text>' +
    '</svg>'
);

export function handleImageError(e) {
    e.currentTarget.onerror = null;
    e.currentTarget.src = FALLBACK_IMG;
}

export function loadSaved(key, fallback) {
    try {
        const saved = window.localStorage.getItem(key);
        return saved ? JSON.parse(saved) : fallback;
    } catch (e) {
        return fallback;
    }
}

export function save(key, value) {
    try {
        window.localStorage.setItem(key, JSON.stringify(value));
    } catch (e) {
    }
}

export function onEnterOrSpace(callback) {
    return (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            callback();
        }
    };
}
