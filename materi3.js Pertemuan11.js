// membuat objek ke dalam sebuah kelas 
class hewan {
    constructor(nama,jenis) {
    this.nama = nama;
    this.jenis = jenis;
}
    tampil(){
        console.log(`${this.nama} adalah hewan ${this.jenis}`);
    }
}


const angsa = new hewan ('angsa','unggas');
angsa.tampil();