"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";

function Filter() {
    const searchParams = useSearchParams();
    const router = useRouter();
    const pathName = usePathname();

    const activeFilter = searchParams.get("capacity") ?? "all";
    function handelFilter(filter) {
        const param = new URLSearchParams(searchParams);
        param.set("capacity", filter);
        router.replace(`${pathName}?${param.toString()}`, { scroll: false });
    }
    return (
        <div className="border border-primary-800 flex">
            <Button
                handelFilter={handelFilter}
                activeFilter={activeFilter}
                filter="all"
            >
                All cabin
            </Button>
            <Button
                handelFilter={handelFilter}
                activeFilter={activeFilter}
                filter="small"
            >
                1&mdash;3 guest
            </Button>
            <Button
                handelFilter={handelFilter}
                activeFilter={activeFilter}
                filter="medium"
            >
                4&mdash;7 guest
            </Button>
            <Button
                handelFilter={handelFilter}
                activeFilter={activeFilter}
                filter="large"
            >
                8&mdash;12 guest
            </Button>
        </div>
    );
}

function Button({ children, filter, handelFilter, activeFilter }) {
    return (
        <button
            className={`px-5 py-2 hover:bg-primary-700 ${
                activeFilter === filter ? "bg-primary-700 text-primary-50" : ""
            }`}
            onClick={() => handelFilter(filter)}
        >
            {children}
        </button>
    );
}

export default Filter;
