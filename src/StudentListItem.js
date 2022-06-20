import {Nav} from "react-bootstrap"
import {LinkContainer} from "react-router-bootstrap"

function StudentListItem({id, name, surname, email}) {
    return(
        <tr>
            <td>{name}</td>
            <td>{surname}</td>
            <td>{email}</td>
            <td><LinkContainer to={`/student/${id}`}>
                <Nav.Link>
                    profile
                </Nav.Link>
            </LinkContainer></td>
        </tr>
    )
}
export default StudentListItem