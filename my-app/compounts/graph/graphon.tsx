import React from "react";
import { ResponsiveLine } from "@nivo/line";

const Graphon = () => {
  const data = [
    {
      id: "japan",
      color: "hsl(47, 70%, 50%)",
      data: [
        {
          x: "plane",
          y: 41,
        },
        {
          x: "helicopter",
          y: 222,
        },
        {
          x: "boat",
          y: 126,
        },
        {
          x: "train",
          y: 193,
        },
        {
          x: "subway",
          y: 103,
        },
        {
          x: "bus",
          y: 298,
        },
        {
          x: "car",
          y: 278,
        },
        {
          x: "moto",
          y: 218,
        },
        {
          x: "bicycle",
          y: 78,
        },
        {
          x: "horse",
          y: 63,
        },
        {
          x: "skateboard",
          y: 281,
        },
        {
          x: "others",
          y: 119,
        },
      ],
    },
    {
      id: "france",
      color: "hsl(1, 70%, 50%)",
      data: [
        {
          x: "plane",
          y: 235,
        },
        {
          x: "helicopter",
          y: 36,
        },
        {
          x: "boat",
          y: 79,
        },
        {
          x: "train",
          y: 269,
        },
        {
          x: "subway",
          y: 162,
        },
        {
          x: "bus",
          y: 161,
        },
        {
          x: "car",
          y: 269,
        },
        {
          x: "moto",
          y: 91,
        },
        {
          x: "bicycle",
          y: 228,
        },
        {
          x: "horse",
          y: 222,
        },
        {
          x: "skateboard",
          y: 14,
        },
        {
          x: "others",
          y: 54,
        },
      ],
    },
    {
      id: "us",
      color: "hsl(175, 70%, 50%)",
      data: [
        {
          x: "plane",
          y: 107,
        },
        {
          x: "helicopter",
          y: 255,
        },
        {
          x: "boat",
          y: 204,
        },
        {
          x: "train",
          y: 300,
        },
        {
          x: "subway",
          y: 146,
        },
        {
          x: "bus",
          y: 21,
        },
        {
          x: "car",
          y: 31,
        },
        {
          x: "moto",
          y: 186,
        },
        {
          x: "bicycle",
          y: 146,
        },
        {
          x: "horse",
          y: 250,
        },
        {
          x: "skateboard",
          y: 96,
        },
        {
          x: "others",
          y: 165,
        },
      ],
    },
    {
      id: "germany",
      color: "hsl(124, 70%, 50%)",
      data: [
        {
          x: "plane",
          y: 288,
        },
        {
          x: "helicopter",
          y: 82,
        },
        {
          x: "boat",
          y: 18,
        },
        {
          x: "train",
          y: 172,
        },
        {
          x: "subway",
          y: 146,
        },
        {
          x: "bus",
          y: 210,
        },
        {
          x: "car",
          y: 57,
        },
        {
          x: "moto",
          y: 124,
        },
        {
          x: "bicycle",
          y: 295,
        },
        {
          x: "horse",
          y: 225,
        },
        {
          x: "skateboard",
          y: 270,
        },
        {
          x: "others",
          y: 178,
        },
      ],
    },
    {
      id: "norway",
      color: "hsl(85, 70%, 50%)",
      data: [
        {
          x: "plane",
          y: 177,
        },
        {
          x: "helicopter",
          y: 198,
        },
        {
          x: "boat",
          y: 249,
        },
        {
          x: "train",
          y: 284,
        },
        {
          x: "subway",
          y: 36,
        },
        {
          x: "bus",
          y: 238,
        },
        {
          x: "car",
          y: 236,
        },
        {
          x: "moto",
          y: 154,
        },
        {
          x: "bicycle",
          y: 219,
        },
        {
          x: "horse",
          y: 82,
        },
        {
          x: "skateboard",
          y: 82,
        },
        {
          x: "others",
          y: 26,
        },
      ],
    },
  ];

  // const MyResponsiveLine = ({ data }) =>( 
  //   <ResponsiveLine
  //     data={data}
  //     margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
  //     xScale={{ type: "point" }}
  //     yScale={{
  //       type: "linear",
  //       min: "auto",
  //       max: "auto",
  //       stacked: true,
  //       reverse: false,
  //     }}
  //     yFormat=" >-.2f"
  //     axisTop={null}
  //     axisRight={null}
  //     axisBottom={{
  //       orient: "bottom",
  //       tickSize: 5,
  //       tickPadding: 5,
  //       tickRotation: 0,
  //       legend: "transportation",
  //       legendOffset: 36,
  //       legendPosition: "middle",
  //     }}
  //     axisLeft={{
  //       orient: "left",
  //       tickSize: 5,
  //       tickPadding: 5,
  //       tickRotation: 0,
  //       legend: "count",
  //       legendOffset: -40,
  //       legendPosition: "middle",
  //     }}
  //     pointSize={10}
  //     pointColor={{ theme: "background" }}
  //     pointBorderWidth={2}
  //     pointBorderColor={{ from: "serieColor" }}
  //     pointLabelYOffset={-12}
  //     useMesh={true}
  //     legends={[
  //       {
  //         anchor: "bottom-right",
  //         direction: "column",
  //         justify: false,
  //         translateX: 100,
  //         translateY: 0,
  //         itemsSpacing: 0,
  //         itemDirection: "left-to-right",
  //         itemWidth: 80,
  //         itemHeight: 20,
  //         itemOpacity: 0.75,
  //         symbolSize: 12,
  //         symbolShape: "circle",
  //         symbolBorderColor: "rgba(0, 0, 0, .5)",
  //         effects: [
  //           {
  //             on: "hover",
  //             style: {
  //               itemBackground: "rgba(0, 0, 0, .03)",
  //               itemOpacity: 1,
  //             },
  //           },
  //         ],
  //       },
  //     ]}
  //   />
  // );
  return (
    <>
      <div style={{ height: 300, width: 800 }}>
        <ResponsiveLine
          data={data}
          margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
          xScale={{ type: "point" }}
          yScale={{
            type: "linear",
            min: "auto",
            max: "auto",
            stacked: true,
            reverse: false,
          }}
          yFormat=" >-.2f"
          axisTop={null}
          axisRight={null}
          axisBottom={{
            orient: "bottom",
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: "transportation",
            legendOffset: 36,
            legendPosition: "middle",
          }}
          axisLeft={{
            orient: "left",
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: "count",
            legendOffset: -40,
            legendPosition: "middle",
          }}
          pointSize={10}
          pointColor={{ theme: "background" }}
          pointBorderWidth={2}
          pointBorderColor={{ from: "serieColor" }}
          pointLabelYOffset={-12}
          useMesh={true}
          legends={[
            {
              anchor: "bottom-right",
              direction: "column",
              justify: false,
              translateX: 100,
              translateY: 0,
              itemsSpacing: 0,
              itemDirection: "left-to-right",
              itemWidth: 80,
              itemHeight: 20,
              itemOpacity: 0.75,
              symbolSize: 12,
              symbolShape: "circle",
              symbolBorderColor: "rgba(0, 0, 0, .5)",
              effects: [
                {
                  on: "hover",
                  style: {
                    itemBackground: "rgba(0, 0, 0, .03)",
                    itemOpacity: 1,
                  },
                },
              ],
            },
          ]}
        />
      </div>
    </>
  );
};

export default Graphon;
