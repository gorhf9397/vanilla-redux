# Vanilla-Redux

## Store

- ✅ **data**(application 에서 바뀌는 data) 를 넣는곳 **state** 담는다 <br>
  data를 넣을 수 있는 장소를 생성,
- ✅ **store**은 function(함수) 로 생성 되어야 한다 data를 **modify**하는
  **reducer** 나 **modify** 는 처음으로 **data** 를 바꿔준다.<br>
- ✅ 하지만 뭐든지 return하는 것은 **application**에 있는 **data**
  counterModifier 가 “hello” 라고 return 한다면 application의 **data**가 된다.<br>
- ✅ **modify** 가 1을 return 한다면 **application**의 상태는 1이 된다.
  결과적으로 **reducer** 나 **modify** 가 return 하는 것은 **application**의 **data**가 되는것이다.

## Action

- ✅ **Action** : **redux**에서 function을 부를 때 쓰는 두 번째 parameter 혹은 argument으로 **reducer**와 소통하기 위한 방법
- ✅ **Reducer**에게 **Action**을 보내는 방법 : store.dispatch({key: value});

## Subscribe

- ✅ **Subscribe** : **store** 안에 있는 변화 감지
  store.subscribe(func); // store안의 변화를 감지하면 func 실행

## Recap

- ✅ **reducer** : 현재 상태의 **application**과 함께 불려지는 function (+ with action)
  return하는 것은 **application**의 state가 됨
- ✅ **action** : **reducer**와 소통하는 방법으로 **Object**여야 하며 그 key 이름은 항상 type임 (바꿀 수 없음)
- ✅ **dispatch** : **reducer**에게 **action**을 보내는 방법
- ✅ **subscribe** : **store**의 변화를 감지하면 인자값으로 준 함수를 실행
- ✅ **switch**가 자주 쓰임<br>

```JavaScript
switch(action.type){
    case ADD_TODO:
        return smth
    case DELETE_TODO:
        return smth2
    default:
        return smth3
}
```

- ✅ string으로 바로 쓰는 대신에 const variable로 선언해서 사용하기 -> 에러 발견 용이
