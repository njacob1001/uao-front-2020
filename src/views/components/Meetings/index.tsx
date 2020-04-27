/* eslint-disable react/jsx-wrap-multilines */
import React, { FC, useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { MEETING } from 'ducks/meeting/action-types'
import { Card, Typography, Skeleton, Avatar, Popconfirm, Modal } from 'antd'
import {
  ExperimentOutlined,
  SelectOutlined,
  CheckOutlined,
  DeleteOutlined,
  EyeOutlined,
  EditOutlined,
} from '@ant-design/icons'
import { EmptyUser } from 'views/components/UI/Icons'
import { GridForCards, Block } from 'views/components/UI/content'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { Store } from 'ducks/store'
import { Meeting } from 'ducks/meeting/models'
import moment from 'moment'
import MeetingForm from 'views/components/forms/Meeting'
import { roleSelector } from 'ducks/user/selectors'

const { Meta } = Card
const { Paragraph } = Typography

const AvatarComponent: FC<{ imageUuid?: string; loading?: boolean }> = ({ imageUuid, loading }) =>
  loading ? (
    <Avatar />
  ) : (
    <Avatar
      icon={!imageUuid ? <EmptyUser /> : undefined}
      src={imageUuid ? `${process.env.REACT_APP_CMS_URL}${imageUuid}` : undefined}
    />
  )

const RenderLoadingItems: FC = (_, index) => (
  <Card
    key={`loading_${index}`}
    actions={[
      <ExperimentOutlined title="Testing mode" />,
      <SelectOutlined title="Production mode" />,
    ]}>
    <Skeleton loading avatar active>
      <Meta avatar={<AvatarComponent />} title="" description="" />
    </Skeleton>
  </Card>
)

const StyledParagraph = styled(Paragraph)``

const Description: FC<{ description: string }> = ({ description }) => (
  <StyledParagraph type="secondary">
    {`${description.substring(0, 130)}
    ${description.length > 130 ? '...' : ''}`}
  </StyledParagraph>
)

const RenderItems: FC<Meeting> = (props, index) => {
  const { subject, description = '', start, id, consultor, emprendedor } = props
  const [visible, setVisible] = useState(false)
  const role = useSelector(roleSelector)
  return (
    <Card
      key={`${id}meet${index}`}
      actions={[
        <Link to={`/schedules/detail-meeting/${id}`}>
          <EyeOutlined />
        </Link>,
        <EditOutlined
          onClick={() => {
            setVisible(true)
          }}
        />,
        <Popconfirm onConfirm={() => {}} title="Already you arrived?">
          <CheckOutlined />
        </Popconfirm>,
        <Popconfirm onConfirm={() => {}} title="Cancel meeting?">
          <DeleteOutlined />
        </Popconfirm>,
      ]}>
      <Skeleton loading={false} avatar active>
        <Meta
          avatar={
            <AvatarComponent
              imageUuid={role === 'emprendedor' ? consultor.photo : emprendedor.photo}
            />
          }
          title={subject}
          description={
            <Paragraph>
              <Description description={description} />
              <span>{moment(new Date(start)).format('M/D/YYYY h:mm a')}</span>
            </Paragraph>
          }
        />
      </Skeleton>
      <MeetingForm {...props} setVisible={setVisible} visible={visible} />
    </Card>
  )
}

const Meetings: FC = () => {
  const emptyData = useRef<any[]>(Array.from(Array(16)).map((_, index) => ({ uuid: `${index}ed` })))
  const dispatch = useDispatch()

  const meeting = useSelector((store: Store) => store?.meetingReducer)
  console.log(meeting)
  useEffect(() => {
    dispatch(MEETING.trigger())
  }, [])

  const data = meeting.loading ? emptyData.current : meeting.meetings
  return (
    <Block width="100%" height="100%" overflow="auto">
      <Block p={20} flexGrow={1} overflowX="hidden" overflowY="auto">
        <GridForCards>
          {data.map(d =>
            meeting.loading ? <RenderLoadingItems {...d} /> : <RenderItems {...d} />
          )}
        </GridForCards>
      </Block>
    </Block>
  )
}
export default Meetings
