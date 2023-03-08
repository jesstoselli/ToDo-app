import { useMemo, useState } from "react";
import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  FlatList,
  Alert,
} from "react-native";
import uuid, { GenerateUUID } from "react-native-uuid";

// Components
import { ToDoItem } from "../../components/ToDoItem";

// Styles
import { styles } from "./styles";

// Images
import Logo from "../../assets/Logo.png";
import Clipboard from "../../assets/Clipboard.png";
import PlusIcon from "../../assets/ic_plus.png";

interface ToDo {
  id: string | number[];
  text: string;
  done: boolean;
}

export function Home() {
  const [toDos, setToDos] = useState<ToDo[]>([
    {
      id: "0b145531-561d-48bb-8824-8e747096c8bf",
      text: "Lavar roupa de cama",
      done: true,
    },
    {
      id: "43fa290c-7185-4b85-ac05-14c5deebc2ae",
      text: "Guardar roupas",
      done: true,
    },
    {
      id: "dcd4d02d-c050-4afb-b987-99acf025624c",
      text: "Estudar alemão",
      done: false,
    },
    {
      id: "68174f4e-7ace-4254-a752-8c2f281ece27",
      text: "Meditação",
      done: false,
    },
    {
      id: "25b661eb-dfc2-4d2f-934f-a3aac00bf61a",
      text: "1200ml de água",
      done: false,
    },
  ]);
  const [newToDoText, setNewToDoText] = useState("");

  function handleAddToDo() {
    if (newToDoText === "") {
      return Alert.alert(
        "Campo vazio",
        "Por favor, preencha o campo com uma nova tarefa."
      );
    }
    const newToDo: ToDo = {
      id: uuid.v4(),
      text: newToDoText,
      done: false,
    };
    setToDos((prevState) => [...prevState, newToDo]);
    setNewToDoText("");
  }

  function handleRemoveToDo(id: string | number[]) {
    Alert.alert(
      "Deletar",
      "🤔 Tem certeza que deseja deletar a tarefa selecionada?",
      [
        {
          text: "Confirmar",
          onPress: () => {
            const newToDoList = toDos.filter((toDo) => toDo.id !== id);
            setToDos(newToDoList);
            Alert.alert("🗑 Tarefa deletada com sucesso!");
          },
        },
        {
          text: "Cancelar",
          style: "cancel",
        },
      ]
    );
  }

  function handleToggleToDoStatus(id: string | number[]) {
    const toDosList = toDos.map((toDo) => {
      if (toDo.id === id) {
        toDo.done = !toDo.done;
      }
      return toDo;
    });
    setToDos(toDosList);
  }

  const openToDos = useMemo(() => {
    const filteredList = toDos.filter((todo) => todo.done === false);
    return filteredList.length;
  }, [toDos]);

  const completedToDos = useMemo(() => {
    const filteredList = toDos.filter((todo) => todo.done === true);
    return filteredList.length;
  }, [toDos]);

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
            onChangeText={setNewToDoText}
            value={newToDoText}
            maxLength={82}
          />
          <TouchableOpacity style={styles.addButton} onPress={handleAddToDo}>
            <Image source={PlusIcon} />
          </TouchableOpacity>
        </View>
        <View style={styles.toDoListHeader}>
          <View style={styles.toDoListHeaderItem}>
            <Text style={styles.toDoListHeaderItemTitle1}>Criadas</Text>
            <Text style={styles.toDoListHeaderItemCount}>{openToDos}</Text>
          </View>

          <View style={styles.toDoListHeaderItem}>
            <Text style={styles.toDoListHeaderItemTitle2}>Concluídas</Text>
            <Text style={styles.toDoListHeaderItemCount}>{completedToDos}</Text>
          </View>
        </View>

        <FlatList
          style={styles.toDosList}
          data={toDos}
          keyExtractor={(toDo) => String(toDo.id)}
          renderItem={({ item }) => (
            <ToDoItem
              text={item.text}
              done={item.done}
              removeToDo={() => handleRemoveToDo(item.id)}
              checkUncheckToDo={() => handleToggleToDoStatus(item.id)}
            />
          )}
          showsVerticalScrollIndicator={false}
          ListEmptyComponent={() => (
            <View style={styles.emptyListContainer}>
              <Image source={Clipboard} />
              <Text style={styles.infoTitle}>
                Você ainda não tem tarefas cadastradas
              </Text>
              <Text style={styles.infoDescription}>
                Crie tarefas e organize seus itens a fazer
              </Text>
            </View>
          )}
        />
      </View>
    </>
  );
}
