/* eslint-disable @typescript-eslint/explicit-function-return-type */
import {
  borders,
  bottom,
  color,
  flexbox,
  position,
  space,
  layout,
  LayoutProps,
  SpaceProps,
  FlexboxProps,
  ColorProps,
  BordersProps,
  PositionProps,
} from 'styled-system'
import styled from 'styled-components'

export type BlockProps = LayoutProps &
  SpaceProps &
  FlexboxProps &
  ColorProps &
  BordersProps &
  PositionProps

export interface InteractiveProps {
  avoidTouchable?: boolean
}

export const Block = styled.div<BlockProps & InteractiveProps>`
  ${flexbox}
  ${layout}
  ${color}
  ${space}
  ${position}
  ${bottom}
  ${borders}
`
export const BlockTheme = styled(Block)`
  background: radial-gradient(50% 50% at 50% 50%, #ffffff 0%, #f5f0f7 100%);
`

export const GridForCards = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(20%, 1fr));
  grid-gap: 20px;
  align-content: flex-start;
  @media screen and (max-width: 576px) {
    grid-template-columns: repeat(auto-fill, minmax(90%, 1fr));
  }
  @media screen and (min-width: 576px) and (max-width: 768px) {
    grid-template-columns: repeat(auto-fill, minmax(45%, 1fr));
  }
  @media screen and (min-width: 768px) and (max-width: 1200px) {
    grid-template-columns: repeat(auto-fill, minmax(30%, 1fr));
  }
`
