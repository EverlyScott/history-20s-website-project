import { GetStaticPaths, GetStaticProps } from "next";
import MetaHead from "../../components/meta-head";
import articles from "../../assets/json/fake-newspapers.json";
import Layout from "../../components/layout";
import styles from "../../styles/Article.module.scss";
import { Typography } from "@mui/material";

interface IProps {
  article: Article;
}

interface Article {
  id: string;
  title: string;
  author: string;
  date: string;
  data: string;
  image: string;
}

const Article: React.FC<IProps> = ({ article }) => {
  return (
    <Layout
      headerTitle={article.title}
      headerBlurb={
        <>
          {article.author} &bull; {article.date}
        </>
      }
      headerImage={article.image}
    >
      <MetaHead baseTitle={article.title} />
      <div className={styles.container}>
        {article.data.split("\n").map((data) => {
          return <Typography sx={{ margin: "16px 0" }}>{data}</Typography>;
        })}
      </div>
    </Layout>
  );
};

export default Article;

export const getStaticProps: GetStaticProps<IProps> = async (context) => {
  const articleId = context.params!.id!.toString();
  let article;

  for (let i = 0; i < articles.length; i++) {
    if (articles[i].id === articleId) {
      article = articles[i];
      break;
    }
  }

  if (article) {
    return {
      props: {
        article,
      },
      revalidate: 60 * 60, // 1 hour
    };
  } else {
    return {
      props: { article: null },
      notFound: true,
    };
  }
};

export const getStaticPaths: GetStaticPaths = async (context) => {
  const paths: Array<{ params: { id: string } }> = [];

  articles.map((article) => {
    paths.push({
      params: {
        id: article.id,
      },
    });
  });

  return {
    paths,
    fallback: "blocking",
  };
};
