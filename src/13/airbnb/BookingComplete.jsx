import React, {useEffect, useRef} from 'react';
import Card from "../Card";
import {formatRange} from "./utils";

function BookingComplete(props) {
    const {booking, listing, onClose, onViewTrips} = props;
    const closeRef = useRef(null);

    useEffect(() => {
        const handleEsc = (e) => {
            if (e.key === 'Escape') onClose();
        };
        const previousOverflow = document.body.style.overflow;
        document.body.style.overflow = 'hidden';
        document.addEventListener('keydown', handleEsc);
        if (closeRef.current) closeRef.current.focus();

        return () => {
            document.body.style.overflow = previousOverflow;
            document.removeEventListener('keydown', handleEsc);
        };
    }, [onClose]);

    return (
        <div className="modal-backdrop" onClick={onClose}>
            <div
                className="modal"
                role="dialog"
                aria-modal="true"
                aria-labelledby="booking-complete-title"
                onClick={(e) => e.stopPropagation()}
            >
                <div className="modal-check">✓</div>

                <Card
                    title={<span id="booking-complete-title">예약이 완료되었습니다!</span>}
                    children={
                        <p className="modal-sub">
                            {listing.title}에서 즐거운 시간 보내세요.
                        </p>
                    }
                    p={
                        <ul className="modal-summary">
                            <li><span>예약 번호</span><b>{booking.code}</b></li>
                            <li><span>일정</span><b>{formatRange(booking.checkIn, booking.checkOut)} · {booking.nights}박</b></li>
                            <li><span>체크인</span><b>{booking.checkIn}</b></li>
                            <li><span>체크아웃</span><b>{booking.checkOut}</b></li>
                            <li><span>게스트</span><b>{booking.guests}명</b></li>
                            <li><span>총 결제 금액</span><b>₩{booking.total.toLocaleString()}</b></li>
                        </ul>
                    }
                    apple={
                        <div className="modal-actions">
                            <p className="demo-note">※ 데모 예약입니다. 실제 결제는 이루어지지 않습니다.</p>
                            <button ref={closeRef} className="btn-outline" onClick={onClose}>닫기</button>
                            <button className="btn-brand" onClick={onViewTrips}>예약 내역 보기</button>
                        </div>
                    }
                />
            </div>
        </div>
    );
}

export default BookingComplete;
