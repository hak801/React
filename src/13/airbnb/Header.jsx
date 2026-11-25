import React, {useEffect, useRef, useState} from 'react';
import {MAX_GUESTS, addDays, nightsBetween, today} from "./utils";

export const tabs = [
    {id: 'stay', icon: '🏠', label: '숙소'},
    {id: 'exp', icon: '🎈', label: '체험', desc: '현지 호스트와 함께하는 특별한 체험을 곧 만나보실 수 있어요.'},
    {id: 'service', icon: '🛎️', label: '서비스', desc: '셰프, 사진 촬영 같은 숙소 서비스를 곧 만나보실 수 있어요.'},
];

function Header(props) {
    const {search, onSearch, onHome, tab, onTabChange, onNavigate, onNotice, wishCount, tripCount} = props;
    const [place, setPlace] = useState(search.place);
    const [checkIn, setCheckIn] = useState(search.checkIn);
    const [checkOut, setCheckOut] = useState(search.checkOut);
    const [guests, setGuests] = useState(search.guests);
    const [menuOpen, setMenuOpen] = useState(false);
    const menuRef = useRef(null);

    useEffect(() => {
        setPlace(search.place);
        setCheckIn(search.checkIn);
        setCheckOut(search.checkOut);
        setGuests(search.guests);
    }, [search]);

    useEffect(() => {
        if (!menuOpen) return;
        const handleOutside = (e) => {
            if (menuRef.current && !menuRef.current.contains(e.target)) setMenuOpen(false);
        };
        const handleEsc = (e) => {
            if (e.key === 'Escape') setMenuOpen(false);
        };
        document.addEventListener('mousedown', handleOutside);
        document.addEventListener('keydown', handleEsc);
        return () => {
            document.removeEventListener('mousedown', handleOutside);
            document.removeEventListener('keydown', handleEsc);
        };
    }, [menuOpen]);

    const handleCheckIn = (value) => {
        setCheckIn(value);
        if (value && checkOut && nightsBetween(value, checkOut) <= 0) {
            setCheckOut(addDays(value, 1));
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSearch({place: place.trim(), checkIn, checkOut, guests});
    };

    const goTo = (page) => {
        setMenuOpen(false);
        onNavigate(page);
    };

    return (
        <header className="header">
            <div className="header-top">
                <button className="logo" onClick={onHome}>
                    <span className="logo-mark">⌂</span> stayhub
                </button>

                <nav className="tabs">
                    {tabs.map((t) => (
                        <button
                            key={t.id}
                            className={tab === t.id ? "tab active" : "tab"}
                            onClick={() => onTabChange(t.id)}
                            aria-current={tab === t.id ? "page" : undefined}
                        >
                            <span className="tab-icon">{t.icon}</span>{t.label}
                        </button>
                    ))}
                </nav>

                <div className="header-right">
                    <button className="host-link" onClick={() => onNotice('호스트 등록은 준비 중인 기능입니다.')}>
                        호스트 되기
                    </button>
                    <button className="wish" onClick={() => goTo('wishlist')} aria-label={`위시리스트 ${wishCount}개`}>
                        ♥ {wishCount}
                    </button>
                    <div className="profile" ref={menuRef}>
                        <button
                            className="profile-btn"
                            onClick={() => setMenuOpen(!menuOpen)}
                            aria-haspopup="menu"
                            aria-expanded={menuOpen}
                            aria-label="메뉴 열기"
                        >
                            ☰ <span className="avatar">반</span>
                        </button>
                        {menuOpen && (
                            <div className="profile-menu" role="menu">
                                <button role="menuitem" onClick={() => goTo('wishlist')}>
                                    위시리스트 <span className="menu-count">{wishCount}</span>
                                </button>
                                <button role="menuitem" onClick={() => goTo('trips')}>
                                    예약 내역 <span className="menu-count">{tripCount}</span>
                                </button>
                                <hr/>
                                <button role="menuitem" onClick={() => {
                                    setMenuOpen(false);
                                    onNotice('호스트 등록은 준비 중인 기능입니다.');
                                }}>
                                    호스트 되기
                                </button>
                                <button role="menuitem" onClick={() => {
                                    setMenuOpen(false);
                                    onNotice('도움말 센터는 준비 중입니다.');
                                }}>
                                    도움말 센터
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            </div>

            <form className="search-bar" onSubmit={handleSubmit}>
                <label className="search-field wide">
                    <span className="field-label">여행지</span>
                    <input
                        value={place}
                        onChange={(e) => setPlace(e.target.value)}
                        placeholder="여행지, 숙소 이름 검색 (예: 부산)"
                    />
                </label>
                <label className="search-field">
                    <span className="field-label">체크인</span>
                    <input type="date" value={checkIn} min={today()}
                           onChange={(e) => handleCheckIn(e.target.value)}/>
                </label>
                <label className="search-field">
                    <span className="field-label">체크아웃</span>
                    <input type="date" value={checkOut} min={checkIn ? addDays(checkIn, 1) : today()}
                           onChange={(e) => setCheckOut(e.target.value)}/>
                </label>
                <div className="search-field">
                    <span className="field-label">여행자</span>
                    <div className="guest-counter">
                        <button type="button" onClick={() => setGuests(Math.max(0, guests - 1))}
                                aria-label="게스트 줄이기">−</button>
                        <span>{guests === 0 ? "게스트 추가" : `게스트 ${guests}명`}</span>
                        <button type="button" onClick={() => setGuests(Math.min(MAX_GUESTS, guests + 1))}
                                aria-label="게스트 늘리기">+</button>
                    </div>
                </div>
                <button type="submit" className="search-btn" aria-label="검색">🔍</button>
            </form>
        </header>
    );
}

export default Header;
