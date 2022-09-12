[![](https://lh6.googleusercontent.com/tAc1AUaOr_vvrct-cxED6ouKPWsEj1wWhR-u45Gc4MbDreZAguikZqpLQDbenLlHOGpcseSwPP3heE0YzrZQlcojP6yE2h45i-iCjMT3ub7Z5ZSDMw5ytqM7xvBT_b33yw=w4996)](https://docs.google.com/forms/d/e/1FAIpQLScJdPn8S2gt6h3kHaHvV2mC-g9kR017yAT2kzWKLcVyQgaCPA/viewform)

# FrontEnd
![](https://img.shields.io/badge/Visual%20Studio%20Code-007ACC.svg?&style=for-the-badge&logo=Visual%20Studio%20Code&logoColor=white)
![](https://img.shields.io/badge/React-61DAFB.svg?&style=for-the-badge&logo=React&logoColor=white)
![](https://img.shields.io/badge/TypeScript-3178C6.svg?&style=for-the-badge&logo=TypeScript&logoColor=white)
![](https://img.shields.io/badge/Amazon%20S3-569A31?style=for-the-badge&logo=Amazon%20S3&logoColor=white)
![](https://img.shields.io/badge/GitHub%20Actions-2088FF.svg?&style=for-the-badge&logo=GitHub%20Actions&logoColor=white)<br/>
![](https://img.shields.io/badge/Redux-764ABC.svg?&style=for-the-badge&logo=Redux&logoColor=white)
![](https://img.shields.io/badge/Axios-5A29E4.svg?&style=for-the-badge&logo=Axios&logoColor=white)
![](https://img.shields.io/badge/styled%20components-DB7093.svg?&style=for-the-badge&logo=styled%20components&logoColor=white)
![](https://img.shields.io/badge/Burger%20King-D62300.svg?&style=for-the-badge&logo=Burger%20King&logoColor=white)

## 패치노트
- [**패치노트 바로가기**](https://github.com/finalproject-hanghae/DontBeWeak-FE/wiki/%ED%8C%A8%EC%B9%98%EB%85%B8%ED%8A%B8-:-%EC%95%BD%ED%95%B4%EC%A7%80%EC%A7%80%EB%A7%88)

## 기술 결정
**기술 결정 프로세스**<br/>

> 1. 프로젝트의 요구사항 파악
> 2. 요구사항을 충족하는 선택지 탐색
> 3. 선택지 중 팀원과의 논의 후 **의사 결정**
> 4. 얼마나 잘 알고 쓰는지에 대한 지속적 질문<br/>
> 5. 해당 선택지의 한계점 고찰

- **상태관리 (Redux vs Recoil vs Context)**
  - [기술 결정 : 상태관리 Wiki](https://github.com/finalproject-hanghae/DontBeWeak-FE/wiki/%EA%B8%B0%EC%88%A0-%EA%B2%B0%EC%A0%95-%230-:-%EC%83%81%ED%83%9C%EA%B4%80%EB%A6%AC)
- **선제적 타입 선언 (TypeScript)**
  - [문제 #1 : 변수 변경의 불편 - 추가 예상문제 Wiki](https://github.com/finalproject-hanghae/DontBeWeak-FE/wiki/%EB%AC%B8%EC%A0%9C-%231-:-%EB%B3%80%EC%88%98-%EB%B3%80%EA%B2%BD%EC%9D%98-%EB%B6%88%ED%8E%B8#%EC%B6%94%EA%B0%80-%EC%98%88%EC%83%81-%EB%AC%B8%EC%A0%9C)

## 트러블 슈팅
- **문제 #0 : 이미지 리소스 관리 (이미지 최적화)**
  - [문제 #0 : 이미지 리소스 관리 Wiki](https://github.com/finalproject-hanghae/DontBeWeak-FE/wiki/%EB%AC%B8%EC%A0%9C-%230-:-%EC%9D%B4%EB%AF%B8%EC%A7%80-%EB%A6%AC%EC%86%8C%EC%8A%A4-%EA%B4%80%EB%A6%AC)
- **문제 #1 : 변수 변경의 불편 (협업능률 및 유지보수) -> TypeScript**
  - [문제 #1 : 변수 변경의 불편 Wiki](https://github.com/finalproject-hanghae/DontBeWeak-FE/wiki/%EB%AC%B8%EC%A0%9C-%231-:-%EB%B3%80%EC%88%98-%EB%B3%80%EA%B2%BD%EC%9D%98-%EB%B6%88%ED%8E%B8)
  
## 피드백 개선
- [**피드백 개선 #0 : 털실만으론 성장 할 수 없어요.**](https://github.com/finalproject-hanghae/DontBeWeak-FE/wiki/%ED%94%BC%EB%93%9C%EB%B0%B1-%EA%B0%9C%EC%84%A0-%230-:-%ED%84%B8%EC%8B%A4%EB%A7%8C%EC%9C%BC%EB%A1%A0-%EC%84%B1%EC%9E%A5-%ED%95%A0-%EC%88%98-%EC%97%86%EC%96%B4%EC%9A%94.)

---

## GIT Flow

- PR의 시기는 자유롭게!
- 다만 **Release는 늘 구동 가능한 상태**로!

![Untitled](https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fba430953-3405-43e5-ac07-bbb32d32c95d%2FUntitled.png?table=block&id=58f98201-d230-4ecb-aab2-b0ac87477145&spaceId=1be52488-8341-41f7-9e7a-1ca0cb106a74&width=2000&userId=fe00f85b-4d3a-4f47-b7b3-438729231f22&cache=v2)


**📌 해당 전략을 도입한 이유?**
> main에 push가 발생했을 때 자동으로 빌드/배포 되는 github actions를 적용해 놓은상황입니다.
> main 브랜치로 바로 통합된다면 conflict와 오류 때문에 운영되고있는 서버에 장애가 발생할 수 있었기 때문에 해당 전략을 도입하게 되었습니다.

- 브랜치 사용
    - main: 해당 브랜치로 푸쉬했을 시 서버에 자동배포
    - Release : 개발 완료된 기능들을 통합 테스트하기 위한 브랜치
    

## Directory Structure

![image](https://user-images.githubusercontent.com/85068289/189492252-dc2e2947-bcc9-4524-a258-07d50ebdd31e.png)

## 팀원
| 이름  | 깃허브 | 포지션 |
|:----------|:----------|:----------:|
| 송하준 | [@FoocoJun](https://github.com/FoocoJun) |![](https://img.shields.io/badge/-FE-blue)|
| 인소현 | [@INSOCCI](https://github.com/INSOCCI) |![](https://img.shields.io/badge/-FE-blue)|
| 탁형석 | [@TAK6337](https://github.com/TAK6337) |![](https://img.shields.io/badge/-FE-blue)|
