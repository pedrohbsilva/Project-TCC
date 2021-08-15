/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { Dimensions } from 'react-native';
import { BarChart } from 'react-native-chart-kit';
import { LastDaysGraphicProps } from '../../interfaces';
import {
  LastDaysGraphicContainer,
  Row,
  Column,
  TextTitle,
  TextSub,
} from './styles';

const LastDaysGraphic = ({
  data,
}: LastDaysGraphicProps): React.ReactElement => {
  const totalGeneratedOnTheDay =
    (data[data.length - 1].totalGerado - data[0].totalGerado) / 1000;
  const totalGenerated = data[data.length - 1].totalGerado / 1000;

  return (
    <LastDaysGraphicContainer>
      <BarChart
        data={{
          labels: data.map(
            item =>
              `${item.dia}/${item.mes}/${String(item.ano).substring(2, 4)}`,
          ),
          datasets: [
            {
              data: data.map(item =>
                Number((item.totalGerado / 1000).toFixed(2)),
              ),
            },
          ],
        }}
        showValuesOnTopOfBars
        width={Dimensions.get('window').width - 30}
        height={300}
        verticalLabelRotation={-30}
        yAxisLabel=""
        yAxisSuffix=" KW"
        chartConfig={{
          backgroundGradientFrom: '#ebe694',
          backgroundGradientTo: '#61cf7e',
          fillShadowGradient: 'green',
          fillShadowGradientOpacity: 1,
          decimalPlaces: 0,
          barPercentage: 0.5,
          color: (opacity = 0) => `rgba(255, 255, 255, ${opacity})`,
          labelColor: (opacity = 0) => `rgba(255, 255, 255, ${opacity})`,
          propsForLabels: {
            wordSpacing: 10,
          },
          propsForVerticalLabels: {
            kerning: 1,
            dx: [-25, 0],
          },
          propsForDots: {
            r: '0',
          },
        }}
        style={{
          marginVertical: 20,
          borderRadius: 16,
        }}
      />
      <Row>
        <Column isInitial>
          <TextTitle>{totalGeneratedOnTheDay.toFixed(2)}</TextTitle>
          <TextSub>Gerado hoje (kWh)</TextSub>
        </Column>
        <Column isInitial={false}>
          <TextTitle>{totalGenerated.toFixed(2)}</TextTitle>
          <TextSub>Total Gerado (MWh)</TextSub>
        </Column>
      </Row>
    </LastDaysGraphicContainer>
  );
};

export default LastDaysGraphic;
