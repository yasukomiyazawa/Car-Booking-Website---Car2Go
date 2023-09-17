import { carProps } from "@/types";

export async function fetchCars() {

    const headers = {
        'X-RapidAPI-Key': 'ab27da6b9fmsh6d046dbf56ef08bp1dc099jsn7b775b0fc15f',
        'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'
    }

    const response = await fetch('https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=q3', {headers})

    const result = await response.json();

    return result
}

export const calculateCarRent = (city_mpg: number, year:number) => {
    const basePricePerDay = 5000; //Base rental price per day in yen

    const mileageFactor = 100; //Additional rate per mile driven

    const ageFactor = 50 // Additioal rate per year of vehicle age

    //Calculate additional rate based on mileage and age 

    const mileageRate = city_mpg * mileageFactor;
    const ageRate = (new Date().getFullYear() - year) * ageFactor;

    //calculate total rental rate per day 

    const rentalRatePerDay = basePricePerDay + mileageRate + ageRate;

    return rentalRatePerDay.toFixed(0);
}

export const generateCarImageUrl = (car: carProps, angle? : string) => {
    const url = new URL("https://cdn.imagin.studio/getimage");

    const {make, year, model} = car;

    url.searchParams.append("customer", "hrjavascript-mastery");
    url.searchParams.append("make", make);
    url.searchParams.append("modelFamily", model.split(" ")[0]);
    url.searchParams.append("zoomType", "fullscreen");
    url.searchParams.append("modelYear", `${year}`);
    url.searchParams.append("angle", `${angle}`);

    return `${url}`;
}