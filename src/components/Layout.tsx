import { Box, Container } from "@mui/material";

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <Box>
      <Container maxWidth="lg" sx={{ mt: 4, mb: 4, bgcolor: 'red' }}>
        {children}
      </Container>

    </Box>
  );
}
