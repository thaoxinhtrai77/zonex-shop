const initialState = [
	{
		id: 1,
		name: "Nordic Half-zip Pullover",
		image:
			"https://zonex.famithemes.com/wp-content/uploads/2019/11/AD178_KA7663.jpg",
		price: 500,
		inventory: 10,
	},
	{
		id: 2,
		name: "Band-collar Popover Tunic",
		image:
			"https://zonex.famithemes.com/wp-content/uploads/2019/11/L1848_WQ1476_d2-768x969.jpg",
		price: 800,
		inventory: 10,
	},
	{
		id: 3,
		name: "Chambray Shirt In Vintage Indigo",
		image:
			"https://zonex.famithemes.com/wp-content/uploads/2019/11/G1394_DM1554-768x969.jpg",
		price: 1500,
		inventory: 10,
	},
	{
		id: 4,
		name: "Balloon-sleeve Turtleneck Sweater",
		image:
			"https://zonex.famithemes.com/wp-content/uploads/2019/11/J6373_YL5461_m-768x969.jpg",
		price: 900,
		inventory: 10,
	},
	{
		id: 5,
		name: "Thelma Penny Loafers",
		image:
			"https://zonex.famithemes.com/wp-content/uploads/2019/11/L1310_EC5461-768x969.jpg",
		price: 200,
		inventory: 10,
	},
	{
		id: 6,
		name: "Cableknit Shawl-collar Cardigan",
		image:
			"https://zonex.famithemes.com/wp-content/uploads/2019/11/AD401_SU2811_m-768x969.jpg",
		price: 300,
		inventory: 10,
	},
	{
		id: 7,
		name: "Tailored Indigo Jumpsuit",
		image:
			"https://zonex.famithemes.com/wp-content/uploads/2019/11/M0479_DM3205_m-768x969.jpg",
		price: 50000,
		inventory: 10,
	},
	{
		id: 8,
		name: "A-line Midi Skirt In Leather",
		image:
			"https://zonex.famithemes.com/wp-content/uploads/2019/11/F4964_BL8133_m-768x969.jpg",
		price: 6000,
		inventory: 10,
	},
	{
		id: 9,
		name: "Bikini Top In Suckered Rainbow Stripe",
		image:
			"https://zonex.famithemes.com/wp-content/uploads/2019/11/L6853_KA7868_m-768x969.jpg",
		price: 3500,
		inventory: 10,
	},
	{
		id: 10,
		name: "Triple Stone Drop Earrings",
		image:
			"https://zonex.famithemes.com/wp-content/uploads/2019/11/AD569_PK5353-768x969.jpg",
		price: 1500,
		inventory: 10,
	},
];
const productsReducers = (state = initialState, action) => {
	switch (action.type) {
		case "ADD_PRODUCT_TO_CART": {
			return state;
		}
		default:
			return state;
	}
};
export default productsReducers;
