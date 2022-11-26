import { useId } from "react";
import { ScheduleTrChild } from "./ScheduleTrChild";

export const ScheduleTr = ({ courses }) => {
  const idTr = useId();


  return (
    <>
      {
        courses.map((item) => {
          if (item.length > 1) {
            return (
              <td key={ idTr } >
                <div className="h-100 d-flex flex-column bordeTd">
                  {
                    item.map((course) => (
                      <ScheduleTrChild key={ idTr + course.id } course={ course }/>
                    ))
                  }
                </div>
              </td>
            )
          }
          return (
            <td key={ idTr } style={{ backgroundColor: item[0]?.color }} >
              {item[0]?.id}
            </td>
          );
        })
      }
    </>
  )
}
