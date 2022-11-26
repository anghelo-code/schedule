import { useId } from "react";
import { ScheduleTrChild } from "./ScheduleTrChild";

export const ScheduleTr = ({ courses }) => {
  return (
    <>
      {
        courses.map((item) => {
          if (item.length > 1) {
            return (
              <td key={ useId() } >
                <div className="h-100 d-flex flex-column bordeTd">
                  {
                    item.map((course) => (
                      <ScheduleTrChild key={ useId() } course={ course }/>
                    ))
                  }
                </div>
              </td>
            )
          }
          return (
            <td key={ useId() } style={{ backgroundColor: item[0]?.color }} >
              {item[0]?.id}
            </td>
          );
        })
      }
    </>
  )
}
