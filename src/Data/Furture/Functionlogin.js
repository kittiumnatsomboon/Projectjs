import axios from "axios";

export class Functionlogin {
    async login(values) {
        try {
            const res = axios.post("http://localhost:5000/login/",
                values,
                {
                    headers: {
                        "Content-Type": "application/json",
                    },
                }
            )

        } catch (error) {
            console.log("error")
        }



    }
}
