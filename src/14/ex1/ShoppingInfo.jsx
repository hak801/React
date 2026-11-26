import { useState } from "react";
import "./ShoppingInfo.css";

const MENUS = ["점포 안내", "쇼핑 정보", "신세계 브랜드", "아트&컬처", "매거진", "고객 서비스", "ESG 경영"];
const STORES = ["강남점", "본점", "센텀시티점", "대구점", "대전 Art&Science"];
const TYPES = [
    { key: "theme", label: "테마" },
    { key: "news", label: "쇼핑뉴스" },
    { key: "event", label: "이벤트/사은행사" },
];

const ITEMS = [
    { id: 1, type: "theme", cate: "SEASON OFF", title: "SEASON OFF", date: "26.11.12(목) - 26.11.29(일)", place: "각 층 운매장", img: "/images/shopping1.png" },
    { id: 2, type: "theme", cate: "SALE", title: "SALE", date: "26.11.12(목) - 26.11.29(일)", place: "각 층 운매장", img: "/images/shopping2.png" },
    { id: 3, type: "theme", cate: "OPEN STAGE", title: "디올 진저브레드 하우스", date: "26.11.20(금) - 26.12.01(화)", place: "센트럴 1층 오픈 스테이지&스토리", img: "/images/shopping3.png" },
    { id: 4, type: "theme", cate: "BEAUTY", title: "홀리데이 뷰티 컬렉션", date: "26.11.16(월) - 26.12.25(금)", place: "본관 1층 화장품 매장", img: "/images/shopping4.png" },
    { id: 5, type: "theme", cate: "FASHION", title: "윈터 아우터 페어", date: "26.11.19(목) - 26.12.06(일)", place: "본관 4층 행사장", img: "/images/shopping5.png" },
    { id: 6, type: "theme", cate: "NEW ARRIVAL", title: "컨템포러리 신규 브랜드 오픈", date: "26.11.21(토) - 26.12.13(일)", place: "본관 5층", img: "/images/shopping6.png" },
    { id: 7, type: "news", cate: "쇼핑뉴스", title: "12월 쇼핑뉴스", date: "26.12.01(화) - 26.12.31(목)", place: "강남점 전층" },
    { id: 8, type: "event", cate: "사은행사", title: "신세계 포인트 더블 적립", date: "26.11.27(금) - 26.11.29(일)", place: "1층 사은행사장" },
];

const Arrow = () => (
    <svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="#888" strokeWidth="2">
        <path d="M5 9l7 7 7-7" />
    </svg>
);

function Header() {
    return (
        <>
            <div className="util-bar">
                <div className="util-inner">
                    <div className="lang">
                        <a href="#" className="on">KR</a> · <a href="#">EN</a> · <a href="#">CN</a>
                    </div>
                    <a href="#" className="ssg">SSG.COM</a>
                </div>
            </div>

            <header className="header">
                <div className="header-inner">
                    <h1 className="logo"><a href="#">SHINSEGAE</a></h1>
                    <nav className="gnb">
                        <ul>
                            {MENUS.map((m) => (
                                <li key={m}>
                                    <a href="#" className={m === "쇼핑 정보" ? "on" : ""}>{m}</a>
                                </li>
                            ))}
                        </ul>
                    </nav>
                    <div className="header-right">
                        <a href="#" className="login">
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                <circle cx="12" cy="8" r="4" />
                                <path d="M4 21c0-4 4-7 8-7s8 3 8 7" />
                            </svg>
                            로그인
                        </a>
                        <span className="bar" />
                        <button className="search" aria-label="검색">
                            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                                <circle cx="11" cy="11" r="7" />
                                <path d="M20 20l-4-4" />
                            </svg>
                        </button>
                    </div>
                </div>
            </header>
        </>
    );
}

function Sidebar({ store, setStore, type, setType }) {
    const [storeOpen, setStoreOpen] = useState(false);
    const [typeOpen, setTypeOpen] = useState(true);

    return (
        <aside className="side">
            <div className={`side-box ${storeOpen ? "open" : ""}`}>
                <button className="side-head" onClick={() => setStoreOpen(!storeOpen)}>
                    {store} <Arrow />
                </button>
                {storeOpen && (
                    <ul className="side-body">
                        {STORES.map((s) => (
                            <li key={s}>
                                <button
                                    className={s === store ? "on" : ""}
                                    onClick={() => { setStore(s); setStoreOpen(false); }}
                                >
                                    {s}
                                </button>
                            </li>
                        ))}
                    </ul>
                )}
            </div>

            <div className={`side-box ${typeOpen ? "open" : ""}`}>
                <button className="side-head" onClick={() => setTypeOpen(!typeOpen)}>
                    구분 <Arrow />
                </button>
                {typeOpen && (
                    <ul className="side-body">
                        {TYPES.map((t) => (
                            <li key={t.key}>
                                <button className={t.key === type ? "on" : ""} onClick={() => setType(t.key)}>
                                    {t.label}
                                </button>
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </aside>
    );
}

function Card({ item, store }) {
    return (
        <li className="card">
            <div className="thumb">
                {item.img ? <img src={item.img} alt={item.title} /> : <div className="no-img" />}
            </div>
            <div className="info">
                <p className="cate">{item.cate} | {store}</p>
                <h3 className="tit">{item.title}</h3>
                <p className="date">{item.date}</p>
                <p className="place">{item.place}</p>
            </div>
        </li>
    );
}

export default function ShoppingInfo() {
    const [store, setStore] = useState("강남점");
    const [type, setType] = useState("theme");
    const [view, setView] = useState("grid");

    const list = ITEMS.filter((i) => i.type === type);

    return (
        <div className="shopping-page">
            <Header />

            <main className="inner">
                <p className="breadcrumb">
                    <a href="#">HOME</a> / 쇼핑 정보
                </p>
                <h2 className="page-title">쇼핑 정보</h2>

                <div className="view-type">
                    정렬방식
                    <button
                        className={`view-btn grid ${view === "grid" ? "on" : ""}`}
                        onClick={() => setView("grid")}
                        aria-label="격자형"
                    >
                        <span /><span /><span />
                    </button>
                    <button
                        className={`view-btn list ${view === "list" ? "on" : ""}`}
                        onClick={() => setView("list")}
                        aria-label="목록형"
                    >
                        <span /><span /><span /><span />
                    </button>
                </div>

                <div className="content">
                    <Sidebar store={store} setStore={setStore} type={type} setType={setType} />

                    {list.length === 0 ? (
                        <p className="empty">진행 중인 행사가 없습니다.</p>
                    ) : (
                        <ul className={`card-list ${view === "list" ? "row" : ""}`}>
                            {list.map((item) => (
                                <Card key={item.id} item={item} store={store} />
                            ))}
                        </ul>
                    )}
                </div>
            </main>

            <footer className="footer">
                <div className="inner">
                    <p className="footer-logo">SHINSEGAE</p>
                    <p>© SHINSEGAE. All rights reserved.</p>
                </div>
            </footer>
        </div>
    );
}
