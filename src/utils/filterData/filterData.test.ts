import { filterDataByArray, filterDataByString } from "./index";
import { TableColumnsType } from "../../types";

const data = [{
    "id": "1",
    "name": "Company 1",
    "status": "LIVE",
    "paymentModes": ["BANK_TRANSFER"]
}, {
    "id": "2",
    "name": "Company 2",
    "status": "NEW",
    "paymentModes": ["BANK_TRANSFER", "PAYPAL"]
}, {
    "id": "3",
    "name": "Firm 2",
    "status": "OFFLINE",
    "paymentModes": ["CREDIT_CARD", "PAYPAL", "BANK_TRANSFER"]
}
] as TableColumnsType[];

describe('filterDataByString', () => {
    test('Has full word', () => {
        expect(filterDataByString(data, 'name', 'Company 1')).toEqual([data[0]])
    });
    test('Has partial word', () => {
        expect(filterDataByString(data, 'name', 'Comp')).toEqual(data.slice(0,2));
    });
    test('No matches', () => {
        expect(filterDataByString(data, 'name', 'Bank')).toEqual([]);
    });
    test('Has empty search string', () => {
        expect(filterDataByString(data, 'name', '')).toEqual(data);
    });
    test('Do not have proper field', () => {
        expect(filterDataByString(data, 'field' as any, '')).toEqual(data);
    });
})

describe('filterDataByArray', () => {
    test('Empty array', () => {
        expect(filterDataByArray(data, 'paymentModes', [])).toEqual(data)
    });
    test('Has multiple entries for one elements', () => {
        expect(filterDataByArray(data, 'paymentModes', ["BANK_TRANSFER"])).toEqual(data)
    });
    test('Has one entry for one elements', () => {
        expect(filterDataByArray(data, 'paymentModes', ["CREDIT_CARD"])).toEqual([data[2]])
    });
    test('Has multiple elements', () => {
        expect(filterDataByArray(data, 'paymentModes', ["BANK_TRANSFER", "PAYPAL"])).toEqual(data.slice(1,3))
    });
    test('Has no field', () => {
        expect(filterDataByArray(data, 'field' as any, ["BANK_TRANSFER", "PAYPAL"])).toEqual(data)
    });
})
