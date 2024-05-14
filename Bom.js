let validAnswer = "pendikom";
let pesan = prompt(
	"Sebelum Mengakses Website ini Tolong Jawab Pertanyaan Berikut! Anda Berasal Dari Program Studi Apa? Jawab Dengan Singkatan (Pendikom)"
).toLowerCase();

while (pesan !== validAnswer) {
	alert(
		"Program Studi Anda Dilarang Mengakses Website Ini!"
	);

	console.warn(pesan);
	pesan = prompt(
		"Sebelum Mengakses Website ini Tolong Jawab Pertanyaan Berikut! Anda Berasal Dari Program Studi Apa?"
	).toLowerCase();
}

alert("Selamat Datang Di Website Saya!");
console.info(pesan);
