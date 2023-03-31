// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

const PropertyData = [
  {
    id: "1",
    title: "Home Living Residence Lily",
    type: "Private Cluster - Lily",
    price: "Rp. 1,750 Million",
    image: "detail1",
    model: "https://my.matterport.com/show/?play=1&share=0&wh=0&m=J3KRVQpd2AT",
    modelCover:
      "https://cdn-2.matterport.com/apifs/models/J3KRVQpd2AT/images/Cg8Jsd9BT9N/Cg8Jsd9BT9N-Living_Room.jpg?t=2-a3c6f05ddcd7eda0e2119c88721c90fda3ce7f72-1680321676-1&k=apifs%2Fmodels%2FJ3KRVQpd2AT%2Fimages%2FCg8Jsd9BT9N%2FCg8Jsd9BT9N-Living_Room.jpg&width=1155&disable=upscale&dpr=2",
    room: "2+1",
    floor: "2",
    lb: "198",
    lt: "201",
  },
  {
    id: "2",
    title: "Home Living Residence Sakura",
    type: "Private Cluster - Sakura",
    price: "Rp. 2,850 Million",
    image: "detail2",
    model: "https://my.matterport.com/show/?play=1&share=0&wh=0&m=6nPxpV6S1rA",
    modelCover:
      "https://cdn-2.matterport.com/apifs/models/6nPxpV6S1rA/images/pw1irqsQbd8/03.22.2022_20.04.40.jpg?t=2-0e3347aa6697c330dadd802b68f73661e1355b25-1680321833-1&k=apifs%2Fmodels%2F6nPxpV6S1rA%2Fimages%2Fpw1irqsQbd8%2F03.22.2022_20.04.40.jpg&width=1155&disable=upscale&dpr=2",
    room: "4+1",
    floor: "2",
    lb: "201",
    lt: "208",
  },
  {
    id: "3",
    title: "Home Living Residence Dandelions",
    type: "Private Cluster - Dandelions",
    price: "Rp. 3,950 Million",
    image: "detail3",
    model: "https://my.matterport.com/show/?play=1&share=0&wh=0&m=bUxiR8pJEah",
    modelCover:
      "https://cdn-2.matterport.com/apifs/models/bUxiR8pJEah/images/wvzFY62iwnc/01.25.2023_10.10.53.jpg?t=2-4a3b2e19feb1ccfcdc39a8b61b28d29690862c7a-1680321771-1&k=apifs%2Fmodels%2FbUxiR8pJEah%2Fimages%2FwvzFY62iwnc%2F01.25.2023_10.10.53.jpg&width=1155&disable=upscale&dpr=2",
    room: "3+1",
    floor: "2",
    lb: "208",
    lt: "220",
  },
];

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  switch (req.method) {
    case "GET":
      const { id } = req.query;

      let queryData;
      if (id) {
        queryData = PropertyData.find((item) => item.id == id);
      } else queryData = PropertyData;

      res.status(200).json({ data: queryData });

    default:
      res.status(404).end();
  }
}
