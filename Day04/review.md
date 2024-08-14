1. 타입 어노베이션
   const data:number = 1
   const data1:CardStyle = {}

2. 인터페이스 vs 타입 알리아스
   타입 알리아스: Type Coffee = {name:string, price:number}
   타입 리터럴: Type MainColor = "red" | "orange" | "pink"
   타입 하이브리드: Type Color = MainColor | SecondaryColor

3. 유니온 & 인터섹션
   유니온: or[|]
   인터섹션: and[&]: Coffee & Ingredient, never[공집합]

4. 타입 매니퓰레이션 & 인덱스 시그니처
   매니퓰레이션: 타입 조작[keyof,as,in...]
   인덱스 시그니처: 키값의 정의
