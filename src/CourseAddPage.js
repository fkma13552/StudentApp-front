import CourseService from "./services/CourseService"
import {Col, Form, Row} from "react-bootstrap"
import {useState} from "react"

function CourseAddPage() {
    const [name, setName] = useState("")

    const sendCourseData = async (e) => {
        e.preventDefault()
        const courseService = new CourseService()
        const data = await courseService.create(name)
    }

    return(
        <>
            <div>
                <Form>
                    <div>
                        <h1>Create student</h1>
                        <Row>
                            <Col xs={12} sm={6}>
                                <Form.Control
                                    type="text"
                                    placeholder="Name"
                                    name="name"
                                    required
                                    onChange={(e) => setName(e.target.value)} />
                            </Col>
                            <Col xs={12}>
                                <input type="submit" value="Send data" onClick={(e) => {sendCourseData(e);}}/>
                            </Col>
                        </Row>
                    </div>
                </Form>
            </div>
        </>
    )
}
export default CourseAddPage