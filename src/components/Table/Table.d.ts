export type TTableData<T = any> = TDelta<T>

export interface TTableOptions<T = any> {
    disableSort?: boolean
    disableHeaderControls?: boolean
    disableheaderSelectAll?: boolean
    disableRowOptions?:boolean
    pagination?: "manual"|"auto",
    image?: (item: any) => string // image column (Display along with first column in table)
    firstColPaddingLeft?: number
    headerClassName?: string
    headerStickyToClassName?: string 
    footer?: boolean
    height?: string,
    striped?: boolean,
    dropDownCallback?: (item: any) => {label: string, callbackFunction: Function}[]
}

export interface TTableHeaderOptions {
    sticky?: [boolean, {[x: string]: string}], 
    callbackClassNames?: (item: any) => string|undefined , 
    width?: string, info?: string
    callbackComponent?: Component
}

export interface TTableHeader {
    name: string, 
    column: string,
    id?: number,
    display?: boolean,
    className?: string, 
    sortable?: boolean,
    options?: TTableHeaderOptions
}

export type TsetHeaderControlOpen = Dispatch<SetStateAction<boolean>>

export interface TTableHeaderProps {
    rows?: any,
    handleSelectAll?: (e, rows: any) => void
    headers: TTableHeader[],
    options?: TTableOptions<T>,
    selectedAllCondition?: (rows: any) => number,
    setHeaderControlOpen: TsetHeaderControlOpen
    handleSave: (headers: TTableHeader[]) => void
    defaultHeaders: MutableRefObject<TTableHeader[] | null>
    headerControlOpen: boolean
}

export interface TableHeaderControlModalProps{
    headers: TTableHeader[],
    handleSave: (headers: TTableHeader[]) => void
    defaultHeaders: MutableRefObject<TTableHeader[] | null>
    headerControlOpen: boolean
    setHeaderControlOpen: TsetHeaderControlOpen,
}

export interface TTableHeaderControlButtonProps {
    disableHeaderControls?: boolean
    setHeaderControlOpen?: TsetHeaderControlOpen
}

export interface TTableProps<T = any> {
    totalRecords?: number
    columns: TTableHeader[]|null,
    data?: TTableData<T>[]|null,
    loading?: boolean,
    dataLoading?: boolean
    options?: TTableOptions<T>,
    selectedAllCondition?: (rows: any) => number,
    isSelectedCondition?: (item: any) => number
    fetchData?: TFetchData,
    updateFilters?: (filters: TFilters) => void
    enableColumnDrag?: boolean,
    className?: string
    bgColors?: string[]
    footer?: boolean
    dataCallback?: (item: any) => any | null, // data column for accordion data
    handleSelect?: (e: React.ChangeEvent<HTMLInputElement>, item: any) => void,
    [x: string]: any,
}
