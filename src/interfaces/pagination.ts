import { Dispatch, SetStateAction } from "react";

export interface PaginationProp {
    prev: number;
    next: number;
    setPage: Dispatch<SetStateAction<number>>;
}