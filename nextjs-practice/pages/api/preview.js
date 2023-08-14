export default function handler(req, res) {
  res.setPreviewData({
    user: "Shuvo",
  });
  res.redirect(req.query.redirect);
}

// http://localhost:3000/api/preview?redirect=/preview
// hit korle preview page a chole jabe but ami eta valo kore bujhini
