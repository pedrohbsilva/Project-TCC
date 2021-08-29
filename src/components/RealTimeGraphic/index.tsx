/* eslint-disable react/jsx-props-no-spreading */
import React, { useState } from 'react';
import { Dimensions, View } from 'react-native';
import { LineChart } from 'react-native-chart-kit';
import { Rect, Text, Svg } from 'react-native-svg';
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
  const [tooltipPos, setTooltipPos] = useState({
    x: 0,
    y: 0,
    visible: false,
    value: 0,
    timeStamp: '',
    index: 0,
  });

  // const totalGeneratedOnTheDay =
  //   (data[data.length - 1].totalGerado - data[0].totalGerado) / 1000;
  // const totalGenerated = data[data.length - 1].totalGerado / 1000;
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
        fromZero
        yAxisSuffix=" KW"
        decorator={() => {
          return tooltipPos.visible ? (
            <View>
              <Svg>
                <Rect
                  x={tooltipPos.x - 15}
                  y={tooltipPos.y + 10}
                  width="20%"
                  height="50"
                  fill="white"
                  originX={100}
                  originY={-100}
                />
                <View>
                  <Text
                    x={tooltipPos.x + 5}
                    y={tooltipPos.y + 30}
                    fill="black"
                    fontWeight="bold"
                    textAnchor="middle"
                    font={{ fontSize: 12 }}
                  >
                    {tooltipPos.value} KW
                  </Text>
                  <Text
                    x={tooltipPos.x + 8}
                    y={tooltipPos.y + 50}
                    fill="black"
                    fontWeight="bold"
                    textAnchor="middle"
                    font={{ fontSize: 12 }}
                  >
                    {tooltipPos.timeStamp}
                  </Text>
                </View>
              </Svg>
            </View>
          ) : null;
        }}
        onDataPointClick={({ dataset, x, y, getColor, index, value }) => {
          const isSamePoint = tooltipPos.x === x && tooltipPos.y === y;
          const itsAlmostTheLastIndex = index >= 126;
          if (isSamePoint) {
            setTooltipPos(previousState => {
              return {
                x: itsAlmostTheLastIndex
                  ? previousState.x - 50
                  : previousState.x,
                y: previousState.y,
                value: Number(value.toFixed(2)),
                visible: !previousState.visible,
                timeStamp: new Date(data[index].timeStamp)
                  .toLocaleTimeString('PT-BR')
                  .substring(0, 5),
                index,
              };
            });
          } else {
            setTooltipPos({
              x: itsAlmostTheLastIndex ? x - 50 : x,
              value: Number(value.toFixed(2)),
              y,
              visible: true,
              timeStamp: new Date(data[index].timeStamp)
                .toLocaleTimeString('PT-BR')
                .substring(0, 5),
              index,
            });
          }
        }}
        getDotColor={(_: number, index: number) => {
          return tooltipPos.index === index ? '#444' : '#ffffff';
        }}
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
            r: '2',
          },
        }}
        bezier
        style={{
          marginVertical: 20,
          borderRadius: 16,
        }}
      />
      {/* <Row>
        <Column isInitial>
          <TextTitle>{totalGeneratedOnTheDay.toFixed(2)}</TextTitle>
          <TextSub>Gerado hoje (kWh)</TextSub>
        </Column>
        <Column isInitial={false}>
          <TextTitle>{totalGenerated.toFixed(2)}</TextTitle>
          <TextSub>Total Gerado (MWh)</TextSub>
        </Column>
      </Row> */}
    </RealTimeGraphicContainer>
  );
};

export default RealTimeGraphic;
