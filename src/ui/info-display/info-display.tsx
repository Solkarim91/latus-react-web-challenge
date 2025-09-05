import { Card } from "../card/card";
import mockData from '../../../assets/data/mock-component-data.json';
import styles from "./info-display.module.css";
import { formatTimeRange } from "./utils";
import { IntensityValues } from "./intensity-values/intensity-values";

export const InfoDisplay = () => {
  const { data } = mockData;

  return (
    <div className={styles.container}>
        {data.map(({from, to, intensity}) => (
          <Card>
            <div className={styles.cardContent}>
              <h2>{formatTimeRange(from, to)}</h2>
              <IntensityValues intensityValues={intensity}/>
            </div>
          </Card>
        ))}
    </div>
  );
};
