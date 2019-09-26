<Panel id="nothing">
          <PanelHeader left={<HeaderButton onClick={() => this.setState({ activePanel: 'list' })} >
          {<Icon24Back />}Назад </HeaderButton>}>
           Маршрут
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
