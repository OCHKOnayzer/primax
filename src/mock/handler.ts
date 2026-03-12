import { http, HttpResponse } from "msw";

export const handler = [
  http.get("/api/air-conditioners", () => {
    return HttpResponse.json([
      {
        id: 1,
        name: "Daikin FTXB35C",
        price: 45000,
        power: "3.5 kW",
      },
      {
        id: 2,
        name: "Mitsubishi MSZ-HR25",
        price: 52000,
        power: "2.5 kW",
      },
    ]);
  }),
];
