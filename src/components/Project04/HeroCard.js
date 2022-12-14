import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/system";
import { IconButton } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

const HeroCard = () => {
  return (
    <div>
      <Card sx={{ maxWidth: 345, p: 2 }}>
        <CardMedia
          component="img"
          height="140"
          image="https://mui.com/static/images/cards/contemplative-reptile.jpg"
          alt="green iguana"
          sx={{
            borderRadius: 1,
            height: 180,
          }}
        />
        <CardContent
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            p: 0,
            pt: 4,
          }}
        >
          <Box>
            <Typography
              sx={{ textAlign: "left" }}
              gutterBottom
              variant="h5"
              component="div"
            >
              Lizard
            </Typography>
            <Typography
              sx={{ textAlign: "left" }}
              variant="body2"
              color="primary.main"
            >
              Lizards are a widespread group of squamate reptiles.
            </Typography>
          </Box>
          <IconButton
            sx={{
              border: "1px solid #ddd",
            }}
          >
            <AddIcon />
          </IconButton>
        </CardContent>
      </Card>
    </div>
  );
};

export default HeroCard;
