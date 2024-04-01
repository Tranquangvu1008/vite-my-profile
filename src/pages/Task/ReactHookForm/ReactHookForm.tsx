import { useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { HeaderSection } from "./components/HeaderSection";
import { FormSection } from "./components/FormSection";
import { TableSection } from "./components/TableSection";
import { PaginationSection } from "./components/PaginationSection";
import { useOutletContext } from "react-router-dom";
import { OutletContextType } from "../../../interface";

interface IFormInput {
    id: number;
    fullName: string
    email: string
    address: string
    city: string
    country: string
}

const headers = Array.of("FULL NAME", "EMAIL ADDRESS", "ADDRESS", "COUNTRY", "ACTION");

export const ReactHookForm = () => {
    const { darkTheme } = useOutletContext<OutletContextType>();
    const [listUserInfo, setListUserInfo] = useState<IFormInput[]>([]);
    const [modeEdit, setModeEdit] = useState(false)
    const formOptions = { defaultValues: { fullName: '', email: '', address: '', city: '' } };

    //Paging
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

    //Handle form
    const {
        register,
        setValue,
        handleSubmit,
        reset,
        formState: { errors }
    } = useForm<IFormInput>(formOptions);
    const onSubmit: SubmitHandler<IFormInput> = (data: any) => {
        if (data) {
            if (modeEdit && data.id) {
                const newUpdate = listUserInfo.map((item) => {
                    if (item.id === data.id) {
                        return { ...data }
                    }
                    return item;
                })
                setListUserInfo(newUpdate);
                setModeEdit(false)
                reset()
            } else {
                const newId = listUserInfo.reduce((maxId, item) => Math.max(item.id, maxId), 0) + 1;
                setListUserInfo([...listUserInfo, { id: newId, ...data }])
                reset()
            }
        }
    }

    const deleteItem = (id: number) => {
        const newList = listUserInfo.filter((item) => item.id !== id);
        setListUserInfo(newList)
    }

    const showItemUpdate = (id: number) => {
        const itemUpdate: IFormInput = listUserInfo.filter((item) => item.id === id)[0];
        if (itemUpdate) {
            setModeEdit(true);
            setValue("id", itemUpdate.id)
            setValue("fullName", itemUpdate.fullName);
            setValue("email", itemUpdate.email);
            setValue("address", itemUpdate.address);
            setValue("city", itemUpdate.city);
            setValue("country", itemUpdate.country);
        }
    }

    return (
        <div className='h-screen'>
            <div className="flex flex-col p-10 gap-5">
                {/* Header screen */}
                <HeaderSection />
                {/* Main form */}
                <FormSection
                    register={register}
                    errors={errors}
                    modeEdit={modeEdit}
                    handleSubmit={handleSubmit}
                    onSubmit={onSubmit}
                    darkTheme={darkTheme}
                />
                {/* Display data */}
                <TableSection
                    headers={headers}
                    currentRecords={currentRecords}
                    deleteItem={deleteItem}
                    showItemUpdate={showItemUpdate}
                />
                {/*Paging*/}
                <PaginationSection
                    goToPrevPage={goToPrevPage}
                    goToNextPage={goToNextPage}
                    currentPage={currentPage}
                    recordsPerPage={recordsPerPage}
                    listUserInfo={listUserInfo}
                    currentRecords={currentRecords}
                />
            </div>
        </div>
    )
}
