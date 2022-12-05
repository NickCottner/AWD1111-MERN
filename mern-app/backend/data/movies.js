//	Goes in src folder

const Movies = [
	{
		title:			"The Shawshank Redemption",
		yearmade:		1994,
		rating:			"R",
		runningtime: 	142,
		category: 		"Drama",
		description:	"Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
		imageurl:		"https://m.media-amazon.com/images/M/MV5BMDFkYTc0MGEtZmNhMC00ZDIzLWFmNTEtODM1ZmRlYWMwMWFmXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_UY209_CR0,0,140,209_AL_.jpg",
		price:			19.99,
		countinstock:	11,
		numstars:		9.0,
		numberreviews:	126
	},
	{
		title:			"The Godfather",
		yearmade:		1972,
		rating:			"R",
		runningtime:	175,
		category:		"Crime",
		description:	"The aging patriarch of an organized crime dynasty in postwar New York City transfers control of his clandestine empire to his reluctant youngest son.",
		imageurl:		"https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UY209_CR3,0,140,209_AL_.jpg",
		price:			18.99,
		countinstock:	31,
		numstars:		9.5,
		numberreviews:	187
	},
	{
		title:			"Citizen Kane",
		yearmade:		1941,
		rating:			"PG",
		runningtime:	119,
		category:		"Drama",
		description:	"Following the death of publishing tycoon Charles Foster Kane, reporters scramble to uncover the meaning of his final utterance: 'Rosebud.'",
		imageurl:		"https://m.media-amazon.com/images/M/MV5BYjBiOTYxZWItMzdiZi00NjlkLWIzZTYtYmFhZjhiMTljOTdkXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UX140_CR0,0,140,209_AL_.jpg",
		price:			19.99,
		countinstock:	21,
		numstars:		8.5,
		numberreviews:	212
	},
	{
		title:			"12 Angry Men",
		yearmade:		1957,
		rating:			"NR",
		runningtime:	96,
		category:		"Crime",
		description:	"The jury in a New York City murder trial is frustrated by a single member whose skeptical caution forces them to more carefully consider the evidence before jumping to a hasty verdict.",
		imageurl:		"https://m.media-amazon.com/images/M/MV5BMWU4N2FjNzYtNTVkNC00NzQ0LTg0MjAtYTJlMjFhNGUxZDFmXkEyXkFqcGdeQXVyNjc1NTYyMjg@._V1_UX140_CR0,0,140,209_AL_.jpg",
		price:			19.99,
		countinstock:	20,
		numstars:		9.0,
		numberreviews:	111
	},
	{
		title:			"Schindler's List",
		yearmade:		1993,
		rating:			"R",
		runningtime:	195,
		category:		"Biography",
		description:	"In German-occupied Poland during World War II, industrialist Oskar Schindler gradually becomes concerned for his Jewish workforce after witnessing their persecution by the Nazis.",
		imageurl:		"https://m.media-amazon.com/images/M/MV5BNDE4OTMxMTctNmRhYy00NWE2LTg3YzItYTk3M2UwOTU5Njg4XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_UX140_CR0,0,140,209_AL_.jpg",
		price:			17.99,
		countinstock:	9,
		numstars:		9.0,
		numberreviews:	251
	},
	{
		title:			"The Good, the Bad and the Ugly",
		yearmade:		1966,
		rating:			"R",
		runningtime:	178,
		category:		"Western",
		description:	"A bounty hunting scam joins two men in an uneasy alliance against a third in a race to find a fortune in gold buried in a remote cemetery.",
		imageurl:		"https://m.media-amazon.com/images/M/MV5BNjJlYmNkZGItM2NhYy00MjlmLTk5NmQtNjg1NmM2ODU4OTMwXkEyXkFqcGdeQXVyMjUzOTY1NTc@._V1_UX140_CR0,0,140,209_AL_.jpg",
		price:			18.99,
		countinstock:	10,
		numstars:		8.5,
		numberreviews:	182
	},
	{
		title:			"Star Wars: Episode V - The Empire Strikes Back",
		yearmade:		1980,
		rating:			"PG",
		runningtime:	124,
		category:		"Action",
		description:	"After the Rebels are brutally overpowered by the Empire on the ice planet Hoth, Luke Skywalker begins Jedi training with Yoda, while his friends are pursued across the galaxy by Darth Vader and bounty hunter Boba Fett.",
		imageurl:		"https://m.media-amazon.com/images/M/MV5BYmU1NDRjNDgtMzhiMi00NjZmLTg5NGItZDNiZjU5NTU4OTE0XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UX140_CR0,0,140,209_AL_.jpg",
		price:			18.99,
		countinstock:	22,
		numstars:		8.5,
		numberreviews:	160
	},
	{
		title:			"The Lord of the Rings: The Return of the King",
		yearmade:		2003,
		rating:			"PG-13",
		runningtime:	201,
		category:		"Action",
		description:	"Gandalf and Aragorn lead the World of Men against Sauron's army to draw his gaze from Frodo and Sam as they approach Mount Doom with the One Ring.",
		imageurl:		"https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UY209_CR0,0,140,209_AL_.jpg",
		price:			14.99,
		countinstock:	25,
		numstars:		9.0,
		numberreviews:	198
	},
	{
		title:			"The Dark Knight",
		yearmade:		2008,
		rating:			"PG-13",
		runningtime:	152,
		category:		"Action",
		description:	"When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.",
		imageurl:		"https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_UY209_CR0,0,140,209_AL_.jpg",
		price:			19.99,
		countinstock:	15,
		numstars:		9.0,
		numberreviews:	411
	},
	{
		title:			"The Godfather Part II",
		yearmade:		1974,
		rating:			"R",
		runningtime:	202,
		category:		"Crime",
		description:	"The early life and career of Vito Corleone in 1920s New York City is portrayed, while his son, Michael, expands and tightens his grip on the family crime syndicate.",
		imageurl:		"https://m.media-amazon.com/images/M/MV5BMWMwMGQzZTItY2JlNC00OWZiLWIyMDctNDk2ZDQ2YjRjMWQ0XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UY209_CR3,0,140,209_AL_.jpg",
		price:			20.99,
		countinstock:	12,
		numstars:		9.0,
		numberreviews:	365
	}
]

export default Movies