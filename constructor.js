

let episode = function(episodeNum, episodeDate, episodeLocation) {
	this.Num = episodeNum,
	this.eDate = episodeDate,
	this.Location = episodeLocation
}

let vlog32 = new episode("32", "2017-10-11", "Urbana");

console.log(vlog32);