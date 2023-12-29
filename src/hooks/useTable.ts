import { useCallback, useEffect, useRef, useState } from "react";
import { TTableHeader, TTableOptions } from "@/components/Table/Table";
import { TFilters, UseTableProps } from "./types";

/**
 * Common functions and states to manage Table component
 * 
 * @param {TTableHeader[]|null} columns 
 * @param {any} data 
 * @param {TTableOptions} options 
 * @returns 
 */
export default function useTable ({columns, data, options}: UseTableProps) {
    const [headers, setHeaders] = useState<TTableHeader[]>(columns ?? [])
    const [rows, setRows] = useState<any>(data ?? []);
    const [filters, setFilters] = useState<TFilters|undefined>(undefined)
    const [headerControlOpen, setHeaderControlOpen] = useState<boolean>(false)

    const defaultHeaders = useRef<TTableHeader[]|null>(null)


    useEffect(() => {
        if(options?.pagination !== "manual") return setRows(data)

        if(!filters?.page) setRows(data?.slice(0, filters?.limit ?? 10))
        if(options?.pagination === "manual"){
            const start = (((filters?.page ?? 1) - 1) * (filters?.limit as number ?? 10))
            const end = start + (filters?.limit as number ?? 10)
            setRows(data?.slice(start, end))
        }
    }, [filters, data])

    // close header control modal 
    const handleControlClose = useCallback((e: KeyboardEvent) => {
        e.preventDefault()
        if(e.key === "Escape") setHeaderControlOpen(false)
    }, [])

    useEffect(() => {
        if(headerControlOpen) document.addEventListener("keydown", handleControlClose, true)
        else document.removeEventListener("keydown", handleControlClose, true)

        return () => {
            document.removeEventListener("keydown", handleControlClose, true)
        }
    }, [headerControlOpen, handleControlClose])

    /**
     * Initialize all headers with default values for 
     * non-assigned properties
     */
    const initializeHeaders = useCallback(() => {
        if(!columns) return setHeaders([])

        let headerId = 0
        const initailizedHeaders = columns.reduce((acc: TTableHeader[], column) => {
            acc.push({
                id: ++headerId,
                sortable: false,
                display: true,
                options: {
                    sticky: [false, {}],
                    callbackClassNames: undefined,
                    // width: "150px",
                    ...column.options
                },
                ...column,
            })
            return acc
        }, [])

        defaultHeaders.current = initailizedHeaders
        setHeaders(initailizedHeaders)
    }, [columns])

    useEffect(() => {
        // Header initialization with necessary keys
        initializeHeaders()
    }, [columns, initializeHeaders])

    /**
     * reflect page changes to filters
     * 
     * @param skip - number of rows to skip
     * @param limit - number of rows to return
     */
    const handlePageChange = (page: number) => {
        setFilters((prevFilters) => {
            return {
                ...prevFilters,
                page: page,
            }
        })
    }

    const updateLocalFilters = (value: TFilters) => {
        setFilters(prev => ({...prev, ...value}))
    }

    return {
        headers,
        rows,
        filters,
        defaultHeaders,
        headerControlOpen,
        setHeaders,
        setRows,
        setFilters,
        handlePageChange,
        setHeaderControlOpen,
        updateLocalFilters
    }
}
