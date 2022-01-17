const BASE_URL = 'https://thatcopy.pw/catapi/rest/';
const BASE_URL1 = 'https://api.adviceslip.com/advice';

const getCats = async () => {
	try {
		const data = await fetch(BASE_URL);
		const json = await data.json();
		return json.webpurl;

	} catch (e) {
		console.log(e.message);
	}
};

const getConselho = async () => {
	try {
		const data1 = await fetch(BASE_URL1);
		const json1 = await data1.json();
		return json1.slip.advice;

	} catch (e) {
		console.log(e.message);
	}
};

const loadImg = async () => {
	const img = document.getElementsByTagName('img')[0];
	img.src = await getCats();
};

const loadConselho = async () => {
	const h2 = document.getElementsByTagName('h2')[0];
	h2.textContent = await getConselho();
};

loadImg(), loadConselho();

const btn = document.getElementById('change-cat');
btn.addEventListener('click', loadConselho);

const btbutao = document.getElementById('change-cat');
btn.addEventListener('click', loadImg);
