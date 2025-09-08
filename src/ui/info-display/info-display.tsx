import { Card } from "../card/card";
import mockData from '../../../assets/data/mock-component-data.json';
import styles from "./info-display.module.css";
import { formatTimeRange } from "./utils";
import { IntensityValues } from "./intensity-values/intensity-values";
import { FC } from "react";
import { InfoDisplayDataType } from "./types";

type InfoCardProps = {
  data: InfoDisplayDataType;
};

export const InfoCard: FC<InfoCardProps> = ({ data }) => {
  const { from, to, intensity } = data;
  return (
    <Card>
      <div className={styles.cardContent}>
        <h2>{formatTimeRange(from, to)}</h2>
        <IntensityValues intensityValues={intensity}/>
      </div>
    </Card>
  );
};

export const InfoDisplay = () => {
  const { data } = mockData;

  return (
    <div className={styles.container}>
        {data.map((item, i) => (
          <InfoCard data={item} key={i} />
        ))}
    </div>
  );
};
