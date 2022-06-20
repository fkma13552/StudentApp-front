import {Col, Form, Row} from "react-bootstrap"
import {useState} from "react"
import StudentService from "./services/StudentService"

function StudentCreateForm() {
    const [name, setName] = useState("");
    const [surname, setSurname] = useState("");
    const [email, setEmail] = useState("");

    const sendData = async (e) => {
        e.preventDefault()
        const studentService = new StudentService()
        const data = await studentService.create(name, surname, email)
    }
    return (
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
                            <Col xs={6} sm={3}>
                                <Form.Control
                                    type="text"
                                    placeholder="Surname"
                                    name="surname"
                                    required
                                    onChange={(e) => setSurname(e.target.value)}/>
                            </Col>
                            <Col xs={6} sm={3}>
                                <Form.Control
                                    type="email"
                                    placeholder="Email"
                                    name="email"
                                    required
                                    onChange={(e => setEmail(e.target.value))}>
                                </Form.Control>
                            </Col>
                            <Col xs={12}>
                                <input type="submit" value="Send data" onClick={(e) => {sendData(e);}}/>
                            </Col>
                        </Row>
                    </div>
                </Form>
            </div>
        </>
    );
}
export default StudentCreateForm