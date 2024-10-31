import { View, Text } from 'react-native'
import React from 'react'
import * as DropDownMenu from 'zeego/dropdown-menu'
import RoundBtn from './RoundBtn'

const Dropdown = () => {
  return (
    <DropDownMenu.Root>
      <DropDownMenu.Trigger>
        <RoundBtn icon={'ellipsis-horizontal'} text={'More'} />
      </DropDownMenu.Trigger>

      <DropDownMenu.Content>
        
        <DropDownMenu.Item key='Statement'>
          <DropDownMenu.ItemTitle>Statement</DropDownMenu.ItemTitle>
          <DropDownMenu.ItemIcon
            androidIconName='ic_list'
          ></DropDownMenu.ItemIcon>
        </DropDownMenu.Item>

        



      </DropDownMenu.Content>
    </DropDownMenu.Root>
  )
}

export default Dropdown