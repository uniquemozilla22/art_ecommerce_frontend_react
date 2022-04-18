import axios from "axios";

const ConvertPrice = async () => {
  try {
    const { data } = await new Promise((resolve) => resolve(request("usd")));
    console.log(data.json());
  } catch (error) {
    console.log("err", error);
  }
};

const request = async (from) =>
  await fetch(
    `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${from}.json`
  );

ConvertPrice();
