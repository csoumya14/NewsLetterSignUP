import { FC } from 'react';
import { ListContainer, ListItem } from './List.styles';

interface ListProps {}

export const List: FC<ListProps> = () => {
  return (
    <ListContainer>
      <ListItem>Product discovery and building what matters</ListItem>
      <ListItem>Measuring to ensure updates are a success</ListItem>
      <ListItem> And much more!</ListItem>
    </ListContainer>
  );
};
