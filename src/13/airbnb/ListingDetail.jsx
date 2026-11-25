import React, {useCallback, useState} from 'react';
import Card from "../Card";
import BookingComplete from "./BookingComplete";
import {amenityLabels, getReviews} from "./listings";
import {BASE_GUESTS, addDays, handleImageError, hasValidDates, nightsBetween, today} from "./utils";

const CLEANING_FEE = 30000;
const SERVICE_RATE = 0.14;
const EXTRA_GUEST_FEE = 20000;

function getInitialDates(listing, search) {
    if (hasValidDates(search)) return [search.checkIn, search.checkOut];
    if (search.checkIn) return [search.checkIn, addDays(search.checkIn, 1)];
    return [listing.checkIn, listing.checkOut];
}

function getInitialGuests(listing, search) {
    if (search.guests > 0) return Math.min(search.guests, listing.maxGuests);
    return Math.min(BASE_GUESTS, listing.maxGuests);
}

function ListingDetail(props) {
    const {listing, search, liked, onToggleLike, onBack, onBooked, onViewTrips} = props;
    const [initialCheckIn, initialCheckOut] = getInitialDates(listing, search);
    const [checkIn, setCheckIn] = useState(initialCheckIn);
    const [checkOut, setCheckOut] = useState(initialCheckOut);
    const [guests, setGuests] = useState(getInitialGuests(listing, search));
    const [booking, setBooking] = useState(null);
    const closeBooking = useCallback(() => setBooking(null), []);

    const nights = nightsBetween(checkIn, checkOut);
    const dateError = !checkIn || !checkOut
        ? '체크인과 체크아웃 날짜를 선택해 주세요.'
        : nights <= 0 ? '체크아웃은 체크인 다음 날 이후여야 합니다.' : '';

    const handleCheckIn = (value) => {
        setCheckIn(value);
        if (value && (!checkOut || nightsBetween(value, checkOut) <= 0)) {
            setCheckOut(addDays(value, 1));
        }
    };

    const validNights = Math.max(nights, 0);
    const guestDiff = guests - BASE_GUESTS;
    const extraGuests = Math.max(guestDiff, 0);
    const missingGuests = Math.max(-guestDiff, 0);
    const nightlyRate = listing.price + EXTRA_GUEST_FEE * guestDiff;
    const roomTotal = listing.price * validNights;
    const extraGuestTotal = EXTRA_GUEST_FEE * extraGuests * validNights;
    const discountTotal = EXTRA_GUEST_FEE * missingGuests * validNights;
    const stayTotal = roomTotal + extraGuestTotal - discountTotal;
    const serviceFee = Math.round(stayTotal * SERVICE_RATE);
    const total = nights > 0 ? stayTotal + CLEANING_FEE + serviceFee : 0;

    const handleReserve = () => {
        if (dateError) return;
        const newBooking = {
            code: 'HM' + Math.random().toString(36).slice(2, 10).toUpperCase(),
            listingId: listing.id,
            checkIn, checkOut, guests, nights, total,
        };
        onBooked(newBooking);
        setBooking(newBooking);
    };

    const photos = [1, 2, 3, 4].map((i) => `https://picsum.photos/seed/${listing.id}-detail-${i}/500/380`);
    const reviews = getReviews(listing);

    return (
        <main className="detail">
            <button className="back" onClick={onBack}>‹ 목록으로</button>

            <div className="detail-head">
                <h1>{listing.desc}</h1>
                <button
                    className={liked ? "save liked" : "save"}
                    onClick={() => onToggleLike(listing.id)}
                    aria-pressed={liked}
                >
                    {liked ? "♥ 저장됨" : "♡ 저장"}
                </button>
            </div>

            <div className="gallery">
                <img className="gallery-main" src={listing.img} alt={listing.title} onError={handleImageError}/>
                {photos.map((src, i) => (
                    <img key={src} src={src} alt={`${listing.title} 사진 ${i + 2}`} loading="lazy" onError={handleImageError}/>
                ))}
            </div>

            <div className="detail-body">
                <div className="detail-info">
                    <h2>{listing.title}</h2>
                    <p className="muted">
                        최대 인원 {listing.maxGuests}명 · 침실 {listing.bedrooms}개 · 침대 {listing.beds}개 · 욕실 {listing.baths}개
                    </p>
                    <p className="detail-rating">
                        ★ {listing.rating.toFixed(2)} · <u>후기 {listing.reviewCount}개</u>
                    </p>

                    <div className="host-row">
                        <span className="avatar big">{listing.host[0]}</span>
                        <div>
                            <b>호스트: {listing.host} 님</b>
                            <p className="muted">
                                {listing.superhost ? '슈퍼호스트 · ' : ''}호스팅 경력 {listing.hostYears}년
                            </p>
                        </div>
                    </div>

                    <section className="detail-section">
                        <p>{listing.about}</p>
                    </section>

                    <section className="detail-section">
                        <h3>숙소 편의시설</h3>
                        <ul className="amenities">
                            {listing.amenities.map((key) => <li key={key}>{amenityLabels[key]}</li>)}
                        </ul>
                    </section>

                    <section className="detail-section">
                        <h3>★ {listing.rating.toFixed(2)} · 후기 {listing.reviewCount}개</h3>
                        <div className="reviews">
                            {reviews.map((r) => (
                                <div key={r.name} className="review">
                                    <Card
                                        title={r.name}
                                        children={<p className="muted">{r.date}</p>}
                                        p={<p>{r.text}</p>}
                                    />
                                </div>
                            ))}
                        </div>
                    </section>
                </div>

                <div className="booking-box">
                    <Card
                        title={<span><b>₩{nightlyRate.toLocaleString()}</b> <small>/박 ({guests}인 기준)</small></span>}
                        children={
                            <div className="booking-form">
                                <label>
                                    <span>체크인</span>
                                    <input type="date" value={checkIn} min={today()}
                                           onChange={(e) => handleCheckIn(e.target.value)}/>
                                </label>
                                <label>
                                    <span>체크아웃</span>
                                    <input type="date" value={checkOut} min={checkIn ? addDays(checkIn, 1) : today()}
                                           onChange={(e) => setCheckOut(e.target.value)}/>
                                </label>
                                <div className="booking-guests">
                                    <span>인원</span>
                                    <div className="guest-counter">
                                        <button type="button" onClick={() => setGuests(Math.max(1, guests - 1))}
                                                aria-label="게스트 줄이기" disabled={guests <= 1}>−</button>
                                        <span>게스트 {guests}명</span>
                                        <button type="button" onClick={() => setGuests(Math.min(listing.maxGuests, guests + 1))}
                                                aria-label="게스트 늘리기" disabled={guests >= listing.maxGuests}>+</button>
                                    </div>
                                    <span className="guest-note">
                                        {BASE_GUESTS}인 기준 · 1인 숙박 시 ₩{EXTRA_GUEST_FEE.toLocaleString()}/박 할인 · 추가 1인당 ₩{EXTRA_GUEST_FEE.toLocaleString()}/박 · 최대 {listing.maxGuests}명
                                    </span>
                                </div>
                            </div>
                        }
                        p={
                            <div>
                                <button className="btn-brand reserve" onClick={handleReserve} disabled={!!dateError}>
                                    예약하기
                                </button>
                                {dateError && <p className="error">{dateError}</p>}
                                <p className="muted center">예약 확정 전에는 요금이 청구되지 않습니다.</p>
                            </div>
                        }
                        apple={
                            nights > 0 && (
                                <ul className="price-list">
                                    <li><span>₩{listing.price.toLocaleString()} x {nights}박</span><span>₩{roomTotal.toLocaleString()}</span></li>
                                    {missingGuests > 0 && (
                                        <li className="discount">
                                            <span>1인 숙박 할인 ₩{EXTRA_GUEST_FEE.toLocaleString()} x {nights}박</span>
                                            <span>-₩{discountTotal.toLocaleString()}</span>
                                        </li>
                                    )}
                                    {extraGuests > 0 && (
                                        <li>
                                            <span>추가 인원 {extraGuests}명 x ₩{EXTRA_GUEST_FEE.toLocaleString()} x {nights}박</span>
                                            <span>₩{extraGuestTotal.toLocaleString()}</span>
                                        </li>
                                    )}
                                    <li><span>청소비</span><span>₩{CLEANING_FEE.toLocaleString()}</span></li>
                                    <li><span>서비스 수수료</span><span>₩{serviceFee.toLocaleString()}</span></li>
                                    <li className="total"><span>총 합계</span><span>₩{total.toLocaleString()}</span></li>
                                </ul>
                            )
                        }
                    />
                </div>
            </div>

            {booking && (
                <BookingComplete
                    booking={booking}
                    listing={listing}
                    onClose={closeBooking}
                    onViewTrips={onViewTrips}
                />
            )}
        </main>
    );
}

export default ListingDetail;
