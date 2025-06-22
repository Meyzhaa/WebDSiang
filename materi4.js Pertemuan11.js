class mahasiswa{
    constructor(nama, nilai) {
        this.nama = nama;
        this.nilai = nilai;
    }
}
let arrayMhs = new Array();
let Jasswnt =  new mahasiswa('jasswant', 'C');
arrayMhs.push(Jasswnt);
let Mey =  new mahasiswa('Meyzha', 'A');
arrayMhs.push(Mey);
let Nitta =  new mahasiswa('Nitta', 'A');
arrayMhs.push(Nitta);
let Debi =  new mahasiswa('Debi', 'A');
arrayMhs.push(Debi);

console.log(arrayMhs);