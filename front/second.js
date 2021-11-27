
$("#btnscr").on("click", function(){

    $("#scrp").show();
		const pTag = document.getElementById('scrp');
		let text='';
		pTag.innerHTML.split('\n').forEach((v)=>{
			text += v+`<br>`;
		});

		pTag.innerHTML = text;
	
	
		$("span:contains('정리')").css({color:"red"});
		

 
//			const config = {
//			method: "get"
//			};
		
//			fetch('http://localhost:8000/api/fullscript', config)
//				.then(response => response.json())
//				.then(data => {
				//.then(data => console.log(data))로 JSON형태로 변환된 내용확인가능 확인 후 다시 주석처리하면 됨
				//const id = document.createElement("div"); 
//				const scripttext = document.createElement("div"); 
				
//				scripttext.textContent = data.full_script; //data. JSON형태에서의 스크립트데이터가 들어가는 key값(몰라서 scripttext로 넣어둠)
				//console.log(scripttext);
//				const scrInfo = document.getElementById("lecturescr");
//				scrInfo.appendChild(scripttext);
				
//				})
//				.catch(error => console.log(error));

	});


        $("#btnPrintleft").live("click", function () {
            var divContents = $("#lecturescr").html();
            var printWindow = window.open('', '', 'height=500,width=800');
            printWindow.document.write('<html><head><title>DIV Contents</title>');
            printWindow.document.write('</head><body >');
            printWindow.document.write(divContents);
            printWindow.document.write('</body></html>');
            printWindow.document.close();
            printWindow.print();
        });


        $("#btnPrintright").live("click", function () {
            var divContents = $("#lecturesum").html();
            var printWindow = window.open('', '', 'height=500,width=800');
            printWindow.document.write('<html><head><title>DIV Contents</title>');
            printWindow.document.write('</head><body >');
            printWindow.document.write(divContents);
            printWindow.document.write('</body></html>');
            printWindow.document.close();
            printWindow.print();
        });
		
		
//요약 불러오기 버튼 누르면 실행되는 함수
$("#btnsum").on("click", function(){
	//var sumdata = $(".lecturesum").html(); //요약들어갈 div

    $("#sump").show();
		//요청보내기
			const config = {
			method: "get"
			};
		
			fetch('http://localhost:8000/summary', config)
				.then(response => response.json())
				.then(data => {
				//.then(data => console.log(data))로 JSON형태로 변환된 내용확인가능 확인 후 다시 주석처리하면 됨
				//const id = document.createElement("div"); 
				const summarytext = document.createElement("div"); 
				const sumInfo = document.getElementById("lecturesum");
				const arr = Object.values(data); //response값 value값만 배열로 저장
				// {문장1, 문장2, 문장3, 문장1, 문장2, ...}
				
				var b = 0;
				for(var a=0; a<arr.length; a++){
					var output = '';
                    output += '<p="' + arr[a] + '">';
                    output += '</p>';
					
					b=b+1;
					if(b%3==0){
						output += '<br><br>';
					};
					document.sumInfo.innerHTML += output;
				};

				//summarytext.textContent = data.a;

				});

				

		});
		

		
		