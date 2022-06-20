export default class StudentService {
    constructor() {
        this.api = process.env["REACT_APP_API"]+"/api/student"
    }

    async create(name, surname, email) {
        const body = JSON.stringify({
            name: name,
            surname: surname,
            email: email
        })
        const res = await fetch(this.api + "/create", {
            method: "POST",
            headers: {
                "Content-type": "application/json",
            },
            body: body,
            cache: "default",
            cors: "cors"
        });
        if (res.statusCode === 200 || res.statusCode === 204) {
            const data = res.json()
            return data
        }
        alert(await res.text())
    }

    async getStudentById(id) {
        const res = await fetch(this.api + "/getById" + `?id=${id}`, {
            method: "GET",
            cache: "default",
            cors: "no-cors"
        })
        const data = await res.json()
        return data
    }

    async getAll() {
        const res = await fetch(this.api + "/getAll", {
            method: "GET",
            cache: "default",
            cors: "cors"
        })
        const data = await res.json()
        return data
    }
}