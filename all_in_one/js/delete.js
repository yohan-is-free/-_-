// 2,3 공통으로 삭제버튼 기능 구현하기
function deleteClicked(tr) {
  console.log("삭제 버튼 클릭 이벤트 발생");

  // 클릭된 요소를 받아와서 해당 행을 삭제시키기
  var deleteContentRow = $(tr).parent().parent().parent();
  console.log(deleteContentRow);
  deleteContentRow.remove();
}
