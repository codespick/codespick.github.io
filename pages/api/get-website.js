// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import * as fs from "fs";

export default function getWebsite(req, res) {
  fs.readFile(
    `website-search-page/${req.query.q?.toLowerCase()}.json`,
    "utf-8",
    (err, data) => {
      if (err) {
        res
          .status(404)
          .json({ error: `The search ${req.query.q} could not be found` });
      } else {
        res.status(200).send(JSON.parse(data));
      }
      // console.log(JSON.parse(data))
    }
  );
}
