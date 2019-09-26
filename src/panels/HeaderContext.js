import React from 'react';
import PropTypes from 'prop-types';
import { Panel, ListItem, Button, Group, List, Cell, HeaderContext, View, platform,
  PanelHeaderContent,
  HeaderButton, IOS,
	Div, Avatar, PanelHeader } from '@vkontakte/vkui';
import './Persik.css';
import Icon24Settings from '@vkontakte/icons/dist/24/settings';
import Icon24Done from '@vkontakte/icons/dist/24/done';
import Icon24Users from '@vkontakte/icons/dist/24/users';
import Icon28ChevronBack from '@vkontakte/icons/dist/28/chevron_back';
import Icon24Back from '@vkontakte/icons/dist/24/back';
import Icon24Add from '@vkontakte/icons/dist/24/add';
import Icon16Dropdown from '@vkontakte/icons/dist/16/dropdown';

const osname = platform();

class Hc extends React.Component {

  constructor (props) {
    super(props)
    this.state = {
      contextOpened: true,
      mode: 'all'
    }
    this.toggleContext = this.toggleContext.bind(this);
    this.select = this.select.bind(this);
  }

  toggleContext () {
    this.setState({ contextOpened: !this.state.contextOpened });
  }

  select (e) {
    const mode = e.currentTarget.dataset.mode;
    this.setState({ mode });
    requestAnimationFrame(this.toggleContext);
  }

  render () {

    return (
      <View activePanel="context">
        <Panel id="context">
          <PanelHeader
            left={<HeaderButton>{osname === IOS ? <Icon28ChevronBack /> : <Icon24Back />}</HeaderButton>}
            right={<HeaderButton>{<Icon24Add />}</HeaderButton>}
          >
            <PanelHeaderContent aside={<Icon16Dropdown />} onClick={this.toggleContext}>
              Communities
            </PanelHeaderContent>
          </PanelHeader>
          <HeaderContext opened={this.state.contextOpened} onClose={this.toggleContext}>
            <List>
              <Cell
                before={<Icon24Users />}
                asideContent={this.state.mode === 'all' ? <Icon24Done fill="var(--accent)" /> : null}
                onClick={this.select}
                data-mode="all"
              >
                Communities
              </Cell>
              <Cell
                before={<Icon24Settings />}
                asideContent={this.state.mode === 'managed' ? <Icon24Done fill="var(--accent)" /> : null}
                onClick={this.select}
                data-mode="managed"
              >
                Managed Communities
              </Cell>
            </List>
          </HeaderContext>
        </Panel>
      </View>
    )
  }
}

export default Hc;
