import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@gedatou/ui'

interface PropsTableItem {
  prop: string
  type: string
  default?: string
  description?: string
}

interface PropsTableProps {
  data: PropsTableItem[]
}

export function PropsTable({ data }: PropsTableProps) {
  return (
    <div className="not-prose">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Prop</TableHead>
            <TableHead>Type</TableHead>
            <TableHead>Default</TableHead>
            <TableHead>Description</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.map((item) => (
            <TableRow key={item.prop}>
              <TableCell className="font-mono text-sm font-medium">{item.prop}</TableCell>
              <TableCell className="text-muted-foreground font-mono text-sm">{item.type}</TableCell>
              <TableCell className="font-mono text-sm">{item.default ?? '-'}</TableCell>
              <TableCell className="text-muted-foreground text-sm">
                {item.description ?? '-'}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}
