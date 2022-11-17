import MetaHead from "../../components/meta-head";
import headlineArticle from "../../assets/json/headline.json";
import Layout from "../../components/layout";
import styles from "../../styles/Article.module.scss";
import { Typography } from "@mui/material";

const Article: React.FC = () => {
  return (
    <Layout
      headerTitle={headlineArticle.title}
      headerBlurb={
        <>
          {headlineArticle.author} &bull; {headlineArticle.date}
        </>
      }
      headerImage={headlineArticle.image}
    >
      <MetaHead baseTitle={headlineArticle.title} />
      <div className={styles.container}>
        <Typography>{headlineArticle.blurb}</Typography>
        <Divider />
        <Typography component="h3" variant="h5">
          Why They're Bad
        </Typography>
        <Typography>
          Automobiles have several bad consequences for us. They're loud, they create pollution, they make our taxes go
          up, and automobile manufacturers are making up words like "jay&nbsp;walking" just to scare us off the road so
          drivers can have even more of a control on our city; finally, automobiles are even killing people! Cars are
          also causing people to move out their home cities more often, causing the community to break up, and they're
          also causing issues like suburbia and the further separation of classes. Now that automobiles are gaining
          popularity, many industries
        </Typography>
      </div>
    </Layout>
  );
};

const Divider: React.FC = () => {
  return <div style={{ height: "1rem" }} />;
};

export default Article;
