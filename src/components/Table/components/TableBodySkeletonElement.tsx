import SkeletonElement from "./SkeletonElement";

const rows = 6
const columns = 6

const TableBodySkeletonElement = () => {
    return (
        <>
        {[...Array(rows)].map((product, singleProductindex) => {
            return (
              <tr key={singleProductindex} className="border-1">
                {
                  [...Array(columns)].map((product, singleProductindex) => (
                  <th
                    key = {singleProductindex}
                    className="border-1 align-middle"
                    style={{
                      position: "sticky",
                      left: "0px",
                      // paddingLeft: "20px",
                      backgroundColor: "#FFFFFF",
                      height: "43",
                      fontFamily: "Noto Sans",
                      fontWeight: 400,
                      padding: "13px 31px 11px 20px",
                    }}
                    title={""}
                  >
                    <SkeletonElement type="text" />
                  </th>
                ))}
              </tr>
            );
          })}
        </>
    )
}

export default TableBodySkeletonElement