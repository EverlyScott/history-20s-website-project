import { Container } from "@mui/material";
import { StaticImageData } from "next/image";
import { CSSProperties } from "react";
import styles from "./styles.module.scss";

interface IProps extends React.PropsWithChildren {
  image: string | StaticImageData;
  imagePosition?: string | number;
}

const FullWidthContent: React.FC<IProps> = ({ image, imagePosition, children }) => {
  return (
    <section
      className={styles.container}
      style={{ backgroundImage: `url(${image})`, backgroundPosition: imagePosition }}
    >
      <div className={styles.content}>
        <Container className={styles.childrenContainer}>{children}</Container>
      </div>
    </section>
  );
};

export default FullWidthContent;
