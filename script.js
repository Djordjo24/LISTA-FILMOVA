let allTotal=0;

function addToCart(element) {
	let mainEl=element.closest('#film');
	let name=mainEl.querySelector('.name').innerText;
	let price=mainEl.querySelector('.price').innerText;
	let img=mainEl.querySelector('#img');
	price=price.substring(1);
	price=parseInt(price);

	allTotal+=price;

	document.querySelector('.korpa .stavke .cena').innerHTML=`$${allTotal}`;

	element.setAttribute('disabled','true');
	element.innerText='ADDED';

	img.style.filter= 'brightness(0.3)';
}

function removeFromCart(){
	document.querySelector('.korpa .stavke .cena').innerHTML=``;

	let film=document.querySelectorAll('.container #film');
	
	film.forEach(e=>{
		let btn=e.querySelector('.pick');
		console.log(btn);
		btn.removeAttribute('disabled');
		btn.innerText='WATCH';

		let img=e.querySelector('#img'); 
		img.style.filter= 'none';
	});

	allTotal=0;

	
}

function payPage(element){
	window.open('file:///C:/Users/djord/Desktop/LISTA%20FILMOVA/index1.html');
}