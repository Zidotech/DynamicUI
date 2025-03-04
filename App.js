// Dimension Api

// import { StyleSheet, View, Text, Dimensions } from "react-native";

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <View style={styles.box}>
//         <Text style={styles.text}>Welcome!</Text>
//       </View>
//     </View>
//   );
// }

// const windowWidth = Dimensions.get("window").width;
// const windowHeight = Dimensions.get("window").height;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "plum",
//     alignItems: "center",
//     justifyContent: "center",
//   },
//   box: {
//     width: windowWidth > 500 ? "70%" : "90%",
//     height: windowHeight > 600 ? "60%" : "90%",
//     backgroundColor: "lightblue",
//     alignItems: "center",
//     justifyContent: "center",
//   },
//   text: {
//     fontSize: windowWidth > 500 ? 50 : 24,
//   },
// });

// import { useEffect, useState } from "react";
// import { StyleSheet, View, Text, Dimensions } from "react-native";

// export default function App() {
//   const [dimensions, setDimensions] = useState({
//     window: Dimensions.get("window"),
//   });

//   useEffect(() => {
//     const subscription = Dimensions.addEventListener("change", ({ window }) => {
//       setDimensions({ window });
//     });
//     return () => subscription.remove();
//   });

//   const { window } = dimensions;
//   const windowWidth = window.width;
//   const windowHeight = window.height;
//   return (
//     <View style={styles.container}>
//       <View
//         style={[
//           styles.box,
//           {
//             width: windowWidth > 500 ? "70%" : "90%",
//             height: windowHeight > 600 ? "60%" : "90%",
//           },
//         ]}
//       >
//         <Text style={{ fontSize: windowWidth > 500 ? 50 : 24 }}>Welcome!</Text>
//       </View>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "plum",
//     alignItems: "center",
//     justifyContent: "center",
//   },
//   box: {
//     // width: windowWidth > 500 ? "70%" : "90%",
//     // height: windowHeight > 600 ? "60%" : "90%",
//     backgroundColor: "lightblue",
//     alignItems: "center",
//     justifyContent: "center",
//   },
//   // text: {
//   //   fontSize: windowWidth > 500 ? 50 : 24,
//   // },
// });

import { StyleSheet, View, Text, useWindowDimensions } from "react-native";

export default function App() {
  const windowWidth = useWindowDimensions().width;
  const windowHeight = useWindowDimensions().height;
  return (
    <View style={styles.container}>
      <View
        style={[
          styles.box,
          {
            width: windowWidth > 500 ? "70%" : "90%",
            height: windowHeight > 600 ? "60%" : "90%",
          },
        ]}
      >
        <Text style={{ fontSize: windowWidth > 500 ? 50 : 24 }}>Welcome!</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "plum",
    alignItems: "center",
    justifyContent: "center",
  },
  box: {
    // width: windowWidth > 500 ? "70%" : "90%",
    // height: windowHeight > 600 ? "60%" : "90%",
    backgroundColor: "lightblue",
    alignItems: "center",
    justifyContent: "center",
  },
  // text: {
  //   fontSize: windowWidth > 500 ? 50 : 24,
  // },
});
