import { FloatButton } from 'antd';
import { MenuOutlined, PlayCircleOutlined, MessageFilled, HomeFilled } from "@ant-design/icons"
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';


export default function Fab() {

  const navigator = useNavigate()
  const [open, setOpen] = useState(false);

  return (
    <>
      <FloatButton.Group
        className='fab-group '
        icon={<MenuOutlined />}
        style={{ bottom: ".75rem", right: ".75rem" }}
        shape='circle'
        type='warning'
        trigger='click'
        onOpenChange={(open) => setOpen(open)}
        open={open}
      >

        <FloatButton
          icon={<HomeFilled />}
          onClick={() => { navigator("/"); setOpen(false) }}
        />

        <FloatButton
          icon={<PlayCircleOutlined />}
          onClick={() => { navigator("/discography"); setOpen(false) }}
        />

        <FloatButton
          icon={<MessageFilled />}
          onClick={() => { navigator("/contact_us"); setOpen(false) }}
        />



      </FloatButton.Group>
    </>
  )
}