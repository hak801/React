import React, {useEffect, useState} from 'react';
import Header, {tabs} from "./Header";
import ListingList from "./ListingList";
import ListingDetail from "./ListingDetail";
import WishlistPage from "./WishlistPage";
import TripsPage from "./TripsPage";
import ComingSoon from "./ComingSoon";
import Footer from "./Footer";
import Toast from "./Toast";
import {listings} from "./listings";
import {emptySearch, loadSaved, save} from "./utils";
import "./Airbnb.css";

const PAGES = ['wishlist', 'trips'];

function readRoute() {
    const params = new URLSearchParams(window.location.search);
    const id = Number(params.get('room'));
    if (listings.some((l) => l.id === id)) return {page: 'room', id};
    const page = params.get('page');
    if (PAGES.includes(page)) return {page};
    return {page: 'home'};
}

function routeToUrl(route) {
    if (route.page === 'room') return `?room=${route.id}`;
    if (PAGES.includes(route.page)) return `?page=${route.page}`;
    return window.location.pathname;
}

function matchesSearch(listing, search) {
    const keyword = search.place.toLowerCase();
    const text = `${listing.city} ${listing.title} ${listing.desc}`.toLowerCase();
    return (keyword === '' || text.includes(keyword)) &&
        (search.guests === 0 || listing.maxGuests >= search.guests);
}

function AirbnbApp() {
    const [route, setRoute] = useState(readRoute);
    const [tab, setTab] = useState('stay');
    const [category, setCategory] = useState('all');
    const [sort, setSort] = useState('recommend');
    const [search, setSearch] = useState(emptySearch);
    const [liked, setLiked] = useState(() => loadSaved('stayhub-liked', []));
    const [bookings, setBookings] = useState(() => loadSaved('stayhub-bookings', []));
    const [notice, setNotice] = useState('');

    useEffect(() => {
        const handlePopState = () => {
            setRoute(readRoute());
            window.scrollTo(0, 0);
        };
        window.addEventListener('popstate', handlePopState);
        return () => window.removeEventListener('popstate', handlePopState);
    }, []);

    useEffect(() => save('stayhub-liked', liked), [liked]);
    useEffect(() => save('stayhub-bookings', bookings), [bookings]);

    useEffect(() => {
        if (!notice) return;
        const timer = setTimeout(() => setNotice(''), 2500);
        return () => clearTimeout(timer);
    }, [notice]);

    const navigate = (next) => {
        if (next.page === route.page && next.id === route.id) return;
        window.history.pushState(null, '', routeToUrl(next));
        setRoute(next);
        window.scrollTo(0, 0);
    };

    const goList = () => navigate({page: 'home'});
    const openRoom = (id) => navigate({page: 'room', id});

    const handleSearch = (value) => {
        setSearch(value);
        setTab('stay');
        goList();
    };

    const goHome = () => {
        setSearch(emptySearch);
        setCategory('all');
        setSort('recommend');
        setTab('stay');
        goList();
        window.scrollTo(0, 0);
    };

    const handleTabChange = (id) => {
        setTab(id);
        goList();
    };

    const browse = () => {
        setTab('stay');
        goList();
    };

    const toggleLike = (id) => {
        const wasLiked = liked.includes(id);
        setLiked((prev) => prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]);
        setNotice(wasLiked ? '위시리스트에서 삭제했습니다.' : '위시리스트에 저장했습니다.');
    };

    const addBooking = (booking) => {
        setBookings((prev) => [booking, ...prev]);
    };

    const cancelBooking = (code) => {
        setBookings((prev) => prev.filter((b) => b.code !== code));
        setNotice('예약이 취소되었습니다. (데모)');
    };

    const selected = route.page === 'room' ? listings.find((l) => l.id === route.id) : null;
    const filtered = listings.filter((l) =>
        (category === 'all' || l.category === category) && matchesSearch(l, search)
    );
    const likedListings = liked.map((id) => listings.find((l) => l.id === id)).filter(Boolean);
    const trips = bookings
        .map((booking) => ({booking, listing: listings.find((l) => l.id === booking.listingId)}))
        .filter((t) => t.listing);
    const currentTab = tabs.find((t) => t.id === tab);

    let content;
    if (selected) {
        content = (
            <ListingDetail
                key={selected.id}
                listing={selected}
                search={search}
                liked={liked.includes(selected.id)}
                onToggleLike={toggleLike}
                onBack={goList}
                onBooked={addBooking}
                onViewTrips={() => navigate({page: 'trips'})}
            />
        );
    } else if (route.page === 'wishlist') {
        content = (
            <WishlistPage items={likedListings} onToggleLike={toggleLike} onSelect={openRoom} onBrowse={browse}/>
        );
    } else if (route.page === 'trips') {
        content = <TripsPage trips={trips} onSelect={openRoom} onCancel={cancelBooking} onBrowse={browse}/>;
    } else if (tab !== 'stay') {
        content = (
            <ComingSoon icon={currentTab.icon} title={currentTab.label} desc={currentTab.desc} onBack={browse}/>
        );
    } else {
        content = (
            <ListingList
                items={filtered}
                search={search}
                category={category}
                onCategoryChange={setCategory}
                sort={sort}
                onSortChange={setSort}
                liked={liked}
                onToggleLike={toggleLike}
                onSelect={openRoom}
                onResetSearch={() => setSearch(emptySearch)}
            />
        );
    }

    return (
        <div className="airbnb">
            <Header
                search={search}
                onSearch={handleSearch}
                onHome={goHome}
                tab={route.page === 'home' ? tab : null}
                onTabChange={handleTabChange}
                onNavigate={(page) => navigate({page})}
                onNotice={setNotice}
                wishCount={liked.length}
                tripCount={trips.length}
            />

            {content}

            <Footer onNotice={setNotice}/>
            <Toast message={notice}/>
        </div>
    );
}

export default AirbnbApp;
