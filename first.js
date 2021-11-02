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
	var strcol = document.getElementById("script");

	function saveKeyword(){
		
		
		var keyword = document.getElementById("keyword").value;
		keywords.push(keyword);
		
		for(var a = 0; a <keywords.length; a++){
			document.getElementById('setkeyword').innerHTML=keywords;
		}
		
		for(var b = 0; b <keywords.length; b++){
			if (str.indexOf(keywords[b]) != -1) {
				console.log('d');
				strcol.style.color = "red";
			//document.getElementById('test').innerHTML="악";

			}
		}

	}


	
	


