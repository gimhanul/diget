"use strict";(self.webpackChunkminimal_blog=self.webpackChunkminimal_blog||[]).push([[763],{4765:function(e,t,n){n.d(t,{F:function(){return p},Z:function(){return g}});var a=n(7294),l=n(8733),r=n(795),c=n(8377),A=n(6799),i=n(8871);var o=e=>{let{post:t}=e;return null};const s=["16px","8px","4px"].map((e=>"rgba(0, 0, 0, 0.1) 0px "+e+" "+e+" 0px"));var m=e=>{let{data:{post:t},children:n}=e;return(0,l.tZ)(c.Z,null,(0,l.tZ)(r.X6,{as:"h1",variant:"styles.h1"},t.title),(0,l.tZ)("p",{sx:{color:"secondary",mt:3,a:{color:"secondary"},fontSize:[1,1,2]}},(0,l.tZ)("time",null,t.date),t.tags&&(0,l.tZ)(a.Fragment,null," — ",(0,l.tZ)(A.Z,{tags:t.tags})),t.timeToRead&&" — ",t.timeToRead&&(0,l.tZ)("span",null,t.timeToRead," min read")),(0,l.tZ)("section",{sx:{my:5,".gatsby-resp-image-wrapper":{my:[4,4,5],borderRadius:"4px",boxShadow:s.join(", "),".gatsby-resp-image-image":{borderRadius:"4px"}},variant:"layout.content"}},n),(0,l.tZ)(o,{post:t}))};const p=e=>{var t,n,a;let{data:{post:r}}=e;return(0,l.tZ)(i.Z,{title:r.title,description:r.description?r.description:r.excerpt,image:r.banner?null===(t=r.banner)||void 0===t||null===(n=t.childImageSharp)||void 0===n||null===(a=n.resize)||void 0===a?void 0:a.src:void 0,pathname:r.slug,canonicalUrl:r.canonicalUrl})};function g(e){let{...t}=e;return a.createElement(m,t)}},6799:function(e,t,n){var a=n(8733),l=n(7294),r=n(1883),c=n(3494),A=n(9706);t.Z=e=>{let{tags:t}=e;const{tagsPath:n,basePath:i}=(0,c.Z)();return(0,a.tZ)(l.Fragment,null,t.map(((e,t)=>(0,a.tZ)(l.Fragment,{key:e.slug},!!t&&", ",(0,a.tZ)(r.Link,{sx:e=>{var t;return{...null===(t=e.styles)||void 0===t?void 0:t.a}},to:(0,A.Z)("/"+i+"/"+n+"/"+e.slug)},e.name)))))}},8871:function(e,t,n){var a=n(7294),l=n(1883),r=n(4232);t.Z=e=>{let{title:t="",description:n="",pathname:c="",image:A="",children:i=null,canonicalUrl:o=""}=e;const s=(0,r.Z)(),{siteTitle:m,siteTitleAlt:p,siteUrl:g,siteDescription:u,siteImage:E,author:d,siteLanguage:b}=s,f={title:t?t+" | "+m:p,description:n||u,url:""+g+(c||""),image:""+g+(A||E)};return a.createElement(a.Fragment,null,a.createElement("html",{lang:b}),a.createElement("title",null,f.title),a.createElement("meta",{name:"description",content:f.description}),a.createElement("meta",{name:"image",content:f.image}),a.createElement("meta",{property:"og:title",content:f.title}),a.createElement("meta",{property:"og:url",content:f.url}),a.createElement("meta",{property:"og:description",content:f.description}),a.createElement("meta",{property:"og:image",content:f.image}),a.createElement("meta",{property:"og:type",content:"website"}),a.createElement("meta",{property:"og:image:alt",content:f.description}),a.createElement("meta",{name:"twitter:card",content:"summary_large_image"}),a.createElement("meta",{name:"twitter:title",content:f.title}),a.createElement("meta",{name:"twitter:url",content:f.url}),a.createElement("meta",{name:"twitter:description",content:f.description}),a.createElement("meta",{name:"twitter:image",content:f.image}),a.createElement("meta",{name:"twitter:image:alt",content:f.description}),a.createElement("meta",{name:"twitter:creator",content:d}),a.createElement("meta",{name:"gatsby-theme",content:"@lekoarts/gatsby-theme-minimal-blog"}),a.createElement("link",{rel:"icon",type:"image/png",sizes:"32x32",href:(0,l.withPrefix)("/favicon-32x32.png")}),a.createElement("link",{rel:"icon",type:"image/png",sizes:"16x16",href:(0,l.withPrefix)("/favicon-16x16.png")}),a.createElement("link",{rel:"apple-touch-icon",sizes:"180x180",href:(0,l.withPrefix)("/apple-touch-icon.png")}),o?a.createElement("link",{rel:"canonical",href:o}):null,i)}},7423:function(e,t,n){n.r(t),n.d(t,{Head:function(){return A.F},default:function(){return i}});var a=n(7294),l=n(1151);function r(e){const t=Object.assign({h1:"h1",p:"p",strong:"strong",ul:"ul",li:"li",span:"span",h2:"h2",code:"code",blockquote:"blockquote"},(0,l.ah)(),e.components);return a.createElement(a.Fragment,null,a.createElement(t.h1,null,"이슈 부검"),"\n",a.createElement(t.p,null,"이 글은 ",a.createElement(t.strong,null,"심청이"),"를 실제로 서비스하는 과정에서 발생한 이슈에 대한 부검이다."),"\n",a.createElement(t.p,null,"그러니까, 내가 겪은 이슈가 뭐였는지, 어떻게 해결했는지 생생하게 기록하기 위해 이 글을 쓰게 됐다."),"\n",a.createElement(t.p,null,"이 이슈는 2022년 12월 23일, 크리스마스 이브이브에 생긴 슬픈 이슈이다."),"\n",a.createElement(t.p,null,"그리고 다른 의미로는 시험 마지막날이어서, 빡자습을 해야 했다."),"\n",a.createElement(t.h1,null,"심청이"),"\n",a.createElement(t.p,null,"이슈를 이해하려면, 먼저 심청이가 무엇인지 알아야 한다."),"\n",a.createElement(t.p,null,"심청이는 2학기 자바 프로젝트의 수행평가로 만든 웹이다."),"\n",a.createElement(t.p,null,"간단하게 말하자면, ",a.createElement(t.strong,null,"우리 학교에서 쓰는 구글폼을 다 모아놓은 것"),"이다."),"\n",a.createElement(t.p,null,"학생 입장에서는"),"\n",a.createElement(t.ul,null,"\n",a.createElement(t.li,null,"학교에서 조사해야 할 신청들을 모아 놓아서 편하다."),"\n",a.createElement(t.li,null,"학번 입력도 안 해도 된다."),"\n"),"\n",a.createElement(t.p,null,"선생님 입장에서는"),"\n",a.createElement(t.ul,null,"\n",a.createElement(t.li,null,"홍보를 하고 나서는, 구글폼 링크 다시 달라는 땡깡을 안 받아도 된다."),"\n",a.createElement(t.li,null,"공지사항을 매번 카톡으로 일일이 전달해야 했는데, 이젠 심청이에서 한 번만 하면 된다."),"\n"),"\n",a.createElement(t.p,null,"등등의 장점이 있는 아주 ",a.createElement(t.strong,null,"매력적인")," 플랫폼이다. ㅎㅎ."),"\n",a.createElement(t.h1,null,"발생"),"\n",a.createElement(t.p,null,"내가 이 이슈를 알게 된 건 친구의 제보였다."),"\n",a.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<span\n      class="gatsby-resp-image-wrapper"\n      style="position: relative; display: block; margin-left: auto; margin-right: auto; max-width: 960px; "\n    >\n      <span\n    class="gatsby-resp-image-background-image"\n    style="padding-bottom: 176.66666666666666%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAjABQDASIAAhEBAxEB/8QAFwABAQEBAAAAAAAAAAAAAAAAAAQFA//EABYBAQEBAAAAAAAAAAAAAAAAAAABAv/aAAwDAQACEAMQAAABorydOSgGFp86jo5EpF0B/8QAHRAAAQQDAQEAAAAAAAAAAAAAAgABAwQREjMTEP/aAAgBAQABBQKafyON2MFc7QY8Vd61+KlrtKYDoG6w33//xAAVEQEBAAAAAAAAAAAAAAAAAAAQEf/aAAgBAwEBPwFr/8QAFBEBAAAAAAAAAAAAAAAAAAAAIP/aAAgBAgEBPwFf/8QAIBAAAAYBBQEAAAAAAAAAAAAAAAECEBESUSAhMTJxgf/aAAgBAQAGPwKtZIEqOW3wERhvgR402gEnA6q0f//EAB0QAAICAwADAAAAAAAAAAAAAAERADEQIVFhcYH/2gAIAQEAAT8hK0CGxAnRHhKGFqGlTrFPrG2BYchklN/NE54m+RFAQAKIcn//2gAMAwEAAgADAAAAEAz+83PP/8QAFhEBAQEAAAAAAAAAAAAAAAAAEBFB/9oACAEDAQE/EMYf/8QAFhEBAQEAAAAAAAAAAAAAAAAAEBFB/9oACAECAQE/ENa//8QAHhABAQACAgIDAAAAAAAAAAAAAREAITFBEFFhgZH/2gAIAQEAAT8QBSK0iVZrjJKMgvGIOSNOEUeXGIqDCLN8+GSqLwd7cHrLevfXiytAYDx9/OEDMhEuVWAaumBII26O8QNH5gVgLt1n/9k=\'); background-size: cover; display: block;"\n  ></span>\n  <img\n        class="gatsby-resp-image-image"\n        alt="one"\n        title=""\n        src="/static/96e37db6cd18cc2d712291883f31899a/18e3b/one.jpg"\n        srcset="/static/96e37db6cd18cc2d712291883f31899a/46946/one.jpg 240w,\n/static/96e37db6cd18cc2d712291883f31899a/55489/one.jpg 480w,\n/static/96e37db6cd18cc2d712291883f31899a/18e3b/one.jpg 960w,\n/static/96e37db6cd18cc2d712291883f31899a/b2f64/one.jpg 1125w"\n        sizes="(max-width: 960px) 100vw, 960px"\n        style="width:100%;height:100%;margin:0;vertical-align:middle;position:absolute;top:0;left:0;"\n        loading="lazy"\n        decoding="async"\n      />\n    </span>'}}),"\n",a.createElement(t.p,null,"진짜 무슨 크리스마스 선물 마냥 아침 7시에 화장실에 양치를 하러 들어가는데 이 카톡이 왔다. 한 선생님께서 그 다음주에 진행하는 AI 캠프에서 선택 특강의 1, 2, 3순위를 심청이를 통해 받았는데, 배정이 이상하게 됐다는 카톡이었다."),"\n",a.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<span\n      class="gatsby-resp-image-wrapper"\n      style="position: relative; display: block; margin-left: auto; margin-right: auto; max-width: 960px; "\n    >\n      <span\n    class="gatsby-resp-image-background-image"\n    style="padding-bottom: 65.41666666666667%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAANCAYAAACpUE5eAAAACXBIWXMAAAsTAAALEwEAmpwYAAACuklEQVR42mVTTW8SYRDef+bBX2FjtIdqorZBNFs+lg8JrRz0YJuW2qRnD1pNlcREPdm0p5Y2KVgssBTYUmT5XGBh2YU+zryVGOPhyTuzM/u8M8+8I4WDQYT8frjdbrhcLvh9PvjJDwYCkGUZQYoLn84AfYtEIgiFQggJXxHfFhcXEQ6HBaQnN29AuTeH7FkWlUoFWrmM4vk5CoUCyqUS8tkz/MxkkDk9xY90GvlcTvilYlHkXmgaimSvrq5CURRIC3fvUIUe9Hp9tFptnBOZZVmYXAETZ4Djg318+foNe3t7SCQSSCaT2N3dRafTwWQygW3bcBwHm5ubohPp4f05RGQ3tKKK1PEB8nlV3MpJtVoNJycp+pYXtmEYgojPdruNbrdLRbTQ7/cFIbcvPVpYQPR5DG1dg93TYTt062gkbm42W+LHEfl8NptNgXq9jkajIezxeCzia2trmJ+fh/Rg5hZkMtodA+ZgiC7dzonD4VBg9Ie8Wq0KjRkl0pZ90zRFjPNisRhmZ2chybdnEHnsQlm7wEkqLYbB4KSpPqxpjobBUFVVDIFjXB3HOZeHwq9CCjwLI/biJfRyDq1KFkPLxmBgiso4eUqoka48MK7w8vJSdMFtT7vY2NiAj56cpNBklpaWSOgOxo4tfras66Q2Cd4jCRyyG7qOGrVZ12v4RYRVIuZzRIQWIR6Pw+v1EiG9neXlZTEt1qTX64mpmQzWkdqyxhPoNKBao4kqTbtCqNJgzJEN++oKAyoivr7+LyGTsCasjU0JDgArk4ax/QbGp20YO2/R/bwDc/87uokPMD6+o/O9iJunKbze2oLX47kmjEajyNDr52Gw6Cq9uwJvC22HengA9ejwL46PoCYP/4LiedqgVysr1xryjjIp7+N/oBZknx9P6WYG2x7S3EP5U/iCIfgURew1c/0GmHha4Zr7xgoAAAAASUVORK5CYII=\'); background-size: cover; display: block;"\n  ></span>\n  <img\n        class="gatsby-resp-image-image"\n        alt="two"\n        title=""\n        src="/static/afafc095c469f26fa3cc6bd85397c544/7d769/two.png"\n        srcset="/static/afafc095c469f26fa3cc6bd85397c544/5243c/two.png 240w,\n/static/afafc095c469f26fa3cc6bd85397c544/ab158/two.png 480w,\n/static/afafc095c469f26fa3cc6bd85397c544/7d769/two.png 960w,\n/static/afafc095c469f26fa3cc6bd85397c544/87339/two.png 1440w,\n/static/afafc095c469f26fa3cc6bd85397c544/88b03/two.png 1920w,\n/static/afafc095c469f26fa3cc6bd85397c544/44012/two.png 2336w"\n        sizes="(max-width: 960px) 100vw, 960px"\n        style="width:100%;height:100%;margin:0;vertical-align:middle;position:absolute;top:0;left:0;"\n        loading="lazy"\n        decoding="async"\n      />\n    </span>'}}),"\n",a.createElement(t.h1,null,"분석"),"\n",a.createElement(t.h2,null,a.createElement(t.strong,null,"1, 2, 3순위가 무작위로 제각각 바뀌었다")),"\n",a.createElement(t.p,null,"세 개가 완전히 반대로 바뀐 게 아니었다. 심지어 순서가 맞아 떨어지는 애들도 있었다."),"\n",a.createElement(t.p,null,"해당 선택 특강 신청 이전에, 다른 신청을 진행했을 때는 이런 문제가 발생하지 않았기 때문에 완전히 바뀐 것은 아니라고 확신했다."),"\n",a.createElement(t.h2,null,"대체 왜 바뀌었을까…"),"\n",a.createElement(t.p,null,"솔직히 이전에 만들어서 서비스 했던 신청들에서는 같은 문제가 발생하지 않고 잘 나왔기 때문에 이런 문제가 왜 발생했는지 이해가 되지 않았다."),"\n",a.createElement(t.p,null,"내가 눈물의 양치를 하고 눈물의 샤워를 하면서 짐작한 문제 상황은 이거다."),"\n",a.createElement(t.ul,null,"\n",a.createElement(t.li,null,"엑셀 파일로 export 하는 과정에서 섞였다. (라이브러리 탓)"),"\n",a.createElement(t.li,null,"DB에서 쿼리해서 가져올 때  섞여서 가져온다. (DB 탓)"),"\n",a.createElement(t.li,null,"DISTNICT(중복제거) 실행할 때 섞인다. (이건 자바 탓)"),"\n"),"\n",a.createElement(t.p,null,"아무튼 남탓만 엄청 했다. (⇒ 코드 저렇게 짠 내 탓이다)"),"\n",a.createElement(t.h2,null,"코드 보면서 원인 찾기"),"\n",a.createElement(t.p,null,"전교에서 욕을 먹고 있다는 두려움 + 선생님들의(⇒ 심청이 주요 사용자) 신뢰성 떡락 예상 + 곧 볼 국어 시험은 어떡하지…? 이 세 가지 마음이 휘몰아쳤다."),"\n",a.createElement(t.p,null,"나는 국어 시험보다 심청이를 선택했다. 하지만 이상했다."),"\n",a.createElement(t.ul,null,"\n",a.createElement(t.li,null,"에러: 안 남."),"\n",a.createElement(t.li,null,"엑셀 파일로 export 하는 과정에서: 안 섞임.","\n",a.createElement(t.ul,null,"\n",a.createElement(t.li,null,"추출은 프론트엔드 단에서 라이브러리를 사용해서 했기 때문에, 결과 화면만 보면 됐다."),"\n",a.createElement(t.li,null,"결과 화면에서 이미 섞여있었다."),"\n",a.createElement(t.li,null,"이미 섞인 걸 섞인 채로 잘 가져오고 있는 거였다."),"\n"),"\n"),"\n",a.createElement(t.li,null,"DB에서 쿼리해서 가져올 때: 안 섞임.","\n",a.createElement(t.ul,null,"\n",a.createElement(t.li,null,"응답에 ",a.createElement(t.code,null,"order by")," 를 안 넣어줘서 섞이나 했는데, 안 넣어도 id 순서대로 잘 가져오고 있었다."),"\n"),"\n"),"\n",a.createElement(t.li,null,"DISTINCT 실행할 때: 안 섞임.","\n",a.createElement(t.ul,null,"\n",a.createElement(t.li,null,a.createElement(t.code,null,"stream()")," 의 distinct 를 사용했는데 안 섞였다."),"\n"),"\n"),"\n"),"\n",a.createElement(t.p,null,"내가 예상한 건 다 틀렸고, 멘붕이 찾아왔다."),"\n",a.createElement(t.h2,null,"겨우 찾은 원인"),"\n",a.createElement(t.p,null,"원인은 바로 이 코드였다."),"\n",a.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<span\n      class="gatsby-resp-image-wrapper"\n      style="position: relative; display: block; margin-left: auto; margin-right: auto; max-width: 960px; "\n    >\n      <span\n    class="gatsby-resp-image-background-image"\n    style="padding-bottom: 17.5%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAECAYAAACOXx+WAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAtElEQVR42pWPWW7DMAxEff9LFkVgR6tl2bBkLdErkyb9LwFihiDxNJqs81i7orVlXhac9/h1RSmLu2fM7SLYQvAH0VfMnEnnRW9QyxAdtNqlB1V06v3BZhteXwJx6HvAaMe5NwE0VlNIKZOvzL5Womuy6+Lbr4+duJ0cQeaQmFp9oG+JZTaS0vH9pcQrSrl41hiD/9Qr4fMrwSUBapRRooZjKxxREsX97/jF/vDHe/48+t79AJI+NbC3jvdiAAAAAElFTkSuQmCC\'); background-size: cover; display: block;"\n  ></span>\n  <img\n        class="gatsby-resp-image-image"\n        alt="twopointfive"\n        title=""\n        src="/static/7cee12a262d8a337d2cfc6ebf12f279c/7d769/twopointfive.png"\n        srcset="/static/7cee12a262d8a337d2cfc6ebf12f279c/5243c/twopointfive.png 240w,\n/static/7cee12a262d8a337d2cfc6ebf12f279c/ab158/twopointfive.png 480w,\n/static/7cee12a262d8a337d2cfc6ebf12f279c/7d769/twopointfive.png 960w,\n/static/7cee12a262d8a337d2cfc6ebf12f279c/4c7ae/twopointfive.png 1208w"\n        sizes="(max-width: 960px) 100vw, 960px"\n        style="width:100%;height:100%;margin:0;vertical-align:middle;position:absolute;top:0;left:0;"\n        loading="lazy"\n        decoding="async"\n      />\n    </span>'}}),"\n",a.createElement(t.p,null,"groupingBy 메서드가 인자로 넘긴 값을 기준으로 그룹으로 묶어서 Map 형태로 반환하는 역할을 하는데 이 과정에서 값이 섞였다."),"\n",a.createElement(t.h1,null,"해결"),"\n",a.createElement(t.p,null,"어떻게 해결할지도 참 고민이었다."),"\n",a.createElement(t.ul,null,"\n",a.createElement(t.li,null,"querydsl 을 도입해서 group by 쓰기"),"\n",a.createElement(t.li,null,"JPQL native query로 group by 도전하기"),"\n",a.createElement(t.li,null,"id 기준으로 한 번 더 정렬해주기"),"\n"),"\n",a.createElement(t.p,null,"정도를 해결책으로 떠올렸다."),"\n",a.createElement(t.h2,null,"나는 국어 시험을 앞둔 K-고딩"),"\n",a.createElement(t.p,null,"이 사실을 망각하고 제대로 고쳐볼까 하다가, 국어 시험에 시조가 나온다는 사실을 깨달았다."),"\n",a.createElement(t.p,null,"그래서 그냥 id 기준으로 한 번 더 정렬하는 간단한 방법을 택했다."),"\n",a.createElement(t.h2,null,"근데 외않되?…"),"\n",a.createElement(t.p,null,"생각보다 key 값을 기준으로 Map을 정렬해서 values를 빼오는 건 힘들었다."),"\n",a.createElement(t.p,null,"여기서 시간을 많이 날려먹었다. 자바 친구에게 좀 화가 났다."),"\n",a.createElement(t.p,null,"솔직히 코드를 구구절절 길게 짜서 빼오면 금방 되긴 하는데, 이건 내가 싫었다."),"\n",a.createElement(t.p,null,"그렇게 눈물로 바다 하나 만들고 있을 때 이슬 같은 존재를 알게 된다."),"\n",a.createElement(t.h2,null,"TreeMap"),"\n",a.createElement(t.p,null,"환호하자. 이 친구는 자동으로 key 값을 정렬해주는 친구이다."),"\n",a.createElement(t.p,null,"그냥 값을 넣으면 알아서 정렬해준다."),"\n",a.createElement(t.p,null,"귀엽다. 사랑스럽다. 자세히 안 봐도 사랑스럽다."),"\n",a.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<span\n      class="gatsby-resp-image-wrapper"\n      style="position: relative; display: block; margin-left: auto; margin-right: auto; max-width: 960px; "\n    >\n      <span\n    class="gatsby-resp-image-background-image"\n    style="padding-bottom: 16.249999999999996%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAADCAYAAACTWi8uAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAtklEQVR42g2O0U6EMBQF+f/v8lFfNDFqdt017sLS1kKB3t5CYWwmk3k8p5GYKKXgvcfZP6xzOBPwJhJnRZaM5oxLHt0zfvGY4DCjxY4jPgizJuYshLzQyOVMeliktUy/huF6Z7q1SGfRvqfUAR0M33rly194N2feulP1k5f2lafrMx/DCX8M9GppNEaOrbCvhckJj7tlcCNlXTn2AtV924j1gaxamzA28HPr6KxhlEAqylGRrPwDGpbkC7/en+8AAAAASUVORK5CYII=\'); background-size: cover; display: block;"\n  ></span>\n  <img\n        class="gatsby-resp-image-image"\n        alt="three"\n        title=""\n        src="/static/84282ea814b1bd9bc06c01a6d5205906/7d769/three.png"\n        srcset="/static/84282ea814b1bd9bc06c01a6d5205906/5243c/three.png 240w,\n/static/84282ea814b1bd9bc06c01a6d5205906/ab158/three.png 480w,\n/static/84282ea814b1bd9bc06c01a6d5205906/7d769/three.png 960w,\n/static/84282ea814b1bd9bc06c01a6d5205906/87339/three.png 1440w,\n/static/84282ea814b1bd9bc06c01a6d5205906/88b03/three.png 1920w,\n/static/84282ea814b1bd9bc06c01a6d5205906/29524/three.png 2272w"\n        sizes="(max-width: 960px) 100vw, 960px"\n        style="width:100%;height:100%;margin:0;vertical-align:middle;position:absolute;top:0;left:0;"\n        loading="lazy"\n        decoding="async"\n      />\n    </span>'}}),"\n",a.createElement(t.h1,null,"느낀 점과 배운 점과 깨달은 점과…"),"\n",a.createElement(t.ul,null,"\n",a.createElement(t.li,null,"솔직히 ",a.createElement(t.strong,null,"Hotfix"),"라는 말이 왜 있는지 이해를 못했는데, 바로 이런 상황을 위해서 있다는 걸 깨달았다."),"\n",a.createElement(t.li,null,"내 잘못된 코드 떄문에 일정이 꼬이면 어떡하지… 라는 생각 + 불안감에 휩싸여서 긴장되는 3시간을 보냈다."),"\n",a.createElement(t.li,null,"애초에 깔끔한 로직을 짰으면… 같은 후회를 했다."),"\n",a.createElement(t.li,null,"실제로 서비스하는 것에 대한 책임감을 크게 느꼈다."),"\n",a.createElement(t.li,null,"앞으로 짜는 코드에는 책임감을 한 움큼씩 담고 짜야겠다고 다짐했다."),"\n"),"\n",a.createElement(t.h1,null,"비하인드"),"\n",a.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<span\n      class="gatsby-resp-image-wrapper"\n      style="position: relative; display: block; margin-left: auto; margin-right: auto; max-width: 688px; "\n    >\n      <span\n    class="gatsby-resp-image-background-image"\n    style="padding-bottom: 185%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,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\'); background-size: cover; display: block;"\n  ></span>\n  <img\n        class="gatsby-resp-image-image"\n        alt="four"\n        title=""\n        src="/static/7fd90e03ece8b5ecea1233239be7ff0e/d2eea/four.png"\n        srcset="/static/7fd90e03ece8b5ecea1233239be7ff0e/5243c/four.png 240w,\n/static/7fd90e03ece8b5ecea1233239be7ff0e/ab158/four.png 480w,\n/static/7fd90e03ece8b5ecea1233239be7ff0e/d2eea/four.png 688w"\n        sizes="(max-width: 688px) 100vw, 688px"\n        style="width:100%;height:100%;margin:0;vertical-align:middle;position:absolute;top:0;left:0;"\n        loading="lazy"\n        decoding="async"\n      />\n    </span>'}}),"\n",a.createElement(t.blockquote,null,"\n",a.createElement(t.p,null,"😀 참고로 국어 시험은 전교 1등 했다."),"\n"))}var c=function(e){void 0===e&&(e={});const{wrapper:t}=Object.assign({},(0,l.ah)(),e.components);return t?a.createElement(t,e,a.createElement(r,e)):r(e)},A=n(4765);function i(e){return a.createElement(A.Z,e,a.createElement(c,e))}A.Z}}]);
//# sourceMappingURL=component---node-modules-lekoarts-gatsby-theme-minimal-blog-core-src-templates-post-query-tsx-content-file-path-content-posts-simblue-hot-issue-index-mdx-2c0403dafc8f6ecb10da.js.map