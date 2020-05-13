# Step 2 


### React Component ref [ref](https://medium.com/little-big-programming/react%EC%9D%98-%EA%B8%B0%EB%B3%B8-%EC%BB%B4%ED%8F%AC%EB%84%8C%ED%8A%B8%EB%A5%BC-%EC%95%8C%EC%95%84%EB%B3%B4%EC%9E%90-92c923011818)



#### Component에 대한 이해

- 웹 페이지를 살펴보면 비슷한 단위의 섹션이 반복된다. 반복되는 패턴의 View(섹션) 을 해결하고자 Component를 통해 하나의 컴포넌트로 반복 사용을 목적으로 한다.

  
#### Component의 라이프 사이클

- 웹 페이지는 데이터를 서버로부터 받아온다. 그렇다면 Component 생성시 서버에 요청하는 API 호출을 Component Life Cycle에서 이루어져야 한다. 
이때 라이프 사이클을 이해해야 웹 페이지의 속도가 빨라진다.

- Component는 Mounting, Updating, Unmounting 이 있다. 이때 하위 Life Cycle은 Google을 애용하길 바란다. ㅎ
(React 입문자가 공부하기엔 too much가 아닐까 싶다.)

#### props 와 state

- Component에서 데이터는 props와 state로 분리된다. props는 value조작이 불가능하고 state는 가능하다.

- Component는 state 값을 변경하기 위한 setState() 함수형 API를 제공한다. 하지만 사람들은 Redux나 MobX를 사용한다고 한다.
React가 재사용성을 높이기 위해 나왔듯이 Redux나 MobX도 먼가 불편하기 때문에 나왔을 거라 생각한다.
(나중에 알아보자 이것도 이른 감이 있는 것 같다.)

- Component는  상태값 변경을 비동기적으로 한다. ( 속도가 중요하니깐 )