import { Tabs as TabsCN, TabsContent, TabsList } from '../ui/tabs'
import { TabsTrigger } from '@radix-ui/react-tabs'

type TabProps = {
  children: any
  value: string | number
  list: string | any
}

export function Tabs({ children, value, list }: TabProps) {
  return (
    <TabsCN>
        <TabsList>
          {list && list((e:any) => {
              <TabsTrigger value={e}>{`${e}`}</TabsTrigger>
          })}
        </TabsList>
        {list && list((e:any) => {
          <TabsContent value={'e'}>Funciona</TabsContent>})}
    </TabsCN>
  )
}
