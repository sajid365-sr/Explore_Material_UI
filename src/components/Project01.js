
import React, { useState } from 'react';
import { Avatar, Button, Typography } from "@mui/material";
import LoadingButton from "@mui/lab/LoadingButton";


const Project01 = () => {

    const [loading, setLoading] = useState(false);

    return (
        <div>
            <div
        style={{
          background: "#f7f7f7",
          width: "400px",
          height: "400px",
          borderRadius: "1rem",
          padding: "2rem",
        }}
      >
        <div 
        style={{
          display:'flex',
          alignItems:'center',
          gap:'20px'
        }}
        >
          <Avatar
            alt="Travis Howard"
            src="https://imageio.forbes.com/specials-images/imageserve/622e4e2c48cfef516b8590a8/Lionel-Messi-wants-to-leave-PSG-and-make-a-sensational-summer-return-to-FC-Barcelona-/960x0.jpg?height=474&width=711&fit=bounds"
            sx={{
              height: "80px",
              width: "80px",
            }}
          />
        <Typography variant="body1" noWrap gutterBottom>
          Lionel Messi
        </Typography>
        </div>
        <Button
          variant="contained"
          disableRipple={true}
          color="secondary"
          fullWidth
          sx={{ mb: 5 }}
        >
          Checkout
        </Button>

        <LoadingButton
          onClick={() => setLoading(true)}
          loading={loading}
          loadingIndicator="Loading…"
          variant="contained"
        >
          Fetch data
        </LoadingButton>
      </div>
        </div>
    );
};

export default Project01;