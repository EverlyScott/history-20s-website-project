import { Typography } from "@mui/material";
import sponsorData from "../../assets/json/sponsor.json";
import Layout from "../../components/layout";
import MetaHead from "../../components/meta-head";
import styles from "../../styles/Sponsor.module.scss";

const Sponsor: React.FC = () => {
  return (
    <Layout
      headerTitle={sponsorData.title}
      headerImage={sponsorData.image}
      headerBlurb={<Typography variant="caption">SPONSORED</Typography>}
    >
      <MetaHead baseTitle={sponsorData.title} />
      <div className={styles.container}>asdf</div>
    </Layout>
  );
};

export default Sponsor;
