// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

const PropertyData = [
  {
    id: "1",
    title: "Home Living Residence Lily",
    type: "Private Cluster - Lily",
    price: "Rp. 1,750 Million",
    image: "/assets/images/Foto.png",
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
    image: "/assets/images/unsplash_4ojhpgKpS68.png",
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
    image: "/assets/images/Front-1.png",
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
