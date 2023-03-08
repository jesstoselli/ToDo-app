import { View, Text, Image, TouchableOpacity } from "react-native";

// Styles
import { styles } from "./styles";

// Images
import Unchecked from "../../assets/ic_unchecked.png";
import Checked from "../../assets/ic_checked.png";
import Trash from "../../assets/ic_trash.png";

interface ToDoItemProps {
  text: string;
  done: boolean;
  removeToDo: () => void;
  checkUncheckToDo: () => void;
}

export function ToDoItem({
  text,
  done,
  removeToDo,
  checkUncheckToDo,
}: ToDoItemProps) {
  return (
    <View style={styles.container}>
      <View style={styles.subContainer}>
        <TouchableOpacity onPress={checkUncheckToDo}>
          <Image source={done ? Checked : Unchecked} />
        </TouchableOpacity>
        <Text style={done ? styles.toDoTextDone : styles.toDoText}>{text}</Text>
      </View>
      <TouchableOpacity onPress={removeToDo}>
        <Image source={Trash} />
      </TouchableOpacity>
    </View>
  );
}
