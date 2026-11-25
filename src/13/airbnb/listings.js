export const categories = [
    {id: 'all', icon: '🏠', label: '전체'},
    {id: 'beach', icon: '🏖️', label: '해변 바로 앞'},
    {id: 'hanok', icon: '🏯', label: '한옥'},
    {id: 'cabin', icon: '🛖', label: '통나무집'},
    {id: 'view', icon: '🌄', label: '멋진 전망'},
    {id: 'pool', icon: '🏊', label: '수영장'},
    {id: 'city', icon: '🏙️', label: '도심'},
    {id: 'camping', icon: '⛺', label: '캠핑장'},
];

export const amenityLabels = {
    wifi: '📶 와이파이',
    kitchen: '🍳 주방',
    parking: '🚗 무료 주차',
    aircon: '❄️ 에어컨',
    washer: '🧺 세탁기',
    tv: '📺 TV',
    heating: '🔥 난방',
    pool: '🏊 수영장',
    ocean: '🌊 바다 전망',
    bbq: '🍖 바비큐 그릴',
    yard: '🌿 마당',
    fireplace: '🪵 벽난로',
    workspace: '💻 업무 공간',
    elevator: '🛗 엘리베이터',
};

export const reviewPool = [
    {name: '지민', date: '2026년 10월', text: '사진보다 훨씬 깨끗하고 위치가 정말 좋았어요. 다음에도 또 올게요!'},
    {name: '현우', date: '2026년 9월', text: '호스트님이 친절하게 안내해 주셔서 편하게 머물렀습니다.'},
    {name: 'Emma', date: '2026년 8월', text: 'Beautiful place, very cozy. Highly recommended!'},
    {name: '수빈', date: '2026년 10월', text: '침구가 정말 푹신했고 조용해서 푹 쉬다 갑니다.'},
    {name: '태윤', date: '2026년 7월', text: '주변에 맛집이 많아서 좋았어요. 체크인도 간편했습니다.'},
    {name: 'Lucas', date: '2026년 9월', text: 'Great location and the host was super responsive.'},
];

