
export const ScheduleTrChild = ({ course }) => {
  return (
    <div  className="w-100 h-100" style={{ backgroundColor: course.color }}>
      {course.id}
    </div>
  )
}
