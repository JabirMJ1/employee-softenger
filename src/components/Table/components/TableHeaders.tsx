import { conditionalStyle } from "../utils"
import { TTableHeaderProps } from "../Table"


/**
 * Common table header with header management option
 * 
 * @param param0 
 * @returns 
 */
export default function TableHeaders ({
    options, 
    headers, 
    setHeaderControlOpen, 
    headerControlOpen, 
    handleSave,
    rows,
    handleSelectAll,
    selectedAllCondition,
    defaultHeaders}: TTableHeaderProps) {

    const selected = !options?.disableheaderSelectAll && selectedAllCondition && selectedAllCondition(rows)

    return (
        <>
            <thead className={`sticky top-0 z-[1001] text-[#6B778C]`}>
            <tr>
            
            {
                headers?.filter((header) => header.display).map((header, key) => (
                    <th key={key} className={`${options?.headerClassName ?? ""} bg-[#DFE0E6]`}
                        style={conditionalStyle(header.options)}
                    >
                        <div 
                        style={{width: header.options?.width ?? "auto"}} 
                        className={`py-3 flex space-x-2 items-center px-2 pr-6
                            ${options?.headerClassName ?? ""} 
                            ${header.options?.sticky?.[0] ? "shadow-r" : ""} 
                            ${header.className ?? ""}`}
                        >
                            <h3>{header.name}</h3>
                            {
                                (!options?.disableSort && header.sortable) && 
                                <i className={`fas fa-sort text-xs`} />
                            }
                        </div>
                    </th>
                ))
            }
            {
                !options?.disableRowOptions && <th className={`${options?.headerClassName ?? ""} bg-[#DFE0E6] sticky right-0 rel  text-center z-10 `}>
                    <span className={`absolute top-0 right-full h-full bg-gradient-to-r w-[100px] from-transparent pointer-events-none ${options?.headerStickyToClassName ?? "to-[#DFE0E6]"}`}></span>              
                </th>
            }
            
            </tr>
        </thead>
    </>
    )
}