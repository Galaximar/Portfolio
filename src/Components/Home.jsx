import NavBar from "./NavBar";
import Menu from "./Menu";
import { Button, makeStyles } from "@material-ui/core";
import style from "./Home.module.scss";
import Body from "./Body";
import ScrollTo from "./ScrollTo";
import { Fab } from "@mui/material";
import NavigationIcon from "@mui/icons-material/Navigation";

const useStyles = makeStyles((theme) => ({
  offset: theme.mixins.toolbar,
}));

export default function Home() {
  return (
    <>
      <div>
        <Body />
        <ScrollTo />
      </div>
    </>
  );
}
