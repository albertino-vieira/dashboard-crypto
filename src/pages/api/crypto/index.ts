import { type NextApiRequest, type NextApiResponse } from "next";

export default async function hanlder(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "GET") {
    const response: unknown = await fetch(
      "https://rest.coinapi.io/v1/assets/BTC",
      {
        headers: {
          "X-CoinAPI-Key": process.env.COIN_API_KEY || "",
        },
      }
    ).then((response) => response.json());

    res.status(200).json(response);
  }
}
