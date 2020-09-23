import React from "react";
import {
  Typography,
  Grid,
  Button,
  Container,
  Card,
  CardMedia,
  CardActions,
  CardContent,
  fade,
  makeStyles,
  CssBaseline,
} from "@material-ui/core";
import Appbar from "../public/Appbar/AppBar";
import Footer from "../public/footer/footer";
import { recipe, process, info } from "../../lib/api";

const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    paddingTop: "12rem",
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(10),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
  },
  cardMedia: {
    paddingTop: "56.25%", // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(1),
      width: "auto",
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inputRoot: {
    color: "inherit",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

class Foodinfo extends React.Component {
  state = {
    img: [],
    name: [],
    summary: [],
    number: ""
  };

  handleChange = (e) => {
    console.log(e.target.value)
  }

  async componentDidMount() {
    const _data = await info();
    this.setState({
      img: _data.data.img,
      name: _data.data.name,
      summary: _data.data.smry,
    });
  }

  render() {
    const img = this.state.img;
    const name = this.state.name;
    const smry = this.state.summary;

    console.log(img);

    const classes = this.props;
    const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    return (
      <React.Fragment>
        <CssBaseline />
        <Appbar />
        <main>
          <div className={classes.heroContent}>
            <Container maxWidth="sm">
              <Typography
                component="h1"
                variant="h2"
                align="center"
                color="textPrimary"
                gutterBottom
              >
                Recipe Master
              </Typography>
              <Typography
                component="h1"
                variant="body"
                align="center"
                color="textSecondary"
                gutterBottom
              >
                choose one recipe
              </Typography>
            </Container>
          </div>
          <Container className={classes.cardGrid} maxWidth="md">
            <Grid container spacing={4}>
              {cards.map((card, i) => (
                <Grid item key={card} xs={12} sm={6} md={4}>
                  <Card className={classes.card}>
                    <CardMedia
                      className={classes.cardMedia}
                      component="img"
                      alt="recipe img"
                      height="140"
                      image={img[i]}
                      title="Image title"
                    />
                    <CardContent className={classes.cardContent}>
                      <Typography gutterBottom variant="h5" component="h2">
                        {name[i]}
                      </Typography>
                      <Typography>{smry[i]}</Typography>
                    </CardContent>
                    <CardActions>
                      <Button
                        type = "button"
                        href="/recipe"
                        size="small"
                        color="primary"
                        onChange = {(e) => this.handleChange(e)}
                      >
                        Show
                      </Button>
                      <Button size="small" color="primary">
                        Edit
                      </Button>
                    </CardActions>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Container>
        </main>
        <Footer />
      </React.Fragment>
    );
  }
}
export default Foodinfo;
