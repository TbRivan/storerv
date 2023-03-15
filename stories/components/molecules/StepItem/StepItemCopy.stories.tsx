import StepItemCopy, {
  StepItemProps,
} from "../../../../components/molecules/StepItem/index-copy";
import { ComponentStory, ComponentMeta } from "@storybook/react";

export default {
  title: "Components/Molecules/StepItemCopy",
  component: StepItemCopy,
} as ComponentMeta<typeof StepItemCopy>;

const Template: ComponentStory<typeof StepItemCopy> = (args: StepItemProps) => (
  <StepItemCopy {...args} />
);

export const Default = Template.bind({});

Default.args = {
  icon: "step1",
  title: "1.Start",
  desc1: "Pilih salah satu game",
  desc2: "yang ingin kamu top up",
};
