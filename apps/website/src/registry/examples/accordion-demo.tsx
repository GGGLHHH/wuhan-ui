import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@gedatou/ui'

export default function AccordionDemo() {
  return (
    <Accordion type="single" collapsible className="w-full">
      <AccordionItem value="item-1">
        <AccordionTrigger>什么是 Accordion？</AccordionTrigger>
        <AccordionContent>
          Accordion
          是一种可折叠的内容面板组件，用于在有限空间内展示大量信息。用户可以点击标题来展开或收起对应的内容区域。
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>它支持哪些模式？</AccordionTrigger>
        <AccordionContent>
          支持单选模式（同时只能展开一个面板）和多选模式（可以同时展开多个面板），通过 type
          属性控制。
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>可以自定义样式吗？</AccordionTrigger>
        <AccordionContent>
          可以。每个子组件都支持 className 属性，你可以通过 Tailwind CSS 类名自由定制外观。
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  )
}
