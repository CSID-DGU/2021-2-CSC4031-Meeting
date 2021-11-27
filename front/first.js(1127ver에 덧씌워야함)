	var keywords=new Array();

	window.addEventListener('click', function(){
		var str = document.getElementById("set").innerHTML;
		
		document.getElementById("send").onclick=setKey;
		function setKey()  {
				var keyword = document.getElementById("keyword").value;
				keywords.push(keyword); 
				
				for(var a = 0; a <keywords.length; a++){
				document.getElementById('set').innerHTML=keywords;
				}


		}
	

	});





//다음페이지로 넘어가기
	window.addEventListener('click', function() {
		
		
		document.getElementById("nextpage").onclick=nextPage;
		function nextPage()  {
		var link='./script.html';
		window.open(link);
		}
		
		
	});

