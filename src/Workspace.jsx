import React from "react";
import { Box, Button, Grid, Paper, Stack, Typography, Chip } from "@mui/material";
import WidgetsOutlinedIcon from "@mui/icons-material/WidgetsOutlined";
import AddRoundedIcon from "@mui/icons-material/AddRounded";

const modules = [
  { title: "Module placeholder", description: "Replace this card with the feature for your second microfrontend.", status: "Ready to customize" },
  { title: "Recent activity", description: "Show latest user actions, updates, or workflow events here.", status: "Dummy data" },
  { title: "Quick actions", description: "Add shortcuts to the screens and actions used most often.", status: "Dummy data" }
];

export default function Workspace() {
  return <Box sx={{ maxWidth: 1300, mx: "auto" }}>
    <Stack direction={{ xs: "column", sm: "row" }} justifyContent="space-between" alignItems={{ xs: "flex-start", sm: "center" }} gap={2} mb={3}>
      <Box>
        <Typography variant="h5" fontWeight={800}>Workspace</Typography>
        <Typography color="text.secondary" fontSize={13} mt={0.6}>This is your second microfrontend. Replace the sample cards with your own module.</Typography>
      </Box>
      <Button variant="contained" startIcon={<AddRoundedIcon />}>Add item</Button>
    </Stack>
    <Paper elevation={0} sx={{ p: 3, border: "1px solid #eef1ef", borderRadius: 3, mb: 2.5 }}>
      <Stack direction="row" gap={2} alignItems="center">
        <Box sx={{ width: 48, height: 48, borderRadius: 2, display: "grid", placeItems: "center", bgcolor: "#e8f5f1", color: "primary.main" }}><WidgetsOutlinedIcon /></Box>
        <Box>
          <Typography fontWeight={750}>Second microfrontend loaded successfully</Typography>
          <Typography color="text.secondary" fontSize={13}>The host app loads this component from the remote app running on port 5175.</Typography>
        </Box>
      </Stack>
    </Paper>
    <Grid container spacing={2}>
      {modules.map((module, index) => <Grid item xs={12} md={4} key={module.title}>
        <Paper elevation={0} sx={{ p: 2.5, height: "100%", border: "1px solid #eef1ef", borderRadius: 3 }}>
          <Chip label={module.status} size="small" sx={{ bgcolor: index === 0 ? "#e8f5f1" : "#f2f4f3", color: index === 0 ? "#267b68" : "#68716e", mb: 2 }} />
          <Typography fontWeight={750} mb={1}>{module.title}</Typography>
          <Typography color="text.secondary" fontSize={13} lineHeight={1.7}>{module.description}</Typography>
        </Paper>
      </Grid>)}
    </Grid>
  </Box>;
}
