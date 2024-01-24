import Title from "../../atoms/Title/Title";
import Container from "../../atoms/Container/Container";
import styles from "./HeroItem.module.scss";
import Video from "../../atoms/Video/Video";
import Paragraph from "../../atoms/P/P";

const HeroItem = ({ imageUrl, text }) => {
  return (
    <div className={styles.item}>
      <div className={styles.overlay} />
      <Container className={styles.container}>
        <Title color="white">
          TRANSFORMA TU GESTIÓN DE RECURSOS HUMANOS CON LA SOLUCIÓN QUE ESTÁS
          BUSCANDO
        </Title>
        <Paragraph color="white">
          Maximiza el rendimiento en la selección de personal para tu empresa.
        </Paragraph>
      </Container>
      <Video/>
    </div>
  );
};

export default HeroItem;
