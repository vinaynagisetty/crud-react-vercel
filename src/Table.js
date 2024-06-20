function Table(props) {
    return (
        <>

            <table className="table m-3">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>name</th>
                        <th>price</th>
                        <th>price</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>

                    {
                        props.products.map(
                            (item) => {
                                return <tr key={item.id}>
                                    <td>{item.id}</td>
                                    <td>{item.name}</td>
                                    <td>{item.price}</td>
                                    <td>{item.category}</td>
                                    <td>
                                        <button className="btn btn-primary m-2"
                                      onClick={
                                        ()=>{
                                            props.edit(item)
                                        }
                                      }  >Edit</button>
                                        <button className="btn btn-danger" onClick={
                                            () => {
                                                props.delete(item.id)
                                            }

                                        } >Delete</button>
                                    </td>
                                </tr>
                            }
                        )
                    }

                </tbody>

            </table>


        </>
    )
}
export default Table;