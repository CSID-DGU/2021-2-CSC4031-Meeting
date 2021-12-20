
//window.onload = function(){

 //   temp = location.href.split("?");
 //   data=temp[1].split("/");
 //   chatChannelId = data[0];
 //   chatChannelName = data[1];
 //   videoChatName = data[2];
 //   document.writｅ(chatChannelId + " " + chatChannelName + " " + videoChatName);   //페이지에 전달받은 값 띄워서 확인하기 


//	function saveKeyword(){	


//}



   const scriptstr = "그래서 오늘 특강에 맞춰서 어 정리 할 것들을 좀 정리하면서 진행을 해 볼게요 그리고 우리가 일제시대 떄 TIME 그 항일 무장투쟁 사에서 여러분들이 어 일단 카테고리로 좀 구분을 해야 될게 있어요 두개의 카테고리로 구분할 해야 되는데 하나는 만주 지역에서 벌어진 항일 무장 독립 투쟁 사요 TIME 제가 어디라고 했죠 지금 만주 이 만주 지역에서 펼쳐진 항일 무장 독립 투쟁을 하나의 카테고리다 놓고 공부를 하시고 TIME 그 다음에 여기에 끝나면 중국 관내에서 진행되는 항일 무장 독립 투쟁 사가 있어요 중국 관내 여기서 중국 관내 라고 하는 것은 나중에 TIME 얘기 하겠지만 만리장성 인함이요 중국 중국 본토 라고 하셔도 되는데 이제 거기서 진행된 항일 무장 독립 투쟁 사가 있어요 TIME 이 카테고리를 하나로 놓고 또 공부하시면 됩니다 어떤게 더 어려 없느냐 어 중국 관내 쪽이 훨씬 어려워요. 음 중국 관재 쪽이"
   const arr = scriptstr.split("TIME"); //. 을 기준으로 한문장씩 갈림
   //줄바꾸기기준으로 하려면 "\n "입력하면 됨
   let tagArea = document.getElementById('script'); //p태그 생성될 div





   //자막 받아와서 출력





window.onload = function(){
	  document.getElementById("start").onclick=realtimescript;
	  
      function realtimescript(){
         console.log(1);
         intervalid();
         setTimeout(() => {
            clearInterval(intervalid());      
         }, 52501);
         
      }

      i=1;
      function intervalid(){
          setInterval(() => {
            console.log(2);
            textout(i,arr[i]);
            i=i+1;         
         }, 10500);
      }
      
      function textout(l,arr){
         console.log(3);
         let new_pTag = document.createElement('p'); //p태그 생성
         new_pTag.setAttribute('id', 'changecolor'); 
         new_pTag.innerHTML = arr; //p태그 내용입력
         tagArea.appendChild(new_pTag);
		 
		 
		$("p:contains('무장투쟁')").css({color:"red"});
      }
	  
	}




//다음페이지로 넘어가기
	window.addEventListener('click', function() {
		
		
		document.getElementById("nextpage").onclick=nextPage;
		function nextPage()  {
		var link='./savepage.html';
		window.open(link);
		}
		
		
	});