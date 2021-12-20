//키워드설정
const keywords=new Array();

 window.addEventListener('click', function(){
		 var str = document.getElementById("set").innerHTML;

		 document.getElementById("send").onclick=setKey;
		 function setKey()  {
		 var keyword = document.getElementById("keyword").value;
		 keywords.push(keyword);

		 for(var a = 0; a <keywords.length; a++){
		 document.getElementById('set').innerHTML=keywords;
		 }


//keyword 서버로 보내기
function asyncTest(){
	let jsonObj = new Object();
	
	for(let i = 0; i < names.length; i++){
	jsonObj.keyword = keywords[i];
	jsonArray.push(jsonObj);

	let url = 'http://localhost:8000/api/keyword';
	fetch(url,{
		method : 'put',
		headers: {
		"Content-Type": "application/json",
		},
		body : JSON.stringify(jsonArray)
	}).then(res=>{
	return res.json();
	})
	.then(json=>{
	console.log(json);
	})
	.catch(err=>{
	console.log(err);
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