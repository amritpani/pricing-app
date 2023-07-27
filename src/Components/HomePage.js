import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import DoneIcon from "@mui/icons-material/Done";
import CloseIcon from "@mui/icons-material/Close";

const boldTextStyle = {
  fontWeight: "bold",
};

const HomePage = () => {
  const textStyleCard1 = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "lightgreen",
    color: "white",
    height: "100px",
  };
  const textStyleCard2 = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "blue",
    color: "white",
    height: "100px",
  };
  const textStyleCard3 = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FF8000",
    color: "white",
    height: "100px",
  };

  const button1 = {
    padding: "50px",
    color: "lightgreen",
    fontSize: "50px",
  };
  const button2 = {
    padding: "50px",
    color: "blue",
    fontSize: "50px",
  };
  const button3 = {
    padding: "50px",
    color: "#FF8000",
    fontSize: "50px",
  };
  return (
    <Grid container spacing={1} sx={{ margin: 20 }}>
      <Grid item sm={4}>
        <Card sx={{ maxWidth: 250, height: 400, borderRadius: "20px" }}>
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            style={{ ...textStyleCard1, ...boldTextStyle }}
          >
            Basic
          </Typography>
          <CardContent>
            <Grid container alignItems="center" spacing={2}>
              <Grid item>
                <DoneIcon
                  color="primary"
                  fontSize="large"
                  style={{ color: "green", fontSize: 25 }}
                />
              </Grid>
              <Grid item>
                <Typography
                  variant="body1"
                  style={{ ...boldTextStyle, fontSize: 15 }}
                >
                  Sample Text Here
                </Typography>
              </Grid>
            </Grid>
            <Grid container alignItems="center" spacing={2}>
              <Grid item>
                <CloseIcon
                  color="primary"
                  fontSize="large"
                  style={{ color: "red", fontSize: 25 }}
                />
              </Grid>
              <Grid item>
                <Typography
                  variant="body1"
                  style={{ ...boldTextStyle, fontSize: 15 }}
                >
                  Other Text Title
                </Typography>
              </Grid>
            </Grid>
            <Grid container alignItems="center" spacing={2}>
              <Grid item>
                <CloseIcon
                  color="primary"
                  fontSize="large"
                  style={{ color: "red", fontSize: 25 }}
                />
              </Grid>
              <Grid item>
                <Typography
                  variant="body1"
                  style={{ ...boldTextStyle, fontSize: 15 }}
                >
                  Text Space Goes Here
                </Typography>
              </Grid>
            </Grid>
            <Grid container alignItems="center" spacing={2}>
              <Grid item>
                <CloseIcon
                  color="primary"
                  fontSize="large"
                  style={{ color: "red", fontSize: 25 }}
                />
              </Grid>
              <Grid item>
                <Typography
                  variant="body1"
                  style={{ ...boldTextStyle, fontSize: 15 }}
                >
                  Description Space
                </Typography>
              </Grid>
            </Grid>
          </CardContent>
          <CardActions>
            <Typography style={{ ...button1 }}>$2.99</Typography>
          </CardActions>
        </Card>
      </Grid>

      <Grid item sm={4}>
        <Card sx={{ maxWidth: 250, height: 400, borderRadius: "20px" }}>
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            style={{ ...textStyleCard2, ...boldTextStyle }}
          >
            Standard
          </Typography>
          <CardContent>
            <Grid container alignItems="center" spacing={2}>
              <Grid item>
                <DoneIcon
                  color="primary"
                  fontSize="large"
                  style={{ color: "green", fontSize: 25 }}
                />
              </Grid>
              <Grid item>
                <Typography
                  variant="body1"
                  style={{ ...boldTextStyle, fontSize: 15 }}
                >
                  Sample Text Here
                </Typography>
              </Grid>
            </Grid>
            <Grid container alignItems="center" spacing={2}>
              <Grid item>
                <DoneIcon
                  color="primary"
                  fontSize="large"
                  style={{ color: "green", fontSize: 25 }}
                />
              </Grid>
              <Grid item>
                <Typography
                  variant="body1"
                  style={{ ...boldTextStyle, fontSize: 15 }}
                >
                  Other Text Title
                </Typography>
              </Grid>
            </Grid>
            <Grid container alignItems="center" spacing={2}>
              <Grid item>
                <DoneIcon
                  color="primary"
                  fontSize="large"
                  style={{ color: "green", fontSize: 25 }}
                />
              </Grid>
              <Grid item>
                <Typography
                  variant="body1"
                  style={{ ...boldTextStyle, fontSize: 15 }}
                >
                  Text Space Goes Here
                </Typography>
              </Grid>
            </Grid>
            <Grid container alignItems="center" spacing={2}>
              <Grid item>
                <CloseIcon
                  color="primary"
                  fontSize="large"
                  style={{ color: "red", fontSize: 25 }}
                />
              </Grid>
              <Grid item>
                <Typography
                  variant="body1"
                  style={{ ...boldTextStyle, fontSize: 15 }}
                >
                  Description Space
                </Typography>
              </Grid>
            </Grid>
          </CardContent>
          <CardActions>
            <Typography style={{ ...button2 }}>$5.99</Typography>
          </CardActions>
        </Card>
      </Grid>

      <Grid item sm={4}>
        <Card sx={{ maxWidth: 250, height: 400, borderRadius: "20px" }}>
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            style={{ ...textStyleCard3, ...boldTextStyle }}
          >
            Premium
          </Typography>
          <CardContent>
            <Grid container alignItems="center" spacing={2}>
              <Grid item>
                <DoneIcon
                  color="primary"
                  fontSize="large"
                  style={{ color: "green", fontSize: 25 }}
                />
              </Grid>
              <Grid item>
                <Typography
                  variant="body1"
                  style={{ ...boldTextStyle, fontSize: 15 }}
                >
                  Sample Text Here
                </Typography>
              </Grid>
            </Grid>
            <Grid container alignItems="center" spacing={2}>
              <Grid item>
                <DoneIcon
                  color="primary"
                  fontSize="large"
                  style={{ color: "green", fontSize: 25 }}
                />
              </Grid>
              <Grid item>
                <Typography
                  variant="body1"
                  style={{ ...boldTextStyle, fontSize: 15 }}
                >
                  Other Text Title
                </Typography>
              </Grid>
            </Grid>
            <Grid container alignItems="center" spacing={2}>
              <Grid item>
                <DoneIcon
                  color="primary"
                  fontSize="large"
                  style={{ color: "green", fontSize: 25 }}
                />
              </Grid>
              <Grid item>
                <Typography
                  variant="body1"
                  style={{ ...boldTextStyle, fontSize: 15 }}
                >
                  Text Space Goes Here
                </Typography>
              </Grid>
            </Grid>
            <Grid container alignItems="center" spacing={2}>
              <Grid item>
                <DoneIcon
                  color="primary"
                  fontSize="large"
                  style={{ color: "green", fontSize: 25 }}
                />
              </Grid>
              <Grid item>
                <Typography
                  variant="body1"
                  style={{ ...boldTextStyle, fontSize: 15 }}
                >
                  Description Space
                </Typography>
              </Grid>
            </Grid>
          </CardContent>
          <CardActions>
            <Typography style={{ ...button3 }}>$8.99</Typography>
          </CardActions>
        </Card>
      </Grid>
    </Grid>
  );
};

export default HomePage;
