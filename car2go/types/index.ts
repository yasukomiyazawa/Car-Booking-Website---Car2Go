import { MouseEventHandler } from "react";

export interface CustomButtonProps {

    title: string;
    containerStyles? : string;
    handleClick?: 
    MouseEventHandler<HTMLButtonElement>;
    btnType: "button" | "submit";

}

export interface searchManufacturerProps {
    manufacturer : string;
    setmanufacturer : (manufacturer : string) => void
}