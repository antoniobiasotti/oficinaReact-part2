import { NextResponse } from "next/server";
import data from "./../../../../data.json";

export async function GET() {
  try {
    const response = data.map((country) => {
      return {
        name: country.name,
        population: country.population,
        region: country.region,
        capital: country.capital,
        flag: country.flags.svg,
        code: country.numericCode,
      };
    });
    return NextResponse.json(response, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 },
    );
  }
}
