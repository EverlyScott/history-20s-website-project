import Layout from "../components/layout";
import MetaHead from "../components/meta-head";
import styles from "../styles/Home.module.scss";
import fakeNewsPapers from "../assets/json/fake-newspapers.json";
import sponsoredArticle from "../assets/json/sponsor.json";
import headlineArticle from "../assets/json/headline.json";
import { useEffect, useState } from "react";
import Article from "../components/article";
import MoreButton from "../components/more-button";

const Home: React.FC = () => {
  const [adRandomPlacement, setAdRandomPlacement] = useState<number>(0);
  const [randomizedArticles, setRandomizedArticles] = useState(fakeNewsPapers);

  useEffect(() => {
    setAdRandomPlacement(Math.floor(Math.random() * fakeNewsPapers.length));
    for (let i = fakeNewsPapers.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [fakeNewsPapers[i], fakeNewsPapers[j]] = [fakeNewsPapers[j], fakeNewsPapers[i]];
    }

    setRandomizedArticles(fakeNewsPapers);
  }, []);

  return (
    <Layout
      headerTitle={headlineArticle.title}
      headerBlurb={headlineArticle.blurb}
      headerImage={headlineArticle.image}
      headerLink={`/article/${headlineArticle.id}`}
    >
      <MetaHead />
      <div className={styles.container}>
        <div className={styles.main}>
          {randomizedArticles.map((article, i) => {
            return (
              <>
                {adRandomPlacement === i && (
                  <Article
                    url={`/article/${sponsoredArticle.id}`}
                    title={sponsoredArticle.title}
                    date="Sponsored"
                    data={sponsoredArticle.data}
                    image={sponsoredArticle.image}
                    isAd
                  />
                )}
                <Article
                  id={article.id}
                  title={article.title}
                  date={article.date}
                  data={article.data}
                  image={article.image}
                />
              </>
            );
          })}
        </div>
        <MoreButton />
      </div>
    </Layout>
  );
};

export default Home;
