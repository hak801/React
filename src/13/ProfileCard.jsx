import React, {useState} from 'react';
import Card from "./Card";

function ProfileCard(props) {
    return (
        <Card title={"반용학"} children={"학번은 2601110291이고, "} p={"현재 한국폴리텍대학 서울정수캠퍼스에 재학중에 있습니다. "} apple={"테스트 사과"}/>
    );
}

export default ProfileCard;