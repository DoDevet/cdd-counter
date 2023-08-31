import type { Meta, StoryObj } from '@storybook/react';
import { Title } from './index';
const meta = {
  title: 'Atoms/Title',
  component: Title,
} satisfies Meta<typeof Title>;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { label: 'Counter App' },
};

export default meta;
