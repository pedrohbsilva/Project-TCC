/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { Dimensions } from 'react-native';
import { LineChart } from 'react-native-chart-kit';
import { RealTimeGraphicProps, RTPagination } from '../../interfaces';
import {
  RealTimeGraphicContainer,
  Row,
  Column,
  TextTitle,
  TextSub,
} from './styles';

const RealTimeGraphic = ({
  data,
}: RealTimeGraphicProps): React.ReactElement => {
  const totalGeneratedOnTheDay =
    (data[data.length - 1].totalGerado - data[0].totalGerado) / 1000;
  const totalGenerated = data[data.length - 1].totalGerado / 1000;
  // function generateArrayFromRTData(arrayRT: RTPagination[]) {
  //   const filterArray = arrayRT.filter(option =>
  //     new Date(option.timeStamp).toLocaleTimeString('PT-BR').includes(':00'),
  //   );
  //   const result = filterArray.map(option => ({
  //     time: new Date(option.timeStamp)
  //       .toLocaleTimeString('PT-BR')
  //       .substring(0, 5),
  //     potency: option.potencia / 1000,
  //   }));
  //   return result;
  // }

  return (
    <RealTimeGraphicContainer>
      <LineChart
        data={{
          labels: [''],
          datasets: [
            {
              data: data.map(item => item.potencia / 1000),
            },
          ],
        }}
        width={Dimensions.get('window').width - 30}
        height={300}
        verticalLabelRotation={-45}
        yAxisLabel=""
        yAxisSuffix=" KW"
        // onDataPointClick={({ dataset, x, y, getColor, index, value }) =>
        //   setIndex(index)
        // }
        withVerticalLines={false}
        chartConfig={{
          backgroundGradientFrom: '#ebe694',
          backgroundGradientTo: '#61cf7e',
          fillShadowGradient: 'green',
          fillShadowGradientOpacity: 1,
          decimalPlaces: 0,

          color: (opacity = 0) => `rgba(255, 255, 255, ${opacity})`,
          labelColor: (opacity = 0) => `rgba(255, 255, 255, ${opacity})`,
          propsForLabels: {
            wordSpacing: 10,
          },
          propsForVerticalLabels: {
            kerning: 1,
            dx: [-20, 0],
          },
          propsForDots: {
            r: '0',
          },
        }}
        bezier
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
    </RealTimeGraphicContainer>
  );
};

export default RealTimeGraphic;
