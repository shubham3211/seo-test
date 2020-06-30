import React from "react";
import Overview from "./Oerview";
import GoogleInfo from "./Google/GoogleInfo";
import Google from "./assets/google.svg";
import facebookAnalytics from "./assets/facebookAnalytics.png";
import analytics from "./assets/analytics.png";
import Success from "./Success";
import { Box } from "@material-ui/core";
import Transform from "./Transform";
import FreeRisk from "./FreeRisk";
import Faq from "./Faq";
import Contact from "./Contact";
import Carousel from "./Carousel";

function App() {
  return (
    <>
      <Overview />
      <Box style={{ marginTop: "200px" }}>
        <GoogleInfo
          image={Google}
          imageWidth={526}
          imageHeight={380}
          heading="SEO Services that actually drives big results"
          text="Get a targetted personalised SEO strategies and game-plan, which maximizes your website potential, resulting in maximum online exposure. We drive traffic and customers to your site.Backed by a young team of experienced, strategic, technical and creative specialists to drive digital success for your company. Our technical and content teams will optimise your site using meticulously researched and chosen key phrases, ensuring top SEO results, which will enable your website to attract a significant increase in targeted traffic.    "
        />
      </Box>
      <Box style={{ marginTop: "200px" }}>
        <GoogleInfo
          image={analytics}
          change
          imageWidth={509}
          imageHeight={385}
          heading="ABM"
          text="Account based marketing is a form of marketing that uses highly targeted, personalized campaigns to win over particular accounts. Rather than relying on blanket campaigns that are meant to appeal to an entire market, ABM treats “individual accounts as markets in their own right” 
        Instead of ending with a target company that’s a good fit for you to sell to (after you’ve filtered out all the bad leads), with ABM, you start with target companies. You identify the biggest opportunities at the beginning and then proactively go after them."
        />
      </Box>
      <Box style={{ marginTop: "200px" }}>
        <GoogleInfo
          imageWidth={503}
          imageHeight={324}
          image={facebookAnalytics}
          heading="Paid Media
Google Ads | Facebook Ads  Youtube Ads
        "
          text="Get a targetted personalised SEO strategies and game-plan, which maximizes your website potential, resulting in maximum online exposure. We drive traffic and customers to your site.Backed by a young team of experienced, strategic, technical and creative specialists to drive digital success for your company. Our technical and content teams will optimise your site using meticulously researched and chosen key phrases, ensuring top SEO results, which will enable your website to attract a significant increase in targeted traffic.    "
        />
      </Box>
      <Box style={{ marginTop: "200px" }}>
        <Carousel />
      </Box>
      <Box style={{ marginTop: "212px" }}>
        <Success />
      </Box>
      <Box style={{ marginTop: "200px" }}>
        <Transform />
      </Box>
      <Box style={{ marginTop: "200px" }}>
        <FreeRisk />
      </Box>
      <Box style={{ marginTop: "200px" }}>
        <Faq />
      </Box>
      <Box style={{ marginTop: "200px" }}>
        <Contact />
      </Box>
    </>
  );
}

export default App;
