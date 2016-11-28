var removeSvg = '<svg enable-background="new 0 0 512 512" id="Layer_1" version="1.1" viewBox="0 0 512 512" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g><path class="svg1" d="M493.8,257.5c0,131.4-106.6,238-238,238s-238-106.6-238-238s106.6-238,238-238S493.8,126.1,493.8,257.5z" fill=" #FF84A2"/></g><g><polygon fill="none" points="310.9,381.1    201.1,381.1 180.6,170.3 331.4,170.3  " stroke="#FFFFFF" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="16"/><line fill="none" stroke="#FFFFFF" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="16" x1="180.6" x2="160" y1="170.3" y2="170.3"/><line fill="none" stroke="#FFFFFF" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="16" x1="331.4" x2="352" y1="170.3" y2="170.3"/><rect fill="none" height="27.4" stroke="#FFFFFF" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="16" width="51.4" x="230.1" y="142.9"/></g></svg>' ;
        
 document.getElementById("add").addEventListener('click', function(){
 	var input = document.getElementById("input").value ;
 	if (input){
 	addItem(input);
 	document.getElementById("input").value = "" ;
 	}
 });
 
 function removeItem(){
 	var item1 = this.parentNode ;
 	var parent = item1.parentNode ;
 	
 	parent.removeChild(item1);
 }
 
 function addItem(text){
    var list = document.getElementById("todo");
 	var item = document.createElement('li') ;
 	item.innerText = text ;
 	
 	var button = document.createElement('button') ;
 	button.classList.add('btn2') ;
 	button.innerHTML = removeSvg ;
 	button.addEventListener('click' , removeItem) ;
 	
 	item.appendChild(button) ;
 	list.appendChild(item);
 }