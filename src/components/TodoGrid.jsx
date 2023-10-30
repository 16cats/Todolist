import { AgGridReact } from "ag-grid-react";
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-material.css';
import { useRef } from "react";


export default function TodoGrid(props) {

    //stateless
    //gridRef
    const gridRef = useRef(); //gridRefillä on yksi current property

    const columns = [
        { headerName: 'Description', field: 'description', sortable: true, filter: true
    },
        {
            headerName: 'Date', field: 'date', sortable: true, filter: true
        },
        {
            headerName: 'Priority', field: 'priority', sortable: true, filter: true,
            cellStyle: params => params.value > 3 ? { color: 'red' } : { color: 'black' }
        },

    ]
 
    const deleteSelected = () => {
        //alert('En osaa vielä poistaa todota')
        if (gridRef.current.getSelectedNodes().length > 0) {
            const removeIndex = parseInt(gridRef.current.getSelectedNodes()[0].id);
            console.log("removeid:" + removeIndex)
            props.deleteByIndex(removeIndex);
        }else{
            alert('Select row first')
        }
    }

    return (
        <>
            <input type="button" value="Delete" onClick={deleteSelected}/>
            <div className="ag-theme-material"
                style={{ height: '300px', width: '100%', margin: 'auto' }} >

                <AgGridReact
                    rowData={props.todos}
                    columnDefs={columns}
                    rowSelection="single"
                    ref={gridRef}
                    onGridReady={params => gridRef.current = params.api}
                    animateRows= {true}
                >
                </AgGridReact>
            </div>
        </>
    )
}