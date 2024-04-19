import { HeaderSection } from "./components/HeaderSection";
import { FormSection } from "./components/FormSection";
import { TableSection } from "./components/TableSection";
import { PaginationSection } from "./components/PaginationSection";
import { usePaging } from "./hooks/usePaging";
import { useHandleForm } from "./hooks/useHandleForm";
import { Metadata } from "../../../components/Metadata/Metadata";

const headers = Array.of("FULL NAME", "EMAIL ADDRESS", "ADDRESS", "COUNTRY", "ACTION");

const ReactHookForm = () => {
    //Handle form
    const { register, errors, modeEdit, handleSubmit, onSubmit, deleteItem, showItemUpdate, listUserInfo } = useHandleForm();
    //Paging
    const { currentRecords, goToNextPage, goToPrevPage, currentPage, recordsPerPage } = usePaging(listUserInfo);

    return (
        <div className='h-screen'>
            <Metadata title="React Hook Form" description="React Hook Form task was guided by Tony Nguyen" />
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

export default ReactHookForm;