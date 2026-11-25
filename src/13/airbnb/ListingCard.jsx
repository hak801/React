import React from 'react';
import Card from "../Card";
import {BASE_GUESTS, formatRange, handleImageError, hasValidDates, onEnterOrSpace} from "./utils";

function ListingCard(props) {
    const {listing, search, liked, onToggleLike, onSelect} = props;

    const dateLabel = hasValidDates(search)
        ? formatRange(search.checkIn, search.checkOut)
        : formatRange(listing.checkIn, listing.checkOut);

    const open = () => onSelect(listing.id);

    return (
        <div
            className="listing-card"
            role="link"
            tabIndex={0}
            aria-label={`${listing.title} 상세 보기`}
            onClick={open}
            onKeyDown={onEnterOrSpace(open)}
        >
            <div className="listing-image">
                <img src={listing.img} alt={listing.title} loading="lazy" onError={handleImageError}/>
                {listing.superhost && <span className="badge">슈퍼호스트</span>}
                <button
                    className={liked ? "heart liked" : "heart"}
                    onClick={(e) => {
                        e.stopPropagation();
                        onToggleLike(listing.id);
                    }}
                    onKeyDown={(e) => e.stopPropagation()}
                    aria-label={liked ? "위시리스트에서 삭제" : "위시리스트에 저장"}
                    aria-pressed={liked}
                >
                    {liked ? "♥" : "♡"}
                </button>
            </div>

            <Card
                title={
                    <span className="listing-title-row">
                        <span>{listing.title}</span>
                        <span className="rating">★ {listing.rating.toFixed(2)}</span>
                    </span>
                }
                children={<p className="listing-desc">{listing.desc}</p>}
                p={<p className="listing-desc">{dateLabel} · 최대 {listing.maxGuests}명</p>}
                apple={
                    <p className="listing-price">
                        <b>₩{listing.price.toLocaleString()}</b> /박
                        <span className="price-note"> · {BASE_GUESTS}인 기준</span>
                    </p>
                }
            />
        </div>
    );
}

export default ListingCard;
