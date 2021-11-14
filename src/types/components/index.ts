import React, { HTMLAttributes, LabelHTMLAttributes } from 'react';

type HTMLTextAttributes = HTMLAttributes<HTMLSpanElement> &
  LabelHTMLAttributes<HTMLLabelElement>;

export interface TextProps extends HTMLTextAttributes {
  color: 'primary' | 'secondary' | 'tertiary';
  type?: 'span' | 'p' | 'label';
  size: 'sm' | 'md' | 'lg';
  text: string;
  className?: string;
  bold?: boolean;
}

export type PageProps = {
  children: React.ReactNode;
};

export interface BoxProps extends HTMLAttributes<HTMLDivElement> {
  position?: 'absolute' | 'relative' | 'fixed';
  width?: string;
  height?: string;
  paddingTop?: string;
  paddingLeft?: string;
  paddingRight?: string;
  paddingBottom?: string;
  marginTop?: string;
  marginBottom?: string;
  marginLeft?: string;
  marginRight?: string;
  fullWidth?: boolean;
  fullHeight?: boolean;
  block?: boolean;
  border?: boolean;
  inline?: boolean;
  backgroundColor?: string;
  flexDirection?: 'initial' | 'row' | 'column';
  flexGrow?: number;
  flexShrink?: number;
  flexBasis?: number;
  borderRadius?: string;
  flex?: string;
  overflow?: 'hidden' | 'visible' | 'scroll';
  justifyContent?:
    | 'flex-start'
    | 'flex-end'
    | 'center'
    | 'space-between'
    | 'space-around'
    | 'initial'
    | 'inherit'
    | 'end';
  textAlign?:
    | 'center'
    | 'end'
    | 'inherit'
    | 'initial'
    | 'justify'
    | 'left'
    | 'revert'
    | 'right'
    | 'start'
    | 'unset';
  flexWrap?: 'wrap' | 'nowrap' | 'wrap-reverse';
  alignItems?:
    | 'stretch'
    | 'center'
    | 'flex-start'
    | 'flex-end'
    | 'baseline'
    | 'initial'
    | 'inherit';
  children?: React.ReactNode;
}

export interface ButtonProps {
  variant: 'primary' | 'secondary' | 'tertiary';
  size: 'sm' | 'md' | 'lg' | 'xs';
  text?: string;
  marginTop?: string;
  marginBottom?: string;
  marginLeft?: string;
  marginRight?: string;
  onClick?: Function;
  children?: React.ReactNode;
}

export interface Home {
  homePlanId: number;
  name: string;
  numBeds: number;
  numBaths: number;
  sqft: number;
  tags: string[];
  description: string;
  image: string;
}

export interface HomeInfoProps {
  name: string;
  numBeds: number;
  numBaths: number;
  sqft: number;
  tags: string[];
  description: string;
}

export interface LotInfoProps {
  address: string;
  acres: number;
  description: string;
}

export interface Lot {
  lotId: number;
  address: string;
  acres: number;
  description: string;
  image: string;
}

export interface HomeCardProps {
  onClick?: Function;
  home: Home;
  enableLikes?: boolean;
  toggleLike?: Function;
  isLiked?: boolean;
}

export interface LotCardProps {
  onClick?: Function;
  lot: Lot;
  enableLikes?: boolean;
  toggleLike?: Function;
  isLiked?: boolean;
}

export interface ModalProps {
  children: React.ReactNode;
  onClose: Function;
}

export interface LotToHome {
  homePlanId: number;
  lotId: number;
}
