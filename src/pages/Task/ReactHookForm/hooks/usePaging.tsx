import { useEffect, useState } from "react";
import { IFormInput } from "../models/IFormInput";

export const usePaging = (listUserInfo: IFormInput[]) => {
    const [currentPage, setCurrentPage] = useState(1);
    const [recordsPerPage] = useState(10);
    const [indexOfLastRecord, setIndexOfLastRecord] = useState(currentPage * recordsPerPage);
    const [indexOfFirstRecord, setIndexOfFirstRecord] = useState(indexOfLastRecord - recordsPerPage);
    const [currentRecords, setCurrentRecords] = useState(listUserInfo.slice(indexOfFirstRecord, indexOfLastRecord))

    const goToNextPage = () => {
        const nPages = Math.ceil(listUserInfo.length / recordsPerPage)
        if (currentPage !== nPages) {
            setCurrentPage(currentPage + 1)
        }
    }
    const goToPrevPage = () => {
        if (currentPage !== 1) setCurrentPage(currentPage - 1)
    }

    useEffect(() => {
        setIndexOfLastRecord(currentPage * recordsPerPage)
        setIndexOfFirstRecord(indexOfLastRecord - recordsPerPage)
        setCurrentRecords(listUserInfo.slice(indexOfFirstRecord, indexOfLastRecord))
    }, [currentPage, indexOfFirstRecord, indexOfLastRecord, listUserInfo, recordsPerPage])

    return { currentRecords, goToNextPage, goToPrevPage, currentPage, recordsPerPage }
}
