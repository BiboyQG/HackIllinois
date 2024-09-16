import axios from "axios";
import { toast } from "react-toastify";

const notifyFetchSuccess = () => toast.success("Events data fetched successfully!");

const notifyFetchFailure = (err) => toast.error("Error while fetching events data: " + err || "Unknown error");

export function fetchEvents() {
  return axios.get('/event/')
    .then(({ data }) => {
      return data;
    })
    .catch(error => {
      throw error;
    });
}

export { notifyFetchSuccess, notifyFetchFailure };
