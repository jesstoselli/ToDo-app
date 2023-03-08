import { View, Text, Image, TextInput, TouchableOpacity } from "react-native";

import { styles } from "./styles";

import Logo from "../../assets/Logo.png";
import Clipboard from "../../assets/Clipboard.png";
import PlusIcon from "../../assets/ic_plus.png";

export function Home() {
  return (
    <>
      <View style={styles.headerContainer}>
        <Image source={Logo} />
      </View>
      <View style={styles.mainContainer}>
        <View style={styles.textInputContainer}>
          <TextInput
            style={styles.input}
            placeholder={"Adicione uma nova tarefa"}
            placeholderTextColor={"#808080"}
          />
          <TouchableOpacity style={styles.addButton}>
            <Image source={PlusIcon} />
          </TouchableOpacity>
        </View>
        <View style={styles.toDoListHeader}>
          <View style={styles.toDoListHeaderItem}>
            <Text style={styles.toDoListHeaderItemTitle1}>Criadas</Text>
            <Text style={styles.toDoListHeaderItemCount}>0</Text>
          </View>

          <View style={styles.toDoListHeaderItem}>
            <Text style={styles.toDoListHeaderItemTitle2}>Concluídas</Text>
            <Text style={styles.toDoListHeaderItemCount}>0</Text>
          </View>
        </View>

        <View style={styles.emptyListContainer}>
          <Image source={Clipboard} />
          <Text style={styles.infoTitle}>
            Você ainda não tem tarefas cadastradas
          </Text>
          <Text style={styles.infoDescription}>
            Crie tarefas e organize seus itens a fazer
          </Text>
        </View>
      </View>
    </>
  );
}
