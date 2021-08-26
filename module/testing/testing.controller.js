const http_status = require("http-status")

exports.getTesting = (req, res) => {
  try {
    res.status(http_status.OK).json('berhasil dibuat')
  } catch (e) {
    res.status(http_status.BAD_REQUEST).json(e)
  }
}