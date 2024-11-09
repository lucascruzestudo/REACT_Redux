import { Box, ThemeProvider } from "@mui/material";
import { Header } from "../components/Header";
import { Layout } from "../components/Layout";
import { appTheme } from "../config/theme";

export function PageBase({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider theme={appTheme}>
      <Box
        component="main"
        sx={{
          height: "100vh",
          backgroundColor: (theme) => theme.palette.grey[900],
        }}
      >
        <Header />
        <Layout>{children}</Layout>
      </Box>
    </ThemeProvider>
  );
}
