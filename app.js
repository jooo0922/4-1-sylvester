"use strict";

function testSylvesterJsLibrary() {
  // 벡터 연산에 사용할 두 개의 벡터 u, v 생성
  const u = Vector.create([1, 2, 3]);
  const v = Vector.create([4, 5, 6]);

  // 두 벡터 u, v의 합
  const s = u.add(v);
  console.log("벡터의 합: ", s.inspect()); // 벡터(또는 행렬).inspect()는 해당 벡터(또는 행렬)의 값을 리턴해 줌.

  // 두 벡터 u, v의 내적(스칼라 곱)
  const d = u.dot(v);
  console.log("벡터의 내적: ", d); // 참고로 벡터의 내적은 결과값이 상수이므로, 당연히 inspect()로 결과값을 리턴받을 수 없겠지

  // 두 벡터 u, v의 외적
  const c = u.cross(v);
  console.log("벡터의 외적: ", c.inspect());

  // 행렬 연산에 사용할 두 개의 행렬 M, N 생성
  // Sylvester 에서는 다른 두 라이브러리와 다르게 중첩 배열로 행렬을 나타냄. 안쪽의 2차원 배열이 각각의 행을 의미함.
  // -> 따라서 각 2차원 배열들은 길이가 똑같아야 함. 열의 개수를 맞춰줘야 하니까!
  const M = Matrix.create([
    [2, -1], // 첫 번째 행
    [-2, 1], // 두 번째 행
    [-1, 2], // 세 번째 행
  ]); // 3 * 2 행렬 생성
  const N = Matrix.create([
    [4, -3], // 첫 번째 행
    [3, 5], // 두 번째 행
  ]); // 2 * 2 행렬 생성

  // 두 행렬 M, N의 곱셈
  const MN = M.multiply(N); // 이 곱셈이 가능하려면, 앞의 행렬 M의 열 개수와 인자로 전달되는 행렬 N의 행 개수가 동일해야 함.
  console.log(`행렬의 곱셈:\n${MN.inspect()}`); // 결과값은 3 * 3 행렬

  // 독립 행렬 생성
  const I = Matrix.I(4); // 인자값으로 전달해주는 숫자가 독립 행렬(단위 행렬)의 크기를 결정함.
  console.log(`독립 행렬 생성:\n${I.inspect()}`);
}

/**
 * 독립 행렬 개념이 좀 어렵긴 한데,
 * 단위 행렬이 독립 행렬 중 하나에 포함된다고 보면 됨.
 *
 * 그래서 Matrix.I(n) 로 독립 행렬 리턴값을 받으면,
 * 단위 행렬과 똑같이 생긴 n * n 정방 행렬을 리턴받음.
 *
 * 이 때, 인자값으로 전달해주는 n은 독립 행렬(단위 행렬)의 크기를 결정해 줌.
 */
