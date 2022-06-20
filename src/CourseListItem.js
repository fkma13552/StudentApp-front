import {LinkContainer} from "react-router-bootstrap"

function CourseListItem({id, name, startDate, endDate}) {
    return(
        <tr>
            <td>{name}</td>
            <td>{startDate}</td>
            <td>{endDate}</td>
        </tr>
    )
}
export default CourseListItem