import React from 'react';
import connect from '@vkontakte/vk-connect';
import '@vkontakte/vkui/dist/vkui.css';
import {Panel, Group, PanelHeader,
  FormLayout, Select, List, Cell, CellButton,

  HeaderButton, ListItem, platform, IOS} from '@vkontakte/vkui';
import './Persik.css';
import persik from '../img/persik.png';
import Icon28ChevronBack from '@vkontakte/icons/dist/28/chevron_back';
import Icon24Back from '@vkontakte/icons/dist/24/back';
import PropTypes from 'prop-types';
import { YMaps, Map, Placemark } from 'react-yandex-maps';

const osname = platform();

class Way extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      props: props,
      draggingList: [2, 3, 1, 4, 5],
      activePanel: 'start',
    };
  }

  render(){
    return (
      <Panel id={this.props.id}>
      <PanelHeader
        left={<HeaderButton onClick={this.props.go} data-to="start">
          {osname === IOS ? <Icon28ChevronBack/> : <Icon24Back/>}
        </HeaderButton>}>
        </PanelHeader>
               <Group title="Настройте Ваш маршрут">
               <FormLayout>
                <Select top="Количество мест" placeholder="Выберите число мест">
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                  <option value="6">6</option>
                  <option value="7">7</option>
                  <option value="8">8</option>
                  <option value="9">9</option>
                  <option value="10">10</option>
                </Select>
              </FormLayout>
              <List>
                {this.state.draggingList.map((item) => (
                  <Cell key={item} draggable onDragFinish={({ from, to }) => {
                    const draggingList = [...this.state.draggingList];
                    draggingList.splice(from, 1);
                    draggingList.splice(to, 0, this.state.draggingList[from]);
                    this.setState({ draggingList });
                  }}>{item}</Cell>
                ))}
              </List>
               </Group>
               <Group>
               <CellButton expandable onClick={ () => this.setState({ activePanel: 'list' }) }>
                Вернуться обратно
                </CellButton>
                </Group>

      </Panel>
    );
  }
}

Way.propTypes = {
	id: PropTypes.string.isRequired,
	go: PropTypes.func.isRequired
};

export default Way;
