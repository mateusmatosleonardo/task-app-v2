export type TaskProps = {
  id: string;
  title: string;
  description?: string;
  creationDate?: string;
}

export type Props = {
  data: TaskProps;
  action?: () => void;
}
