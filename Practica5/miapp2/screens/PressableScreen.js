import { useState } from 'react';
import {StyleSheet, Text, View, Switch, Pressable, Alert} from 'react-native';

export default function PressableScreen() {

  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleSwitch = () => setIsDarkMode(previousState => !previousState);

  return (
    <View style={[styles.container, isDarkMode ? styles.bgDark : styles.bgLight]}>

      <Text style={[styles.title, isDarkMode ? styles.textDark : styles.textLight]}>
        Ajustes del Sistema
      </Text>

      <View style={styles.row}>

        <Text
          style={[styles.label, isDarkMode ? styles.textDark : styles.textLight]}>
          Modo Oscuro {isDarkMode ? 'Activado' : 'Desactivado'}
        </Text>

        <Switch
          trackColor={{ false: 'black', true: 'white' }}
          thumbColor={isDarkMode ? 'yellow' : 'gray'}
          onValueChange={toggleSwitch}
          value={isDarkMode}
        />

      </View>

      <Pressable
        onPress={() => Alert.alert('Éxito', 'Has presionado el botón')}
        onLongPress={() => Alert.alert('Información', 'Se mantuvo presionado')}
        delayLongPress={1000}
        style={({ pressed }) => [
          styles.button,
          {
            backgroundColor: pressed ? 'blue' : 'green'
          }
        ]}
      >
        <Text style={styles.buttonText}> Guardar Cambios</Text>
      </Pressable>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  bgLight: { backgroundColor: '#f5f5f5' },
  bgDark: { backgroundColor: '#121212' },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 40,
  },
  textLight: { color: '#000' },
  textDark: { color: '#fff' },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    marginBottom: 40,
    paddingHorizontal: 20,
  },
  label: { fontSize: 18 },
  button: {
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    elevation: 8,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});