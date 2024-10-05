"use client";

import { useEffect, useState } from "react";
import {
  Label,
  Listbox,
  ListboxButton,
  ListboxOption,
  ListboxOptions,
} from "@headlessui/react";
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/react/20/solid";

interface CustomSelectProps {
  items: string[];
  selectedRole: string;
  selectChange: (id: number) => void;
  id: number;
}

export default function CustomSelect({
  items,
  selectedRole,
  selectChange,
  id,
}: CustomSelectProps) {
  const [selected, setSelected] = useState(selectedRole);
  const [newSelected, setNewSelected] = useState('');


  useEffect(() => {
    //console.log(items)
  }, []);

  useEffect(() => {
    if(newSelected !== '') selectChange(id);
  }, [newSelected]);

  return (
    <Listbox defaultValue={selected} value={newSelected} onChange={setNewSelected}>
      <div className="relative mt-2">
        <ListboxButton className="text-gray-900 ring-gray-300 relative w-full cursor-default rounded-md bg-white py-1.5 pl-3 pr-10 text-left shadow-sm ring-1 ring-inset focus:outline-none focus:ring-2 focus:ring-indigo-500 sm:text-sm sm:leading-6">
          <span className="flex items-center">
            <span className="ml-3 block truncate">{selected}</span>
          </span>
          <span className="pointer-events-none absolute inset-y-0 right-0 ml-3 flex items-center pr-2">
            <ChevronUpDownIcon
              aria-hidden="true"
              className="text-gray-400 h-5 w-5"
            />
          </span>
        </ListboxButton>

        <ListboxOptions
          transition
          className="absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none data-[closed]:data-[leave]:opacity-0 data-[leave]:transition data-[leave]:duration-100 data-[leave]:ease-in sm:text-sm"
        >
          {items.map((item, key) => (
            <ListboxOption
              key={key}
              value={item}
              className="text-gray-900 group relative cursor-default select-none py-2 pl-3 pr-9 data-[focus]:bg-indigo-600 data-[focus]:text-white"
            >
              <div className="flex items-center">
                <span className="ml-3 block truncate font-normal group-data-[selected]:font-semibold">
                  {item}
                </span>
              </div>

              <span className="absolute inset-y-0 right-0 flex items-center pr-4 text-indigo-600 group-data-[focus]:text-white [.group:not([data-selected])_&]:hidden">
                <CheckIcon aria-hidden="true" className="h-5 w-5" />
              </span>
            </ListboxOption>
          ))}
        </ListboxOptions>
      </div>
    </Listbox>
  );
}
