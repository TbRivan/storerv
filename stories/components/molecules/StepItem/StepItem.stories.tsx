import StepItem, {
  StepItemProps,
} from "../../../../components/molecules/StepItem";
import { ComponentStory, ComponentMeta } from "@storybook/react";

export default {
  title: "Components/Molecules/StepItem",
  component: StepItem,
} as ComponentMeta<typeof StepItem>;

const Template: ComponentStory<typeof StepItem> = (args: StepItemProps) => (
  <StepItem {...args} />
);

export const Default = Template.bind({});

Default.args = {
  card: 0,
};
