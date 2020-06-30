import React from "react";
import { makeStyles } from "@material-ui/styles";
import { Grid, Typography, Box, Button } from "@material-ui/core";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%"
  },
  heading: {
    fontSize: "36px",
    lineHeight: "49px",
    color: "#353535",
    textAlign: "center",
    letterSpacing: "0.03em"
  },
  smallFont: {
    fontSize: "14px",
    lineHeight: "19px",
    color: "#556B82",
    width: "348px"
  },
  extraText: {
    color: "#5AB5F9",
    lineHeight: "19px",
    fontSize: "14px"
  },
  panelHeading: {
    flexBasis: "100%",
    textAlign: "center",
    fontSize: "18px",
    lineHeight: "25px",
    letterSpacing: "0.03em",
    color: "#556B82",
    paddingTop: "25px",
    paddingBottom: "25px"
  },
  panelDetail: {
    flexBasis: "100%",
    fontSize: "14px",
    lineHeight: "22px",
    textAlign: "center",
    letterSpacing: "0.03em",
    color: "#6B7E92"
  },
  expansionPanel: {
    boxShadow: "0px 0px 0px 0px"
  },
  expansionPanelSummary: {
    ":before": {
      backgroundColor: "rgba(0, 0, 0, 0)"
    },
    boxShadow: "0px 0px 0px 0px",
    border: "0px solid none"
  }
}));

function Faq() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = panel => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  return (
    <Grid container justify="center">
      <Grid item xs={12}>
        <Typography className={classes.heading}>
          Frequently Asked Questions
        </Typography>
      </Grid>
      <Grid item xs={9}>
        <Box mt={5}>
          <ExpansionPanel
            expanded={expanded === "panel1"}
            onChange={handleChange("panel1")}
            className={classes.expansionPanel}
          >
            <ExpansionPanelSummary
              expandIcon={<ExpandMoreIcon color="primary" />}
              aria-controls="panel1bh-content"
              id="panel1bh-header"
              className={classes.expansionPanelSummary}
            >
              <Typography className={classes.panelHeading}>
                General settings
              </Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              <Typography className={classes.panelDetail}>
                Nulla facilisi. Phasellus sollicitudin nulla et quam mattis
                feugiat. Aliquam eget maximus est, id dignissim quam.
              </Typography>
            </ExpansionPanelDetails>
          </ExpansionPanel>
          <ExpansionPanel
            expanded={expanded === "panel2"}
            onChange={handleChange("panel2")}
            className={classes.expansionPanel}
          >
            <ExpansionPanelSummary
              expandIcon={<ExpandMoreIcon color="primary" />}
              aria-controls="panel2bh-content"
              id="panel2bh-header"
            >
              <Typography className={classes.panelHeading}>Users</Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              <Typography className={classes.panelDetail}>
                Donec placerat, lectus sed mattis semper, neque lectus feugiat
                lectus, varius pulvinar diam eros in elit. Pellentesque
                convallis laoreet laoreet.
              </Typography>
            </ExpansionPanelDetails>
          </ExpansionPanel>
          <ExpansionPanel
            expanded={expanded === "panel3"}
            onChange={handleChange("panel3")}
            className={classes.expansionPanel}
          >
            <ExpansionPanelSummary
              expandIcon={<ExpandMoreIcon color="primary" />}
              aria-controls="panel3bh-content"
              id="panel3bh-header"
            >
              <Typography className={classes.panelHeading}>
                Advanced settings
              </Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              <Typography className={classes.panelDetail}>
                Nunc vitae orci ultricies, auctor nunc in, volutpat nisl.
                Integer sit amet egestas eros, vitae egestas augue. Duis vel est
                augue.
              </Typography>
            </ExpansionPanelDetails>
          </ExpansionPanel>
          <ExpansionPanel
            expanded={expanded === "panel4"}
            onChange={handleChange("panel4")}
            className={classes.expansionPanel}
          >
            <ExpansionPanelSummary
              expandIcon={<ExpandMoreIcon color="primary" />}
              aria-controls="panel4bh-content"
              id="panel4bh-header"
            >
              <Typography className={classes.panelHeading}>
                Personal data
              </Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              <Typography className={classes.panelDetail}>
                Nunc vitae orci ultricies, auctor nunc in, volutpat nisl.
                Integer sit amet egestas eros, vitae egestas augue. Duis vel est
                augue.
              </Typography>
            </ExpansionPanelDetails>
          </ExpansionPanel>
        </Box>
      </Grid>
      <Grid item xs={12} style={{textAlign: "center"}}>
        <Button variant="contained" color="primary" size="large">
          Still have unasnwered questions? Get in touch.
        </Button>
      </Grid>
    </Grid>
  );
}

export default Faq;
