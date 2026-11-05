import React from 'react';
import './AttendanceCardBook.css';

const MAX_TILT = 14; // 카드가 기울어지는 최대 각도

// 마우스 위치를 계산해 CSS 변수로 전달
function handlePointerMove(event) {
    const scene = event.currentTarget;
    const rect = scene.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width;
    const y = (event.clientY - rect.top) / rect.height;

    scene.style.setProperty('--mx', `${x * 100}%`);
    scene.style.setProperty('--my', `${y * 100}%`);
    scene.style.setProperty('--rx', `${(0.5 - y) * 2 * MAX_TILT}`);
    scene.style.setProperty('--ry', `${(x - 0.5) * 2 * MAX_TILT}`);
}

// 마우스가 나가면 카드를 원래 상태로 되돌림
function handlePointerLeave(event) {
    const scene = event.currentTarget;
    scene.style.setProperty('--rx', '0');
    scene.style.setProperty('--ry', '0');
}

const students = [
    {
        id: 1,
        name: "Inje",
        grade: 1,
        major: "의예과",
        avatar: "https://randomuser.me/portraits/men/1.jpg"
    },
    {
        id: 2,
        name: "Steve",
        grade: 2,
        major: "인공지능소프트웨어",
        avatar: "https://randomuser.me/portraits/men/2.jpg"
    },
    {
        id: 3,
        name: "Bill",
        grade: 3,
        major: "메카트로닉스",
        avatar: "https://randomuser.me/portraits/men/3.jpg"
    },
    {
        id: 4,
        name: "Jeff",
        grade: 4,
        major: "시각디자인과",
        avatar: "https://randomuser.me/portraits/men/4.jpg"
    },
    {
        id: 5,
        name: "Joy",
        grade: 5,
        major: "클라우드컴퓨팅",
        avatar: "https://randomuser.me/portraits/men/95.jpg"
    },
];

function AttendanceBookCardBook() {
    return (
        <div className="attendance-book">
            <h2 className="attendance-title">학생출석부</h2>
            <div className="card-list">
                {students.map(student => (
                    <div
                        key={student.id}
                        className="card-scene"
                        onPointerMove={handlePointerMove}
                        onPointerLeave={handlePointerLeave}
                    >
                        <div className="photo-card">
                            <img
                                className="card-photo"
                                src={student.avatar}
                                alt={student.name}
                                draggable="false"
                            />
                            <div className="card-info">
                                <h3 className="card-name">{student.name}</h3>
                                <p className="card-detail">{student.grade}학년 | {student.major}</p>
                            </div>
                            <div className="card-holo"></div>
                            <div className="card-glare"></div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default AttendanceBookCardBook;