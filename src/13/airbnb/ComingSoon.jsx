import React from 'react';

function ComingSoon(props) {
    const {icon, title, desc, onBack} = props;

    return (
        <main className="content page">
            <div className="empty-box">
                <p className="empty-icon">{icon}</p>
                <h2>{title} 탭은 준비 중입니다</h2>
                <p className="muted">{desc}</p>
                <button className="btn-brand" onClick={onBack}>숙소 둘러보기</button>
            </div>
        </main>
    );
}

export default ComingSoon;
