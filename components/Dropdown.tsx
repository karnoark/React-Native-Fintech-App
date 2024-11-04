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
            // androidIconName='ic_list'
            ios={{
              name: 'list.bullet.rectangle.fill',
              pointSize: 24,
            }}
          ></DropDownMenu.ItemIcon>
        </DropDownMenu.Item>
        
        <DropDownMenu.Item key='converter'>
          <DropDownMenu.ItemTitle>Converter</DropDownMenu.ItemTitle>
          <DropDownMenu.ItemIcon
            // androidIconName='ic_list'
            ios={{
              name: 'coloncurrencysign.arrow.circlepath',
              pointSize: 24,
            }}
          ></DropDownMenu.ItemIcon>
        </DropDownMenu.Item>
        
        <DropDownMenu.Item key='background'>
          <DropDownMenu.ItemTitle>Background</DropDownMenu.ItemTitle>
          <DropDownMenu.ItemIcon
            // androidIconName='ic_list'
            ios={{
              name: 'photo.fill',
              pointSize: 24,
            }}
          ></DropDownMenu.ItemIcon>
        </DropDownMenu.Item>
        
        <DropDownMenu.Item key='account'>
          <DropDownMenu.ItemTitle>Add new account</DropDownMenu.ItemTitle>
          <DropDownMenu.ItemIcon
            // androidIconName='ic_list'
            ios={{
              name: 'plus.rectangle.on.folder.fill',
              pointSize: 24,
            }}
          ></DropDownMenu.ItemIcon>
        </DropDownMenu.Item>

        



      </DropDownMenu.Content>
    </DropDownMenu.Root>
  )
}

export default Dropdown