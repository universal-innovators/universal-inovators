import React from "react";
import { Card, CardContent, Typography, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  card: {
    borderRadius: "12px",
    boxShadow: "0 6px 18px rgba(0,0,0,0.1)",
    margin: "20px 0",    
    "&:hover": {
      transform: "translateY(-2px)",
      boxShadow: "0 10px 24px rgba(0,0,0,0.2)",
    },
  },
  title: {
    fontWeight: "bold",
    fontSize: "18px",
    marginBottom: theme.spacing(1),
    color: "#000",
  },
  desc: {
    fontSize: "14px",
    color: "#444",
    marginBottom: theme.spacing(2),
  },
  button: {
    backgroundColor: "#002d62",
    color: "#fff",
    textTransform: "none",
    fontWeight: "600",
    padding: "6px 16px",
    "&:hover": {
      backgroundColor: "#001a3d",
    },
  },
}));
const journals = [
  {
    title: "INTERNATIONAL JOURNAL ON DATA PROCESSING & NETWORKING",
    description:
      "The International Journal on Data Processing & Networking (IJDPN) is an interdisciplinary refereed journal that focuses on the latest advancements and innovations in data processing and networking. The journal aims to bridge the gap between theoretical research and practical applications, providing a platform for researchers, professionals, and academics to share cutting-edge developments and trends in data processing, communication networks, and related disciplines.",
    link: "https://ijdpn.ui-journals.com/index.php/journal/about",
  }
];
export default function JournalCard() {
  const classes = useStyles();

  return (
    journals.map(({title,description,link})=>{
        return <Card className={classes.card}>
      <CardContent>
        <Typography className={classes.title}>{title}</Typography>
        <Typography className={classes.desc}>{description}</Typography>
        <Button
          variant="contained"
          className={classes.button}
          href={link}
          target="_blank"
          rel="noopener noreferrer"
        >
          Visit Journal
        </Button>
      </CardContent>
    </Card>
    })
    
  );
}
