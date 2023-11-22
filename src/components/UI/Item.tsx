import { LucideProps, MoreVertical } from "lucide-react-native";
import { Button, Icon, Modal, Text, VStack, View } from "native-base";
import { Checkbox } from "expo-checkbox";
import { Pressable } from "react-native";

interface ItemProps {
  id: string;
  icon?: string;
  name: string;
  quantity: string;
  category: string;
  isChecked: boolean;
  isOpen: boolean;
  onClose: () => void;
  onCheckboxChange: (id: string, isChecked: boolean) => void;
}

export function Item({
  id,
  name,
  quantity,
  icon,
  isOpen,
  onClose,
  category,
  isChecked,
  onCheckboxChange,
}: ItemProps) {
  const handleCheckboxChange = (id: string, newState: boolean) => {
    onCheckboxChange(id, newState);
  };

  return (
    <VStack
      bg={isChecked ? "#111112" : "#17171A"}
      borderRadius="md"
      p={4}
      key={id}
      my="5px"
    >
      <View flexDir="row" alignItems="center" justifyContent="space-between">
        <View flexDir="row" alignItems="center">
          <Checkbox
            color={isChecked ? "#4E995E" : undefined}
            value={isChecked}
            onValueChange={() => handleCheckboxChange(id, isChecked)}
          />
          <View ml={5}>
            <Text
              color={isChecked ? "#AFABB6" : "white"}
              textDecorationLine={isChecked ? "line-through" : undefined}
              fontWeight="bold"
            >
              {name}
            </Text>
            <Text color={isChecked ? "#AFABB6" : "white"}>
              {quantity} unidades
            </Text>
          </View>
        </View>

        <View flexDir="row" alignItems="center">
          <View bg={isChecked ? "#AFABB6" : "white"} p="5px" borderRadius="md">
            <Icon as={icon} />
          </View>
          <Pressable>
            <MoreVertical color="#A881E6" />
          </Pressable>
        </View>
      </View>
    </VStack>
  );
}
