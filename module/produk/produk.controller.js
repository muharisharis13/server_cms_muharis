const { ProdukModels } = require("./produk.models")

exports.AddProduk = async (req, res) => {
  const { kode_produk, nama, qty, unit, harga_pokok, harga_jual } = req.body
  try {

    const post = new ProdukModels({
      kode_produk: kode_produk,
      nama: nama,
      qty: parseInt(qty),
      unit: unit,
      harga_pokok: parseInt(harga_pokok),
      harga_jual: parseInt(harga_jual)
    })

    const save = await post.save();

    req.status(200).json({
      success: save
    })

  } catch (err) {
    res.status(500).json({
      message: err.message
    })
  }
}