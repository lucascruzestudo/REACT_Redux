import { Box, Button, Typography } from "@mui/material";
import { PageBase } from "../../templates/page";
import { useAppSelector } from "../../app/hooks";
import { selectCategories } from "./categorySlice";
import { Link } from "react-router-dom";
import { DataGrid, GridColDef, GridRowsProp } from "@mui/x-data-grid";

export function ListCategory() {
  const categories = useAppSelector(selectCategories);

  const rows: GridRowsProp = categories.map((category) => ({
    id: category.id,
    name: category.name,
    description: category.description,
  }));

  const columns: GridColDef[] = [
    { field: "id", headerName: "ID", width: 300 },
    { field: "name", headerName: "Name", width: 150 },
    { field: "description", headerName: "Description", width: 250 },
  ];

  return (
    <PageBase>
      <Box maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
        <Box display="flex" justifyContent="flex-end">
          <Button
            variant="contained"
            color="secondary"
            component={Link}
            to="/categories/create"
            style={{ marginBottom: "1rem" }}
          >
            New Category
          </Button>
        </Box>

        <Typography variant="h3" component="h3">
          <DataGrid 
          rows={rows} columns={columns} getRowId={(row) => row.id} />
        </Typography>
      </Box>
    </PageBase>
  );
}
