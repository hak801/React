import React from 'react';
import Card from "../Card";

function Footer(props) {
    const {onNotice} = props;

    const columns = [
        {title: '고객 지원', items: ['도움말 센터', '안전 문제 관련 도움받기', '예약 취소 옵션', '장애인 지원']},
        {title: '호스팅', items: ['당신의 공간을 공유하세요', '호스트 보호 프로그램', '호스팅 자료', '커뮤니티 포럼']},
        {title: 'stayhub', items: ['뉴스룸', '새로운 기능', '채용정보', '투자자 정보']},
    ];

    return (
        <footer className="footer">
            <div className="footer-columns">
                {columns.map((col) => (
                    <div key={col.title} className="footer-col">
                        <Card
                            title={col.title}
                            children={
                                <ul>
                                    {col.items.map((item) => (
                                        <li key={item}>
                                            <button onClick={() => onNotice(`'${item}' 페이지는 준비 중입니다.`)}>
                                                {item}
                                            </button>
                                        </li>
                                    ))}
                                </ul>
                            }
                        />
                    </div>
                ))}
            </div>
            <div className="footer-bottom">
                © 2026 stayhub · 개인정보 처리방침 · 이용약관 · 한국폴리텍대학 서울정수캠퍼스 반용학
            </div>
        </footer>
    );
}

export default Footer;
