import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    marginHorizontal: 24,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderWidth: 1,
    borderColor: "#333333",
    backgroundColor: "#262626",
    borderRadius: 8,
    marginBottom: 8,
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  subContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  toDoText: {
    marginHorizontal: 8,
    flex: 1,
    flexWrap: "wrap",
    fontFamily: "Inter_400Regular",
    color: "#F2F2F2",
    alignContent: "flex-start",
    textAlign: "left",
    textDecorationLine: "none",
  },
  toDoTextDone: {
    marginHorizontal: 8,
    flex: 1,
    flexWrap: "wrap",
    fontFamily: "Inter_400Regular",
    color: "#F2F2F2",
    alignContent: "flex-start",
    textAlign: "left",
    textDecorationLine: "line-through",
  },
  trashButton: {
    paddingHorizontal: 10,
    paddingVertical: 9,
  },
});
