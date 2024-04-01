export const TableSection = ({ headers, currentRecords, deleteItem, showItemUpdate }: any) => {
    return (
        <section className="shadow-lg">
            <div className="overflow-x-auto">
                <table className="w-full table-fixed min-w-max">
                    <thead>
                        <tr className="shadow-lg">
                            {headers.map((header: any, index: number) => (
                                <th key={index} className="text-left px-8 mx-8 py-2">{header}</th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {currentRecords.length > 0 ? currentRecords.map((item: any) => (
                            <tr key={item.id}>
                                <td className="px-8 py-2 break-words">{item.fullName}</td>
                                <td className="px-8 py-2 break-words">{item.email}</td>
                                <td className="px-8 py-2 break-words">{item.address}, {item.city}</td>
                                <td className="px-8 py-2 break-words">{item.country}</td>
                                <td className="px-8 py-2 break-words ">
                                    <button className="text-blue-500 pr-2" onClick={() => showItemUpdate(item.id)}>Edit</button>
                                    <button className="text-red-500" onClick={() => deleteItem(item.id)}>Delete</button>
                                </td>
                            </tr>
                        )) : <tr><td colSpan={5} className="px-8 py-2 text-center">No Data</td></tr>}
                    </tbody>
                </table>
            </div>
        </section>
    );
};