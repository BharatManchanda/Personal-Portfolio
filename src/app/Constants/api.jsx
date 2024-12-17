import axios from "axios";

export const api = {
    contact_us: async (data) => await axios.post("https://api.web3forms.com/submit", data),
}