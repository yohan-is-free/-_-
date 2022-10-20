// 2. 근무이력의 추가 버튼 요소
console.log($(".two-content").eq(0));

// 2. 근무 이력의 추가 버튼 클릭 이벤트
const addTwoElem = $(".two-content").eq(0);
addTwoElem.on("click", function () {
  console.log("추가 버튼 클릭 이벤트 발생");

  // tr 부분 생성하기(삭제 버튼으로!)
  var addTwoContent = "<tr>";
  addTwoContent += '<td><input class="form-control" type="text" name=""></td>';
  addTwoContent += '<td><input class="form-control" type="date"></td>';
  addTwoContent += '<td><input class="form-control" type="date" name=""></td>';
  addTwoContent +=
    '<td><select class="form-control" id="HisSportsNo" name="SportsNo"><option value="ClubNameNull">종목을 선택해주세요.</option><option value="CN0001">검도</option><option value="CN0002">근대3종</option><option value="CN0003">근대5종</option><option value="CN0004">기계체조</option><option value="CN0005">농구</option><option value="CN0006">도약</option><option value="CN0007">럭비</option><option value="CN0008">레슬링</option><option value="CN0009">롤러</option><option value="CN0000">미등록사용자</option><option value="CN0043">바둑</option></td>';
  addTwoContent +=
    '<td><div class="delete-btn"><button type="button" class="btn btn-secondary btn-delete" style="border-radius: 0;" onclick="deleteClicked(this)">삭제</button></div></td></tr>';

  // 요소 추가 -> tbody 내부에!
  const tbodyContent1 = $("#LeaderWorkingExperience");
  tbodyContent1.append(addTwoContent);
});
