export const TableSection = ({ headers, currentRecords, deleteItem, showItemUpdate }: any) => {
    return (
        <section className="shadow-lg">
            <div className="overflow-x-auto">
                <table className="w-full table-fixed min-w-max">
                    <thead>
                        <tr className="shadow-lg">
                            {headers.map((header: any, index: number) => (
                                <th key={index} className="text-left px-4 py-2 w-[200px]">{header}</th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {currentRecords.length > 0 ? currentRecords.map((item: any) => (
                            <tr key={item.id}>
                                <td className="px-4 py-2 break-words w-[200px]">{item.fullName}</td>
                                <td className="px-4 py-2 break-words w-[200px]">{item.email}</td>
                                <td className="px-4 py-2 break-words w-[200px]">{item.address}, {item.city}</td>
                                <td className="px-4 py-2 break-words w-[200px]">{item.country}</td>
                                <td className="px-4 py-2 break-words w-[200px]">
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