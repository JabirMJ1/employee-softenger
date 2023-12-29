/**
 * Global constants related to project
 */

import Image from "next/image";
import { TTableHeader } from "./components/Table/Table";

// tabs and page route map 
export enum TABS {
    ADD = '/add',
    EDIT = '/edit',
    VIEW = '/'
}

// field name map
export enum FIELDS {
    ID='id',
    NAME = 'name',
    SALARY = 'salary',
    AGE = 'age',
    PROFILE_IMAGE = 'profile_image'
}

export const BLANK_IMAGE_URL_SQ ="https://upload.wikimedia.org/wikipedia/commons/6/65/No-Image-Placeholder.svg"
export const PLACEHOLDER_IMAGE = "https://cdn1.vectorstock.com/i/thumb-large/50/20/no-photo-or-blank-image-icon-loading-images-vector-37375020.jpg";

export const ProductTypeComponentTable = ({item}: any) => {
    return (
         <div className={`p-1 rounded px-2 text-xs w-max`}>
            <div className="flex items-center gap-3">
                <div className="relative block w-12 aspect-square rounded-full overflow-hidden">
                    <Image 
                    src={item?.[FIELDS.PROFILE_IMAGE] ?? PLACEHOLDER_IMAGE}
                    alt="Preview" 
                    className="object-cover"
                    width={50}
                    height={50}
                    // fill
                    />
                </div>
                <span>{item[FIELDS.NAME]}</span>
            </div>
         </div>
    )
 }

export const TABLE_HEADERS: TTableHeader[] = [
    {
        name: "Name", 
        sortable: true, 
        column: FIELDS.NAME, 
        options: {
            callbackComponent: (item: any) =>  <ProductTypeComponentTable item = {item}/>
        }
    },
    {name: "Age", sortable: true, column: FIELDS.AGE},
    {name: "Salary", sortable: true, column: FIELDS.SALARY},
]