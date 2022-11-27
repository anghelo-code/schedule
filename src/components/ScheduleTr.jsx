import { useId } from "react";
import { ScheduleTrChild } from "./ScheduleTrChild";

export const ScheduleTr = ({ courses }) => {
  const idTr = useId();
  return (
    <>
      {
        courses.map((item) => {
          const Tr = useId();
          if (item.length > 1) {
            return (
              <td key={ Tr } className="h-auto">
                <div className="h-auto d-flex flex-column bordeTd">
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
            <td key={ Tr } className="h-auto"  style={{ backgroundColor: item[0]?.color }} >
              {item[0]?.id}
            </td>
          );
        })
      }
    </>
  )
}
