class PriceService {
  constructor(Server) {
    this.Server = Server;
    this.API = this.Server.API;
  }

  async check(data) {
    let bahan = 0;
    if (data.bahan === "B-Flute") {
      bahan = 5500;
    } else if (data.bahan === "BC-Flute") {
      bahan = 9700;
    } else if (data.bahan === "E-Flute") {
      bahan = 6200;
    }

    const a = (data.panjang + data.lebar) * 2 + 8;
    const b = data.lebar + data.tinggi + 4;
    const hasil = (a * b * bahan) / 10000;

    return hasil;
  }
}

export default PriceService;
