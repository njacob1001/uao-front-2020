import React, { FC } from 'react'
import { useParams } from 'react-router-dom'
import { MeetingSelector } from 'ducks/meeting/selectors'
import { useSelector } from 'react-redux'
import { Store } from 'ducks/store'
import { Typography, Tag } from 'antd'
import { Block } from 'views/components/UI/content'

const { Title, Paragraph } = Typography

const tags = {
  scheduled: 'cyan',
  canceled: 'default',
  later: 'warning',
  done: 'success',
  inprogress: 'processing',
  modified: 'default',
}

const MeetingDetail: FC = () => {
  const { meeting } = useParams()
  const meetingData = useSelector((store: Store) =>
    MeetingSelector(store, { meetingId: meeting || '' })
  )
  console.log(`id meting: ${meeting}`)
  console.log(meetingData)
  return (
    <Block>
      <Title>
        <span>{meetingData?.subject}</span>
        <Tag style={{ marginLeft: '0.5rem' }} color={tags[meetingData?.state]}>
          {meetingData?.state}
        </Tag>
      </Title>
      <Paragraph style={{ width: '50rem' }}>{meetingData?.description}</Paragraph>
      <h4>Tareas</h4>
    </Block>
  )
}

export default MeetingDetail
