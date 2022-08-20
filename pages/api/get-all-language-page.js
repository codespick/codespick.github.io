// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import * as fs from "fs";
export default async function getAllCppPage(req, res) {
  let data = await fs.promises.readdir("pagecontents");
  let myfile;
  let allBlogContents = [];

  for (let index = 0; index < data.length; index++) {
    const items = data[index];
    let item = items.split(".").slice(0, 4);
    if (req.query.slug === item[0]) {
      // myfile = await fs.promises.readFile(`pagecontents/${item[0]}.json`);
      myfile = await fs.promises.readFile(
        `pagecontents/${req.query.slug}.json`
      );
      // myfile = await fs.promises.readFile(`pagecontents/${req.query.slug}.json`);
      allBlogContents.push(JSON.parse(myfile));
    }
  }
  res.status(200).json(allBlogContents);

  // fs.readFile(`pagecontents/${req.query.slug}.json`, "utf-8", (err, data) => {
  //   if (err) {
  //     res.status(500).json({ error: "Internal server error" });
  //   }
  //   // console.log(JSON.parse(data))
  //   res.status(200).send(JSON.parse(data));
  // });
}
