import React, { useEffect, useRef, useState } from 'react';
import './FruitSelect.css';

// 이미지는 public/images 폴더에 넣어주세요. 파일이 없으면 이모지가 대신 표시됩니다.
const FRUITS = [
    { value: 'apple', label: '사과', image: '/images/apple.jpg', emoji: '🍎', color: '#ef4444' },
    { value: 'banana', label: '바나나', image: '/images/banana.jpg', emoji: '🍌', color: '#facc15' },
    { value: 'grapes', label: '포도', image: '/images/grapes.jpg', emoji: '🍇', color: '#8b5cf6' },
    { value: 'melon', label: '참외', image: '/images/melon.jpg', emoji: '🍈', color: '#eab308' },
];

// 파티클 12개를 원형으로 퍼뜨리기 위한 이동 좌표
const PARTICLES = Array.from({ length: 12 }, (_, i) => {
    const angle = (i / 12) * Math.PI * 2;
    const distance = i % 2 === 0 ? 105 : 80;
    return {
        x: `${Math.round(Math.cos(angle) * distance)}px`,
        y: `${Math.round(Math.sin(angle) * distance)}px`,
    };
});

function FruitSelect() {
    const [value, setValue] = useState('');
    const [isOpen, setIsOpen] = useState(false);
    const [effectKey, setEffectKey] = useState(0);
    const [imageFailed, setImageFailed] = useState(false);
    const selectRef = useRef(null);

    const selected = FRUITS.find((fruit) => fruit.value === value);

    // 메뉴 바깥을 클릭하거나 Esc를 누르면 닫기
    useEffect(() => {
        const handleOutsideClick = (event) => {
            if (selectRef.current && !selectRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };
        const handleEscape = (event) => {
            if (event.key === 'Escape') setIsOpen(false);
        };

        document.addEventListener('mousedown', handleOutsideClick);
        document.addEventListener('keydown', handleEscape);
        return () => {
            document.removeEventListener('mousedown', handleOutsideClick);
            document.removeEventListener('keydown', handleEscape);
        };
    }, []);

    const handleChange = (nextValue) => {
        setValue(nextValue);
        setImageFailed(false);
        setIsOpen(false);
        setEffectKey((key) => key + 1); // key가 바뀌면 애니메이션이 다시 실행됨
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        alert('선택한 과일: ' + (selected ? selected.label : '없음'));
    };

    return (
        <form className="fruit-form" onSubmit={handleSubmit}>
            <span className="fruit-label" id="fruit-label">과일을 선택하시오:</span>

            <div className={`fruit-select ${isOpen ? 'is-open' : ''}`} ref={selectRef}>
                <button
                    type="button"
                    className="fruit-trigger"
                    aria-haspopup="listbox"
                    aria-expanded={isOpen}
                    aria-labelledby="fruit-label"
                    onClick={() => setIsOpen((open) => !open)}
                >
                    <span className={selected ? '' : 'fruit-placeholder'}>
                        {selected ? selected.label : '과일을 골라주세요'}
                    </span>
                    <span className="fruit-arrow" aria-hidden="true" />
                </button>

                <ul className="fruit-menu" role="listbox" aria-labelledby="fruit-label">
                    {FRUITS.map((fruit, index) => (
                        <li key={fruit.value} role="presentation" style={{ '--i': index }}>
                            <button
                                type="button"
                                role="option"
                                aria-selected={value === fruit.value}
                                tabIndex={isOpen ? 0 : -1}
                                className={`fruit-option ${value === fruit.value ? 'is-selected' : ''}`}
                                onClick={() => handleChange(fruit.value)}
                            >
                                {fruit.label}
                            </button>
                        </li>
                    ))}
                </ul>
            </div>

            <div className="fruit-preview" aria-live="polite">
                {!selected && <p className="fruit-empty">선택한 과일이 여기에 나타나요</p>}

                {selected && (
                    <React.Fragment key={effectKey}>
                        <span className="fruit-ring" style={{ borderColor: selected.color }} />
                        {PARTICLES.map((particle, index) => (
                            <span
                                key={index}
                                className="fruit-particle"
                                style={{ '--x': particle.x, '--y': particle.y, '--color': selected.color }}
                            />
                        ))}

                        {imageFailed ? (
                            <span className="fruit-emoji" role="img" aria-label={selected.label}>
                                {selected.emoji}
                            </span>
                        ) : (
                            <img
                                className="fruit-image"
                                src={selected.image}
                                alt={selected.label}
                                onError={() => setImageFailed(true)}
                            />
                        )}
                        <p className="fruit-name">{selected.label}</p>
                    </React.Fragment>
                )}
            </div>
        </form>
    );
}

export default FruitSelect;
