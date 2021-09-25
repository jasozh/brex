var Utils = {
	testRect: (r1, r2) => {
		return 
			(Math.abs(r1.x-r2.x) < ((r1.x < r2.x) ? r1.width : r2.width)) ||
			(Math.abs(r1.y-r2.y) < ((r1.y < r2.y) ? r1.height : r2.height))
	}
}