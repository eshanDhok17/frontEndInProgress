import { DeleteOutline, Edit } from "@material-ui/icons";
export const userDataColumns = [
    {
        field: "id",
        headerName: "ID",
        width: 200,
    },
    {
        field: "name",
        headerName: "Name",
        width: 200,
    },
    {
        field: "username",
        headerName: "Username",
        width: 200,
    },
    {
        field: "status",
        headerName: "Status",
        width: 200,
    },
    {
        field: "totalItems",
        headerName: "Total Items",
        width: 200,
    },
    {
        field: "Action",
        headerName: "Action",
        width: 200,
        renderCell: (params) => {
            return (
                <>
                    <button className="userListEdit">
                        <Edit />
                    </button>
                    <button className="userListDelete">
                        <DeleteOutline />
                    </button>
                </>
            );
        },
    }
]