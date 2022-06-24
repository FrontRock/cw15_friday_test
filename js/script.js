const PRODUCTS_URL = "https://api.imgflip.com/get_memes";

async function getMemes() {
	try {
		const res = await fetch(`${PRODUCTS_URL}`);
		const data = await res.json();
		return data;
	} catch (e) {
		console.warn(e);
	}
}

async function fillProducts() {
	const productsWrapper = document.getElementById("products-wrapper");
	const data = await getMemes();
	console.log(data);
	const memes = data.data.memes;
	console.log(memes);
	memes.forEach((meme) => {
		const productContainer = document.createElement("div");
		productContainer.classList.add("product");
		productContainer.innerHTML = `<div style="width:${meme.width}px; height:${meme.height}px">
            <img src="${meme.url}"/>
            </div>
        <p>${meme.name}</p>`;
		productsWrapper.append(productContainer);
	});
}

fillProducts();
