import {Nav, Table} from "react-bootstrap"
import {useEffect, useState} from "react"
import StudentListItem from "./StudentListItem"
import StudentService from "./services/StudentService"

function StudentsPage(){
    const [studentsInfo, setStudentsInfo] = useState([
        {id: 1, name: "Viktor", surname: "Tkachenko", email: "a@a.com"},
        {id:2, name: "Viktor", surname: "Tkachenko", email: "a@a.com"}])


    useEffect(() => {
        const service = new StudentService()
        async function fetchApi() {
            const data = await service.getAll()
            setStudentsInfo(data)
        }
        fetchApi()
    },[])
    const tableItems = studentsInfo.map(d => {return <StudentListItem key={d.id}{...d}/>})

    return(
        <Table striped>
            <thead>
            <tr>
                <th>Name</th>
                <th>Surname</th>
                <th>Email</th>
                <th>Visit profile</th>
            </tr>
            </thead>
            <tbody>
            {tableItems}
            </tbody>
        </Table>
    )
}

export default StudentsPage