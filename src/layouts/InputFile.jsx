import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";

// @mui material components
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";

// Material Dashboard 2 React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";

// Data
import projectsTableData from "layouts/tables/data/projectsTableData";
import React, { useState, useRef } from "react";

const InputFile = () => {
  // const { columns: pColumns, rows: pRows } = projectsTableData();
  const [file, setFile] = useState(null);
  const fileInput = useRef();

  const handleFileChange = () => {
    setFile(fileInput.current.files[0]);
  };

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDBox pt={6} pb={3}>
        <Grid container spacing={6}>
          <Grid item xs={12}>
            <Card>
              <Form.Group controlId="formFile" className="mb-3">
                <Form.Label>Default file input example .</Form.Label>
                <Form.Control type="file" ref={fileInput} onChange={handleFileChange} />
              </Form.Group>
            </Card>
          </Grid>
        </Grid>
      </MDBox>
      <Footer />
    </DashboardLayout>
  );
};
export default InputFile;
