module.exports = {
	port:4050,
	routes:  [
		{
			path:"accounts",
			port:"4051"
		},
		{
			path:"feeds",
			port:"4052"
		},
		{
			path:"connections",
			port:"4053"
		},
		{
			path:"articles",
			port:"4054"
		}
	]

}