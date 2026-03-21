import { Tabs, TabsContent, TabsList, TabsTrigger } from '@gedatou/ui'

export default function TabsDemo() {
  return (
    <Tabs defaultValue="account" className="w-[400px]">
      <TabsList>
        <TabsTrigger value="account">账户</TabsTrigger>
        <TabsTrigger value="password">密码</TabsTrigger>
      </TabsList>
      <TabsContent value="account">
        <p className="text-muted-foreground text-sm">在此管理你的账户设置和偏好。</p>
      </TabsContent>
      <TabsContent value="password">
        <p className="text-muted-foreground text-sm">在此修改你的密码，建议使用强密码。</p>
      </TabsContent>
    </Tabs>
  )
}
