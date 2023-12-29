import TableHeaders from "./components/TableHeaders";
import { conditionalStyle } from "./utils";
import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import useTable from "@/hooks/useTable";
import Dropdown from "@/components/Dropdown";
import { TTableData, TTableProps } from "./Table";
import TableSkeletonElement from "./components/TableSkeletonElement";
import TableBodySkeletonElement from "./components/TableBodySkeletonElement";
import { PLACEHOLDER_IMAGE } from "@/constants";
import Paginator from "./components/PaginatorWithApi";
import { FaEllipsisV } from 'react-icons/fa'

/**
 * Table component
 * 
 * @param {TTableHeader} headers
 * @param {string} headers.name - label for the table header
 * @param {string} headers.column - map to data key
 * @param {{[x: string]: any}[]} data
 * @param {object} options
 * @returns 
 * 
 * ----------------------------------------------------------------
 * 
 * Additional header parameters
 * 
 * @param {string} className - addtional classname for columns(applied to both header and data)
 * ----------------------------------------------------------------
 */

const Table = <T extends {[x:string]: any}>({
    columns,
    data,
    options,
    className,
    loading,
    dataLoading,
    pageSize,
    totalRecords,
    selectedAllCondition,
    isSelectedCondition,
    handleSelectAll,
    handleSelect,
    updateFilters,
    dataCallback,
    fetchData,
}: TTableProps<T>) => {
    const {
        headers,
        rows,
        filters,
        headerControlOpen,
        defaultHeaders,
        setHeaderControlOpen,
        setHeaders,
        updateLocalFilters,
        setRows,
        setFilters,
        handlePageChange,
    } = useTable({columns, data, options})

    const [tableWidth, setTableWidth] = useState<number|string>("auto") // used to set accordion container width
    const tableContainerRef = useRef<HTMLDivElement>(null)

    const [activeAccordion, setActiveAccordion] = useState<number|null>(null)

    useLayoutEffect(() => {
        // set width of table to use for accordion container width
        function handleResize() {
            setTableWidth(tableContainerRef?.current?.clientWidth ?? "auto");
        }
        tableContainerRef?.current && handleResize()
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, [])

    useEffect(() => {
        updateFilters?.(filters ?? {})
    }, [filters])

    useEffect(() => {
        setActiveAccordion(null)
    }, [rows])

    if (loading) {
        return (
          <div>
            <TableSkeletonElement />
          </div>
        );
    }

    // fetches data using call back function
    const getData = (item: TTableData<T>) => dataCallback ? dataCallback(item) : item
    
    // striped row
    const getRowBgColor = (index: number, selected: number) => {
        if(selected === 1) return "bg-selected"
        return (index%2===0 || !options?.striped) ? "bg-white": "bg-[#F4F5F7]"
    }

    // striped row
    const getStickyToColor = (selected: number) => (index: number) => {
        if(selected === 1) return "to-[#EEF0FB]"
        return (index%2===0 || !options?.striped) ? "to-white": "to-[#F4F5F7]"
    }

    return (
        <>
        <div ref={tableContainerRef} className={`table-container border -z-20 ${className}`}>
            <div className={`overflow-x-auto overflow-y-visible w-full`} style={{height: "auto"}}>
                <table
                    border={0}
                    cellPadding={0}
                    className={`w-full text-gray-text align-top whitespace-nowrap table-auto`}
                >
                    <TableHeaders 
                        handleSave={setHeaders}
                        defaultHeaders={defaultHeaders}
                        headerControlOpen={headerControlOpen}
                        options = {options}
                        headers = {headers}
                        setHeaderControlOpen={setHeaderControlOpen}
                        rows = {rows}
                        handleSelectAll = {handleSelectAll}
                        selectedAllCondition = {selectedAllCondition}
                    />

                    <tbody className={`z-10 relative`}>
                        {
                            (dataLoading || !rows) && 
                                <TableBodySkeletonElement/>
                        }
                        {
                            !dataLoading && (rows && rows.length === 0) && <tr>
                            <td colSpan={headers.length}>
                                    <div style={{width: tableWidth}} className={`text-xs p-2 text-center sticky left-0 w-full animate-pulse`}>
                                        No Data Found.
                                    </div>
                                </td>
                            </tr>
                        }
                        {
                            !dataLoading && rows?.length > 0 && rows.map((deltaItem: TTableData<T>, index: number) => {
                                const item: any = getData(deltaItem)
                                // console.log(item)
                                const zIndex = 1000-index
                                const selected = isSelectedCondition ? isSelectedCondition(deltaItem) : 0
                                const backgroundColor = getRowBgColor(index, selected)
                                const dropdownOptions = options?.dropDownCallback ? options?.dropDownCallback(deltaItem) : []
                                
                                if(!item) return <></>
                                
                                return(
                                    <React.Fragment key={index} >
                                        <tr
                                            className={`h-1 border border-[#DFE0E6]`}
                                        >
                                            {
                                                // rows
                                                headers?.filter((header) => header.display).map((header, key) => {
                                                    const image = (!options?.image?.(item) || options?.image?.(item) === "") ? PLACEHOLDER_IMAGE : options?.image?.(item)

                                                    return (
                                                    <td 
                                                    key={key} 
                                                    style={{...conditionalStyle(header.options), height: "inherit"}}
                                                    className={`text-[#172B4D]`}>
                                                        
                                                            <div 
                                                            className={`${header.options?.sticky?.[0] ? "shadow-r" : ""} w-full h-full pl-2 pr-4 py-2.5 flex space-x-2 items-center  ${header.options?.callbackClassNames && header.options.callbackClassNames(item)} ${backgroundColor} ${header.className ?? ""}`}>
                                                                {/* {
                                                                    // if image is present it gets displayed along with first column value
                                                                    (options?.image && key===0) && <img className={`w-7 h-7 block rounded-sm`} src={image} alt=""/>
                                                                } */}
                                                                {
                                                                    header.options?.callbackComponent && header.options?.callbackComponent(item)
                                                                }   
                                                                {
                                                                    // if not both
                                                                    !header.options?.callbackComponent &&
                                                                    <span className={`leading-7 truncate max-w-full`}>{item[header.column] ?  `${item[header.column]}` : "-"}</span>
                                                                }
                                                                
                                                            </div>
                                                        
                                                    </td>
                                                )})
                                            }
                                            {/* dropdown for options */}
                                            {
                                            !options?.disableRowOptions && <td style={{zIndex, height: "inherit"}}
                                            className={`text-[#172B4D] sticky ${backgroundColor}`}
                                            >
                                                {
                                                    dropdownOptions && dropdownOptions.length > 0 && 
                                                    <Dropdown bgColor={backgroundColor}>
                                                        <Dropdown.Toggle>
                                                            <span className={`absolute top-0 right-full h-full bg-gradient-to-r w-[100px] from-transparent pointer-events-none ${getStickyToColor(selected)(index)}`}></span>
                                                            <FaEllipsisV/>
                                                        </Dropdown.Toggle>
                                                        {
                                                            dropdownOptions.map((dropdownItem, dropdownIndex) => (
                                                                <Dropdown.Item key={dropdownIndex} handleClick = {() => dropdownItem.callbackFunction()}>
                                                                    {dropdownItem.label}
                                                                </Dropdown.Item>
                                                            ))
                                                        }
                                                    </Dropdown>
                                                }
                                            </td>
                                            }
                                        </tr>
                                    </React.Fragment>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>

        </div>
        {   
            options?.footer &&
            <div className="py-2">
            <div className={`flex justify-end items-center space-x-3 flex-wrap`}>
                <div className={`flex items-center space-x-3`}>
                    <span>Show</span>
                    <select
                        className={`border focus:outline-none p-1`}
                        style={{ width: "80px" }}
                        aria-label="Records on page select"
                        value={options.pagination === "manual" ? (filters?.limit ?? 10) :(pageSize)}
                        onChange={(e) => {
                            updateFilters && updateFilters({ limit: parseInt(e.target.value) ?? undefined })
                            updateLocalFilters({ limit: parseInt(e.target.value) ?? undefined })
                        }}
                    >
                        <option value={undefined}>10</option>
                        <option value={20}>20</option>
                        <option value={50}>50</option>
                        <option value={100}>100</option>
                        <option value={200}>200</option>
                        <option value={500}>500</option>
                        <option value={10000}>All</option>
                    </select>
                </div>
                <Paginator
                    onPageChange={handlePageChange}
                    recordPerPage={options.pagination === "manual" ? (filters?.limit ?? 10) : (pageSize ?? 10)}
                    totalRecords={totalRecords ?? 1}
                    presentPage={filters?.page ? filters.page : 1}
                />
            </div>
        </div>
        }
       
        </>
    )
}

export default Table