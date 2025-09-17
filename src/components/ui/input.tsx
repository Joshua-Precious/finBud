import { Search } from "lucide-react";
import type { ComponentPropsWithRef } from "react";

interface SearchInputProps extends ComponentPropsWithRef<"input"> {
    label?: string;
}

export const SearchInput = ({ ...props }: SearchInputProps) => {
    return (
        <div className="border border-base-300 rounded-2xl flex items-center p-2 space-x-2">
            <input { ...props } type="text" className="outline-none" />
            <Search size={24} />
        </div>
    );
}

