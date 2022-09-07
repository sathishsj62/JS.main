///String Methods and Properties//
let a = "hii this sathishkumar";
let b = "vivi,Akanksha,maha, pandu,maha"
let c = "frontend and backend development";
let d = ("vivi");
let e = "Akanksha ,vivi, Akanksha ";



// charAt//
console.log(a.charAt(7));
console.log(b.charAt(8));

// charCodeAt//
console.log(a.charCodeAt(1));
console.log(b.charCodeAt(2));

// Concat//
console.log(d.concat(e));

// length//
console.log(a.length);

// endsWith //
console.log(b.endsWith("maha"));
console.log(b.endsWith("vivi"));

// startsWith //
console.log(a.startsWith("hii"));
console.log(b.startsWith("pandu"));

// includes//
console.log(b.includes("Akanksha"));
console.log(a.includes("call"));

// indexOf//
console.log(a.indexOf("this"));
console.log(b.indexOf("pandu"));

// lastIndexOf//
console.log(c.lastIndexOf("end"));
console.log(e.lastIndexOf("Akanksha"));

// match//
console.log(b.match(/maha/g));
console.log(e.match(/Akanksha/g));

//repeat//
console.log(d.repeat(3)); 

// replace//
console.log(e.replace(/sha/g, "SHA"));
console.log(b.replace(/ha/g,"HA"));

// slice//
console.log(a.slice(7, 13));
console.log(b.slice(5, 13));

// substr indexvalue and counts next value from 1//
console.log(a.substr(7, 14));
console.log(a.substr(-12));

///substring index value and again conitue to count with index value //
console.log(c.substring(5,8));

// search//
console.log(c.search("end"));
console.log(b.search("maha"));

// split//
console.log(a.split(" "));
console.log(d.split(" "));

// toUpperCase
console.log(a.toUpperCase());

// toLowerCase
console.log(a.toLowerCase());

// trim removes spcae from start and end not center//
let k = "     Akanksha Maha      ";
console.log(k.trim());

// trimStart
console.log(k.trimStart());

// trimEnd
console.log(k.trimEnd());

// toString//
console.log(d.toString());

// valuOf //
console.log(d.valueOf());


function randomcolor(){
	var x = Math.floor(Math.random() * 100);
	var y = Math.floor(Math.random() * 150);
    var randomcolor = "rgb(" + x + "," + y + ")";
	
	console.log(randomcolor);
	
	
}

randomcolor();