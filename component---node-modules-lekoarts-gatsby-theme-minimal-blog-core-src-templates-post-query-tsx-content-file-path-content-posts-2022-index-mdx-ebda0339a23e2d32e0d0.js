"use strict";(self.webpackChunkminimal_blog=self.webpackChunkminimal_blog||[]).push([[618],{4765:function(e,t,n){n.d(t,{F:function(){return s},Z:function(){return u}});var l=n(7294),a=n(8733),c=n(795),m=n(8377),r=n(6799),i=n(8871);var p=e=>{let{post:t}=e;return null};const g=["16px","8px","4px"].map((e=>"rgba(0, 0, 0, 0.1) 0px "+e+" "+e+" 0px"));var o=e=>{let{data:{post:t},children:n}=e;return(0,a.tZ)(m.Z,null,(0,a.tZ)(c.X6,{as:"h1",variant:"styles.h1"},t.title),(0,a.tZ)("p",{sx:{color:"secondary",mt:3,a:{color:"secondary"},fontSize:[1,1,2]}},(0,a.tZ)("time",null,t.date),t.tags&&(0,a.tZ)(l.Fragment,null," — ",(0,a.tZ)(r.Z,{tags:t.tags})),t.timeToRead&&" — ",t.timeToRead&&(0,a.tZ)("span",null,t.timeToRead," min read")),(0,a.tZ)("section",{sx:{my:5,".gatsby-resp-image-wrapper":{my:[4,4,5],borderRadius:"4px",boxShadow:g.join(", "),".gatsby-resp-image-image":{borderRadius:"4px"}},variant:"layout.content"}},n),(0,a.tZ)(p,{post:t}))};const s=e=>{var t,n,l;let{data:{post:c}}=e;return(0,a.tZ)(i.Z,{title:c.title,description:c.description?c.description:c.excerpt,image:c.banner?null===(t=c.banner)||void 0===t||null===(n=t.childImageSharp)||void 0===n||null===(l=n.resize)||void 0===l?void 0:l.src:void 0,pathname:c.slug,canonicalUrl:c.canonicalUrl})};function u(e){let{...t}=e;return l.createElement(o,t)}},6799:function(e,t,n){var l=n(8733),a=n(7294),c=n(1883),m=n(3494),r=n(9706);t.Z=e=>{let{tags:t}=e;const{tagsPath:n,basePath:i}=(0,m.Z)();return(0,l.tZ)(a.Fragment,null,t.map(((e,t)=>(0,l.tZ)(a.Fragment,{key:e.slug},!!t&&", ",(0,l.tZ)(c.Link,{sx:e=>{var t;return{...null===(t=e.styles)||void 0===t?void 0:t.a}},to:(0,r.Z)("/"+i+"/"+n+"/"+e.slug)},e.name)))))}},8871:function(e,t,n){var l=n(7294),a=n(1883),c=n(4232);t.Z=e=>{let{title:t="",description:n="",pathname:m="",image:r="",children:i=null,canonicalUrl:p=""}=e;const g=(0,c.Z)(),{siteTitle:o,siteTitleAlt:s,siteUrl:u,siteDescription:E,siteImage:d,author:h,siteLanguage:f}=g,b={title:t?t+" | "+o:s,description:n||E,url:""+u+(m||""),image:""+u+(r||d)};return l.createElement(l.Fragment,null,l.createElement("html",{lang:f}),l.createElement("title",null,b.title),l.createElement("meta",{name:"description",content:b.description}),l.createElement("meta",{name:"image",content:b.image}),l.createElement("meta",{property:"og:title",content:b.title}),l.createElement("meta",{property:"og:url",content:b.url}),l.createElement("meta",{property:"og:description",content:b.description}),l.createElement("meta",{property:"og:image",content:b.image}),l.createElement("meta",{property:"og:type",content:"website"}),l.createElement("meta",{property:"og:image:alt",content:b.description}),l.createElement("meta",{name:"twitter:card",content:"summary_large_image"}),l.createElement("meta",{name:"twitter:title",content:b.title}),l.createElement("meta",{name:"twitter:url",content:b.url}),l.createElement("meta",{name:"twitter:description",content:b.description}),l.createElement("meta",{name:"twitter:image",content:b.image}),l.createElement("meta",{name:"twitter:image:alt",content:b.description}),l.createElement("meta",{name:"twitter:creator",content:h}),l.createElement("meta",{name:"gatsby-theme",content:"@lekoarts/gatsby-theme-minimal-blog"}),l.createElement("link",{rel:"icon",type:"image/png",sizes:"32x32",href:(0,a.withPrefix)("/favicon-32x32.png")}),l.createElement("link",{rel:"icon",type:"image/png",sizes:"16x16",href:(0,a.withPrefix)("/favicon-16x16.png")}),l.createElement("link",{rel:"apple-touch-icon",sizes:"180x180",href:(0,a.withPrefix)("/apple-touch-icon.png")}),p?l.createElement("link",{rel:"canonical",href:p}):null,i)}},8350:function(e,t,n){n.r(t),n.d(t,{Head:function(){return r.F},default:function(){return i}});var l=n(7294),a=n(1151);function c(e){const t=Object.assign({h1:"h1",p:"p",a:"a",img:"img",ul:"ul",li:"li"},(0,a.ah)(),e.components);return l.createElement(l.Fragment,null,l.createElement(t.h1,null,"안뇽"),"\n",l.createElement(t.p,null,"결국 탑승하고야 말았다. 글 쓰기 귀찮아서 넘겼는데 어쩜 이렇게 다들 부지런하게 회고를 할 수가 있지? 그래서 나도 살며시 회고를 해본다. 나는 올해 고등학교 2학년이 돼서 평범하게 웹 백엔드 공부를 했다. 사실 2022년은 인격적으로도, 개발적인 측면으로도 많이 성장한 의미있는 해였던 것 같다. 어떤 방식으로 회고할지 고민했는데 아무래도 시간 순이 좋을 듯 하다."),"\n",l.createElement(t.h1,null,"1월"),"\n",l.createElement(t.p,null,"1월에 처음으로 자바 공부를 시작했다. 이때까지만 해도 나름 1학년이었기 때문에 방과후로 자바 수업을 들었어야 했는데 저게 내 미래가 될 줄은 모르고 그냥 따라치기만 했다. 그래도 나름 따라치기라도 해서인지 따로 자바를 공부할 때는 어렵지 않았다. 다행이라고 해야할지... 학교 방학을 하기 전이었을 때는 자유시간밖에 없어서 계속 쭉 ",l.createElement(t.a,{href:"https://github.com/gimhanul/screwbar/tree/main/Java"},"TIL 레포"),"와 ",l.createElement(t.a,{href:"https://github.com/gimhanul/Java"},"Java 공부하면서 따라 친 코드 올리는 레포"),"에 정리해가며 자바 공부를 했다."),"\n",l.createElement(t.img,{src:"https://velog.velcdn.com/images/gimhanul/post/e645c385-b7fa-4cc8-b8dc-2db825ab25fc/image.png",alt:""}),"\n",l.createElement(t.p,null,"학교에서 배운 python을 가지고 잼민이 과외도 했다. 엄마가 공부방을 하시는데, 한 학부모님께서 코딩 가르치고 싶다고 하셔서 날 추천했다. 용돈벌이나 할 겸 덥석 하겠다고 하고, elice라는 플랫폼이랑 첫 코딩 파이썬 어쩌구 책을 보면서 애를 가르쳤다. 누군가에게 돈을 받고 언어를 가르치는 경험은 특별했다. 잼민이랑 말 섞는 것도 신기한데 애 장난치는 거 제어도 해야 되고, 숙제도 내줘야 하고, 이런 문제를 풀면서 내가 어디까지 힌트를 주고 어디까지 스스로 생각하게 해야 하는지 많이 고민했던 것 같다."),"\n",l.createElement(t.p,null,"피아노도 치러 다녔다. 어린이 때부터 피아노를 쳤는데, 고등학교를 기숙사 학교로 오면서 피아노를 못치게 됐다. 그래서 방학을 틈타 피아노 학원을 다니면서 피아노를 쳤다. 굳이 돈 쓰면서 다닌 이유는... 돈을 쓰지 않으면 죄책감이 안 들어서 연습을 안 하기 때문이다. 이때 피아노 칠 수 있는 곡도 몇 개 늘었고 재즈풍 뭔가를 칠 수 있게 됐다. 지금 쳐도 간지라서 아주 마음에 든다."),"\n",l.createElement(t.img,{src:"https://velog.velcdn.com/images/gimhanul/post/8debda58-24c1-4fa1-aec2-8763ac02d782/image.png",alt:""}),"\n",l.createElement(t.p,null,"놀기도 많이 놀러 다녔다. 제주도로 가족여행도 가고, 주말만 되면 서울도 많이 싸돌아 다녔다. 평일에 싹 갓생살고 주말에 싹 놀러다니는 굿생을 살았달까?"),"\n",l.createElement(t.h1,null,"2월"),"\n",l.createElement(t.p,null,"2월에는 실전... 스프링부트 인강을 봤다. 100시간이었나? 엄청 긴 거였는데, 인강 계정을 같이 쓰는 분이 한 분 계셔서 다 못 봤다. (변명 맞음) 아직도 다 못 봤다. 개학하니까 볼 시간이 안 나서... 이때 스프링부트로 crud 구현도 해보고 security로 jwt 구현도 해보고 oauth2 구현도 해보고 batch도 써보고 rest docs도 써보고 다양한 것을 많이 배운 것 같다. 사실 이때 공부한 걸로 아직도 써먹고 있다."),"\n",l.createElement(t.p,null,"여전히 잼민이 파이썬 과외도 했고, 피아노 학원도 다녔다."),"\n",l.createElement(t.img,{src:"https://velog.velcdn.com/images/gimhanul/post/4c7fe1a5-ef03-4f08-b188-2c0884c9c59f/image.png",alt:""}),"\n",l.createElement(t.p,null,"그리고 이때 딱 코로나에 걸렸다. 나때문에 엄마 아빠 일도 못하고 얼마나 민폐를 끼쳤는지... 하지만 정신 못차리고 격리 풀리자마자 롯데월드 갔다."),"\n",l.createElement(t.p,null,"그래도 1월 2월 다 합쳐서 봤을 때 이때처럼 의미 있는 방학을 보낸 적은 없는 것 같다. 여지껏 방학이면 그냥 누워서 허송세월 폰하는 게 다였는데, 공부로 가득찬 방학이었다."),"\n",l.createElement(t.h1,null,"3월"),"\n",l.createElement(t.p,null,"드디어 2학년이 돼서 학교를 갔다. 사실 2학년에 대해 막연한 두려움이 있었다. 그럼에도 되더라고... 사실 이때까지만 해도 영원히 1학년 응애 못해도 봐줘 이런 느낌으로 살고 싶었다. 근데 되더라고... 2학년이 되니, 뭐랄까 배우는 게 달라졌다. 1학년 때는 c, python, OS, 컴구 전전기 뭐 이런 기본적인 것들을 다양하게 배웠는데 2학년이 되니 웹 프로그래밍, 데이터베이스, 자바 같은 실전 과목들을 배웠다."),"\n",l.createElement(t.img,{src:"https://velog.velcdn.com/images/gimhanul/post/0aec57d6-2b5d-4cac-8e56-bbb259dde0b8/image.png",alt:""}),"\n",l.createElement(t.p,null,"배우는 것도 달라졌고 전공 동아리도 달라졌다. 한 달 내내 기획했다. 밤돌이로라는 동아리를 만들고(친목팟), 아이디어 회의를 하고, 아이디어 구체화를 하고, 요구사항을 정리해서 칸반 보드로 나타내는 작업들을 했다. 평일에는 이런 작업들을 하고, 주말에는 요구되는 나의 역량?에 대해 많이 찾아보는 시간을 보냈던 것 같다. 이때 주말에 정말 꿈쩍도 않고 앉아서 내가 해야 하는데 못하는 것들에 대해 엄청나게 찾아다녔다."),"\n",l.createElement(t.p,null,"그리고 이때 친구가 학생회 일 처리 방식에 환멸을 느끼고 학생청원 만들어 달라길래 이것도 기획하고 회의하고 바쁘게 지냈다."),"\n",l.createElement(t.h1,null,"4월"),"\n",l.createElement(t.p,null,"동아리에서는 '가티'라는 서비스를 개발하기로 결정하고, 같이 백엔드를 맡은 친구와 태스크 잡고 이슈 달고 개발하고 리뷰하는 프로세스를 꾸준히 거치며 개발했다. 4월, 5월, 6월, ... 10월까지 쭉쭉 다 그런식으로 천천히 개발해나갔다."),"\n",l.createElement(t.p,null,"그리고 학생청원은 같이 하는 애가 없어서 그냥 혼자 쭉쭉 개발했다."),"\n",l.createElement(t.img,{src:"https://velog.velcdn.com/images/gimhanul/post/78aacb2f-df1d-4f4a-98c9-967a8d8f4739/image.png",alt:""}),"\n",l.createElement(t.p,null,"중순 쯤에 인공지능대전에 참가했다. 가서 1학년 전공동아리에서 만들었던 '키위'를 전시했다. 솔직히 이때 설명하기 너무 귀찮아서 앞에 동영상 틀어놓고 학생청원 개발만 했던 것 같아서 좀 후회된다. 내가 개발한 서비스에 대해 사람들한테 설명할 기회가 많지 않은데, 이런 기회를 그냥 뻥 날려버렸으니 말이다."),"\n",l.createElement(t.p,null,"지금보니 이때 중간고사도 봤다. 특정 수준을 넘으면 담임 선생님 사비로 학습 관련 물품을 사주는 담임 갈취가 있는데, 담임 갈취 성공도 했다."),"\n",l.createElement(t.h1,null,"5월"),"\n",l.createElement(t.img,{src:"https://velog.velcdn.com/images/gimhanul/post/09c486ac-b4f0-4d27-a0dc-3d178b33f3e5/image.png",alt:""}),"\n",l.createElement(t.p,null,"창체 동아리를 매점 동아리로 들어갔는데, 매점에서 상품권을 발급해야 하는데 도용이 우려된다는 담당쌤의 말 한 마디를 시작으로, 매점 상품권 시스템 개발이 시작됐다. 5월 한 달 동안 그 쌤한테 얼마나 시달렸는지... 기획부터 시작해서 개발을 어느정도 마치고 피드백하는 과정까지 선생님께서 날 얼마나 쪼아댔는지 모른다. 그때까지만 해도 엄청 귀찮았는데, 지나고 나서 돌이켜보니 그 경험이 얼마나 귀중한지 알겠다. 내가 개발한 서비스를 누가 사용하고, 불편한 점도 알려주고, 에러를 해결해나가는 과정이 쉽게 할 수 있는 경험이 아니고, 더 성장하는 계기가 된 것 같다."),"\n",l.createElement(t.p,null,"그리고 이때쯤 가티에다가 테스트를 적용하기 시작했던 것 같다. 그냥 간지나서 시작했다. 우리 테스트해요. 라고 하면 멋있으니까..."),"\n",l.createElement(t.p,null,"사진첩을 돌려보면 이때쯤 반 애들이랑 서면도 놀러 다니고 원래 살던 지역 친구도 만나고 친구와도 자주 만나서 놀았던 것 같다. 내 몸이 세 개였나?"),"\n",l.createElement(t.h1,null,"6월"),"\n",l.createElement(t.p,null,"1일 1코테를 시작했다. 사실 코테의 필요성을 절실히 느끼고 있었고, 더 이상 미루면 안 될 것 같다는 생각에 코테 공부를 시작했다. 담임 갈취로 받은 이코테 책을 들고 아침 자습 시간 30분씩 틈틈히 코테 공부를 했다."),"\n",l.createElement(t.p,null,"그리고 이때부터 지옥의 수행평가 시즌 시작이었다. 거의 매일 1시가 넘어서 잤던 것 같다. 참고로 우리 학교는 6시에 일어나서 아침운동을 하는 아주 멋있는 학교이다. 진심이다. 난 아침운동을 사랑한다. 왜냐하면 아침운동이 내 일과 유일한 움직임이기 때문이다. 아침운동 없으면 진심 운동부족으로 계단 올라가다 쓰러져 죽을지도 모른다. 아무튼 인문 과목 수행도 챙기고, 전공 과목 수행도 챙겼다."),"\n",l.createElement(t.img,{src:"https://velog.velcdn.com/images/gimhanul/post/78e7408a-af74-434d-a56a-a8c5f08e36fa/image.png",alt:""}),"\n",l.createElement(t.p,null,"웹 프로그래밍 수행이 기억에 남는다. 한 학기 동안 배운 리액트를 가지고 2명이 팀을 이뤄서 클론 코딩, 혼자서 자유 프로젝트 구상해서 코딩 둘 다 해야 했다. 팀 프로젝트로 우리는 ",l.createElement(t.a,{href:"https://clone-market-kurly.vercel.app/"},"마켓컬리 페이지를 클론 코딩"),"했다. 그리고 결과물이 진짜 오진다. 내가 봐도 너무 잘했다. 솔직히 이때 마켓컬리 진짜 사이트 뜯어보고, css 염탐하면서 css 실력도 많이 늘었고, 리액트도 쓸 줄 알게 된 것 같다. 물론 개인 프로젝트도 열심히 했다. 비록 며칠만에 완성한 거긴 하지만, 내 구린 디자인을 개선해나간 점이 가장 마음에 든다. 디자인 진짜 구렸는데 고치고 고치다보니까 주변사람들이 와 디자인 잘했다고 감탄을 했다. 그리고 개인적으로 개인 프로젝트 하면서는 객체 배열을 잘 다룰 수 있게 된 것 같다. 이거 두 개 다 1등 했다."),"\n",l.createElement(t.p,null,"시험도 봤네... 대체 난 몸 몇 개로 살았던 거지? 이때는 별 생각 없었는데 쓰고 보니 신기하다. 기말고사라서 과목이 많았다. 솔직히 웹 프로그래밍 수행평가가 재미있었다. 늘 백엔드만 개발하다가 프론트엔드를 하다 보니 재밌어서 정신 못차리고 계속 그것만 했다. 즉, 시험 공부를 안 했다. 시험 기간에는 학교에서도 자습 시간을 쭉 주는데, 이때 자습 시간에 공부를 안 하고 마켓컬리나 만들었다. 근데 잘 봤다."),"\n",l.createElement(t.h1,null,"7월"),"\n",l.createElement(t.p,null,"전공 동아리 새 멤버를 영입할 수 있는 전공 동아리 중간 발표회가 열렸다. 이때까지 틈틈이 백엔드 개발을 해놨기 때문에 어렵지 않게 발표를 준비해서 할 수 있었지만, 프론트엔드 개발된 사항이 없어서 프론트엔드 친구들을 많이 뽑아야 했다. 그래서 발표를 간지나 보이게 준비해서, 애들을 면접보고 뽑도록 했다. 중간 발표회를 보면서 느낀 것은 다들 생각보다 많이 했다는 것이었다. 특히 학교 가상현실을 만드는 애들이 있었는데 진짜 멋있었다."),"\n",l.createElement(t.p,null,"스터디도 진행했다. 학교에서 시간 한 개를 주고, 이 시간을 스터디 시간으로 활용하라고 해서 친하지도 않은 애들 무리가 하는 백엔드 스터디에 꼽껴서 이것저것 많이 공부했던 것 같다. 방학 하고 얼렁뚱땅 사라졌지만, 이때 공부하고 블로그 올리고, 다른 애들한테 들은 내용이 많이 도움됐던 것 같다. 내 벨로그에 올라와있는 회고 글 제외하고 전부는 이때 스터디에서 공부했던 내용이다."),"\n",l.createElement(t.p,null,"그리고 이때 딱 학기 끝날 때 쯤이라서, 기숙사에서 몰래 화채도 만들어 먹고 오이까지 쓸어와서 비빔면도 먹고 재밌게 살았다."),"\n",l.createElement(t.img,{src:"https://velog.velcdn.com/images/gimhanul/post/c0851c7b-f14c-4ed6-9c39-302103d65c0d/image.png",alt:""}),"\n",l.createElement(t.p,null,"말에는 여름 방학을 했다. 우리 학교는 방학을 하기 전후로 일주일은 캠프를 진행한다. 이때 했던 여름 캠프에서도 마찬가지로 ",l.createElement(t.a,{href:"/2022-summer-hackathon"},"해커톤"),"을 했다. 이때 진짜 밥도 안 먹고 잠도 안 자고 커피만 쪽쪽 빨면서 개발을 했다. 근데 결과도 안 좋았다. 과정도 별로고 결과도 안 좋은 속상한 해커톤이었다. 여담으로, 방학식에 이것저것 상을 많이 주는데, 전교 1등을 해서 나가서 교과우수상을 받았다. 이때 해커톤 상을 못 받아서 썩은 표정으로 교과우수상을 받았다. 그래서인지 상 받고 내려오자마자 많은 쌤들이 어디 아프냐고 물어봤던 기억이 있다..."),"\n",l.createElement(t.h1,null,"8월"),"\n",l.createElement(t.p,null,"방학 때는 주짓수를 다녔다. 그냥 운동이 하고 싶었다. 이렇게 살다간 죽을 것 같은 느낌을 받았다. 그래서 운동을 하기로 했고, 한 번쯤은 해보고 싶었던 주짓수를 하기로 하고, 방학을 하자마자 주짓수에 다니기 시작했다. 학교 다니면서 체력이 완전 저질이 돼서, 준비운동부터 힘들었지만 운동을 하고 나오면 그렇게 개운할수가 없었다. 주말을 제외하고 평일에는 매일 1시간 30분씩 주짓수를 했다. 그리고 체육관까지 또 거리가 있어서 매일 1시간씩은 걸었다. 총 2시간 30분씩 운동을 한 셈이다."),"\n",l.createElement(t.p,null,"물론 주짓수가 내 유일한 움직임이긴 했다. 이외에는 별거 안 했다. 전공 동아리에 새로 들어온 병아리들을 공부시켜야겠다는 생각이 들어서, 애들끼리 프로젝트를 기획하고 개발할 수 있게 좀 이끌어주었다. 기특하게도 잘 따라주어서 프론트엔드는 잘 마무리했다."),"\n",l.createElement(t.img,{src:"https://velog.velcdn.com/images/gimhanul/post/543ff746-4985-4ccc-a2b9-aa4ed05438be/image.png",alt:""}),"\n",l.createElement(t.p,null,"수행평가로 했던 웹 프로그래밍 프로젝트를 보완하는 작업도 했다. 물론 학교에서 시켜서 했다. 보완을 하는 게 방학 과제였다. 이때 내가 뭔가를 했다는 게 신기하다. 마켓컬리 주문 페이지를 개발하고, 아우디(개인 프로젝트) 수정 모달 같은 것을 만들었다. 이때 보완한 걸 총합해서 봐서 1등도 받았다."),"\n",l.createElement(t.p,null,"개학을 하고 바로 교내 알고리즘 대회가 열렸다. 6월부터 8월까지 꾸준히 1일 1코테를 해왔기 때문에 최우수상이라는 좋은 성적을 거둘 수 있다. 물론 내 위에 대상이 있다."),"\n",l.createElement(t.img,{src:"https://velog.velcdn.com/images/gimhanul/post/02d0bb9c-0a00-4519-addd-03d0826f6d0e/image.png",alt:""}),"\n",l.createElement(t.p,null,"두려워서 미루고 미뤘던 가티 채팅 개발도 이때 마쳤다. Java로 개발하고 있는데, socket.io를 사용할 수 있는 Netty 라이브러리를 사용했다. 워낙 사용하는 사람이 없고, 예제도 별로 없어서 공식 문서를 뒤적거리면서 개발했다. 그리고, 사용하면서 에러가 나서 직접 라이브러리에 PR도 올리고 좋은 경험을 많이 했다."),"\n",l.createElement(t.p,null,"8월 말에는 코틀린 공부를 했다. 현업에서 자바에서 코틀린으로 넘어가는 추세라는 것을 알고 있었고, 이를 미루고 미루다가 강의라도 하나 사버리면 아까워서라도 보겠지라는 마인드로 강의를 하나 질렀다. 그리고 진짜 자바에서 코틀린으로 마이그레이션하는 과정을 하나하나 따라가며 코프링 공부를 했다."),"\n",l.createElement(t.img,{src:"https://velog.velcdn.com/images/gimhanul/post/75c97528-9978-4b50-affd-a5ac52f28528/image.png",alt:""}),"\n",l.createElement(t.p,null,"그리고 이때부터 일기를 쓰기 시작했다. 투두메이트를 사용하고 있는데, 이때 딱 일기장 기능이 출시했기 때문이다. 한두줄?씩 짧게짧게 형식 없이 쓰는데 돌려보면 귀엽다."),"\n",l.createElement(t.h1,null,"9월"),"\n",l.createElement(t.img,{src:"https://velog.velcdn.com/images/gimhanul/post/aa8d6b9f-6cbe-481a-a65d-2e9363e81fd5/image.png",alt:""}),"\n",l.createElement(t.p,null,"초에 ",l.createElement(t.a,{href:"/unithon-9th"},"학교 밖 해커톤"),"을 나갔다. 소프트웨어 마이스터고라는 바운더리를 벗어나서 하는 해커톤은 처음이었다. 이때 좋은 사람들을 많이 만난 것 같다. 사실 연락도 안 하지만, 해커톤 같은 조였던 분들과 분위기도 좋고 옥상 가서 리프레시도 하고 재밌게 놀았던 것 같다. 그리고 처음으로 여유롭게 했던 해커톤인데, 우수상을 받았다. 그래서 해커톤에 대한 생각이 많이 바뀐 것 같다. 빡빡하게 하지 않고 여유롭게 즐기면서 네트워킹하면서 해도 충분하다는 생각이 들었다. 그리고 이 마인드는 뒤에 있는 모든 해커톤에 영향을 끼쳤다."),"\n",l.createElement(t.p,null,"2학기 수업은 전부 프로젝트 형식으로 돌아갔다. 자바 수업도 프로젝트를 시작했고, 데이터베이스 수업도 프로젝트를 시작했다. 대신 데이터베이스 프로젝트는 특이한 게 ORM을 사용하면 안 됐고, SQL을 직접 진짜 써야 했다. 또한 데이터베이스 프로젝트는 특별하게 코프링으로 사용했다. 그냥 코틀린이 해보고 싶었다. 그렇게 새로운 프로젝트들 기획도 하고, 개발도 하면서 바쁘게 보냈다."),"\n",l.createElement(t.img,{src:"https://velog.velcdn.com/images/gimhanul/post/bc9e7fcc-310f-4a5d-9e45-a306d64002ba/image.png",alt:""}),"\n",l.createElement(t.p,null,"9월의 마지막 날에는 부산에서 하는 AI KOREA에 가티 챗봇을 전시했다. 그래서 앱 개발에도 발을 들였다. 물론 프론트엔드 친구들이 개발을 잘 해주고 있었지만 속도가 느렸다. 그래서 내가 ",l.createElement(t.a,{href:"http://socket.io/"},"socket.io")," client 구현과 API 연결을 맡아서 개발에 참여했다. 물론 퍼블리싱도 조금 하긴 했는데, 퍼블리싱을 뼝아리들이 많이 해줬다. 그리고 이때 미루고 미루던 배포를 했다. 사실 CD를 구축하고 싶었는데, 도저히 시간이 없어서 그냥 배포를 했는데도, 여러 에러가 나서 참 힘들었다. 아무튼 이렇게 우여곡절 끝에 챗봇 부분을 완성하고 AI KOREA에 성공적으로 전시할 수 있었다. 이때는 설명을 열심히 했다. 가티만 전시한 게 아니고 앞서 만들었던 키위와 가티, 매점 상품권 시스템도 같이 전시해서 아주 만족스럽고 뿌듯한 전시회였다."),"\n",l.createElement(t.h1,null,"10월"),"\n",l.createElement(t.img,{src:"https://velog.velcdn.com/images/gimhanul/post/608b6bd3-75b1-4b97-824f-e977f8cf9022/image.png",alt:""}),"\n",l.createElement(t.p,null,"소프트웨어마이스터고 연합 해커톤에 나갔다. 3일이나 되는 해커톤은 처음이었다. 첫 날은 자고 둘째 날은 밤을 새웠다. 주제가 괜찮게 뽑혀서 그런지 과기부 장관상을 받았다. 백엔드 개발에 적극적으로 참여하지 못해서 아쉬웠다. 그래도 나름 새로운 친구와 친해지고, 기획적인 측면에서 성장한 것 같다."),"\n",l.createElement(t.p,null,"중간고사를 봤다. 이때 평균이 96점인가 그랬다. 아무튼 잘 봤다는 뜻... 왜 잘 봤는지는 모르겠다. 사실은 평균이고 뭐고 중요하지 않고 유일하게 공부한 한국사만 망해서 많이 속상했다. 진짜 한국사만 공부했는데, 한국사 빼고 전부 96점 위였다... 그래서 잘 본 것에 대한 만족감보다 한국사를 망했다는 것에 대한 속상함이 더 컸다."),"\n",l.createElement(t.p,null,"10월 말에 바로 데이터베이스 프로젝트가 끝났다. 두 달이 기한이었다. 이때는 오늘의집 클론 코딩을 했다. 백엔드를 클론하는 건 처음이었는데, 생각보다 주문과 상품 도메인이 복잡했다. 지금 봐도 코드가 정말 더럽다. 하지만 그때 내 머리에서는 그 구조가 최선이었다는 생각을 하면 마음이 편해진다. (자기합리화 맞음) 발표하기 바로 그 직전까지도 개발을 해서 시연을 할 때 상세페이지 에러가 난 게 아쉬웠지만, 나름대로 동작은 잘 돼서 좋았다."),"\n",l.createElement(t.img,{src:"https://velog.velcdn.com/images/gimhanul/post/a706075c-a41e-42a6-a069-1f0b31a96b78/image.png",alt:""}),"\n",l.createElement(t.p,null,"마지막 날에는 미루고 미루던 가티 CD를 구축했다. 왜 했는지는 모르겠는데 DB 프로젝트 끝나고 중간고사 끝난 기념으로 했나? 아무튼 심심해서 했던 것 같다. CD를 처음으로 구축해보고 느낀 것은 편하다!이다. 지금껏 그냥 배포만 해봤으니 아주 신세계였다. '이래서 CD를 구축하는구나'라는 생각이 들었다."),"\n",l.createElement(t.h1,null,"11월"),"\n",l.createElement(t.img,{src:"https://velog.velcdn.com/images/gimhanul/post/8ec54a90-385c-48df-a273-af14219bb86c/image.png",alt:""}),"\n",l.createElement(t.p,null,"마이다스 영 챌린지라고 하는 마이다스아이티와 소프트웨어산업협회가 진행하는 고등학생 대상 해커톤에 나갔다. 4명이 한 팀이었고, 나만 빼고 3명이 프론트, 나 혼자 백엔드를 개발했다. 사실 해커톤은 이게 적당하고 좋은 것 같다. 짧은 시간에 완성도 높은 개발을 원하는데, 이는 프론트가 중요하므로 프론트가 많은 게 맞는 것 같다. 이때는 백엔드 개발을 엄청 많이 열심히 했다. 사실 하고도 시간이 남아서 발표 피피티도 만들고 이것저것 많이 했다. 완벽해야 한다는 생각을 버리고 해커톤이니까 버릴 건 버린다는 마인드로 하니까 쉽게 됐던 것 같다. 이때 해커톤을 계기로, 마이다스아이티에서 인턴 제안(비스무리한거)도 와서, 당장 2월에 인턴으로 일해보기로 했다."),"\n",l.createElement(t.p,null,"웹 프로그래밍 수행평가로 외주를 진행했다. 물론 수행평가기 때문에 땡전한푼 받지 않았다. 고객과 요구사항을 받아들이고, 그에 맞추어 기획하고 디자인하고 개발하는 과정이 의미있었다. 주변 사람이 아닌 생전 처음 보는 실제 고객과 상호작용하는 것은 처음이었기 때문이다. 소통의 중요성을 다시 한 번 깨닫게 된 계기가 되었다."),"\n",l.createElement(t.img,{src:"https://velog.velcdn.com/images/gimhanul/post/e7156c71-8380-4bdf-8e9a-5d465d0f7a85/image.png",alt:""}),"\n",l.createElement(t.p,null,"이때 학교 역량 강화 프로그램으로 싱가포르도 갔다. 일주일 간 갔는데, 싱가포르 대학교 NUS에서 일주일간 AI 프로그램을 들었다. 사실 난 진짜 이렇게 공부를 할 줄은 몰랐는데 하더라... 가서 들었던 강의 중에 블록체인에 대해 발표를 해서 1등을 받기도 했다. 또한 공부만 한 것이 아니라, 마리나 베이와 유니버셜 스튜디오 같은 관광지도 많이 다녔다. 해외 여행은 오랜만이라서 너무 좋았고, 이런 기회를 얻게 된 것에 감사했달까... 싱가포르 망고는 아직도 못 잊겠다. 너무 맛있어... 집에 사오고 싶었는데, 실패했다. 과일은 입국 불가래요... 같이 입국하자니까 증말..."),"\n",l.createElement(t.p,null,"싱가포르에서 돌아와서는 가티 개발을 쭉 했다. 앱 개발자였다 그냥... 12월 초에 바로 전공동아리 최종 발표회가 예정되어 있었기 때문이다. 프론트에서 필요한 데이터 형식에 맞추어서 백엔드를 유연하게 바꾸는 과정이 참 뭐랄까, 씁쓸했다. 애초에 잘 짰으면 좋았을 것 같다는 생각이 들었다. 하지만 그런 건 불가능하니까, 그걸 맞춰나가는 게 개발이고 협력인 거겠지?"),"\n",l.createElement(t.h1,null,"12월"),"\n",l.createElement(t.img,{src:"https://velog.velcdn.com/images/gimhanul/post/dca92c8d-8c2e-45e2-a0a7-f1dec493b892/image.png",alt:""}),"\n",l.createElement(t.p,null,"바로 가티 최종 발표를 했다. 강당에서 부스 운영도 하고, 가티 친구도 아주 잘 돌아갔다. 준 1년 간 진행한 가장 큰 프로젝트였는데, 성공적으로 마치니 여간 뿌듯할수가 없었다. 발표를 하고 최우수상을 받았다. 1등이다. 부스에서 사람들이 잘 만들었다고 칭찬해 주는 게 좋았다."),"\n",l.createElement(t.img,{src:"https://velog.velcdn.com/images/gimhanul/post/b155a2af-bbba-4158-9a60-3be0991b37cd/image.png",alt:""}),"\n",l.createElement(t.p,null,"그리고 ",l.createElement(t.a,{href:"/daegu-hackathon"},"또 해커톤"),"을 나갔다. 이정도면 해커톤 중독이다. 사실 도망가고 싶었는데, 내가 친구를 끌어들여놔서 갈 수밖에 없었다. 이때 해커톤은 진짜 즐기면서 했다. 6시간밖에 안 되는 짧은 해커톤이었고, 저 시간 내에 큰 프로덕트를 만들어낼 수는 없을 것 같아서 즐기면서 하기로 팀원들과 합의하고 간단한 깃허브 MBTI를 만들었다. 깃허브 API를 끌어다 와서 쓰면서 MBTI를 추측해주는 거였는데, 놀랍게도 내 깃허브를 통해 내 MBTI가 나왔다. 시간이 남으니 아예 배포를 해서 발표를 할 때 공개를 했는데, 한 50명 정도가 내 디비에 개인정보를 팔아 MBTI를 얻어갔다. 사실 그냥 사용자가 많다는 뜻이다. 중간에 월드컵도 보면서 해서 낭만있고 좋았다. 이때 아주 짜아릿한 포르투갈전이었기 때문에 분위기도 미쳤었다."),"\n",l.createElement(t.p,null,"그리고 정보처리산업기사 과정형 평가 5회 시험을 쳤다. 총 이틀 쳤는데 하루는 필기, 하루는 실기를 봤다. 따로 공부는 하지 않고 그동안 방과후에서 배웠던 것들을 가지고 쳐서, 합격했다. 80점이 커트라인인데 내 점수는 90점이다. 내부평가랑 실기 캐리인 듯 하다. 참고로 필기는 그냥 나락이었다. 아는 문제가 없었다."),"\n",l.createElement(t.p,null,"서울로 떠났다. 소프트웨이브라고 하는 소프트웨어 박람회에 전교생이 참여하기 위해서이다. 3일간 갔는데, 가서 가티를 전시하고 구경하러 온 사람들에게 설명해드렸다. 사실 이때, 동아리 내부에서 설명하는 순서를 가지고 다툼이 있었는데 어느 순간에서든 소통과 조정, 팀장의 역할이 중요하다는 것을 느꼈다. 그리고 무엇보다 중요한 것은 팀원 한명한명의 인성인 것 같다. 그래서 인성 면접을 보고 사람을 뽑나보다. 소프트웨이브에서는 옆 다른 학교의 서비스가 정말 인상 깊었다. 팔을 들어서 이를 인식하고 게임 캐릭터가 움직이는 그런 게 있었는데, 이런 걸 왜 하는지 생각했다가, 아령을 들고 하면 팔 운동이라는 말을 듣고 많이 놀랐다. 발상의 전환이랄까... 그리고 VR 자동차 게임도 재밌었다. 사실 100번도 더 하고 싶었는데 눈치보여서 그냥 나왔다."),"\n",l.createElement(t.img,{src:"https://velog.velcdn.com/images/gimhanul/post/9489bfc4-b7be-4226-9c7a-70429e03fcdc/image.png",alt:""}),"\n",l.createElement(t.p,null,"여러 회사 탐방도 갔다. 우아한 형제들과 NC소프트를 갔는데, 큰 기업을 가보니 내 생각이 달라졌다. 지금까지는 그냥 작은 스타트업에 가도 으쌰으쌰하고 서로 친밀한 분위기에서 개발하는 것도 좋을 것 같다는 생각이 있었는데, 큰 기업을 가보니 체계적이고 자유로운 분위기, 좋은 복지를 누리는 게 더 내 삶의 질이 좋을 것 같다는 생각이 들었다. 역시 가봐야 뭔가를 깨닫게 되는 것 같다."),"\n",l.createElement(t.img,{src:"https://velog.velcdn.com/images/gimhanul/post/9bb98b42-17c3-47e6-acea-21336bf2d9f7/image.png",alt:""}),"\n",l.createElement(t.p,null,"수행평가였던 자바 프로젝트를 마감했다. '심청이'라는 것을 개발했는데, 구글 폼을 학교 자체적으로 모아서 운영하는 것이다. 9월서부터 점진적으로 꾸준히 천천히 개발했고, 개발도 발표도 성공적이었다. 전체 1등을 했고, 선생님께서도 실제로 사용해주셔서 150명 정도의 사용자를 얻었다. 사용자를 얻고 실제로 피드백을 받다 보니 어거지로 사용하는 것이 아닌 진짜로 서비스하고 싶다는 생각이 들었다. 그래서 팀원 모집을 했다. 앞으로 새로운 팀원들과 사용자의 피드백에 대응하고, 새로운 기능을 추가하며 성장해나갈 계획이다."),"\n",l.createElement(t.p,null,"웹 프로그래밍 외주 수행도 마감했다. 외주를 주신 대표님이 오셔서 보고 칭찬을 하고 가셨다. 사실 나는 이렇게 프론트엔드에 손 얼마 안 댄 프로젝트는 처음이다. 그만큼 프론트엔드를 담당하는 친구의 역량이 중요하다는 것을 느꼈다. 지금껏 프론트엔드를 개발하는 것도 재밌긴 하지만, 일이 두 배가 되는 느낌이라 힘들기도 했다. 이게 협업인가?... 싶기도 하고... 그렇다."),"\n",l.createElement(t.img,{src:"https://velog.velcdn.com/images/gimhanul/post/186fa4ed-f0a4-4eb9-90d4-c74c03e7d0d0/image.png",alt:""}),"\n",l.createElement(t.p,null,"다가오는 겨울방학에 인턴을 하기 위해서 구직 활동도 했다. 겨울방학 인턴 프로그램에 신청해서 기업 설명회를 듣고 회사 두 개에 포트폴리오를 냈다. 한 회사에서는 아예 연락이 오지 않았고, 한 회사에서는 면접까지 봤다. 이후 나를 채가기 위해서 학교에 전화를 했는데, 학교 측에서 행정상으로 일정이 꼬여서 실질적으로 일 할 수 있는 시간이 없어 나를 쓰지 못한다고 했다. 너무 아쉬웠다. 이런저런 시도를 해봤으나 그냥 안 된다고 한다. 속상했지만 위에서 언급했던 다른 기업에서 인턴 제의가 들어왔기 때문에 그냥 그거 하기로 했다. 면접을 보고, 포트폴리오를 점검하면서 내년 취업에 대비하기도 했고, 면접을 보면서 내가 취해야 할 태도와 말해야 할 것에 대해 많이 정리한 것 같다."),"\n",l.createElement(t.img,{src:"https://velog.velcdn.com/images/gimhanul/post/a3ab4fb2-3cf6-4952-add0-eb923c6b19c3/image.png",alt:""}),"\n",l.createElement(t.p,null,"기말고사를 봤다. 결론적으로는 그냥 망했다. 한 마디로 그냥 망했다. 정말 망했다. 공부를 안 한 것도 맞지만 그래도 사람 마음이 참 간사하게 지금까지도 공부를 안 했는데 점수 잘 받아왔으니, 이번에도 공부 안 해도 잘 볼 거라고 생각했나보다. 근거 없는 자신감은 어디서 온 건지... 아무튼 3학년 때는 인문 과목 시험도 없을 테니 한 시름 놨다."),"\n",l.createElement(t.p,null,"기말고사를 보고 난 후 12월 마지막 주에는 캠프를 했다. 12월에 쓸 게 이렇게 많은 걸 보니 바쁘게도 살았다. 캠프에서는 강사 선생님을 따라 챗봇을 개발했다. 우수 학생으로 뽑혀서 전시에도 참여하고 발표도 했다. 그리고 e스포츠에서 테트리스 종목에 참가도 하고, 장기자랑에서 무대에 서기도 했다. 꾸준히 일을 만들어 바쁘게 지냈던 것 같다."),"\n",l.createElement(t.h1,null,"잘한 점"),"\n",l.createElement(t.ul,null,"\n",l.createElement(t.li,null,"네트워킹\n여러 해커톤을 참가하면서 다양한 사람들을 많이 만난 것 같다. 이는 내가 이 학교를 다니면서 갈증을 느꼈던 부분인데, 충분히 해결될 만큼 많은 사람을 만나고 여러 이야기를 나눔으로써 많이 성장한 것 같다."),"\n",l.createElement(t.li,null,'연애\n언급할지 말지 정말 고민했다. 주변 시선이 신경 쓰이기 때문이다. 그치만 알빠임? 마인드로 올해 가장 잘한 일이라고 생각하긴 하니까 그냥 적겠다. 어차피 길어서 여기까지 읽는 사람도 없을 것 같다. 지금은 이별했지만, 저 많은 일정을 소화해내면서 연애도 했다. 나는 이 연애를 통해 (상대의 입장은 잘 모르겠지만) 나는 인격적으로도 기술적으로도 많이 성장했다. 나와는 결이 다른 사람과 가깝게 지내면서 일상을 주고받고, 의지하는 것만으로도 사람을 귀찮아하던 내가 "인간적인 교류"에 대한 생각이 바뀌게 되는 계기였던 것 같다. 또한 싸우고 이별하는 과정을 이겨내면서 단단해졌다고 해야 하나... 무엇보다 사랑하고 사랑받는 그 느낌은 해보기 전에는 몰랐던 거라서, 아무튼 그래서 감사한 게 많다.'),"\n",l.createElement(t.li,null,"개발\n가티, 심청이, 상품권 시스템 같은 여러 프로젝트를 완벽하진 않아도 마감 쳤다. 실제로 서비스를 하고 있는 프로젝트도 있고, 사용자가 활발하게 피드백을 주고 있다. 이렇게 프로젝트를 기한 내에 완성하고 외적으로도 내적으로도 성취를 이룬 게 잘한 것 같다. 또한 거기서 멈추지 않고, 고도화를 꿈꾸고 있다는 점도 좋은 것 같다."),"\n",l.createElement(t.li,null,"독서\n책을 꾸준히 읽었다. 책을 읽어서 다른 사람의 생각을 보고 견문을 넓혀야 한다고 생각한다. 책을 읽는 것을 그닥 좋아하지는 않지만, 그럼에도 계속 읽었다. 다양한 분야의 책을 읽고 나의 부족한 점을 채워나가고, 독서일지를 쓰며 내 생각을 정리한 활동이 좋은 것 같다."),"\n"),"\n",l.createElement(t.h1,null,"아쉬운 점"),"\n",l.createElement(t.ul,null,"\n",l.createElement(t.li,null,"품질\n아무래도 쳐내야 할 일이 많다 보니까, 딱히 코드의 품질에 대해 신경쓰지 못한 것 같다. 사실 얼마 전 다른 사람들을 염탐하다가 현타가 왔다. 나는 2월에 배웠던 코드에 멈춰있는데, 다른 사람들은 나와 비슷하게 시작해지만 지금은 나보다 많이 성장했다는 것을 느꼈다. 그래서 얼마 전 도메인 주도 개발과 nest.js 공부를 시작했다. 벌어진 지식 격차를 따라잡고 싶다. 그리고 무엇보다, nest.js를 배워 놓으면 취업을 할 때 백엔드 프레임워크에서 한계(겨울방학 인턴을 구할 때 느낌)를 뛰어넘을 수 있다."),"\n",l.createElement(t.li,null,"스트레스\n내가 받는 스트레스의 9할은 대인관계에서 오는 편이다. 그리고 스트레스를 딱히 해소하지 않고 할 일을 해내며 살아가다가 바빠지면 잊는 방식으로 살았다. 솔직히 말하면 한가할 때가 없이 쭉 바빠서, 늘 스트레스와 일을 동반했다. 스트레스를 해소하든, 애초에 안 받는 방향으로 해결해나가고 싶다. 아직 해결 전이다."),"\n",l.createElement(t.li,null,"자세\n몸이 점점 망가지고 있는 게 느껴진다. 이걸 쓰고 있는 지금도 의자에 반쯤 누워있다. 기숙사에 산다는 것을 핑계로 운동을 안 하는데, 그래도 나름 여름에 운동을 하긴 했지만, 꾸준히 운동하는 게 효과가 있지 잠깐 번쩍한다고 효과가 있는 건 아닌 것 같다. 내 자세를 의식하고 꾸준히 운동해서 건강한 삶을 살아야겠다."),"\n"),"\n",l.createElement(t.h1,null,"앞으로"),"\n",l.createElement(t.p,null,"2022년은 대체적으로 바쁘게 산 듯하다. 내가 뭘 이렇게 많이 한 줄은 몰랐는데 정리하니 내 몸이 몇 개인지 아주 의심스럽다. 내년에는 취업을 해야 하기 때문에 얼마나 더 바빠질지 모르겠다."),"\n",l.createElement(t.p,null,"일단 크게크게 봤을 때 2023년 목표는"),"\n",l.createElement(t.ul,null,"\n",l.createElement(t.li,null,"건강하기"),"\n",l.createElement(t.li,null,"심청이 고도화하기"),"\n",l.createElement(t.li,null,"취업하기"),"\n",l.createElement(t.li,null,"새로운 프로젝트 안정적으로 서비스하기"),"\n",l.createElement(t.li,null,"후배 양성하기"),"\n",l.createElement(t.li,null,"사랑하기"),"\n",l.createElement(t.li,null,"많이 놀기"),"\n"),"\n",l.createElement(t.p,null,"정도이다. 파이팅!"))}var m=function(e){void 0===e&&(e={});const{wrapper:t}=Object.assign({},(0,a.ah)(),e.components);return t?l.createElement(t,e,l.createElement(c,e)):c(e)},r=n(4765);function i(e){return l.createElement(r.Z,e,l.createElement(m,e))}r.Z}}]);
//# sourceMappingURL=component---node-modules-lekoarts-gatsby-theme-minimal-blog-core-src-templates-post-query-tsx-content-file-path-content-posts-2022-index-mdx-ebda0339a23e2d32e0d0.js.map