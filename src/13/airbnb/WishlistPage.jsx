import React from 'react';
import ListingCard from "./ListingCard";
import {emptySearch} from "./utils";

function WishlistPage(props) {
    const {items, onToggleLike, onSelect, onBrowse} = props;

    return (
        <main className="content page">
            <h1 className="page-title">위시리스트</h1>

            {items.length === 0 ? (
                <div className="empty-box">
                    <p className="empty-icon">♡</p>
                    <h2>아직 저장한 숙소가 없습니다</h2>
                    <p className="muted">마음에 드는 숙소의 하트를 눌러 위시리스트에 저장해 보세요.</p>
                    <button className="btn-brand" onClick={onBrowse}>숙소 둘러보기</button>
                </div>
            ) : (
                <>
                    <p className="muted">저장한 숙소 {items.length}개</p>
                    <div className="grid page-grid">
                        {items.map((l) => (
                            <ListingCard
                                key={l.id}
                                listing={l}
                                search={emptySearch}
                                liked={true}
                                onToggleLike={onToggleLike}
                                onSelect={onSelect}
                            />
                        ))}
                    </div>
                </>
            )}
        </main>
    );
}

export default WishlistPage;
