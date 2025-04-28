import { FC } from 'react';
import { Container } from './styles';
import React from 'react';

interface ITagItem {
  title: string;
}
export const TagItem: FC<ITagItem> = ({ title, ...rest }) => {
  return <Container {...rest}>{title}</Container>;
};
