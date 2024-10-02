import { Text, View } from 'react-native';

import { EditScreenInfo } from './EditScreenInfo';

type ScreenContentProps = {
  title: string;
  path: string;
  children?: React.ReactNode;
};

export const ScreenContent = ({ title, path, children }: ScreenContentProps) => {
  return (
    <View className={styles.container}>
      <View className="w-40 h-40 bg-red-500"></View>
    </View>
  );
};
const styles = {
  container: `items-center flex-1 justify-center`
};
