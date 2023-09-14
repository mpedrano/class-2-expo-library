import { StyleSheet } from 'react-native';
import { Avatar, Button, InfoRow, NavigationRow, RowItem } from 'react-native-ios-kit';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function App() {
  return (
      <SafeAreaView style={styles.container}>
        <Avatar style={styles.avatar} initials="MP" size={30} />
        <InfoRow title="InfoRow" info="1" />
        <NavigationRow
          title="NavigationRow"
          onPress={() => alert('Navigating')}
          info="navigation"
        />
        <RowItem
          icon="ios-map-outline"
          title="Navigation"
          subtitle="Get your directions"
          onPress={() => alert('Searching')}
        />
        <Button style={styles.button} inline rounded>
          Button
        </Button>
      </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'left',
    paddingTop: 30,
    margin: 20,
  },
  avatar: {
    marginBottom: 20,
  },
  button: {
    flex: 1,
    marginTop: 20,
  },
});
