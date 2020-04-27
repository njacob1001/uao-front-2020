import React, { FC } from 'react'
import { Meeting } from 'ducks/meeting/models'
import { Form, Input, DatePicker, Upload, Button, Modal } from 'antd'
import moment from 'moment'
import styled from 'styled-components'
import { UploadOutlined } from '@ant-design/icons'

const { Item } = Form

const StyledUpload = styled(Upload)`
  & [class*='-upload-list-rtl'] .ant-upload-list-item {
    float: right;
  }
  & .ant-upload-list-item {
    float: left;
    width: 200px;
    margin-right: 8px;
  }
  & .ant-upload-animate-enter {
    animation-name: uploadAnimateInlineIn;
  }
  & .ant-upload-animate-leave {
    animation-name: uploadAnimateInlineOut;
  }
`

const MeetingForm: FC<Meeting & { visible: boolean; setVisible: any }> = props => {
  return (
    <Modal
      destroyOnClose
      onCancel={(): void => {
        props.setVisible(false)
      }}
      visible={props.visible}
      title="Update meeting">
      <Form layout="vertical">
        <Item label="Subject">
          <Input defaultValue={props.subject} />
        </Item>
        <Item label="Description">
          <Input.TextArea defaultValue={props.description} />
        </Item>
        <Item label="Start">
          <DatePicker defaultValue={moment(new Date(props.start))} showTime />
        </Item>
        <Item label="End">
          <DatePicker defaultValue={moment(new Date(props.end))} showTime />
        </Item>
        <Item label="Attachments">
          <StyledUpload listType="picture">
            <Button>
              <UploadOutlined />
              <span>Upload</span>
            </Button>
          </StyledUpload>
        </Item>
      </Form>
    </Modal>
  )
}

export default MeetingForm
