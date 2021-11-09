
//새 창으로 띄우기

//키워드 설정 버튼

	var acc = document.getElementsByClassName("accordion");
	var i;

	for (i = 0; i < acc.length; i++) {
		acc[i].onclick = function(){
			this.classList.toggle("active");
			this.nextElementSibling.classList.toggle("show");
	  }
	}
	
	
	

//키워드 설정 후 표시

	var keywords=new Array();
	var str = document.getElementById("script").innerText;
	var strcol = document.getElementById("changecolor");

	function saveKeyword(){
		
		
		//설정한 키워드 출력
		
		var keyword = document.getElementById("keyword").value;
		keywords.push(keyword); 
		
		for(var a = 0; a <keywords.length; a++){
			document.getElementById('setkeyword').innerHTML=keywords;
		}
		
		for(var b = 0; b <keywords.length; b++){
			if (str.indexOf(keywords[b]) != -1) { //실시간스크립트 들어갈 div읽어오기
				console.log('d'); //잘 작동하나 테스트한다고 넣음
				strcol.style.color = "red"; //키워드 or 키워드가 들어간 문장만 색을 바꾸고 싶은데 방법을 몰갯슴 ~
			//document.getElementById('test').innerHTML="악";

			}
		}

	}


	
	


