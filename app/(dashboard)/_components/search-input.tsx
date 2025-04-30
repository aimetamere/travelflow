"use client";

import qs from "query-string";
import { Search } from "lucide-react";
import { useRouter } from "next/navigation";
import { Input } from "@/components/ui/input";
import { useDebounceCallback } from "usehooks-ts";

import { ChangeEvent, useState } from "react";

export const SearchInput = () => {
    const router = useRouter();
    const [value, setValue] = useState("");
    const debouncedValue = useDebounceCallback((val) => {
        const url = qs.stringifyUrl(
            {
                url: "/",
                query: {
                    search: val || undefined,
                },
            }, 
            { skipEmptyString: true, skipNull: true },
        );

        router.push(url);
    }, 500); // Debounce delay of 500ms (adjust as needed)

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value);
        debouncedValue(e.target.value); // Call the debounced function
    };


    return (
        <div className="w-full relative">
            <Search className="absolute top-1/2 left-3 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
            <Input
                className="w-full max-w-[516px] pl-9"
                placeholder="Search boards"
                onChange={handleChange}
                value={value}
            />
        </div>
    );
};


