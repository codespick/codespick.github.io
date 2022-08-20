// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  // if (req.query.q) {
  res.status(200).send(req.query.q);
  // }
}
