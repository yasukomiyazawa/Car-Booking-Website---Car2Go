"use client";

import { searchManufacturerProps } from "@/types";
import { Combobox, Transition } from "@headlessui/react";
import React from "react";
import Image from "next/image";
import { useState, Fragment } from "react";
import { manufacturers } from "@/constants";

const SearchManufacturer = ({
  manufacturer,
  setmanufacturer,
}: searchManufacturerProps) => {
  const [query, setQuery] = useState("");

  const filteredManufacturers =
    query === ""
      ? manufacturers
      : manufacturers.filter((item) =>
          item
            .toLowerCase()
            .replace(/\s+/g, "")
            .includes(query.toLowerCase().replace(/\s+/g, ""))
        );

  return (
    <div className="search-manufacturer">
      <Combobox value={manufacturer} onChange={setmanufacturer}>
        <div className="relative w-full">
          <Combobox.Button className="absolute top-[14px]">
            <Image
              src="/car-logo1.png"
              width={20}
              height={20}
              className="ml-4"
              alt="Car Logo"
            />
          </Combobox.Button>

          <Combobox.Input
            className="search-manufacturer__input"
            placeholder="manufacturer"
            displayValue={(manufacturer: string) => manufacturer}
            onChange={(e) => setQuery(e.target.value)}
          />

          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
            afterLeave={() => setQuery("")}
          >
            <Combobox.Options>
              {filteredManufacturers.map((item) => (
                <Combobox.Option
                  key={item}
                  value={item}
                  className={({ active }) =>
                    `relative search-manufacturer_option ${
                      active ? "bg-green-800 text-white" : "text-gray-900"
                    }`
                  }
                >
                  {item}
                </Combobox.Option>
              ))}
            </Combobox.Options>
          </Transition>
        </div>
      </Combobox>
    </div>
  );
};

export default SearchManufacturer;
