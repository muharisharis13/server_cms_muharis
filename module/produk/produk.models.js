const mongoose = require('mongoose');


const post = mongoose.Schema({
  kode_produk: { type: String, unique: true, required: true },
  nama: { type: String, required: true },
  qty: { type: Number, required: true },
  unit: { type: String, required: true },
  harga_pokok: { type: Number, required: true },
  harga_jual: { type: Number, required: true },
  created_at: { type: Date, default: Date.now() },
  updated_at: { type: Date, default: Date.now() },
})


exports.ProdukModels = mongoose.model('produk', post)