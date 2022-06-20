import {useParams} from "react-router-dom"
import {useEffect, useState} from "react"
import StudentService from "./services/StudentService"
import {Col, Form, Row, Table} from "react-bootstrap"
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css";
import CourseService from "./services/CourseService"
import WeekendService from "./services/WeekendService"
import CourseListItem from "./CourseListItem"

function StudentInfo() {

    const [studentInfo, setStudentInfo] = useState(
        {name: "loading", surname: "loading", email: "loading", studentCourses: [
                {
                    id: "loading",
                    studentId: "loading",
                    courseId: "loading",
                    startDate: "loading",
                    endDate: "loading",
                    course: {
                        id: "loading",
                        name: "loading"
                    }
                }
            ],
        weekends: [
            {
                startDate: "loading",
                endDate: "loading"
            }
        ]})

    const [coursesInfo, setCoursesInfo] = useState([{id: "loading", name:"loading"}])
    const [courseId, setCourseId] = useState("")
    const [courseStartDate, setCourseStartDate] = useState("")
    const [courseEndDate, setCourseEndDate] = useState("")
    const [weekendStartDate, setWeekendStartDate] = useState("")
    const [weekendEndDate, setWeekendEndDate] = useState("")

    const { id } = useParams()

    useEffect(() => {
        const studentService = new StudentService()
        const courseService = new CourseService()
        async function fetchApi() {
            const dataStudent = await studentService.getStudentById(id)
            const dataCourses = await courseService.getAll()
            setStudentInfo(dataStudent)
            setCoursesInfo(dataCourses)
            setCourseId(dataCourses[0].id)
        }
        fetchApi()
    }, [id])

    const sendCourseData = async (e) => {
        e.preventDefault()
        const courseService = new CourseService()
        const data = await courseService
            .attachToStudent(id, courseId, new Date(courseStartDate).toLocaleString(), new Date(courseEndDate).toLocaleString())
    }

    const sendWeekendData = async (e) => {
        e.preventDefault()
        const weekendService = new WeekendService()
        const data = await weekendService.attachToStudent(id, new Date(weekendStartDate).toLocaleString(), new Date(weekendEndDate).toLocaleString())
    }

    const options = coursesInfo.map(function (c) {
        return <option
            key={c.id}
            value={c.id}>
            {c.name}
        </option>
    });

    const coursesList = studentInfo.studentCourses.map(function (s) {
        return <CourseListItem key={s.id} name={s.course.name} startDate={s.startDate} endDate={s.endDate}/>
    })
    const weekendList = studentInfo.weekends.map(function (s) {
        return <CourseListItem key={s.id} name={"Weekend"} startDate={s.startDate} endDate={s.endDate}/>})
    coursesList.push(weekendList)

    return(
        <div>
            <h1>{studentInfo.name} {studentInfo.surname}</h1>
            <h2>{studentInfo.email}</h2>
            <Form>
                <span>
                    <h3>Attach course</h3>
                    <Row>
                        <Col xs={6} sm={3}>
                            <Form.Select
                                name="course"
                                required
                                onChange={(e => setCourseId(e.target.value))}>
                                {options}
                            </Form.Select>
                        </Col>
                        <Col xs={6} sm={3}>
                            <label htmlFor="">date start</label>
                            <DatePicker
                                selected={courseStartDate}
                                onChange={(e) => {
                                    setCourseStartDate(e);
                                }}
                                minDate={Date.now()}
                                customInput={
                                    <input
                                        type="text"
                                        placeholder="Date"/>}
                            />
                        </Col>
                        <Col xs={6} sm={3}>
                            <label htmlFor="">date end</label>
                            <DatePicker
                                selected={courseEndDate}
                                onChange={(e) => {
                                    setCourseEndDate(e);
                                }}
                                minDate={Date.now()}
                                customInput={
                                    <input
                                        type="text"
                                        placeholder="Date"/>}
                            />
                        </Col>
                        <Col xs={12}>
                            <input type="submit" value="Send data" onClick={(e) => {sendCourseData(e);}}/>
                        </Col>
                    </Row>
                </span>
            </Form>
            <Form>
                <div>
                    <h3>Book weekend</h3>
                    <Row>
                        <Col xs={6} sm={3}>
                            <label htmlFor="">date start</label>
                            <DatePicker
                                selected={weekendStartDate}
                                onChange={(e) => {
                                    setWeekendStartDate(e);
                                }}
                                minDate={Date.now()}
                                customInput={
                                    <input
                                        type="text"
                                        placeholder="Date"/>}
                            />
                        </Col>
                        <Col xs={6} sm={3}>
                            <label htmlFor="">date end</label>
                            <DatePicker
                                selected={weekendEndDate}
                                onChange={(e) => {
                                    setWeekendEndDate(e);
                                }}
                                minDate={Date.now()}
                                customInput={
                                    <input
                                        type="text"
                                        placeholder="Date"/>}
                            />
                        </Col>
                        <Col xs={12}>
                            <input type="submit" value="Send data" onClick={(e) => {sendWeekendData(e);}}/>
                        </Col>
                    </Row>
                </div>
            </Form>
            <Table striped>
                <thead>
                <tr>
                    <th>Name</th>
                    <th>Start date</th>
                    <th>End date</th>
                </tr>
                </thead>
                <tbody>
                {coursesList}
                </tbody>
            </Table>
        </div>
    )
}
export default StudentInfo