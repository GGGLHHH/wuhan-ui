import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@gedatou/ui'

export default function TableDemo() {
  const invoices = [
    { invoice: 'INV001', status: '已支付', method: '信用卡', amount: '¥250.00' },
    { invoice: 'INV002', status: '待处理', method: '支付宝', amount: '¥150.00' },
    { invoice: 'INV003', status: '未支付', method: '微信支付', amount: '¥350.00' },
    { invoice: 'INV004', status: '已支付', method: '信用卡', amount: '¥450.00' },
    { invoice: 'INV005', status: '已支付', method: '支付宝', amount: '¥550.00' },
  ]

  return (
    <Table>
      <TableCaption>近期账单列表</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">账单号</TableHead>
          <TableHead>状态</TableHead>
          <TableHead>支付方式</TableHead>
          <TableHead className="text-right">金额</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {invoices.map((invoice) => (
          <TableRow key={invoice.invoice}>
            <TableCell className="font-medium">{invoice.invoice}</TableCell>
            <TableCell>{invoice.status}</TableCell>
            <TableCell>{invoice.method}</TableCell>
            <TableCell className="text-right">{invoice.amount}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}
