import React from "react";

// 공통 자동차 몸체 (오른쪽을 바라보는 옆모습)
function Car({ bodyColor, windowColor, headlightColor, tailColor }) {
    return (
        <g>
            {/* 차 그림자 */}
            <ellipse cx="200" cy="182" rx="150" ry="8" fill="rgba(0,0,0,0.25)" />

            {/* 몸체 */}
            <path
                d="M60 165 L60 138 Q62 124 82 122 L132 119 L168 88 Q175 82 188 82
                   L256 82 Q269 82 279 90 L312 117 L336 122 Q348 126 348 140
                   L348 165 Q348 172 340 172 L68 172 Q60 172 60 165 Z"
                fill={bodyColor}
            />

            {/* 창문 */}
            <path d="M143 119 L173 92 L215 92 L215 119 Z" fill={windowColor} />
            <path d="M225 92 L262 92 L296 119 L225 119 Z" fill={windowColor} />

            {/* 문 손잡이 */}
            <rect x="196" y="130" width="16" height="4" rx="2" fill="rgba(0,0,0,0.3)" />
            <rect x="262" y="130" width="16" height="4" rx="2" fill="rgba(0,0,0,0.3)" />

            {/* 전조등 / 후미등 */}
            <rect x="336" y="130" width="12" height="9" rx="3" fill={headlightColor} />
            <rect x="60" y="134" width="8" height="9" rx="2" fill={tailColor} />

            {/* 바퀴 */}
            {[115, 290].map((cx) => (
                <g key={cx}>
                    <circle cx={cx} cy="172" r="24" fill="#1c1c1c" />
                    <circle cx={cx} cy="172" r="11" fill="#9a9a9a" />
                    <circle cx={cx} cy="172" r="4" fill="#555" />
                </g>
            ))}
        </g>
    );
}

// 라이트 모드: 맑은 낮 풍경
function DayCar() {
    return (
        <svg viewBox="0 0 400 220" role="img" aria-label="햇살 아래 빨간 자동차">
            <defs>
                <linearGradient id="daySky" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#7cc4ff" />
                    <stop offset="100%" stopColor="#d8efff" />
                </linearGradient>
            </defs>
            <rect width="400" height="220" fill="url(#daySky)" />
            <circle cx="335" cy="45" r="24" fill="#ffd54a" />
            <ellipse cx="90" cy="50" rx="34" ry="12" fill="#ffffff" opacity="0.9" />
            <ellipse cx="120" cy="42" rx="24" ry="10" fill="#ffffff" opacity="0.9" />
            <rect y="178" width="400" height="42" fill="#8d8d8d" />
            <line x1="0" y1="198" x2="400" y2="198" stroke="#f5f5f5" strokeWidth="4" strokeDasharray="20 14" />
            <Car bodyColor="#e53935" windowColor="#cfe9ff" headlightColor="#fff3c4" tailColor="#b71c1c" />
        </svg>
    );
}

// 다크 모드: 밤 풍경 + 전조등 켜짐
function NightCar() {
    const stars = [
        [30, 30], [80, 60], [140, 25], [190, 50], [240, 20], [270, 65], [60, 95], [220, 100],
    ];
    return (
        <svg viewBox="0 0 400 220" role="img" aria-label="밤에 전조등을 켠 자동차">
            <defs>
                <linearGradient id="nightSky" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#0b1026" />
                    <stop offset="100%" stopColor="#243159" />
                </linearGradient>
                <linearGradient id="beam" x1="0" y1="0" x2="1" y2="0">
                    <stop offset="0%" stopColor="#fff6c2" stopOpacity="0.85" />
                    <stop offset="100%" stopColor="#fff6c2" stopOpacity="0" />
                </linearGradient>
            </defs>
            <rect width="400" height="220" fill="url(#nightSky)" />
            {stars.map(([x, y]) => (
                <circle key={`${x}-${y}`} cx={x} cy={y} r="1.6" fill="#ffffff" opacity="0.85" />
            ))}
            {/* 초승달 */}
            <circle cx="335" cy="45" r="22" fill="#f3f0d7" />
            <circle cx="345" cy="38" r="20" fill="#121a3a" />
            <rect y="178" width="400" height="42" fill="#2b2b2f" />
            <rect y="196" width="400" height="4" fill="#5c5c60" />
            {/* 전조등 빛 */}
            <polygon points="346,134 400,112 400,176" fill="url(#beam)" />
            <Car bodyColor="#3949ab" windowColor="#ffd77a" headlightColor="#fff6c2" tailColor="#ff3d3d" />
        </svg>
    );
}

function CarImage({ theme }) {
    return theme === "light" ? <DayCar /> : <NightCar />;
}

export default CarImage;