export const listings = [
    {
        id: 1, category: 'city', city: '서울', title: '서울 마포구의 아파트', desc: '홍대입구역 도보 5분, 감성 원룸',
        checkIn: '2026-12-01', checkOut: '2026-12-06', price: 89000, rating: 4.92, reviewCount: 128, superhost: true,
        img: 'https://picsum.photos/seed/seoul1/600/570',
        host: '민지', hostYears: 4, maxGuests: 2, bedrooms: 1, beds: 1, baths: 1,
        amenities: ['wifi', 'aircon', 'washer', 'workspace', 'elevator', 'heating'],
        about: '홍대 거리 한가운데 있는 아담한 원룸입니다. 지하철역이 가까워 서울 어디든 이동이 편하고, 밤늦게까지 즐길 거리가 많습니다.',
    },
    {
        id: 2, category: 'hanok', city: '서울', title: '서울 종로구의 한옥', desc: '북촌 한옥마을 프라이빗 독채',
        checkIn: '2026-12-03', checkOut: '2026-12-08', price: 210000, rating: 4.98, reviewCount: 245, superhost: true,
        img: 'https://picsum.photos/seed/hanok2/600/570',
        host: '준호', hostYears: 7, maxGuests: 4, bedrooms: 2, beds: 2, baths: 1,
        amenities: ['wifi', 'kitchen', 'yard', 'heating', 'aircon', 'washer'],
        about: '100년 된 한옥을 현대적으로 고친 독채입니다. 작은 마당에서 차 한잔하며 북촌의 고즈넉한 분위기를 느껴 보세요.',
    },
    {
        id: 3, category: 'beach', city: '부산', title: '부산 해운대구의 콘도', desc: '해운대 오션뷰, 바다가 한눈에',
        checkIn: '2026-12-10', checkOut: '2026-12-15', price: 156000, rating: 4.87, reviewCount: 96, superhost: false,
        img: 'https://picsum.photos/seed/busan3/600/570',
        host: '서연', hostYears: 3, maxGuests: 4, bedrooms: 2, beds: 3, baths: 1,
        amenities: ['wifi', 'ocean', 'kitchen', 'parking', 'elevator', 'tv'],
        about: '거실 통창으로 해운대 바다가 펼쳐지는 콘도입니다. 해변까지 걸어서 3분이라 아침 산책을 즐기기 좋습니다.',
    },
    {
        id: 4, category: 'beach', city: '부산', title: '부산 수영구의 아파트', desc: '광안대교 야경 맛집 숙소',
        checkIn: '2027-01-02', checkOut: '2027-01-07', price: 132000, rating: 4.9, reviewCount: 173, superhost: true,
        img: 'https://picsum.photos/seed/busan4/600/570',
        host: '도윤', hostYears: 5, maxGuests: 3, bedrooms: 1, beds: 2, baths: 1,
        amenities: ['wifi', 'ocean', 'aircon', 'washer', 'tv', 'elevator'],
        about: '광안대교 야경이 정면으로 보이는 고층 아파트입니다. 광안리 해변과 카페 거리가 바로 앞에 있습니다.',
    },
    {
        id: 5, category: 'view', city: '제주', title: '제주 서귀포시의 펜션', desc: '한라산이 보이는 감귤밭 펜션',
        checkIn: '2026-12-20', checkOut: '2026-12-25', price: 178000, rating: 4.95, reviewCount: 211, superhost: true,
        img: 'https://picsum.photos/seed/jeju5/600/570',
        host: '하은', hostYears: 6, maxGuests: 5, bedrooms: 2, beds: 3, baths: 2,
        amenities: ['wifi', 'kitchen', 'parking', 'bbq', 'yard', 'heating'],
        about: '감귤밭 한가운데 있는 펜션으로, 날씨가 좋으면 한라산이 한눈에 보입니다. 겨울에는 직접 귤 따기 체험도 할 수 있습니다.',
    },
    {
        id: 6, category: 'pool', city: '제주', title: '제주 제주시의 풀빌라', desc: '개인 온수풀이 있는 독채 빌라',
        checkIn: '2027-01-05', checkOut: '2027-01-10', price: 390000, rating: 4.97, reviewCount: 64, superhost: false,
        img: 'https://picsum.photos/seed/jeju6/600/570',
        host: '지후', hostYears: 2, maxGuests: 6, bedrooms: 3, beds: 4, baths: 2,
        amenities: ['wifi', 'pool', 'kitchen', 'parking', 'bbq', 'aircon', 'tv'],
        about: '사계절 이용할 수 있는 개인 온수풀이 있는 독채 빌라입니다. 가족이나 친구들과 함께 프라이빗하게 머물기 좋습니다.',
    },
    {
        id: 7, category: 'cabin', city: '강릉', title: '강릉시의 통나무집', desc: '소나무 숲 속 아늑한 오두막',
        checkIn: '2026-12-14', checkOut: '2026-12-19', price: 145000, rating: 4.85, reviewCount: 87, superhost: false,
        img: 'https://picsum.photos/seed/cabin7/600/570',
        host: '민지', hostYears: 3, maxGuests: 4, bedrooms: 1, beds: 2, baths: 1,
        amenities: ['wifi', 'fireplace', 'parking', 'bbq', 'heating', 'kitchen'],
        about: '소나무 숲에 둘러싸인 통나무 오두막입니다. 벽난로 앞에서 장작 타는 소리를 들으며 쉬어 가세요.',
    },
    {
        id: 8, category: 'beach', city: '강릉', title: '강릉시의 게스트하우스', desc: '경포해변 도보 1분',
        checkIn: '2026-12-27', checkOut: '2027-01-01', price: 98000, rating: 4.8, reviewCount: 152, superhost: true,
        img: 'https://picsum.photos/seed/gangneung8/600/570',
        host: '준호', hostYears: 8, maxGuests: 2, bedrooms: 1, beds: 1, baths: 1,
        amenities: ['wifi', 'ocean', 'aircon', 'heating', 'tv'],
        about: '경포해변까지 걸어서 1분 거리의 아늑한 게스트하우스입니다. 새해 해돋이를 보러 오기에 딱 좋은 위치입니다.',
    },
    {
        id: 9, category: 'hanok', city: '경주', title: '경주시의 한옥 스테이', desc: '황리단길 중심, 마당 있는 한옥',
        checkIn: '2027-01-08', checkOut: '2027-01-13', price: 165000, rating: 4.96, reviewCount: 198, superhost: true,
        img: 'https://picsum.photos/seed/gyeongju9/600/570',
        host: '서연', hostYears: 5, maxGuests: 4, bedrooms: 2, beds: 2, baths: 1,
        amenities: ['wifi', 'yard', 'kitchen', 'heating', 'aircon'],
        about: '황리단길 한복판의 한옥 스테이입니다. 대릉원과 첨성대까지 걸어서 다녀올 수 있습니다.',
    },
    {
        id: 10, category: 'camping', city: '가평', title: '가평군의 글램핑', desc: '계곡 옆 바비큐 글램핑',
        checkIn: '2026-12-06', checkOut: '2026-12-11', price: 120000, rating: 4.78, reviewCount: 73, superhost: false,
        img: 'https://picsum.photos/seed/gapyeong10/600/570',
        host: '도윤', hostYears: 2, maxGuests: 4, bedrooms: 1, beds: 2, baths: 1,
        amenities: ['bbq', 'parking', 'heating', 'yard'],
        about: '계곡 물소리가 들리는 글램핑장입니다. 텐트마다 개별 바비큐 그릴과 난방이 준비되어 있어 겨울에도 따뜻합니다.',
    },
    {
        id: 11, category: 'view', city: '여수', title: '여수시의 레지던스', desc: '여수 밤바다 오션뷰 객실',
        checkIn: '2026-12-17', checkOut: '2026-12-22', price: 139000, rating: 4.89, reviewCount: 119, superhost: true,
        img: 'https://picsum.photos/seed/yeosu11/600/570',
        host: '하은', hostYears: 4, maxGuests: 3, bedrooms: 1, beds: 2, baths: 1,
        amenities: ['wifi', 'ocean', 'kitchen', 'washer', 'elevator', 'tv'],
        about: '여수 밤바다와 돌산대교 야경이 보이는 레지던스입니다. 낭만포차 거리까지 걸어서 10분입니다.',
    },
    {
        id: 12, category: 'pool', city: '서울', title: '서울 강남구의 펜트하우스', desc: '루프탑 수영장, 도심 야경',
        checkIn: '2027-01-15', checkOut: '2027-01-20', price: 450000, rating: 4.93, reviewCount: 58, superhost: true,
        img: 'https://picsum.photos/seed/gangnam12/600/570',
        host: '지후', hostYears: 6, maxGuests: 6, bedrooms: 3, beds: 3, baths: 2,
        amenities: ['wifi', 'pool', 'aircon', 'workspace', 'elevator', 'parking', 'tv'],
        about: '강남 한복판 펜트하우스로, 루프탑 수영장에서 도심 야경을 내려다볼 수 있습니다. 출장이나 특별한 날에 추천합니다.',
    },
];

export function getReviews(listing) {
    return [0, 1, 2].map((i) => reviewPool[(listing.id + i * 2) % reviewPool.length]);
}
