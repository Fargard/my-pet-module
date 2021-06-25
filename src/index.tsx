import { NativeModules } from 'react-native';

type MyPetModuleType = {
  multiply(a: number, b: number): Promise<number>;
};

const { MyPetModule } = NativeModules;

export default MyPetModule as MyPetModuleType;
