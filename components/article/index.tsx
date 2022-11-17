import { Paper, Typography } from "@mui/material";
import Link from "next/link";
import styles from "./styles.module.scss";

interface IProps {
  id?: string;
  url?: string;
  title: string;
  date: string;
  data: string;
  image?: string;
  isAd?: boolean;
}

const Article: React.FC<IProps> = ({ id, url, title, date, data, image, isAd }) => {
  return (
    <Link href={id ? `/article/${id}` : url ?? ""}>
      <Paper className={styles.article}>
        <div className={styles.articleImg} style={{ backgroundImage: `url(${image})` }}>
          {isAd && <span className={styles.adText}>Ad</span>}
        </div>
        <div className={styles.articleBody}>
          <Typography className={styles.articleTitle} component="h2" variant="h6">
            {title}
          </Typography>
          <Typography className={styles.articleDate} variant="caption">
            {date}
          </Typography>
          <Typography className={styles.articlePreview}>{data}</Typography>
        </div>
      </Paper>
    </Link>
  );
};

export default Article;
