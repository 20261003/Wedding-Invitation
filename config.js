/**
 * Wedding Invitation Configuration
 *
 * 이 파일에서 청첩장의 모든 정보를 수정할 수 있습니다.
 * 이미지는 설정이 필요 없습니다. 아래 폴더에 순번 파일명으로 넣으면 자동 감지됩니다.
 *
 * 이미지 폴더 구조 (파일명 규칙):
 *   images/hero/1.jpg      - 메인 사진 (1장, 필수)
 *   images/story/1.jpg, 2.jpg, ...  - 스토리 사진들 (순번, 자동 감지)
 *   images/gallery/1.jpg, 2.jpg, ... - 갤러리 사진들 (순번, 자동 감지)
 *   images/location/1.jpg  - 약도/지도 이미지 (1장)
 *   images/og/1.jpg        - 카카오톡 공유 썸네일 (1장)
 */

const CONFIG = {
  // ── 초대장 열기 ──
  useCurtain: true,  // 초대장 열기 화면 사용 여부 (true: 사용, false: 바로 본문 표시)

  // ── 메인 (히어로) ──
  groom: {
    name: "영광",
    nameEn: "Groom",
    father: "이종식",
    mother: "봉미순",
    fatherDeceased: false,
    motherDeceased: false
  },

  bride: {
    name: "하은",
    nameEn: "Bride",
    father: "심화진",
    mother: "홍윤숙",
    fatherDeceased: false,
    motherDeceased: false
  },

  wedding: {
    date: "2026-10-03",
    time: "11:00",
    venue: "벨라루체 웨딩홀(서울)",
    hall: "7층 플로체홀",
    address: "서울특별시 동대문구 망우로 61, 회기역 2번출구 바로 앞",
    tel: "02-2242-6312",
    mapLinks: {
      kakao: "https://kko.to/Gtmksybb0s",
      naver: "https://naver.me/FJbWfhyD"
    }
  },

  // ── 인사말 ──
  greeting: {
    title: "소중한 분들을 초대합니다",
    content: "서로 다른 길을 걸어온 두 사람이\n같은 방향을 바라보며\n한 걸음을 내딛으려 합니다.\n\n저희의 새로운 출발을\n따뜻한 마음으로 축복해 주시면 감사하겠습니다."
  },

  // ── 우리의 이야기 ──
  story: {
    title: "우리의 이야기",
    content: "서로에게 가장 든든한\n친구이자 동반자가 되려 합니다.\n\n닮은 점이 많아\n늘 친구처럼 다정했던 저희 두 사람,\n이제는 서로의 곁을 평생 지켜줄\n부부의 연을 맺습니다.\n\n저희가 함께 내딛는 첫걸음을\n축복 어린 마음으로\n함께해 주시면 감사하겠습니다."
  },

  // ── 오시는 길 ──
  // (mapLinks는 wedding 객체 내에 포함)

  // ── 마음 전하실 곳 ──
  accounts: {
    groom: [
      { role: "신랑", name: "이영광", bank: "농협은행", number: "302-1998-7260-81" },
      { role: "아버지", name: "이종식", bank: "국민은행", number: "489702-96-123909" },
      { role: "어머니", name: "봉미순", bank: "신한은행", number: "110-423-817144" }
    ],
    bride: [
      { role: "신부", name: "심하은", bank: "우리은행", number: "1002-954-716-927" },
      { role: "아버지", name: "심화진", bank: "국민은행", number: "292-21-0271-820" },
      { role: "어머니", name: "홍윤숙", bank: "우리은행", number: "1002-251-434573" }
    ]
  },

  // ── 링크 공유 시 나타나는 문구 ──
  meta: {
    title: "이영광 ♥ 심하은 결혼합니다",
    description: "2026년 10월 3일, 소중한 분들을 초대합니다."
  }
};
