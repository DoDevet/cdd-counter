import { StoryObj, Meta } from '@storybook/react';
import { Button } from '.';

const meta = {
  title: 'Atoms/Button',
  component: Button,
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: '+',
  },
};
