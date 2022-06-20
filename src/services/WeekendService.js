export default class WeekendService {
    constructor() {
        this.api = process.env["REACT_APP_API"]+"/api/weekend"
    }

    async attachToStudent(studentId, startDate, endDate) {
        const body = JSON.stringify({
            studentId: studentId,
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
        if (res.statusCode === 200) {
            const data = res.json()
            return data
        }
        alert(await res.text())
    }
}