import { MouseEventHandler } from "react";

export interface CustomButtonProps {

    title: string;
    containerStyles? : string;
    handleClick?: 
    MouseEventHandler<HTMLButtonElement>;
    btnType?: "button" | "submit";
    textStyles?:string;
    rightIcon?:string;


}

export interface searchManufacturerProps {
    manufacturer : string;
    setmanufacturer : (manufacturer : string) => void
}

export interface carProps {

    city_mpg: number;
    class: string;
    combination_mpg: number;
    cylinders:number;
    displacement: number;
    drive: string;
    fuel_type: string;
    highway_mpg: number;
    make: string;
    model: string;
    transmission: string;
    year: number;

}

export interface filterProps {

    manufacturer: string;
    year: number;
    fuel: string;
    limit: number;
    model: string;
}

export interface optionsProps {

    title: string;
    value: string

}

export interface customeFilterProps {

    title: string;
    options: optionsProps[]

}

export interface ShowMoreProps {

    pageNumber: number;
    isNext: boolean

}