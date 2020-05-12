# Day 1 


React Project Setting [ref](https://velog.io/@jeff0720/React-%EA%B0%9C%EB%B0%9C-%ED%99%98%EA%B2%BD%EC%9D%84-%EA%B5%AC%EC%B6%95%ED%95%98%EB%A9%B4%EC%84%9C-%EB%B0%B0%EC%9A%B0%EB%8A%94-Webpack-%EA%B8%B0%EC%B4%88)

1. 빌드 - 리액트 프로젝트 구조를 이해한다.

2. 개발환경 서버 - 코드 디버깅시 불편사항을 해결한다.


## 필요 개념 

1. 모듈 번들러(Webpack OR Parcel)

   모듈 번들러란 여러개의 나누어져 있는 파일들을 하나의 파일로 만들어주는 라이브러리를 말합니다.
  
    왜 모듈 번들러가 나왔을까?  
    
    1) 서버와 여러 자바 스크립트 파일을 주고 받기으면 비효율적
    2) 나눠어져 있는 자바스크립트 경우 변수들의 스코프를 고려해야
    
2. 자바스크립트 트랜스파일러(Babel)

    javascript는 클라이언트에 웹 브라우저를 통해 실행된다. 이때 브라우저들 마다 javascript의 실행가능 버전이 다르다.
    Babel은 ES6 버전의 코드를 ES5로 변환 해준다. 
    
      
## 프로젝트 생성 스크립트

1. nodejs 프로젝트 설정

    ``` yarn init -y ```
    
2. webpack, babel 설치

   ``` yarn add -D @babel/core @babel/preset-env @babel/preset-react babel-loader clean-webpack-plugin css-loader html-loader html-webpack-plugin mini-css-extract-plugin node-sass react react-dom sass-loader style-loader webpack webpack-cli webpack-dev-server ```
   
3. webpack.config.js, package.json 파일 작성하기 ( 파일의 주석을 확인하세요 )

   - webpack.config.js 파일은 웹팩의 빌드 설정을 하는 스크립트
   - package.json파일에 nodejs로 빌드시 webpack을 사용 명
    
 
 
 ## 빌드 테스트
 
 1. html 빌드 
 
    /day1/helloWorld.js 자바스크립트를 /public/index.html 파일과 함께 빌드 합니다. 
    * /public/index.html 파일엔 javascript 호출이 없지만 /build/index.html 에서는 bundle.js 파일을 호출함
    
 2. 리액트 빌드
    
    /day1/index.js 파일과 /public/index.html을 번들링 한다. 
    * index.js에서 Root.js 파일을 임포트 해서 div 태그를 생성한다.
    
 3. 리액트 + css, scss 빌드
 
    css 파일을 생성하고 js 파일에서 import 한다 이때 webpack에서 css 파일을 읽기 위한 설정을 webpack.config.js 파일에 작성한다. 
    
    


## 최종 리액트 + css 결과물

[logo]: (/result/react.png) "Logo Title Text 2"


## 개발환경 설정

webpack.config.js 파일에 개발환경 서버에 대한 
- 루트 폴더
- 엔트리 파일
- 포트 

설정한다. 다양한 설정사항은 구글링;; ㅎㅎ 