import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  headerContainer: {
    height: 173,
    backgroundColor: "#0D0D0D",
    padding: 24,
    alignItems: "center",
    justifyContent: "center",
  },
  mainContainer: {
    backgroundColor: "#1A1A1A",
    flex: 1,
  },
  textInputContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 24,
    position: "absolute",
    top: -27,
  },
  input: {
    height: 54,
    backgroundColor: "#262626",
    borderRadius: 6,
    flex: 1,
    borderWidth: 1,
    borderColor: "#0D0D0D",
    padding: 16,
    fontSize: 16,
    fontFamily: "Inter_400Regular",
  },
  addButton: {
    backgroundColor: "#1E6F9F",
    borderRadius: 6,
    padding: 18,
    marginLeft: 4,
  },
  toDoListHeader: {
    width: "100%",
    marginTop: 59,
    paddingHorizontal: 24,
    flexDirection: "row",
    alignItems: "stretch",
    justifyContent: "space-between",
  },
  toDoListHeaderItem: {
    flexDirection: "row",
  },
  toDoListHeaderItemTitle1: {
    fontFamily: "Inter_700Bold",
    color: "#4EA8DE",
  },
  toDoListHeaderItemTitle2: {
    fontFamily: "Inter_700Bold",
    color: "#8284FA",
  },
  toDoListHeaderItemCount: {
    fontFamily: "Inter_700Bold",
    color: "#D9D9D9",
    marginLeft: 16,
    paddingHorizontal: 12,
    paddingVertical: 2,
    backgroundColor: "#333333",
    borderRadius: 40,
  },
  emptyListContainer: {
    marginHorizontal: 24,
    marginTop: 20,
    borderTopWidth: 2,
    borderColor: "#333333",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 48,
    paddingHorizontal: 20,
  },
  infoTitle: {
    marginTop: 16,
    fontFamily: "Inter_700Bold",
    color: "#808080",
  },
  infoDescription: {
    fontFamily: "Inter_400Regular",
    color: "#808080",
  },
  toDosList: {
    marginHorizontal: 24,
    marginTop: 20,
  },
});
