// membuat objek ke dalam sebuah fungsi 
function hewan(nama, jenis) {
    this.nama = nama;
    this.jenis = jenis;

    this.tampil = function(){
        console.log(`${this.nama} adalah hewan ${this.jenis}`);
    };
}

const angsa = new hewan ('angsa','unggas');
angsa.tampil();