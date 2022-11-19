import MetaHead from "../../components/meta-head";
import headlineArticle from "../../assets/json/headline.json";
import Layout from "../../components/layout";
import styles from "../../styles/Article.module.scss";
import { Container, Typography } from "@mui/material";
import FullWidthContent from "../../components/full-width-content";
import Link from "next/link";

//Import images
import jaywalking from "../../assets/img/automobiles-might-not-be-good-for-us/jaywalking.jpg";
import accidents from "../../assets/img/automobiles-might-not-be-good-for-us/accidents.jpeg";
import family from "../../assets/img/automobiles-might-not-be-good-for-us/family.jpg";
import pollution from "../../assets/img/automobiles-might-not-be-good-for-us/pollution.jpg";

const Article: React.FC = () => {
  return (
    <Layout
      noContainer
      headerTitle={headlineArticle.title}
      headerBlurb={
        <>
          <Typography>
            {headlineArticle.author} &bull; {headlineArticle.date} &bull;{" "}
            <Link
              target="_blank"
              href="https://docs.google.com/document/d/19mXBAP9zdEjAmWRLoC_XM2j-EH7eL0oNd3WmTiQ4LKw/edit?usp=sharing"
              style={{ textDecoration: "underline" }}
            >
              Google Doc
            </Link>
          </Typography>
          <br />
          <Typography>{headlineArticle.blurb}</Typography>
        </>
      }
      headerImage={headlineArticle.image}
    >
      <MetaHead baseTitle={headlineArticle.title} />
      <div className={styles.container} style={{ scrollSnapType: "y mandatory" }}>
        <FullWidthContent image={jaywalking.src}>
          <Typography component="h3" variant="h5">
            Introduction
          </Typography>
          <Typography>
            Automobiles have several bad consequences for us. They're loud, they create pollution, they make our taxes
            go up, and automobile manufacturers are making up words like "jay&nbsp;walking" just to scare us off the
            road so drivers can have even more of a control on our city; finally, automobiles are even killing people!
            Automobiles are also causing people to move out of their home cities more often, causing the community to
            get disconnected, and they're also causing issues like suburbia and the further separation of classes.
          </Typography>
        </FullWidthContent>
        <FullWidthContent image={accidents.src}>
          <Typography component="h3" variant="h5">
            Traffic Accidents
          </Typography>
          <Typography>
            You may be seeing more automobiles on your way to work; this is because many more Americans are starting to
            operate automobiles. These automobiles are amazing for us when operated correctly, but as many Americans
            today have not had adequate training. There have been a significant amount of accidents, and that along with
            having few laws on the road has made driving become dangerous even with seatbelt and airbags.
          </Typography>
        </FullWidthContent>
        <FullWidthContent image={family.src} imagePosition="center 0px">
          <Typography component="h3" variant="h5">
            Disconnected Families
          </Typography>
          <Typography>
            The liberty of owning and driving an automobile feels amazing, but family is a much better feeling. Many
            Americans have found this new freedom with an "escape" from their household. This has sadly diminished the
            social events that would take place like family outings and get-togethers replaced by social gatherings with
            friends or other groups. This form of "escape" may seem nice but losing family bonds and duties can have a
            detrimental effect on households today.
          </Typography>
        </FullWidthContent>
        <FullWidthContent image={pollution.src}>
          <Typography component="h3" variant="h5">
            Air Pollution
          </Typography>
          <Typography>
            Waking up to noisy automobiles clouding streets may sound like a foggy city dream, but that's what things
            are starting to be like. Everyone is finding that automobiles are a useful way to get around, and that
            pollution comes with it. Automobiles that were released earlier in the 1920s were more inefficient than
            later automobiles but the manufacturers' capitalist mindset means the environment has to suffer. Automobile
            companies have not taken account of the effect automobiles have on the pollution in our cities and towns.
            This is not only your problem due to you living on the earth, but it also affects the wellbeing and health
            of humans everywhere.
          </Typography>
        </FullWidthContent>
      </div>
    </Layout>
  );
};

const Divider: React.FC = () => {
  return <div style={{ height: "1rem" }} />;
};

export default Article;
