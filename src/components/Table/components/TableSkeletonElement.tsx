import React from "react";
import SkeletonElement from "./SkeletonElement";

const TableSkeletonElement = () => {
  return (
    <>
      <table
        style={{
          tableLayout: "auto",
          whiteSpace: "nowrap",
        }}
        className="table mt-3 w-full"
      >
        <thead
          style={{
            position: "sticky",
            top: "0px",
            zIndex: "1",
            backgroundColor: "#f2f2f2",
            color: "#5c5f62",
          }}
        >
          <tr
            style={{
              background: "#f2f2f2",
              border: "1px solid #c9cccf",
              height: "43",
              fontFamily: "Noto Sans",
              fontWeight: 400,
              margin: "42px 0 12px",
              color: "#5c5f62",
            }}
          >
            <th
              className="border-0"
              style={{
                position: "sticky",
                left: "0px",
                paddingLeft: "20px",
                backgroundColor: "rgb(246 246 246)",
                height: "43",
                fontFamily: "Noto Sans",
                fontWeight: 400,
                padding: "13px 31px 11px 20px",
                textTransform: "uppercase",
              }}
            >
              <SkeletonElement type="title" />
            </th>
            <th
              className="border-0"
              style={{
                position: "sticky",
                left: "0px",
                paddingLeft: "20px",
                backgroundColor: "rgb(246 246 246)",
                height: "43",
                fontFamily: "Noto Sans",
                fontWeight: 400,
                padding: "13px 31px 11px 20px",
                textTransform: "uppercase",
              }}
            >
              <SkeletonElement type="title" />
            </th>
            <th
              className="border-0"
              style={{
                position: "sticky",
                left: "0px",
                paddingLeft: "20px",
                backgroundColor: "rgb(246 246 246)",
                height: "43",
                fontFamily: "Noto Sans",
                fontWeight: 400,
                padding: "13px 31px 11px 20px",
                textTransform: "uppercase",
              }}
            >
              <SkeletonElement type="title" />
            </th>
            <th
              className="border-0"
              style={{
                position: "sticky",
                left: "0px",
                paddingLeft: "20px",
                backgroundColor: "rgb(246 246 246)",
                height: "43",
                fontFamily: "Noto Sans",
                fontWeight: 400,
                padding: "13px 31px 11px 20px",
                textTransform: "uppercase",
              }}
            >
              <SkeletonElement type="title" />
            </th>
          </tr>
        </thead>
        <tbody>
          {[111, 112, 113, 114, 115].map((product, singleProductindex) => {
            return (
              <tr key={singleProductindex} className="border-1">
                <th
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
                <th
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
                <th
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
                <th
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
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};
export default TableSkeletonElement;
