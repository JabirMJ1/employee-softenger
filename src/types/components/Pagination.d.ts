export interface TPaginationProps {
    totalRecords: number,
    recordPerPage: number,
    onPageChange: (skip: number) => void,
    presentPage?: number
}

export type ThandlePageChange = (p: {selected: number}) => void