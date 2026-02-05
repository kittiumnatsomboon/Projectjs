import axios from "axios";
import { useState } from "react";

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
            return res;
        } catch (error) {
            console.log("test")
        }
    }
}
