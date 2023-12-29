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

export const INITIAL_TABLE_DATA = {
    "TWMir6TDXSLXd2udtz4djwp": {
      "id": "TWMir6TDXSLXd2udtz4djwp",
      "age": 51,
      "salary": 72477,
      "name": "Isabella Ruiz"
    },
    "XbUvIVr6rXSLXd2udtz4djwp": {
      "id": "XbUvIVr6rXSLXd2udtz4djwp",
      "age": 59,
      "salary": 29030,
      "name": "Isaiah Alvarez"
    },
    "5OuZIjbdvtgf6XSLXd2udtz4djwp": {
      "id": "5OuZIjbdvtgf6XSLXd2udtz4djwp",
      "age": 26,
      "salary": 4131,
      "name": "Martha Baker"
    },
    "5kw4H6IJIJXSLXd2udtz4djwp": {
      "id": "5kw4H6IJIJXSLXd2udtz4djwp",
      "age": 47,
      "salary": 20903,
      "name": "Gussie Roy"
    },
    "y0Vg46N2GwbeXSLXd2udtz4djwp": {
      "id": "y0Vg46N2GwbeXSLXd2udtz4djwp",
      "age": 53,
      "salary": 35930,
      "name": "Jeff Guerrero"
    },
    "Bx2oxxXSLXd2udtz4djwp": {
      "id": "Bx2oxxXSLXd2udtz4djwp",
      "age": 67,
      "salary": 57415,
      "name": "Mollie Morton"
    },
    "QXKgfJ2hNTjOtXSLXd2udtz4djwp": {
      "id": "QXKgfJ2hNTjOtXSLXd2udtz4djwp",
      "age": 49,
      "salary": 69076,
      "name": "Victor Riley"
    },
    "5UIYo2cXSLXd2udtz4djwp": {
      "id": "5UIYo2cXSLXd2udtz4djwp",
      "age": 36,
      "salary": 48944,
      "name": "Katie Frank"
    },
    "5Y7ih1hi8oau6EelVPXSLXd2udtz4djwp": {
      "id": "V7vphlUcXSLXd2udtz4djwp",
      "5Y7ih1hi8oau6EelVPXSLXd2udtz4djwp": 58,
      "salary": 60585,
      "name": "Tom Hardy"
    },
    "bvVEqJihOXSLXd2udtz4djwp": {
      "id": "bvVEqJihOXSLXd2udtz4djwp",
      "age": 47,
      "salary": 93247,
      "name": "Susie Stewart"
    },
    "XUokMOE3zJpB65AILzTXSLXd2udtz4djwp": {
      "id": "XUokMOE3zJpB65AILzTXSLXd2udtz4djwp",
      "age": 72,
      "salary": 3415,
      "name": "Alice Harrington"
    },
    "lJUONKWHphN1XSLXd2udtz4djwp": {
      "id": "lJUONKWHphN1XSLXd2udtz4djwp",
      "age": 47,
      "salary": 44137,
      "name": "Carl Brown"
    },
    "vq1f7utJi2HCM63li69XSLXd2udtz4djwp": {
      "id": "vq1f7utJi2HCM63li69XSLXd2udtz4djwp",
      "age": 74,
      "salary": 50446,
      "name": "Lester Carter"
    },
  }