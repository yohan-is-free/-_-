// 2. 근무이력의 추가 버튼 요소
console.log($(".two-content").eq(1));

// 2. 근무 이력의 추가 버튼 클릭 이벤트
const addTwoElem2 = $(".two-content").eq(1);
addTwoElem2.on("click", function () {
  console.log("추가 버튼 클릭 이벤트 발생");

  // tr 부분 생성하기(삭제 버튼으로!)
  var addTwoContent = "<tr>";
  addTwoContent +=
    '<td><select class="form-control" type="text""><option value="Null">선택하세요.</option><option value="1급 전문스포츠지도사">1급 전문스포츠지도사</option><option value="2급 전문스포츠지도사">2급 전문스포츠지도사</option></td>';
  addTwoContent += '<td><input class="form-control" type="text"></td>';
  addTwoContent += '<td><input class="form-control" type="date" name=""></td>';
  addTwoContent +=
    '<td><select class="form-control" id="HisSportsNo" name="SportsNo"><option value="ClubNameNull">선택하세요.</option><option value="CN0001">문화체육관광부장관</option></td>';

  addTwoContent +=
    '<td><div class="delete-btn"><button type="button" class="btn btn-secondary btn-delete" style="border-radius: 0;" onclick="deleteClicked(this)">삭제</button></div></td></tr>';

  // 요소 추가 -> tbody 내부에!
  const tbodyContent2 = $("#LeaderCertificate");
  tbodyContent2.append(addTwoContent);
});
