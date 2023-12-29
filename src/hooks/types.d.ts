
export interface UseTableProps {
    columns: TTableHeader[]|null,
    data: any,
    dataCallback?: DataCallBack,
    options?: TTableOptions
    // defaultFilters: TFilters
}

export interface TFilters {
    search?: string,
    sort_by?: string,
    sort_type?: string,
    product_type?: string,
    page?: number,
    limit?: number|string,
    filters?: string[]
    [x: string]: any
}