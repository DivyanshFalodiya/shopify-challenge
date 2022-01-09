import {
  Event,
  FavoriteBorder,
  Favorite,
  LocationOnRounded,
  OpenInNew,
} from "@mui/icons-material";
import {
  CardMedia,
  Dialog,
  DialogContent,
  DialogTitle,
  Divider,
  Typography,
  Box,
  CardActions,
  Tooltip,
  IconButton,
  Grid,
} from "@mui/material";
import { useState } from "react";
import { Link } from "react-router-dom";

const CardDialog = ({ data, image, open, handleClose, functions }) => {
  return (
    <Dialog open={open} onClose={handleClose} scroll="body">
      <DialogTitle>{data.title}</DialogTitle>
      <DialogContent>
        <CardMedia
          image={image}
          sx={{ pt: "56.25%", mb: 1, borderRadius: 2 }}
        />
        {data.location && (
          <Grid container>
            <Grid
              item
              xs={12}
              sm={6}
              sx={{ display: "flex", alignItems: "center" }}
            >
              <LocationOnRounded color="warning" />
              <Typography variant="caption">{data.location}</Typography>
            </Grid>
            <Grid
              item
              xs={12}
              sm={6}
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "flex-end",
              }}
            >
              <Typography variant="caption" color="text.disabled">
                {functions.formatDate(data.date_created)}
              </Typography>
            </Grid>
          </Grid>
        )}
        <Divider sx={{ mt: 1 }} />
        <CardActions sx={{ display: "flex", justifyContent: "space-between" }}>
          <Box>
            <Tooltip title={data.love ? "Unlike" : "Love"}>
              <IconButton onClick={functions.toggleLove}>
                {data.love ? (
                  <Favorite color="error" />
                ) : (
                  <FavoriteBorder color="error" />
                )}
              </IconButton>
            </Tooltip>
            <Tooltip title="Share">
              <IconButton onClick={functions.toggleLove}>
                {data.love ? (
                  <Favorite color="error" />
                ) : (
                  <FavoriteBorder color="error" />
                )}
              </IconButton>
            </Tooltip>
          </Box>
          <Box>
            <Tooltip title="Open Image">
              <a href={image} target="_blank" rel="noopener noreferrer">
                <OpenInNew sx={{ color: "primary.main" }} />
              </a>
            </Tooltip>
          </Box>
        </CardActions>
        <Divider sx={{ mb: 1 }} />
        <Typography color="text.disabled">{data.description}</Typography>
        {/* <Box display="flex" alignItems="flex-start">
          <Event sx={{ mr: 1 }} color="primary" />
          <Typography color="text.disabled">
            {functions.formatDate(data.date_created)}
            {` (${functions.formatDateWithDay(data.date_created)})`}
          </Typography>
        </Box> */}
      </DialogContent>
    </Dialog>
  );
};

export default CardDialog;
