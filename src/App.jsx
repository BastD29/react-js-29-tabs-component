
import TabPane from './components/TabPane';
import Tabs from './components/Tabs';

export default function App() {
  return (
    <div className='App'>
      <div className='container'>
        <p>Click on a tab</p>
        <Tabs>
          <TabPane name="Tab 1" key="1">
            Tab 1 content
          </TabPane>
          <TabPane name="Tab 2" key="2">
            Tab 2 content
          </TabPane>
          <TabPane name="Tab 3" key="3">
            Tab 3 content
          </TabPane>
        </Tabs>
      </div>
    </div>
  )
}
