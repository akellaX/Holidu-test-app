import { useEffect, useState } from "react";
import { PreparedTableData } from "../types";
import axios from "axios";
import { prepareTableData } from "../utils/prepareTableData";

const URL = './data-200.json';

export const useData = () => {
    const [initialData, setInitialData] = useState<PreparedTableData | undefined>();
    useEffect(() => {
        const getResponse = async () => {
            const response = await axios.get(URL);
            if (response.status === 200 && response.data) {
                const preparedData = prepareTableData(response.data);
                setInitialData(preparedData);
            }
        }
        getResponse();

    }, [])

    return initialData;
}
