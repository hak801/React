import React from 'react';
import CategoryBar from "./CategoryBar";
import ListingCard from "./ListingCard";

const sortOptions = [
    {id: 'recommend', label: '추천순'},
    {id: 'price-asc', label: '낮은 가격순'},
    {id: 'price-desc', label: '높은 가격순'},
    {id: 'rating', label: '평점 높은순'},
];

function sortListings(items, sort) {
    const sorted = [...items];
    if (sort === 'price-asc') sorted.sort((a, b) => a.price - b.price);
    if (sort === 'price-desc') sorted.sort((a, b) => b.price - a.price);
    if (sort === 'rating') sorted.sort((a, b) => b.rating - a.rating);
    return sorted;
}

function ListingList(props) {
    const {
        items, search, category, onCategoryChange, sort, onSortChange,
        liked, onToggleLike, onSelect, onResetSearch,
    } = props;

    const isSearching = search.place !== '' || search.guests > 0;
    const sorted = sortListings(items, sort);
    const cities = [...new Set(sorted.map((l) => l.city))];

    const renderGrid = (list) => (
        <div className="grid">
            {list.map((l) => (
                <ListingCard
                    key={l.id}
                    listing={l}
                    search={search}
                    liked={liked.includes(l.id)}
                    onToggleLike={onToggleLike}
                    onSelect={onSelect}
                />
            ))}
        </div>
    );

    return (
        <>
            <CategoryBar selected={category} onSelect={onCategoryChange}/>

            <main className="content">
                <div className="list-toolbar">
                    <p className="search-result">
                        {isSearching ? (
                            <>
                                {search.place && `"${search.place}" `}
                                {search.guests > 0 && `게스트 ${search.guests}명 `}
                                검색 결과 {items.length}개
                                <button className="reset" onClick={onResetSearch}>초기화</button>
                            </>
                        ) : (
                            `숙소 ${items.length}개`
                        )}
                    </p>
                    <label className="sort-select">
                        정렬
                        <select value={sort} onChange={(e) => onSortChange(e.target.value)}>
                            {sortOptions.map((o) => <option key={o.id} value={o.id}>{o.label}</option>)}
                        </select>
                    </label>
                </div>

                {items.length === 0 && (
                    <p className="empty">조건에 맞는 숙소가 없습니다. 다른 여행지나 카테고리를 선택해 보세요.</p>
                )}

                {sort === 'recommend'
                    ? cities.map((city) => (
                        <section key={city} className="section">
                            <h2 className="section-title">{city}의 인기 숙소 ›</h2>
                            {renderGrid(sorted.filter((l) => l.city === city))}
                        </section>
                    ))
                    : items.length > 0 && (
                        <section className="section">
                            <h2 className="section-title">
                                {sortOptions.find((o) => o.id === sort).label}으로 본 숙소
                            </h2>
                            {renderGrid(sorted)}
                        </section>
                    )}
            </main>
        </>
    );
}

export default ListingList;
