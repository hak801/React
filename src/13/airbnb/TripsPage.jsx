import React from 'react';
import Card from "../Card";
import {formatRange, handleImageError} from "./utils";

function TripsPage(props) {
    const {trips, onSelect, onCancel, onBrowse} = props;

    return (
        <main className="content page">
            <h1 className="page-title">예약 내역</h1>

            {trips.length === 0 ? (
                <div className="empty-box">
                    <p className="empty-icon">🧳</p>
                    <h2>아직 예약한 여행이 없습니다</h2>
                    <p className="muted">마음에 드는 숙소를 찾아 첫 여행을 계획해 보세요.</p>
                    <button className="btn-brand" onClick={onBrowse}>숙소 둘러보기</button>
                </div>
            ) : (
                <div className="trip-list">
                    {trips.map(({booking, listing}) => (
                        <div key={booking.code} className="trip">
                            <img
                                className="trip-image"
                                src={listing.img}
                                alt={listing.title}
                                onError={handleImageError}
                                onClick={() => onSelect(listing.id)}
                            />
                            <Card
                                title={listing.title}
                                children={
                                    <p className="muted">
                                        {formatRange(booking.checkIn, booking.checkOut)} · {booking.nights}박 · 게스트 {booking.guests}명
                                    </p>
                                }
                                p={<p className="muted">예약 번호 {booking.code}</p>}
                                apple={
                                    <div className="trip-footer">
                                        <b>₩{booking.total.toLocaleString()}</b>
                                        <div className="trip-actions">
                                            <button className="btn-outline small" onClick={() => onSelect(listing.id)}>숙소 보기</button>
                                            <button className="btn-outline small danger" onClick={() => onCancel(booking.code)}>예약 취소</button>
                                        </div>
                                    </div>
                                }
                            />
                        </div>
                    ))}
                </div>
            )}
        </main>
    );
}

export default TripsPage;
