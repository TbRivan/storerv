import GameItem, {
  GameItemProps,
} from "../../../../components/molecules/GameItem";
import { ComponentStory, ComponentMeta } from "@storybook/react";

export default {
  title: "Components/Molecules/GameItem",
  component: GameItem,
} as ComponentMeta<typeof GameItem>;

const Template: ComponentStory<typeof GameItem> = (args: GameItemProps) => (
  <GameItem {...args} />
);

export const Default = Template.bind({});

Default.args = {
  title: "Mobile Legend",
  category: "Mobile",
  thumbnail: "/img/Thumbnail-1.png",
};
