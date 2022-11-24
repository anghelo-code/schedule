
export const ScheduleTr = ({ courses }) => {
  return (
    <>
      {
        courses.map((item) => {
          if (item.length > 1) {
            return (
              <td key={item.id} >
                <div className="h-100 d-flex flex-column">
                  {
                    item.map((course) => (
                      <div key={course.id } className="w-100 h-100" style={{ backgroundColor: course.color }}>
                        {course.id}
                      </div>
                    ))
                  }
                </div>
              </td>


            )
          }
          return (
            <td key={item[0]?.id} style={{ backgroundColor: item[0]?.color }} >
              {item[0]?.id}
            </td>
          );
        })
      }
    </>
  )
}
