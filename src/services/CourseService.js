export default class CourseService {
    constructor() {
        this.api = process.env["REACT_APP_API"]+"/api/course"
    }

    async create(name) {
        const body = JSON.stringify({
            name: name,
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

    async attachToStudent(studentId, courseId, startDate, endDate) {
            const body = JSON.stringify({
                studentId: studentId,
                courseId: courseId,
                startDate: startDate,
                endDate: endDate
            })
            const res = await fetch(this.api + "/attachToStudent", {
                method: "POST",
                headers: {
                    "Content-type": "application/json",
                },
                body: body,
                cache: "default",
                cors: "cors"
            });
            if(res.statusCode === 200){
                const data = res.json()
                return data
            }
            alert(await res.text())
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