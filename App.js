import { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  FlatList,
} from "react-native";
import { database, ref, update, onValue } from "./utilities/Firebase";

export default function App() {
  const [taskInput, setTaskInput] = useState("");
  const [taskData, setTaskData] = useState("");

  const saveToDatabase = () => {
    const now = Date.now();

    update(ref(database, `Users/Mulweli/Tasks/${now}`), {
      taskName: taskInput,
    })
      .then(() => {})
      .catch((error) => {});
  };
  const downloadTasks = () => {
    const tasks = ref(database, `Users/Mulweli/Tasks`);
    onValue(tasks, (snapshot) => {
      const taskArray = Object.values(snapshot.val()); //Convert object of objects into array of objects
      setTaskData(taskArray);
      // console.log(`data:`, taskArray);
    });

    // console.log(`taskData:`, taskData);
  };

  const RenderTask = ({ item }) => (
    <View style={styles.eachTaskContainer}>
      <Text style={styles.taskName}>{item.taskName}</Text>
    </View>
  );

  useEffect(() => {
    downloadTasks();
  }, []);

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.inputContainer}
        onChangeText={(text) => setTaskInput(text)}
        value={taskInput}
      />

      <TouchableOpacity onPress={saveToDatabase} style={styles.AddButton}>
        <Text>Add</Text>
      </TouchableOpacity>

      <View style={styles.tasksContainer}>
        <FlatList data={taskData} renderItem={RenderTask} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "green",
    alignItems: "center",
    // justifyContent: "center",
    paddingTop: 50,
  },
  textStyle: { color: "white" },
  inputContainer: {
    backgroundColor: "white",
    height: "7%",
    width: "90%",
    borderRadius: 10,
  },
  AddButton: {
    backgroundColor: "pink",
    height: "5%",
    width: "20%",
    marginTop: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  tasksContainer: {
    backgroundColor: "grey",
    height: "70%",
    width: "100%",
  },
  eachTaskContainer: {
    backgroundColor: "pink",
    height: 100,
    width: "100%",
    marginTop: 10,
    justifyContent: "center",
    alignItems: "center",
  },
});
