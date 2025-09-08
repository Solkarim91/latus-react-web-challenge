import { FC, ReactElement } from "react";
import { IntensityValuesType } from "./types";
import styles from './intensity-values.module.css';
import { Eye, TrendingUp, BarChart2 } from "react-feather";
import { capitalizeString, getIntensityIconColour } from "./utils";

type IntensityValueItemProps = {
    icon: ReactElement;
    value: string | number;
};

type IntensityValuesProps = {
    intensityValues: IntensityValuesType;
};

export const IntensityValueItem: FC<IntensityValueItemProps> = ({ icon, value }) => (
    <div className={styles.valueContainer}>
        {icon}
        <p>{value}</p>
    </div>
);

export const IntensityValues: FC<IntensityValuesProps> = ({ intensityValues }) => {
    const { forecast, actual, index } = intensityValues;

    const items: IntensityValueItemProps[] = [
        { 
            icon: (
            <div data-testid="TrendingUpIcon">
                <TrendingUp color="#01BFFF" size={40} />
            </div>
            ),
            value: forecast,
        },
        { 
            icon: (
            <div data-testid="EyeIcon">
                <Eye color="#3BB371" size={40} />
            </div>
            ),
            value: actual,
        },
        { 
            icon: (
            <div data-testid="BarChartIcon">
                <BarChart2 color={getIntensityIconColour(index)} size={40} />
            </div>
            ),
            value: capitalizeString(index),
        },
    ];


    return (
        <div className={styles.intensityValuesContainer}>
            {items.map((item, i) => (
                <IntensityValueItem key={i} {...item} />
            ))}
        </div>
    );
};
