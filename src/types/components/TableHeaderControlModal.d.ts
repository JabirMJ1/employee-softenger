import { TableHeaderControlModalProps } from "./Table"

type TTableHeaderControlModal = (props: TableHeaderControlModalProps) => ReactNode

type ThandleRemove = (e: React.MouseEvent, index: number) => void

type ThandleResetDefault = React.MouseEventHandler<HTMLButtonElement>

type ThandleSelectAll = React.MouseEventHandler<HTMLButtonElement>

type ThandleAdd = React.MouseEventHandler<HTMLButtonElement>

type ThandleSelect = (e: React.ChangeEvent<HTMLInputElement>, id: number) => void

type ThandleRemoveAll = React.MouseEventHandler<HTMLButtonElement>

type ThandleUpdate = React.MouseEventHandler<HTMLButtonElement>

export {
    TTableHeaderControlModal,
    ThandleRemove,
    ThandleResetDefault,
    ThandleSelectAll,
    ThandleAdd,
    ThandleSelect,
    ThandleRemoveAll,
    ThandleUpdate
}