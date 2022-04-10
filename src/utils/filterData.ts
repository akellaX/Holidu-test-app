import { TableColumnsType } from "../types";

export const filterDataByString = (data: TableColumnsType[], filterFiled: keyof TableColumnsType, filteredString: string) => {
    return data.filter((el) => {
        if (!el[filterFiled]) {
            return false;
        }
        return String(el[filterFiled]).toLowerCase().indexOf(filteredString.toLowerCase()) > -1;
    })
}

export const filterDataByArray = (data: TableColumnsType[], filterFiled: keyof TableColumnsType, filteredArr: string[]) => {
    return data.filter((el) => {
        const dataArr = el[filterFiled];
        if (!el[filterFiled]) {
            return false;
        }
        if (!Array.isArray(dataArr)) {
            return false;
        }
        return filteredArr.every((el) => dataArr.indexOf(el as any) > -1);
    })
}
