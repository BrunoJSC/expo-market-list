import { useState } from "react";

import {
  Button,
  FlatList,
  Icon,
  Input,
  Select,
  Text,
  VStack,
  View,
} from "native-base";
import { Header } from "../components/Header";
import {
  AppleIcon,
  BeefIcon,
  CarrotIcon,
  LucideProps,
  MilkIcon,
  Plus,
  SandwichIcon,
} from "lucide-react-native";
import { Item } from "../components/UI/Item";
import { SelectList } from "react-native-dropdown-select-list";
import { Pressable } from "react-native";

interface ItemProps {
  id: string;
  name: string;
  isSelected: boolean;
  onCheckboxChange?: (id: string, isSelected: boolean) => void;
  icon?: React.ReactElement;
  quantity: string;
  category: string;
}

interface CategoriesProps {
  icon: LucideProps;
  label: string;
  value: string;
}

const categories: CategoriesProps[] = [
  { icon: <SandwichIcon />, label: "Padaria", value: "Padaria" },
  { icon: <CarrotIcon />, label: "Legume", value: "Legume" },
  { icon: <AppleIcon />, label: "Fruta", value: "Fruta" },
  { icon: <MilkIcon />, label: "Bebida", value: "Bebida" },
  { icon: <BeefIcon />, label: "Carne", value: "Carne" },
];

export function Home() {
  const [data, setData] = useState<ItemProps[]>([]);
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState("");
  const [category, setCategory] = useState("");

  function handleCreateMarketItem() {
    const newMarket: ItemProps = {
      id: new Date().toString(),
      name: name,
      quantity: quantity,
      isSelected: false,

      category: category,
    };

    console.log(newMarket);

    setData((prevData) => [...prevData, newMarket]);

    setName("");
    setQuantity("");
    setQuantity("");
  }

  const handleEmpty = () => {
    return <Text>Sem items</Text>;
  };

  function handleToggle(id: string) {
    setData((prevData) =>
      prevData.map((item) =>
        item.id === id ? { ...item, isSelected: !item.isSelected } : item,
      ),
    );
  }

  return (
    <View flex={1} bg="#0C0C0D">
      <Header />
      <View p={4}>
        <View>
          <Text color="#AFABB6">Item</Text>
          <Input
            bg="#111112"
            color="white"
            value={name}
            onChangeText={setName}
          />
        </View>

        <VStack
          flexDir="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <View width={137}>
            <Text color="#AFABB6" my="4px">
              Quantidade
            </Text>
            <Input
              bg="#111112"
              color="white"
              value={quantity}
              onChangeText={setQuantity}
            />
          </View>

          {/*<View width={137}>
            <Text color="#AFABB6" my="4px">
              Categoria
            </Text>
            <Input bg="#111112" color="white" />
          </View>*/}

          <View width={137}>
            <Text color="#AFABB6" my="4px">
              Categoria
            </Text>
            <Select
              selectedValue={category}
              color="white"
              onValueChange={(itemValue) => setCategory(itemValue)}
            >
              {categories.map((item) => (
                <Select.Item
                  label={item.label}
                  value={item.value}
                  color="white"
                  startIcon={<Icon as={item.icon} />}
                />
              ))}
            </Select>
          </View>

          <View alignSelf="flex-end">
            <Button
              onPress={handleCreateMarketItem}
              bg="#7450AC"
              width="40px"
              height="40px"
              borderRadius="full"
            >
              <Plus color="#ffffff" />
            </Button>
          </View>
        </VStack>
      </View>

      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Item
            name={item.name}
            icon={
              categories.find((category) => category.value === item.category)
                ?.icon
            }
            quantity={item.quantity}
            category={item.category}
            id={item.id}
            isChecked={item.isSelected}
            onCheckboxChange={(isSelected) => handleToggle(item.id)}
          />
        )}
        contentContainerStyle={{
          paddingHorizontal: 15,
        }}
        ListEmptyComponent={handleEmpty}
      />
    </View>
  );
}
