import { StoryObj, Meta } from '@storybook/react';
import { Counter } from '.';
const meta = {
  title: 'Organisms/Counter',
  component: Counter,
} satisfies Meta<typeof Counter>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
